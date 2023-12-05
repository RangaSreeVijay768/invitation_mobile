import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BasicLoginPageComponent} from './basic-login-page.component';

describe('BasicLoginPageComponent', () => {
  let component: BasicLoginPageComponent;
  let fixture: ComponentFixture<BasicLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicLoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
