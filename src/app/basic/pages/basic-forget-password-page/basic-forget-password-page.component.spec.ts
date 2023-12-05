import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BasicForgetPasswordPageComponent} from './basic-forget-password-page.component';

describe('BasicForgetPasswordPageComponent', () => {
  let component: BasicForgetPasswordPageComponent;
  let fixture: ComponentFixture<BasicForgetPasswordPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicForgetPasswordPageComponent]
    });
    fixture = TestBed.createComponent(BasicForgetPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
