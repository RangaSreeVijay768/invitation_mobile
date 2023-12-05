import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesEditGroupModalContentComponent } from './user-profiles-edit-group-modal-content.component';

describe('UserProfilesEditGroupModalContentComponent', () => {
  let component: UserProfilesEditGroupModalContentComponent;
  let fixture: ComponentFixture<UserProfilesEditGroupModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesEditGroupModalContentComponent]
    });
    fixture = TestBed.createComponent(UserProfilesEditGroupModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
