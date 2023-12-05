import {Component, EventEmitter, Injector, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {FormComponent} from "@core/components/form.component";
import {DynamicFormControlModel} from "@ng-dynamic-forms/core";
import {BASIC_USER_INFO_FORM_LAYOUT, BASIC_USER_INFO_FORM_MODEL} from '@basic/basic.form.model';
import {UsersRequests} from '@users/users.models';
import {Users} from '@core/core.models';
import {UsersService} from '@users/users.service';
import StartLogin = UsersRequests.StartLogin;
import MessageDelivery = Users.MessageDelivery;
import UserAuthToken = Users.UserAuthToken;

@Component({
    selector: 'basic-user-info-before-login-form',
    templateUrl: './basic-user-info-before-login-form.component.html',
    styleUrls: ['./basic-user-info-before-login-form.component.scss']
})
export class BasicUserInfoBeforeLoginFormComponent extends FormComponent {

    constructor(protected usersService: UsersService, injector: Injector) {
        super(injector);
    }

    formLayout = BASIC_USER_INFO_FORM_LAYOUT;

    messageDelivery: MessageDelivery;

    @Output()
    userSignInStarted = new EventEmitter<StartLogin.Response>();

    @Output()
    userAuthTokenReceived = new EventEmitter<UserAuthToken>();


    @Output()
    messageDeliveryReceived = new EventEmitter<MessageDelivery>();

    initializeComponent() {
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return BASIC_USER_INFO_FORM_MODEL();
    }

    createRequestData(): StartLogin.Request {
        const request = new StartLogin.Request();
        if (this.getInputModelValueAsString('email').length === 10) {
            request.phone_number = this.getInputModelValueAsString('email');
        } else {
            request.email_id = this.getInputModelValueAsString('email');
        }
        // request.email_id = this.getInputModelValueAsString('email');
        return request;
    }

    start_login_subscription$: Subscription;

    startLogin(request: StartLogin.Request) {
        // this.coreTestHttpClient.post('test', {});
        this.start_login_subscription$ = this.usersService.getOrCreateUserAccountAndStartLogin(request)
            .pipe(CommonsService.deserializeMap(StartLogin.Response))
            .subscribe(value => {
                console.log(value);
                this.userSignInStarted.emit(value);
                // this.user_auth_token = value;
                console.log('emitted', this.messageDeliveryReceived);
                this.userAuthTokenReceived.emit(value);
                this.messageDelivery = value;
                console.log('messageDelivery', this.messageDelivery);
                this.messageDeliveryReceived.emit(value);
            });
    }
}
