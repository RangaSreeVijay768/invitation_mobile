import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {EventDetailsPageComponent} from './pages/event-details-page/event-details-page.component';
import {EventsHomePageComponent} from './pages/events-home-page/events-home-page.component';
import {
    EventsGetAllEventsInfosComponent, EventsGetAllEventsInfosNoTemplateComponent
} from './components/events-get-all-events-infos/events-get-all-events-infos.component';
import {EventsGetEventInfoComponent} from './components/events-get-event-info/events-get-event-info.component';
import {
    EventsAddTicketsBeforePageComponent
} from './pages/events-add-tickets-before-page/events-add-tickets-before-page.component';
import {
    EventsAddTicketsAfterPageComponent
} from './pages/events-add-tickets-after-page/events-add-tickets-after-page.component';
import {EventsMainPageComponent} from './pages/events-main-page/events-main-page.component';
import {
    EventsEventMainBlankPageComponent
} from './pages/events-event-main-blank-page/events-event-main-blank-page.component';
import {EventsRsvpFreeModalComponent} from './components/events-rsvp-free-modal/events-rsvp-free-modal.component';
import {
    EventsRsvpFreeModalContentComponent
} from './components/events-rsvp-free-modal/events-rsvp-free-modal-content/events-rsvp-free-modal-content.component';
import {
    EventsEventPromoCodeTypeToHumanReadablePipe, EventsInvitationPolicyToHumanReadablePipe
} from '@events/events.pipe';
import {Angular2PromiseButtonModule} from '@core/external/angular2-promise-buttons';
import {RouterModule} from '@angular/router';
import {EVENTS_ROUTES} from '@events/events.routes';
import {EventsMyEventsPageComponent} from './pages/events-my-events-page/events-my-events-page.component';
import {
    EventsMyInvitedEventsPageComponent
} from './pages/events-my-invited-events-page/events-my-invited-events-page.component';
import {
    EventsMyInvitedEventsPastEventsPageComponent
} from './pages/events-my-invited-events-past-events-page/events-my-invited-events-past-events-page.component';
import {
    EventsMyInvitedEventsUpcomingEventsComponent
} from './pages/events-my-invited-events-upcoming-events/events-my-invited-events-upcoming-events.component';
import {
    EventsGetAllEventsFilterComponent, EventsGetAllEventsFilterNoTemplateComponent
} from './components/events-get-all-events-filter/events-get-all-events-filter.component';
import {EventsCommonModule} from '@events/events.common.module';
import {
    EventsGetEventInviteAndUserEventInfosByUserAccountComponent,
    EventsGetEventInviteAndUserEventInfosByUserAccountNoTemplateComponent,
    EventsGetEventInviteAndUserEventInfosByUserAccountScrollingComponent
} from './components/events-get-event-invite-and-user-event-infos-by-user-account/events-get-event-invite-and-user-event-infos-by-user-account.component';
import {
    EventsMyCreatedEventsPageComponent
} from './pages/events-my-created-events-page/events-my-created-events-page.component';
import {
    EventsMyCreatedEventsUpcomingEventsPageComponent
} from './pages/events-my-created-events-upcoming-events-page/events-my-created-events-upcoming-events-page.component';
import {
    EventsMyCreatedEventsPastEventsPageComponent
} from './pages/events-my-created-events-past-events-page/events-my-created-events-past-events-page.component';
import {
    EventsMyDraftEventsPageComponent
} from './pages/events-my-draft-events-page/events-my-draft-events-page.component';
import {
    EventsGetEventsByCreatedByComponent, EventsGetEventsByCreatedByDraftEventsScrollingComponent,
    EventsGetEventsByCreatedByNoTemplateComponent, EventsGetEventsByCreatedByScrollingComponent
} from './components/events-get-events-by-created-by/events-get-events-by-created-by.component';
import {UserProfilesModule} from '@user-profiles/user-profiles.module';
import {
    EventsGetAllEventsComponent, EventsGetAllEventsNoTemplateComponent, EventsGetAllEventsPastEventsScrollingComponent,
    EventsGetAllEventsScrollingComponent
} from '@events/components/events-get-all-events/events-get-all-events.component';
import {
    EventsGetEventAttendeesOfUserAccountComponent, EventsGetEventAttendeesOfUserAccountNoTemplateComponent,
    EventsGetEventAttendeesOfUserAccountScrollingComponent
} from '@events/components/events-get-event-attendees-of-user-account/events-get-event-attendees-of-user-account.component';
import {
    EventsGetUserEventTicketsByUserAccountComponent, EventsGetUserEventTicketsByUserAccountNoTemplateComponent,
    EventsGetUserEventTicketsByUserAccountScrollingComponent
} from '@events/components/events-get-user-event-tickets-by-user-account/events-get-user-event-tickets-by-user-account.component';
import {
    EventsCreateEventFormComponent
} from '@events/components/events-create-event-form/events-create-event-form.component';
import {
    EventsCreateEventEventCreationPageComponent
} from '@events/pages/events-create-event-event-creation-page/events-create-event-event-creation-page.component';
import {SearchModule} from '../search/search.module';
import {
    EventsSearchEventInfosComponent, EventsSearchEventInfosNoTemplateComponent, EventsSearchEventInfosScrollingComponent
} from '@events/components/events-search-event-infos/events-search-event-infos.component';
import {
    EventDashboardMainPageComponent
} from '@events/pages/event-dashboard-main-page/event-dashboard-main-page.component';
import {
    EventsGetOrderItemsCountByEventTicketComponent, EventsGetOrderItemsCountByEventTicketNoTemplateComponent
} from '@events/components/events-get-order-items-count-by-event-ticket/events-get-order-items-count-by-event-ticket.component';
import {
    EventsGetUserEventTicketsCountByEventComponent, EventsGetUserEventTicketsCountByEventNoTemplateComponent
} from '@events/components/events-get-user-event-tickets-count-by-event/events-get-user-event-tickets-count-by-event.component';
import {
    EventsGetUserEventTicketsByEventComponent, EventsGetUserEventTicketsByEventNoTemplateComponent
} from '@events/components/events-get-user-event-tickets-by-event/events-get-user-event-tickets-by-event.component';
import {
    EventsGetEventTicketsSaleSumByEventComponent, EventsGetEventTicketsSaleSumByEventNoTemplateComponent
} from '@events/components/events-get-event-tickets-sale-sum-by-event/events-get-event-tickets-sale-sum-by-event.component';
import {
    EventsEventDashboardCreatorDashboardPageComponent
} from '@events/pages/events-event-dashboard-creator-dashboard-page/events-event-dashboard-creator-dashboard-page.component';
import {
    EventsAddCoHostStatusComponent, EventsAddCoHostStatusNoTemplateComponent
} from '@events/components/events-add-co-host-status/events-add-co-host-status.component';
import {
    EventsBottomNavFooterComponent
} from '@events/components/events-bottom-nav-footer/events-bottom-nav-footer.component';
import {
    EventsCheckInEventAttendeeComponent, EventsCheckInEventAttendeeNoTemplateComponent
} from '@events/components/events-check-in-event-attendee/events-check-in-event-attendee.component';
import {
    EventsCoHostStatusFormComponent
} from '@events/components/events-co-host-status-form/events-co-host-status-form.component';
import {
    EventsCreateEventCreatePaidTicketFormComponent
} from '@events/components/events-create-event-create-paid-ticket-form/events-create-event-create-paid-ticket-form.component';
import {
    EventsCreateEventCreatePaidTicketModalComponent
} from '@events/components/events-create-event-create-paid-ticket-modal/events-create-event-create-paid-ticket-modal.component';
import {
    EventsCreateEventCreatePaidTicketModalContentComponent
} from '@events/components/events-create-event-create-paid-ticket-modal/events-create-event-create-paid-ticket-modal-content/events-create-event-create-paid-ticket-modal-content.component';
import {
    EventsCreateEventFreeTicketFormComponent
} from '@events/components/events-create-event-free-ticket-form/events-create-event-free-ticket-form.component';
import {
    EventsCreateEventFreeTicketModalComponent
} from '@events/components/events-create-event-free-ticket-modal/events-create-event-free-ticket-modal.component';
import {
    EventsCreateEventFreeTicketModalContentComponent
} from '@events/components/events-create-event-free-ticket-modal/events-create-event-free-ticket-modal-content/events-create-event-free-ticket-modal-content.component';
import {
    EventsCreateEventInvitesByEventAndUserAccountsComponent
} from '@events/components/events-create-event-invites-by-event-and-user-accounts/events-create-event-invites-by-event-and-user-accounts.component';
import {
    EventsCreateEventPaidTicketFormComponent
} from '@events/components/events-create-event-paid-ticket-form/events-create-event-paid-ticket-form.component';
import {
    EventsCreateEventPromoCodeComponent, EventsCreateEventPromoCodeNoTemplateComponent
} from '@events/components/events-create-event-promo-code/events-create-event-promo-code.component';
import {
    EventsCreateEventTicketAndEventTicketSaleItemFormComponent
} from '@events/components/events-create-event-ticket-and-event-ticket-sale-item-form/events-create-event-ticket-and-event-ticket-sale-item-form.component';
import {
    EventsRemoveCoHostStatusComponent, EventsRemoveCoHostStatusNoTemplateComponent
} from '@events/components/events-remove-co-host-status/events-remove-co-host-status.component';
import {
    EventsEventDashboardEventDetailsPageComponent
} from '@events/pages/events-event-dashboard-event-details-page/events-event-dashboard-event-details-page.component';
import {
    EventsSetEventMetaDataComponent, EventsSetEventMetaDataNoTemplateComponent
} from '@events/components/events-set-event-meta-data/events-set-event-meta-data.component';
import {
    EventsPublishEventComponent, EventsPublishEventNoTemplateComponent
} from '@events/components/events-publish-event/events-publish-event.component';
import {
    EventsEventDashboardTicketDetailsPromocodesPageComponent
} from '@events/pages/events-event-dashboard-ticket-details-promocodes-page/events-event-dashboard-ticket-details-promocodes-page.component';
import {
    EventsGetEventPromoCodesByEventComponent, EventsGetEventPromoCodesByEventNoTemplateComponent
} from '@events/components/events-get-event-promo-codes-by-event/events-get-event-promo-codes-by-event.component';
import {
    EventsEventDashboardPromocodesCreateCodeModalComponent
} from '@events/components/events-event-dashboard-promocodes-create-code-modal/events-event-dashboard-promocodes-create-code-modal.component';
import {
    EventsEventDashboardPromocodesCreateCodeModalContentComponent
} from '@events/components/events-event-dashboard-promocodes-create-code-modal/events-event-dashboard-promocodes-create-code-modal-content/events-event-dashboard-promocodes-create-code-modal-content.component';
import {
    EventsEventDashboardPromocodesCreateCodeFormComponent
} from '@events/components/events-event-dashboard-promocodes-create-code-form/events-event-dashboard-promocodes-create-code-form.component';
import {
    EventsEventDashboardTicketDetailsTicketTypePageComponent
} from '@events/pages/events-event-dashboard-ticket-details-ticket-type-page/events-event-dashboard-ticket-details-ticket-type-page.component';
import {
    EventsEditTicketModalComponent
} from '@events/components/events-edit-ticket-modal/events-edit-ticket-modal.component';
import {
    EventsEditTicketModalContentComponent
} from '@events/components/events-edit-ticket-modal/events-edit-ticket-modal-content/events-edit-ticket-modal-content.component';
import {
    EventsEditEventTicketFormComponent
} from '@events/components/events-edit-event-ticket-form/events-edit-event-ticket-form.component';
import {
    EventsEventDashboardTicketDetailsMainPageComponent
} from '@events/pages/events-event-dashboard-ticket-details-main-page/events-event-dashboard-ticket-details-main-page.component';
import {
    EventsEventDashboardTicketDetailsTicketSalesPageComponent
} from '@events/pages/events-event-dashboard-ticket-details-ticket-sales-page/events-event-dashboard-ticket-details-ticket-sales-page.component';
import {
    EventsEventDashboardGuestDetailsMainPageComponent
} from '@events/pages/events-event-dashboard-guest-details-main-page/events-event-dashboard-guest-details-main-page.component';
import {
    EventsEventDashboardGuestDetailsRefundRequestsPageComponent
} from '@events/pages/events-event-dashboard-guest-details-refund-requests-page/events-event-dashboard-guest-details-refund-requests-page.component';
import {
    EventsEventDashboardGuestDetailsAllGuestsPageComponent
} from '@events/pages/events-event-dashboard-guest-details-all-guests-page/events-event-dashboard-guest-details-all-guests-page.component';
import {
    EventsEventDashboardManageGuestListAllGuestsComponent
} from '@events/pages/events-event-dashboard-manage-guest-list-all-guests/events-event-dashboard-manage-guest-list-all-guests.component';
import {
    EventsEventDashboardManageGuestListMainPageComponent
} from '@events/pages/events-event-dashboard-manage-guest-list-main-page/events-event-dashboard-manage-guest-list-main-page.component';
import {EventShareEventPageComponent} from '@events/pages/event-share-event-page/event-share-event-page.component';
import {ClipboardModule} from '@node-modules/ngx-clipboard';
import {
    EventsEventDetailsPageComponent
} from '@events/pages/events-event-details-page/events-event-details-page.component';
import {
    EventsViewUserProfileDetailsModalComponent, EventsViewUserProfileDetailsModalNoTemplateComponent
} from '@events/components/events-view-user-profile-details-modal/events-view-user-profile-details-modal.component';
import {
    EventsViewUserProfileDetailsModalContentComponent
} from '@events/components/events-view-user-profile-details-modal/events-view-user-profile-details-modal-content/events-view-user-profile-details-modal-content.component';
import {EventsEditEventPageComponent} from '@events/pages/events-edit-event-page/events-edit-event-page.component';
import {
    EventsEditEventFormComponent, EventsEditEventFormNoTemplateComponent
} from '@events/components/events-edit-event-form/events-edit-event-form.component';
import {
    EventsCreatePaymentIntentComponent
} from './components/events-create-payment-intent/events-create-payment-intent.component';
import {
    EventsCreateOrderOrderItemOrderPaymentForEventWithIntentComponent
} from './components/events-create-order-order-item-order-payment-for-event-with-intent/events-create-order-order-item-order-payment-for-event-with-intent.component';
import {
    EventsCreatePaidUserEventTicketFromOrderPaymentWithIntentComponent
} from './components/events-create-paid-user-event-ticket-from-order-payment-with-intent/events-create-paid-user-event-ticket-from-order-payment-with-intent.component';
import {
    EventsInviteToEventInShareEventModalContentComponent
} from '@events/components/events-invite-to-event-in-share-event-modal/events-invite-to-event-in-share-event-modal-content/events-invite-to-event-in-share-event-modal-content.component';
import {
    EventsInviteToEventInShareEventModalComponent
} from '@events/components/events-invite-to-event-in-share-event-modal/events-invite-to-event-in-share-event-modal.component';
import {
    EventsInviteToEventInShareEventSwiperComponent
} from '@events/components/events-invite-to-event-in-share-event-swiper/events-invite-to-event-in-share-event-swiper.component';
import {BlastsModule} from '../blasts/blasts.module';
import {
    EventsSelectBlastListForShareEventComponent
} from '@events/components/events-select-blast-list-for-share-event/events-select-blast-list-for-share-event.component';
import {
    EventsInvitePastAttendeesInShareEventModalComponent
} from '@events/components/events-invite-past-attendees-in-share-event-modal/events-invite-past-attendees-in-share-event-modal.component';
import {
    EventsInvitePastAttendeesInShareEventModalContentComponent
} from '@events/components/events-invite-past-attendees-in-share-event-modal/events-invite-past-attendees-in-share-event-modal-content/events-invite-past-attendees-in-share-event-modal-content.component';
import {
    EventsInvitePastAttendeesInShareEventSwiperComponent
} from '@events/components/events-invite-past-attendees-in-share-event-swiper/events-invite-past-attendees-in-share-event-swiper.component';
import {
    EventPastAttendeesGetEventAttendeesOfUserAccountScrolling, EventsPastAttendeesGetEventAttendeesOfUserAccountComponent
} from '@events/components/events-past-attendees-get-event-attendees-of-user-account/events-past-attendees-get-event-attendees-of-user-account.component';
// import { EventDashboardMainPage1Component } from './pages/event-dashboard-main-page1/event-dashboard-main-page1.component';
import {
    EventsGetAllEventsFilterPopOverComponent
} from '@events/components/events-get-all-events-filter-pop-over/events-get-all-events-filter-pop-over.component';
import {
    EventsGetAllEventsFilterPopOverContentComponent
} from '@events/components/events-get-all-events-filter-pop-over/events-get-all-events-filter-pop-over-content/events-get-all-events-filter-pop-over-content.component';
import {
    EventsUploadUserContactsFromCsvSwiperModalComponent, EventsUploadUserContactsFromCsvSwiperModalNoTemplateComponent
} from '@events/components/events-upload-user-contacts-from-csv-swiper-modal/events-upload-user-contacts-from-csv-swiper-modal.component';
import {
    EventsUploadUserContactsFromCsvSwiperComponent
} from '@events/components/events-upload-user-contacts-from-csv-swiper/events-upload-user-contacts-from-csv-swiper.component';
import {
    EventsUploadUserContactsFromCsvSwiperModalContentComponent
} from '@events/components/events-upload-user-contacts-from-csv-swiper-modal/events-upload-user-contacts-from-csv-swiper-modal-content/events-upload-user-contacts-from-csv-swiper-modal-content.component';
import { EventsEventStartDateFormComponent } from './components/events-event-start-date-form/events-event-start-date-form.component';
import { EventsEventDashboardManageGuestListCheckedinComponent } from './pages/events-event-dashboard-manage-guest-list-checkedin/events-event-dashboard-manage-guest-list-checkedin.component';
import { EventsEventDashboardManageGuestListInwaitlistComponent } from './pages/events-event-dashboard-manage-guest-list-inwaitlist/events-event-dashboard-manage-guest-list-inwaitlist.component';


@NgModule({
    declarations: [


        EventDetailsPageComponent,
        EventsHomePageComponent,
        EventsGetAllEventsInfosComponent,
        EventsGetEventInfoComponent,
        EventsAddTicketsBeforePageComponent,
        EventsAddTicketsAfterPageComponent,
        EventsMainPageComponent,
        EventsEventMainBlankPageComponent,
        EventsRsvpFreeModalComponent,
        EventsRsvpFreeModalContentComponent,
        // EventsEventDetailsTicketTypeModalComponent,
        // EventsEventDetailsTicketTypeModalContentComponent,
        EventsGetAllEventsInfosNoTemplateComponent,
        EventsMyEventsPageComponent,
        EventsMyInvitedEventsPageComponent,
        EventsMyInvitedEventsPastEventsPageComponent,
        EventsMyInvitedEventsUpcomingEventsComponent,
        EventsGetAllEventsFilterComponent,
        EventsGetAllEventsFilterNoTemplateComponent,
        EventsGetEventInviteAndUserEventInfosByUserAccountComponent,
        EventsGetEventInviteAndUserEventInfosByUserAccountNoTemplateComponent,
        EventsGetEventInviteAndUserEventInfosByUserAccountScrollingComponent,
        EventsMyCreatedEventsPageComponent,
        EventsMyCreatedEventsUpcomingEventsPageComponent,
        EventsMyCreatedEventsPastEventsPageComponent,
        EventsMyDraftEventsPageComponent,
        EventsGetEventsByCreatedByComponent,
        EventsGetEventsByCreatedByDraftEventsScrollingComponent,
        EventsGetEventsByCreatedByNoTemplateComponent,
        EventsGetEventsByCreatedByScrollingComponent,
        EventsGetAllEventsComponent,
        EventsGetAllEventsNoTemplateComponent,
        EventsGetAllEventsScrollingComponent,
        EventsGetAllEventsPastEventsScrollingComponent,
        EventsGetEventAttendeesOfUserAccountComponent,
        EventsGetEventAttendeesOfUserAccountNoTemplateComponent,
        EventsGetEventAttendeesOfUserAccountScrollingComponent,
        EventsGetUserEventTicketsByUserAccountComponent,
        EventsGetUserEventTicketsByUserAccountNoTemplateComponent,
        EventsGetUserEventTicketsByUserAccountScrollingComponent,
        EventsCreateEventFormComponent,
        EventsCreateEventEventCreationPageComponent,
        EventsSearchEventInfosComponent,
        EventsSearchEventInfosNoTemplateComponent,
        EventsSearchEventInfosScrollingComponent,
        EventDashboardMainPageComponent,
        EventsGetOrderItemsCountByEventTicketComponent,
        EventsGetOrderItemsCountByEventTicketNoTemplateComponent,
        EventsGetUserEventTicketsCountByEventComponent,
        EventsGetUserEventTicketsCountByEventNoTemplateComponent,
        EventsGetUserEventTicketsByEventComponent,
        EventsGetUserEventTicketsByEventNoTemplateComponent,
        EventsGetEventTicketsSaleSumByEventComponent,
        EventsGetEventTicketsSaleSumByEventNoTemplateComponent,
        EventsEventDashboardCreatorDashboardPageComponent,
        EventsAddCoHostStatusComponent,
        EventsAddCoHostStatusNoTemplateComponent,
        EventsBottomNavFooterComponent,
        EventsCheckInEventAttendeeComponent,
        EventsCheckInEventAttendeeNoTemplateComponent,
        EventsCoHostStatusFormComponent,
        EventsCreateEventCreatePaidTicketFormComponent,
        EventsCreateEventCreatePaidTicketModalComponent,
        EventsCreateEventCreatePaidTicketModalContentComponent,
        EventsCreateEventFreeTicketFormComponent,
        EventsCreateEventFreeTicketModalComponent,
        EventsCreateEventFreeTicketModalContentComponent,
        EventsCreateEventInvitesByEventAndUserAccountsComponent,
        EventsCreateEventPaidTicketFormComponent,
        EventsCreateEventPromoCodeComponent,
        EventsCreateEventPromoCodeNoTemplateComponent,
        EventsCreateEventTicketAndEventTicketSaleItemFormComponent,
        EventsRemoveCoHostStatusComponent,
        EventsRemoveCoHostStatusNoTemplateComponent,
        EventsEventDashboardEventDetailsPageComponent,
        EventsSetEventMetaDataComponent,
        EventsSetEventMetaDataNoTemplateComponent,
        EventsPublishEventComponent,
        EventsPublishEventNoTemplateComponent,
        EventsEventDashboardTicketDetailsPromocodesPageComponent,
        EventsGetEventPromoCodesByEventComponent,
        EventsGetEventPromoCodesByEventNoTemplateComponent,
        EventsEventDashboardPromocodesCreateCodeModalComponent,
        EventsEventDashboardPromocodesCreateCodeModalContentComponent,
        EventsEventDashboardPromocodesCreateCodeFormComponent,
        EventsEventPromoCodeTypeToHumanReadablePipe,
        EventsEventDashboardTicketDetailsTicketTypePageComponent,
        EventsEditTicketModalComponent,
        EventsEditTicketModalContentComponent,
        EventsEditEventTicketFormComponent,
        EventsEventDashboardTicketDetailsMainPageComponent,
        EventsEventDashboardTicketDetailsTicketSalesPageComponent,
        EventsEventDashboardGuestDetailsMainPageComponent,
        EventsEventDashboardGuestDetailsRefundRequestsPageComponent,
        EventsEventDashboardGuestDetailsAllGuestsPageComponent,
        EventsEventDashboardManageGuestListAllGuestsComponent,
        EventsEventDashboardManageGuestListMainPageComponent,
        EventShareEventPageComponent,
        EventsEventDetailsPageComponent,
        EventsViewUserProfileDetailsModalComponent,
        EventsViewUserProfileDetailsModalNoTemplateComponent,
        EventsViewUserProfileDetailsModalContentComponent,
        EventsInvitationPolicyToHumanReadablePipe,
        EventsEditEventPageComponent,
        EventsEditEventFormComponent,
        EventsEditEventFormNoTemplateComponent,
        EventsCreatePaymentIntentComponent,
        EventsCreateOrderOrderItemOrderPaymentForEventWithIntentComponent,
        EventsCreatePaidUserEventTicketFromOrderPaymentWithIntentComponent,
        EventsInviteToEventInShareEventModalComponent,
        EventsInviteToEventInShareEventModalContentComponent,
        EventsInviteToEventInShareEventSwiperComponent,
        EventsSelectBlastListForShareEventComponent,
        EventsInviteToEventInShareEventModalComponent,
        EventsInviteToEventInShareEventModalContentComponent,
        EventsInviteToEventInShareEventSwiperComponent,
        EventsSelectBlastListForShareEventComponent,
        EventsCreatePaymentIntentComponent,
        EventsCreateOrderOrderItemOrderPaymentForEventWithIntentComponent,
        EventsCreatePaidUserEventTicketFromOrderPaymentWithIntentComponent,
        EventsInvitePastAttendeesInShareEventModalComponent,
        EventsInvitePastAttendeesInShareEventModalContentComponent,
        EventsInvitePastAttendeesInShareEventSwiperComponent,
        EventPastAttendeesGetEventAttendeesOfUserAccountScrolling,
        EventsPastAttendeesGetEventAttendeesOfUserAccountComponent,
        EventsGetAllEventsFilterPopOverComponent,
        EventsGetAllEventsFilterPopOverContentComponent,
        EventsUploadUserContactsFromCsvSwiperModalComponent,
        EventsUploadUserContactsFromCsvSwiperModalNoTemplateComponent,
        EventsUploadUserContactsFromCsvSwiperComponent,
        EventsUploadUserContactsFromCsvSwiperModalContentComponent,
        EventsEventStartDateFormComponent,
        EventsEventDashboardManageGuestListCheckedinComponent,
        EventsEventDashboardManageGuestListInwaitlistComponent
    ],
    imports: [
        EventsCommonModule,
        CoreModule,
        RouterModule.forChild(EVENTS_ROUTES),
        UserProfilesModule,
        SearchModule,
        ClipboardModule,
        Angular2PromiseButtonModule,
        BlastsModule
    ],
    exports: [
        EventsGetAllEventsInfosNoTemplateComponent,
        // EventsEventDetailsTicketTypeModalComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})

export class EventsModule {
}
