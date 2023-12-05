import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSignupPageComponent } from './users-signup-page.component';

describe('UsersSignupPageComponent', () => {
  let component: UsersSignupPageComponent;
  let fixture: ComponentFixture<UsersSignupPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersSignupPageComponent]
    });
    fixture = TestBed.createComponent(UsersSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
