import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreIonicDateTimeButtonFormControlComponent } from './core-ionic-date-time-button-form-control.component';

describe('CoreIonicDateTimeButtonFormControlComponent', () => {
  let component: CoreIonicDateTimeButtonFormControlComponent;
  let fixture: ComponentFixture<CoreIonicDateTimeButtonFormControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreIonicDateTimeButtonFormControlComponent]
    });
    fixture = TestBed.createComponent(CoreIonicDateTimeButtonFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
