import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventStartDateFormComponent } from './events-event-start-date-form.component';

describe('EventsEventStartDateFormComponent', () => {
  let component: EventsEventStartDateFormComponent;
  let fixture: ComponentFixture<EventsEventStartDateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventStartDateFormComponent]
    });
    fixture = TestBed.createComponent(EventsEventStartDateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
