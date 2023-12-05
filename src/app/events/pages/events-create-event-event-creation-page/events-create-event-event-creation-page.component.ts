import {Component, Injector} from '@angular/core';
import {PageComponent} from '@core/components/page.component';
import {Location} from '@angular/common';

@Component({
    selector: 'events-create-event-event-creation-page',
    templateUrl: './events-create-event-event-creation-page.component.html',
    styleUrls: ['./events-create-event-event-creation-page.component.scss']
})
export class EventsCreateEventEventCreationPageComponent extends PageComponent {

    constructor(protected location: Location, injector: Injector) {
        super(injector);
    }

    event: Event;
    displayMessage = '';
    displayMessage1 = 'Select type';

    Options = ['Only hosts can invite guests', 'Invitees can invite guests'];

    Options1 = ['Night life',
        'Concert/Festival',
        'Conference',
        'Seminar/Workshop',
        'Exhibit/Show',
        'Networking',
        'Happy Hour',
        'House Party',
        'Birthday Party',
        'Other...'];

    initializeComponent() {
    }


    changeMessage(selectedItem: string) {
        this.displayMessage = selectedItem;
    }

    changeMessage1(selected: string) {
        this.displayMessage1 = selected;
    }

    navigateToDashboardPage(event_id: string) {
        this.router.navigateByUrl(`/signedin/events/eventdashboard/${event_id}/ticketdetails/tickettype`);
    }

    goBack() {
        this.location.back();
    }

}
