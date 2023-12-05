import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicVerifyUserWhenUserComesFromLinkModalComponent } from './basic-verify-user-when-user-comes-from-link-modal.component';

describe('BasicVerifyUserWhenUserComesFromLinkModalComponent', () => {
  let component: BasicVerifyUserWhenUserComesFromLinkModalComponent;
  let fixture: ComponentFixture<BasicVerifyUserWhenUserComesFromLinkModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicVerifyUserWhenUserComesFromLinkModalComponent]
    });
    fixture = TestBed.createComponent(BasicVerifyUserWhenUserComesFromLinkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
