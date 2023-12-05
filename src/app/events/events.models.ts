import {JsonObject, JsonProperty} from 'json2typescript';
import {Core, Events, Users} from '@core/core.models';
import {DateTime} from 'luxon';
import {ModelsConverters} from '@core/models.converters';

export class CsvUserContactFieldMapping {
    @JsonProperty("email_id", String, true)
    email_id: string = undefined;
    @JsonProperty("name", String, true)
    name: string = undefined;
    @JsonProperty("whats_app_number", String, true)
    whats_app_number: string = undefined;
    @JsonProperty("phone_number", String, true)
    phone_number: string = undefined;
}

export namespace EventsRequests {
    import Entity = Core.Entity;
    export namespace GetAllEvents {
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;
        import Event = Events.Event;
        import DateTimeWithoutZoneConverter = ModelsConverters.DateTimeWithoutZoneConverter;

        @JsonObject('GetAllEventsRequest')
        export class Request extends SortedPaginatedRequest {
            @JsonProperty('event_category', String, true)
            event_category: string = undefined;
            @JsonProperty('start_time', DateTimeWithoutZoneConverter, true)
            start_time: DateTime = undefined;
            @JsonProperty('end_time', DateTimeWithoutZoneConverter, true)
            end_time: DateTime = undefined;
            @JsonProperty('filter_event_title', String, true)
            filter_event_title: string = undefined;
        }

        @JsonObject('GetAllEventsResponse')
        export class Response extends Event {
        }
    }

    export namespace GetEvent {
        import Event = Events.Event;


        @JsonObject('GetEventRequest')
        export class Request {
            @JsonProperty('event', String, true)
            event_id: string = undefined;

        }

        @JsonObject('GetEventResponse')
        export class Response extends Event {

        }
    }

    export namespace GetEventInvitesByEvent {

        import EventInvite = Events.EventInvite;
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;

        @JsonObject('GetEventInvitesByEventRequest')
        export class Request extends SortedPaginatedRequest {
            @JsonProperty('event', String, true)
            event_id: string = undefined;
        }

        @JsonObject('GetEventInvitesByEventResponse')
        export class Response extends EventInvite {

        }
    }

    export namespace GetEventInvitesByUserAccount {
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;
        import EventInvite = Events.EventInvite;

        @JsonObject('GetEventInvitesByUserAccountRequest')
        export class Request extends SortedPaginatedRequest {
            @JsonProperty('user_account', String, true)
            user_account: string = undefined;
        }

        @JsonObject('GetEventInvitesByUserAccountResponse')
        export class Response extends EventInvite {

        }
    }

    export namespace GetEventLocationsByEvent {

        import EventLocation = Events.EventLocation;
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;

        @JsonObject('GetEventLocationByEventRequest')
        export class Request extends SortedPaginatedRequest {
            @JsonProperty('event', String, true)
            event: string = undefined;
        }

        @JsonObject('GetEventLocationByEventResponse')
        export class Response extends EventLocation {

        }
    }

    @JsonObject('GetEventsFilterRequest')
    export class GetEventsFilterRequest extends Entity {
        @JsonProperty('event_category', String, true)
        event_category: string = undefined;
    }

    export namespace GetAllEventInfos {

        import SortedPaginatedRequest = Core.SortedPaginatedRequest;
        import EventInfo = Events.EventInfo;


        @JsonObject('GetAllEventInfosRequest')
        export class Request extends SortedPaginatedRequest {
        }

        @JsonObject('GetAllEventInfosResponse')
        export class Response extends EventInfo {
        }

    }

    export namespace GetAllEventCategories {

        import SortedPaginatedRequest = Core.SortedPaginatedRequest;
        import EventInfo = Events.EventInfo;


        @JsonObject('GetAllEventCategoriesRequest')
        export class Request extends SortedPaginatedRequest {
        }

        @JsonObject('GetAllEventCategoriesResponse')
        export class Response extends EventInfo {
        }

    }

    export namespace CreateEventAttendeeForFreeEventTicketAndUserAccount {
        // import EventInfo = Events.EventInfo;
        import Event = Events.Event;

        @JsonObject('CreateEventAttendeeForFreeEventTicketAndUserAccountRequest')
        export class Request {
            @JsonProperty('event_ticket', String, true)
            event_ticket: string = undefined;
        }

        @JsonObject('CreateEventAttendeeForFreeEventTicketAndUserAccountResponse')
        export class Response extends Event {
        }
    }

    export namespace GetEventInfo {
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;
        import EventInfo = Events.EventInfo;

        @JsonObject('GetEventInfoRequest')
        export class Request extends SortedPaginatedRequest {
            @JsonProperty('event', String, true)
            event_id: string = undefined;
        }

        @JsonObject('GetEventInfoResponse')
        export class Response extends EventInfo {
        }
    }

    export namespace GetEventTicketsByEvent {
        import EventTicket = Events.EventTicket;
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;

        @JsonObject('GetEventTicketsByEventRequest')
        export class Request extends SortedPaginatedRequest {
            @JsonProperty('event', String, true)
            event_id: string = undefined;
        }

        @JsonObject('GetEventTicketsByEventResponse')
        export class Response extends EventTicket {
        }
    }

    export namespace GetEventsByCreatedBy {
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;
        import Event = Events.Event;
        import DateTimeWithoutZoneConverter = ModelsConverters.DateTimeWithoutZoneConverter;

        @JsonObject('GetEventsByCreatedByRequest')
        export class Request extends SortedPaginatedRequest {
            @JsonProperty('status', String, true)
            status: string = undefined;
            @JsonProperty('startTime', DateTimeWithoutZoneConverter, true)
            start_time: DateTime = undefined;
            @JsonProperty('endTime', DateTimeWithoutZoneConverter, true)
            end_time: DateTime = undefined;
        }

        @JsonObject('GetEventsByCreatedByResponse')
        export class Response extends Event {
        }
    }

    export namespace GetEventAttendeesCountByUserAccount {
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;
        import Event = Events.Event;

        @JsonObject('GetEventAttendeesCountByUserAccountRequest')
        export class Request extends SortedPaginatedRequest {
        }

        @JsonObject('GetEventAttendeesCountByUserAccountResponse')
        export class Response extends Event {
        }
    }

    export namespace GetEventAttendeesByEvent {

        import EventAttendee = Events.EventAttendee;
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;

        @JsonObject('GetAllEventAttendeesRequest')
        export class Request extends SortedPaginatedRequest {
            @JsonProperty('event', String, true)
            event_id: string = undefined;
        }

        @JsonObject('GetAllEventAttendeesResponse')
        export class Response extends EventAttendee {
        }
    }

    export namespace GetEventAttendees {

        import EventAttendee = Events.EventAttendee;

        @JsonObject('GetEventAttendeesRequest')
        export class Request {
            @JsonProperty('event_attendee_id', String, true)
            event_attendee_id: string = undefined;
        }

        @JsonObject('GetEventAttendeesResponse')
        export class Response extends EventAttendee {
        }
    }

    export namespace GetEventAttendeesOfUserAccount {

        import SortedPaginatedRequest = Core.SortedPaginatedRequest;
        import EventInvite = Events.EventInvite;

        @JsonObject('GetEventAttendeesOfUserAccountRequest')
        export class Request extends SortedPaginatedRequest {
            @JsonProperty('user_account', String, true)
            user_account: string = undefined;
        }

        @JsonObject('GetEventAttendeesOfUserAccountResponse')
        export class Response extends EventInvite {
        }
    }

    export namespace CreateEventTicket {


        import DateTimeConverter = ModelsConverters.DateTimeConverter;

        @JsonObject('CreateEventTicketRequest')
        export class Request {
            @JsonProperty('available_quantity', Number, true)
            available_quantity: number = undefined;
            @JsonProperty('available_ticket_quantity_status', String, true)
            available_ticket_quantity_status: string = undefined;
            @JsonProperty('event', String, true)
            event: string = undefined;
            @JsonProperty('sale_end_time', DateTimeConverter, true)
            sale_end_time: DateTime = undefined;
            @JsonProperty('sale_start_time', DateTimeConverter, true)
            sale_start_time: DateTime = undefined;
            @JsonProperty('sale_end_date', DateTimeConverter, true)
            sale_end_date: DateTime = undefined;
            @JsonProperty('sale_start_date', DateTimeConverter, true)
            sale_start_date: DateTime = undefined;
            @JsonProperty('status', String, true)
            status: string = undefined;
            @JsonProperty('ticket_name', String, true)
            ticket_name: string = undefined;
            @JsonProperty('ticket_description', String, true)
            ticket_description: string = undefined;
            @JsonProperty('ticket_type', String, true)
            ticket_type: string = undefined;
            @JsonProperty('total_quantity', Number, true)
            total_quantity: number = undefined;
        }

        @JsonObject('CreateEventTicketResponse')
        export class Response {
        }
    }

    export namespace CreateEventTicketAndEventTicketSaleItem {

        import DateTimeConverter = ModelsConverters.DateTimeConverter;
        import EventTicketInfo = Events.EventTicketInfo;

        @JsonObject('createEventTicketAndEventTicketSaleItemRequest')
        export class Request {
            @JsonProperty('available_quantity', Number, true)
            available_quantity: number = undefined;
            @JsonProperty('available_ticket_quantity_status', String, true)
            available_ticket_quantity_status: string = undefined;
            @JsonProperty('event', String, true)
            event: string = undefined;
            @JsonProperty('sale_end_time', DateTimeConverter, true)
            sale_end_time: DateTime = undefined;
            @JsonProperty('sale_start_time', DateTimeConverter, true)
            sale_start_time: DateTime = undefined;
            @JsonProperty('sale_end_date', DateTimeConverter, true)
            sale_end_date: DateTime = undefined;
            @JsonProperty('sale_start_date', DateTimeConverter, true)
            sale_start_date: DateTime = undefined;
            @JsonProperty('item_actual_price', Number, true)
            item_actual_price: number = undefined;
            @JsonProperty('item_current_price', Number, true)
            item_current_price: number = undefined;
            @JsonProperty('status', String, true)
            status: string = undefined;
            @JsonProperty('ticket_name', String, true)
            ticket_name: string = undefined;
            @JsonProperty('ticket_description', String, true)
            ticket_description: string = undefined;
            @JsonProperty('ticket_type', String, true)
            ticket_type: string = undefined;
            @JsonProperty('total_quantity', Number, true)
            total_quantity: number = undefined;
        }

        @JsonObject('createEventTicketAndEventTicketSaleItemResponse')
        export class Response extends EventTicketInfo {
        }
    }

    export namespace GetEventPromoCodesByEvent {

        import SortedPaginatedRequest = Core.SortedPaginatedRequest;
        import EventPromoCode = Events.EventPromoCode;

        @JsonObject('GetEventPromoCodesByEventRequest')
        export class Request extends SortedPaginatedRequest {
            @JsonProperty('event', String, true)
            event: string = undefined;
        }

        @JsonObject('GetEventPromoCodesByEventResponse')
        export class Response extends EventPromoCode {
        }
    }

    export namespace CreateEvent {

        import StartEndTimeRequest = Core.StartEndTimeRequest;

        @JsonObject("LocationRequest")
        export class LocationRequest extends Entity {
            @JsonProperty("address", String, true)
            address: string = undefined;
            @JsonProperty("google_maps_response", String, true)
            google_maps_response: string = undefined;
            @JsonProperty("latitude", Number, true)
            latitude: number = undefined;
            @JsonProperty("longitude", Number, true)
            longitude: number = undefined;
            @JsonProperty("url", String, true)
            url: string = undefined;
            @JsonProperty("vicinity", String, true)
            vicinity: string = undefined;
            @JsonProperty("place_id", String, true)
            place_id: string = undefined;
            @JsonProperty("location", LocationRequest, true)
            location: LocationRequest = undefined;
        }

        @JsonObject('CreateEventRequest')
        export class Request extends StartEndTimeRequest {
            @JsonProperty('event_title', String, true)
            event_title: string = undefined;
            @JsonProperty('organizer_or_host_name', String, true)
            organizer_or_host_name: string = undefined;
            @JsonProperty('event_description', String, true)
            event_description: string = undefined;
            @JsonProperty('invitation_policy', String, true)
            invitation_policy: string = undefined;
            @JsonProperty('event_category', String, true)
            event_category: string = undefined;
            @JsonProperty('guest_list_visibility', String, true)
            guest_list_visibility: string = undefined;
            @JsonProperty('location_type', String, true)
            location_type: string = undefined;
            @JsonProperty('location', LocationRequest, true)
            location: LocationRequest = undefined;
        }

        @JsonObject('CreateEventResponse')
        export class Response {

        }
    }

    export namespace GetOrderItemsCountByEventTicket {



        @JsonObject('GetOrderItemsCountByEventTicketRequest')
        export class Request {
            @JsonProperty('event_ticket', String, true)
            event_ticket: string = undefined;
        }

        @JsonObject('GetOrderItemsCountByEventTicketResponse')
        export class Response {
        }
    }

    export namespace GetUserEventTicketsCountByEvent {


        @JsonObject('getUserEventTicketsCountByEventRequest')
        export class Request {
            @JsonProperty('event_id', String, true)
            event_id: string = undefined;
        }

        @JsonObject('getUserEventTicketsCountByEventResponse')
        export class Response {
        }
    }


    export namespace UpdateEvent {

        import StartEndTimeRequest = Core.StartEndTimeRequest;

        @JsonObject("LocationRequest")
        export class LocationRequest extends Entity {
            @JsonProperty("address", String, true)
            address: string = undefined;
            @JsonProperty("google_maps_response", String, true)
            google_maps_response: string = undefined;
            @JsonProperty("latitude", Number, true)
            latitude: number = undefined;
            @JsonProperty("longitude", Number, true)
            longitude: number = undefined;
            @JsonProperty("url", String, true)
            url: string = undefined;
            @JsonProperty("vicinity", String, true)
            vicinity: string = undefined;
            @JsonProperty("place_id", String, true)
            place_id: string = undefined;
            @JsonProperty("location", LocationRequest, true)
            location: LocationRequest = undefined;
        }

        @JsonObject('UpdateEventRequest')
        export class Request extends StartEndTimeRequest {
            @JsonProperty('event_id', String, true)
            event_id: string = undefined;
            @JsonProperty('event_title', String, true)
            event_title: string = undefined;
            @JsonProperty('organizer_or_host_name', String, true)
            organizer_or_host_name: string = undefined;
            @JsonProperty('event_description', String, true)
            event_description: string = undefined;
            @JsonProperty('invitation_policy', String, true)
            invitation_policy: string = undefined;
            @JsonProperty('event_category', String, true)
            event_category: string = undefined;
            @JsonProperty('guest_list_visibility', String, true)
            guest_list_visibility: string = undefined;
            @JsonProperty("location", LocationRequest, true)
            location: LocationRequest = undefined;
        }

        @JsonObject('UpdateEventResponse')
        export class Response {

        }
    }

    export namespace UpdateEventTicket {

        import StartEndTimeRequest = Core.StartEndTimeRequest;
        import DateTimeConverter = ModelsConverters.DateTimeConverter;

        @JsonObject('UpdateEventTicketRequest')
        export class Request extends StartEndTimeRequest {
            @JsonProperty('event_ticket_id', String, true)
            event_ticket_id: string = undefined;
            @JsonProperty('available_quantity', Number, true)
            available_quantity: number = undefined;
            @JsonProperty('available_ticket_quantity_status', String, true)
            available_ticket_quantity_status: string = undefined;
            @JsonProperty('event', String, true)
            event: string = undefined;
            @JsonProperty('sale_end_time', DateTimeConverter, true)
            sale_end_time: DateTime = undefined;
            @JsonProperty('sale_start_time', DateTimeConverter, true)
            sale_start_time: DateTime = undefined;
            @JsonProperty('status', String, true)
            status: string = undefined;
            @JsonProperty('ticket_name', String, true)
            ticket_name: string = undefined;
            @JsonProperty('ticket_description', String, true)
            ticket_description: string = undefined;
            @JsonProperty('ticket_type', String, true)
            ticket_type: string = undefined;
            @JsonProperty('total_quantity', Number, true)
            total_quantity: number = undefined;
        }

        @JsonObject('UpdateEventTicketResponse')
        export class Response {

        }
    }

    export namespace CreatePromoCode {
        import DateTimeConverter = ModelsConverters.DateTimeConverter;

        @JsonObject('CreatePromoCodeRequest')
        export class Request {
            @JsonProperty('available_quantity', Number, true)
            available_quantity: number = undefined;
            @JsonProperty('discount_percentage', Number, true)
            discount_percentage: number = undefined;
            @JsonProperty('end_time', DateTimeConverter, true)
            end_time: DateTime = undefined;
            @JsonProperty('flat_discount', Number, true)
            flat_discount: number = undefined;
            @JsonProperty('promo_code', String, true)
            promo_code: string = undefined;
            @JsonProperty('promo_code_name', String, true)
            promo_code_name: string = undefined;
            @JsonProperty('promo_code_type', String, true)
            promo_code_type: string = undefined;
            @JsonProperty('start_time', DateTimeConverter, true)
            start_time: DateTime = undefined;
            @JsonProperty('total_quantity', Number, true)
            total_quantity: number = undefined;

        }

        @JsonObject('CreatePromoCodeResponse')
        export class Response {

        }
    }


    export namespace CreateOrderOrderItemOrderPaymentForEvent {
        import OrderCompleteInfo = Events.OrderCompleteInfo;

        @JsonObject('CreateOrderOrderItemOrderPaymentForEventRequest')
        export class Request {
            @JsonProperty('amount', Number, true)
            amount: number = undefined;
            @JsonProperty('payment_gateway', String, true)
            payment_gateway: string = undefined;
            @JsonProperty('quantity', Number, true)
            quantity: number = undefined;
            @JsonProperty('sale_item', String, true)
            sale_item: string = undefined;
            @JsonProperty('success_url', String, true)
            success_url: string = undefined;
            @JsonProperty('cancel_url', String, true)
            cancel_url: string = undefined;
        }

        @JsonObject('CreateOrderOrderItemOrderPaymentForEventResponse')
        export class Response extends OrderCompleteInfo {

        }
    }

    export namespace CreatePaidUserEventTicketFromOrderPayment {

        import UserEventTicket = Events.UserEventTicket;

        @JsonObject('CreatePaidUserEventTicketFromOrderPaymentRequest')
        export class Request {
            @JsonProperty('event_ticket', String, true)
            event_ticket: string = undefined;
            @JsonProperty('order_payment', String, true)
            order_payment: string = undefined;
            @JsonProperty('token', String, true)
            token: string = undefined;
        }

        @JsonObject('CreatePaidUserEventTicketFromOrderPaymentResponse')
        export class Response extends UserEventTicket {

        }
    }

    export namespace CreateEventPromoCode {
        @JsonObject('CreateEventPromoCodeRequest')
        export class Request {
            @JsonProperty('event', String, true)
            event: string = undefined;
            @JsonProperty('promo_code', String, true)
            promo_code: string = undefined;
        }

        @JsonObject('CreateEventPromoCodeResponse')
        export class Response {
        }
    }

    export namespace GetEventInviteAndEventInfosByUserAccount {
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;
        import EventInviteAndEventInfo = Events.EventInviteAndEventInfo;

        @JsonObject('GetEventInviteAndEventInfosByUserAccountRequest')
        export class Request extends SortedPaginatedRequest {
            @JsonProperty('user_account', String, true)
            user_account: string = undefined;
        }

        @JsonObject('GetEventInviteAndEventInfosByUserAccountResponse')
        export class Response extends EventInviteAndEventInfo {
        }
    }


    export namespace GetEventInviteAndUserEventInfosByUserAccount {
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;
        import EventInviteAndUserEventInfo = Events.EventInviteAndUserEventInfo;
        import DateTimeWithoutZoneConverter = ModelsConverters.DateTimeWithoutZoneConverter;

        @JsonObject('GetEventInviteAndUserEventInfosByUserAccountRequest')
        export class Request extends SortedPaginatedRequest {
            @JsonProperty('user_account', String, true)
            user_account: string = undefined;
            @JsonProperty('start_time', DateTimeWithoutZoneConverter, true)
            start_time: DateTime = undefined;
            @JsonProperty('end_time', DateTimeWithoutZoneConverter, true)
            end_time: DateTime = undefined;
        }

        @JsonObject('GetEventInviteAndUserEventInfosByUserAccountResponse')
        export class Response extends EventInviteAndUserEventInfo {
        }
    }

    export namespace PublishEvent {

        @JsonObject('PublishEventRequest')
        export class Request {
            @JsonProperty('event_id', String, true)
            event: string = undefined;
        }

        @JsonObject('PublishEventResponse')
        export class Response {

        }
    }

    export namespace ShowGuestListCountVisibility {

        @JsonObject('ShowGuestListCountVisibilityRequest')
        export class Request {
            @JsonProperty('event_id', String, true)
            event: string = undefined;
        }

        @JsonObject('ShowGuestListCountVisibilityResponse')
        export class Response {

        }
    }

    export namespace RemoveGuestListCountVisibility {

        @JsonObject('RemoveGuestListCountVisibilityRequest')
        export class Request {
            @JsonProperty('event_id', String, true)
            event: string = undefined;
        }

        @JsonObject('RemoveGuestListCountVisibilityResponse')
        export class Response {

        }
    }

    export namespace GetUserEventInfo {

        import UserEventInfo = Events.UserEventInfo;

        @JsonObject('GetUserEventInfoRequest')
        export class Request {
            @JsonProperty('event_id', String, true)
            event_id: string = undefined;
        }

        @JsonObject('GetUserEventInfoResponse')
        export class Response extends UserEventInfo {

        }
    }

    export namespace GetUserEventTicketsByUserAccount {

        import UserEventTicket = Events.UserEventTicket;
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;

        @JsonObject('GetUserEventTicketsByUserAccountRequest')
        export class Request extends SortedPaginatedRequest {

        }

        @JsonObject('GetUserEventTicketsByUserAccountResponse')
        export class Response extends UserEventTicket {

        }
    }

    export namespace AddCoHostStatus {

        @JsonObject('AddCoHostStatusRequest')
        export class Request {
            @JsonProperty('event_attendee_id', String, true)
            event_attendee: string = undefined;
        }

        @JsonObject('AddCoHostStatusResponse')
        export class Response {

        }
    }

    export namespace RemoveCoHostStatus {

        @JsonObject('RemoveCoHostStatusRequest')
        export class Request {
            @JsonProperty('event_attendee_id', String, true)
            event_attendee: string = undefined;
        }

        @JsonObject('RemoveCoHostStatusResponse')
        export class Response {

        }
    }

    export namespace CheckInEventAttendee {

        @JsonObject('CheckInEventAttendeeRequest')
        export class Request {
            @JsonProperty('event_attendee_id', String, true)
            event_attendee: string = undefined;
        }

        @JsonObject('CheckInEventAttendeeResponse')
        export class Response {

        }
    }

    export namespace GetUserEventAttendeesByEventAndCheckInStatus {

        import EventAttendee = Events.EventAttendee;

        @JsonObject('GetUserEventAttendeesByEventAndCheckInStatusRequest')
        export class Request {
            @JsonProperty('event_attendee_id', String, true)
            event_attendee_id: string = undefined;
            @JsonProperty('check_in_status', String, true)
            check_in_status: string = undefined;
        }

        @JsonObject('GetUserEventAttendeesByEventAndCheckInStatusResponse')
        export class Response extends EventAttendee {

        }
    }

    export namespace GetUserEventTicketsByEvent {

        import UserEventTicket = Events.UserEventTicket;

        @JsonObject('GetUserEventTicketsByEventRequest')
        export class Request {
            @JsonProperty('event', String, true)
            event: string = undefined;
        }

        @JsonObject('GetUserEventTicketsByEventResponse')
        export class Response extends UserEventTicket {

        }
    }

    export namespace GetEventTicketsSaleSumByEvent {



        @JsonObject('GetEventTicketsSaleSumByEventRequest')
        export class Request {
            @JsonProperty('event', String, true)
            event: string = undefined;
        }

        @JsonObject('GetEventTicketsSaleSumByEventResponse')
        export class Response {
        }
    }

    export namespace GetEventTicketInfoByEvent {
        import EventTicketInfo = Events.EventTicketInfo;

        @JsonObject('GetEventTicketInfoByEventRequest')
        export class Request {
            @JsonProperty('event', String, true)
            event: string = undefined;
        }

        @JsonObject('GetEventTicketInfoByEventResponse')
        export class Response extends EventTicketInfo {
        }
    }

    export namespace CreateEventInvitesByEventAndUserAccounts {


        @JsonObject('CreateEventInvitesByEventAndUserAccountsRequest')
        export class Request {
            @JsonProperty('event_id', String, true)
            event_id: string = undefined;
            @JsonProperty('user_accounts', [String], true)
            user_accounts: string[] = undefined;
        }

        @JsonObject('CreateEventInvitesByEventAndUserAccountsResponse')
        export class Response {
        }
    }

    export namespace GetEventTicketInfosByEvent {

        import EventTicketInfo = Events.EventTicketInfo;
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;

        @JsonObject('GetEventTicketInfosByEventRequest')
        export class Request extends SortedPaginatedRequest {
            @JsonProperty('event', String, true)
            event: string = undefined;
        }

        @JsonObject('GetEventTicketInfosByEventResponse')
        export class Response extends EventTicketInfo {

        }
    }

    export namespace CreatePaymentIntent {

        @JsonObject("CreatePaymentIntentRequest")
        export class Request {
            @JsonProperty("amount", Number, true)
            amount: number = undefined;
        }

        @JsonObject("CreatePaymentIntentResponse")
        export class Response {
            @JsonProperty("client_secret", String, true)
            client_secret: string = undefined;
        }
    }


    export namespace CreateOrderOrderItemOrderPaymentForEventWithIntent {
        import OrderCompleteInfo = Events.OrderCompleteInfo;

        @JsonObject('CreateOrderOrderItemOrderPaymentForEventRequest')
        export class Request {
            @JsonProperty('amount', Number, true)
            amount: number = undefined;
            @JsonProperty('payment_gateway', String, true)
            payment_gateway: string = undefined;
            @JsonProperty('quantity', Number, true)
            quantity: number = undefined;
            @JsonProperty('sale_item', String, true)
            sale_item: string = undefined;
            @JsonProperty('success_url', String, true)
            success_url: string = undefined;
            @JsonProperty('cancel_url', String, true)
            cancel_url: string = undefined;
        }

        @JsonObject('CreateOrderOrderItemOrderPaymentForEventResponse')
        export class Response extends OrderCompleteInfo {

        }
    }

    export namespace CreatePaidUserEventTicketFromOrderPaymentWithIntent {

        import UserEventTicket = Events.UserEventTicket;

        @JsonObject('CreatePaidUserEventTicketFromOrderPaymentRequest')
        export class Request {
            @JsonProperty('event_ticket', String, true)
            event_ticket: string = undefined;
            @JsonProperty('order_payment', String, true)
            order_payment: string = undefined;
            @JsonProperty('token', String, true)
            token: string = undefined;
        }

        @JsonObject('CreatePaidUserEventTicketFromOrderPaymentResponse')
        export class Response extends UserEventTicket {

        }
    }
}
