import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesGetAllUserContactsComponent } from './user-profiles-get-all-user-contacts.component';

describe('UserProfilesGetAllUserContactsComponent', () => {
  let component: UserProfilesGetAllUserContactsComponent;
  let fixture: ComponentFixture<UserProfilesGetAllUserContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesGetAllUserContactsComponent]
    });
    fixture = TestBed.createComponent(UserProfilesGetAllUserContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
