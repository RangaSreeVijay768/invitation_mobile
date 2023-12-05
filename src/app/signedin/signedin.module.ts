import {NgModule} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {RouterModule} from '@angular/router';
import {SIGNEDIN_ROUTES} from '@signedin/signedin.routes';
import {SignedinLandingPageComponent} from './pages/signedin-landing-page/signedin-landing-page.component';
import {SignedinTopNavComponent} from './components/signedin-top-nav/signedin-top-nav.component';

@NgModule({
    declarations: [
        SignedinLandingPageComponent,
        SignedinTopNavComponent
    ],
    imports: [
        CoreModule,
        RouterModule.forChild(SIGNEDIN_ROUTES),
    ],
    exports: [],
})

export class SignedinModule {
}
