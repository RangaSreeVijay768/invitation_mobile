import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsMyEventsPageComponent } from './events-my-events-page.component';

describe('EventsMyEventsPageComponent', () => {
  let component: EventsMyEventsPageComponent;
  let fixture: ComponentFixture<EventsMyEventsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsMyEventsPageComponent]
    });
    fixture = TestBed.createComponent(EventsMyEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
