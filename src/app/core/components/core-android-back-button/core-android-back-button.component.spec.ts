import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CoreAndroidBackButtonComponent} from './core-android-back-button.component';

describe('CoreAndroidBackButtonComponent', () => {
  let component: CoreAndroidBackButtonComponent;
  let fixture: ComponentFixture<CoreAndroidBackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreAndroidBackButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreAndroidBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
