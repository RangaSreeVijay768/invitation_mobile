import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {DynamicInputModelBuilder} from '@core/dynamic-input-model-builder';

export function USER_PROFILES_PAYOUT_INFO_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('bankname', undefined, undefined, 'Ex. JP MORGAN')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('name', undefined, undefined, 'RONALD WILLIAM')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('acc_num', undefined, undefined, 'Ex.123456789', 'number')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('reenteracc_num', undefined, undefined, 'ex.123456789', 'number')
            .build(),
    ];
}

export const USER_PROFILES_PAYOUT_INFO_FORM_LAYOUT = {
    bankname: {
        element: {
            control: 'text-primary py-21px border border-grey-1 ph-16px mt-20px font-color-373737',
            container: ''
        }
    },
    name: {
        element: {
            control: 'text-primary py-21px border border-grey-1 ph-16px mt-20px font-color-373737',
            container: ''
        }
    },
    acc_num: {
        element: {
            control: 'text-primary py-21px border border-grey-1 ph-16px mt-20px font-color-373737',
            container: ''
        }
    },
    reenteracc_num: {
        element: {
            control: 'text-primary py-21px border border-grey-1 ph-16px mt-20px font-color-373737',
        }
    },

};


export function USER_PROFILES_PROFILE_EDIT_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('email', undefined, undefined, 'example@gmail.com')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('name', undefined, undefined, 'Enter your name')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('mob_num', undefined, undefined, 'Ex.123456789', 'number')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('b_day', undefined, undefined, 'Share to recieve special bday offers')
            .build(),
    ];
}

export const USER_PROFILES_PROFILE_EDIT_FORM_LAYOUT = {
    email: {
        element: {
            control: 'font-size-18 font-weight-500 py-21px b-1px-light-grey ph-16px mt-20px',
            container: ''
        }
    },
    name: {
        element: {
            control: 'font-size-18 font-weight-500 py-21px b-1px-light-grey ph-16px mt-20px',
            container: ''
        }
    },
    mob_num: {
        element: {
            control: 'font-size-18 font-weight-500 py-21px border-1px-white ph-16px',
            container: ''
        }
    },
    b_day: {
        element: {
            control: 'font-size-18 font-weight-500 py-21px b-1px-light-grey ph-16px mt-20px',
            container: ''
        }
    },

};

export function CREATE_BLAST_LIST_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('blast_list_name', undefined, undefined, 'Blast list name')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getSelectInputModel('blast_list_type', undefined, [
                {label: 'EMAIL', value: 'EMAIL'},
                {label: 'SMS', value: 'SMS'},
                {label: 'Whatsapp', value: 'WHATS_APP'},
            ], 'EMAIL')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('description', undefined, undefined, 'description')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
    ];
}

export const USER_PROFILES_BLASTS_CREATE_BLAST_LIST_FORM_LAYOUT = {
    blast_list_name: {
        element: {
            control: 'font-size-18 font-weight-500 py-21px b-1px-light-grey ph-16px mt-20px selected-border',
            container: ''
        }
    },
    blast_list_type: {
        element: {
            control: 'font-size-18 font-weight-500 py-21px b-1px-light-grey ph-16px mt-20px rounded-2 ',
            container: ''
        }
    },
    description: {
        element: {
            control: 'font-size-18 font-weight-500 py-21px b-1px-light-grey ph-16px mt-20px',
            container: ''
        }
    },
};


export function CREATE_BLAST_LIST_ITEM_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('display_name', undefined, undefined, 'Enter name')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('phone_number', undefined, undefined, 'Phone number')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('email_id', undefined, undefined, 'Email id')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
    ];
}


export const USER_PROFILES_CREATE_BLAST_LIST_ITEM_FORM_LAYOUT = {
    display_name: {
        element: {
            control: 'font-size-18 font-weight-500 py-21px b-1px-light-grey ph-16px mt-20px',
            container: ''
        }
    },
    phone_number: {
        element: {
            control: 'font-size-18 font-weight-500 py-21px b-1px-light-grey ph-16px mt-20px',
            container: ''
        }
    },
    email_id: {
        element: {
            control: 'font-size-18 font-weight-500 py-21px b-1px-light-grey ph-16px mt-20px',
            container: ''
        }
    },

};

export function START_EVENT_BLAST_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextAreaInputModel('message', undefined, 'Message', 10)
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
    ];
}

export const START_EVENT_BLAST_FORM_LAYOUT = {
    message: {
        element: {
            control: 'font-size-18 font-weight-500 py-16px b-1px-light-grey ph-16px mt-20px px-24px font-size-18px font-weight-400',
            container: ''
        }
    },

};


export function USER_PROFILES_INVITE_TO_EVENT_SWIPER_SEARCH_EVENTS_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('search_event', undefined, undefined, 'search event')
            .build(),
    ];
}

export const USER_PROFILES_INVITE_TO_EVENT_SWIPER_SEARCH_EVENTS_FORM_LAYOUT = {
    search_member: {
        element: {
            control: 'font-weight-500 border border-2 border-grey-1 b-1px-primary mt-20px filter-none w-100 h-100 p-24px pl-30px font-size-18px',
            container: 'filter-none b-1px-primary p-24px pl-30px br-1px-grey-2 font-size-18px'
        }
    },
};

export function USER_PROFILES_INVITE_TO_EVENT_SWIPER_SEARCH_CONTACTS_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('search_term', undefined, undefined, 'Enter to search')
            .build(),
    ];
}

export const USER_PROFILES_INVITE_TO_EVENT_SWIPER_SEARCH_CONTACTS_FORM_LAYOUT = {
    search_member: {
        element: {
            control: 'font-weight-500 border border-2 border-grey-1 b-1px-primary mt-20px filter-none w-100 h-100 p-24px pl-30px font-size-18px',
            container: 'filter-none b-1px-primary p-24px pl-30px br-1px-grey-2 font-size-18px'
        }
    },
};
export function USER_PROFILES_CREATE_USER_CONTACT_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getSelectInputModel('contact_type', undefined, [
                {label: 'CSV upload', value: 'CSV_UPLOAD'},
                {label: 'Past guest', value: 'PAST_GUEST'},
            ], 'CSV_UPLOAD')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('display_name', undefined, undefined, 'Enter name')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('phone_number', undefined, undefined, 'Phone number')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('email_id', undefined, undefined, 'Email id')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('whatsapp_number', undefined, undefined, 'Whatsapp number')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
    ];
}

export const USER_PROFILES_CREATE_USER_CONTACT_LAYOUT = {
    contact_type: {
        element: {
            control: 'font-normal w-100-percent fs-10',
            container: 'disable-default-form-borders pa-0 w-100-percent form-active border border-2 border-grey-1 border-radius-5px'
        }
    },
    display_name: {
        element: {
            control: 'font-normal w-100-percent fs-10',
            container: 'disable-default-form-borders pa-0 w-100-percent form-active border border-2 border-grey-1 border-radius-5px'
        }
    },
    phone_number: {
        element: {
            control: 'font-normal w-100-percent fs-10',
            container: 'disable-default-form-borders pa-0 w-100-percent form-active border border-2 border-grey-1 border-radius-5px'
        }
    },
    whatsapp_number: {
        element: {
            control: 'font-normal w-100-percent fs-10',
            container: 'disable-default-form-borders pa-0 w-100-percent form-active border border-2 border-grey-1 border-radius-5px'
        }
    },
    email_id: {
        element: {
            control: 'font-normal w-100-percent fs-10',
            container: 'disable-default-form-borders pa-0 w-100-percent form-active border border-2 border-grey-1 border-radius-5px'
        }
    },
};
