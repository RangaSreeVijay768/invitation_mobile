import {Component, Injector} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {AppVersionService} from '@core/app-version.service';
import {CommonsService} from '@core/commons.service';
import {AppInfo} from "@node-modules/@capacitor/app/dist/esm/definitions";

@Component({
    selector: 'core-app-details',
    templateUrl: './core-app-details.component.html',
    styleUrls: ['./core-app-details.component.scss'],
})
export class CoreAppDetailsComponent extends BaseComponent {

    app_info: AppInfo;

    constructor(protected appVersionService: AppVersionService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        CommonsService.promiseToObservable(this.ionicPlatform.ready()).subscribe(ready => {
            this.appVersionService.getAppInfo().subscribe(app_details => {
                this.app_info = app_details;
            });
        });
    }
}

@Component({
    selector: 'core-app-details-no-template',
    templateUrl: './core-app-details-no-template.component.html',
    styleUrls: ['./core-app-details.component.scss'],
})
export class CoreAppDetailsNoTemplateComponent extends CoreAppDetailsComponent {
}

@Component({
    selector: 'core-app-details-signedin-no-template',
    templateUrl: './core-app-details-signedin-no-template.component.html',
    styleUrls: ['./core-app-details.component.scss']
})
export class CoreAppDetailsSignedinNoTemplateComponent extends CoreAppDetailsComponent {
}
