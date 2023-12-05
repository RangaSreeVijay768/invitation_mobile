import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {DynamicInputModelBuilder} from '@core/dynamic-input-model-builder';
import {CommonsService} from '@core/commons.service';

export function SEARCH_SEARCH_EVENT_INFOS_FORM_MODEL(): DynamicFormControlModel[] {
  return [
    new DynamicInputModelBuilder()
      .getTextInputModel('query', undefined, undefined, ' Search for events')
      .build(),
  ];
}

export const SEARCH_SEARCH_EVENT_INFOS_LAYOUT = {
  query: {
    element: {
      control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px py-10px resize-none',
      container: ''
    }
  },
};
