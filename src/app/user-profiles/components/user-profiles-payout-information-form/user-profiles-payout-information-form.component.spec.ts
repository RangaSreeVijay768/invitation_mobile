import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesPayoutInformationFormComponent } from './user-profiles-payout-information-form.component';

describe('UserProfilesPayoutInformationFormComponent', () => {
  let component: UserProfilesPayoutInformationFormComponent;
  let fixture: ComponentFixture<UserProfilesPayoutInformationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesPayoutInformationFormComponent]
    });
    fixture = TestBed.createComponent(UserProfilesPayoutInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
