import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
    DynamicFormControlComponent, DynamicFormControlCustomEvent, DynamicFormControlLayout, DynamicFormLayoutService,
    DynamicFormValidationService
} from '@ng-dynamic-forms/core';
import {UntypedFormGroup} from '@angular/forms';
import {
    CoreAutoCompleteInputModel
} from '@core/components/forms/core-auto-complete-form-control/core-autocomplete-input.model';
import {Events} from '@core/core.models';
import {AppFlattenObjectPipe} from "@core/core.pipe";

@Component({
    selector: 'core-auto-complete-form-control',
    templateUrl: './core-auto-complete-form-control.component.html',
    styleUrls: ['./core-auto-complete-form-control.component.scss']
})
export class CoreAutoCompleteFormControlComponent<T> extends DynamicFormControlComponent {

    @Input() group: UntypedFormGroup;
    @Input() layout: DynamicFormControlLayout;
    @Input() model: CoreAutoCompleteInputModel<T[]>;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    app_flatten_object_pipe = new AppFlattenObjectPipe();

    data: T[];

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService) {
        super(layoutService, validationService);
    }

    selectEvent($event) {
        this.model.value = $event;
    }

    onChangeSearch(val: string) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    }

}
