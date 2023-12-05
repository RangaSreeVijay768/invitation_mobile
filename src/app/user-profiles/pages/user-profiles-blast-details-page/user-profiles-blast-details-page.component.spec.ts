import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastDetailsPageComponent } from './user-profiles-blast-details-page.component';

describe('UserProfilesBlastDetailsPageComponent', () => {
  let component: UserProfilesBlastDetailsPageComponent;
  let fixture: ComponentFixture<UserProfilesBlastDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastDetailsPageComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
