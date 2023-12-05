import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastsAddUploadContactModalComponent } from './user-profiles-blasts-add-upload-contact-modal.component';

describe('UserProfilesBlastsAddUploadContactModalComponent', () => {
  let component: UserProfilesBlastsAddUploadContactModalComponent;
  let fixture: ComponentFixture<UserProfilesBlastsAddUploadContactModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastsAddUploadContactModalComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastsAddUploadContactModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
