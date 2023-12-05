import {Injectable} from '@angular/core';
import {Clipboard} from '@node-modules/@capacitor/clipboard';

@Injectable({
    providedIn: 'root'
})
export class ClipboardService {

    constructor() {
    }

    writeToClipboard(content: string) {
        Clipboard.write({
            string: content
        });
    }
}
