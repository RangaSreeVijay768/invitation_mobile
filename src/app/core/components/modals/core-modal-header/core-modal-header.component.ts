import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {DEFAULT_APP_COLOR} from "@core/core.constants";


@Component({
    selector: 'core-modal-header',
    templateUrl: './core-modal-header.component.html',
    styleUrls: ['./core-modal-header.component.scss']
})
export class CoreModalHeaderComponent extends BaseComponent {

    @Input()
    title;
    @Input()
    styleClasses: string | string[];
    @Input()
    iconClasses: string | string[];

    @Input()
    headerColor: string = DEFAULT_APP_COLOR;

    @Output()
    closeClicked = new EventEmitter();

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    onCloseClicked(reason?: string, status?: string, data?: any) {
        this.closeClicked.emit({reason: reason, status: status || 'CLOSE', data: data});
    }
}
