export class FormConstants {

    public static DEFAULT_PLACE_HOLDER = 'Enter something here';
    public static DEFAULT_TEXT_AREA_ROWS = 3;
    public static DEFAULT_TEXT_MAX_LENGTH = 1024;
    public static DEFAULT_TEXT_AREA_MAX_LENGTH = 9999;
    public static STORY_DESCRIPTION_MAX_LENGTH = 1500;
    public static DEFAULT_TEXT_MIN_LENGTH = 1;
    public static DEFAULT_TEXT_INPUT_TYPE = 'text';
    public static DEFAULT_TEXT_AREA_COLS = 4;
    public static DEFAULT_PASSWORD_MAX_LENGTH = 40;


}

export const FORM_VALIDATIONS = {
    EMAIL_VALIDATOR: {validator: 'emailValidator', errorMessage: 'Invalid e-mail'},
    MOBILE_VALIDATOR: {validator: 'mobileNumberValidator', errorMessage: 'Invalid mobile number'},
    PASSWORD_VALIDATOR: {
        validator: 'appPasswordValidator',
        errorMessage: 'Invalid Password'
    },
    REQUIRED: {validator: 'required', errorMessage: 'Required '},
    MAXLENGTH: {validator: 'maxLength', errorMessage: 'Max length exceeded'},
    MINLENGTH: {validator: 'minLength', errorMessage: 'Min length required'},
};
