import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedinTopNavComponent } from './signedin-top-nav.component';

describe('SignedinTopNavComponent', () => {
  let component: SignedinTopNavComponent;
  let fixture: ComponentFixture<SignedinTopNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignedinTopNavComponent]
    });
    fixture = TestBed.createComponent(SignedinTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
