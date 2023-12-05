import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BasicEventsEventDetailsPageComponent} from './basic-events-event-details-page.component';

describe('BasicEventsEventDetailsPageComponent', () => {
  let component: BasicEventsEventDetailsPageComponent;
  let fixture: ComponentFixture<BasicEventsEventDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicEventsEventDetailsPageComponent]
    });
    fixture = TestBed.createComponent(BasicEventsEventDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
