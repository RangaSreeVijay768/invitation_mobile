import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateEventFormComponent } from './events-create-event-form.component';

describe('EventsCreateEventFormComponent', () => {
  let component: EventsCreateEventFormComponent;
  let fixture: ComponentFixture<EventsCreateEventFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateEventFormComponent]
    });
    fixture = TestBed.createComponent(EventsCreateEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
