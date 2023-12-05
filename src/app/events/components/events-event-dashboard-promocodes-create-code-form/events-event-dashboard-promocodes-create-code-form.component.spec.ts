import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDashboardPromocodesCreateCodeFormComponent } from './events-event-dashboard-promocodes-create-code-form.component';

describe('EventsEventDashboardPromocodesCreateCodeFormComponent', () => {
  let component: EventsEventDashboardPromocodesCreateCodeFormComponent;
  let fixture: ComponentFixture<EventsEventDashboardPromocodesCreateCodeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDashboardPromocodesCreateCodeFormComponent]
    });
    fixture = TestBed.createComponent(EventsEventDashboardPromocodesCreateCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
