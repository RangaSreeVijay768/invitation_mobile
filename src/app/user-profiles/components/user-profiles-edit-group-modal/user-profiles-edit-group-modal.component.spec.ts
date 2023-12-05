import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesEditGroupModalComponent } from './user-profiles-edit-group-modal.component';

describe('UserProfilesEditGroupModalComponent', () => {
  let component: UserProfilesEditGroupModalComponent;
  let fixture: ComponentFixture<UserProfilesEditGroupModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesEditGroupModalComponent]
    });
    fixture = TestBed.createComponent(UserProfilesEditGroupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
