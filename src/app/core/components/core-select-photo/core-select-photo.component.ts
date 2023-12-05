import {Component, EventEmitter, Injector, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {SelectedFile} from '@images/images.models';
import {ImageOptions} from "@node-modules/@capacitor/camera/dist/esm/definitions";
import {CameraService} from '@core/camera.service';
import {ImagesConstants} from '@images/images.constants';
import {CommonsService} from '@core/commons.service';


@Component({
    selector: 'core-select-photo',
    templateUrl: './core-select-photo.component.html',
    styleUrls: ['./core-select-photo.component.scss']
})
export class CoreSelectPhotoComponent extends BaseComponent {


    @Output()
    onFileSelected = new EventEmitter<SelectedFile>();

    select_photo_subscription$: Promise<void>;

    constructor(injector: Injector,private cameraService: CameraService) {
        super(injector);
    }

    initializeComponent() {
    }

    uploadFromPhotoLibrary(options?: ImageOptions) {
        this.cameraService.getPhoto(options || ImagesConstants.PHOTO_CAMERA_OPTIONS).then((photo) => {
            const image_path = photo.webPath;
            console.log('this is photo', photo);

            this.onFileSelected.emit(
                {
                    file_url: photo.path,
                    file_name: `${CommonsService.getRandomInt(100, 1000)}.${photo.format}`,
                    data_url: photo.dataUrl

                });
        });
    }
}

@Component({
    selector: 'core-select-photo-no-template',
    templateUrl: './core-select-photo-no-template.component.html',
    styleUrls: ['./core-select-photo.component.scss']
})
export class CoreSelectPhotoNoTemplateComponent extends CoreSelectPhotoComponent {
}
