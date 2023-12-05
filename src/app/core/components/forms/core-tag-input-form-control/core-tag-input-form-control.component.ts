import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
    DynamicFormControlComponent, DynamicFormControlCustomEvent, DynamicFormControlLayout, DynamicFormLayoutService,
    DynamicFormValidationService
} from '@ng-dynamic-forms/core';
import {UntypedFormGroup} from '@angular/forms';
import {CoreTagInputModel} from '@core/components/forms/core-tag-input-form-control/core-tag-input.model';

@Component({
    selector: 'core-tag-input-form-control',
    templateUrl: './core-tag-input-form-control.component.html',
    styleUrls: ['./core-tag-input-form-control.component.scss']
})
export class CoreTagInputFormControlComponent<T> extends DynamicFormControlComponent {

    @Input() group: UntypedFormGroup;
    @Input() layout: DynamicFormControlLayout;
    @Input() model: CoreTagInputModel<T[]>;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService) {
        super(layoutService, validationService);
    }

}
