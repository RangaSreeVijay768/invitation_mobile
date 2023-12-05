import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {
  EVENTS_EVENT_DASHBOARD_PROMO_CODES_CREATE_CODE_FORM_LAYOUT,
  EVENTS_EVENT_DASHBOARD_PROMOCODES_CREATE_CODE_FORM_MODEL
} from '@events/events.form.models';
import {EventsRequests} from '@events/events.models';
import CreatePromoCode = EventsRequests.CreatePromoCode;
import {EventsService} from '@events/events.service';

@Component({
  selector: 'events-event-dashboard-promocodes-create-code-form',
  templateUrl: './events-event-dashboard-promocodes-create-code-form.component.html',
  styleUrls: ['./events-event-dashboard-promocodes-create-code-form.component.scss']
})
export class EventsEventDashboardPromocodesCreateCodeFormComponent extends FormComponent {

  constructor(protected eventsService: EventsService, injector: Injector) {
    super(injector);
  }

  @Output()
  promoCodeCreated = new EventEmitter<string>();

  formLayout = EVENTS_EVENT_DASHBOARD_PROMO_CODES_CREATE_CODE_FORM_LAYOUT;

  create_code_subscription$: Subscription;
  code_types = ['Shows hidden ticket', 'Activates discount'];
  display_code_type = this.code_types[0];

  change_display_code_type(selected) {
    this.display_code_type = selected;
  }

  initializeComponent() {
  }

  afterInitializeComponent() {
  }

  getFormModel(): DynamicFormControlModel[] {
    return EVENTS_EVENT_DASHBOARD_PROMOCODES_CREATE_CODE_FORM_MODEL();
  }

  createRequestData(): CreatePromoCode.Request {
    console.log(this.getDateModelValue('end_time'));
    const request = new CreatePromoCode.Request();
    request.available_quantity = this.getInputModelValueAsNumber('total_quantity');
    request.discount_percentage = this.getInputModelValueAsNumber('discount_amount_percentage');
    request.end_time = CommonsService.getDateTimeFromDate(this.getDateModelValue('end_time'));
    request.flat_discount = this.getInputModelValueAsNumber('discount_amount_flat');
    request.promo_code = this.getInputModelValueAsString('promo_code');
    request.promo_code_name = this.getInputModelValueAsString('promo_code');
    request.promo_code_type = 'DISCOUNT';
    request.start_time = CommonsService.getDateTimeFromDate(this.getDateModelValue('start_time'));
    request.total_quantity = this.getInputModelValueAsNumber('total_quantity');
    return request;
  }

  createPromoCode = (request: CreatePromoCode.Request) => {
    this.create_code_subscription$ = this.eventsService.createPromoCode(request)
      .subscribe(value => {
        // @ts-ignore
        this.promoCodeCreated.emit(value);
      });
  };
}
