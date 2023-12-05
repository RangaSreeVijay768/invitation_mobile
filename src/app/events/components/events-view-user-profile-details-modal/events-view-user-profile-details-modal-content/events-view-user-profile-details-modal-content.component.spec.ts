import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsViewUserProfileDetailsModalContentComponent } from './events-view-user-profile-details-modal-content.component';

describe('EventsViewUserProfileDetailsModalContentComponent', () => {
  let component: EventsViewUserProfileDetailsModalContentComponent;
  let fixture: ComponentFixture<EventsViewUserProfileDetailsModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsViewUserProfileDetailsModalContentComponent]
    });
    fixture = TestBed.createComponent(EventsViewUserProfileDetailsModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
