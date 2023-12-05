import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CoreModalHeaderComponent} from './core-modal-header.component';

describe('ModalHeaderComponent', () => {
  let component: CoreModalHeaderComponent;
  let fixture: ComponentFixture<CoreModalHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreModalHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
