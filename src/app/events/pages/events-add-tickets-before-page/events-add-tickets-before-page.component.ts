import {Component, Injector} from '@angular/core';

import {PageComponent} from "@core/components/page.component";

@Component({
    selector: 'events-add-tickets-before-page',
    templateUrl: './events-add-tickets-before-page.component.html',
    styleUrls: ['./events-add-tickets-before-page.component.scss']
})
export class EventsAddTicketsBeforePageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
