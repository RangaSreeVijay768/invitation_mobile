import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {ImagesRequests} from '@images/images.models';
import {ImagesService} from '@images/images.service';
import {Images} from '@core/core.models';
import AttachImage = ImagesRequests.AttachImage;
import UploadedFile = Images.UploadedFile;

@Component({
  selector: 'images-attach-image',
  templateUrl: './images-attach-image.component.html',
  styleUrls: ['./images-attach-image.component.scss']
})
export class ImagesAttachImageComponent extends BaseComponent {


  @Input()
  entityType: string;
  @Input()
  entityId: string;
  @Input()
  uploadedFile: UploadedFile;

  @Output()
  imageAttached = new EventEmitter<any>();

  // tslint:disable-next-line:variable-name
  attach_image_subscription$: Subscription;

  constructor(protected imagesService: ImagesService, injector: Injector) {
    super(injector);
  }

  initializeComponent() {

  }

  // tslint:disable-next-line:variable-name
  createRequestData(uploaded_file_id?: string, entity_id?: string, entity_type?: string): AttachImage.Request {
    const request = new AttachImage.Request();

    request.file_id = uploaded_file_id || this.uploadedFile.uploaded_file_id;
    request.image_type = entity_type || this.entityType;
    request.entity = entity_id || this.entityId;

    return request;
  }

  attachImage(request: AttachImage.Request) {
    console.log("inside attach image");
    this.attach_image_subscription$ = this.imagesService.attachImage(request)
      .subscribe(value => {
        this.imageAttached.emit(value);
      });
  }


}

@Component({
  selector: 'images-attach-image-no-template',
  templateUrl: './images-attach-image-no-template.component.html',
  styleUrls: ['./images-attach-image.component.scss']
})
export class ImagesAttachImageNoTemplateComponent extends ImagesAttachImageComponent {
}
