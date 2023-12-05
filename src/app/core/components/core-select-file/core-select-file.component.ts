import {Component} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';

@Component({
    selector: 'core-select-file',
    templateUrl: './core-select-file.component.html',
    styleUrls: ['./core-select-file.component.scss']
})
export class CoreSelectFileComponent extends BaseComponent {
    initializeComponent() {
    }

    // actionSheetController: ActionSheetController;
    //
    // webview = WebView;
    //
    // @Output()
    // fileSelected = new EventEmitter<SelectedFile>();
    // @Output()
    // fileRecieved = new EventEmitter<FileBlob>();
    //
    // selected_file: SelectedFile;
    //
    // // photo_viewer: PhotoViewer;
    //
    // @ViewChild(CoreSelectPhotoNoTemplateComponent, {static: true})
    // private jeewith_select_photo_no_template_component: CoreSelectPhotoNoTemplateComponent;
    //
    // // @ViewChild(JeewithCapturePhotoNoTemplateComponent, {static: true})
    // // private jeewith_capture_photo_no_template_component: JeewithCapturePhotoNoTemplateComponent;
    //
    // // copied from
    // // https://devdactic.com/ionic-4-image-upload-storage/
    //
    // constructor(injector: Injector) {
    //     super(injector);
    //     // this.photo_viewer = injector.get(PhotoViewer);
    //     this.actionSheetController = injector.get(ActionSheetController);
    //     this.fileSelected.subscribe(selected_file => {
    //         this.makeFileUrlIntoFile(selected_file.file_url);
    //     });
    // }
    //
    // initializeComponent() {
    // }
    //
    // // async selectImage() {
    // //     const actionSheet = await this.actionSheetController.create({
    // //         header: 'Select Image source',
    // //         keyboardClose: true,
    // //         buttons: [
    // //             {
    // //                 text: 'Load from Library',
    // //                 handler: () => {
    // //                     this.jeewith_select_photo_no_template_component.uploadFromPhotoLibrary();
    // //                 }
    // //             },
    // //             {
    // //                 text: 'Use Camera',
    // //                 handler: () => {
    // //                     // this.jeewith_capture_photo_no_template_component.takePicture();
    // //                 }
    // //             },
    // //             {
    // //                 text: 'Cancel',
    // //                 role: 'cancel'
    // //             }
    // //         ]
    // //     });
    // //     await actionSheet.present();
    // // }
    //
    // makeFileUrlIntoFile(imagePath) {
    //     File.resolveLocalFilesystemUrl(imagePath).then((fileEntry) => {
    //         // @ts-ignore
    //         fileEntry.file((resFile) => {
    //             this.readFile(resFile);
    //         });
    //     });
    // }
    //
    // readFile(file: any) {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         const imgBlob = new Blob([reader.result], {
    //             type: file.type
    //         });
    //         this.fileRecieved.emit({file: file, blob: imgBlob});
    //     };
    //     reader.readAsArrayBuffer(file);
    // }
    //
    // showFullView() {
    //     // this.photo_viewer.show(this.selected_file.file_url, this.selected_file.file_name);
    // }
}




