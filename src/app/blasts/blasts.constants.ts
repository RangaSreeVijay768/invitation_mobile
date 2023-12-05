import {CommonsService} from "@core/commons.service";

export class BlastsConstants {
  public static BLASTS_ENDPOINT = 'blasts';
  public static BLASTS_SECURED_ENDPOINT = CommonsService.appendSecuredToUrl(BlastsConstants.BLASTS_ENDPOINT);

}
