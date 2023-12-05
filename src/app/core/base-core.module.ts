import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@core/http/http.module';
import {IonicModule} from '@node-modules/@ionic/angular';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DynamicFormsIonicUIModule} from '@node-modules/@ng-dynamic-forms/ui-ionic';
import {LoadingBarModule, LoadingBarService} from '@node-modules/@ngx-loading-bar/core';
import {LoadingBarRouterModule} from '@node-modules/@ngx-loading-bar/router';
import {Angulartics2Module} from '@node-modules/angulartics2';
import {
    CoreSelectPhotoComponent, CoreSelectPhotoNoTemplateComponent
} from '@core/components/core-select-photo/core-select-photo.component';
import {CoreLoadingBarComponent} from '@core/components/core-loading-bar/core-loading-bar.component';
import {CoreDeeplinksComponent} from '@core/components/core-deeplinks/core-deeplinks.component';
import {
    CoreSecondsCountDownTimerComponent, CoreSecondsCountDownTimerNoTemplateComponent
} from '@core/components/core-seconds-count-down-timer/core-seconds-count-down-timer.component';
import {Toast} from '@node-modules/@ionic-native/toast/ngx';
import {Toast as ToastValue} from '@node-modules/@ionic-native/toast';


import {SocialSharing} from '@node-modules/@awesome-cordova-plugins/social-sharing/ngx';
import {SocialSharing as SocialSharingValue} from '@node-modules/@awesome-cordova-plugins/social-sharing';
import {Deeplinks} from '@node-modules/@awesome-cordova-plugins/deeplinks/ngx';
import {Deeplinks as DeeplinksValue} from '@node-modules/@awesome-cordova-plugins/deeplinks';
import {Media} from '@node-modules/@awesome-cordova-plugins/media/ngx';
import {Media as MediaValue} from '@node-modules/@awesome-cordova-plugins/media';

import {
    CoreShareToComponent, CoreShareToNoTemplateComponent
} from '@core/components/core-share-to/core-share-to.component';
import {
    CorePlayMediaComponent, CorePlayMediaNoTemplateComponent
} from '@core/components/core-play-media/core-play-media.component';
import {CoreClickStopPropogationDirective} from '@core/directives/core-click-stop-propogation.directive';
import {
    CoreAndroidBackButtonComponent, CoreAndroidBackButtonNoTemplateComponent
} from './components/core-android-back-button/core-android-back-button.component';
import {
    CoreSafeAreaManagerNoTemplateComponent
} from '@core/components/core-safe-area-manager/core-safe-area-manager.component';
import { CoreMenuPopOverComponentComponent } from './components/core-menu-pop-over-component/core-menu-pop-over-component.component';
import { CoreMenuPopOverContentComponentComponent } from './components/core-menu-pop-over-component/core-menu-pop-over-content-component/core-menu-pop-over-content-component.component';
import { CoreLoginPopoverComponent } from './components/core-login-popover/core-login-popover.component';
import { CoreLoginPopoverContentComponent } from './components/core-login-popover/core-login-popover-content/core-login-popover-content.component';
import {CoreModule} from '@core/core.module';
import {CoreLogoutModalComponent} from '@core/components/core-logout-modal/core-logout-modal.component';
import {
    CoreLogoutModalContentComponent
} from '@core/components/core-logout-modal/core-logout-modal-content/core-logout-modal-content.component';
import {
    CoreIonicDateTimeButtonFormControlComponent
} from "@core/components/forms/core-ionic-date-time-button-form-control/core-ionic-date-time-button-form-control.component";


@NgModule({
    declarations: [
        CoreSelectPhotoComponent,
        CoreSelectPhotoNoTemplateComponent,
        CoreLoadingBarComponent,
        CoreDeeplinksComponent,
        CoreSecondsCountDownTimerComponent,
        CoreSecondsCountDownTimerNoTemplateComponent,
        CoreShareToComponent,
        CoreShareToNoTemplateComponent,
        CorePlayMediaComponent,
        CorePlayMediaNoTemplateComponent,
        CoreClickStopPropogationDirective,
        CoreAndroidBackButtonComponent,
        CoreAndroidBackButtonNoTemplateComponent,
        CoreSafeAreaManagerNoTemplateComponent,
        CoreMenuPopOverComponentComponent,
        CoreMenuPopOverContentComponentComponent,
        CoreLoginPopoverComponent,
        CoreLoginPopoverContentComponent,
        CoreLogoutModalComponent,
        CoreLogoutModalContentComponent,
        CoreIonicDateTimeButtonFormControlComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        IonicModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        DynamicFormsIonicUIModule,
        LoadingBarModule,
        LoadingBarRouterModule,
        Angulartics2Module,
    ],
    exports: [
        CommonModule,
        HttpModule,
        IonicModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        DynamicFormsIonicUIModule,
        LoadingBarModule,
        LoadingBarRouterModule,
        Angulartics2Module,
        CoreSelectPhotoComponent,
        CoreSelectPhotoNoTemplateComponent,
        CoreLoadingBarComponent,
        CoreDeeplinksComponent,
        CoreSecondsCountDownTimerComponent,
        CoreSecondsCountDownTimerNoTemplateComponent,
        CoreShareToComponent,
        CoreShareToNoTemplateComponent,
        CorePlayMediaComponent,
        CorePlayMediaNoTemplateComponent,
        CoreClickStopPropogationDirective,
        CoreAndroidBackButtonComponent,
        CoreAndroidBackButtonNoTemplateComponent,
        CoreSafeAreaManagerNoTemplateComponent,
        CoreMenuPopOverComponentComponent,
        CoreMenuPopOverContentComponentComponent,
        CoreLoginPopoverComponent,
        CoreLoginPopoverContentComponent,
    ],
    providers: [
        {provide: Toast, useValue: ToastValue},
        {provide: SocialSharing, useValue: SocialSharingValue},
        {provide: Deeplinks, useValue: DeeplinksValue},
        {provide: Media, useValue: MediaValue},
        {provide: LoadingBarService, useClass: LoadingBarService},
    ]
})
export class BaseCoreModule {
}

