import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {BasicLoginPageComponent} from './pages/basic-login-page/basic-login-page.component';
import {UsersModule} from '@users/users.module';
import {LandingComponent} from '@basic/components/landing/landing.component';
import {TopNavComponent, TopNavLoginComponent} from '@basic/components/top-nav/top-nav.component';
import {BasicSignUpPageComponent} from './pages/basic-sign-up-page/basic-sign-up-page.component';
import {NewLoginPageComponent} from './pages/new-login-page/new-login-page.component';
import {NewSignupPageComponent} from './pages/new-signup-page/new-signup-page.component';
import {BasicLandingPageComponent} from './pages/basic-landing-page/basic-landing-page.component';
import {BasicHomePageComponent} from './pages/basic-home-page/basic-home-page.component';
import {ImagesModule} from '@images/images.module';
import {AccordionStaticComponent} from './components/accordion-static/accordion-static.component';
import {
    BasicForgetPasswordPageComponent
} from './pages/basic-forget-password-page/basic-forget-password-page.component';
import {BasicMainPageComponent} from './pages/basic-main-page/basic-main-page.component';
import {
    BasicEventsEventDetailsPageComponent
} from '@basic/pages/basic-events-event-details-page/basic-events-event-details-page.component';
import {RouterModule} from '@angular/router';
import {BASIC_ROUTES} from '@basic/basic.routes';
import {GetEventInfoResolver} from '@events/events.resolvers';
import {
    BasicEventsGetAllEventInfosNoTemplateComponent
} from './components/basic-events-get-all-event-infos-no-template/basic-events-get-all-event-infos-no-template.component';
import {EventsCommonModule} from '@events/events.common.module';
import {
    BasicVerifyUserWhenUserComesFromLinkModalComponent
} from '@basic/components/basic-verify-user-when-user-comes-from-link-modal/basic-verify-user-when-user-comes-from-link-modal.component';
import {
    BasicVerifyUserWhenUserComesFromLinkModalContentComponent
} from '@basic/components/basic-verify-user-when-user-comes-from-link-modal/basic-verify-user-when-user-comes-from-link-modal-content/basic-verify-user-when-user-comes-from-link-modal-content.component';
import {
    BasicVerifyUserWhenUserComesFromLinkSwiperComponent
} from '@basic/components/basic-verify-user-when-user-comes-from-link-swiper/basic-verify-user-when-user-comes-from-link-swiper.component';
import {
    BasicVerifyUserWithVerificationCodeBeforeLoginModalComponent
} from '@basic/components/basic-verify-user-with-verification-code-before-login-modal/basic-verify-user-with-verification-code-before-login-modal.component';
import {
    BasicVerifyUserWithVerificationCodeBeforeLoginModalContentComponent
} from '@basic/components/basic-verify-user-with-verification-code-before-login-modal/basic-verify-user-with-verification-code-before-login-modal-content/basic-verify-user-with-verification-code-before-login-modal-content.component';
import {
    BasicUserInfoBeforeLoginFormComponent
} from '@basic/components/basic-user-info-before-login-form/basic-user-info-before-login-form.component';
import {
    BasicVerifyUserWithVerificationCodeBeforeLoginFormComponent
} from '@basic/components/basic-verify-user-with-verification-code-before-login-form/basic-verify-user-with-verification-code-before-login-form.component';
import {
    BasicUsersForgotPasswordPageComponent
} from '@basic/pages/basic-users-forgot-password-page/basic-users-forgot-password-page.component';

@NgModule({
    declarations: [
        LandingComponent,
        BasicLoginPageComponent,
        TopNavComponent,
        BasicSignUpPageComponent,
        NewLoginPageComponent,
        NewSignupPageComponent,
        BasicLandingPageComponent,
        BasicHomePageComponent,
        TopNavLoginComponent,
        AccordionStaticComponent,
        BasicForgetPasswordPageComponent,
        BasicMainPageComponent,
        BasicEventsEventDetailsPageComponent,
        BasicEventsGetAllEventInfosNoTemplateComponent,
        BasicVerifyUserWhenUserComesFromLinkModalComponent,
        BasicVerifyUserWhenUserComesFromLinkModalContentComponent,
        BasicVerifyUserWhenUserComesFromLinkSwiperComponent,
        BasicVerifyUserWithVerificationCodeBeforeLoginModalComponent,
        BasicVerifyUserWithVerificationCodeBeforeLoginModalContentComponent,
        BasicUserInfoBeforeLoginFormComponent,
        BasicVerifyUserWithVerificationCodeBeforeLoginFormComponent,
        BasicUsersForgotPasswordPageComponent
    ],
    imports: [
        CoreModule,
        RouterModule.forChild(BASIC_ROUTES),
        UsersModule,
        ImagesModule,
        EventsCommonModule,
    ],
    exports: [
        LandingComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        GetEventInfoResolver
    ]
    // entryComponents: []
})

export class BasicModule {
}
