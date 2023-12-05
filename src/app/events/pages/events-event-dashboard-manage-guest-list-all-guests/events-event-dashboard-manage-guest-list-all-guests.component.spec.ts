import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDashboardManageGuestListAllGuestsComponent } from './events-event-dashboard-manage-guest-list-all-guests.component';

describe('EventsEventDashboardManageGuestListAllGuestsComponent', () => {
  let component: EventsEventDashboardManageGuestListAllGuestsComponent;
  let fixture: ComponentFixture<EventsEventDashboardManageGuestListAllGuestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDashboardManageGuestListAllGuestsComponent]
    });
    fixture = TestBed.createComponent(EventsEventDashboardManageGuestListAllGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
