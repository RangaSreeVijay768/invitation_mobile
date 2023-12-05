import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSearchEventMemberInfosFormComponent } from './events-search-event-member-infos-form.component';

describe('EventsSearchEventMemberInfosFormComponent', () => {
  let component: EventsSearchEventMemberInfosFormComponent;
  let fixture: ComponentFixture<EventsSearchEventMemberInfosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsSearchEventMemberInfosFormComponent]
    });
    fixture = TestBed.createComponent(EventsSearchEventMemberInfosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
