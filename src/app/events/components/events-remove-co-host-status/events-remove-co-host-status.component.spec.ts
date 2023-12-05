import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsRemoveCoHostStatusComponent } from './events-remove-co-host-status.component';

describe('EventsRemoveCoHostStatusComponent', () => {
  let component: EventsRemoveCoHostStatusComponent;
  let fixture: ComponentFixture<EventsRemoveCoHostStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsRemoveCoHostStatusComponent]
    });
    fixture = TestBed.createComponent(EventsRemoveCoHostStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
