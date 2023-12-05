import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CoreSecondsCountDownTimerComponent} from './core-seconds-count-down-timer.component';

describe('CoreSecondsCountDownTimerComponent', () => {
  let component: CoreSecondsCountDownTimerComponent;
  let fixture: ComponentFixture<CoreSecondsCountDownTimerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreSecondsCountDownTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreSecondsCountDownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
