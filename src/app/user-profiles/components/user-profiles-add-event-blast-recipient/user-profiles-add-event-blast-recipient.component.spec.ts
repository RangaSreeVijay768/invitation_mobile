import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesAddEventBlastRecipientComponent } from './user-profiles-add-event-blast-recipient.component';

describe('UserProfilesAddEventBlastRecipientComponent', () => {
  let component: UserProfilesAddEventBlastRecipientComponent;
  let fixture: ComponentFixture<UserProfilesAddEventBlastRecipientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesAddEventBlastRecipientComponent]
    });
    fixture = TestBed.createComponent(UserProfilesAddEventBlastRecipientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
