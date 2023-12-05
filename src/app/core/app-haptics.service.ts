import {Injectable} from '@angular/core';
import {Haptics, NotificationType} from '@capacitor/haptics';

@Injectable({
    providedIn: 'root'
})
export class AppHapticsService {


    impact(): Promise<void> {
       return  Haptics.notification({ type: NotificationType.Success });
    }
}
