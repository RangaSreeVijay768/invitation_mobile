import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPastAttendeesGetEventAttendeesOfUserAccountComponent } from './events-past-attendees-get-event-attendees-of-user-account.component';

describe('EventsPastAttendeesGetEventAttendeesOfUserAccountComponent', () => {
  let component: EventsPastAttendeesGetEventAttendeesOfUserAccountComponent;
  let fixture: ComponentFixture<EventsPastAttendeesGetEventAttendeesOfUserAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsPastAttendeesGetEventAttendeesOfUserAccountComponent]
    });
    fixture = TestBed.createComponent(EventsPastAttendeesGetEventAttendeesOfUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
