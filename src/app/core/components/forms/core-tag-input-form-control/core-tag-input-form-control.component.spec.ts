import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CoreTagInputFormControlComponent} from './core-tag-input-form-control.component';

describe('JeewithTagInputFormControlComponent', () => {
    let component: CoreTagInputFormControlComponent;
    let fixture: ComponentFixture<CoreTagInputFormControlComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CoreTagInputFormControlComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoreTagInputFormControlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
