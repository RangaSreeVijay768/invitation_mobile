import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {Subscription} from 'rxjs';

@Component({
    selector: 'core-modal-footer',
    templateUrl: './core-modal-footer.component.html',
    styleUrls: ['./core-modal-footer.component.scss']
})
export class CoreModalFooterComponent extends BaseComponent {

    @Input()
    buttonText: string;

    @Input()
    buttonDisabled: boolean;

    @Input()
    actionPromise: Subscription;
    @Input()
    buttonColor: string;

    @Output()
    actionClicked = new EventEmitter<string>();

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    onActionClick() {
        this.actionClicked.emit('Footer action clicked');
    }
}

@Component({
    selector: 'core-modal-footer-double-button',
    templateUrl: './core-modal-footer-double-button.component.html',
    styleUrls: ['./core-modal-footer.component.scss']
})
export class CoreModalFooterDoubleButtonComponent extends CoreModalFooterComponent {
    @Input()
    cancelButtonText: string;
    @Input()
    cancelButtonColor: string;

    @Output()
    closeClicked = new EventEmitter<boolean>();
}

