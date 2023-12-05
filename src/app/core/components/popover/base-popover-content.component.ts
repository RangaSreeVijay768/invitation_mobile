import {BaseComponent} from '@core/components/base.component';
import {AfterViewInit, ChangeDetectorRef, Directive, EventEmitter, Injector, Output} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {ModalResult} from '@core/app.models';
import {combineLatest} from 'rxjs';

@Directive()
export abstract class BasePopoverContentComponent extends BaseComponent implements AfterViewInit {

    @Output()
    popoverClosed = new EventEmitter<ModalResult>();

    popoverController: PopoverController;

    effects_observable_array = [];
    changeDetectorDef: ChangeDetectorRef;

    constructor(injector: Injector) {
        super(injector);
        this.popoverController = injector.get(PopoverController);
        this.changeDetectorDef = injector.get(ChangeDetectorRef);
    }

    closePopover(modal_result: ModalResult) {
        if (this.effects_observable_array.length) {
            combineLatest(this.effects_observable_array)
                .subscribe(values => {
                    this.emitModalResultAndDismiss(modal_result);
                });
        } else {
            this.emitModalResultAndDismiss(modal_result);
        }
    }

    emitModalResultAndDismiss(modal_result?: ModalResult) {
        this.popoverClosed.emit(modal_result);
        this.popoverController.dismiss(modal_result);

    }

    ngAfterViewInit() {
        this.changeDetectorDef.detectChanges(); // run change detection after changes
    }

}
