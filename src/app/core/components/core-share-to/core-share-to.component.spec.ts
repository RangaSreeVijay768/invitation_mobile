import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CoreShareToComponent} from './core-share-to.component';

describe('CoreShareToComponent', () => {
  let component: CoreShareToComponent;
  let fixture: ComponentFixture<CoreShareToComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreShareToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreShareToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
