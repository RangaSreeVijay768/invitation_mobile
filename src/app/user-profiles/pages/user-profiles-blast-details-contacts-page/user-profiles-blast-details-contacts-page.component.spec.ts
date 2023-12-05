import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastDetailsContactsPageComponent } from './user-profiles-blast-details-contacts-page.component';

describe('UserProfilesBlastDetailsContactsPageComponent', () => {
  let component: UserProfilesBlastDetailsContactsPageComponent;
  let fixture: ComponentFixture<UserProfilesBlastDetailsContactsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastDetailsContactsPageComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastDetailsContactsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
