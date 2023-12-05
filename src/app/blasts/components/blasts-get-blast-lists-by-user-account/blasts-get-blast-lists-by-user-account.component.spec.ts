import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlastsGetBlastListsByUserAccountComponent } from './blasts-get-blast-lists-by-user-account.component';

describe('BlastsGetBlastListsByUserAccountComponent', () => {
  let component: BlastsGetBlastListsByUserAccountComponent;
  let fixture: ComponentFixture<BlastsGetBlastListsByUserAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlastsGetBlastListsByUserAccountComponent]
    });
    fixture = TestBed.createComponent(BlastsGetBlastListsByUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
