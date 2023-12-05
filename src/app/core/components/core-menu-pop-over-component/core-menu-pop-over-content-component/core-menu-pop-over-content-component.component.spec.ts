import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreMenuPopOverContentComponentComponent } from './core-menu-pop-over-content-component.component';

describe('CoreMenuPopOverContentComponentComponent', () => {
  let component: CoreMenuPopOverContentComponentComponent;
  let fixture: ComponentFixture<CoreMenuPopOverContentComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreMenuPopOverContentComponentComponent]
    });
    fixture = TestBed.createComponent(CoreMenuPopOverContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
