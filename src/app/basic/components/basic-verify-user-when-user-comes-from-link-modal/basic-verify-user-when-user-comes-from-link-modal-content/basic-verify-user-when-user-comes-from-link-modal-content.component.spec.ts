import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicVerifyUserWhenUserComesFromLinkModalContentComponent } from './basic-verify-user-when-user-comes-from-link-modal-content.component';

describe('BasicVerifyUserWhenUserComesFromLinkModalContentComponent', () => {
  let component: BasicVerifyUserWhenUserComesFromLinkModalContentComponent;
  let fixture: ComponentFixture<BasicVerifyUserWhenUserComesFromLinkModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicVerifyUserWhenUserComesFromLinkModalContentComponent]
    });
    fixture = TestBed.createComponent(BasicVerifyUserWhenUserComesFromLinkModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
