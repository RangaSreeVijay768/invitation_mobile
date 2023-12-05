import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {ImagesModule} from '@images/images.module';
import {UsersModule} from '@users/users.module';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {UserProfilesMainPageComponent} from './pages/user-profiles-main-page/user-profiles-main-page.component';
import {
    UserProfilesUserProfilePageComponent
} from './pages/user-profiles-user-profile-page/user-profiles-user-profile-page.component';
import {
    UserProfilesProfileEditComponent
} from './pages/user-profiles-profile-edit/user-profiles-profile-edit.component';
import {
    UserProfilesPurchaseHistoryPageComponent
} from './pages/user-profiles-purchase-history-page/user-profiles-purchase-history-page.component';
import {
    UserProfilesProfilePastGuestsComponent
} from './pages/user-profiles-profile-past-guests/user-profiles-profile-past-guests.component';
import {
    UserProfilesUserUpcomingEventsModalContentComponent
} from '@user-profiles/components/user-profiles-user-upcoming-events-modal/user-profiles-user-upcoming-events-modal-content/user-profiles-user-upcoming-events-modal-content.component';
import {
    UserProfilesUserUpcomingEventsModalComponent
} from '@user-profiles/components/user-profiles-user-upcoming-events-modal/user-profiles-user-upcoming-events-modal.component';
import {
    UserProfilesProfileEditFormComponent
} from '@user-profiles/components/user-profiles-profile-edit-form/user-profiles-profile-edit-form.component';
import {
    UserProfilesPayoutInformationFormComponent
} from '@user-profiles/components/user-profiles-payout-information-form/user-profiles-payout-information-form.component';
import {
    UserProfilesPayoutInformationComponent
} from '@user-profiles/pages/user-profiles-payout-information/user-profiles-payout-information.component';
import {BaseCoreModule} from '@core/base-core.module';
import {RouterModule} from '@angular/router';
import {USER_PROFILES_ROUTES} from '@user-profiles/user-profiles.routes';
import {
    UserProfilesBlastsMainPageComponent
} from '@user-profiles/pages/user-profiles-blasts-main-page/user-profiles-blasts-main-page.component';
import {
    UserProfilesBlastsCreateNewGroupModalComponent
} from '@user-profiles/components/user-profiles-blasts-create-new-group-modal/user-profiles-blasts-create-new-group-modal.component';
import {
    UserProfilesBlastsCreateNewGroupModalContentComponent
} from '@user-profiles/components/user-profiles-blasts-create-new-group-modal/user-profiles-blasts-create-new-group-modal-content/user-profiles-blasts-create-new-group-modal-content.component';
import {
    UserProfilesBlastsCreateBlastListFormComponent
} from '@user-profiles/components/user-profiles-blasts-create-blast-list-form/user-profiles-blasts-create-blast-list-form.component';
import {
    UserProfilesBlastsDefaultPageComponent
} from '@user-profiles/pages/user-profiles-blasts-default-page/user-profiles-blasts-default-page.component';
import {
    UserProfilesBlastDetailsPageComponent
} from '@user-profiles/pages/user-profiles-blast-details-page/user-profiles-blast-details-page.component';
import {
    UserProfilesBlastDetailsContactsPageComponent
} from '@user-profiles/pages/user-profiles-blast-details-contacts-page/user-profiles-blast-details-contacts-page.component';
import {
    UserProfilesBlastDetailsBlastsPageComponent
} from '@user-profiles/pages/user-profiles-blast-details-blasts-page/user-profiles-blast-details-blasts-page.component';
import {
    UserProfilesAddEventBlastRecipientComponent, UserProfilesAddEventBlastRecipientNoTemplateComponent
} from '@user-profiles/components/user-profiles-add-event-blast-recipient/user-profiles-add-event-blast-recipient.component';
import {
    UserProfilesBlastsAddUploadContactModalComponent
} from '@user-profiles/components/user-profiles-blasts-add-upload-contact-modal/user-profiles-blasts-add-upload-contact-modal.component';
import {
    UserProfilesBlastsAddUploadContactModalContentComponent
} from '@user-profiles/components/user-profiles-blasts-add-upload-contact-modal/user-profiles-blasts-add-upload-contact-modal-content/user-profiles-blasts-add-upload-contact-modal-content.component';
import {
    UserProfilesBlastsFilterModalComponent
} from '@user-profiles/components/user-profiles-blasts-filter-modal/user-profiles-blasts-filter-modal.component';
import {
    UserProfilesBlastsFilterModalContentComponent
} from '@user-profiles/components/user-profiles-blasts-filter-modal/user-profiles-blasts-filter-modal-content/user-profiles-blasts-filter-modal-content.component';
import {
    UserProfilesBlastsInviteContactsToEventModalComponent
} from '@user-profiles/components/user-profiles-blasts-invite-contacts-to-event-modal/user-profiles-blasts-invite-contacts-to-event-modal.component';
import {
    UserProfilesBlastsInviteContactsToEventModalContentComponent
} from '@user-profiles/components/user-profiles-blasts-invite-contacts-to-event-modal/user-profiles-blasts-invite-contacts-to-event-modal-content/user-profiles-blasts-invite-contacts-to-event-modal-content.component';
import {
    UserProfilesBlastsInviteToEventModalComponent
} from '@user-profiles/components/user-profiles-blasts-invite-to-event-modal/user-profiles-blasts-invite-to-event-modal.component';
import {
    UserProfilesBlastsInviteToEventModalContentComponent
} from '@user-profiles/components/user-profiles-blasts-invite-to-event-modal/user-profiles-blasts-invite-to-event-modal-content/user-profiles-blasts-invite-to-event-modal-content.component';
import {
    UserProfilesBlastsInviteToEventSwiperComponent
} from '@user-profiles/components/user-profiles-blasts-invite-to-event-swiper/user-profiles-blasts-invite-to-event-swiper.component';
import {
    UserProfilesBlastsInviteToEventSwiperSearchContactFormComponent
} from '@user-profiles/components/user-profiles-blasts-invite-to-event-swiper-search-contact-form/user-profiles-blasts-invite-to-event-swiper-search-contact-form.component';
import {
    UserProfilesBlastsInviteToEventSwiperSearchEventFormComponent
} from '@user-profiles/components/user-profiles-blasts-invite-to-event-swiper-search-event-form/user-profiles-blasts-invite-to-event-swiper-search-event-form.component';
import {
    UserProfilesCreateBlastItemFormComponent
} from '@user-profiles/components/user-profiles-create-blast-item-form/user-profiles-create-blast-item-form.component';
import {
    UserProfilesCreateBlastListItemComponent, UserProfilesCreateBlastListItemNoTemplateComponent
} from '@user-profiles/components/user-profiles-create-blast-list-item/user-profiles-create-blast-list-item.component';
import {
    UserProfilesCreateEventBlastComponent, UserProfilesCreateEventBlastNoTemplateComponent
} from '@user-profiles/components/user-profiles-create-event-blast/user-profiles-create-event-blast.component';
import {
    UserProfilesCreateUserFollowComponent, UserProfilesCreateUserFollowNoTemplateComponent
} from '@user-profiles/components/user-profiles-create-user-follow/user-profiles-create-user-follow.component';
import {
    UserProfilesDeleteUserFollowComponent, UserProfilesDeleteUserFollowNoTemplateComponent
} from '@user-profiles/components/user-profiles-delete-user-follow/user-profiles-delete-user-follow.component';
import {
    UserProfilesGetAllEventsComponent
} from '@user-profiles/components/user-profiles-get-all-events/user-profiles-get-all-events.component';
import {
    UserProfilesGetEventAttendessOfUserAccountComponent, UserProfilesGetEventAttendessOfUserAccountScrollingComponent
} from '@user-profiles/components/user-profiles-get-event-attendess-of-user-account/user-profiles-get-event-attendess-of-user-account.component';
import {
    UserProfilesGetEventBlastByBlastListComponent, UserProfilesGetEventBlastByBlastListNoTemplateComponent,
    UserProfilesGetEventBlastByBlastListScrollingComponent
} from '@user-profiles/components/user-profiles-get-event-blast-by-blast-list/user-profiles-get-event-blast-by-blast-list.component';
import {
    EventsGetUserEventTicketsByUserAccountScrollingNoTemplateComponent,
    UserProfilesGetUserEventTicketsByUserAccountScrollingComponent
} from '@user-profiles/components/user-profiles-get-user-event-tickets-by-user-account-scrolling/user-profiles-get-user-event-tickets-by-user-account-scrolling.component';
import {
    UserProfilesGetUserFollowByUserAccountComponent, UserProfilesGetUserFollowByUserAccountNoTemplateComponent
} from '@user-profiles/components/user-profiles-get-user-follow-by-user-account/user-profiles-get-user-follow-by-user-account.component';
import {
    UserProfilesGetUserFollowByUserAccountAndFollowerAccountComponent,
    UserProfilesGetUserFollowByUserAccountAndFollowerAccountNoTemplateComponent
} from '@user-profiles/components/user-profiles-get-user-follow-by-user-account-and-follower-account/user-profiles-get-user-follow-by-user-account-and-follower-account.component';
import {
    UserProfilesInviteToEventSliderComponent
} from '@user-profiles/components/user-profiles-invite-to-event-slider/user-profiles-invite-to-event-slider.component';
import {
    UserProfilesStartEventBlastComponent, UserProfilesStartEventBlastNoTemplateComponent
} from '@user-profiles/components/user-profiles-start-event-blast/user-profiles-start-event-blast.component';
import {
    UserProfilesUserAttendedEventsModalComponent
} from '@user-profiles/components/user-profiles-user-attended-events-modal/user-profiles-user-attended-events-modal.component';
import {
    UserProfilesUserAttendedEventsModalContentComponent
} from '@user-profiles/components/user-profiles-user-attended-events-modal/user-profiles-user-attended-events-modal-content/user-profiles-user-attended-events-modal-content.component';
import {
    UserProfilesUserFollowComponent, UserProfilesUserFollowNoTemplateComponent
} from '@user-profiles/components/user-profiles-user-follow/user-profiles-user-follow.component';
import {BlastsModule} from '../blasts/blasts.module';
import {
    BlastsGetBlastListsByUserAccountScrollingComponent
} from '../blasts/components/blasts-get-blast-lists-by-user-account/blasts-get-blast-lists-by-user-account.component';
import {
    UserProfilesGetUserFollowByFollowerAccountComponent
} from '@user-profiles/components/user-profiles-get-user-follow-by-follower-account/user-profiles-get-user-follow-by-follower-account.component';
import {
    UserProfilesBlastDetailsProfilePopOverComponent
} from './components/user-profiles-blast-details-profile-pop-over/user-profiles-blast-details-profile-pop-over.component';
import {
    UserProfilesBlastDetailsProfilePopOverContentComponent
} from './components/user-profiles-blast-details-profile-pop-over/user-profiles-blast-details-profile-pop-over-content/user-profiles-blast-details-profile-pop-over-content.component';
import {
    UserProfilesEditGroupModalComponent
} from './components/user-profiles-edit-group-modal/user-profiles-edit-group-modal.component';
import {
    UserProfilesEditGroupModalContentComponent
} from './components/user-profiles-edit-group-modal/user-profiles-edit-group-modal-content/user-profiles-edit-group-modal-content.component';
import {
    UserProfilesGetUserContactsByUserAccountComponent,
    UserProfilesGetUserContactsByUserAccountNoTemplateComponent
} from '@user-profiles/components/user-profiles-get-user-contacts-by-user-account/user-profiles-get-user-contacts-by-user-account.component';
import {
    UserProfilesCreateBlastListAndBlastListItemsByUserContactsComponent
} from '@user-profiles/components/user-profiles-create-blast-list-and-blast-list-items-by-user-contacts/user-profiles-create-blast-list-and-blast-list-items-by-user-contacts.component';
import {
    UserProfilesGetUserAccountComponent, UserProfilesGetUserAccountNoTemplateComponent
} from '@user-profiles/components/user-profiles-get-user-account/user-profiles-get-user-account.component';
import {
    UserProfilesProfileAllContactsComponent, UserProfilesProfileAllContactsScrollingComponent
} from './pages/user-profiles-profile-all-contacts/user-profiles-profile-all-contacts.component';
import {
    UserProfilesGetAllUserContactsComponent, UserProfilesGetAllUserContactsNoTemplateComponent
} from './components/user-profiles-get-all-user-contacts/user-profiles-get-all-user-contacts.component';
import {
    UserProfilesUserContactsFromCsvSwiperModalComponent
} from './components/user-profiles-user-contacts-from-csv-swiper-modal/user-profiles-user-contacts-from-csv-swiper-modal.component';
import {GetUserAccountResolver} from "@user-profiles/user-profiles.resolvers";
import {
    UserProfilesCreateUserContactModalComponent
} from '@user-profiles/components/user-profiles-create-user-contact-modal/user-profiles-create-user-contact-modal.component';
import {
    UserProfilesCreateUserContactModalContentComponent
} from '@user-profiles/components/user-profiles-create-user-contact-modal/user-profiles-create-user-contact-modal-content/user-profiles-create-user-contact-modal-content.component';
import {
    UserProfilesCreatUserContactFormComponent
} from '@user-profiles/components/user-profiles-creat-user-contact-form/user-profiles-creat-user-contact-form.component';


@NgModule({
    declarations: [
        UserProfilesUserUpcomingEventsModalComponent,
        UserProfilesMainPageComponent,
        UserProfilesUserProfilePageComponent,
        UserProfilesProfileEditComponent,
        UserProfilesPurchaseHistoryPageComponent,
        UserProfilesProfilePastGuestsComponent,
        UserProfilesUserUpcomingEventsModalContentComponent,
        UserProfilesProfileEditFormComponent,
        UserProfilesPayoutInformationFormComponent,
        UserProfilesPayoutInformationComponent,
        UserProfilesUserFollowComponent,
        UserProfilesGetUserFollowByUserAccountAndFollowerAccountComponent,
        UserProfilesCreateUserFollowComponent,
        UserProfilesDeleteUserFollowComponent,
        UserProfilesBlastsMainPageComponent,
        UserProfilesBlastsCreateNewGroupModalComponent,
        UserProfilesBlastsCreateNewGroupModalContentComponent,
        UserProfilesBlastsCreateBlastListFormComponent,
        UserProfilesBlastsDefaultPageComponent,
        UserProfilesBlastDetailsPageComponent,
        UserProfilesBlastDetailsContactsPageComponent,
        UserProfilesBlastDetailsBlastsPageComponent,
        UserProfilesAddEventBlastRecipientComponent,
        UserProfilesAddEventBlastRecipientNoTemplateComponent,
        UserProfilesBlastsAddUploadContactModalComponent,
        UserProfilesBlastsAddUploadContactModalContentComponent,
        UserProfilesBlastsFilterModalComponent,
        UserProfilesBlastsFilterModalContentComponent,
        UserProfilesBlastsInviteContactsToEventModalComponent,
        UserProfilesBlastsInviteContactsToEventModalContentComponent,
        UserProfilesBlastsInviteToEventModalComponent,
        UserProfilesBlastsInviteToEventModalContentComponent,
        UserProfilesBlastsInviteToEventSwiperComponent,
        UserProfilesBlastsInviteToEventSwiperSearchContactFormComponent,
        UserProfilesBlastsInviteToEventSwiperSearchEventFormComponent,
        UserProfilesCreateBlastItemFormComponent,
        UserProfilesCreateBlastListItemComponent,
        UserProfilesCreateBlastListItemNoTemplateComponent,
        UserProfilesCreateEventBlastComponent,
        UserProfilesCreateEventBlastNoTemplateComponent,
        UserProfilesCreateUserFollowComponent,
        UserProfilesCreateUserFollowNoTemplateComponent,
        UserProfilesDeleteUserFollowComponent,
        UserProfilesDeleteUserFollowNoTemplateComponent,
        UserProfilesGetAllEventsComponent,
        UserProfilesGetEventAttendessOfUserAccountComponent,
        UserProfilesGetEventAttendessOfUserAccountScrollingComponent,
        UserProfilesGetEventBlastByBlastListComponent,
        UserProfilesGetEventBlastByBlastListNoTemplateComponent,
        UserProfilesGetEventBlastByBlastListScrollingComponent,
        UserProfilesGetUserEventTicketsByUserAccountScrollingComponent,
        EventsGetUserEventTicketsByUserAccountScrollingNoTemplateComponent,
        UserProfilesGetUserFollowByUserAccountComponent,
        UserProfilesGetUserFollowByUserAccountNoTemplateComponent,
        UserProfilesGetUserFollowByUserAccountAndFollowerAccountComponent,
        UserProfilesGetUserFollowByUserAccountAndFollowerAccountNoTemplateComponent,
        UserProfilesInviteToEventSliderComponent,
        UserProfilesStartEventBlastComponent,
        UserProfilesStartEventBlastNoTemplateComponent,
        UserProfilesUserAttendedEventsModalComponent,
        UserProfilesUserAttendedEventsModalContentComponent,
        UserProfilesUserFollowComponent,
        UserProfilesUserFollowNoTemplateComponent,
        UserProfilesGetUserFollowByFollowerAccountComponent,
        UserProfilesBlastDetailsProfilePopOverComponent,
        UserProfilesBlastDetailsProfilePopOverContentComponent,
        UserProfilesEditGroupModalComponent,
        UserProfilesEditGroupModalContentComponent,
        UserProfilesGetUserContactsByUserAccountNoTemplateComponent,
        UserProfilesGetUserContactsByUserAccountComponent,
        UserProfilesCreateBlastListAndBlastListItemsByUserContactsComponent,
        UserProfilesCreateBlastListAndBlastListItemsByUserContactsComponent,
        UserProfilesProfileAllContactsComponent,
        UserProfilesGetAllUserContactsComponent,
        UserProfilesGetAllUserContactsNoTemplateComponent,
        UserProfilesProfileAllContactsScrollingComponent,
        UserProfilesUserContactsFromCsvSwiperModalComponent,
        UserProfilesGetUserAccountComponent,
        UserProfilesGetUserAccountNoTemplateComponent,
        UserProfilesCreateUserContactModalComponent,
        UserProfilesCreateUserContactModalContentComponent,
        UserProfilesCreatUserContactFormComponent

    ],
    imports: [
        CoreModule,
        BaseCoreModule,
        ImagesModule,
        UsersModule,
        BlastsModule,
        ClipboardModule,
        RouterModule.forChild(USER_PROFILES_ROUTES)
    ],
    exports: [
        CoreModule,
        UsersModule,
        ClipboardModule,
        UserProfilesUserFollowComponent,
        UserProfilesUserUpcomingEventsModalComponent,
        UserProfilesUserAttendedEventsModalComponent,
        UserProfilesGetUserFollowByFollowerAccountComponent,
        UserProfilesGetUserFollowByUserAccountComponent,
        UserProfilesUserFollowComponent,
        BlastsGetBlastListsByUserAccountScrollingComponent,
        UserProfilesBlastsInviteToEventSwiperSearchContactFormComponent,
        UserProfilesCreateEventBlastNoTemplateComponent,
        UserProfilesStartEventBlastComponent,
        UserProfilesBlastsFilterModalComponent,
        UserProfilesProfilePastGuestsComponent,
        UserProfilesGetEventAttendessOfUserAccountScrollingComponent,
        UserProfilesBlastsCreateNewGroupModalComponent,
        UserProfilesGetUserContactsByUserAccountNoTemplateComponent,
        UserProfilesGetUserContactsByUserAccountNoTemplateComponent,
        UserProfilesAddEventBlastRecipientNoTemplateComponent,
        UserProfilesAddEventBlastRecipientNoTemplateComponent,
        UserProfilesCreateBlastListAndBlastListItemsByUserContactsComponent,
        UserProfilesGetAllUserContactsNoTemplateComponent,

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [GetUserAccountResolver]
})

export class UserProfilesModule {
}
