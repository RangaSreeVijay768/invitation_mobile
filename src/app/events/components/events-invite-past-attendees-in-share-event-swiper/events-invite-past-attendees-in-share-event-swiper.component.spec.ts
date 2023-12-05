import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsInvitePastAttendeesInShareEventSwiperComponent } from './events-invite-past-attendees-in-share-event-swiper.component';

describe('EventsInvitePastAttendeesInShareEventSwiperComponent', () => {
  let component: EventsInvitePastAttendeesInShareEventSwiperComponent;
  let fixture: ComponentFixture<EventsInvitePastAttendeesInShareEventSwiperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsInvitePastAttendeesInShareEventSwiperComponent]
    });
    fixture = TestBed.createComponent(EventsInvitePastAttendeesInShareEventSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
