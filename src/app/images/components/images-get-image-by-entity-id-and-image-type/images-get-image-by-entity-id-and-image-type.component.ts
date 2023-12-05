import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {ImagesRequests} from '@images/images.models';
import {ImagesService} from '@images/images.service';
import {Images} from '@core/core.models';
import GetImagesByEntityIdAndImageType = ImagesRequests.GetImagesByEntityIdAndImageType;
import Image = Images.Image;

@Component({
    selector: 'images-get-image-by-entity-id-and-image-type',
    templateUrl: './images-get-image-by-entity-id-and-image-type.component.html',
    styleUrls: ['./images-get-image-by-entity-id-and-image-type.component.scss']
})
export class ImagesGetImageByEntityIdAndImageTypeComponent extends BaseComponent {

    @Input()
    entityType: string;
    @Input()
    entityId: string;

    @Input()
    imageClasses: string | string[];
    @Input()
    defaultImage: string;
    @Input()
    defaultIcon: string;
    @Input()
    iconClasses: string | string[];
    @Input()
    noCache = false;

    @Output()
    imagesReceived = new EventEmitter<Image[]>();

    images: Image[] = [];
    image: Image;
    get_images_by_entity_id_and_image_type_subscription$: Subscription;

    constructor(protected imagesService: ImagesService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.getImagesByEntityIdAndImageType(this.createRequestData());
    }

    createRequestData(entity_id?: string, entity_type?: string): GetImagesByEntityIdAndImageType.Request {
        const request = new GetImagesByEntityIdAndImageType.Request();
        request.entity = entity_id || this.entityId;
        request.image_type = entity_type || this.entityType;

        return request;
    }

    getImagesByEntityIdAndImageType(request: GetImagesByEntityIdAndImageType.Request) {
        this.get_images_by_entity_id_and_image_type_subscription$ =
            this.imagesService.getImagesByEntityIdAndImageType(request)
                .pipe(CommonsService.deserializeMap(GetImagesByEntityIdAndImageType.Response))
                .subscribe(value => {
                    this.imagesReceived.emit(value);
                    this.images = value;
                    if (CommonsService.convertToArray(this.images).length) {
                        this.image = this.images[0];
                    }
                });
    }


    refreshComponent() {
        this.getImagesByEntityIdAndImageType(this.createRequestData());
    }
}

@Component({
    selector: 'images-get-image-by-entity-id-and-image-type-no-template',
    templateUrl: './images-get-image-by-entity-id-and-image-type-no-template.component.html',
    styleUrls: ['./images-get-image-by-entity-id-and-image-type.component.scss']
})
export class ImagesGetImageByEntityIdAndImageTypeNoTemplateComponent
    extends ImagesGetImageByEntityIdAndImageTypeComponent {

    @Input()
    entityType: string;
    @Input()
    entityId: string;
}

@Component({
    selector: 'images-get-image-by-entity-and-type-unique-image',
    templateUrl: './images-get-image-by-entity-and-type-unique-image.component.html',
    styleUrls: ['./images-get-image-by-entity-and-type.component.scss']
})
export class ImagesGetImageByEntityAndTypeUniqueImageComponent extends ImagesGetImageByEntityIdAndImageTypeComponent {

    image: Image;

    constructor(imagesService: ImagesService, injector: Injector) {
        super(imagesService, injector);
        this.imagesReceived.subscribe(value => {
            const images = CommonsService.convertToArray(value);
            this.image = images.length ? images[0] : undefined;

        });
    }
}


@Component({
    selector: 'images-get-image-by-entity-and-type-unique-image-ngx-avatar',
    templateUrl: './images-get-image-by-entity-and-type-unique-image-ngx-avatar.component.html',
    styleUrls: ['./images-get-image-by-entity-and-type.component.scss']
})
export class ImagesGetImageByEntityAndTypeUniqueImageNgxAvatarComponent
    extends ImagesGetImageByEntityAndTypeUniqueImageComponent {
    @Input()
    alt: string;
    @Input()
    size: number;
    @Input()
    borderColor: string;
    @Input()
    round = true;
}

@Component({
    selector: 'images-get-image-by-entity-and-type-unique-image-ngx-avatar-with-upload',
    templateUrl: './images-get-image-by-entity-and-type-unique-image-ngx-avatar-with-upload.component.html',
    styleUrls: ['./images-get-image-by-entity-and-type.component.scss']
})
export class ImagesGetImageByEntityAndTypeUniqueImageNgxAvatarWithUploadComponent
    extends ImagesGetImageByEntityAndTypeUniqueImageComponent {
    @Input()
    alt: string;
    @Input()
    size: number;
    @Input()
    borderColor: string;
    @Input()
    round: boolean = true;
    @Output()
    uploadActionReceived = new EventEmitter<boolean>();

    image: Image;


}


