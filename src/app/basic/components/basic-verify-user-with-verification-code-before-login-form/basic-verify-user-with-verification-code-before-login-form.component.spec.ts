import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicVerifyUserWithVerificationCodeBeforeLoginFormComponent } from './basic-verify-user-with-verification-code-before-login-form.component';

describe('BasicVerifyUserWithVerificationCodeBeforeLoginFormComponent', () => {
  let component: BasicVerifyUserWithVerificationCodeBeforeLoginFormComponent;
  let fixture: ComponentFixture<BasicVerifyUserWithVerificationCodeBeforeLoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicVerifyUserWithVerificationCodeBeforeLoginFormComponent]
    });
    fixture = TestBed.createComponent(BasicVerifyUserWithVerificationCodeBeforeLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
