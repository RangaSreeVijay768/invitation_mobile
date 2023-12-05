import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsUploadUserContactsFromCsvSwiperComponent } from './events-upload-user-contacts-from-csv-swiper.component';

describe('EventsUploadUserContactsFromCsvSwiperComponent', () => {
  let component: EventsUploadUserContactsFromCsvSwiperComponent;
  let fixture: ComponentFixture<EventsUploadUserContactsFromCsvSwiperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsUploadUserContactsFromCsvSwiperComponent]
    });
    fixture = TestBed.createComponent(EventsUploadUserContactsFromCsvSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
