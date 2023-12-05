import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventsRsvpFreeModalComponent} from './events-rsvp-free-modal.component';

describe('EventsRsvpFreeModalComponent', () => {
  let component: EventsRsvpFreeModalComponent;
  let fixture: ComponentFixture<EventsRsvpFreeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsRsvpFreeModalComponent]
    });
    fixture = TestBed.createComponent(EventsRsvpFreeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
