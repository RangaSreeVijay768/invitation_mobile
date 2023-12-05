import {NgModule} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {
    ImagesGetImageByEntityAndTypeUniqueImageComponent, ImagesGetImageByEntityAndTypeUniqueImageNgxAvatarComponent,
    ImagesGetImageByEntityAndTypeUniqueImageNgxAvatarWithUploadComponent,
    ImagesGetImageByEntityIdAndImageTypeComponent, ImagesGetImageByEntityIdAndImageTypeNoTemplateComponent
} from './components/images-get-image-by-entity-id-and-image-type/images-get-image-by-entity-id-and-image-type.component';
import {AvatarModule} from 'ngx-avatars';
import {
    ImagesUploadFileComponent, ImagesUploadFileCreateBlastListComponent, ImagesUploadFileCreateEventComponent,
    ImagesUploadFileNoTemplateComponent
} from './components/images-upload-file/images-upload-file.component';
import {
    ImagesAttachImageComponent,
    ImagesAttachImageNoTemplateComponent
} from "@images/components/images-attach-image/images-attach-image.component";
import {FileUploadModule} from '@node-modules/ng2-file-upload';

@NgModule({
    declarations: [


        ImagesGetImageByEntityIdAndImageTypeComponent,
        ImagesGetImageByEntityIdAndImageTypeNoTemplateComponent,
        ImagesGetImageByEntityAndTypeUniqueImageNgxAvatarComponent,
        ImagesGetImageByEntityAndTypeUniqueImageComponent,
        ImagesUploadFileComponent,
        ImagesAttachImageNoTemplateComponent,
        ImagesUploadFileCreateEventComponent,
        ImagesUploadFileCreateBlastListComponent,
        ImagesUploadFileNoTemplateComponent,
        ImagesGetImageByEntityAndTypeUniqueImageNgxAvatarWithUploadComponent,
        ImagesAttachImageComponent


    ],
    imports: [
        CoreModule,
        AvatarModule,
        FileUploadModule,
    ],
    exports: [
        AvatarModule,
        ImagesGetImageByEntityIdAndImageTypeComponent,
        ImagesGetImageByEntityIdAndImageTypeNoTemplateComponent,
        ImagesGetImageByEntityAndTypeUniqueImageNgxAvatarComponent,
        ImagesUploadFileComponent,
        ImagesUploadFileCreateEventComponent,
        ImagesUploadFileCreateBlastListComponent,
        ImagesGetImageByEntityAndTypeUniqueImageComponent,
        ImagesUploadFileNoTemplateComponent,
        ImagesGetImageByEntityAndTypeUniqueImageNgxAvatarWithUploadComponent,
        ImagesAttachImageComponent,
        ImagesAttachImageNoTemplateComponent

    ],
    // entryComponents:[
    //
    // ]
})

export class ImagesModule {
}
