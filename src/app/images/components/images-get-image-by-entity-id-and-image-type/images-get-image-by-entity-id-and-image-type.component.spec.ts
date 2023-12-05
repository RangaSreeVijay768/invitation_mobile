import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ImagesGetImageByEntityIdAndImageTypeComponent} from './images-get-image-by-entity-id-and-image-type.component';

describe('ImagesGetImageByEntityIdAndImageTypeComponent', () => {
  let component: ImagesGetImageByEntityIdAndImageTypeComponent;
  let fixture: ComponentFixture<ImagesGetImageByEntityIdAndImageTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesGetImageByEntityIdAndImageTypeComponent]
    });
    fixture = TestBed.createComponent(ImagesGetImageByEntityIdAndImageTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
