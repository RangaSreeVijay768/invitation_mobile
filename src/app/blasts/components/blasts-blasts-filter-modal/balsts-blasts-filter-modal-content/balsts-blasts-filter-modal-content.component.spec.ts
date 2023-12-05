import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalstsBlastsFilterModalContentComponent } from './balsts-blasts-filter-modal-content.component';

describe('BalstsBlastsFilterModalContentComponent', () => {
  let component: BalstsBlastsFilterModalContentComponent;
  let fixture: ComponentFixture<BalstsBlastsFilterModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalstsBlastsFilterModalContentComponent]
    });
    fixture = TestBed.createComponent(BalstsBlastsFilterModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
