import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventsGetAllEventsInfosComponent} from './events-get-all-events-infos.component';

describe('EventsGetAllEventsInfosComponent', () => {
  let component: EventsGetAllEventsInfosComponent;
  let fixture: ComponentFixture<EventsGetAllEventsInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetAllEventsInfosComponent]
    });
    fixture = TestBed.createComponent(EventsGetAllEventsInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
