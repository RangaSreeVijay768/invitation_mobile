import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateEventEventCreationPageComponent } from './events-create-event-event-creation-page.component';

describe('EventsCreateEventEventCreationPageComponent', () => {
  let component: EventsCreateEventEventCreationPageComponent;
  let fixture: ComponentFixture<EventsCreateEventEventCreationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateEventEventCreationPageComponent]
    });
    fixture = TestBed.createComponent(EventsCreateEventEventCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
