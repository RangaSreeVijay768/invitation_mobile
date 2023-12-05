import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreAutoCompleteFormControlComponent } from './core-auto-complete-form-control.component';

describe('CoreAutoCompleteFormControlComponent', () => {
  let component: CoreAutoCompleteFormControlComponent;
  let fixture: ComponentFixture<CoreAutoCompleteFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreAutoCompleteFormControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreAutoCompleteFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
