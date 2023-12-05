import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetEventsByCreatedByComponent } from './events-get-events-by-created-by.component';

describe('EventsGetEventsByCreatedByComponent', () => {
  let component: EventsGetEventsByCreatedByComponent;
  let fixture: ComponentFixture<EventsGetEventsByCreatedByComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetEventsByCreatedByComponent]
    });
    fixture = TestBed.createComponent(EventsGetEventsByCreatedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
