import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDashboardManageGuestListInwaitlistComponent } from './events-event-dashboard-manage-guest-list-inwaitlist.component';

describe('EventsEventDashboardManageGuestListInwaitlistComponent', () => {
  let component: EventsEventDashboardManageGuestListInwaitlistComponent;
  let fixture: ComponentFixture<EventsEventDashboardManageGuestListInwaitlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDashboardManageGuestListInwaitlistComponent]
    });
    fixture = TestBed.createComponent(EventsEventDashboardManageGuestListInwaitlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
