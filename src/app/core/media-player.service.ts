import {Injectable} from '@angular/core';
import {Media, MediaObject} from '@awesome-cordova-plugins/media/ngx';


@Injectable({
    providedIn: 'root'
})
export class MediaPlayerService {

    constructor(protected media: Media) {
    }

    createMedia(url: string): MediaObject {
        return this.media.create(url);
    }

    playMedia(media: MediaObject) {
        media.play();
    }

    stopMedia(media: MediaObject) {
        media.stop();
    }

    pauseMedia(media: MediaObject) {
        media.pause();
    }

    clearMedia(media: MediaObject) {
        media.release();
    }

    seekTo(media: MediaObject, duration: number) {
        media.seekTo(duration);
    }

}
