import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesStartEventBlastComponent } from './user-profiles-start-event-blast.component';

describe('UserProfilesStartEventBlastComponent', () => {
  let component: UserProfilesStartEventBlastComponent;
  let fixture: ComponentFixture<UserProfilesStartEventBlastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesStartEventBlastComponent]
    });
    fixture = TestBed.createComponent(UserProfilesStartEventBlastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
