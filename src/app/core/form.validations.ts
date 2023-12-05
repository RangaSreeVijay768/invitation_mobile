import {AbstractControl, ValidationErrors} from '@angular/forms';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';

export namespace FormValidations {

    export function emailValidator(control: AbstractControl): ValidationErrors | null {
        // validator does not accept null
        const hasError = isEmail(control.value ? control.value : '');

        return hasError ? null : {emailValidator: true};
    }

    export function mobileNumberValidator(control: AbstractControl): ValidationErrors | null {
        const hasError = isMobilePhone(control.value ? control.value : '','en-IN');
        return hasError ? null : {mobileNumberValidator: true};
    }

}

