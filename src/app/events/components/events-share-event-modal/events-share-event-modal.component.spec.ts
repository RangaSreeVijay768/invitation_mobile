import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventsShareEventModalComponent} from './events-share-event-modal.component';

describe('EventsShareEventModalComponent', () => {
  let component: EventsShareEventModalComponent;
  let fixture: ComponentFixture<EventsShareEventModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsShareEventModalComponent]
    });
    fixture = TestBed.createComponent(EventsShareEventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
