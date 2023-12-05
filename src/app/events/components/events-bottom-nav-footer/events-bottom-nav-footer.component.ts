import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'events-bottom-nav-footer',
    templateUrl: './events-bottom-nav-footer.component.html',
    styleUrls: ['./events-bottom-nav-footer.component.scss']
})
export class EventsBottomNavFooterComponent extends BaseComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
