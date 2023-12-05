import {EventEmitter, Injector, Input, Output, Directive} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {PickerController} from '@ionic/angular';
import {ModalResult} from '@core/app.models';
import {PickerColumn, PickerColumnOption, PickerOptions} from '@ionic/core';

@Directive()
export abstract class CorePickerComponent extends BaseComponent {

    pickerController: PickerController;
    picker: HTMLIonPickerElement;

    @Input()
    pickerOptions: PickerOptions;

    @Output()
    pickerDismissed = new EventEmitter<ModalResult>();

    constructor(injector: Injector) {
        super(injector);
        this.pickerController = injector.get(PickerController);
    }

    async open(pickerOptions?: PickerOptions | any) {
        const options = pickerOptions || this.pickerOptions;
        options.columns = this.getColumns();
        this.picker = await this.pickerController.create(pickerOptions);
        this.picker.present();
        this.picker.onDidDismiss().then((event_detail) => {
            this.pickerDismissed.emit(event_detail.data);
        });
    }

    dismiss(modal_result?: ModalResult) {
        if (this.picker) {
            this.picker.dismiss(modal_result);
        }
    }

    dismissWithClose() {
        this.dismiss({status: 'CLOSE', data: undefined});
    }

    dismissWithData(data: any) {
        this.dismiss({status: 'SUCCESS', data: data});
    }

    abstract getColumns();

    getPickerColumnOption(value: number | string, default_value?: number | string): PickerColumnOption {
        return {
            text: '' + value,
            value: value,
            selected: value === default_value
        };
    }

    getPickerColumn(name, column_options: PickerColumnOption[], selected_index?: number): PickerColumn {
        return {
            name: name,
            options: column_options,
            selectedIndex: selected_index
        };
    }
}
