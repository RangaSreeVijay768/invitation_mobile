import {Injectable} from '@angular/core';
import {Deeplinks} from '@awesome-cordova-plugins/deeplinks/ngx';
import {NavController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class DeeplinksService {

    constructor(private deeplinks: Deeplinks, protected navController: NavController) {
    }

    initializeDeeplinks() {
        // this.deeplinks.routeWithNavController(this.navController, {}).subscribe(match => {
        //     // match.$route - the route we matched, which is the matched entry from the arguments to route()
        //     // match.$args - the args passed in the link
        //     // match.$link - the full link data
        //     console.log('Successfully matched route', match);
        //     this.navController.navigateForward(match.$link.path);
        // }, nomatch => {
        //     // nomatch.$link - the full link data
        //     console.error('Got a deeplink that didn\'t match', nomatch);
        // });
    }

}

