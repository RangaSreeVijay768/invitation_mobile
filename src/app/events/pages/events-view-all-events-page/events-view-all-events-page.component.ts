import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";

@Component({
    selector: 'events-view-all-events-page',
    templateUrl: './events-view-all-events-page.component.html',
    styleUrls: ['./events-view-all-events-page.component.scss']
})
export class EventsViewAllEventsPageComponent extends PageComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
