import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateOrderOrderItemOrderPaymentForEventWithIntentComponent } from './events-create-order-order-item-order-payment-for-event-with-intent.component';

describe('EventsCreateOrderOrderItemOrderPaymentForEventWithIntentComponent', () => {
  let component: EventsCreateOrderOrderItemOrderPaymentForEventWithIntentComponent;
  let fixture: ComponentFixture<EventsCreateOrderOrderItemOrderPaymentForEventWithIntentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateOrderOrderItemOrderPaymentForEventWithIntentComponent]
    });
    fixture = TestBed.createComponent(EventsCreateOrderOrderItemOrderPaymentForEventWithIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
