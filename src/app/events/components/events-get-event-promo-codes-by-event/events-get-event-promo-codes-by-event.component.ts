import {Component, EventEmitter, Injector, Input, Output, TemplateRef, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';
import {Core, Events} from '@core/core.models';
// import {CoreDatatableComponent} from '@core/components/core-datatable.component';
import {EventsRequests} from '@events/events.models';
import GetEventPromoCodesByEvent = EventsRequests.GetEventPromoCodesByEvent;
import Event = Events.Event;
import GetEventAttendeesByEvent = EventsRequests.GetEventAttendeesByEvent;
import {EventsService} from '@events/events.service';
import EventPromoCode = Events.EventPromoCode;

@Component({
    selector: 'events-get-event-promo-codes-by-event',
    templateUrl: './events-get-event-promo-codes-by-event.component.html',
    styleUrls: ['./events-get-event-promo-codes-by-event.component.scss']
})
export class EventsGetEventPromoCodesByEventComponent extends SortedPaginatedBaseComponent {

    @Input()
    event: Event;

    eventPromoCodes: EventPromoCode[];

    @Output()
    eventPromoCodesReceived = new EventEmitter<EventPromoCode[]>();

    get_event_promo_codes_by_event_subscription$: Subscription;

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.getEventPromoCodesByEvent(this.createRequestData());
    }

    createRequestData(first?: number, count?: number, event?: string, column_name?: string,
                      column_order?: string): GetEventPromoCodesByEvent.Request {
        let request = new GetEventPromoCodesByEvent.Request();
        request.event = event || this.event.event_id;
        request = this.setLimits(request, first, count);
        request = this.setColumnOrders(request, column_name, column_order);
        return request;
    }

    getEventPromoCodesByEvent(request: GetEventPromoCodesByEvent.Request) {
        this.get_event_promo_codes_by_event_subscription$ = this.eventsService.getEventPromoCodesByEvent(request)
            .pipe(CommonsService.deserializeMap(GetEventPromoCodesByEvent.Response))
            .subscribe(value => {
                this.eventPromoCodes = value;
                this.eventPromoCodesReceived.emit(value);
            });
    }
}

@Component({
    selector: 'events-get-event-promo-codes-by-event-no-template',
    templateUrl: './events-get-event-promo-codes-by-event-no-template.component.html',
    styleUrls: ['./events-get-event-promo-codes-by-event.component.scss']
})
export class EventsGetEventPromoCodesByEventNoTemplateComponent extends EventsGetEventPromoCodesByEventComponent {
}

// @Component({
//     selector: 'events-get-event-promo-codes-by-event-datatable',
//     templateUrl: './events-get-event-promo-codes-by-event-datatable.component.html',
//     styleUrls: ['./events-get-event-promo-codes-by-event.component.scss']
// })
// export class EventsGetEventPromoCodesByEventDatatableComponent
//     extends CoreDatatableComponent<EventsGetEventPromoCodesByEventNoTemplateComponent, EventPromoCode> {
//
//     @Input()
//     event: Event;
//
//     constructor(injector: Injector) {
//         super(injector);
//     }
//
//
//     initializeComponent() {
//         this.columns = [
//           {name:'Name', prop:'name'},
//           {name: 'Promo code id', prop: 'promo_code_id'},
//           {name: 'Status', prop:'status'}
//           // {name: 'Name', prop: 'wellness_benefit_name'},
//           // {name: 'Actions', prop: 'user_account', cellTemplate: this.actionsTemplate},
//         ];
//
//         this.component.eventPromoCodesReceived.subscribe(value => {
//             this.rows = value;
//         });
//     }
//
//     makeAPICall(first: number, count: number) {
//         this.component.getEventPromoCodesByEvent(this.component.createRequestData(first, count));
//     }
// }
