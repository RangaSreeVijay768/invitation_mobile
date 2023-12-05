import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BasicSignUpPageComponent} from './basic-sign-up-page.component';

describe('BasicSignUpPageComponent', () => {
  let component: BasicSignUpPageComponent;
  let fixture: ComponentFixture<BasicSignUpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicSignUpPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicSignUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
