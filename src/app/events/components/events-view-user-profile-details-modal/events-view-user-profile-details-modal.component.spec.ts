import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsViewUserProfileDetailsModalComponent } from './events-view-user-profile-details-modal.component';

describe('EventsViewUserProfileDetailsModalComponent', () => {
  let component: EventsViewUserProfileDetailsModalComponent;
  let fixture: ComponentFixture<EventsViewUserProfileDetailsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsViewUserProfileDetailsModalComponent]
    });
    fixture = TestBed.createComponent(EventsViewUserProfileDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
