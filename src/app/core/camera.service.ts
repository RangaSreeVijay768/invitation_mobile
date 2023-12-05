import {Injectable} from '@angular/core';
import {Camera} from '@node-modules/@capacitor/camera';
import {ImageOptions, Photo} from '@node-modules/@capacitor/camera/dist/esm/definitions';


@Injectable({
    providedIn: 'root'
})
export class CameraService {

    constructor() {
    }

    getPhoto(options: ImageOptions): Promise<Photo> {
        return Camera.getPhoto(options);
    }

}
