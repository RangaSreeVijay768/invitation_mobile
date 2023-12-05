import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateOrderItemPaymentForEventComponent } from './events-create-order-item-payment-for-event.component';

describe('EventsCreateOrderItemPaymentForEventComponent', () => {
  let component: EventsCreateOrderItemPaymentForEventComponent;
  let fixture: ComponentFixture<EventsCreateOrderItemPaymentForEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateOrderItemPaymentForEventComponent]
    });
    fixture = TestBed.createComponent(EventsCreateOrderItemPaymentForEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
