import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetEventPromoCodesByEventComponent } from './events-get-event-promo-codes-by-event.component';

describe('EventsGetEventPromoCodesByEventComponent', () => {
  let component: EventsGetEventPromoCodesByEventComponent;
  let fixture: ComponentFixture<EventsGetEventPromoCodesByEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetEventPromoCodesByEventComponent]
    });
    fixture = TestBed.createComponent(EventsGetEventPromoCodesByEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
