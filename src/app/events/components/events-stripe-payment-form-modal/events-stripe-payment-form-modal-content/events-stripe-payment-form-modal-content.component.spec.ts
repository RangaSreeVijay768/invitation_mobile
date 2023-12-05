import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsStripePaymentFormModalContentComponent } from './events-stripe-payment-form-modal-content.component';

describe('EventsStripePaymentFormModalContentComponent', () => {
  let component: EventsStripePaymentFormModalContentComponent;
  let fixture: ComponentFixture<EventsStripePaymentFormModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsStripePaymentFormModalContentComponent]
    });
    fixture = TestBed.createComponent(EventsStripePaymentFormModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
