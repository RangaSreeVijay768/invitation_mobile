import {Injectable} from '@angular/core';
import {Browser} from "@node-modules/@capacitor/browser";

@Injectable({
    providedIn: 'root'
})
export class CoreBrowsertabService {

    constructor() {
    }

    open(url: string): Promise<any> {
        return Browser.open({url, windowName: '_self'});

    }
}
