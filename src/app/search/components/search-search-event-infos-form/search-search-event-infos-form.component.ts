import {Component, EventEmitter, Injector, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {SearchService} from '../../search.service';
import {SearchRequests} from '../../search.models';
import {Events} from '@core/core.models';
import {SEARCH_SEARCH_EVENT_INFOS_FORM_MODEL} from '../../search.form.models';
import {EVENTS_CREATE_EVENT_FREE_TICKET_FORM_LAYOUT} from '@events/events.form.models';
import SearchEventInfos = SearchRequests.SearchEventInfos;
import EventInfo = Events.EventInfo;

@Component({
    selector: 'search-search-event-infos-form',
    templateUrl: './search-search-event-infos-form.component.html',
    styleUrls: ['./search-search-event-infos-form.component.scss']
})
export class SearchSearchEventInfosFormComponent extends FormComponent {

  constructor(protected searchService: SearchService, injector: Injector) {
    super(injector);
  }

  formLayout = EVENTS_CREATE_EVENT_FREE_TICKET_FORM_LAYOUT;

  @Output()
  eventSeached = new EventEmitter<EventInfo>();

  initializeComponent() {
    this.searchEventInfos(this.createRequestData());
  }

  createRequestData(): SearchEventInfos.Request {
    const request = new SearchEventInfos.Request();
    request.query = this.getInputModelValueAsString('query');
    return request;
  }

  search_event_infos_subscription$: Subscription;

  searchEventInfos(request: SearchEventInfos.Request) {
    this.search_event_infos_subscription$ = this.searchService.searchEventInfos(request)
      .pipe(CommonsService.deserializeMap(SearchEventInfos.Response))
      .subscribe(value => {
        this.eventSeached.emit(value);
      });
  }

  afterInitializeComponent() {
  }

  getFormModel(): DynamicFormControlModel[] {
    return SEARCH_SEARCH_EVENT_INFOS_FORM_MODEL();
  }
}
