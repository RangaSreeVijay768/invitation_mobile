import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetOrderItemsCountByEventTicketComponent } from './events-get-order-items-count-by-event-ticket.component';

describe('EventsGetOrderItemsCountByEventTicketComponent', () => {
  let component: EventsGetOrderItemsCountByEventTicketComponent;
  let fixture: ComponentFixture<EventsGetOrderItemsCountByEventTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetOrderItemsCountByEventTicketComponent]
    });
    fixture = TestBed.createComponent(EventsGetOrderItemsCountByEventTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
