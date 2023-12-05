import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Directive({
    selector: '[coreConfirm]'
})
export class CoreConfirmDirective {

    @Input() title: string;
    @Input() subTitle: string;
    @Input() message: string;
    @Output() onConfirm = new EventEmitter<any>();
    @Output() onCancel = new EventEmitter<any>();

    constructor(protected alertController: AlertController) {
    }

    @HostListener('click', ['$event']) onClick($event) {
        this.openAlertConfirm();
    }

    async openAlertConfirm() {
        const alert = await this.alertController.create({
            header: this.title,
            subHeader: this.subTitle,
            message: this.message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        this.onCancel.next();
                    }
                },
                {
                    text: 'Confirm',
                    cssClass: 'primary',
                    handler: () => {
                        this.onConfirm.next();
                    }
                }]
        });

        await alert.present();
    }
}
