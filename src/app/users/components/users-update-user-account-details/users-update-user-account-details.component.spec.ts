import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersUpdateUserAccountDetailsComponent } from './users-update-user-account-details.component';

describe('UsersUpdateUserAccountDetailsComponent', () => {
  let component: UsersUpdateUserAccountDetailsComponent;
  let fixture: ComponentFixture<UsersUpdateUserAccountDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersUpdateUserAccountDetailsComponent]
    });
    fixture = TestBed.createComponent(UsersUpdateUserAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
