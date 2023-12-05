import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SignedinLandingPageComponent} from './signedin-landing-page.component';

describe('SignedinLandingPageComponent', () => {
  let component: SignedinLandingPageComponent;
  let fixture: ComponentFixture<SignedinLandingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignedinLandingPageComponent]
    });
    fixture = TestBed.createComponent(SignedinLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
