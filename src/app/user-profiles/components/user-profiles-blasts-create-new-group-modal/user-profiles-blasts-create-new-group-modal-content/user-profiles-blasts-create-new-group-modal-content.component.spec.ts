import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastsCreateNewGroupModalContentComponent } from './user-profiles-blasts-create-new-group-modal-content.component';

describe('UserProfilesBlastsCreateNewGroupModalContentComponent', () => {
  let component: UserProfilesBlastsCreateNewGroupModalContentComponent;
  let fixture: ComponentFixture<UserProfilesBlastsCreateNewGroupModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastsCreateNewGroupModalContentComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastsCreateNewGroupModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
