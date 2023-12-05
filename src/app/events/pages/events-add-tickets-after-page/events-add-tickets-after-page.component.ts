import {Component, Injector} from '@angular/core';

import {PageComponent} from "@core/components/page.component";

@Component({
    selector: 'events-add-tickets-after-page',
    templateUrl: './events-add-tickets-after-page.component.html',
    styleUrls: ['./events-add-tickets-after-page.component.scss']
})
export class EventsAddTicketsAfterPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
