import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventsShareEventModalContentComponent} from './events-share-event-modal-content.component';

describe('EventsShareEventModalContentComponent', () => {
  let component: EventsShareEventModalContentComponent;
  let fixture: ComponentFixture<EventsShareEventModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsShareEventModalContentComponent]
    });
    fixture = TestBed.createComponent(EventsShareEventModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
