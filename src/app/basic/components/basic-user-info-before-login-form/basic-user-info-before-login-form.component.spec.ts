import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUserInfoBeforeLoginFormComponent } from './basic-user-info-before-login-form.component';

describe('BasicUserInfoBeforeLoginFormComponent', () => {
  let component: BasicUserInfoBeforeLoginFormComponent;
  let fixture: ComponentFixture<BasicUserInfoBeforeLoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicUserInfoBeforeLoginFormComponent]
    });
    fixture = TestBed.createComponent(BasicUserInfoBeforeLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
