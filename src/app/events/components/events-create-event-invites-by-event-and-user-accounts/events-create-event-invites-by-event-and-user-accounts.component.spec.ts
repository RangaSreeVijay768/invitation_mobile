import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateEventInvitesByEventAndUserAccountsComponent } from './events-create-event-invites-by-event-and-user-accounts.component';

describe('EventsCreateEventInvitesByEventAndUserAccountsComponent', () => {
  let component: EventsCreateEventInvitesByEventAndUserAccountsComponent;
  let fixture: ComponentFixture<EventsCreateEventInvitesByEventAndUserAccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateEventInvitesByEventAndUserAccountsComponent]
    });
    fixture = TestBed.createComponent(EventsCreateEventInvitesByEventAndUserAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
