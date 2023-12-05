import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventsMainPageComponent} from './events-main-page.component';

describe('EventsMainPageComponent', () => {
  let component: EventsMainPageComponent;
  let fixture: ComponentFixture<EventsMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsMainPageComponent]
    });
    fixture = TestBed.createComponent(EventsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
