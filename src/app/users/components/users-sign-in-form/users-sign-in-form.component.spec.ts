import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersSignInFormComponent} from './users-sign-in-form.component';

describe('UsersSignInFormComponent', () => {
  let component: UsersSignInFormComponent;
  let fixture: ComponentFixture<UsersSignInFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersSignInFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersSignInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
