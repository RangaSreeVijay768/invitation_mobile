import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CoreLoadingBarComponent} from './core-loading-bar.component';

describe('JeewithLoadingBarComponent', () => {
  let component: CoreLoadingBarComponent;
  let fixture: ComponentFixture<CoreLoadingBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreLoadingBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreLoadingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
