import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventsAddTicketsAfterPageComponent} from './events-add-tickets-after-page.component';

describe('EventsAddTicketsAfterPageComponent', () => {
  let component: EventsAddTicketsAfterPageComponent;
  let fixture: ComponentFixture<EventsAddTicketsAfterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsAddTicketsAfterPageComponent]
    });
    fixture = TestBed.createComponent(EventsAddTicketsAfterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
