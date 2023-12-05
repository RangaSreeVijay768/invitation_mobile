import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";

@Component({
    selector: 'balsts-blasts-filter-modal-content',
    templateUrl: './balsts-blasts-filter-modal-content.component.html',
    styleUrls: ['./balsts-blasts-filter-modal-content.component.scss']
})
export class BalstsBlastsFilterModalContentComponent extends BaseModalContentComponent {

    constructor( injector: Injector) {
        super( injector);
    }

    filter_type: string;

    filters = [
        {
            label: 'ALL',
            value: undefined,
            icon: 'globe-outline'
        },
        {
            label: 'EMAIL',
            value: 'EMAIL',
            icon: 'mail-outline'
        },
        {
            label: 'WHATSAPP',
            value: 'WHATS_APP',
            icon: 'logo-whatsapp'
        },
        {
            label: 'Text',
            value: 'SMS',
            icon: 'chatbox-ellipses-outline'
        }
    ]

    initializeComponent() {
    }

}

