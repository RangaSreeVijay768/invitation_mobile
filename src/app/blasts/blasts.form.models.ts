import {DynamicFormControlModel} from "@ng-dynamic-forms/core";
import {DynamicInputModelBuilder} from "@core/dynamic-input-model-builder";

export function BLASTS_SEARCH_BLAST_LISTS_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('search_term', undefined, undefined, '🔍 search groups')
            .build(),
    ];
}

export const BLASTS_SEARCH_BLAST_LISTS_FORM_LAYOUT = {
  search_term: {
    element: {
      control: 'ph-16px py-20px font-weight-500 bg-white border-radius-10 br-2',
      // container: 'filter-none p-24px font-size-18px ph-16px py-20px bg-white rounded-2 border border-grey-1'
    }
  },
};
