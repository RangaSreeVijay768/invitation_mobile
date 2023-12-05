import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {environment} from "@environment/environment";
import {Observable} from "rxjs";
import {Events} from "@core/core.models";
import EventInvite = Events.EventInvite;
// import EventInfo = Events.EventInfo;
import Event = Events.Event;

@Component({
    selector: 'signedin-top-nav',
    templateUrl: './signedin-top-nav.component.html',
    styleUrls: ['./signedin-top-nav.component.scss']
})
export class SignedinTopNavComponent extends BaseComponent {

    ENVIRONMENT = environment;
    eventInfo$: Observable<Event>;
    // tslint:disable-next-line:variable-name
    event_info: Event;

    eventInvites: EventInvite[];

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    toggleSideNav() {
        document.body.classList.toggle('sb-sidenav-toggled');
    }

    navigateToLoginPage() {
        this.router.navigateByUrl('/basic/login');
    }
}
