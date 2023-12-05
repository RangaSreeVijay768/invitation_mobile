import {
    DynamicFormControlLayout, DynamicInputControlModel, DynamicInputControlModelConfig, serializable
} from "@ng-dynamic-forms/core";
import {Core} from "@core/core.models";
import GooglePlaceLocation = Core.GooglePlaceLocation;

export const FORM_CONTROL_TYPE_CORE_GOOGLE_ADDRESS_AUTO_COMPLETION = 'FORM_CONTROL_TYPE_CORE_GOOGLE_ADDRESS_AUTO_COMPLETION';

export interface CoreGoogleAddressAutoCompletionModelConfig
    extends DynamicInputControlModelConfig<GooglePlaceLocation> {


}

export class CoreGoogleAddressAutoCompletionModel extends DynamicInputControlModel<GooglePlaceLocation> {
    @serializable() readonly type: string = FORM_CONTROL_TYPE_CORE_GOOGLE_ADDRESS_AUTO_COMPLETION;

    constructor(config: CoreGoogleAddressAutoCompletionModelConfig, layout?: DynamicFormControlLayout) {
        super(config, layout);
    }
}
