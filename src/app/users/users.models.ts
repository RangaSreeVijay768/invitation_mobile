import {JsonObject, JsonProperty} from 'json2typescript';
import {Core, Users} from '@core/core.models';
import {DateTime} from 'luxon';
import {ModelsConverters} from '@core/models.converters';

export namespace UsersRequests {

    export namespace SignIn {

        import UserAuthToken = Users.UserAuthToken;

        @JsonObject('SignInRequest')
        export class Request {
            @JsonProperty('email', String, true)
            email: string = undefined;
            @JsonProperty('password', String, true)
            password: string = undefined;
        }

        @JsonObject('SignInResponse')
        export class Response extends UserAuthToken {

        }
    }

    export namespace StartLogin {
        import MessageDelivery = Users.MessageDelivery;

        @JsonObject('StartLoginRequest')
        export class Request {
            @JsonProperty('email_id', String, true)
            email_id: string = undefined;
            @JsonProperty('phone_number', String, true)
            phone_number: string = undefined;
            @JsonProperty('whats_app_number', String, true)
            whats_app_number: string = undefined;
        }

        @JsonObject('StartLoginResponse')
        export class Response extends MessageDelivery {
        }
    }

    export namespace VerifyUserAccountVerificationLogin {
        import UserAuthToken = Users.UserAuthToken;

        @JsonObject('VerifyUserAccountVerificationLoginRequest')
        export class Request {
            @JsonProperty('email_id', String, true)
            email_id: string = undefined;
            @JsonProperty('phone_number', String, true)
            phone_number: string = undefined;
            @JsonProperty('verification_code', String, true)
            verification_code: string = undefined;
            @JsonProperty('verification_type', String, true)
            verification_type: string = undefined;
            @JsonProperty('whats_app_number', String, true)
            whats_app_number: string = undefined;
        }

        @JsonObject('VerifyUserAccountVerificationLoginResponse')
        export class Response extends UserAuthToken {
        }
    }

    export namespace VerifyUserAccountVerification {
        @JsonObject('VerifyUserAccountVerificationRequest')
        export class Request {
            @JsonProperty('email_id', String, true)
            email_id: string = undefined;
            @JsonProperty('phone_number', String, true)
            phone_number: string = undefined;
            @JsonProperty('verification_code', String, true)
            verification_code: string = undefined;
            @JsonProperty('verification_type', String, true)
            verification_type: string = undefined;
            @JsonProperty('whats_app_number', String, true)
            whats_app_number: string = undefined;
        }

        @JsonObject('VerifyUserAccountVerificationResponse')
        export class Response {
        }
    }

    export namespace UpdateUserAccount {
        import UserAccount = Users.UserAccount;
        import DateTimeConverter = ModelsConverters.DateTimeConverter;
        import DateConverter = ModelsConverters.DateConverter;

        // import SortedPaginatedRequest = Core.SortedPaginatedRequest;

        @JsonObject('UpdateUserAccountRequest')
        export class Request {
            @JsonProperty('user_account_id', String, true)
            user_account_id: string = undefined;
            @JsonProperty('email', String, true)
            email: string = undefined;
            @JsonProperty('name', String, true)
            name: string = undefined;
            @JsonProperty('date_of_birth', DateConverter, true)
            date_of_birth: DateTime = undefined;
            @JsonProperty('user_bio', String, true)
            user_bio: string = undefined;
            @JsonProperty('instagram_profile_url', String, true)
            instagram_profile_url: string = undefined;
            @JsonProperty('nationality', String, true)
            nationality: string = undefined;
            @JsonProperty('country', String, true)
            country: string = undefined;
            @JsonProperty('city', String, true)
            city: string = undefined;
        }

        @JsonObject('UpdateUserAccountResponse')
        export class Response {
            // @JsonProperty('items', [UserAccount], true)
            // items: UserAccount[] = undefined;
        }
    }

    export namespace UpdateUserAccountDetails {
        import UserAccount = Users.UserAccount;
        import DateTimeConverter = ModelsConverters.DateTimeConverter;
        import DateConverter = ModelsConverters.DateConverter;
        import Entity = Core.Entity;

        // import SortedPaginatedRequest = Core.SortedPaginatedRequest;

        @JsonObject('LocationRequest')
        export class LocationRequest {
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

        @JsonObject('UpdateUserAccountDetailsRequest')
        export class Request {
            @JsonProperty('user_account_id', String, true)
            user_account_id: string = undefined;
            @JsonProperty('email', String, true)
            email: string = undefined;
            @JsonProperty('name', String, true)
            name: string = undefined;
            @JsonProperty('date_of_birth', DateConverter, true)
            date_of_birth: DateTime = undefined;
            @JsonProperty('user_bio', String, true)
            user_bio: string = undefined;
            @JsonProperty('instagram_profile_url', String, true)
            instagram_profile_url: string = undefined;
            @JsonProperty('nationality', String, true)
            nationality: string = undefined;
            @JsonProperty('country', String, true)
            country: string = undefined;
            @JsonProperty('city', String, true)
            city: string = undefined;
            @JsonProperty('gender', String, true)
            gender: string = undefined;
            @JsonProperty('location', LocationRequest, true)
            location: LocationRequest = undefined;
        }

        @JsonObject('UpdateUserAccountDetailsResponse')
        export class Response {
            // @JsonProperty('items', [UserAccount], true)
            // items: UserAccount[] = undefined;
        }
    }

    export namespace SignUp {


        import UserAuthToken = Users.UserAuthToken;
        import MessageDelivery = Users.MessageDelivery;

        @JsonObject('SignUpRequest')
        export class Request {
            @JsonProperty('email', String, true)
            email: string = undefined;
            @JsonProperty('display_name', String, true)
            display_name: string = undefined;
            @JsonProperty('password', String, true)
            password: string = undefined;
            @JsonProperty('phone_number', String, true)
            phone_number: string = undefined;
            @JsonProperty('whatsapp_number', String, true)
            whatsapp_number: string = undefined;
        }

        @JsonObject('SignUpResponse')
        export class Response extends MessageDelivery {

        }
    }

    export namespace RefreshToken {


        @JsonObject('RefreshTokenRequest')
        export class Request {
            @JsonProperty('accessToken', String, true)
            access_token: string = undefined;
        }

        @JsonObject('RefreshTokenResponse')
        export class Response {

        }
    }

    export namespace ForgotPassword {


        @JsonObject('ForgotPasswordRequest')
        export class Request {
            @JsonProperty('username', String, true)
            username: string = undefined;
        }

        @JsonObject('ForgotPasswordResponse')
        export class Response {

        }
    }

    export namespace ConfirmEmail {


        @JsonObject('ConfirmEmailRequest')
        export class Request {
            @JsonProperty('userId', String, true)
            user_id: string = undefined;
            @JsonProperty('emailToken', String, true)
            email_token: string = undefined;
        }

        @JsonObject('ConfirmEmailResponse')
        export class Response {

        }
    }

    export namespace RefreshAccessToken {


        @JsonObject('RefreshAccessTokenRequest')
        export class Request {
            @JsonProperty('accessToken', String, true)
            access_token: string = undefined;
        }

        @JsonObject('RefreshAccessTokenResponse')
        export class Response {

        }
    }

    export namespace ResetPassword {


        @JsonObject('ResetPasswordRequest')
        export class Request {
            @JsonProperty('username', String, true)
            username: string = undefined;
            @JsonProperty('resetToken', String, true)
            reset_token: string = undefined;
            @JsonProperty('password', String, true)
            password: string = undefined;
        }

        @JsonObject('ResetPasswordResponse')
        export class Response {

        }
    }


    export namespace GetAllUserAccounts {

        import UserAccount = Users.UserAccount;
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;

        @JsonObject('GetAllUserAccountRequest')
        export class Request extends SortedPaginatedRequest {

        }

        @JsonObject('GetAllUserAccountResponse')
        export class Response extends UserAccount {
        }
    }

    export namespace GetUsersForAdmin {

        import SortedPaginatedRequest = Core.SortedPaginatedRequest;
        import UserAccount = Users.UserAccount;

        @JsonObject('GetUsersForAdminRequest')
        export class Request extends SortedPaginatedRequest {
            @JsonProperty('Filter', String, true)
            filter: string = undefined;
        }

        @JsonObject('GetUsersForAdminResponse')
        export class Response {
            @JsonProperty('data', [UserAccount], true)
            data: UserAccount[] = undefined;
        }
    }

    export namespace CreateApiKey {

        @JsonObject('CreateApiKeyRequest')
        export class Request {

        }

        @JsonObject('CreateApiKeyResponse')
        export class Response {

        }
    }

    export namespace GetApiKey {

        import ApiKey = Users.ApiKey;

        @JsonObject('GetApiKeyRequest')
        export class Request {
            api_key_id: string = undefined;
        }

        @JsonObject('GetApiKeyResponse')
        export class Response extends ApiKey {
        }
    }

    export namespace DeleteApiKey {


        @JsonObject('DeleteApiKeyRequest')
        export class Request {
            api_key_id: string = undefined;
        }

        @JsonObject('DeleteApiKeyResponse')
        export class Response {
        }
    }


    export namespace GetApiKeysByCreatedBy {

        import ApiKey = Users.ApiKey;
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;

        @JsonObject('GetApiKeysByCreatedByRequest')
        export class Request extends SortedPaginatedRequest {

        }

        @JsonObject('GetApiKeysByCreatedByResponse')
        export class Response extends ApiKey {

        }
    }


    @JsonObject('UserIdAndEmailToken')
    export class UserIdAndEmailToken {
        user_id: string = undefined;
        email_token: string = undefined;
    }

    @JsonObject('UserNameAndResetToken')
    export class UserNameAndResetToken {
        user_name: string = undefined;
        reset_token: string = undefined;
    }

    export namespace GetUserAccount {
        import UserAccount = Users.UserAccount;

        @JsonObject('GetUserAccountRequest')
        export class Request {
            @JsonProperty('id', String, true)
            id: string = undefined;
        }

        @JsonObject('GetUserAccountResponse')
        export class Response extends UserAccount {

        }
    }

    export namespace SendTwilioSMSMessage {

        @JsonObject('SendTwilioSMSMessageRequest')
        export class Request {
            @JsonProperty('phone_number', String, true)
            phone_number: string = undefined;
            @JsonProperty('message', String, true)
            message: string = undefined;
        }

        @JsonObject('SendTwilioSMSMessageResponse')
        export class Response {

        }
    }

    export namespace SendTwilioWhatsAppMessage {

        @JsonObject('SendTwilioWhatsAppMessageRequest')
        export class Request {
            @JsonProperty('phone_number', String, true)
            phone_number: string = undefined;
            @JsonProperty('message', String, true)
            message: string = undefined;
        }

        @JsonObject('SendTwilioWhatsAppMessageResponse')
        export class Response {

        }
    }

    export namespace GetUserFollowByFollowerAccount {
        import UserFollow = Users.UserFollow;

        @JsonObject('getUserFollowByFollowerAccountRequest')
        export class Request {
            @JsonProperty('follower_account', String, true)
            follower_account: string = undefined;
        }

        @JsonObject('getUserFollowByFollowerAccountResponse')
        export class Response extends UserFollow {

        }
    }

    export namespace CreateUserFollow {

        @JsonObject('CreateUserFollowRequest')
        export class Request {
            @JsonProperty('follower_account', String, true)
            follower_account: string = undefined;
            @JsonProperty('user_account', String, true)
            user_account: string = undefined;
        }

        @JsonObject('CreateUserFollowResponse')
        export class Response {

        }
    }

    export namespace DeleteUserFollow {

        @JsonObject('DeleteUserFollowRequest')
        export class Request {
            @JsonProperty('id', String, true)
            id: string = undefined;
        }

        @JsonObject('DeleteUserFollowResponse')
        export class Response {

        }
    }

    export namespace GetUserFollowByUserAccount {
        import UserFollow = Users.UserFollow;

        @JsonObject('getUserFollowByUserAccountRequest')
        export class Request {
        }

        @JsonObject('getUserFollowByUserAccountResponse')
        export class Response extends UserFollow {

        }
    }

    export namespace GetUserFollowByUserAccountAndFollowerAccount {
        import UserFollow = Users.UserFollow;

        @JsonObject('getUserFollowByUserAccountAndFollowerAccountRequest')
        export class Request {
            @JsonProperty('follower_account', String, true)
            follower_account: string = undefined;
            @JsonProperty('user_account', String, true)
            user_account: string = undefined;
        }

        @JsonObject('getUserFollowByUserAccountAndFollowerAccountResponse')
        export class Response extends UserFollow {

        }
    }

    export namespace GetUserContactsByUserAccount {

        import UserContact = Users.UserContact;
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;

        @JsonObject('GetUserContactsByUserAccountRequest')
        export class Request extends SortedPaginatedRequest {
        }

        @JsonObject('GetUserContactsByUserAccountResponse')
        export class Response extends UserContact {

        }
    }

    export namespace GetOrCreateUserAccountAndStartLogin {

        import UserContact = Users.UserContact;
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;
        import MessageDelivery = Users.MessageDelivery;

        @JsonObject('GetOrCreateUserAccountAndStartLoginRequest')
        export class Request {
            @JsonProperty('email_id', String, true)
            email_id: string = undefined;
            @JsonProperty('phone_number', String, true)
            phone_number: string = undefined;
        }

        @JsonObject('GetOrCreateUserAccountAndStartLoginResponse')
        export class Response extends MessageDelivery {

        }
    }

    export namespace GetAllUserContacts {
        import UserContact = Users.UserContact;
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;

        @JsonObject('getAllUserContactsRequest')
        export class Request extends SortedPaginatedRequest {
        }

        @JsonObject('getAllUserContactsResponse')
        export class Response extends UserContact {
        }
    }

    export namespace CreateUserContact {

        @JsonObject('CreateUserContactRequest')
        export class Request {
            @JsonProperty('contact_type', String, true)
            contact_type: string = undefined;
            @JsonProperty('display_name', String, true)
            display_name: string = undefined;
            @JsonProperty('email_id', String, true)
            email_id: string = undefined;
            @JsonProperty('phone_number', String, true)
            phone_number: string = undefined;
            @JsonProperty('target_account_id', String, true)
            target_account_id: string = undefined;
            @JsonProperty('whatsapp_number', String, true)
            whatsapp_number: string = undefined;
        }

        @JsonObject('CreateUserContactResponse')
        export class Response {

        }
    }
}
