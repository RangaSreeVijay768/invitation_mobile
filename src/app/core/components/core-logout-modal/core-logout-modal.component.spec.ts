import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreLogoutModalComponent } from './core-logout-modal.component';

describe('CoreLogoutModalComponent', () => {
  let component: CoreLogoutModalComponent;
  let fixture: ComponentFixture<CoreLogoutModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreLogoutModalComponent]
    });
    fixture = TestBed.createComponent(CoreLogoutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
