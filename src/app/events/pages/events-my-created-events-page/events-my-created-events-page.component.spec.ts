import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsMyCreatedEventsPageComponent } from './events-my-created-events-page.component';

describe('EventsMyCreatedEventsPageComponent', () => {
  let component: EventsMyCreatedEventsPageComponent;
  let fixture: ComponentFixture<EventsMyCreatedEventsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsMyCreatedEventsPageComponent]
    });
    fixture = TestBed.createComponent(EventsMyCreatedEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
