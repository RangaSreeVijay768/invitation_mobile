import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEditEventPageComponent } from './events-edit-event-page.component';

describe('EventsEditEventPageComponent', () => {
  let component: EventsEditEventPageComponent;
  let fixture: ComponentFixture<EventsEditEventPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEditEventPageComponent]
    });
    fixture = TestBed.createComponent(EventsEditEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
