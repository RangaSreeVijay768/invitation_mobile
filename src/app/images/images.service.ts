import {Injectable} from '@angular/core';
import {RestService} from '@core/http/rest.service';
import {CoreHttpClient} from '@core/http/http.module';
import {ImagesConstants} from '@images/images.constants';
import {ImagesRequests} from '@images/images.models';
import GetImagesByEntityIdAndImageType = ImagesRequests.GetImagesByEntityIdAndImageType;
import AttachImage = ImagesRequests.AttachImage;

@Injectable({
    providedIn: 'root'
})
export class ImagesService extends RestService {

    constructor(httpClient: CoreHttpClient) {
        super(httpClient);
        this.end_point = ImagesConstants.FILES_ENDPOINT;
        this.secured_end_point = ImagesConstants.FILES_SECURED_ENDPOINT;
    }

    getImagesByEntityIdAndImageType(request: GetImagesByEntityIdAndImageType.Request) {
        return this.httpClient.get(`${this.getEndPoint()}/images`, {params: this.serialize(request)});
    }

    attachImage(request: AttachImage.Request) {
        return this.httpClient.post(`${this.getSecuredEndPoint()}/images`, this.serialize(request));
    }


}
