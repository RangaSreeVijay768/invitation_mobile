import {DynamicDatePickerModel, DynamicDatePickerModelConfig, serializable} from "@node-modules/@ng-dynamic-forms/core";
import {DynamicFormControlLayout} from "@ng-dynamic-forms/core";

export const FORM_CONTROL_TYPE_CORE_CORE_IONIC_DATE_TIME_BUTTON = 'FORM_CONTROL_TYPE_CORE_CORE_IONIC_DATE_TIME_BUTTON';

export class CoreIonicDateTimeButtonFormControlModel extends DynamicDatePickerModel {
    @serializable() readonly type: string = FORM_CONTROL_TYPE_CORE_CORE_IONIC_DATE_TIME_BUTTON;


    constructor(config: DynamicDatePickerModelConfig, layout?: DynamicFormControlLayout) {
        super(config, layout);
        console.log('creating control')
    }
}
