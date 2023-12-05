import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CoreRequestAppPermissionComponent} from './core-request-app-permission.component';

describe('CoreRequestAppPermissionComponent', () => {
  let component: CoreRequestAppPermissionComponent;
  let fixture: ComponentFixture<CoreRequestAppPermissionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreRequestAppPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreRequestAppPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
