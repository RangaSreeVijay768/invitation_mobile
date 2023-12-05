import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesCreateBlastListAndBlastListItemsByUserContactsComponent } from './user-profiles-create-blast-list-and-blast-list-items-by-user-contacts.component';

describe('UserProfilesCreateBlastListAndBlastListItemsByUserContactsComponent', () => {
  let component: UserProfilesCreateBlastListAndBlastListItemsByUserContactsComponent;
  let fixture: ComponentFixture<UserProfilesCreateBlastListAndBlastListItemsByUserContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesCreateBlastListAndBlastListItemsByUserContactsComponent]
    });
    fixture = TestBed.createComponent(UserProfilesCreateBlastListAndBlastListItemsByUserContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
