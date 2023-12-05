import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventsEventMainBlankPageComponent} from './events-event-main-blank-page.component';

describe('EventsEventMainBlankPageComponent', () => {
  let component: EventsEventMainBlankPageComponent;
  let fixture: ComponentFixture<EventsEventMainBlankPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventMainBlankPageComponent]
    });
    fixture = TestBed.createComponent(EventsEventMainBlankPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
