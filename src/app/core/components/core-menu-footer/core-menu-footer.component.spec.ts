import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CoreMenuFooterComponent} from './core-menu-footer.component';

describe('CoreMenuFooterComponent', () => {
  let component: CoreMenuFooterComponent;
  let fixture: ComponentFixture<CoreMenuFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreMenuFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreMenuFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
