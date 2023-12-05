import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesCreateUserContactModalContentComponent } from './user-profiles-create-user-contact-modal-content.component';

describe('UserProfilesCreateUserContactModalContentComponent', () => {
  let component: UserProfilesCreateUserContactModalContentComponent;
  let fixture: ComponentFixture<UserProfilesCreateUserContactModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesCreateUserContactModalContentComponent]
    });
    fixture = TestBed.createComponent(UserProfilesCreateUserContactModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
