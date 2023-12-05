import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetUserEventTicketsByUserAccountComponent } from './events-get-user-event-tickets-by-user-account.component';

describe('EventsGetUserEventTicketsByUserAccountComponent', () => {
  let component: EventsGetUserEventTicketsByUserAccountComponent;
  let fixture: ComponentFixture<EventsGetUserEventTicketsByUserAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetUserEventTicketsByUserAccountComponent]
    });
    fixture = TestBed.createComponent(EventsGetUserEventTicketsByUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
