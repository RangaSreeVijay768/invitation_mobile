import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {
    CoreFormValidationMessageComponent
} from '@core/components/core-form-validation-message/core-form-validation-message.component';
import {CoreNumberFlipDirective} from '@core/directives/core-flip.directive';
import {CoreConfirmDirective} from '@core/directives/core-confirm.directive';
import {
    CoreAppDetailsComponent, CoreAppDetailsNoTemplateComponent
} from '@core/components/core-app-details/core-app-details.component';
import {
    CoreModalFooterComponent, CoreModalFooterDoubleButtonComponent
} from '@core/components/modals/core-modal-footer/core-modal-footer.component';
import {CoreMenuFooterComponent} from './components/core-menu-footer/core-menu-footer.component';
import {CoreModalHeaderComponent} from '@core/components/modals/core-modal-header/core-modal-header.component';
import {
    CoreGetAppPermissionInfoComponent, CoreGetAppPermissionInfoNoTemplateComponent
} from './components/core-get-app-permission-info/core-get-app-permission-info.component';
import {
    CoreRequestAppPermissionComponent, CoreRequestAppPermissionNoTemplateComponent
} from './components/core-request-app-permission/core-request-app-permission.component';
import {BaseCoreModule} from '@core/base-core.module';
import {NgxClampModule} from '@node-modules/ngx-clamp';
import {CoreSelectFileComponent} from '@core/components/core-select-file/core-select-file.component';
import {IonicModule} from '@ionic/angular';
import {
    AppDateFormatPipe, AppDateTimeToDefaultDateTimeFormatPipe, AppDateTimeToTimeFormatPipe, AppEnumToHumanReadablePipe
} from '@core/core.pipe';
import {
    CoreUpdateContentMetaComponent, CoreUpdateContentMetaNoTemplateComponent
} from '@core/components/core-update-content-meta/core-update-content-meta.component';
import {ClipboardModule} from 'ngx-clipboard';
import {Angular2PromiseButtonModule} from '@core/external/angular2-promise-buttons';
import {PROMISE_BUTTON_MODULE_OPTIONS} from '@core/core.constants';
import {EventsEventTicketInfosToMaxPricePipe, EventsEventTicketInfosToMinPricePipe} from '@events/events.pipe';
import {CoreLogoutModalComponent} from './components/core-logout-modal/core-logout-modal.component';
import {
    CoreLogoutModalContentComponent
} from './components/core-logout-modal/core-logout-modal-content/core-logout-modal-content.component';
import {
    CoreDateTimePickerButtonComponent,
    CoreDateTimePickerComponent, CoreDateTimePickerCronComponent, CoreDateTimePickerLabelComponent, CoreDateTimePickerNoStyleComponent
} from '@core/components/core-picker/core-date-time-picker/core-date-time-picker.component';
import
{
    CoreGoogleAddressAutoCompletionFormControlComponent
} from '@core/components/forms/core-google-address-auto-completion-form-control/core-google-address-auto-completion-form-control.component';


@NgModule({
    declarations: [
        CoreFormValidationMessageComponent,
        CoreNumberFlipDirective,
        CoreConfirmDirective,
        CoreAppDetailsComponent,
        CoreModalFooterDoubleButtonComponent,
        CoreMenuFooterComponent,
        CoreModalFooterComponent,
        CoreModalHeaderComponent,
        CoreAppDetailsNoTemplateComponent,
        CoreGetAppPermissionInfoComponent,
        CoreGetAppPermissionInfoNoTemplateComponent,
        CoreRequestAppPermissionComponent,
        CoreRequestAppPermissionNoTemplateComponent,
        CoreSelectFileComponent,
        AppDateFormatPipe,
        AppDateTimeToTimeFormatPipe,
        AppEnumToHumanReadablePipe,
        CoreUpdateContentMetaComponent,
        CoreUpdateContentMetaNoTemplateComponent,
        AppDateTimeToDefaultDateTimeFormatPipe,
        EventsEventTicketInfosToMinPricePipe,
        EventsEventTicketInfosToMaxPricePipe,
        CoreDateTimePickerComponent,
        CoreDateTimePickerCronComponent,
        CoreDateTimePickerNoStyleComponent,
        CoreDateTimePickerLabelComponent,
        CoreDateTimePickerButtonComponent,
        CoreGoogleAddressAutoCompletionFormControlComponent,
    ],
    imports: [
        BaseCoreModule,
        NgxClampModule,
        IonicModule,
        ClipboardModule,
        Angular2PromiseButtonModule,

    ],
    exports: [
        BaseCoreModule,
        CoreFormValidationMessageComponent,
        CoreNumberFlipDirective,
        CoreConfirmDirective,
        CoreAppDetailsComponent,
        CoreModalFooterDoubleButtonComponent,
        NgxClampModule,
        CoreModalFooterComponent,
        CoreModalHeaderComponent,
        CoreAppDetailsNoTemplateComponent,
        CoreGetAppPermissionInfoComponent,
        CoreGetAppPermissionInfoNoTemplateComponent,
        CoreRequestAppPermissionComponent,
        CoreRequestAppPermissionNoTemplateComponent,
        CoreSelectFileComponent,
        AppDateFormatPipe,
        AppDateTimeToTimeFormatPipe,
        AppEnumToHumanReadablePipe,
        CoreUpdateContentMetaComponent,
        AppDateTimeToDefaultDateTimeFormatPipe,
        Angular2PromiseButtonModule,

        EventsEventTicketInfosToMinPricePipe,
        EventsEventTicketInfosToMaxPricePipe,
        CoreDateTimePickerComponent,
        CoreDateTimePickerCronComponent,
        CoreDateTimePickerNoStyleComponent,
        CoreDateTimePickerLabelComponent,
        CoreDateTimePickerButtonComponent
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {
}


