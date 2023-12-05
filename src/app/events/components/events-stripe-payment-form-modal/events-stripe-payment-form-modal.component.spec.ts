import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsStripePaymentFormModalComponent } from './events-stripe-payment-form-modal.component';

describe('EventsStripePaymentFormModalComponent', () => {
  let component: EventsStripePaymentFormModalComponent;
  let fixture: ComponentFixture<EventsStripePaymentFormModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsStripePaymentFormModalComponent]
    });
    fixture = TestBed.createComponent(EventsStripePaymentFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
