import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Output} from "@angular/core";
import {AppPermissionIdfaData} from "@core/core.models";
import {AppPermissionsService} from "@core/app-permissions.service";

@Component({
    selector: 'core-get-app-permission-info',
    templateUrl: './core-get-app-permission-info.component.html',
    styleUrls: ['./core-get-app-permission-info.component.scss']
})
export class CoreGetAppPermissionInfoComponent extends BaseComponent {

    @Output()
    appPermissionInfoReceived = new EventEmitter<AppPermissionIdfaData>();

    constructor(protected appPermissionsService: AppPermissionsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    getAppPermissionInfo() {
        this.appPermissionsService.getInfo().then(success => {
            this.appPermissionInfoReceived.emit(success);
        })
    }
}

@Component({
    selector: 'core-get-app-permission-info-no-template',
    templateUrl: './core-get-app-permission-info-no-template.component.html',
    styleUrls: ['./core-get-app-permission-info.component.scss']
})
export class CoreGetAppPermissionInfoNoTemplateComponent extends CoreGetAppPermissionInfoComponent {
}
