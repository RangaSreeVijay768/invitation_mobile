import {Component} from '@angular/core';
import {LoadingBarComponent, LoadingBarService} from '@ngx-loading-bar/core';
import {LoadingController} from "@node-modules/@ionic/angular";

@Component({
    selector: 'core-loading-bar',
    templateUrl: './core-loading-bar.component.html',
    styleUrls: ['./core-loading-bar.component.scss']
})
export class CoreLoadingBarComponent extends LoadingBarComponent {

    current_loader: HTMLIonLoadingElement;
    is_loading: boolean;


    constructor(loader: LoadingBarService, protected loadingController: LoadingController,) {
        super(loader);
        loader.value$.subscribe(async (value) => {
            if (!value && this.is_loading) {
                this.is_loading = false;
                if (this.current_loader) {
                    await this.current_loader.dismiss();
                    this.current_loader = undefined;
                }
            }
            if (value && !this.is_loading) {
                this.is_loading = true;
                this.current_loader =
                    await this.loadingController.create({message: 'Loading', duration: 3000, spinner: 'crescent',cssClass:'main-loader'});
                await this.current_loader.present();
            }
        });
    }

    async showLoader(){
        const loader=await this.loadingController.create({message: 'Loading', duration: 100000, spinner: 'crescent',cssClass:'main-loader'});
        loader.present();
    }
}
