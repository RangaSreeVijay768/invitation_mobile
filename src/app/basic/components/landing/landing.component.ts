import {Component, Injector} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent extends BaseComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

}
