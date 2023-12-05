import {Injectable} from '@angular/core';
import {LaunchReview} from "@awesome-cordova-plugins/launch-review/ngx";

@Injectable({
  providedIn: 'root'
})
export class AppLaunchReviewService {

  constructor(protected launchReview: LaunchReview) { }

}
