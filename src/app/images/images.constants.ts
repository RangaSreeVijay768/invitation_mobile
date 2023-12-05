import {CommonsService} from "@core/commons.service";
import {CameraResultType, ImageOptions} from '@node-modules/@capacitor/camera/dist/esm/definitions';

export class ImagesConstants {



  public static API_AUTH_ENDPOINT = 'api/auth';
  public static API_HELP_CENTER_ENDPOINT = '/api/help-center';

  public static IMAGES_ENDPOINT = 'images';
  public static IMAGES_SECURED_ENDPOINT = CommonsService.appendSecuredToUrl(ImagesConstants.IMAGES_ENDPOINT);

  public static FILES_ENDPOINT = 'files';
  public static FILES_SECURED_ENDPOINT = CommonsService.appendSecuredToUrl(ImagesConstants.FILES_ENDPOINT);

  public static MISC_ENTITY_DESCRIPTIONS_ENDPOINT = 'misc/entitydescriptions';
  public static MISC_ENTITY_DESCRIPTIONS_SECURED_ENDPOINT = CommonsService.appendSecuredToUrl(
      ImagesConstants.MISC_ENTITY_DESCRIPTIONS_ENDPOINT);


  public static PHOTO_CAMERA_OPTIONS: ImageOptions = {

    quality: 100,
    width:500,
    height:500,
    resultType: CameraResultType.DataUrl,
    correctOrientation: true,
  };

  public static PHOTO_PHOTOLIBRARY_OPTIONS: ImageOptions = {
    quality: 100,
    correctOrientation: true,
    resultType: CameraResultType.DataUrl,
  };
}
