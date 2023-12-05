import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {Blasts} from '@core/core.models';
import BlastList = Blasts.BlastList;

@Component({
    selector: 'events-select-blast-list-for-share-event',
    templateUrl: './events-select-blast-list-for-share-event.component.html',
    styleUrls: ['./events-select-blast-list-for-share-event.component.scss']
})
export class EventsSelectBlastListForShareEventComponent extends BaseComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    blast_list: BlastList[];

    blast_list_selected: BlastList;

    @Output()
    blastListSelected = new EventEmitter<BlastList>


    initializeComponent() {
    }

    print() {
        console.log('selected blast list : ', this.blast_list_selected);
    }

}
