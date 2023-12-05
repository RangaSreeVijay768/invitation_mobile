import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CoreUpdateContentMetaComponent} from './core-update-content-meta.component';

describe('CoreUpdateContentMetaComponent', () => {
    let component: CoreUpdateContentMetaComponent;
    let fixture: ComponentFixture<CoreUpdateContentMetaComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CoreUpdateContentMetaComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoreUpdateContentMetaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
