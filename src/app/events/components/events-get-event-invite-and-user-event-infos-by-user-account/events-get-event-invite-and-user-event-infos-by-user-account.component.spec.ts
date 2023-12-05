import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetEventInviteAndUserEventInfosByUserAccountComponent } from './events-get-event-invite-and-user-event-infos-by-user-account.component';

describe('EventsGetEventInviteAndUserEventInfosByUserAccountComponent', () => {
  let component: EventsGetEventInviteAndUserEventInfosByUserAccountComponent;
  let fixture: ComponentFixture<EventsGetEventInviteAndUserEventInfosByUserAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetEventInviteAndUserEventInfosByUserAccountComponent]
    });
    fixture = TestBed.createComponent(EventsGetEventInviteAndUserEventInfosByUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
