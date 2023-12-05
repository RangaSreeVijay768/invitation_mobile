import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSearchEventInfosComponent } from './events-search-event-infos.component';

describe('EventsSearchEventInfosComponent', () => {
  let component: EventsSearchEventInfosComponent;
  let fixture: ComponentFixture<EventsSearchEventInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsSearchEventInfosComponent]
    });
    fixture = TestBed.createComponent(EventsSearchEventInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
