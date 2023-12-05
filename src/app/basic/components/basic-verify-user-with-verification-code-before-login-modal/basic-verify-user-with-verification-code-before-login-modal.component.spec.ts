import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicVerifyUserWithVerificationCodeBeforeLoginModalComponent } from './basic-verify-user-with-verification-code-before-login-modal.component';

describe('BasicVerifyUserWithVerificationCodeBeforeLoginModalComponent', () => {
  let component: BasicVerifyUserWithVerificationCodeBeforeLoginModalComponent;
  let fixture: ComponentFixture<BasicVerifyUserWithVerificationCodeBeforeLoginModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicVerifyUserWithVerificationCodeBeforeLoginModalComponent]
    });
    fixture = TestBed.createComponent(BasicVerifyUserWithVerificationCodeBeforeLoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
