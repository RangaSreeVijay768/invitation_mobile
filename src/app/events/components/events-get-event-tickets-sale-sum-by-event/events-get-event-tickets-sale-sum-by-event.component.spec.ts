import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetEventTicketsSaleSumByEventComponent } from './events-get-event-tickets-sale-sum-by-event.component';

describe('EventsGetEventTicketsSaleSumByEventComponent', () => {
  let component: EventsGetEventTicketsSaleSumByEventComponent;
  let fixture: ComponentFixture<EventsGetEventTicketsSaleSumByEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetEventTicketsSaleSumByEventComponent]
    });
    fixture = TestBed.createComponent(EventsGetEventTicketsSaleSumByEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
