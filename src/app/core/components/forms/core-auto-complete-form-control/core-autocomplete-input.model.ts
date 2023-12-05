import {DynamicFormControlLayout, DynamicInputControlModel, DynamicInputControlModelConfig, serializable} from '@ng-dynamic-forms/core';

export const FORM_CONTROL_TYPE_CORE_AUTOCOMPLETE_INPUT = 'CORE_AUTOCOMPLETE_INPUT';

export interface CoreAutoCompleteInputConfig<T> extends DynamicInputControlModelConfig<T> {

    keyword: string;
    maxItems?: number;

}

export class CoreAutoCompleteInputModel<T> extends DynamicInputControlModel<T> {


    @serializable() readonly type: string = FORM_CONTROL_TYPE_CORE_AUTOCOMPLETE_INPUT;
    @serializable() keyword: string;

    constructor(config: CoreAutoCompleteInputConfig<T>, layout?: DynamicFormControlLayout) {
        super(config, layout);
        this.keyword = config.keyword;
    }

    public defaultMatchingFunction = (items: any[], query: string): any[] => {
        return items;
    };

    public selectedValueRender = (text: any): string => {
        console.log(text);
        return text;
    };

}
