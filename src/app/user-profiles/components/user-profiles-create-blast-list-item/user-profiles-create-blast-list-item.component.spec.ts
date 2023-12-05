import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesCreateBlastListItemComponent } from './user-profiles-create-blast-list-item.component';

describe('UserProfilesCreateBlastListItemComponent', () => {
  let component: UserProfilesCreateBlastListItemComponent;
  let fixture: ComponentFixture<UserProfilesCreateBlastListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesCreateBlastListItemComponent]
    });
    fixture = TestBed.createComponent(UserProfilesCreateBlastListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
