import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {IonDatetime} from '@ionic/angular';
import {CommonsService} from '@core/commons.service';
import {ModalResult} from '@core/app.models';
import {Subscription} from 'rxjs';

@Component({
    selector: 'core-date-time-picker',
    templateUrl: './core-date-time-picker.component.html',
    styleUrls: ['./core-date-time-picker.component.scss'],
})
export class CoreDateTimePickerComponent extends BaseComponent {

    @ViewChild(IonDatetime, {static: true})
    ionDateTime: IonDatetime;

    @Input()
    value: string;
    @Input()
    presentation: string;

    @Output()
    datePickerClosed = new EventEmitter<ModalResult>();

    @Input()
    minDate: string;
    @Input()
    maxDate: string;

    @Input()
    cancelText: string;
    @Input()
    doneText: string;
    @Input()
    isModal: boolean;
    @Input()
    displayFormat: string;
    @Input()
    defaultText: string = '00:00';


    @Input()
    styleClasses: string | string[];
    @Input()
    modalClasses: string | string[];
    @Input()
    labelClasses: string | string[];
    @Input()
    popoverClasses: string | string[];
    @Input()
    rowClasses: string | string[];

    id = 0;

    date: Date;

    initialized = false;

    is_open = false;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.id = CommonsService.getRandomInt(1000, 10000);
    }

    async open() {
        //TODO: UPDATE
        // await this.ionDateTime.open();
    }

    datePickerValueReceived(event: any) {
        const moment = CommonsService.getMomentFromDateTimeString(event.detail.value);
        this.value = moment.toISOString(true);
        this.is_open = false;
        this.datePickerClosed.emit({
            status: 'SUCCESS',
            data: moment
        });

    }

    closeModal() {
        // this.ionDateTime.cancel()
        this.is_open = false;
        this.datePickerClosed.emit({status: 'CLOSE', data: undefined});
    }

    openModal() {
        console.log('opening');
        this.is_open = true;
    }
}

@Component({
    selector: 'core-date-time-picker-cron',
    templateUrl: './core-date-time-picker-cron.component.html',
    styleUrls: ['./core-date-time-picker.component.scss'],
})
export class CoreDateTimePickerCronComponent extends CoreDateTimePickerComponent {

}

@Component({
    selector: 'core-date-time-picker-no-style',
    templateUrl: './core-date-time-picker-no-style.component.html',
    styleUrls: ['./core-date-time-picker.component.scss'],
})
export class CoreDateTimePickerNoStyleComponent extends CoreDateTimePickerComponent {


}


@Component({
    selector: 'core-date-time-picker-label',
    templateUrl: './core-date-time-picker-label.component.html',
    styleUrls: ['./core-date-time-picker.component.scss']
})
export class CoreDateTimePickerLabelComponent extends CoreDateTimePickerComponent {
}

@Component({
    selector: 'core-date-time-picker-button',
    templateUrl: './core-date-time-picker-button.component.html',
    styleUrls: ['./core-date-time-picker.component.scss']
})
export class CoreDateTimePickerButtonComponent extends CoreDateTimePickerComponent {
    @Input()
    buttonText: string;
    @Input()
    color: string;
    @Input()
    fill: string;

    @Input()
    promiseBtn: Subscription;
}
