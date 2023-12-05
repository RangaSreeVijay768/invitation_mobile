import {EventEmitter, Injectable} from '@angular/core';
import {SafeArea, SafeAreaInsets} from 'capacitor-plugin-safe-area';

@Injectable({
    providedIn: 'root'
})
export class CoreSafeAreaService {

    safeAreaChanged = new EventEmitter<SafeAreaInsets>();

    constructor() {
    }

    async addListener() {
        // const eventListener = await SafeArea.addListener('safeAreaChanged', data => {
        //     console.log(data);
        // });
    }

    getSafeAreaInsets(): Promise<SafeAreaInsets> {
        return SafeArea.getSafeAreaInsets();
    }
}
