import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetAllEventsFilterComponent } from './events-get-all-events-filter.component';

describe('EventsGetAllEventsFilterComponent', () => {
  let component: EventsGetAllEventsFilterComponent;
  let fixture: ComponentFixture<EventsGetAllEventsFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetAllEventsFilterComponent]
    });
    fixture = TestBed.createComponent(EventsGetAllEventsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
