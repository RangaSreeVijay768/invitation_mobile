import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetEventInvitesByEventComponent } from './events-get-event-invites-by-event.component';

describe('EventsGetEventInvitesByEventComponent', () => {
  let component: EventsGetEventInvitesByEventComponent;
  let fixture: ComponentFixture<EventsGetEventInvitesByEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetEventInvitesByEventComponent]
    });
    fixture = TestBed.createComponent(EventsGetEventInvitesByEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
