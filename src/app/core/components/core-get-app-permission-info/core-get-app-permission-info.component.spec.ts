import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CoreGetAppPermissionInfoComponent} from './core-get-app-permission-info.component';

describe('CoreGetAppPermissionInfoComponent', () => {
  let component: CoreGetAppPermissionInfoComponent;
  let fixture: ComponentFixture<CoreGetAppPermissionInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreGetAppPermissionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreGetAppPermissionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
