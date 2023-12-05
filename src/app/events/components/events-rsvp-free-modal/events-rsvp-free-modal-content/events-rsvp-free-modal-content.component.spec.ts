import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventsRsvpFreeModalContentComponent} from './events-rsvp-free-modal-content.component';

describe('EventsRsvpFreeModalContentComponent', () => {
  let component: EventsRsvpFreeModalContentComponent;
  let fixture: ComponentFixture<EventsRsvpFreeModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsRsvpFreeModalContentComponent]
    });
    fixture = TestBed.createComponent(EventsRsvpFreeModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
