import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastDetailsProfilePopOverComponent } from './user-profiles-blast-details-profile-pop-over.component';

describe('UserProfilesBlastDetailsProfilePopOverComponent', () => {
  let component: UserProfilesBlastDetailsProfilePopOverComponent;
  let fixture: ComponentFixture<UserProfilesBlastDetailsProfilePopOverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastDetailsProfilePopOverComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastDetailsProfilePopOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
