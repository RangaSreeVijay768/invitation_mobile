import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersForgetPasswordFormComponent} from './users-forget-password-form.component';

describe('UsersForgetPasswordFormComponent', () => {
  let component: UsersForgetPasswordFormComponent;
  let fixture: ComponentFixture<UsersForgetPasswordFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersForgetPasswordFormComponent]
    });
    fixture = TestBed.createComponent(UsersForgetPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
