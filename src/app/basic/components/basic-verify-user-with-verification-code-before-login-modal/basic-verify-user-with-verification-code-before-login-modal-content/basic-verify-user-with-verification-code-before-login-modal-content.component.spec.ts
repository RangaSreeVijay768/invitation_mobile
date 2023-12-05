import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicVerifyUserWithVerificationCodeBeforeLoginModalContentComponent } from './basic-verify-user-with-verification-code-before-login-modal-content.component';

describe('BasicVerifyUserWithVerificationCodeBeforeLoginModalContentComponent', () => {
  let component: BasicVerifyUserWithVerificationCodeBeforeLoginModalContentComponent;
  let fixture: ComponentFixture<BasicVerifyUserWithVerificationCodeBeforeLoginModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicVerifyUserWithVerificationCodeBeforeLoginModalContentComponent]
    });
    fixture = TestBed.createComponent(BasicVerifyUserWithVerificationCodeBeforeLoginModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
