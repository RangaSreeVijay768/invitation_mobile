import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAllInvitedPeopleModalContentComponent } from './events-all-invited-people-modal-content.component';

describe('EventsAllInvitedPeopleModalContentComponent', () => {
  let component: EventsAllInvitedPeopleModalContentComponent;
  let fixture: ComponentFixture<EventsAllInvitedPeopleModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsAllInvitedPeopleModalContentComponent]
    });
    fixture = TestBed.createComponent(EventsAllInvitedPeopleModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
