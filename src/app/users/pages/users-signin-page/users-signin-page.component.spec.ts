import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSigninPageComponent } from './users-signin-page.component';

describe('UsersSigninPageComponent', () => {
  let component: UsersSigninPageComponent;
  let fixture: ComponentFixture<UsersSigninPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersSigninPageComponent]
    });
    fixture = TestBed.createComponent(UsersSigninPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
