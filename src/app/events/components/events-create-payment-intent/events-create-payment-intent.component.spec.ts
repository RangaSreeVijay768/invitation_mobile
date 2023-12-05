import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreatePaymentIntentComponent } from './events-create-payment-intent.component';

describe('EventsCreatePaymentIntentComponent', () => {
  let component: EventsCreatePaymentIntentComponent;
  let fixture: ComponentFixture<EventsCreatePaymentIntentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreatePaymentIntentComponent]
    });
    fixture = TestBed.createComponent(EventsCreatePaymentIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
