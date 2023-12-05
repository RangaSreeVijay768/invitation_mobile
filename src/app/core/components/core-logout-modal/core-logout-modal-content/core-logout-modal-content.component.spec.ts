import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreLogoutModalContentComponent } from './core-logout-modal-content.component';

describe('CoreLogoutModalContentComponent', () => {
  let component: CoreLogoutModalContentComponent;
  let fixture: ComponentFixture<CoreLogoutModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreLogoutModalContentComponent]
    });
    fixture = TestBed.createComponent(CoreLogoutModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
