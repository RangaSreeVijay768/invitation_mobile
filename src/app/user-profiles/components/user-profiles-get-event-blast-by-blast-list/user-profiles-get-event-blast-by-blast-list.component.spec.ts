import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesGetEventBlastByBlastListComponent } from './user-profiles-get-event-blast-by-blast-list.component';

describe('UserProfilesGetEventBlastByBlastListComponent', () => {
  let component: UserProfilesGetEventBlastByBlastListComponent;
  let fixture: ComponentFixture<UserProfilesGetEventBlastByBlastListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesGetEventBlastByBlastListComponent]
    });
    fixture = TestBed.createComponent(UserProfilesGetEventBlastByBlastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
