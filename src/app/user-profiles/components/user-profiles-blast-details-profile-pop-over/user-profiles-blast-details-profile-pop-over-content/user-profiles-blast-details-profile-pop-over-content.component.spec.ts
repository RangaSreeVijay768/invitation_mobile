import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastDetailsProfilePopOverContentComponent } from './user-profiles-blast-details-profile-pop-over-content.component';

describe('UserProfilesBlastDetailsProfilePopOverContentComponent', () => {
  let component: UserProfilesBlastDetailsProfilePopOverContentComponent;
  let fixture: ComponentFixture<UserProfilesBlastDetailsProfilePopOverContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastDetailsProfilePopOverContentComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastDetailsProfilePopOverContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
