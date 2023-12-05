import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastsFilterModalComponent } from './user-profiles-blasts-filter-modal.component';

describe('UserProfilesBlastsFilterModalComponent', () => {
  let component: UserProfilesBlastsFilterModalComponent;
  let fixture: ComponentFixture<UserProfilesBlastsFilterModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastsFilterModalComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastsFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
