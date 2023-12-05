import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {UsersSignInFormComponent} from '@users/components/users-sign-in-form/users-sign-in-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from '@core/core.module';
import {UsersSignUpFormComponent} from './components/users-sign-up-form/users-sign-up-form.component';
import {
    UsersForgetPasswordFormComponent
} from './components/users-forget-password-form/users-forget-password-form.component';
import { UsersSigninPageComponent } from './pages/users-signin-page/users-signin-page.component';
import {RouterModule} from '@angular/router';
import {USER_ROUTES} from '@users/users.routes';
import { UsersSigninWithOtpComponent } from './pages/users-signin-with-otp/users-signin-with-otp.component';
import { UsersSigninWithOtpFormComponent } from './components/users-signin-with-otp-form/users-signin-with-otp-form.component';
import { UsersSigninWithOtpSliderComponent } from './components/users-signin-with-otp-slider/users-signin-with-otp-slider.component';
import { UsersSignupPageComponent } from './pages/users-signup-page/users-signup-page.component';
import { UsersVerifyUserAccountVerificationLoginFormComponent } from './components/users-verify-user-account-verification-login-form/users-verify-user-account-verification-login-form.component';
import { UsersUserSignupSliderComponent } from './components/users-user-signup-slider/users-user-signup-slider.component';
import { UsersVerifyUserAccountFormComponent } from './components/users-verify-user-account-form/users-verify-user-account-form.component';
import {
    UserProfilesGetUserFollowByUserAccountAndFollowerAccountNoTemplateComponent
} from '@user-profiles/components/user-profiles-get-user-follow-by-user-account-and-follower-account/user-profiles-get-user-follow-by-user-account-and-follower-account.component';
import {
    UserProfilesCreateUserFollowNoTemplateComponent
} from '@user-profiles/components/user-profiles-create-user-follow/user-profiles-create-user-follow.component';
import {
    UserProfilesDeleteUserFollowNoTemplateComponent
} from '@user-profiles/components/user-profiles-delete-user-follow/user-profiles-delete-user-follow.component';
import {
    UsersUpdateUserAccountFormComponent
} from '@users/components/users-update-user-account-form/users-update-user-account-form.component';
import {
    UsersGetOrCreateUserAccountAndStartLoginComponent, UsersGetOrCreateUserAccountAndStartLoginNoTemplateComponent
} from './components/users-get-or-create-user-account-and-start-login/users-get-or-create-user-account-and-start-login.component';
import { UsersGetOrCreateUserAccountAndStartLoginFormComponent } from './components/users-get-or-create-user-account-and-start-login-form/users-get-or-create-user-account-and-start-login-form.component';
import {ImagesModule} from '@images/images.module';
import {UserProfilesModule} from '@user-profiles/user-profiles.module';
import {UsersService} from '@users/users.service';
import {UsersForgotPasswordSliderComponent} from '@users/components/users-forgot-password-slider/users-forgot-password-slider.component';
import {
    UsersUpdateUserAccountDetailsComponent, UsersUpdateUserAccountDetailsNoTemplateComponent
} from './components/users-update-user-account-details/users-update-user-account-details.component';

@NgModule({
    declarations: [
        UsersSignInFormComponent,
        UsersSignUpFormComponent,
        UsersForgetPasswordFormComponent,
        UsersSigninPageComponent,
        UsersSigninWithOtpComponent,
        UsersSigninWithOtpFormComponent,
        UsersSigninWithOtpSliderComponent,
        UsersSignupPageComponent,
        UsersVerifyUserAccountVerificationLoginFormComponent,
        UsersUserSignupSliderComponent,
        UsersVerifyUserAccountFormComponent,
        UsersUpdateUserAccountFormComponent,
        UsersGetOrCreateUserAccountAndStartLoginComponent,
        UsersGetOrCreateUserAccountAndStartLoginNoTemplateComponent,
        UsersGetOrCreateUserAccountAndStartLoginFormComponent,
        UsersForgotPasswordSliderComponent,
        UsersUpdateUserAccountDetailsNoTemplateComponent,
        UsersUpdateUserAccountDetailsComponent
    ],
    imports: [
        ReactiveFormsModule,
        CoreModule,
        RouterModule.forChild(USER_ROUTES),
        ImagesModule,
    ],
    exports: [
        UsersSignInFormComponent,
        UsersSignUpFormComponent,
        UsersForgetPasswordFormComponent,
        UsersForgetPasswordFormComponent,
        UsersUpdateUserAccountFormComponent,
        UsersForgotPasswordSliderComponent,
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class UsersModule {
}
