import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";

@Component({
    selector: 'user-profiles-blasts-default-page',
    templateUrl: './user-profiles-blasts-default-page.component.html',
    styleUrls: ['./user-profiles-blasts-default-page.component.scss']
})
export class UserProfilesBlastsDefaultPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
