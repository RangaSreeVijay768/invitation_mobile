import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CoreDeeplinksComponent} from './core-deeplinks.component';

describe('CoreDeeplinksComponent', () => {
  let component: CoreDeeplinksComponent;
  let fixture: ComponentFixture<CoreDeeplinksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreDeeplinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreDeeplinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
