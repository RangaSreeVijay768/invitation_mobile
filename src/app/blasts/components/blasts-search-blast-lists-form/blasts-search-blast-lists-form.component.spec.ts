import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlastsSearchBlastListsFormComponent } from './blasts-search-blast-lists-form.component';

describe('BlastsSearchBlastListsFormComponent', () => {
  let component: BlastsSearchBlastListsFormComponent;
  let fixture: ComponentFixture<BlastsSearchBlastListsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlastsSearchBlastListsFormComponent]
    });
    fixture = TestBed.createComponent(BlastsSearchBlastListsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
