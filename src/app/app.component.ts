import {Component, Injector} from '@angular/core';

import {Platform} from '@ionic/angular';
import {BaseComponent} from '@core/components/base.component';
import {Angulartics2GoogleTagManager} from 'angulartics2';
import {CoreSafeAreaService} from '@core/core-safe-area.service';
import {Stripe} from "@node-modules/@capacitor-community/stripe";
import {environment} from "@environment/environment";


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent extends BaseComponent {


    constructor(injector: Injector,
                private platform: Platform,
                protected angulartics2GoogleTagManager: Angulartics2GoogleTagManager,
                protected coreSafeAreaService: CoreSafeAreaService,
    ) {
        super(injector);
        this.initializeApp();
        Stripe.initialize({
            publishableKey: environment.stripe.publicKey
        })
    }


    initializeComponent() {
    }


    initializeApp() {

        this.angulartics2GoogleTagManager.startTracking();

    }
}
