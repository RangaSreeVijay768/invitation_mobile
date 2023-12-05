import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEventsGetAllEventInfosNoTemplateComponent } from './basic-events-get-all-event-infos-no-template.component';

describe('BasicEventsGetAllEventInfosNoTemplateComponent', () => {
  let component: BasicEventsGetAllEventInfosNoTemplateComponent;
  let fixture: ComponentFixture<BasicEventsGetAllEventInfosNoTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicEventsGetAllEventInfosNoTemplateComponent]
    });
    fixture = TestBed.createComponent(BasicEventsGetAllEventInfosNoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
