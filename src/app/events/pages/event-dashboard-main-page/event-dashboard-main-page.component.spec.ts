import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDashboardMainPageComponent } from './event-dashboard-main-page.component';

describe('EventDashboardMainPageComponent', () => {
  let component: EventDashboardMainPageComponent;
  let fixture: ComponentFixture<EventDashboardMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventDashboardMainPageComponent]
    });
    fixture = TestBed.createComponent(EventDashboardMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
