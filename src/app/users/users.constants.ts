import {CommonsService} from '@core/commons.service';

export class UsersConstants {
    public static API_AUTH_ENDPOINT = 'api/auth';
    public static API_HELP_CENTER_ENDPOINT = '/api/help-center';

    public static USERS_ENDPOINT = 'accounts';
    public static USERS_SECURED_ENDPOINT = CommonsService.appendSecuredToUrl(UsersConstants.USERS_ENDPOINT);
}
