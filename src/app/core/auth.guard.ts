import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService, RedirectState} from '@core/auth.service';
import iddfs from 'iddfs';
import {render} from 'micromustache';
import {CommonsService} from '@core/commons.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(protected authService: AuthService, protected router: Router) {
    }

    async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Promise<boolean> {
        // tslint:disable-next-line:variable-name
        // const _AuthGuard = this;
        // return true;
        const auth_token = await this.authService.getUserAuthToken();
        await this.authService.getLoggedAccount();
        if (!auth_token) {
            this.authService.clearAll();
            this.authService.redirectState = new RedirectState(state.url, next.queryParams);
            return this.redirectToEntityOrDefault(next, this);
        }
        // if (CommonsService.getCurrentTimeAsDateTime() > (auth_token.expires_at)) {
        //     return true;
        // }
        if (CommonsService.getCurrentTimeAsDateTime()) {
            return true;
        }
        this.authService.clearAll();
        this.authService.redirectState = new RedirectState(state.url, next.queryParams);
        return this.redirectToEntityOrDefault(next, this);

    }

    canActivateChild(childRoute: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.canActivate(childRoute, state);
    }

    redirectToEntityOrDefault(next: ActivatedRouteSnapshot, auth_guard: AuthGuard): Promise<boolean> {
        return iddfs({
            initialNode: next,
            isGoal: (node: ActivatedRouteSnapshot) => {
                if (!CommonsService.isNullOrUndefined(node.component) &&
                    // @ts-ignore
                    typeof node.component.prototype.getLoggedOutRouterUrl === 'function') {
                    // @ts-ignore
                    return !CommonsService.isNullOrUndefined(node.component.prototype.getLoggedOutRouterUrl(node));
                }
                return false;
            },
            expand: (node) => node.children,
            extractId: (node) => node,
            maxDepth: 10,
        })
            .then((success: ActivatedRouteSnapshot) => {
                let url = '/basic/signin';
                if (success) {
                    // @ts-ignore
                    const templateUrl = success.component.prototype.getLoggedOutRouterUrl(success);
                    url = render(templateUrl, success.params);
                }
                auth_guard.router.navigateByUrl(url);
                return Promise.resolve(false);
            });
    }
}
