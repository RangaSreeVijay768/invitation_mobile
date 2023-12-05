import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCoHostStatusFormComponent } from './events-co-host-status-form.component';

describe('EventsCoHostStatusFormComponent', () => {
  let component: EventsCoHostStatusFormComponent;
  let fixture: ComponentFixture<EventsCoHostStatusFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCoHostStatusFormComponent]
    });
    fixture = TestBed.createComponent(EventsCoHostStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
