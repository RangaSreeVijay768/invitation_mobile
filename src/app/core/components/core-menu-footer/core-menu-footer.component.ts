import {BaseComponent} from "@core/components/base.component";
import {Component, Injector} from "@angular/core";

@Component({
    selector: 'core-menu-footer',
    templateUrl: './core-menu-footer.component.html',
    styleUrls: ['./core-menu-footer.component.scss']
})
export class CoreMenuFooterComponent extends BaseComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


    createRequestData() {

    }

}
