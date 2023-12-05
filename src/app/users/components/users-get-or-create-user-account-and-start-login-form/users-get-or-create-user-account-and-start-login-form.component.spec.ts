import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersGetOrCreateUserAccountAndStartLoginFormComponent } from './users-get-or-create-user-account-and-start-login-form.component';

describe('UsersGetOrCreateUserAccountAndStartLoginFormComponent', () => {
  let component: UsersGetOrCreateUserAccountAndStartLoginFormComponent;
  let fixture: ComponentFixture<UsersGetOrCreateUserAccountAndStartLoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersGetOrCreateUserAccountAndStartLoginFormComponent]
    });
    fixture = TestBed.createComponent(UsersGetOrCreateUserAccountAndStartLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
