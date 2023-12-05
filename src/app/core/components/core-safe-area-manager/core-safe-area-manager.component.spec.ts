import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CoreSafeAreaManagerComponent} from './core-safe-area-manager.component';

describe('CoreSafeAreaManagerComponent', () => {
  let component: CoreSafeAreaManagerComponent;
  let fixture: ComponentFixture<CoreSafeAreaManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreSafeAreaManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreSafeAreaManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
