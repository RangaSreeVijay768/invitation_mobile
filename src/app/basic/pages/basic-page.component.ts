import {PageComponent} from "@core/components/page.component";
import {Directive} from "@angular/core";

@Directive()
export abstract class BasicPageComponent extends PageComponent {

    // noinspection TsLint
    override ngOnInit() {
        super.ngOnInit();
        const _this = this;
        this.authService.getAuthToken()
            .then(session => {

                console.log("hello2");
                this.authService.getLoggedAccount().then(result => {
                    if (result) {
                        console.log("hello2");
                        return _this.router.navigateByUrl(_this.getLoggedInRouterUrl(), {replaceUrl: true});
                    }
                    return false;
                })

            });
    }

    abstract getLoggedInRouterUrl(): string ;
}
