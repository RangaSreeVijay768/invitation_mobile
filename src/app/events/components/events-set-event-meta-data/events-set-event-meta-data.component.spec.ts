import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSetEventMetaDataComponent } from './events-set-event-meta-data.component';

describe('EventsSetEventMetaDataComponent', () => {
  let component: EventsSetEventMetaDataComponent;
  let fixture: ComponentFixture<EventsSetEventMetaDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsSetEventMetaDataComponent]
    });
    fixture = TestBed.createComponent(EventsSetEventMetaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
