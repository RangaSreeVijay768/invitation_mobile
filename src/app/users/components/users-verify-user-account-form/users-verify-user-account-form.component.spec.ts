import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersVerifyUserAccountFormComponent } from './users-verify-user-account-form.component';

describe('UsersVerifyUserAccountFormComponent', () => {
  let component: UsersVerifyUserAccountFormComponent;
  let fixture: ComponentFixture<UsersVerifyUserAccountFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersVerifyUserAccountFormComponent]
    });
    fixture = TestBed.createComponent(UsersVerifyUserAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
