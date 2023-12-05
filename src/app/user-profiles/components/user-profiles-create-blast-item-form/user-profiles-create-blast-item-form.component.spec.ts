import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesCreateBlastItemFormComponent } from './user-profiles-create-blast-item-form.component';

describe('UserProfilesCreateBlastItemFormComponent', () => {
  let component: UserProfilesCreateBlastItemFormComponent;
  let fixture: ComponentFixture<UserProfilesCreateBlastItemFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesCreateBlastItemFormComponent]
    });
    fixture = TestBed.createComponent(UserProfilesCreateBlastItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
