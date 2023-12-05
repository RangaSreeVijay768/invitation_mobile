import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreatePaidUserEventTicketFromOrderPaymentWithIntentComponent } from './events-create-paid-user-event-ticket-from-order-payment-with-intent.component';

describe('EventsCreatePaidUserEventTicketFromOrderPaymentWithIntentComponent', () => {
  let component: EventsCreatePaidUserEventTicketFromOrderPaymentWithIntentComponent;
  let fixture: ComponentFixture<EventsCreatePaidUserEventTicketFromOrderPaymentWithIntentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreatePaidUserEventTicketFromOrderPaymentWithIntentComponent]
    });
    fixture = TestBed.createComponent(EventsCreatePaidUserEventTicketFromOrderPaymentWithIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
