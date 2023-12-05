import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDashboardManageGuestListMainPageComponent } from './events-event-dashboard-manage-guest-list-main-page.component';

describe('EventsEventDashboardManageGuestListMainPageComponent', () => {
  let component: EventsEventDashboardManageGuestListMainPageComponent;
  let fixture: ComponentFixture<EventsEventDashboardManageGuestListMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDashboardManageGuestListMainPageComponent]
    });
    fixture = TestBed.createComponent(EventsEventDashboardManageGuestListMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
