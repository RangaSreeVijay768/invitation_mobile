import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAllInvitedPeopleModalComponent } from './events-all-invited-people-modal.component';

describe('EventsAllInvitedPeopleModalComponent', () => {
  let component: EventsAllInvitedPeopleModalComponent;
  let fixture: ComponentFixture<EventsAllInvitedPeopleModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsAllInvitedPeopleModalComponent]
    });
    fixture = TestBed.createComponent(EventsAllInvitedPeopleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
