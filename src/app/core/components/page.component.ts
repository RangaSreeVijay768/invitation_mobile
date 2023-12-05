import {ActivatedRoute, Data, Params, QueryParamsHandling} from '@angular/router';
import {BaseComponent} from '@core/components/base.component';
import {Directive, Injector, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';
import {NavigationOptions} from '@ionic/angular/providers/nav-controller';

@Directive()
export abstract class PageComponent extends BaseComponent {

    activatedRoute: ActivatedRoute;
    routeParams: any;

    // @ViewChildren('adComponent')
    // adComponents: QueryList<AdComponent>;
    @ViewChildren('refreshComponent')
    refreshComponents: QueryList<BaseComponent>;


    constructor(injector: Injector) {
        super(injector);
        this.activatedRoute = injector.get(ActivatedRoute);
        this.routeParams = {};
    }

    getRouterParameterObservable<T>(name: string, route?: ActivatedRoute): Observable<T> {
        route = route || this.activatedRoute;
        return route.data.pipe(pluck<Data, T>(name));
    }

    getRouterParameterFromParentObservable<T>(name: string, parentLevel: number): Observable<T> {
        let currentParent: ActivatedRoute = this.activatedRoute;
        let currentParentSnapshot = this.activatedRoute.snapshot;
        for (let i = 0; i < parentLevel; i++) {
            console.log(currentParentSnapshot);
            currentParentSnapshot = currentParentSnapshot.parent;

            if (currentParentSnapshot == null) {
                throw new Error('No more parents after the level ' + parentLevel);
            }
            // currentParent = currentParent.parent;

        }
        let route = this.activatedRoute.root;
        while (true) {
            if (route.routeConfig && route.routeConfig.path === currentParentSnapshot.routeConfig.path) {
                return this.getRouterParameterObservable(name, route);
            } else {
                route = route.firstChild;
                if (!route) {
                    throw new Error('unable to find parent for this route. Dont know how this could happen');
                }
            }

        }
    }

    reloadPage() {
        this.redirectToDummyPageAndReturn();
    }

    hardReloadPage() {
        window.location.reload();
    }

    redirectToDummyPageAndReturn() {
        // This is needed to maintain navigation history.
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        const url = this.router.url;
        this.router.navigateByUrl('/signedin/dummy', {skipLocationChange: true}).then(succes => {
            this.navCtrl.navigateForward(url);
        });
    }

    getQueryParameterObservable<T>(name: string): Observable<T> {
        return this.activatedRoute.queryParams.pipe(pluck<Data, T>(name));
    }

    updateQueryParams(queryParams: Params, queryParamsHandling: QueryParamsHandling = 'merge') {
        this.router.navigate(
            [],
            {
                relativeTo: this.activatedRoute,
                queryParams: queryParams,
                queryParamsHandling: queryParamsHandling
            });
    }

    // noinspection TsLint
    ngOnInit() {
        this.routeParams = this.activatedRoute.snapshot.data;
        this.ionicPlatform.ready().then(success => {
            this.platformReady.emit(success);
        });

        super.ngOnInit();
    }

    //
    // hideAds() {
    //     if (this.adComponents) {
    //         this.adComponents.forEach(component => {
    //             component.hideAd();
    //         });
    //     }
    // }
    //
    // ionViewDidLeave() {
    //     this.hideAds();
    // }

    // ionViewDidEnter() {
    //     this.showAds();
    // }

    navigateToViaUrl(url: string, options?: NavigationOptions) {
        this.navCtrl.navigateForward(url, options);
    }

    navigateAndSetRoot(url: string, option?: NavigationOptions) {
        this.navCtrl.navigateRoot(url, option);
    }

    //
    // private showAds() {
    //     if (this.adComponents) {
    //         this.adComponents.forEach(component => {
    //             component.showAd();
    //         });
    //     }
    // }
}
