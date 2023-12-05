import {ComponentFixture, TestBed} from '@angular/core/testing';

import {
    EventsEventDetailsTicketTypeModalContentComponent
} from './events-event-details-ticket-type-modal-content.component';

describe('EventsEventDetailsTicketTypeModalContentComponent', () => {
  let component: EventsEventDetailsTicketTypeModalContentComponent;
  let fixture: ComponentFixture<EventsEventDetailsTicketTypeModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDetailsTicketTypeModalContentComponent]
    });
    fixture = TestBed.createComponent(EventsEventDetailsTicketTypeModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
