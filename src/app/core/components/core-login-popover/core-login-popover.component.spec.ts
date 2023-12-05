import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreLoginPopoverComponent } from './core-login-popover.component';

describe('CoreLoginPopoverComponent', () => {
  let component: CoreLoginPopoverComponent;
  let fixture: ComponentFixture<CoreLoginPopoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreLoginPopoverComponent]
    });
    fixture = TestBed.createComponent(CoreLoginPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
