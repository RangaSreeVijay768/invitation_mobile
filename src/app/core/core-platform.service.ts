import {EventEmitter, Injectable} from '@angular/core';
import {Platform} from "@node-modules/@ionic/angular";

@Injectable({
    providedIn: 'root'
})
export class CorePlatformService {

    platformReady = new EventEmitter<string>();
    platform_initialized = false;

    statusBarHeight: number = 0;

    constructor(protected platform: Platform) {
        this.platform.ready().then(success => {
            this.platform_initialized = true;
            this.platformReady.emit(success);
        });

    }

    getPlatform(): Platform {
        return this.platform;
    }
}
