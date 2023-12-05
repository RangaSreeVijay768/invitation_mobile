import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSelectBlastListForShareEventComponent } from './events-select-blast-list-for-share-event.component';

describe('EventsSelectBlastListForShareEventComponent', () => {
  let component: EventsSelectBlastListForShareEventComponent;
  let fixture: ComponentFixture<EventsSelectBlastListForShareEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsSelectBlastListForShareEventComponent]
    });
    fixture = TestBed.createComponent(EventsSelectBlastListForShareEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
