import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEditEventFormComponent } from './events-edit-event-form.component';

describe('EventsEditEventFormComponent', () => {
  let component: EventsEditEventFormComponent;
  let fixture: ComponentFixture<EventsEditEventFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEditEventFormComponent]
    });
    fixture = TestBed.createComponent(EventsEditEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
