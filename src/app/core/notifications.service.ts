import {Injectable} from '@angular/core';
import {NOTIFICATION_THEMES, TOAST_CONFIGURATION} from '@core/core.constants';
import {Toast} from '@ionic-native/toast/ngx';
import {ToastController} from "@node-modules/@ionic/angular";


@Injectable({
    providedIn: 'root'
})
export class NotificationsService {

    constructor(protected toast: Toast, protected toastController: ToastController) {
    }

    async show(message: string, cssClass?: string, icon?: string, color?: string, duration?: number, position?: any) {
        const _toast = await this.toastController.create({
            message: message,
            duration: duration || TOAST_CONFIGURATION.DURATION,
            position: position || TOAST_CONFIGURATION.POSITION,
            color: color,
            cssClass: cssClass || '',
            icon: icon
        });

        _toast.present();
    }

    success(message: string, duration?: number, postion?: string) {
        this.show(message, 'success-toast', 'checkmark-circle-sharp', NOTIFICATION_THEMES.SUCCESS, duration, 'bottom');
    }

    error(message: string, duration?: number, postion?: string) {
        this.show(message, 'error-toast', 'alert-circle-outline', NOTIFICATION_THEMES.ERROR, duration, 'bottom');
    }

    warning(message: string, duration?: number, postion?: string) {
        this.show(message, 'warning-toast', 'alert-circle-outline', NOTIFICATION_THEMES.WARNING, duration, 'bottom');
    }
}
