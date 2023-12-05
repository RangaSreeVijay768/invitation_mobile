import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreLoginPopoverContentComponent } from './core-login-popover-content.component';

describe('CoreLoginPopoverContentComponent', () => {
  let component: CoreLoginPopoverContentComponent;
  let fixture: ComponentFixture<CoreLoginPopoverContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreLoginPopoverContentComponent]
    });
    fixture = TestBed.createComponent(CoreLoginPopoverContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
