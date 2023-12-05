import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CoreAppDetailsComponent} from './core-app-details.component';

describe('JeewithAppDetailsComponent', () => {
  let component: CoreAppDetailsComponent;
  let fixture: ComponentFixture<CoreAppDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreAppDetailsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreAppDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
