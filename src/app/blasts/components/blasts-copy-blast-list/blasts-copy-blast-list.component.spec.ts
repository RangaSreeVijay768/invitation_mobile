import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlastsCopyBlastListComponent } from './blasts-copy-blast-list.component';

describe('BlastsCopyBlastListComponent', () => {
  let component: BlastsCopyBlastListComponent;
  let fixture: ComponentFixture<BlastsCopyBlastListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlastsCopyBlastListComponent]
    });
    fixture = TestBed.createComponent(BlastsCopyBlastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
