import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesUserContactsFromCsvSwiperModalComponent } from './user-profiles-user-contacts-from-csv-swiper-modal.component';

describe('UserProfilesUserContactsFromCsvSwiperModalComponent', () => {
  let component: UserProfilesUserContactsFromCsvSwiperModalComponent;
  let fixture: ComponentFixture<UserProfilesUserContactsFromCsvSwiperModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesUserContactsFromCsvSwiperModalComponent]
    });
    fixture = TestBed.createComponent(UserProfilesUserContactsFromCsvSwiperModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
