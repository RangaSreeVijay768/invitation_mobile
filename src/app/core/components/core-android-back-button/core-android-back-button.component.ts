import {BaseComponent} from "@core/components/base.component";
import {Component, Injector, Input, QueryList} from '@angular/core';
import {IonRouterOutlet, MenuController} from "@node-modules/@ionic/angular";
import {Toast} from "@node-modules/@ionic-native/toast/ngx";
import {ActionSheetController, ModalController, Platform} from "@ionic/angular";


@Component({
    selector: 'core-android-back-button',
    templateUrl: './core-android-back-button.component.html',
    styleUrls: ['./core-android-back-button.component.scss']
})
export class CoreAndroidBackButtonComponent extends BaseComponent {

    // set up hardware back button event.
    lastTimeBackPress = 0;
    timePeriodToExit = 2000;

    @Input()
    routerOutlets: QueryList<IonRouterOutlet>;

    constructor(private platform: Platform,
                public modalCtrl: ModalController,
                private menu: MenuController,
                private actionSheetCtrl: ActionSheetController,
                private toast: Toast,
                injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        // this.backButtonEvent()
    }

    // active hardware back button
    backButtonEvent() {
        this.platform.backButton.subscribe(async () => {

            if (this.router.url === '/signedin/nav/taskactivities/home') {
                if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
                    navigator['app'].exitApp(); // work in ionic 4
                } else {
                    this.notificationsService.show(`Press back again to exit App.`);
                    this.lastTimeBackPress = new Date().getTime();
                }
            }
        });
    }

}

@Component({
    selector: 'core-android-back-button-no-template',
    templateUrl: './core-android-back-button-no-template.component.html',
    styleUrls: ['./core-android-back-button.component.scss']
})
export class CoreAndroidBackButtonNoTemplateComponent extends CoreAndroidBackButtonComponent {
}
