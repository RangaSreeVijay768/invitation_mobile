import {
    DynamicCheckboxModel, DynamicDatePickerModel, DynamicFormControlModel, DynamicInputModel, DynamicRadioGroupModel,
    DynamicSelectModel, DynamicTextAreaModel, DynamicTimePickerModel
} from '@ng-dynamic-forms/core';
import {FORM_VALIDATIONS, FormConstants} from '@core/form.constants';
import {CommonsService} from '@core/commons.service';

// allowed error fields
type ErrorFields = 'label' | 'placeholder';

export class DynamicInputModelBuilder<T extends DynamicFormControlModel> {

    private input_model: any;
    private validators = {};
    private asyncValidators = {};
    private error_messages = {};

    inputModel(input_model: T): DynamicInputModelBuilder<T> {
        this.input_model = input_model;
        return this;
    }

    getTextInputModel(id: string, label?: string, max_length?: number, place_holder?: string,
                      input_type?: string, min_length?: number, min?: number): DynamicInputModelBuilder<T> {
        this.input_model = new DynamicInputModel({
            id: id,
            label: label,
            inputType: input_type || 'text',
            maxLength: max_length || FormConstants.DEFAULT_TEXT_MAX_LENGTH,
            minLength: min_length || FormConstants.DEFAULT_TEXT_MIN_LENGTH,
            placeholder: place_holder || FormConstants.DEFAULT_PLACE_HOLDER,
            min: min,

        });
        return this;
    }

    getTextAreaInputModel(id: string, max_length?: number, place_holder?: string, rows?: number, cols?: number,
                          label?: string): DynamicInputModelBuilder<T> {
        this.input_model = new DynamicTextAreaModel({
            id: id,
            maxLength: max_length || FormConstants.DEFAULT_TEXT_AREA_MAX_LENGTH,
            placeholder: place_holder || FormConstants.DEFAULT_PLACE_HOLDER,
            rows: rows || FormConstants.DEFAULT_TEXT_AREA_ROWS,
            cols: cols || FormConstants.DEFAULT_TEXT_AREA_COLS,
            label: label,
        });
        return this;
    }

    getDateInputModel(id: string, label?: string, place_holder ?: string, min?: string,
                      max?: string, format?: string, toggle_icon?: string): DynamicInputModelBuilder<T> {
        this.input_model = new DynamicDatePickerModel({
            id: id,
            label: label,
            placeholder: place_holder,
            format: format || CommonsService.DEFAULT_DATE_FORMAT,
            min: min || '1951-01-26',
            max: max || '2025-12-07',
            toggleIcon: toggle_icon
        });
        return this;
    }

    getTimeInputModel(id: string, label?: string, place_holder ?: string, display_format?: string,
                      picker_format?: string): DynamicInputModelBuilder<T> {
        this.input_model = new DynamicTimePickerModel({
            id: id,
            label: label,
            placeholder: place_holder,
            format: display_format || CommonsService.DEFAULT_TIME_FORMAT,
            additional: {'pickerFormat': picker_format || CommonsService.DEFAULT_TIME_FORMAT}
        });
        return this;
    }


    getRadioGroupInputModel(id: string, label: string, options: any, value?: string): DynamicInputModelBuilder<T> {
        this.input_model = new DynamicRadioGroupModel({
            id: id,
            label: label,
            options: options,
            value: value
        });
        return this;
    }

    getSelectInputModel(id: string, label: string, options: any, value?: string): DynamicInputModelBuilder<T> {
        this.input_model = new DynamicSelectModel({
            id: id,
            label: label,
            options: options,
            value: value
        });
        return this;
    }

    getCheckBoxInputModel(id: string, label: string): DynamicInputModelBuilder<T> {
        this.input_model = new DynamicCheckboxModel({
            id: id,
            label: label
        });
        return this;
    }

    addValidatorAndErrorMessage(name: string, error_msg_field?: ErrorFields, args?: any): DynamicInputModelBuilder<T> {
        this.addValidator(name, args);
        this.addErrorMessage(name, error_msg_field);
        return this;
    }

    addErrorMessage(name: string, error_msg_field?: ErrorFields): DynamicInputModelBuilder<T> {
        this.error_messages[this.getValidator(name)] =
            this.getValidatorErrorMessage(name) + this.addErrorMessageField(error_msg_field);
        return this;
    }

    addErrorMessageField(error_msg_field: ErrorFields) {
        return (error_msg_field ? '{{' + error_msg_field + '}}' : '');
    }

    addValidator(name: string, args?: any): DynamicInputModelBuilder<T> {
        this.validators[this.getValidator(name)] = {name: this.getValidator(name), args: args};
        return this;
    }

    addAsyncValidator(name: string, args?: any): DynamicInputModelBuilder<T> {
        this.asyncValidators[this.getValidator(name)] = {name: this.getValidator(name), args: args};
        return this;
    }

    getValidator(name: string) {
        return FORM_VALIDATIONS[name].validator;
    }

    getValidatorErrorMessage(name: string) {
        return FORM_VALIDATIONS[name].errorMessage;
    }

    build(): T {
        this.input_model.validators = this.validators;
        this.input_model.asyncValidators = this.asyncValidators;
        this.input_model.errorMessages = this.error_messages;
        return this.input_model;
    }

}
