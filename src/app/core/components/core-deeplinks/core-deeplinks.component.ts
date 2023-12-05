import {BaseComponent} from "@core/components/base.component";
import {Component, Injector} from "@angular/core";
import {CorePlatformService} from "@core/core-platform.service";
import {DeeplinksService} from "@core/deeplinks.service";

@Component({
    selector: 'core-deeplinks',
    templateUrl: './core-deeplinks.component.html',
    styleUrls: ['./core-deeplinks.component.scss']
})
export class CoreDeeplinksComponent extends BaseComponent {

    constructor(protected deeplinksService:DeeplinksService, protected corePlatformService: CorePlatformService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        if (this.corePlatformService.platform_initialized){
            this.deeplinksService.initializeDeeplinks();
        }
        this.corePlatformService.platformReady.subscribe(value=>{
            this.deeplinksService.initializeDeeplinks();
        },error=>{
            console.log(error);
        });
    }


}
