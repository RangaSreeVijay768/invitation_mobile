import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUsersForgotPasswordPageComponent } from './basic-users-forgot-password-page.component';

describe('BasicUsersForgotPasswordPageComponent', () => {
  let component: BasicUsersForgotPasswordPageComponent;
  let fixture: ComponentFixture<BasicUsersForgotPasswordPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicUsersForgotPasswordPageComponent]
    });
    fixture = TestBed.createComponent(BasicUsersForgotPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
