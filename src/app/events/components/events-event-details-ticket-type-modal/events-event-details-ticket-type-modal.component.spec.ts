import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventsEventDetailsTicketTypeModalComponent} from './events-event-details-ticket-type-modal.component';

describe('EventsEventDetailsTicketTypeModalComponent', () => {
  let component: EventsEventDetailsTicketTypeModalComponent;
  let fixture: ComponentFixture<EventsEventDetailsTicketTypeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDetailsTicketTypeModalComponent]
    });
    fixture = TestBed.createComponent(EventsEventDetailsTicketTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
