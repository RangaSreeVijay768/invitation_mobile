import {CommonsService} from '@core/commons.service';

export class HttpNotifications {

    public static IGNORE_URLS = [];

    static isInIgnoreUrl(url: string): boolean {
        for (const url_pattern of HttpNotifications.IGNORE_URLS) {
            if (!CommonsService.isNullOrUndefined(url.match(url_pattern))) {
                return true;
            }
        }
        return false;
    }
}
