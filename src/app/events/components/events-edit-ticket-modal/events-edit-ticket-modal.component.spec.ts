import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEditTicketModalComponent } from './events-edit-ticket-modal.component';

describe('EventsEditTicketModalComponent', () => {
  let component: EventsEditTicketModalComponent;
  let fixture: ComponentFixture<EventsEditTicketModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEditTicketModalComponent]
    });
    fixture = TestBed.createComponent(EventsEditTicketModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
