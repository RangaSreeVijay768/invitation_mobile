import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ImagesUploadFileComponent} from './images-upload-file.component';

describe('ImagesUploadFileComponent', () => {
  let component: ImagesUploadFileComponent;
  let fixture: ComponentFixture<ImagesUploadFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesUploadFileComponent]
    });
    fixture = TestBed.createComponent(ImagesUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
