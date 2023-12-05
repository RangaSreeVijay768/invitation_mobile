import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsViewAllEventsPageComponent } from './events-view-all-events-page.component';

describe('EventsViewAllEventsPageComponent', () => {
  let component: EventsViewAllEventsPageComponent;
  let fixture: ComponentFixture<EventsViewAllEventsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsViewAllEventsPageComponent]
    });
    fixture = TestBed.createComponent(EventsViewAllEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
