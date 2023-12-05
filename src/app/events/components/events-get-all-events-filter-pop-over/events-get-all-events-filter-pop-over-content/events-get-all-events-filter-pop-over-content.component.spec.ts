import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetAllEventsFilterPopOverContentComponent } from './events-get-all-events-filter-pop-over-content.component';

describe('EventsGetAllEventsFilterPopOverContentComponent', () => {
  let component: EventsGetAllEventsFilterPopOverContentComponent;
  let fixture: ComponentFixture<EventsGetAllEventsFilterPopOverContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetAllEventsFilterPopOverContentComponent]
    });
    fixture = TestBed.createComponent(EventsGetAllEventsFilterPopOverContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
