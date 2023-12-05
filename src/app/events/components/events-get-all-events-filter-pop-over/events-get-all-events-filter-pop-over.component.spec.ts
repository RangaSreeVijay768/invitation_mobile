import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetAllEventsFilterPopOverComponent } from './events-get-all-events-filter-pop-over.component';

describe('EventsGetAllEventsFilterPopOverComponent', () => {
  let component: EventsGetAllEventsFilterPopOverComponent;
  let fixture: ComponentFixture<EventsGetAllEventsFilterPopOverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetAllEventsFilterPopOverComponent]
    });
    fixture = TestBed.createComponent(EventsGetAllEventsFilterPopOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
