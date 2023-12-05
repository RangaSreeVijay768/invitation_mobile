import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Output} from "@angular/core";
import {AppPermissionsService} from "@core/app-permissions.service";

@Component({
    selector: 'core-request-app-permission',
    templateUrl: './core-request-app-permission.component.html',
    styleUrls: ['./core-request-app-permission.component.scss']
})
export class CoreRequestAppPermissionComponent extends BaseComponent {

    @Output()
    trackingPermissionReceived = new EventEmitter<number>();

    constructor(protected appPermissionsService: AppPermissionsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    requestPermission() {
        this.appPermissionsService.requestPermission()
            .then(value => {
                this.trackingPermissionReceived.emit(value);
                console.log(value);
            });
    }
}

@Component({
    selector: 'core-request-app-permission-no-template',
    templateUrl: './core-request-app-permission-no-template.component.html',
    styleUrls: ['./core-request-app-permission.component.scss']
})
export class CoreRequestAppPermissionNoTemplateComponent extends CoreRequestAppPermissionComponent {
}
