import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastsCreateNewGroupModalComponent } from './user-profiles-blasts-create-new-group-modal.component';

describe('UserProfilesBlastsCreateNewGroupModalComponent', () => {
  let component: UserProfilesBlastsCreateNewGroupModalComponent;
  let fixture: ComponentFixture<UserProfilesBlastsCreateNewGroupModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastsCreateNewGroupModalComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastsCreateNewGroupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
