import {Inject, Injectable, InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    HTTP_INTERCEPTORS, HttpBackend, HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest,
    HttpResponse
} from '@angular/common/http';

import {environment} from '@environment/environment';
import {CommonsService} from '@core/commons.service';
import {Core} from '@core/core.models';
import * as HttpStatus from 'http-status-codes';
import {HttpNotifications} from '@core/http/http.constants';
import {Observable, of} from 'rxjs';
import {catchError, concatMap, delay, finalize, share, tap} from 'rxjs/operators';
import {NgHttpCachingHeaders, NgHttpCachingService} from '@core/rg-http-caching/ng-http-caching-service.service';
import {RgHttpCachingModule} from '@core/rg-http-caching/rg-http-caching.module';
import {CustomNgHttpCachingService} from '@core/core.constants';
import {AuthService} from '@core/auth.service';
import HttpError = Core.HttpError;


export class InterceptingHandler implements HttpHandler {

    private chain: HttpHandler;


    constructor(private backend: HttpBackend, private interceptors: HttpInterceptor[]) {
        this.buildChain();
    }

    handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
        return this.chain.handle(req);
    }

    private buildChain(): void {
        this.chain = this.interceptors.reduceRight((next, interceptor) =>
                new InterceptorHandler(next, interceptor),
            this.backend
        );
    }
}


export const CORE_HTTP_INTERCEPTORS = new InjectionToken<HttpInterceptor[]>(
    'An abstraction on feature HttpInterceptor[]'
);


export class InterceptorHandler implements HttpHandler {

    constructor(private next: HttpHandler, private interceptor: HttpInterceptor) {
    }

    handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
        return this.interceptor.intercept(req, this.next);
    }
}


@Injectable()
export class CoreHttpClient extends HttpClient {
    constructor(
        backend: HttpBackend,
        @Inject(HTTP_INTERCEPTORS) interceptors: HttpInterceptor[],
        @Inject(CORE_HTTP_INTERCEPTORS) featureInterceptors: HttpInterceptor[],
    ) {
        // super(new InterceptingHandler(
        //     backend,
        //     [interceptors, featureInterceptors].flat()
        // ));
        const mergedInterceptors = interceptors.concat(...featureInterceptors);

        super(new InterceptingHandler(backend, mergedInterceptors));
    }
}

@Injectable()
export class CommonHttpInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request);
    }
}

@Injectable()
export class InvitationApiUrlInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const apiReq = request.clone({url: `${environment.apiUrls.baseUrl}${request.url}`});
        return next.handle(apiReq);
    }
}

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
    constructor(protected authService: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const url = request.url;
        return CommonsService.promiseToObservable(this.authService.getUserAuthToken()).pipe(concatMap(
            token => {
                const headers = {};
                // headers['Authorization'] = `Bearer 18ee797a-9587-4e33-b33d-275b327fcc42`;
                headers['Authorization'] = `Bearer ${token.user_auth_token}`;
                request = request.clone({
                    headers: new HttpHeaders(headers)
                });
                return next.handle(request);
            }), catchError(error => {
            return next.handle(request);
        }));
    }
}


export const NgHttpCachingHeadersListNew = Object.values(NgHttpCachingHeaders);

@Injectable()
export class NgHttpCachingInterceptorServiceNew implements HttpInterceptor {
    constructor(private readonly cacheService: NgHttpCachingService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // run garbage collector
        this.cacheService.runGc();

        // Don't cache if it's not cacheable
        if (!this.cacheService.isCacheable(req)) {
            return this.sendRequest(req, next);
        }

        // Checked if there is pending response for this request
        const cachedObservable: Observable<HttpEvent<any>> | undefined = this.cacheService.getFromQueue(req);
        if (cachedObservable) {
            // console.log('cachedObservable', req);
            return cachedObservable;
        }

        // Checked if there is cached response for this request
        const cachedResponse: HttpResponse<any> | undefined = this.cacheService.getFromCache(req);
        if (cachedResponse) {
            // console.log('cachedResponse', req);
            return of(cachedResponse).pipe(delay(1));
        }

        // If the request of going through for first time
        // then let the request proceed and cache the response
        // console.log('sendRequest', req);
        const shared = this.sendRequest(req, next).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    this.cacheService.addToCache(req, event.clone());
                }
            }),
            finalize(() => {
                // delete pending request
                this.cacheService.deleteFromQueue(req);
            }),
            share()
        );

        // add pending request to queue for cache parallell request
        this.cacheService.addToQueue(req, shared);
        return shared;
    }

    /**
     * Send http request (next handler)
     */
    sendRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let cloned: HttpRequest<any> = req.clone();
        // trim custom headers before send request
        NgHttpCachingHeadersListNew.forEach(ngHttpCachingHeaders => {
            if (cloned.headers.has(ngHttpCachingHeaders)) {
                cloned = cloned.clone({headers: cloned.headers.delete(ngHttpCachingHeaders)});
            }
        });
        return next.handle(cloned);
    }
}


@NgModule({
    imports: [
        CommonModule,
        RgHttpCachingModule

    ],
    declarations: [],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NgHttpCachingInterceptorServiceNew,
            multi: true,
        },
        {provide: NgHttpCachingService, useClass: CustomNgHttpCachingService}
    ]
})
export class HttpModule {
}

export function RestangularConfigFactory(RestangularProvider, notificationsService) {

    RestangularProvider.setBaseUrl(environment.apiUrls.baseUrl);
    RestangularProvider.setPlainByDefault(true);

    RestangularProvider.addErrorInterceptor((response, subject, responseHandler) => {
        const errorMessage: HttpError = CommonsService.deserialize(response.data || {}, HttpError);
        if (errorMessage && errorMessage.error_status && errorMessage.error_status !== HttpStatus.NOT_FOUND &&
            !HttpNotifications.isInIgnoreUrl(response.url)) {
            notificationsService.error(errorMessage.message);
        }
        return true;
    });

}

