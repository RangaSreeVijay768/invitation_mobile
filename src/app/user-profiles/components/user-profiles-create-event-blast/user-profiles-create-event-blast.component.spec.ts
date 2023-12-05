import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesCreateEventBlastComponent } from './user-profiles-create-event-blast.component';

describe('UserProfilesCreateEventBlastComponent', () => {
  let component: UserProfilesCreateEventBlastComponent;
  let fixture: ComponentFixture<UserProfilesCreateEventBlastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesCreateEventBlastComponent]
    });
    fixture = TestBed.createComponent(UserProfilesCreateEventBlastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
