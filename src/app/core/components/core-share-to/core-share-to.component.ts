import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Output} from '@angular/core';

// import ShareToExternal = Core.ShareToExternal;

@Component({
    selector: 'core-share-to',
    templateUrl: './core-share-to.component.html',
    styleUrls: ['./core-share-to.component.scss']
})
export class CoreShareToComponent extends BaseComponent {

    @Output()
    shareSuccessful = new EventEmitter<any>();
    @Output()
    shareFailed = new EventEmitter<any>();

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    // createRequestData(message?: string, subject?: string, image?: string, url?: string): ShareToExternal {
    //     const share_to_external = new ShareToExternal();
    //     share_to_external.message = message;
    //     share_to_external.title = subject;
    //     share_to_external.image = image;
    //     share_to_external.url = url;
    //
    //     return share_to_external;
    // }
    //
    // shareViaApp(share_to_external: ShareToExternal) {
    //     // @ts-ignore
    //     SocialSharing.share(share_to_external.message, share_to_external.title, share_to_external.image, share_to_external.url)
    //         .then(success => {
    //             this.shareSuccessful.emit(success);
    //         }).catch(error => {
    //         this.shareFailed.emit(error);
    //     });
    // }
}

@Component({
    selector: 'core-share-to-no-template',
    templateUrl: './core-share-to-no-template.component.html',
    styleUrls: ['./core-share-to.component.scss']
})
export class CoreShareToNoTemplateComponent extends CoreShareToComponent {
}
