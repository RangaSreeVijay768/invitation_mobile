import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlastsGetBlastListItemsByBlastListComponent } from './blasts-get-blast-list-items-by-blast-list.component';

describe('BlastsGetBlastListItemsByBlastListComponent', () => {
  let component: BlastsGetBlastListItemsByBlastListComponent;
  let fixture: ComponentFixture<BlastsGetBlastListItemsByBlastListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlastsGetBlastListItemsByBlastListComponent]
    });
    fixture = TestBed.createComponent(BlastsGetBlastListItemsByBlastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
