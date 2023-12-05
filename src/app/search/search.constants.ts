import {CommonsService} from '@core/commons.service';

export class SearchConstants {

  public static EVENTELASTICSEARCH_ENDPOINT = 'eventelasticsearch';
  public static EVENTELASTICSEARCH_SECURED_ENDPOINT = CommonsService.appendSecuredToUrl(
    SearchConstants.EVENTELASTICSEARCH_ENDPOINT);
}
