import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetAllEventsComponent } from './events-get-all-events.component';

describe('EventsGetAllEventsComponent', () => {
  let component: EventsGetAllEventsComponent;
  let fixture: ComponentFixture<EventsGetAllEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetAllEventsComponent]
    });
    fixture = TestBed.createComponent(EventsGetAllEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
