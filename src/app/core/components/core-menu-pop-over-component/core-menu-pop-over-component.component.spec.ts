import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreMenuPopOverComponentComponent } from './core-menu-pop-over-component.component';

describe('CoreMenuPopOverComponentComponent', () => {
  let component: CoreMenuPopOverComponentComponent;
  let fixture: ComponentFixture<CoreMenuPopOverComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreMenuPopOverComponentComponent]
    });
    fixture = TestBed.createComponent(CoreMenuPopOverComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
