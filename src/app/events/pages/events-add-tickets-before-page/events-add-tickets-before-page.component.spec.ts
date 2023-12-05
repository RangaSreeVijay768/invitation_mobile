import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventsAddTicketsBeforePageComponent} from './events-add-tickets-before-page.component';

describe('EventsAddTicketsBeforePageComponent', () => {
  let component: EventsAddTicketsBeforePageComponent;
  let fixture: ComponentFixture<EventsAddTicketsBeforePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsAddTicketsBeforePageComponent]
    });
    fixture = TestBed.createComponent(EventsAddTicketsBeforePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
