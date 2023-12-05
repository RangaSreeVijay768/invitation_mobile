import {Component, Injector} from "@angular/core";
import {PageComponent} from "@core/components/page.component";

@Component({
    selector: 'new-signup-page',
    templateUrl: './new-signup-page.component.html',
    styleUrls: ['./new-signup-page.component.scss']
})
export class NewSignupPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
