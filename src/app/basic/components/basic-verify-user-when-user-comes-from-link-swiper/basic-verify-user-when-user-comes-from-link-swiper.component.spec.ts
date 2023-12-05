import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicVerifyUserWhenUserComesFromLinkSwiperComponent } from './basic-verify-user-when-user-comes-from-link-swiper.component';

describe('BasicVerifyUserWhenUserComesFromLinkSwiperComponent', () => {
  let component: BasicVerifyUserWhenUserComesFromLinkSwiperComponent;
  let fixture: ComponentFixture<BasicVerifyUserWhenUserComesFromLinkSwiperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicVerifyUserWhenUserComesFromLinkSwiperComponent]
    });
    fixture = TestBed.createComponent(BasicVerifyUserWhenUserComesFromLinkSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
