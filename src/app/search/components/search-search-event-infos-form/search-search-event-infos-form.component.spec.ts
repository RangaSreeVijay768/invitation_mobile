import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSearchEventInfosFormComponent } from './search-search-event-infos-form.component';

describe('SearchSearchEventInfosFormComponent', () => {
  let component: SearchSearchEventInfosFormComponent;
  let fixture: ComponentFixture<SearchSearchEventInfosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSearchEventInfosFormComponent]
    });
    fixture = TestBed.createComponent(SearchSearchEventInfosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
