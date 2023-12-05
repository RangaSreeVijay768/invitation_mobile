import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEditTicketModalContentComponent } from './events-edit-ticket-modal-content.component';

describe('EventsEditTicketModalContentComponent', () => {
  let component: EventsEditTicketModalContentComponent;
  let fixture: ComponentFixture<EventsEditTicketModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEditTicketModalContentComponent]
    });
    fixture = TestBed.createComponent(EventsEditTicketModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
