import {ActivatedRouteSnapshot, NavigationExtras, Router} from '@angular/router';
import {Injector} from '@angular/core';
import {AuthService} from '@core/auth.service';
import {NotificationsService} from '@core/notifications.service';

export abstract class AbstractGuard {

    protected router: Router;
    protected injector: Injector;

    protected authService: AuthService;

    protected notificationsService: NotificationsService;

    constructor(injector: Injector) {
        this.injector = injector;
        this.router = injector.get(Router);
        this.authService = injector.get(AuthService);
        this.notificationsService = injector.get(NotificationsService);
    }

    /*
    * Filters and remove empty path in parent roots and returns resolved path
    */
    protected getResolvedUrl(route: ActivatedRouteSnapshot): string {
        return '/' + route.pathFromRoot
            .filter(v => v.url.length)
            .map(v => v.url.map(segment => segment.toString())
                .join('/'))
            .join('/');
    }

    protected getConfiguredUrl(route: ActivatedRouteSnapshot): string {
        return '/' + route.pathFromRoot
            .filter(v => v.routeConfig)
            .map(v1 => v1.routeConfig ? v1.routeConfig.path : '')
            .join('/');
    }

    protected navigate(route: ActivatedRouteSnapshot, extras?: NavigationExtras): Promise<boolean> {
        return this.router.navigateByUrl(this.getResolvedUrl(route), extras);
    }

    protected navigateByUrl(url: string, extras?: NavigationExtras): Promise<boolean> {
        return this.router.navigateByUrl(url, extras);
    }

    protected navigateAndReturn(return_value: boolean, route: ActivatedRouteSnapshot, extras?: NavigationExtras): boolean {
        this.navigate(route, extras);
        return return_value;
    }

    protected getRouteParameter(route_snap_shot: ActivatedRouteSnapshot, name) {
        return route_snap_shot.data[name];
    }

    protected getRouteParameterFromParams(route_snap_shot: ActivatedRouteSnapshot, name) {
        return route_snap_shot.params[name];
    }

    protected getRouterParameterFromParent(route_snap_shot: ActivatedRouteSnapshot, name, parentLevel) {
        let currentParent: ActivatedRouteSnapshot = route_snap_shot;

        for (let i = 0; i < parentLevel; i++) {
            currentParent = currentParent.parent;
            if (currentParent == null) {
                throw new Error('No more parents after the level ' + parentLevel);
            }
        }
        return currentParent.params[name];

    }

    protected getCurrentUrl(route: ActivatedRouteSnapshot) {
        return route.url[0].path;
    }
}
