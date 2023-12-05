import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesCreateUserContactModalComponent } from './user-profiles-create-user-contact-modal.component';

describe('UserProfilesCreateUserContactModalComponent', () => {
  let component: UserProfilesCreateUserContactModalComponent;
  let fixture: ComponentFixture<UserProfilesCreateUserContactModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesCreateUserContactModalComponent]
    });
    fixture = TestBed.createComponent(UserProfilesCreateUserContactModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
