import {BaseComponent} from "@core/components/base.component";
import {Directive, EventEmitter, Injector, Output} from "@angular/core";
import {PopoverController} from "@ionic/angular";
import {ModalResult} from "@core/app.models";

@Directive()
export abstract class BasePopoverComponent extends BaseComponent {

    popoverController: PopoverController;
    popover: HTMLIonPopoverElement;
    popover_subscription$: Promise<void>;

    values = {};

    @Output()
    popoverClosed = new EventEmitter<ModalResult>();

    constructor(injector: Injector) {
        super(injector);
        this.popoverController = injector.get(PopoverController);
    }

    async presentPopover(content?, cssClass?, event?: Event, translucent?) {
        this.popover = await this.popoverController.create({
            component: content,
            componentProps: this.values,
            cssClass: cssClass,
            event: event,
            translucent: translucent,
        });
        this.popover.onDidDismiss().then((detail) => {
            this.popoverClosed.emit(detail.data);
        });
        this.popover_subscription$ = this.popover.present();
        await this.popover_subscription$;
    }

    closePopover(modal_result: ModalResult) {
        this.popover.dismiss(modal_result);
    }

    setPopoverData(key, value) {
        this.values[key] = value;
    }
}
