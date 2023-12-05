import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsMyInvitedEventsPageComponent } from './events-my-invited-events-page.component';

describe('EventsMyInvitedEventsPageComponent', () => {
  let component: EventsMyInvitedEventsPageComponent;
  let fixture: ComponentFixture<EventsMyInvitedEventsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsMyInvitedEventsPageComponent]
    });
    fixture = TestBed.createComponent(EventsMyInvitedEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
