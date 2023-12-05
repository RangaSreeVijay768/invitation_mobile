import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {Images} from '@core/core.models';
import {FilesService} from '@images/files.service';
import {FileUploader} from '@node-modules/ng2-file-upload';
import {CoreSelectPhotoNoTemplateComponent} from '@core/components/core-select-photo/core-select-photo.component';
import {CoreSelectFileComponent} from '@core/components/core-select-file/core-select-file.component';
import {
    ImagesAttachImageNoTemplateComponent
} from '@images/components/images-attach-image/images-attach-image.component';
import UploadedFile = Images.UploadedFile;

@Component({
    selector: 'images-upload-file',
    templateUrl: './images-upload-file.component.html',
    styleUrls: ['./images-upload-file.component.scss']
})
export class ImagesUploadFileComponent extends BaseComponent {

    uploader: FileUploader;


    @Input()
    entityType: string;
    @Input()
    entityId: string;
    @Input()
    autoAttach: boolean = true;

    @Output()
    imageAttached = new EventEmitter<string>();
    @Output()
    imageUploadStarted = new EventEmitter<boolean>();

    @Output()
    fileUploaded = new EventEmitter<UploadedFile>();

    @Input()
    autoUploadFile: boolean = true;

    image_file_upload_subscription$: Subscription;

    @ViewChild(CoreSelectFileComponent)
    core_select_file_component: CoreSelectFileComponent;

    @ViewChild(ImagesAttachImageNoTemplateComponent)
    images_attach_image_no_template_component: ImagesAttachImageNoTemplateComponent;

    uploaded_file: UploadedFile;

    current_time_stamp = CommonsService.getCurrentTimeAsDateTime().toUnixInteger();

    image_upload_in_progress: boolean = false;

    constructor(protected filesService: FilesService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        // if (this.autoAttach) {
        //     this.fileUploaded.subscribe(value => {
        //         this.attachImage(value);
        //     });
        // }
        this.image_file_upload_subscription$ = this.fileUploaded.subscribe(value => {
            this.uploaded_file = value;
            if (this.autoUploadFile) {
                this.images_attach_image_no_template_component.attachImage(
                    this.images_attach_image_no_template_component.createRequestData(value.uploaded_file_id));
            }
        });
    }

    uploadFile(data_url: string, file_name: string) {
        this.imageUploadStarted.emit(true);
        console.log('this is data url', data_url);
        this.image_upload_in_progress = true;
        this.image_file_upload_subscription$ = this.filesService.getFileUploader(data_url, file_name)
            .subscribe(success => {
                console.log(success);
                this.uploaded_file = CommonsService.deserialize(success, UploadedFile);
                this.fileUploaded.emit(this.uploaded_file);
            }, error => {
                // TODO: Error functionailty when video doesn't get file.
            });
    }

    attachImage(uploaded_file: UploadedFile, entity_id?: string, entity_type?: string) {
        console.log('view child', this.images_attach_image_no_template_component);
        this.images_attach_image_no_template_component.attachImage(
            this.images_attach_image_no_template_component.createRequestData(uploaded_file.uploaded_file_id, entity_id,
                entity_type));
    }
}


@Component({
    selector: 'images-upload-file-create-event',
    templateUrl: './images-upload-file-create-event.component.html',
    styleUrls: ['./images-upload-file.component.scss']
})
export class ImagesUploadFileCreateEventComponent extends ImagesUploadFileComponent {
}

@Component({
    selector: 'images-upload-file-create-blast-list',
    templateUrl: './images-upload-file-create-blast-list.component.html',
    styleUrls: ['./images-upload-file.component.scss']
})
export class ImagesUploadFileCreateBlastListComponent extends ImagesUploadFileComponent {
}

@Component({
    selector: 'images-upload-file-no-template',
    templateUrl: './images-upload-file-no-template.component.html',
    styleUrls: ['./images-upload-file.component.scss']
})
export class ImagesUploadFileNoTemplateComponent extends ImagesUploadFileComponent {

    @ViewChild(CoreSelectPhotoNoTemplateComponent, {static: true})
    core_select_photo_no_template_component: CoreSelectPhotoNoTemplateComponent;

}


