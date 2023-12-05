import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventsGetEventInfoComponent} from './events-get-event-info.component';

describe('EventsGetEventInfoComponent', () => {
  let component: EventsGetEventInfoComponent;
  let fixture: ComponentFixture<EventsGetEventInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetEventInfoComponent]
    });
    fixture = TestBed.createComponent(EventsGetEventInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
