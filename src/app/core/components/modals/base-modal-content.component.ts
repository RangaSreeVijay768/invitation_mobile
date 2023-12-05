import {BaseComponent} from '@core/components/base.component';
import {AfterViewInit, ChangeDetectorRef, Directive, EventEmitter, Injector, Output} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalResult} from '@core/app.models';
import {combineLatest} from 'rxjs';

@Directive()
export abstract class BaseModalContentComponent extends BaseComponent implements AfterViewInit {

  @Output()
  closeModalClicked = new EventEmitter<ModalResult>();

  modalController: ModalController;

  effects_observable_array = [];
  changeDetectorDef: ChangeDetectorRef;

  constructor(injector: Injector) {
    super(injector);
    this.modalController = injector.get(ModalController);
    this.changeDetectorDef = injector.get(ChangeDetectorRef);
  }

  closeModal(modal_result: ModalResult) {
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
    this.closeModalClicked.emit(modal_result);
    this.modalController.dismiss(modal_result);

  }

  ngAfterViewInit() {
    this.changeDetectorDef.detectChanges(); // run change detection after changes
  }

  closeModalWithTimeOut(event: ModalResult) {
    setTimeout(() => {
      this.closeModal(event)
    }, 200);
  }

}
