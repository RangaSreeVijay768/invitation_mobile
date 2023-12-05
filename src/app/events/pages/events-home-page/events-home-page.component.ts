import {Component, Injector} from '@angular/core';

import {PageComponent} from "@core/components/page.component";
import {Events} from '@core/core.models';
import EventInfo = Events.EventInfo;

@Component({
    selector: 'events-home-page',
    templateUrl: './events-home-page.component.html',
    styleUrls: ['./events-home-page.component.scss']
})
export class EventsHomePageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    filter_type = 'ALL';

    location_type: string;
    ticket_type: string;

    event_infos: EventInfo[];
    event_info: EventInfo;
    initializeComponent() {
    }

    setEventFilters(location_type?: string, ticket_type?: string) {
        this.location_type = location_type;
        this.ticket_type = ticket_type;
    }

}
