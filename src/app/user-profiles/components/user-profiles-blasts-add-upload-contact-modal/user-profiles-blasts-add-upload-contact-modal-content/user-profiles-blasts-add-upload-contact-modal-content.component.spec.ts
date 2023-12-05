import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastsAddUploadContactModalContentComponent } from './user-profiles-blasts-add-upload-contact-modal-content.component';

describe('UserProfilesBlastsAddUploadContactModalContentComponent', () => {
  let component: UserProfilesBlastsAddUploadContactModalContentComponent;
  let fixture: ComponentFixture<UserProfilesBlastsAddUploadContactModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastsAddUploadContactModalContentComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastsAddUploadContactModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
