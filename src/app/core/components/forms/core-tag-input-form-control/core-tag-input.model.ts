import {DynamicFormControlLayout, DynamicInputControlModel, DynamicInputControlModelConfig, serializable} from '@ng-dynamic-forms/core';
import {Observable} from 'rxjs';
import {TagModel} from 'ngx-chips/core/tag-model';
import {CommonsService} from '@core/commons.service';

export const FORM_CONTROL_TYPE_CORE_TAG_INPUT = 'CORE_TAG_INPUT';

export interface CoreTagInputModelConfig<T> extends DynamicInputControlModelConfig<T> {

    onlyFromAutoComplete?: boolean;
    tagDisplayBy?: string;
    tagIdentifyBy?: string;
    autoCompleteObservable?: (text: string) => Observable<any>;
    autoCompleteIdentifyBy?: string;
    autoCompleteDisplayBy?: string;
    autoCompleteMatchingFunction?: (value: string, target: TagModel) => boolean;
    autoCompleteMinTextLength?: number;
    onAdding?: (tag: TagModel) => Observable<TagModel>;
    onRemoving?: (tag: TagModel) => Observable<TagModel>;
    maxItems?: number;

}

export class CoreTagInputModel<T> extends DynamicInputControlModel<T> {


    @serializable() readonly type: string = FORM_CONTROL_TYPE_CORE_TAG_INPUT;
    @serializable() onlyFromAutoComplete: boolean;
    @serializable() tagDisplayBy: string;
    @serializable() tagIdentifyBy: string;
    @serializable() autoCompleteObservable: (text: string) => Observable<any>;
    @serializable() autoCompleteIdentifyBy: string;
    @serializable() autoCompleteDisplayBy: string;
    @serializable() autoCompleteMatchingFunction: (value: string, target: TagModel) => boolean;
    @serializable() autoCompleteMinTextLength: number;
    @serializable() onAdding: (tag: TagModel) => Observable<TagModel>;
    @serializable() onRemoving: (tag: TagModel) => Observable<TagModel>;
    @serializable() maxItems: number;

    constructor(config: CoreTagInputModelConfig<T>, layout?: DynamicFormControlLayout) {
        super(config, layout);
        this.onlyFromAutoComplete = CommonsService.isNullOrUndefined(config.onlyFromAutoComplete) ? true : config.onlyFromAutoComplete;
        this.tagDisplayBy = config.tagDisplayBy || 'topic_name';
        this.tagIdentifyBy = config.tagIdentifyBy || 'topic_id';
        this.autoCompleteObservable = config.autoCompleteObservable;
        this.autoCompleteDisplayBy = config.autoCompleteDisplayBy || 'topic_name';
        this.autoCompleteIdentifyBy = config.autoCompleteIdentifyBy || 'topic_id';
        this.autoCompleteMatchingFunction = config.autoCompleteMatchingFunction || this.defaultMatchingFunction;
        this.autoCompleteMinTextLength = config.autoCompleteMinTextLength || 3;
        this.maxItems = config.maxItems;
        this.onAdding = config.onAdding;
        this.onRemoving = config.onRemoving;
    }

    public defaultMatchingFunction = (value: string, target: any): boolean => {
        return true;
    };

}
