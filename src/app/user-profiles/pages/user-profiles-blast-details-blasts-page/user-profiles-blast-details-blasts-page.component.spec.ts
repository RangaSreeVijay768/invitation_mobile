import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastDetailsBlastsPageComponent } from './user-profiles-blast-details-blasts-page.component';

describe('UserProfilesBlastDetailsBlastsPageComponent', () => {
  let component: UserProfilesBlastDetailsBlastsPageComponent;
  let fixture: ComponentFixture<UserProfilesBlastDetailsBlastsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastDetailsBlastsPageComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastDetailsBlastsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
