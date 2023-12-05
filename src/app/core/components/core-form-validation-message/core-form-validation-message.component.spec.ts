import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CoreFormValidationMessageComponent} from './core-form-validation-message.component';

describe('CoreFormValidationMessageComponent', () => {
  let component: CoreFormValidationMessageComponent;
  let fixture: ComponentFixture<CoreFormValidationMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreFormValidationMessageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreFormValidationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
