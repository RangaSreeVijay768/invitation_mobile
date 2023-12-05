import {Component, Injector, Input} from "@angular/core";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {Events} from '@core/core.models';
import Event = Events.Event;
import {ClipboardService} from '@core/components/clipboard.service';

@Component({
    selector: 'events-share-event-modal-content',
    templateUrl: './events-share-event-modal-content.component.html',
    styleUrls: ['./events-share-event-modal-content.component.scss']
})
export class EventsShareEventModalContentComponent extends BaseModalContentComponent {

    constructor( injector: Injector, protected clipboardService: ClipboardService) {
        super( injector);
    }

    @Input()
    event: Event;

    initializeComponent() {

    }

    protected readonly ClipboardService = ClipboardService;
}

