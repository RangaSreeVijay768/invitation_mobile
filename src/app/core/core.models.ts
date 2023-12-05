import {Any, JsonObject, JsonProperty} from 'json2typescript';
import {ModelsConverters} from '@core/models.converters';
// import {Moment} from "moment";
import {DateTime} from 'luxon';


export namespace Core {

    import DateTimeConverter = ModelsConverters.DateTimeConverter;
    import DateConverter = ModelsConverters.DateConverter;

    export interface ModalResult {
        reason?: string;
        status: string;
        data: any;
    }

    @JsonObject()
    export class HttpError {
        @JsonProperty('status', Number)
        error_status: number = undefined;
        @JsonProperty('title', String)
        title: string = undefined;
        @JsonProperty('message', String)
        message: string = undefined;

    }

    @JsonObject('Entity')
    export class Entity {
        @JsonProperty('created_time', DateTimeConverter, true)
        created_time: DateTime = undefined;
        @JsonProperty('last_updated_time', DateTimeConverter, true)
        last_updated_time: DateTime = undefined;
    }

    @JsonObject('PaginatedRequest')
    export class PaginatedRequest {
        @JsonProperty('first', Number, true)
        first: number = undefined;
        @JsonProperty('count', Number, true)
        count: number = undefined;
        @JsonProperty('pageNumber', Number, true)
        page_number: number = undefined;
        @JsonProperty('page', Number, true)
        page: number = undefined;
    }

    @JsonObject('SortedPaginatedRequest')
    export class SortedPaginatedRequest extends PaginatedRequest {
        @JsonProperty('column_name', String, true)
        column_name: string = undefined;
        @JsonProperty('column_order', String, true)
        column_order: string = undefined;
    }

    @JsonObject('StartEndTimeRequest')
    export class StartEndTimeRequest {
        @JsonProperty('start_time', DateTimeConverter, true)
        start_time: DateTime = undefined;
        @JsonProperty('end_time', DateTimeConverter, true)
        end_time: DateTime = undefined;
    }

    export class TimeRange {
        start_time: DateTime;
        end_time: DateTime;
        duration: number;
        id: string;

        constructor(start_time: DateTime, end_time: DateTime, duration?: number) {
            this.start_time = start_time;
            this.end_time = end_time;
            this.duration = duration;
            this.id = '' + this.start_time.toUnixInteger() + '-' + this.end_time.toUnixInteger();
        }
    }


    export class SlideInfo {
        slide_name: string;
        slide_number: number;


        constructor(slide_name?: string, slide_number?: number) {
            this.slide_name = slide_name;
            this.slide_number = slide_number;
        }
    }

    @JsonObject('LocalDateAggregateSum')
    export class LocalDateAggregateSum {
        @JsonProperty('local_date', DateConverter, true)
        local_date: DateTime = undefined;
        @JsonProperty('aggregate_sum', Number, true)
        aggregate_sum: number = undefined;
    }

    @JsonObject('GroupByStringAndCount')
    export class GroupByStringAndCount {
        @JsonProperty('name', String, true)
        name: string = undefined;
        @JsonProperty('count', Number, true)
        count: number = undefined;
    }

    export class GraphDurationRange {
        start_time: DateTime;
        end_time: DateTime;
        display_value: string = undefined;
    }

    export class GraphData {
        name: any;
        value: any;
    }

    @JsonObject('GooglePlaceLocation')
    export class GooglePlaceLocation extends Entity {
        @JsonProperty('place_id', String, true)
        place_id: string = undefined;
        @JsonProperty('url', String, true)
        url: string = undefined;
        @JsonProperty('latitude', Number, true)
        latitude: number = undefined;
        @JsonProperty('longitude', Number, true)
        longitude: number = undefined;
        @JsonProperty('full_address', String, true)
        full_address: string = undefined;
        @JsonProperty('locality', String, true)
        locality: string = undefined;
        @JsonProperty('vicinity', String, true)
        vicinity: string = undefined;
        @JsonProperty('json_string', String, true)
        json_string: string = undefined;
    }


}

export namespace Users {
    import Entity = Core.Entity;
    import DateTimeConverter = ModelsConverters.DateTimeConverter;
    import DateConverter = ModelsConverters.DateConverter;

    @JsonObject('Location')
    export class Location extends Entity {
        @JsonProperty('address', String, true)
        address: string = undefined;
        @JsonProperty('google_maps_response', String, true)
        google_maps_response: string = undefined;
        @JsonProperty('latitude', Number, true)
        latitude: number = undefined;
        @JsonProperty('longitude', Number, true)
        longitude: number = undefined;
        @JsonProperty('url', String, true)
        url: string = undefined;
        @JsonProperty('vicinity', String, true)
        vicinity: string = undefined;
        @JsonProperty('place_id', String, true)
        place_id: string = undefined;
    }

    @JsonObject('UserAccount')
    export class UserAccount extends Entity {
        @JsonProperty('account_id', String, true)
        user_account_id: string = undefined;
        @JsonProperty('email_id', String, true)
        email_id: string = undefined;
        @JsonProperty('phone_number', String, true)
        phone_number: string = undefined;
        @JsonProperty('display_name', String, true)
        display_name: string = undefined;
        @JsonProperty('date_of_birth', DateConverter, true)
        date_of_birth: DateTime = undefined;
        @JsonProperty('country', String, true)
        country: string = undefined;
        @JsonProperty('city', String, true)
        city: string = undefined;
        @JsonProperty('user_bio', String, true)
        user_bio: string = undefined;
        @JsonProperty('instagram_profile_url', String, true)
        instagram_profile_url: string = undefined;
    }

    @JsonObject('ApiKey')
    export class ApiKey extends Entity {
        @JsonProperty('api_key_id', String, true)
        api_key_id: string = undefined;
        @JsonProperty('api_key', String, true)
        api_key: string = undefined;
        @JsonProperty('created_by', UserAccount, true)
        created_by: UserAccount = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
        @JsonProperty('expires_at', DateTimeConverter, true)
        expires_at: DateTime = undefined;
    }

    @JsonObject('UserAuthToken')
    export class UserAuthToken extends Entity {
        @JsonProperty('user_auth_token_id', String, true)
        user_auth_token_id: string = undefined;
        @JsonProperty('user_auth_token', String, true)
        user_auth_token: string = undefined;
        @JsonProperty('user_account', UserAccount, true)
        user_account: UserAccount = undefined;
        // @JsonProperty("expires_at", DateTimeConverter, true)
        expires_at: DateTime = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
    }

    @JsonObject('MessageDelivery')
    export class MessageDelivery {
        @JsonProperty('address', String, true)
        address: string = undefined;
        @JsonProperty('created_time', String, true)
        created_time: string = undefined;
        @JsonProperty('last_updated_time', String, true)
        last_updated_time: string = undefined;
        @JsonProperty('message', String, true)
        message: string = undefined;
        @JsonProperty('message_delivery_id', String, true)
        message_delivery_id: string = undefined;
        @JsonProperty('message_type', String, true)
        message_type: string = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
    }

    @JsonObject('UserFollow')
    export class UserFollow {
        @JsonProperty('follower_account', UserAccount, true)
        follower_account: UserAccount = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
        @JsonProperty('user_account', UserAccount, true)
        user_account: UserAccount = undefined;
        @JsonProperty('user_follow_id', String, true)
        user_follow_id: string = undefined;
    }

    @JsonObject('UserContact')
    export class UserContact {
        @JsonProperty('contact_type', String, true)
        contact_type: string = undefined;
        @JsonProperty('display_name', String, true)
        display_name: string = undefined;
        @JsonProperty('email_id', String, true)
        email_id: string = undefined;
        @JsonProperty('phone_number', Any, true)
        phone_number: any = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
        @JsonProperty('target_account', UserAccount, true)
        target_account: UserAccount = undefined;
        @JsonProperty('user_account', UserAccount, true)
        user_account: UserAccount = undefined;
        @JsonProperty('user_contact_id', String, true)
        user_contact_id: string = undefined;
        @JsonProperty('whatsapp_number', Any, true)
        whatsapp_number: any = undefined;
    }


    @JsonObject('CreateMultipleUserContactRequestItem')
    export class CreateMultipleUserContactRequestItem {
        @JsonProperty('contact_type', String, true)
        contact_type: string = undefined;
        @JsonProperty('display_name', String, true)
        display_name: string = undefined;
        @JsonProperty('email', String, true)
        email: string = undefined;
        @JsonProperty('phone_number', String, true)
        phone_number: string = undefined;
        @JsonProperty('whatsapp_number', String, true)
        whatsapp_number: string = undefined;
    }
}

export namespace Dispatches {

    import Entity = Core.Entity;
    import DateTimeConverter = ModelsConverters.DateTimeConverter;

    @JsonObject('Fbo')
    export class Fbo extends Entity {
        @JsonProperty('fbo_id', String, true)
        fbo_id: string = undefined;
        @JsonProperty('fbo_name', String, true)
        fbo_name: string = undefined;
        @JsonProperty('phone_number', String, true)
        phone_number: string = undefined;
        @JsonProperty('icao', String, true)
        icao: string = undefined;
        @JsonProperty('handler_id', String, true)
        handler_id: string = undefined;

    }

    @JsonObject('FboAndEmails')
    export class FboAndEmails extends Fbo {
        @JsonProperty('email_1', String, true)
        email_1: string = undefined;
        @JsonProperty('email_2', String, true)
        email_2: string = undefined;
        @JsonProperty('email_3', String, true)
        email_3: string = undefined;
        @JsonProperty('email_4', String, true)
        email_4: string = undefined;
    }


    @JsonObject('FboEmailSubscription')
    export class FboEmailSubscription extends Entity {
        @JsonProperty('fbo_email_subscription_id', String, true)
        fbo_email_subscription_id: string = undefined;
        @JsonProperty('fbo', Fbo, true)
        fbo: Fbo = undefined;
        @JsonProperty('email_id', String, true)
        email_id: string = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
    }

    @JsonObject('FuelOrderDispatch')
    export class FuelOrderDispatch extends Entity {
        @JsonProperty('fuel_order_dispatch_id', String, true)
        fuel_order_dispatch_id: string = undefined;
        @JsonProperty('fbo', String, true)
        fbo: string = undefined;
        @JsonProperty('json_string', String, true)
        json_string: string = undefined;
        @JsonProperty('received_time', DateTimeConverter, true)
        received_time: DateTime = undefined;
        @JsonProperty('icao', String, true)
        icao: string = undefined;
        @JsonProperty('iata', String, true)
        iata: string = undefined;
        @JsonProperty('tail_number', String, true)
        tail_number: string = undefined;
        @JsonProperty('arrival_date_time', DateTimeConverter, true)
        arrival_date_time: DateTime = undefined;
        @JsonProperty('departure_date_time', DateTimeConverter, true)
        departure_date_time: DateTime = undefined;
        @JsonProperty('volume', Number, true)
        volume: number = undefined;
        @JsonProperty('units', String, true)
        units: string = undefined;
        @JsonProperty('price_per_gallon', Number, true)
        price_per_gallon: number = undefined;
        @JsonProperty('source', String, true)
        source: string = undefined;
        @JsonProperty('customer_name', String, true)
        customer_name: string = undefined;
        @JsonProperty('aircraft_make', String, true)
        aircraft_make: string = undefined;
        @JsonProperty('aircraft_model', String, true)
        aircraft_model: string = undefined;
        @JsonProperty('next_destination', String, true)
        next_destination: string = undefined;
        @JsonProperty('created_date', DateTimeConverter, true)
        created_date: DateTime = undefined;
        @JsonProperty('handler_id', String, true)
        handler_id: string = undefined;

    }


}
export namespace Images {
    import Entity = Core.Entity;

    @JsonObject('UploadedFile')
    export class UploadedFile extends Entity {
        @JsonProperty('uploaded_file_id', String)
        uploaded_file_id: string = undefined;
        @JsonProperty('file_name', String)
        file_name: string = undefined;
        @JsonProperty('file_link', String)
        file_link: string = undefined;
        @JsonProperty('file_size', Number, true)
        file_size: number = undefined;
        @JsonProperty('file_extension', String, true)
        file_extension: string = undefined;
        @JsonProperty('storage_type', String, true)
        storage_type: string = undefined;
        @JsonProperty('file_path', String, true)
        file_path: string = undefined;
    }

    @JsonObject('Image')
    export class Image extends Entity {
        @JsonProperty('image_id', String)
        image_id: string = undefined;
        @JsonProperty('reference', String)
        entity_id: string = undefined;
        @JsonProperty('image_type', String)
        image_type: string = undefined;
        @JsonProperty('uploaded_file', UploadedFile)
        uploaded_file: UploadedFile = undefined;
    }

    @JsonObject('BaseEntityDescription')
    export class BaseEntityDescription extends Entity {
        @JsonProperty('entity_description_id', String, true)
        entity_description_id: string = undefined;
        @JsonProperty('entity_id', String, true)
        entity_id: string = undefined;
        @JsonProperty('description_entity_type', String, true)
        description_entity_type: string = undefined;
        @JsonProperty('description_type', String, true)
        description_type: string = undefined;
        @JsonProperty('description_category_type', String, true)
        description_category_type: string = undefined;
        @JsonProperty('title', String, true)
        title: string = undefined;
        @JsonProperty('description', String, true)
        description: string = undefined;
    }

    @JsonObject('EntityDescriptionItem')
    export class EntityDescriptionItem extends Entity {
        @JsonProperty('entity_description_item_id', String, true)
        entity_description_item_id: string = undefined;
        @JsonProperty('entity_description', BaseEntityDescription, true)
        entity_description: BaseEntityDescription = undefined;
        @JsonProperty('title', String, true)
        title: string = undefined;
        @JsonProperty('description', String, true)
        description: string = undefined;
        @JsonProperty('item_order', Number, true)
        item_order: number = undefined;
    }

    @JsonObject('EntityDescription')
    export class EntityDescription extends BaseEntityDescription {
        @JsonProperty('entity_description_items', [EntityDescriptionItem], true)
        entity_description_items: EntityDescriptionItem[] = undefined;
    }

    @JsonObject('EntityShareMessage')
    export class EntityShareMessage extends Entity {
        @JsonProperty('entity_share_message_id', String, true)
        entity_share_message_id: string = undefined;
        @JsonProperty('entity_share_message_title', String, true)
        entity_share_message_title: string = undefined;
        @JsonProperty('entity_share_message_description', String, true)
        entity_share_message_description: string = undefined;
        @JsonProperty('entity_id', String, true)
        entity_id: string = undefined;
        @JsonProperty('share_message_entity_type', String, true)
        share_message_entity_type: string = undefined;
    }

    @JsonObject('EntityShareMessageInfo')
    export class EntityShareMessageInfo extends Entity {
        @JsonProperty('entity_share_message', EntityShareMessage, true)
        entity_share_message: EntityShareMessage = undefined;
        @JsonProperty('image', Image, true)
        image: Image = undefined;
    }

    @JsonObject('Json2CsvModel')
    export class Json2CsvModel extends Entity {
        @JsonProperty('file_name', String, true)
        file_name: string = undefined;
        @JsonProperty('columns', [String], true)
        columns: string[] = undefined;
        @JsonProperty('data', [Any], true)
        data: Any[] = undefined;
    }

}

export namespace Events {
    import UserAccount = Users.UserAccount;
    import DateTimeConverter = ModelsConverters.DateTimeConverter;
    import Entity = Core.Entity;
    import Image = Images.Image;

    @JsonObject('Event')
    export class Event extends Entity {
        @JsonProperty('created_by', UserAccount, true)
        created_by: UserAccount = undefined;
        // @JsonProperty('user_account', UserAccount, true)
        // user_account: UserAccount = undefined;
        @JsonProperty('event_id', String, true)
        event_id: string = undefined;
        @JsonProperty('event_title', String, true)
        event_title: string = undefined;
        @JsonProperty('event_description', String, true)
        event_description: string = undefined;
        @JsonProperty('invitation_policy', String, true)
        invitation_policy: string = undefined;
        @JsonProperty('event_category', String, true)
        event_category: string = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
        @JsonProperty('start_time', DateTimeConverter, true)
        start_time: DateTime = undefined;
        @JsonProperty('end_time', DateTimeConverter, true)
        end_time: DateTime = undefined;
        @JsonProperty('location_visibility', String, true)
        location_visibility: string = undefined;
        @JsonProperty('location_available_status', String, true)
        location_available_status: string = undefined;
        @JsonProperty('guest_list_visibility', String, true)
        guest_list_visibility: string = undefined;
        @JsonProperty('guest_list_count_visibility', String, true)
        guest_list_count_visibility: string = undefined;
        @JsonProperty('organizer_or_host_name', String, true)
        organizer_or_host_name: string = undefined;
        @JsonProperty('event_attendees_count', Number, true)
        event_attendees_count: number = 0;
    }


    @JsonObject('EventCategories')
    export class EventCategories {


        @JsonProperty('NIGHT_LIFE', String, true)
        NIGHT_LIFE: string = undefined;
        @JsonProperty('CONCERT_OR_FESTIVAL', String, true)
        CONCERT_OR_FESTIVAL: string = undefined;
        @JsonProperty('CONFERENCE', String, true)
        CONFERENCE: string = undefined;
        @JsonProperty('SEMINAR_OR_WORKSHOP', String, true)
        SEMINAR_OR_WORKSHOP: string = undefined;
        @JsonProperty('EXHIBIT_OR_SHOW', String, true)
        EXHIBIT_OR_SHOW: string = undefined;
        @JsonProperty('NETWORKING', String, true)
        NETWORKING: DateTime = undefined;
        @JsonProperty('HAPPY_HOUR', String, true)
        HAPPY_HOUR: DateTime = undefined;
        @JsonProperty('HOUSE_PARTY', String, true)
        HOUSE_PARTY: DateTime = undefined;
        @JsonProperty('BIRTHDAY_PARTY', String, true)
        BIRTHDAY_PARTY: DateTime = undefined;
        @JsonProperty('OTHERS', String, true)
        OTHERS: DateTime = undefined;

    }


    @JsonObject('EventInvite')
    export class EventInvite {
        @JsonProperty('display_name', String, true)
        display_name: string = undefined;
        @JsonProperty('email_id', String, true)
        email_id: string = undefined;
        @JsonProperty('event', Event, true)
        event: Event = undefined;
        @JsonProperty('event_invite_id', String, true)
        event_invite_id: string = undefined;
        @JsonProperty('invitation_type', String, true)
        invitation_type: string = undefined;
        @JsonProperty('invited_by', UserAccount, true)
        invited_by: UserAccount = undefined;
        @JsonProperty('phone_number', String, true)
        phone_number: string = undefined;
        @JsonProperty('user_account', UserAccount, true)
        user_account: UserAccount = undefined;
        @JsonProperty('whatsapp_number', String, true)
        whatsapp_number: string = undefined;

    }

    @JsonObject('Location')
    export class Location extends Entity {
        @JsonProperty('address', String, true)
        address: string = undefined;
        @JsonProperty('event', Event, true)
        event: Event = undefined;
        @JsonProperty('event_location_id', String, true)
        event_location_id: string = undefined;
        @JsonProperty('latitude', Number, true)
        latitude: number = undefined;
        @JsonProperty('longitude', Number, true)
        longitude: number = undefined;
        @JsonProperty('location_type', String, true)
        location_type: string = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
    }

    @JsonObject('EventLocation')
    export class EventLocation {
        @JsonProperty('event_location_id', String, true)
        event_location_id: string = undefined;
        @JsonProperty('location', Location, true)
        location: Location = undefined;
        @JsonProperty('event', Event, true)
        event: Event = undefined;
    }


    @JsonObject('EventTicket')
    export class EventTicket {
        @JsonProperty('available_quantity', Number, true)
        available_quantity: number = undefined;
        @JsonProperty('available_ticket_quantity_status', String, true)
        available_ticket_quantity_status: string = undefined;
        @JsonProperty('createdAt', DateTimeConverter, true)
        created_time: DateTime = undefined;
        @JsonProperty('updateAt', DateTimeConverter, true)
        last_updated_time: DateTime = undefined;
        @JsonProperty('event', Event, true)
        event: Event = undefined;
        @JsonProperty('event_ticket_id', String, true)
        event_ticket_id: string = undefined;
        @JsonProperty('sale_end_time', DateTimeConverter, true)
        sale_end_time: DateTime = undefined;
        @JsonProperty('sale_start_time', DateTimeConverter, true)
        sale_start_time: DateTime = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
        @JsonProperty('ticket_description', String, true)
        ticket_description: string = undefined;
        @JsonProperty('ticket_name', String, true)
        ticket_name: string = undefined;
        @JsonProperty('ticket_type', String, true)
        ticket_type: string = undefined;
        @JsonProperty('total_quantity', Number, true)
        total_quantity: number = undefined;
    }

    @JsonObject('EventAttendee')
    export class EventAttendee {
        @JsonProperty('event', Event, true)
        event: Event = undefined;
        @JsonProperty('event_attendee_id', String, true)
        event_attendee_id: string = undefined;
        @JsonProperty('invitation_source', String, true)
        invitation_source: string = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
        @JsonProperty('total_attendee_count', Number, true)
        total_attendee_count: number = undefined;
        @JsonProperty('invited_by', UserAccount, true)
        invited_by: UserAccount = undefined;
        @JsonProperty('user_account', UserAccount, true)
        user_account: UserAccount = undefined;
        @JsonProperty('co_host_status', String, true)
        co_host_status: string = undefined;
        @JsonProperty('check_in_status', String, true)
        check_in_status: string = undefined;
    }

    @JsonObject('PromoCode')
    export class PromoCode {
        @JsonProperty('available_quantity', Number, true)
        available_quantity: number = undefined;
        @JsonProperty('discount_percentage', Number, true)
        discount_percentage: number = undefined;
        @JsonProperty('end_time', DateTimeConverter, true)
        end_time: DateTime = undefined;
        @JsonProperty('start_time', DateTimeConverter, true)
        start_time: DateTime = undefined;
        @JsonProperty('flat_discount', Number, true)
        flat_discount: number = undefined;
        @JsonProperty('promo_code', String, true)
        promo_code: string = undefined;
        @JsonProperty('promo_code_id', String, true)
        promo_code_id: string = undefined;
        @JsonProperty('promo_code_name', String, true)
        promo_code_name: string = undefined;
        @JsonProperty('promo_code_type', String, true)
        promo_code_type: string = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
        @JsonProperty('total_quantity', Number, true)
        total_quantity: number = undefined;
    }

    @JsonObject('EventPromoCode')
    export class EventPromoCode extends Entity {
        @JsonProperty('event_promo_code_id', String, true)
        event_promo_code_id: string = undefined;
        @JsonProperty('promo_code', PromoCode, true)
        promo_code: PromoCode = undefined;
        @JsonProperty('event', Event, true)
        event: Event = undefined;
    }

    @JsonObject('EventTicketSaleItem')
    export class EventTicketSaleItem {
        @JsonProperty('created_time', DateTimeConverter, true)
        created_time: DateTime = undefined;
        @JsonProperty('item_actual_price', Number, true)
        item_actual_price: number = undefined;
        @JsonProperty('item_current_price', Number, true)
        item_current_price: number = undefined;
        @JsonProperty('sale_item_id', String, true)
        sale_item_id: string = undefined;
        @JsonProperty('sale_item_type', String, true)
        sale_item_type: string = undefined;
        @JsonProperty('seller', UserAccount, true)
        seller: UserAccount = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
    }


    @JsonObject('EventTicketInfo')
    export class EventTicketInfo {
        @JsonProperty('event_ticket', EventTicket, true)
        event_ticket: EventTicket = undefined;
        @JsonProperty('event_ticket_sale_item', EventTicketSaleItem, true)
        event_ticket_sale_item: EventTicketSaleItem = undefined;
    }


    @JsonObject('EventInfo')
    export class EventInfo {
        @JsonProperty('event', Event, true)
        event: Event = undefined;
        @JsonProperty('event_locations', [EventLocation], true)
        event_locations: EventLocation[] = undefined;
        @JsonProperty('event_promo_codes', [EventPromoCode], true)
        event_promo_codes: EventPromoCode[] = undefined;
        @JsonProperty('event_tickets', [EventTicket], true)
        event_tickets: EventTicket[] = undefined;
        @JsonProperty('event_ticket_infos', [EventTicketInfo], true)
        event_ticket_infos: EventTicketInfo[] = undefined;
        @JsonProperty('image', Image, true)
        image: Image = undefined;
    }

    @JsonObject('Order')
    export class Order {
        @JsonProperty('amount', Number, true)
        amount: number = undefined;
        @JsonProperty('created_time', String, true)
        created_time: string = undefined;
        @JsonProperty('last_updated_time', String, true)
        last_updated_time: string = undefined;
        @JsonProperty('order_id', String, true)
        order_id: string = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
        @JsonProperty('user_account', UserAccount, true)
        user_account: UserAccount = undefined;
    }

    @JsonObject('SaleItem')
    export class SaleItem {
        @JsonProperty('created_time', String, true)
        created_time: string = undefined;
        @JsonProperty('item_actual_price', Number, true)
        item_actual_price: number = undefined;
        @JsonProperty('item_current_price', Number, true)
        item_current_price: number = undefined;
        @JsonProperty('last_updated_time', String, true)
        last_updated_time: string = undefined;
        @JsonProperty('sale_item_id', String, true)
        sale_item_id: string = undefined;
        @JsonProperty('sale_item_type', String, true)
        sale_item_type: string = undefined;
        @JsonProperty('seller', UserAccount, true)
        seller: UserAccount = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;

    }

    @JsonObject('OrderItem')
    export class OrderItem {
        @JsonProperty('created_time', String, true)
        created_time: string = undefined;
        @JsonProperty('item_amount', Number, true)
        item_amount: number = undefined;
        @JsonProperty('item_quantity', Number, true)
        item_quantity: number = undefined;
        @JsonProperty('last_updated_time', String, true)
        last_updated_time: string = undefined;
        @JsonProperty('order', Order, true)
        order: Order = undefined;
        @JsonProperty('order_item_id', String, true)
        order_item_id: string = undefined;
        @JsonProperty('sale_item', SaleItem, true)
        sale_item: SaleItem = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
    }

    @JsonObject('OrderPayment')
    export class OrderPayment {
        @JsonProperty('created_time', String, true)
        created_time: string = undefined;
        @JsonProperty('last_updated_time', String, true)
        last_updated_time: string = undefined;
        @JsonProperty('order', Order, true)
        order: Order = undefined;
        @JsonProperty('order_payment_id', String, true)
        order_payment_id: string = undefined;
        @JsonProperty('payment_gateway', String, true)
        payment_gateway: string = undefined;
        @JsonProperty('payment_gateway_data_json_string', String, true)
        payment_gateway_data_json_string: string = undefined;
        @JsonProperty('payment_gateway_id', String, true)
        payment_gateway_id: string = undefined;
        @JsonProperty('payment_gateway_status', String, true)
        payment_gateway_status: string = undefined;
    }

    // @JsonObject('Responses')
    // export class Responses {
    //   @JsonProperty('amount', Number, true)
    //   amount: number = undefined;
    //   @JsonProperty('amount_due', Number, true)
    //   amount_due: number = undefined;
    //   @JsonProperty('amount_paid', Number, true)
    //   amount_paid: number = undefined;
    //   @JsonProperty('attempts', Number, true)
    //   attempts: number = undefined;
    //   @JsonProperty('created_at', Number, true)
    //   created_at: number = undefined;
    //   @JsonProperty('currency', String, true)
    //   currency: string = undefined;
    //   @JsonProperty('entity', String, true)
    //   entity: string = undefined;
    //   @JsonProperty('id', String, true)
    //   id: string = undefined;
    //   @JsonProperty('receipt', String, true)
    //   receipt: string = undefined;
    //   @JsonProperty('status', String, true)
    //   status: string = undefined;
    // }

    @JsonObject('OrderCompleteInfo')
    export class OrderCompleteInfo {
        @JsonProperty('order', Order, true)
        order: Order = undefined;
        @JsonProperty('order_items', [OrderItem], true)
        order_items: OrderItem[] = undefined;
        @JsonProperty('order_payment', OrderPayment, true)
        order_payment: OrderPayment = undefined;
        // @JsonProperty('razor_pay_order_response', Responses, true)
        // razor_pay_order_response: Responses = undefined;
    }

    @JsonObject('UserEventTicket')
    export class UserEventTicket {
        @JsonProperty('booking_time_quantity', Number, true)
        booking_time_quantity: number = undefined;
        @JsonProperty('event_ticket', EventTicket, true)
        event_ticket: EventTicket = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
        @JsonProperty('ticket_quantity', Number, true)
        ticket_quantity: number = undefined;
        @JsonProperty('user_account', UserAccount, true)
        user_account: UserAccount = undefined;
        @JsonProperty('user_event_ticket_id', String, true)
        user_event_ticket_id: string = undefined;
    }

    @JsonObject('UserEventInfo')
    export class UserEventInfo extends Entity {
        @JsonProperty('event_attendees', [EventAttendee], true)
        event_attendees: EventAttendee[] = undefined;
        @JsonProperty('event_invite', [EventInvite], true)
        event_invites: EventInvite[] = undefined;
        @JsonProperty('event_info', EventInfo, true)
        event_info: EventInfo = undefined;
        @JsonProperty('user_account', UserAccount, true)
        user_account: UserAccount = undefined;
        @JsonProperty('user_event_tickets', [UserEventTicket], true)
        user_event_tickets: UserEventTicket[] = undefined;
    }

    @JsonObject('EventInviteAndEventInfo')
    export class EventInviteAndEventInfo extends Entity {
        @JsonProperty('event_invite', EventInvite, true)
        event_invite: EventInvite = undefined;
        @JsonProperty('event_info', EventInfo, true)
        event_info: EventInfo = undefined;
    }

    @JsonObject('EventInviteAndUserEventInfo')
    export class EventInviteAndUserEventInfo extends Entity {
        @JsonProperty('event_invite', EventInvite, true)
        event_invite: EventInvite = undefined;
        @JsonProperty('user_event_info', UserEventInfo, true)
        user_event_info: UserEventInfo = undefined;
    }


}


export namespace Blasts {

    import UserAccount = Users.UserAccount;

    @JsonObject('BlastList')
    export class BlastList {
        @JsonProperty('blast_list_id', String, true)
        blast_list_id: string = undefined;
        @JsonProperty('blast_list_name', String, true)
        blast_list_name: string = undefined;
        @JsonProperty('blast_list_type', String, true)
        blast_list_type: string = undefined;
        @JsonProperty('description', String, true)
        description: string = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
        @JsonProperty('total_blast_list_items', Number, true)
        total_blast_list_items: number = undefined;
    }

    @JsonObject('BlastListItems')
    export class BlastListItems {
        @JsonProperty('blast_list', BlastList, true)
        blast_list: BlastList = undefined;
        @JsonProperty('blast_list_item_id', String, true)
        blast_list_item_id: string = undefined;
        @JsonProperty('blast_list_item_type', String, true)
        blast_list_item_type: string = undefined;
        @JsonProperty('display_name', String, true)
        display_name: string = undefined;
        @JsonProperty('email_id', String, true)
        email_id: string = undefined;
        @JsonProperty('phone_number', Any, true)
        phone_number: any = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
        @JsonProperty('user_account', UserAccount, true)
        user_account: UserAccount = undefined;
    }

    @JsonObject('BlastPackage')
    export class BlastPackage {
        @JsonProperty('blast_emails', Number, true)
        blast_emails: number = undefined;
        @JsonProperty('blast_package_description', String, true)
        blast_package_description: string = undefined;
        @JsonProperty('blast_package_id', String, true)
        blast_package_id: string = undefined;
        @JsonProperty('blast_package_name', String, true)
        blast_package_name: string = undefined;
        @JsonProperty('blast_text_messages', Number, true)
        blast_text_messages: number = undefined;
        @JsonProperty('blast_whatsapp_messages', Number, true)
        blast_whatsapp_messages: string = undefined;
        @JsonProperty('number_of_days', Number, true)
        number_of_days: string = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
    }

    @JsonObject('EventBlast')
    export class EventBlast {
        @JsonProperty('blast_list', BlastList, true)
        blast_list: BlastList = undefined;
        @JsonProperty('created_by', UserAccount, true)
        created_by: UserAccount = undefined;
        @JsonProperty('end_time', String, true)
        end_time: string = undefined;
        @JsonProperty('event', Events.Event, true)
        event: Events.Event = undefined;
        @JsonProperty('event_blast_id', String, true)
        event_blast_id: string = undefined;
        @JsonProperty('event_blast_message', String, true)
        event_blast_message: string = undefined;
        @JsonProperty('message', String, true)
        message: string = undefined;
        @JsonProperty('sent_recipients', Number, true)
        sent_recipients: number = undefined;
        @JsonProperty('start_time', String, true)
        start_time: string = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
        @JsonProperty('total_recipients', Number, true)
        total_recipients: number = undefined;
    }

    @JsonObject('PhoneNumber')
    export class PhoneNumber {
        @JsonProperty('country_code', Number, true)
        country_code: number = undefined;
        @JsonProperty('country_code_source', String, true)
        country_code_source: string = undefined;
        @JsonProperty('extension', String, true)
        extension: string = undefined;
        @JsonProperty('italian_leading_zero', Boolean, true)
        italian_leading_zero: boolean = undefined;
        @JsonProperty('national_number', Number, true)
        national_number: number = undefined;
        @JsonProperty('number_of_leading_zeros', Number, true)
        number_of_leading_zeros: number = undefined;
        @JsonProperty('preferred_domestic_carrier_code', String, true)
        preferred_domestic_carrier_code: string = undefined;
        @JsonProperty('raw_input', String, true)
        raw_input: string = undefined;
    }

    @JsonObject('EventBlastRecipient')
    export class EventBlastRecipient {
        @JsonProperty('blast_list_item_type', String, true)
        blast_list_item_type: string = undefined;
        @JsonProperty('created_time', String, true)
        created_time: string = undefined;
        @JsonProperty('display_name', String, true)
        display_name: string = undefined;
        @JsonProperty('email_id', String, true)
        email_id: string = undefined;
        @JsonProperty('event_blast', EventBlast, true)
        event_blast: EventBlast = undefined;
        @JsonProperty('event_blast_recipient_id', String, true)
        event_blast_recipient_id: string = undefined;
        @JsonProperty('last_updated_time', String, true)
        last_updated_time: string = undefined;
        @JsonProperty('phone_number', PhoneNumber, true)
        phone_number: PhoneNumber = undefined;
        @JsonProperty('status', String, true)
        status: string = undefined;
        @JsonProperty('user_account', UserAccount, true)
        user_account: UserAccount = undefined;
        @JsonProperty('whatsapp_number', PhoneNumber, true)
        whatsapp_number: PhoneNumber = undefined;
    }


}


export class CountDownTimeComponents {
    seconds_to_d_day: number;
    minutes_to_d_day: number;
    hours_to_d_day: number;
    days_to_d_day: number;
}

export interface AppPermissionIdfaData {
    /**
     * Whether usage of advertising id is allowed by user.
     */
    trackingLimited: boolean;

    /**
     * Identifier for advertisers _(iOS only)_.
     */
    idfa?: string;

    /**
     * Tracking permission status _(iOS only)_. Available only for iOS 14+ devices.
     *
     * For the meaning of the values see
     * [the tracking transparency API docs]
     * (https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanagerauthorizationstatus).
     */
    trackingPermission?: number;

    /**
     * Android advertising ID _(Android only)_.
     */
    aaid?: string;
}

export class SlideInfo {
    slide_name: string;
    slide_number: number;


    constructor(slide_name?: string, slide_number?: number) {
        this.slide_name = slide_name;
        this.slide_number = slide_number;
    }
}
