import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CoreSelectPhotoComponent} from './core-select-photo.component';

describe('JeewithSelectVideoComponent', () => {
  let component: CoreSelectPhotoComponent;
  let fixture: ComponentFixture<CoreSelectPhotoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreSelectPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreSelectPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
