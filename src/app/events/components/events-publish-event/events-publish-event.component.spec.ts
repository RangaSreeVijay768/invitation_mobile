import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPublishEventComponent } from './events-publish-event.component';

describe('EventsPublishEventComponent', () => {
  let component: EventsPublishEventComponent;
  let fixture: ComponentFixture<EventsPublishEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsPublishEventComponent]
    });
    fixture = TestBed.createComponent(EventsPublishEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
