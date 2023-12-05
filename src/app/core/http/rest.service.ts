import {CommonsService} from '@core/commons.service';
import {NgHttpCachingHeaders} from '@core/rg-http-caching/ng-http-caching-service.service';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class RestService {

    end_point: string;
    secured_end_point: string;

    constructor(protected httpClient: HttpClient) {

    }


    getEndPoint() {
        return `${this.end_point || ''}`;
    }

    getSecuredEndPoint(): string {
        return `${this.secured_end_point || ''}`;
    }

    serialize(obj): any {
        return CommonsService.serialize(obj);
    }

    getNoCacheHeader(no_cache?: boolean) {
        let allow_cache = NgHttpCachingHeaders.ALLOW_CACHE;
        if (no_cache) {
            allow_cache = NgHttpCachingHeaders.DISALLOW_CACHE;
        }
        return {
            [allow_cache]: '1',
        };
    }
}
