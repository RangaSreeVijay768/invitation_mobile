import {Component, Injector} from '@angular/core';

import {PageComponent} from "@core/components/page.component";

@Component({
    selector: 'basic-main-page',
    templateUrl: './basic-main-page.component.html',
    styleUrls: ['./basic-main-page.component.scss']
})
export class BasicMainPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
