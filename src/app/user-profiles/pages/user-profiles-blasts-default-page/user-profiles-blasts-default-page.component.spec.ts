import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastsDefaultPageComponent } from './user-profiles-blasts-default-page.component';

describe('UserProfilesBlastsDefaultPageComponent', () => {
  let component: UserProfilesBlastsDefaultPageComponent;
  let fixture: ComponentFixture<UserProfilesBlastsDefaultPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastsDefaultPageComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastsDefaultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
