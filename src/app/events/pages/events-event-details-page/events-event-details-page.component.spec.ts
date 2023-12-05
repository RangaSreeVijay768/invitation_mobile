import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDetailsPageComponent } from './events-event-details-page.component';

describe('EventsEventDetailsPageComponent', () => {
  let component: EventsEventDetailsPageComponent;
  let fixture: ComponentFixture<EventsEventDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDetailsPageComponent]
    });
    fixture = TestBed.createComponent(EventsEventDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
