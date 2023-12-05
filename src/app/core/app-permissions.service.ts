import {Injectable} from '@angular/core';
import {AppPermissionIdfaData} from "@core/core.models";
import {CommonsService} from "@core/commons.service";


@Injectable({
    providedIn: 'root'
})
export class AppPermissionsService {

    idfa: any;

    constructor() {
        // @ts-ignore
        if (window['cordova']) {
            // @ts-ignore
            this.idfa = window['cordova']['plugins'] ? window['cordova']['plugins'].idfa : undefined;
        }

    }

    public getInfo(): Promise<AppPermissionIdfaData> {
        if (this.idfa) {
            return this.idfa.getInfo();
        }
        return Promise.resolve({trackingLimited: false, idfa: 'random' + CommonsService.getRandomInt(1000, 100000)});
    }

    public requestPermission(): Promise<number> {
        if (this.idfa) {
            return this.idfa.requestPermission();
        }
        return Promise.reject(-1);
    }
}
