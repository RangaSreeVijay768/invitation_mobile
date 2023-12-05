import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDashboardPromocodesCreateCodeModalComponent } from './events-event-dashboard-promocodes-create-code-modal.component';

describe('EventsEventDashboardPromocodesCreateCodeModalComponent', () => {
  let component: EventsEventDashboardPromocodesCreateCodeModalComponent;
  let fixture: ComponentFixture<EventsEventDashboardPromocodesCreateCodeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDashboardPromocodesCreateCodeModalComponent]
    });
    fixture = TestBed.createComponent(EventsEventDashboardPromocodesCreateCodeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
