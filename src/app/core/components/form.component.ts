import {BaseComponent} from '@core/components/base.component';
import {
    DynamicCheckboxGroupModel, DynamicCheckboxModel, DynamicDatePickerModel, DynamicFormControlModel,
    DynamicFormService, DynamicFormValueControlModel, DynamicInputModel, DynamicRadioGroupModel, DynamicTimePickerModel
} from '@ng-dynamic-forms/core';
import {UntypedFormGroup} from '@angular/forms';
import {AfterViewInit, ChangeDetectorRef, Directive, Injector} from '@angular/core';
import validator from 'validator';
import {CommonsService} from '@core/commons.service';
// import {Moment} from 'moment';
import {AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe} from '@core/core.pipe';

@Directive()
export abstract class FormComponent extends BaseComponent implements AfterViewInit {

    formGroup: UntypedFormGroup;
    formModel: DynamicFormControlModel[];

    formModelMap: { [key: string]: DynamicFormControlModel };
    appDynamicFormControlModelArrayToDynamicFormControlModelMapPipe
        = new AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe();


    changeDetectorDef: ChangeDetectorRef;

    protected formService: DynamicFormService;

    constructor(injector: Injector) {
        super(injector);
        this.formService = injector.get(DynamicFormService);
        this.changeDetectorDef = injector.get(ChangeDetectorRef);
    }

    abstract getFormModel(): DynamicFormControlModel[];

    createFormModel() {
        this.formGroup = this.formService.createFormGroup(this.formModel);
        this.formModelMap =
            this.appDynamicFormControlModelArrayToDynamicFormControlModelMapPipe.transform(
                this.formModel);
    }

    // noinspection TsLint
    ngOnInit() {
        this.formModel = this.getFormModel();
        this.createFormModel();
        super.ngOnInit();
    }

    // for form update
    ngAfterViewInit() {
        this.afterInitializeComponent();
        this.changeDetectorDef.detectChanges(); // run change detection after changes
    }

    registerModelForChanges<T>(model: DynamicFormValueControlModel<T>) {
        model.valueChanges.subscribe(value => {
            this.changeDetectorDef.markForCheck();
        });
    }

    abstract afterInitializeComponent();

    protected getInputModel(id: string): DynamicInputModel {
        return this.formService.findById(id, this.formModel) as DynamicInputModel;
    }

    protected getDateModel(id: string): DynamicDatePickerModel {
        return this.formService.findById(id, this.formModel) as DynamicDatePickerModel;
    }

    protected getTimeModel(id: string): DynamicTimePickerModel {
        return this.formService.findById(id, this.formModel) as DynamicTimePickerModel;
    }

    protected getRadioGroupInputModel<T>(id: string): DynamicRadioGroupModel<T> {
        return this.formService.findById(id, this.formModel) as DynamicRadioGroupModel<T>;
    }

    protected getCheckboxInputModel(id: string): DynamicCheckboxModel {
        return this.formService.findById(id, this.formModel) as DynamicCheckboxModel;
    }

    protected getCheckboxGroupInputModel(id: string): DynamicCheckboxGroupModel {
        return this.formService.findById(id, this.formModel) as DynamicCheckboxGroupModel;
    }

    protected getDateModelValue(id: string): Date {
        const value: any = this.getDateModel(id).value;
        return value ? new Date(value.year, value.month - 1, value.day) : undefined;
    }

    protected getCheckboxGroupModelValueAsArray(id: string): any[] {
        const map = this.getCheckboxGroupInputModel(id)
            .group
            .map(group => {
                const val = {};
                // @ts-ignore
                val.id = group.id;
                // @ts-ignore
                val.checked = group.checked;
                return val;
            });
        return map;
    }

    protected getCheckboxGroupModelCheckedValues(id: string): any[] {
        const map = this.getCheckboxGroupModelValueAsArray(id);

        return map.filter(value => value.checked).map(value => value.id);
    }

    protected getInputModelValueAsString(id: string): string {
        const value = this.getInputModel(id)
            .value;
        return value ? value.toString() : undefined;
    }

    // protected getTimeModelValueAsString(id: string): string {
    //   const value = this.getTimeModel(id)
    //     .value;
    //   return value ? CommonsService.getTimeStringFromJSON(value) : undefined;
    // }

    protected getInputModelValueAsNumber(id: string, noSymbols?: boolean): number {
        const value = this.getInputModelValueAsString(id);
        return validator.isNumeric(value || '', {no_symbols: CommonsService.isNullOrUndefined(noSymbols) ? true : noSymbols}) ?
            Number(value) :
            undefined;
    }

    resetForm(value?: any, options?: any) {
        this.formGroup.reset(value, options);
    }
}
