import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreatePaidUserEventTicketFromOrderPaymentComponent } from './events-create-paid-user-event-ticket-from-order-payment.component';

describe('EventsCreatePaidUserEventTicketFromOrderPaymentComponent', () => {
  let component: EventsCreatePaidUserEventTicketFromOrderPaymentComponent;
  let fixture: ComponentFixture<EventsCreatePaidUserEventTicketFromOrderPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreatePaidUserEventTicketFromOrderPaymentComponent]
    });
    fixture = TestBed.createComponent(EventsCreatePaidUserEventTicketFromOrderPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
