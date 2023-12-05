import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesPurchaseHistoryPageComponent } from './user-profiles-purchase-history-page.component';

describe('UserProfilesPurchaseHistoryPageComponent', () => {
  let component: UserProfilesPurchaseHistoryPageComponent;
  let fixture: ComponentFixture<UserProfilesPurchaseHistoryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesPurchaseHistoryPageComponent]
    });
    fixture = TestBed.createComponent(UserProfilesPurchaseHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
