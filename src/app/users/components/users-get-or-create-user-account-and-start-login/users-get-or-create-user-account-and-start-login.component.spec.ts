import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersGetOrCreateUserAccountAndStartLoginComponent } from './users-get-or-create-user-account-and-start-login.component';

describe('UsersGetOrCreateUserAccountAndStartLoginComponent', () => {
  let component: UsersGetOrCreateUserAccountAndStartLoginComponent;
  let fixture: ComponentFixture<UsersGetOrCreateUserAccountAndStartLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersGetOrCreateUserAccountAndStartLoginComponent]
    });
    fixture = TestBed.createComponent(UsersGetOrCreateUserAccountAndStartLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
