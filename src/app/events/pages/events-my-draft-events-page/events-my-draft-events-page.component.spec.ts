import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsMyDraftEventsPageComponent } from './events-my-draft-events-page.component';

describe('EventsMyDraftEventsPageComponent', () => {
  let component: EventsMyDraftEventsPageComponent;
  let fixture: ComponentFixture<EventsMyDraftEventsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsMyDraftEventsPageComponent]
    });
    fixture = TestBed.createComponent(EventsMyDraftEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
