import {CUSTOM_ELEMENTS_SCHEMA, NgModule, Type} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IonicStorageModule} from '@ionic/storage-angular';
import {
    CommonHttpInterceptor, CORE_HTTP_INTERCEPTORS, CoreHttpClient, InvitationApiUrlInterceptor
} from '@core/http/http.module';
import {Angulartics2Module} from 'angulartics2';
import {LOADING_BAR_CONFIG} from '@node-modules/@ngx-loading-bar/core';
import {BaseCoreModule} from '@core/base-core.module';
import {NG_VALIDATORS} from '@angular/forms';
import {FormValidations} from '@core/form.validations';
import {
    DYNAMIC_FORM_CONTROL_MAP_FN, DYNAMIC_VALIDATORS, DynamicFormControl, Validator, ValidatorFactory
} from '@node-modules/@ng-dynamic-forms/core';
import {CoreModule} from '@core/core.module';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {LocalStorageService, SessionStorageService} from 'ngx-store';
import {GetEventInfoResolver, GetUserEventInfoResolver} from '@events/events.resolvers';
import {register} from '@node-modules/swiper/swiper-element';

import {PROMISE_BUTTON_MODULE_OPTIONS} from '@core/core.constants';
import {Angular2PromiseButtonModule} from '@core/external/angular2-promise-buttons';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {
    FORM_CONTROL_TYPE_CORE_GOOGLE_ADDRESS_AUTO_COMPLETION
} from '@core/components/forms/core-google-address-auto-completion-form-control/core-google-address-auto-completion-form-control.model';
import {
    CoreGoogleAddressAutoCompletionFormControlComponent
} from '@core/components/forms/core-google-address-auto-completion-form-control/core-google-address-auto-completion-form-control.component';
import {GetUserAccountResolver} from '@user-profiles/user-profiles.resolvers';
import {
    FORM_CONTROL_TYPE_CORE_CORE_IONIC_DATE_TIME_BUTTON
} from "@core/components/forms/core-ionic-date-time-button-form-control/core-ionic-date-time-button-form-control.model";
import {
    CoreIonicDateTimeButtonFormControlComponent
} from "@core/components/forms/core-ionic-date-time-button-form-control/core-ionic-date-time-button-form-control.component";

register();

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        IonicStorageModule.forRoot(),
        IonicModule.forRoot(),
        Angulartics2Module.forRoot(),
        AppRoutingModule,
        BaseCoreModule,
        CoreModule,
        Angular2PromiseButtonModule.forRoot(PROMISE_BUTTON_MODULE_OPTIONS),

    ],
    providers: [
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: LOADING_BAR_CONFIG, useValue: {latencyThreshold: 400}},
        {
            provide: NG_VALIDATORS,
            useValue: FormValidations.emailValidator,
            multi: true
        },
        {
            provide: DYNAMIC_VALIDATORS,
            useValue: new Map<string, Validator | ValidatorFactory>([
                [
                    'emailValidator',
                    FormValidations.emailValidator
                ],
                [
                    'mobileNumberValidator',
                    FormValidations.mobileNumberValidator
                ],
            ])
        },
        InvitationApiUrlInterceptor,
        CommonHttpInterceptor,
        CoreHttpClient,
        SessionStorageService,
        LocalStorageService,
        HttpClient,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CommonHttpInterceptor,
            multi: true,
        },

        {
            provide: CORE_HTTP_INTERCEPTORS,
            useClass: InvitationApiUrlInterceptor,
            multi: true,
        },
        {
            provide: DYNAMIC_FORM_CONTROL_MAP_FN,
            useValue: (model: DynamicFormControlModel): Type<DynamicFormControl> | null => {
                switch (model.type) {
                    case FORM_CONTROL_TYPE_CORE_GOOGLE_ADDRESS_AUTO_COMPLETION:
                        return CoreGoogleAddressAutoCompletionFormControlComponent;
                    case FORM_CONTROL_TYPE_CORE_CORE_IONIC_DATE_TIME_BUTTON:
                        return CoreIonicDateTimeButtonFormControlComponent;
                }
            }
        },
        GetUserEventInfoResolver,
        GetEventInfoResolver,
        GetUserAccountResolver

    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
