import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsInviteToEventInShareEventSwiperComponent } from './events-invite-to-event-in-share-event-swiper.component';

describe('EventsInviteToEventInShareEventSwiperComponent', () => {
  let component: EventsInviteToEventInShareEventSwiperComponent;
  let fixture: ComponentFixture<EventsInviteToEventInShareEventSwiperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsInviteToEventInShareEventSwiperComponent]
    });
    fixture = TestBed.createComponent(EventsInviteToEventInShareEventSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
