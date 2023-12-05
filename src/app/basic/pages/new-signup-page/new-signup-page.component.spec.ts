import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NewSignupPageComponent} from './new-signup-page.component';

describe('NewSignupPageComponent', () => {
  let component: NewSignupPageComponent;
  let fixture: ComponentFixture<NewSignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSignupPageComponent ]
    })
        .compileComponents();

    fixture = TestBed.createComponent(NewSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
