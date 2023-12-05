import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';
import {UsersRequests} from '@users/users.models';
import GetOrCreateUserAccountAndStartLogin = UsersRequests.GetOrCreateUserAccountAndStartLogin;
import {UsersService} from '@users/users.service';

@Component({
    selector: 'users-get-or-create-user-account-and-start-login',
    templateUrl: './users-get-or-create-user-account-and-start-login.component.html',
    styleUrls: ['./users-get-or-create-user-account-and-start-login.component.scss']
})
export class UsersGetOrCreateUserAccountAndStartLoginComponent extends BaseComponent {

    constructor(protected usersService: UsersService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(): GetOrCreateUserAccountAndStartLogin.Request {
        let request = new GetOrCreateUserAccountAndStartLogin.Request();
        return request;
    }

    get_or_create_user_account_and_start_login_subscription$: Subscription;

    getOrCreateUserAccountAndStartLogin(request: GetOrCreateUserAccountAndStartLogin.Request) {
        this.get_or_create_user_account_and_start_login_subscription$ = this.usersService.getOrCreateUserAccountAndStartLogin(request)
            .pipe(CommonsService.deserializeMap(GetOrCreateUserAccountAndStartLogin.Response))
            .subscribe(value => {
            });
    }

}

@Component({
    selector: 'users-get-or-create-user-account-and-start-login-no-template',
    templateUrl: './users-get-or-create-user-account-and-start-login-no-template.component.html',
    styleUrls: ['./users-get-or-create-user-account-and-start-login.component.scss']
})
export class UsersGetOrCreateUserAccountAndStartLoginNoTemplateComponent extends UsersGetOrCreateUserAccountAndStartLoginComponent
{
}
