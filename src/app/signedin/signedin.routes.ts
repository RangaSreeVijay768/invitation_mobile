import {Routes} from '@angular/router';
import {SignedinLandingPageComponent} from '@signedin/pages/signedin-landing-page/signedin-landing-page.component';
import {UserProfilesMainPageComponent} from '@user-profiles/pages/user-profiles-main-page/user-profiles-main-page.component';
import {USER_PROFILES_ROUTES} from '@user-profiles/user-profiles.routes';
import {EventShareEventPageComponent} from '@events/pages/event-share-event-page/event-share-event-page.component';
import {EventDashboardMainPageComponent} from '@events/pages/event-dashboard-main-page/event-dashboard-main-page.component';
import {
    EventsEventDashboardCreatorDashboardPageComponent
} from '@events/pages/events-event-dashboard-creator-dashboard-page/events-event-dashboard-creator-dashboard-page.component';
import {
    EventsEventDashboardEventDetailsPageComponent
} from '@events/pages/events-event-dashboard-event-details-page/events-event-dashboard-event-details-page.component';
import {
    EventsEventDashboardTicketDetailsPromocodesPageComponent
} from '@events/pages/events-event-dashboard-ticket-details-promocodes-page/events-event-dashboard-ticket-details-promocodes-page.component';
import {
    EventsEventDashboardTicketDetailsTicketTypePageComponent
} from '@events/pages/events-event-dashboard-ticket-details-ticket-type-page/events-event-dashboard-ticket-details-ticket-type-page.component';
import {
    EventsEventDashboardTicketDetailsTicketSalesPageComponent
} from '@events/pages/events-event-dashboard-ticket-details-ticket-sales-page/events-event-dashboard-ticket-details-ticket-sales-page.component';
import {
    EventsEventDashboardManageGuestListAllGuestsComponent
} from '@events/pages/events-event-dashboard-manage-guest-list-all-guests/events-event-dashboard-manage-guest-list-all-guests.component';

export const SIGNEDIN_ROUTES: Routes = [
    {
        path: '', component: SignedinLandingPageComponent, children: [
            {path: '', redirectTo: 'events/homepage', pathMatch: 'full'},
            {path: 'events', loadChildren: () => import('@events/events.module').then(m => m.EventsModule)},
            {path: 'userprofiles', loadChildren: () => import('@user-profiles/user-profiles.module').then(m => m.UserProfilesModule)},
            //     temp
            {
                path: 'shareevent', component: EventShareEventPageComponent,
            },
            {
                path: 'creatordashboard', component: EventsEventDashboardCreatorDashboardPageComponent
            },
            {
                path: 'eventdetails', component: EventsEventDashboardEventDetailsPageComponent,
            },
            {
                path: 'promocodes', component: EventsEventDashboardTicketDetailsPromocodesPageComponent
            },
            {
                path: 'tickettype', component: EventsEventDashboardTicketDetailsTicketTypePageComponent
            },
            {path: 'ticketsales', component: EventsEventDashboardTicketDetailsTicketSalesPageComponent},
            {path: 'allguests', component: EventsEventDashboardManageGuestListAllGuestsComponent},

        ]
    }
];

