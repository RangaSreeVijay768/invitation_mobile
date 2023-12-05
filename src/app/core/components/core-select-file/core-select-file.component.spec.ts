import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {JeewithSelectFileComponent} from './jeewith-image-select.component';

describe('JeewithSelectFileComponent', () => {
  let component: JeewithSelectFileComponent;
  let fixture: ComponentFixture<JeewithSelectFileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JeewithSelectFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeewithSelectFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
