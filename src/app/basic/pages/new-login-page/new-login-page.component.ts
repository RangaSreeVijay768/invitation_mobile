import {Component, Injector} from "@angular/core";
import {PageComponent} from "@core/components/page.component";

@Component({
    selector: 'new-login-page',
    templateUrl: './new-login-page.component.html',
    styleUrls: ['./new-login-page.component.scss']
})
export class NewLoginPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
