import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateEventTicketAndEventTicketSaleItemFormComponent } from './events-create-event-ticket-and-event-ticket-sale-item-form.component';

describe('EventsCreateEventTicketAndEventTicketSaleItemFormComponent', () => {
  let component: EventsCreateEventTicketAndEventTicketSaleItemFormComponent;
  let fixture: ComponentFixture<EventsCreateEventTicketAndEventTicketSaleItemFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateEventTicketAndEventTicketSaleItemFormComponent]
    });
    fixture = TestBed.createComponent(EventsCreateEventTicketAndEventTicketSaleItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
