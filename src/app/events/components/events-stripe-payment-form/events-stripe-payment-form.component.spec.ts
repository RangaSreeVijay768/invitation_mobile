import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsStripePaymentFormComponent } from './events-stripe-payment-form.component';

describe('EventsStripePaymentFormComponent', () => {
  let component: EventsStripePaymentFormComponent;
  let fixture: ComponentFixture<EventsStripePaymentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsStripePaymentFormComponent]
    });
    fixture = TestBed.createComponent(EventsStripePaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
