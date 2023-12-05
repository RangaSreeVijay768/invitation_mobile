import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CoreModalFooterComponent} from './core-modal-footer.component';

describe('ModalFooterComponent', () => {
  let component: CoreModalFooterComponent;
  let fixture: ComponentFixture<CoreModalFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreModalFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreModalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
