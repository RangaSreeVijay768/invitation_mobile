import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreModule} from '@core/core.module';
import {ImagesModule} from '@images/images.module';
import {
    EventsEventTicketsToButtonTextPipe,
    EventsEventTicketsToHumanReadablePipe,
    EventsEventTicketsTypesToMinPricePipe, EventsEventTicketsTypeToMaxPricePipe, EventsFilterEventTicketsByTicketTypePipe
} from '@events/events.pipe';
import {EventsShareEventModalComponent} from '@events/components/events-share-event-modal/events-share-event-modal.component';
import {
    EventsShareEventModalContentComponent
} from '@events/components/events-share-event-modal/events-share-event-modal-content/events-share-event-modal-content.component';
import {
    EventsEventDetailsTicketTypeModalComponent
} from '@events/components/events-event-details-ticket-type-modal/events-event-details-ticket-type-modal.component';
import {
    EventsEventDetailsTicketTypeModalContentComponent
} from '@events/components/events-event-details-ticket-type-modal/events-event-details-ticket-type-modal-content/events-event-details-ticket-type-modal-content.component';
import {
    EventsGetEventTicketsByEventComponent, EventsGetEventTicketsByEventNoTemplateComponent
} from '@events/components/events-get-event-tickets-by-event/events-get-event-tickets-by-event.component';
import {
    EventsCreateEventAttendeeForFreeEventTicketAndUserAccountComponent,
    EventsCreateEventAttendeeForFreeEventTicketAndUserAccountNoTemplateComponent
} from '@events/components/events-create-event-attendee-for-free-event-ticket-and-user-account/events-create-event-attendee-for-free-event-ticket-and-user-account.component';
import {
    EventsViewEventInviteeDetailsModalComponent
} from '@events/components/events-view-event-invitee-details-modal/events-view-event-invitee-details-modal.component';
import {
    EventsViewEventInviteeDetailsModalContentComponent
} from '@events/components/events-view-event-invitee-details-modal/events-view-event-invitee-details-modal-content/events-view-event-invitee-details-modal-content.component';
import {UserProfilesModule} from '@user-profiles/user-profiles.module';
import {
    EventsAllInvitedPeopleModalComponent
} from '@events/components/events-all-invited-people-modal/events-all-invited-people-modal.component';
import {
    EventsAllInvitedPeopleModalContentComponent
} from '@events/components/events-all-invited-people-modal/events-all-invited-people-modal-content/events-all-invited-people-modal-content.component';
import {
    EventsGetEventAttendeesByEventComponent, EventsGetEventAttendeesByEventNoTemplateComponent
} from '@events/components/events-get-event-attendees-by-event/events-get-event-attendees-by-event.component';
import {
    EventsSearchEventMemberInfosFormComponent
} from '@events/components/events-search-event-member-infos-form/events-search-event-member-infos-form.component';
import {
    EventsViewEventAttendeeDetailsModalComponent
} from '@events/components/events-view-event-attendee-details-modal/events-view-event-attendee-details-modal.component';
import {
    EventsGetEventInvitesByEventComponent, EventsGetEventInvitesByEventNoTemplateComponent
} from '@events/components/events-get-event-invites-by-event/events-get-event-invites-by-event.component';
import {
    EventsStripePaymentFormModalComponent
} from '@events/components/events-stripe-payment-form-modal/events-stripe-payment-form-modal.component';
import {
    EventsStripePaymentFormModalContentComponent
} from '@events/components/events-stripe-payment-form-modal/events-stripe-payment-form-modal-content/events-stripe-payment-form-modal-content.component';
import {
    EventsCreatePaidUserEventTicketFromOrderPaymentComponent, EventsCreatePaidUserEventTicketFromOrderPaymentNoTemplateComponent
} from '@events/components/events-create-paid-user-event-ticket-from-order-payment/events-create-paid-user-event-ticket-from-order-payment.component';
import {EventsStripePaymentFormComponent} from '@events/components/events-stripe-payment-form/events-stripe-payment-form.component';
import {
    EventsGetEventTicketInfosByEventComponent, EventsGetEventTicketInfosByEventNoTemplateComponent
} from '@events/components/events-get-event-ticket-infos-by-event/events-get-event-ticket-infos-by-event.component';
import {
    EventsCreateOrderItemPaymentForEventComponent, EventsCreateOrderItemPaymentForEventNoTemplateComponent
} from '@events/components/events-create-order-item-payment-for-event/events-create-order-item-payment-for-event.component';
import { EventsPresentPaymentSheetComponent } from './components/events-present-payment-sheet/events-present-payment-sheet.component';
import {
    EventsCreatePaymentIntentNoTemplateComponent
} from "@events/components/events-create-payment-intent/events-create-payment-intent.component";
import {Angular2PromiseButtonModule} from "@core/external/angular2-promise-buttons";
import {
    EventsCreateOrderOrderItemOrderPaymentForEventWithIntentNoTemplateComponent
} from "@events/components/events-create-order-order-item-order-payment-for-event-with-intent/events-create-order-order-item-order-payment-for-event-with-intent.component";
import {
    EventsCreatePaidUserEventTicketFromOrderPaymentWithIntentNoTemplateComponent
} from "@events/components/events-create-paid-user-event-ticket-from-order-payment-with-intent/events-create-paid-user-event-ticket-from-order-payment-with-intent.component";
import {ClipboardModule} from '@node-modules/ngx-clipboard';


@NgModule({
    declarations: [
        EventsFilterEventTicketsByTicketTypePipe,
        EventsEventTicketsTypesToMinPricePipe,
        EventsEventTicketsTypeToMaxPricePipe,
        EventsEventTicketsToHumanReadablePipe,
        EventsFilterEventTicketsByTicketTypePipe,
        EventsEventTicketsTypesToMinPricePipe,
        EventsEventTicketsTypeToMaxPricePipe,
        EventsEventTicketsToHumanReadablePipe,
        EventsEventTicketsToButtonTextPipe,
        EventsShareEventModalComponent,
        EventsShareEventModalContentComponent,
        EventsEventDetailsTicketTypeModalComponent,
        EventsEventDetailsTicketTypeModalContentComponent,
        EventsGetEventTicketsByEventComponent,
        EventsGetEventTicketsByEventNoTemplateComponent,
        EventsCreateEventAttendeeForFreeEventTicketAndUserAccountComponent,
        EventsCreateEventAttendeeForFreeEventTicketAndUserAccountNoTemplateComponent,
        EventsViewEventInviteeDetailsModalComponent,
        EventsViewEventInviteeDetailsModalContentComponent,
        EventsAllInvitedPeopleModalComponent,
        EventsAllInvitedPeopleModalContentComponent,
        EventsGetEventAttendeesByEventComponent,
        EventsGetEventAttendeesByEventNoTemplateComponent,
        EventsSearchEventMemberInfosFormComponent,
        EventsViewEventAttendeeDetailsModalComponent,
        EventsGetEventInvitesByEventComponent,
        EventsGetEventInvitesByEventNoTemplateComponent,
        EventsStripePaymentFormModalComponent,
        EventsStripePaymentFormModalContentComponent,
        EventsCreatePaidUserEventTicketFromOrderPaymentComponent,
        EventsCreatePaidUserEventTicketFromOrderPaymentNoTemplateComponent,
        EventsStripePaymentFormComponent,
        EventsGetEventTicketInfosByEventComponent,
        EventsGetEventTicketInfosByEventNoTemplateComponent,
        EventsCreateOrderItemPaymentForEventComponent,
        EventsCreateOrderItemPaymentForEventNoTemplateComponent,
        EventsPresentPaymentSheetComponent,
        EventsCreatePaymentIntentNoTemplateComponent,
        EventsCreateOrderOrderItemOrderPaymentForEventWithIntentNoTemplateComponent,
        EventsCreatePaidUserEventTicketFromOrderPaymentWithIntentNoTemplateComponent


    ],
    imports: [
        CoreModule,
        ImagesModule,
        UserProfilesModule,
        Angular2PromiseButtonModule,
        ClipboardModule
    ],
    exports: [
        CoreModule,
        ImagesModule,
        EventsFilterEventTicketsByTicketTypePipe,
        EventsEventTicketsTypesToMinPricePipe,
        EventsEventTicketsTypeToMaxPricePipe,
        EventsEventTicketsToHumanReadablePipe,
        EventsFilterEventTicketsByTicketTypePipe,
        EventsEventTicketsTypesToMinPricePipe,
        EventsEventTicketsTypeToMaxPricePipe,
        EventsEventTicketsToHumanReadablePipe,
        EventsEventTicketsToButtonTextPipe,
        EventsShareEventModalComponent,
        EventsShareEventModalContentComponent,
        EventsEventDetailsTicketTypeModalComponent,
        EventsGetEventTicketsByEventComponent,
        EventsGetEventTicketsByEventNoTemplateComponent,
        EventsCreateEventAttendeeForFreeEventTicketAndUserAccountComponent,
        EventsCreateEventAttendeeForFreeEventTicketAndUserAccountNoTemplateComponent,
        EventsViewEventInviteeDetailsModalComponent,
        EventsViewEventInviteeDetailsModalContentComponent,
        EventsAllInvitedPeopleModalComponent,
        EventsAllInvitedPeopleModalContentComponent,
        EventsGetEventAttendeesByEventComponent,
        EventsGetEventAttendeesByEventNoTemplateComponent,
        EventsSearchEventMemberInfosFormComponent,
        EventsViewEventAttendeeDetailsModalComponent,
        EventsGetEventInvitesByEventComponent,
        EventsGetEventInvitesByEventNoTemplateComponent,
        EventsStripePaymentFormModalComponent,
        EventsStripePaymentFormModalContentComponent,
        EventsCreatePaidUserEventTicketFromOrderPaymentComponent,
        EventsCreatePaidUserEventTicketFromOrderPaymentNoTemplateComponent,
        EventsStripePaymentFormComponent,
        EventsGetEventTicketInfosByEventComponent,
        EventsGetEventTicketInfosByEventNoTemplateComponent,
        EventsCreateOrderItemPaymentForEventComponent,
        EventsCreateOrderItemPaymentForEventNoTemplateComponent,
        EventsPresentPaymentSheetComponent,
        EventsCreateOrderOrderItemOrderPaymentForEventWithIntentNoTemplateComponent,
        EventsCreatePaidUserEventTicketFromOrderPaymentWithIntentNoTemplateComponent


    ]
})
export class EventsCommonModule {
}
