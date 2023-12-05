import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateEventPromoCodeComponent } from './events-create-event-promo-code.component';

describe('EventsCreateEventPromoCodeComponent', () => {
  let component: EventsCreateEventPromoCodeComponent;
  let fixture: ComponentFixture<EventsCreateEventPromoCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateEventPromoCodeComponent]
    });
    fixture = TestBed.createComponent(EventsCreateEventPromoCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
