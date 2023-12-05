import {Component, Injector} from '@angular/core';
import {PageComponent} from '@core/components/page.component';


@Component({
    selector: 'events-event-main-blank-page',
    templateUrl: './events-event-main-blank-page.component.html',
    styleUrls: ['./events-event-main-blank-page.component.scss']
})
export class EventsEventMainBlankPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
