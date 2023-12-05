import {BaseComponent} from "@core/components/base.component";
import {Component, Injector} from '@angular/core';


@Component({
    selector: 'events-main-page',
    templateUrl: './events-main-page.component.html',
    styleUrls: ['./events-main-page.component.scss']
})
export class EventsMainPageComponent extends BaseComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
