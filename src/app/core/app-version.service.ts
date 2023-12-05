import {Injectable} from '@angular/core';
import {App} from '@capacitor/app';
import {Observable} from 'rxjs';
import {CommonsService} from '@core/commons.service';
import {AppInfo} from "@node-modules/@capacitor/app/dist/esm/definitions";

@Injectable({
    providedIn: 'root'
})
export class AppVersionService {
    getAppInfo(): Observable<AppInfo> {
        return CommonsService.promiseToObservable(App.getInfo());

    }
}


