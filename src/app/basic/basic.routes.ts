import {Routes} from '@angular/router';
import {NewSignupPageComponent} from "@basic/pages/new-signup-page/new-signup-page.component";
import {BasicLandingPageComponent} from "@basic/pages/basic-landing-page/basic-landing-page.component";
import {BasicHomePageComponent} from "@basic/pages/basic-home-page/basic-home-page.component";
import {
    BasicEventsEventDetailsPageComponent
} from '@basic/pages/basic-events-event-details-page/basic-events-event-details-page.component';
import {GetEventInfoResolver, GetUserEventInfoResolver} from '@events/events.resolvers';
import {EventDetailsPageComponent} from '@events/pages/event-details-page/event-details-page.component';
import {
    BasicUsersForgotPasswordPageComponent
} from '@basic/pages/basic-users-forgot-password-page/basic-users-forgot-password-page.component';

export const BASIC_ROUTES: Routes = [
    {path: 'newsignup', component: NewSignupPageComponent},
    {path: 'forgotpassword', component: BasicUsersForgotPasswordPageComponent},
    {path: 'landingpage', component: BasicLandingPageComponent},
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    // {path: '**', redirectTo: 'home', pathMatch: 'full'},
    {path: 'homepage', component: BasicHomePageComponent},
    {
        path: 'event/:eventId',
        component: BasicEventsEventDetailsPageComponent,
        resolve: {eventInfo: GetEventInfoResolver}
        // resolve: {userEventInfo: GetUserEventInfoResolver}
    },

];

