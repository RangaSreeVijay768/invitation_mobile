import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {
    DynamicFormControlComponent, DynamicFormControlCustomEvent, DynamicFormControlLayout, DynamicFormLayout,
    DynamicFormLayoutService, DynamicFormValidationService
} from "@ng-dynamic-forms/core";
import {UntypedFormGroup} from "@angular/forms";
import {IonDatetime} from "@node-modules/@ionic/angular";
import {
    CoreIonicDateTimeButtonFormControlModel
} from "@core/components/forms/core-ionic-date-time-button-form-control/core-ionic-date-time-button-form-control.model";


@Component({
    selector: 'core-ionic-date-time-button-form-control',
    templateUrl: './core-ionic-date-time-button-form-control.component.html',
    styleUrls: ['./core-ionic-date-time-button-form-control.component.scss']
})
export class CoreIonicDateTimeButtonFormControlComponent extends DynamicFormControlComponent {
    @Input() formLayout?: DynamicFormLayout;
    @Input() group!: UntypedFormGroup;
    @Input() layout?: DynamicFormControlLayout;
    @Input() model!: CoreIonicDateTimeButtonFormControlModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    @ViewChild("ionDatetime", {static: true}) ionDatetime!: IonDatetime;

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService) {
        super(layoutService, validationService);
    }
}
