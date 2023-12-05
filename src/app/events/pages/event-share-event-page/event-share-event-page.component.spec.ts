import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventShareEventPageComponent } from './event-share-event-page.component';

describe('EventShareEventPageComponent', () => {
  let component: EventShareEventPageComponent;
  let fixture: ComponentFixture<EventShareEventPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventShareEventPageComponent]
    });
    fixture = TestBed.createComponent(EventShareEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
