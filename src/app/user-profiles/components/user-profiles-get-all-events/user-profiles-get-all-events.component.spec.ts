import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesGetAllEventsComponent } from './user-profiles-get-all-events.component';

describe('UserProfilesGetAllEventsComponent', () => {
  let component: UserProfilesGetAllEventsComponent;
  let fixture: ComponentFixture<UserProfilesGetAllEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesGetAllEventsComponent]
    });
    fixture = TestBed.createComponent(UserProfilesGetAllEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
