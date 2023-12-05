import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BasicMainPageComponent} from './basic-main-page.component';

describe('BasicMainPageComponent', () => {
  let component: BasicMainPageComponent;
  let fixture: ComponentFixture<BasicMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicMainPageComponent]
    });
    fixture = TestBed.createComponent(BasicMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
