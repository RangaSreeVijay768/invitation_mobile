import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ImagesAttachImageComponent} from './images-attach-image.component';

describe('ImagesAttachImageComponent', () => {
  let component: ImagesAttachImageComponent;
  let fixture: ComponentFixture<ImagesAttachImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesAttachImageComponent]
    });
    fixture = TestBed.createComponent(ImagesAttachImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
