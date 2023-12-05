import {BaseComponent} from '@core/components/base.component';
import {Directive, EventEmitter, Injector, Output} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalResult} from '@core/app.models';
import {NavigationEnd} from '@angular/router';
import {CommonsService} from '@core/commons.service';

@Directive()
export abstract class BaseModalComponent extends BaseComponent {

    modalController: ModalController;
    values = {};
    modal: HTMLIonModalElement;

    @Output()
    modalClosed = new EventEmitter<ModalResult>();
    @Output()
    modalOpened = new EventEmitter<boolean>();

    modal_open_subscription$: Promise<void>;


    constructor(injector: Injector) {
        super(injector);
        this.modalController = injector.get(ModalController);
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // close all open modals
                this.modalController.getTop().then(function (success) {
                    if (success) {
                        success.dismiss();
                    }
                }, function (error) {

                });
            }
        });

    }

    // async must or else throws error
    async open(content?, cssClass?, dismiss?, id?, animated?) {
        this.modal = await this.modalController.create({
            component: content,
            componentProps: this.values,
            cssClass: cssClass,
            backdropDismiss: dismiss,
            id: id,
            animated: CommonsService.isNullOrUndefined(animated) ? true : animated
        });
        this.modal.onDidDismiss().then((detail) => {
            this.modalClosed.emit(detail.data);
        });
        this.modal_open_subscription$ = this.modal.present();
        await this.modal_open_subscription$;
        this.modalOpened.emit(true);
    }

    closeModal(modal_result: ModalResult) {
        this.modal.dismiss(modal_result);
    }


    setModalData(key, value) {
        this.values[key] = value;
    }

}
