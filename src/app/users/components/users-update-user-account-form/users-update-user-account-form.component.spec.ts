import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersUpdateUserAccountFormComponent } from './users-update-user-account-form.component';

describe('UsersUpdateUserAccountFormComponent', () => {
  let component: UsersUpdateUserAccountFormComponent;
  let fixture: ComponentFixture<UsersUpdateUserAccountFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersUpdateUserAccountFormComponent]
    });
    fixture = TestBed.createComponent(UsersUpdateUserAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
