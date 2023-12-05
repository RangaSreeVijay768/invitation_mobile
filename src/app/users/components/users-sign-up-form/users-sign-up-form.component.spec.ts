import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersSignUpFormComponent} from './users-sign-up-form.component';

describe('UsersSignUpFormComponent', () => {
  let component: UsersSignUpFormComponent;
  let fixture: ComponentFixture<UsersSignUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersSignUpFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersSignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
