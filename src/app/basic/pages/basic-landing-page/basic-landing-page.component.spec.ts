import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BasicLandingPageComponent} from './basic-landing-page.component';

describe('BasicLandingPageComponent', () => {
  let component: BasicLandingPageComponent;
  let fixture: ComponentFixture<BasicLandingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicLandingPageComponent]
    });
    fixture = TestBed.createComponent(BasicLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
