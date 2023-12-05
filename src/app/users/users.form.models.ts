import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {DynamicInputModelBuilder} from '@core/dynamic-input-model-builder';
import {
    CoreGoogleAddressAutoCompletionModel
} from '@core/components/forms/core-google-address-auto-completion-form-control/core-google-address-auto-completion-form-control.model';
import {
    CoreIonicDateTimeButtonFormControlModel
} from '@core/components/forms/core-ionic-date-time-button-form-control/core-ionic-date-time-button-form-control.model';

export function USERS_SIGN_IN_USER_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('email', '', undefined, 'Email address')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('password', '', undefined, 'Password', 'password')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
    ];
}

export function USERS_SIGN_IN_WITH_OTP_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('email', '', undefined, 'Email address')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
    ];
}

export function USERS_VERIFY_USER_OTP_LOGIN_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('verification_code', '', undefined, 'Enter verification code')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
    ];
}

export function USERS_VERIFY_USER_ACCOUNT_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('verification_code', undefined, undefined, 'Enter verification code')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
    ];
}

export const USERS_VERIFY_USER_ACCOUNT_LAYOUT = {
    verification_code: {
        element: {
            control: 'font-size-18 font-weight-500 py-21px bg-grey-3 ph-16px mt-20px signup-form-input font-size-18px',
            container: ''
        }
    },
};


export const USERS_SIGN_IN_USER_FORM_LAYOUT = {
    'email': {
        element: {
            control: 'font-normal w-100-percent ma-0 pa-0 ph-0',
            container: 'disable-default-form-borders pa-0 w-100-percent form-active bg-grey-3 border-grey-1 border-radius-5px ph-0',
        }
    },
    'password': {
        element: {
            control: 'font-normal w-100-percent ph-0',
            container: 'disable-default-form-borders w-100-percent form-active bg-grey-3 border-grey-1 border-radius-5px ph-0',
        }
    }
};

export const USERS_SIGN_IN_WITH_OTP_FORM_LAYOUT = {
    'email': {
        element: {
            control: 'font-normal',
            container: 'disable-default-form-borders form-active bg-grey-3 border-grey-1 border-radius-5px',
        }
    },
};

export const USERS_VERIFY_USER_OTP_LOGIN_LAYOUT = {
    'verification_code': {
        element: {
            control: 'font-normal w-100-percent ma-0 pa-0',
            container: 'disable-default-form-borders form-active bg-grey-3 border-grey-1 border-radius-5px',
        }
    },
};


export function USERS_SIGN_UP_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('email', '', undefined, 'Email address')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('password', '', undefined, 'Password', 'password')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('display_name', '', undefined, 'Display name')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
    ];
}

export const USERS_SIGN_UP_USER_FORM_LAYOUT = {
    'email': {
        element: {
            control: 'font-normal w-100-percent ma-0 pa-0',
            container: 'disable-default-form-borders form-active bg-grey-3 border-grey-1 border-radius-5px',
        }
    },
    'display_name': {
        element: {
            control: 'font-normal w-100-percent ma-0 pa-0',
            container: 'disable-default-form-borders form-active bg-grey-3 border-grey-1 border-radius-5px',
        }
    },
    'password': {
        element: {
            control: 'font-normal w-100-percent ma-0 pa-0',
            container: 'disable-default-form-borders form-active bg-grey-3 border-grey-1 border-radius-5px',
        }
    }
};

export function USERS_FORGET_PASSWORD_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('email', '', undefined, 'Email address')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
    ];
}

export const USERS_FORGET_PASSWORD_FORM_LAYOUT = {
    'email': {
        element: {
            control: 'font-normal w-100-percent ma-0 pa-6',
            container: 'disable-default-form-borders w-100-percent form-active bg-grey-3',
        }
    },
};

export function USERS_UPDATE_USER_ACCOUNT_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextAreaInputModel('bio', 1000, ' ', 2, 5, '')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('email', '', undefined, 'example@gmail.com')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('name', '', undefined, 'Enter your name')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('mob_num', '', undefined, 'Ex.123456789')
            .build(),
        new DynamicInputModelBuilder()
            .inputModel(
                new CoreIonicDateTimeButtonFormControlModel({id: 'b_day', additional: {presentation: 'date'}}))
            .build(),
        // new DynamicInputModelBuilder()
        //     .getSelectInputModel('country', '', [
        //         {label: 'United States', value: 'US'},
        //         {label: 'Canada', value: 'CANADA'},
        //     ], 'US')
        //     .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
        //     .build(),
        // new DynamicInputModelBuilder()
        //     .getSelectInputModel('city', '', [
        //         {label: 'Seattle', value: 'SEATTLE'},
        //         {label: 'California', value: 'CALIFORNIA'},
        //     ], 'California')
        //     .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
        //     .build(),
        new DynamicInputModelBuilder()
            .getSelectInputModel('city', '', [
                {label: 'Seattle', value: 'SEATTLE'},
                {label: 'California', value: 'CALIFORNIA'},
            ], 'California')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('instagram', undefined, undefined, 'Ex: i.m.john')
            .build(),
        new DynamicInputModelBuilder()
            .inputModel(new CoreGoogleAddressAutoCompletionModel({id: 'location'}))
            .build(),

    ];
}

export const USERS_UPDATE_USER_ACCOUNT_FORM_LAYOUT = {
    location: {
        element: {
            control: 'fs-18 font-weight-500 b-1px-light-grey ph-4 mv-5',
            container: 'mb-8'
        }
    },
    bio: {
        element: {
            control: 'font-normal w-100-percent ma-0 pv-0 border-none',
            container: 'disable-default-form-borders bio-box bio-edit-state form-active',
        }
    },
    email: {
        element: {
            control: 'font-normal w-100-percent ma-0 pa-0',
            container: 'disable-default-form-borders form-active bg-grey-3 border-grey-1 border-radius-5px',
        }
    },
    name: {
        element: {
            control: 'font-normal w-100-percent ma-0 pa-0',
            container: 'disable-default-form-borders form-active bg-grey-3 border-grey-1 border-radius-5px',
        }
    },
    mob_num: {
        element: {
            control: 'font-normal w-100-percent ma-0 pa-0',
            container: 'disable-default-form-borders form-active bg-grey-3 border-grey-1 border-radius-5px',
        }
    },
    b_day: {
        element: {
            control: 'font-normal w-100-percent fs-10',
            container: 'disable-default-form-borders pa-0 w-100-percent form-active mv-8'
        }
    },
    country: {
        element: {
            control: 'font-normal w-100-percent ma-0 pa-0',
            container: 'disable-default-form-borders form-active bg-grey-3 border-grey-1 border-radius-5px',
        }
    },
    city: {
        element: {
            control: 'font-normal w-100-percent ma-0 pa-0',
            container: 'disable-default-form-borders form-active bg-grey-3 border-grey-1 border-radius-5px',
        }
    },

    instagram: {
        element: {
            control: 'font-normal w-100-percent ma-0 pa-0',
            container: 'disable-default-form-borders form-active bg-grey-3 border-grey-1 border-radius-5px',
        }
    },

};


export function USERS_FORGOT_PASSWORD_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('emailOrPhone', undefined, undefined, 'Email address or phone number or whatsapp')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('verification_code', undefined, undefined, 'Enter verification code', 'password')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('confirmNewPassword', undefined, undefined, 'Enter Password')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('newPassword', undefined, undefined, 'Enter Password', 'password')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
    ];
}

export const USERS_FORGOT_PASSWORD_FORM_LAYOUT = {
    emailOrPhone: {
        element: {
            control: 'font-normal w-100-percent fs-10',
            container: 'disable-default-form-borders pa-0 w-100-percent form-active border border-2 border-grey-1 border-radius-5px bg-primary'
        }
    },
    verification_code: {
        element: {
            control: 'font-normal w-100-percent fs-10',
            container: 'disable-default-form-borders pa-0 w-100-percent form-active border border-2 border-grey-1 border-radius-5px'
        }
    },
    confirmNewPassword: {
        element: {
            control: 'font-normal w-100-percent fs-10',
            container: 'disable-default-form-borders pa-0 w-100-percent form-active border border-2 border-grey-1 border-radius-5px'
        }
    },
    newPassword: {
        element: {
            control: 'font-normal w-100-percent fs-10',
            container: 'disable-default-form-borders pa-0 w-100-percent form-active border border-2 border-grey-1 border-radius-5px'
        }
    },
};
