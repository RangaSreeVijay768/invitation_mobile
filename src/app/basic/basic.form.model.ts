import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {DynamicInputModelBuilder} from '@core/dynamic-input-model-builder';
import {CommonsService} from '@core/commons.service';

export function BASIC_USER_INFO_FORM_MODEL(): DynamicFormControlModel[] {
  return [
    new DynamicInputModelBuilder()
      .getTextInputModel('name', undefined, undefined, 'Enter Name ')
      .build(),
    new DynamicInputModelBuilder()
      .getTextInputModel('email', undefined, undefined, ' Ex.20')
      .build(),
  ];
}

export const BASIC_USER_INFO_FORM_LAYOUT = {
  name: {
    element: {
      control: 'font-weight-500 border border-2 border-grey-1 ',
      container: ''
    }
  },
  email: {
    element: {
      control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
      container: ''
    }
  },
};


export function BASIC_VERIFY_USER_FORM_MODEL(): DynamicFormControlModel[] {
  return [
    new DynamicInputModelBuilder()
      .getTextInputModel('verification_code', undefined, undefined, 'Enter verification code ')
      .build(),
  ];
}

export const BASIC_VERIFY_USER_FORM_LAYOUT = {
  verification_code: {
    element: {
      control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
      container: ''
    }
  },
};
