import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsBottomNavFooterComponent } from './events-bottom-nav-footer.component';

describe('EventsBottomNavFooterComponent', () => {
  let component: EventsBottomNavFooterComponent;
  let fixture: ComponentFixture<EventsBottomNavFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsBottomNavFooterComponent]
    });
    fixture = TestBed.createComponent(EventsBottomNavFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
