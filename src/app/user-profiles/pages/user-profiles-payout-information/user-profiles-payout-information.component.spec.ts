import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesPayoutInformationComponent } from './user-profiles-payout-information.component';

describe('UserProfilesPayoutInformationComponent', () => {
  let component: UserProfilesPayoutInformationComponent;
  let fixture: ComponentFixture<UserProfilesPayoutInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesPayoutInformationComponent]
    });
    fixture = TestBed.createComponent(UserProfilesPayoutInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
