import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {Blasts} from '@core/core.models';
import {BaseInfiniteScrollComponent} from "@core/components/base-infinite-scroll.component";
import {SortedPaginatedBaseComponent} from "@core/components/paginated-base.component";
import GetEventBlastByBlastList = BlastsRequests.GetEventBlastByBlastList;
import EventBlast = Blasts.EventBlast;
import BlastList = Blasts.BlastList;
import {BlastsRequests} from '../../../blasts/blasts.models';
import {BlastsService} from '../../../blasts/blasts.service';

@Component({
    selector: 'user-profiles-get-event-blast-by-blast-list',
    templateUrl: './user-profiles-get-event-blast-by-blast-list.component.html',
    styleUrls: ['./user-profiles-get-event-blast-by-blast-list.component.scss']
})
export class UserProfilesGetEventBlastByBlastListComponent extends SortedPaginatedBaseComponent {

    constructor(protected blastService: BlastsService, injector: Injector) {
        super(injector);
    }

    @Input()
    blastList: BlastList;

    eventBlast: EventBlast[];

    get_event_blast_by_blast_list_subscription$: Subscription;

    @Output()
    eventBlastReceived = new EventEmitter<EventBlast>();

    initializeComponent() {
        this.getEventBlastByBlastList(this.createRequestData());
    }

    createRequestData(first?: number, count?: number, column_name?: string,
                      column_order?: string): GetEventBlastByBlastList.Request {
        let request = new GetEventBlastByBlastList.Request();
        request.blast_list = this.blastList.blast_list_id;
        // request.blast_list = 'e4cf76ba-e300-4794-9165-93f1b8578f60';
        request = this.setLimits(request, first, count);
        request = this.setColumnOrders(request, column_name, column_order);
        return request;
    }

    getEventBlastByBlastList(request: GetEventBlastByBlastList.Request) {
        this.get_event_blast_by_blast_list_subscription$ = this.blastService.getEventBlastByBlastList(request)
            .pipe(CommonsService.deserializeMap(GetEventBlastByBlastList.Response))
            .subscribe(value => {
                this.eventBlast = value;
                this.eventBlastReceived.emit(value);
            });
    }

}

@Component({
    selector: 'user-profiles-get-event-blast-by-blast-list-no-template',
    templateUrl: './user-profiles-get-event-blast-by-blast-list-no-template.component.html',
    styleUrls: ['./user-profiles-get-event-blast-by-blast-list.component.scss']
})
export class UserProfilesGetEventBlastByBlastListNoTemplateComponent
    extends UserProfilesGetEventBlastByBlastListComponent {
}

@Component({
    selector: 'user-profiles-get-event-blast-by-blast-list-scrolling',
    templateUrl: './user-profiles-get-event-blast-by-blast-list-scrolling.component.html',
    styleUrls: ['./user-profiles-get-event-blast-by-blast-list.component.scss']
})
export class UserProfilesGetEventBlastByBlastListScrollingComponent
    extends BaseInfiniteScrollComponent<UserProfilesGetEventBlastByBlastListComponent> {

    @Input()
    blastList: BlastList;

    initializeComponent() {
    }


    // performScrolling() {
    //     this.scrollingComponent.getEventBlastByBlastList(
    //         this.scrollingComponent.createRequestData(this.currentCount, this.numberOfItems))
    // }
}
