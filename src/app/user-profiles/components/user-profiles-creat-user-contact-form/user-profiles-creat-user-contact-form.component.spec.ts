import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesCreatUserContactFormComponent } from './user-profiles-creat-user-contact-form.component';

describe('UserProfilesCreatUserContactFormComponent', () => {
  let component: UserProfilesCreatUserContactFormComponent;
  let fixture: ComponentFixture<UserProfilesCreatUserContactFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesCreatUserContactFormComponent]
    });
    fixture = TestBed.createComponent(UserProfilesCreatUserContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
