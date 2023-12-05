import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastsFilterModalContentComponent } from './user-profiles-blasts-filter-modal-content.component';

describe('UserProfilesBlastsFilterModalContentComponent', () => {
  let component: UserProfilesBlastsFilterModalContentComponent;
  let fixture: ComponentFixture<UserProfilesBlastsFilterModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastsFilterModalContentComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastsFilterModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
