import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetEventAttendeesOfUserAccountComponent } from './events-get-event-attendees-of-user-account.component';

describe('EventsGetEventAttendeesOfUserAccountComponent', () => {
  let component: EventsGetEventAttendeesOfUserAccountComponent;
  let fixture: ComponentFixture<EventsGetEventAttendeesOfUserAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetEventAttendeesOfUserAccountComponent]
    });
    fixture = TestBed.createComponent(EventsGetEventAttendeesOfUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
