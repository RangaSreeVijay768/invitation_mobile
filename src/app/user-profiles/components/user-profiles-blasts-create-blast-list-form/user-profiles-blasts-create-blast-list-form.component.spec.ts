import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesBlastsCreateBlastListFormComponent } from './user-profiles-blasts-create-blast-list-form.component';

describe('UserProfilesBlastsCreateBlastListFormComponent', () => {
  let component: UserProfilesBlastsCreateBlastListFormComponent;
  let fixture: ComponentFixture<UserProfilesBlastsCreateBlastListFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesBlastsCreateBlastListFormComponent]
    });
    fixture = TestBed.createComponent(UserProfilesBlastsCreateBlastListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
