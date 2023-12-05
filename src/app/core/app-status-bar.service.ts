import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppStatusBarService {


    setOverlaysWebView(options: any): Promise<void> {
        // return StatusBar.setOverlaysWebView(options);
        return Promise.resolve();

    }

    setBackgroundColor(options: any): Promise<void> {
        // return StatusBar.setBackgroundColor(options);
        return Promise.resolve();
    }
}
