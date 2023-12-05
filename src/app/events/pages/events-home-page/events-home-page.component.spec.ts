import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventsHomePageComponent} from './events-home-page.component';

describe('EventsHomePageComponent', () => {
  let component: EventsHomePageComponent;
  let fixture: ComponentFixture<EventsHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsHomePageComponent]
    });
    fixture = TestBed.createComponent(EventsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
