import {BaseComponent} from "@core/components/base.component";
import {Component, Injector, Input} from "@angular/core";
import {MediaObject} from "@awesome-cordova-plugins/media/ngx";
import {MediaPlayerService} from "@core/media-player.service";

@Component({
    selector: 'core-play-media',
    templateUrl: './core-play-media.component.html',
    styleUrls: ['./core-play-media.component.scss']
})
export class CorePlayMediaComponent extends BaseComponent {

    @Input()
    mediaUrl: string;

    current_media: MediaObject;

    constructor(protected mediaPlayerService: MediaPlayerService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.current_media = this.mediaPlayerService.createMedia(this.mediaUrl);
        this.current_media.onError.subscribe(value => {
            console.log(value);
        });
    }

    playMedia() {
        if (this.current_media) {
            this.mediaPlayerService.playMedia(this.current_media);
        }
    }

}

@Component({
    selector: 'core-play-media-no-template',
    templateUrl: './core-play-media-no-template.component.html',
    styleUrls: ['./core-play-media.component.scss']
})
export class CorePlayMediaNoTemplateComponent extends CorePlayMediaComponent {
}
