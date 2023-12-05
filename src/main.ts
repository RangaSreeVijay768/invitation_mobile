import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

import {defineCustomElements} from '@ionic/pwa-elements/loader';
import {defineCustomElements as stripeCustomElements} from 'stripe-pwa-elements/loader';


if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(() => {
        defineCustomElements(window);
        stripeCustomElements(window);
    })
    .catch(err => console.log(err));

// window['LOG_LEVEL'] = 'DEBUG';

//pwa element entry
defineCustomElements(window);
