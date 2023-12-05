import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastsMainPageComponent } from './user-profiles-blasts-main-page.component';

describe('UserProfilesBlastsMainPageComponent', () => {
  let component: UserProfilesBlastsMainPageComponent;
  let fixture: ComponentFixture<UserProfilesBlastsMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastsMainPageComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
