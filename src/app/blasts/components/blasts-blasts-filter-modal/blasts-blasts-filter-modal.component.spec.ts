import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlastsBlastsFilterModalComponent } from './blasts-blasts-filter-modal.component';

describe('BlastsBlastsFilterModalComponent', () => {
  let component: BlastsBlastsFilterModalComponent;
  let fixture: ComponentFixture<BlastsBlastsFilterModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlastsBlastsFilterModalComponent]
    });
    fixture = TestBed.createComponent(BlastsBlastsFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
