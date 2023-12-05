import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CorePlayMediaComponent} from './core-play-media.component';

describe('CorePlayMediaComponent', () => {
  let component: CorePlayMediaComponent;
  let fixture: ComponentFixture<CorePlayMediaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CorePlayMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorePlayMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
