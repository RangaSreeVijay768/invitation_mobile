import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAddCoHostStatusComponent } from './events-add-co-host-status.component';

describe('EventsAddCoHostStatusComponent', () => {
  let component: EventsAddCoHostStatusComponent;
  let fixture: ComponentFixture<EventsAddCoHostStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsAddCoHostStatusComponent]
    });
    fixture = TestBed.createComponent(EventsAddCoHostStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
