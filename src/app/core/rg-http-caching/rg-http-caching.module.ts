import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NG_HTTP_CACHING_CONFIG, NgHttpCachingStrategy} from "@core/rg-http-caching/ng-http-caching-service.service";


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        {
            provide: NG_HTTP_CACHING_CONFIG,
            useValue: {
                lifetime: 1000 * 100, // cache expire after 10 seconds,
                cacheStrategy: NgHttpCachingStrategy.DISALLOW_ALL,
            }
        }
    ],

})
export class RgHttpCachingModule {
}
