import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPresentPaymentSheetComponent } from './events-present-payment-sheet.component';

describe('EventsPresentPaymentSheetComponent', () => {
  let component: EventsPresentPaymentSheetComponent;
  let fixture: ComponentFixture<EventsPresentPaymentSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsPresentPaymentSheetComponent]
    });
    fixture = TestBed.createComponent(EventsPresentPaymentSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
