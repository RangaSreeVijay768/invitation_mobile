import {AppVersionDetails} from '@core/app.models';
import {HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {
    NgHttpCachingConfig, NgHttpCachingHeaders, NgHttpCachingService, NgHttpCachingStrategy
} from '@core/rg-http-caching/ng-http-caching-service.service';
import {CommonsService} from '@core/commons.service';

export const STORAGE_CONFIGURATION = {
    name: '__mydb',
    driverOrder: [
        'indexeddb',
        'sqlite',
        'websql'
    ]
};

export const MOBILE_WEBSITE_APP_VERSION: AppVersionDetails = {
    app_name: 'Radiance',
    app_id: 'com.radiance.test',
    app_version: 'mobile_website'
};

export const DEFAULT_APP_COLOR = 'water-primary';

export const TOAST_CONFIGURATION = {
    DURATION: 2000,
    POSITION: 'bottom',
};

export const NOTIFICATION_THEMES = {
    SUCCESS: 'white',
    ERROR: 'white',
    WARNING: 'white'
};

export const PROMISE_BUTTON_MODULE_OPTIONS = {
    // spinnerTpl: '<div class="windows8">\n' +
    //     '\t<div class="wBall" id="wBall_1">\n' +
    //     '\t\t<div class="wInnerBall"></div>\n' +
    //     '\t</div>\n' +
    //     '\t<div class="wBall" id="wBall_2">\n' +
    //     '\t\t<div class="wInnerBall"></div>\n' +
    //     '\t</div>\n' +
    //     '\t<div class="wBall" id="wBall_3">\n' +
    //     '\t\t<div class="wInnerBall"></div>\n' +
    //     '\t</div>\n' +
    //     '\t<div class="wBall" id="wBall_4">\n' +
    //     '\t\t<div class="wInnerBall"></div>\n' +
    //     '\t</div>\n' +
    //     '\t<div class="wBall" id="wBall_5">\n' +
    //     '\t\t<div class="wInnerBall"></div>\n' +
    //     '\t</div>\n' +
    //     '</div>',
    // spinnerTpl:'<div class="bubblingG">\n' +
    //     '\t<span id="bubblingG_1">\n' +
    //     '\t</span>\n' +
    //     '\t<span id="bubblingG_2">\n' +
    //     '\t</span>\n' +
    //     '\t<span id="bubblingG_3">\n' +
    //     '\t</span>\n' +
    //     '</div>',
    // spinnerTpl: '<span class="cssload-loader"><span class="cssload-loader-inner"></span></span>',
    // spinnerTpl: '<div class="cssload-container"><ul class="cssload-flex-container"><li><span class="cssload-loading"></span></li></div></div>',
    // disable buttons when promise is pending
    // spinnerTpl:
    //     '<ion-spinner class="btn-spinner default"></ion-spinner>',
    // spinnerTpl:'<div class="loader">Loading...</div>',
    spinnerTpl:
        '<ion-spinner class="btn-spinner new-1" name="dots"></ion-spinner>',
    disableBtn: true,
    // the class used to indicate a pending promise
    btnLoadingClass: 'is-loading',
    // only disable and show is-loading class for clicked button,
    // even when they share the same promise
    handleCurrentBtnOnly: true,
};

export const DEFAULT_SLIDE_OPTIONS = {
    INITIAL_SLIDE: 0,
    SPEED: 400
};

export const CUSTOM_NG_HTTP_CACHING_CONFIG: NgHttpCachingConfig = {
    lifetime: 1000 * 100, // cache expire after 10 seconds,
    cacheStrategy: NgHttpCachingStrategy.DISALLOW_ALL,
    // getKey: (req: HttpRequest<any>): string | undefined => {
    //     // In this example the full request is hashed for provide an unique key for the cache.
    //     // This is important if you want support method like POST or PUT.
    //     const key = req.method + '@' + req.urlWithParams + '@' + hash(req.params, hashOptions) + '@' +
    //         hash(req.body, hashOptions);
    //     // console.log(key);
    //     return key;
    // },
};

@Injectable({
    providedIn: 'root'
})
export class CustomNgHttpCachingService extends NgHttpCachingService {


    constructor() {
        super(CUSTOM_NG_HTTP_CACHING_CONFIG);
    }

    addToCache(req: HttpRequest<any>, res: HttpResponse<any>): boolean {
        // console.log('adding',  this.getKey(req));
        return super.addToCache(req, new HttpResponse<any>(res));
    }


    getFromCache(req: HttpRequest<any>): HttpResponse<any> | undefined {
        const response = super.getFromCache(req);
        // console.log('getting', response ? response.clone() : undefined, this.getKey(req));
        return response;
    }
}

export class MetaConstants {

    public static DEFAULT_TITLE = 'EventReply | New way of hosting events';
    public static DEFAULT_DESCRIPTION = 'New way of hosting events';
    public static DEFAULT_TYPE = 'website';
    public static WEBSITE_URL = CommonsService.getWindowLocation();
    public static DEFAULT_IMAGE = MetaConstants.WEBSITE_URL + '/assets/images/logo 2 1.png';

    // public static DEFAULT_TITLE = 'Testing campaign';
    // public static DEFAULT_DESCRIPTION = 'Testin campaign 2';
    // public static DEFAULT_TYPE = 'website';
    // public static WEBSITE_URL = 'https://upraise.fund';
    // public static DEFAULT_IMAGE = 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_3.png';

}


export const CACHE_HEADERS = {
    [NgHttpCachingHeaders.ALLOW_CACHE]: '1',
};

