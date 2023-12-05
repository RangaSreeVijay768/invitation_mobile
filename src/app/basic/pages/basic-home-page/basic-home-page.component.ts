import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {PageComponent} from "@core/components/page.component";
import {Events} from "@core/core.models";
import EventInfo = Events.EventInfo;
import UserEventInfo = Events.UserEventInfo;
import {CommonsService} from "@core/commons.service";
import {SearchRequests} from "../../../search/search.models";
import SearchEventInfos = SearchRequests.SearchEventInfos;
import {SortedPaginatedBaseComponent} from "@core/components/paginated-base.component";
import {SearchService} from "../../../search/search.service";
import {Subscription} from "@node-modules/rxjs";

@Component({
  selector: 'basic-home-page',
  templateUrl: './basic-home-page.component.html',
  styleUrls: ['./basic-home-page.component.scss']
})
export class BasicHomePageComponent extends SortedPaginatedBaseComponent {

  constructor(protected searchService: SearchService, injector: Injector) {
    super(injector);
  }

  @Input()
  locationType: string;
  @Input()
  ticketType: string;
  @Input()
  eventStatus: string;

  filter_type = 'ALL';

  location_type: string;
  ticket_type: string;

  event_infos: EventInfo[];
  event_info: EventInfo;

  @Output()
  eventInfosReceived = new EventEmitter<EventInfo[]>();


  search_event_infos_subscription$: Subscription;


  initializeComponent() {
    this.searchEventInfos(this.createRequestData());
  }

  setEventFilters(location_type?: string, ticket_type?: string) {
    this.location_type = location_type;
    this.ticket_type = ticket_type;
  }

  createRequestData(location_type?: string, ticke_type?: string, event_status?: string, first?: number,
                    count?: number, column_name?: string,
                    column_order?: string): SearchEventInfos.Request {
    let request = new SearchEventInfos.Request();
    request.location_type = location_type || this.locationType;
    request.ticket_type = ticke_type || this.ticketType;
    request.event_status = event_status || this.eventStatus;
    request = this.setLimits(request, first, count);
    request = this.setColumnOrders(request, column_name, column_order);
    return request;
  }

  searchEventInfos(request: SearchEventInfos.Request) {
    this.search_event_infos_subscription$ = this.searchService.searchEventInfos(request)
        .pipe(CommonsService.deserializeMap(SearchEventInfos.Response))
        .subscribe(value => {
          this.event_infos = value;
          this.eventInfosReceived.emit(value);
        });
  }

  updateFilters(location_type?: string, ticket_type?: string) {
    this.locationType = location_type;
    this.ticketType = ticket_type;
    this.searchEventInfos(this.createRequestData());
  }


  print(curr) {
    console.log(curr);
  }


}
