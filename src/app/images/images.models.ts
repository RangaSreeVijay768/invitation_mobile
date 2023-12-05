import {JsonObject, JsonProperty} from "json2typescript";
import {Core, Images} from "@core/core.models";

export interface SelectedFile {
  file_url: string;
  file_name: string;
  data_url:string;
}

export namespace ImagesRequests {
  export namespace GetImagesByEntityIdAndImageType {

      import SortedPaginatedRequest = Core.SortedPaginatedRequest;
      import Image = Images.Image;

      @JsonObject('GetImagesByEntityIdAndImageTypeRequest')
    export class Request extends SortedPaginatedRequest {
      @JsonProperty('entity', String)
      entity: string = undefined;
      @JsonProperty('image_type', String)
      image_type: string = undefined;
    }

    @JsonObject('GetImagesByEntityIdAndImageTypeResponse')
    export class Response extends Image {
    }

  }

  export namespace AttachImage {

    @JsonObject('AttachImageRequest')
    export class Request {
      @JsonProperty('file_id', String)
      file_id: string = undefined;
      @JsonProperty('entity', String, true)
      entity: string = undefined;
      @JsonProperty('image_type', String, true)
      image_type: string = undefined;
    }
  }

}
