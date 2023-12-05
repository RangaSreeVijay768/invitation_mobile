import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDashboardPromocodesCreateCodeModalContentComponent } from './events-event-dashboard-promocodes-create-code-modal-content.component';

describe('EventsEventDashboardPromocodesCreateCodeModalContentComponent', () => {
  let component: EventsEventDashboardPromocodesCreateCodeModalContentComponent;
  let fixture: ComponentFixture<EventsEventDashboardPromocodesCreateCodeModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDashboardPromocodesCreateCodeModalContentComponent]
    });
    fixture = TestBed.createComponent(EventsEventDashboardPromocodesCreateCodeModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
