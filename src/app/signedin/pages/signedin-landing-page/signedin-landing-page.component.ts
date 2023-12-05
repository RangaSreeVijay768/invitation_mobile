import {Component, Injector} from '@angular/core';
import {PageComponent} from '@core/components/page.component';

@Component({
    selector: 'signedin-landing-page',
    templateUrl: './signedin-landing-page.component.html',
    styleUrls: ['./signedin-landing-page.component.scss']
})
export class SignedinLandingPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }
}
