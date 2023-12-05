import {BaseComponent} from "@core/components/base.component";
import {Component, Injector} from '@angular/core';
import {CoreSafeAreaService} from "@core/core-safe-area.service";
import {AppPlatformIosCheckPipe} from "@core/core.pipe";

@Component({
    selector: 'core-safe-area-manager',
    templateUrl: './core-safe-area-manager.component.html',
    styleUrls: ['./core-safe-area-manager.component.scss']
})
export class CoreSafeAreaManagerComponent extends BaseComponent {

    app_platform_ios_check_pipe = new AppPlatformIosCheckPipe();

    constructor(protected coreSafeAreaService: CoreSafeAreaService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        if (this.app_platform_ios_check_pipe.transform(this.ionicPlatform)) {
            this.coreSafeAreaService.getSafeAreaInsets().then(success => {
                const insets = success.insets;
                for (const [key, value] of Object.entries(insets)) {
                    document.documentElement.style.setProperty(
                        `--safe-area-${key}`,
                        `${value}px`,
                    );
                }
            });
        }
    }

}

@Component({
    selector: 'core-safe-area-manager-no-template',
    templateUrl: './core-safe-area-manager-no-template.component.html',
    styleUrls: ['./core-safe-area-manager.component.scss']
})
export class CoreSafeAreaManagerNoTemplateComponent extends CoreSafeAreaManagerComponent {
}
