import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlastsGetAllBlastPackagesComponent } from './blasts-get-all-blast-packages.component';

describe('BlastsGetAllBlastPackagesComponent', () => {
  let component: BlastsGetAllBlastPackagesComponent;
  let fixture: ComponentFixture<BlastsGetAllBlastPackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlastsGetAllBlastPackagesComponent]
    });
    fixture = TestBed.createComponent(BlastsGetAllBlastPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
