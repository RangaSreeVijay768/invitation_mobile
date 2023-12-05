import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreGoogleAddressAutoCompletionFormControlComponent } from './core-google-address-auto-completion-form-control.component';

describe('CoreGoogleAddressAutoCompletionFormControlComponent', () => {
  let component: CoreGoogleAddressAutoCompletionFormControlComponent;
  let fixture: ComponentFixture<CoreGoogleAddressAutoCompletionFormControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreGoogleAddressAutoCompletionFormControlComponent]
    });
    fixture = TestBed.createComponent(CoreGoogleAddressAutoCompletionFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
