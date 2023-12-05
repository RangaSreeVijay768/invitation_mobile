import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesGetUserEventTicketsByUserAccountScrollingComponent } from './user-profiles-get-user-event-tickets-by-user-account-scrolling.component';

describe('UserProfilesGetUserEventTicketsByUserAccountScrollingComponent', () => {
  let component: UserProfilesGetUserEventTicketsByUserAccountScrollingComponent;
  let fixture: ComponentFixture<UserProfilesGetUserEventTicketsByUserAccountScrollingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesGetUserEventTicketsByUserAccountScrollingComponent]
    });
    fixture = TestBed.createComponent(UserProfilesGetUserEventTicketsByUserAccountScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
