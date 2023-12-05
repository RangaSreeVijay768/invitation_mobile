import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDashboardManageGuestListCheckedinComponent } from './events-event-dashboard-manage-guest-list-checkedin.component';

describe('EventsEventDashboardManageGuestListCheckedinComponent', () => {
  let component: EventsEventDashboardManageGuestListCheckedinComponent;
  let fixture: ComponentFixture<EventsEventDashboardManageGuestListCheckedinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDashboardManageGuestListCheckedinComponent]
    });
    fixture = TestBed.createComponent(EventsEventDashboardManageGuestListCheckedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
