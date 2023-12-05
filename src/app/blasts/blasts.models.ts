import {JsonObject, JsonProperty} from "json2typescript";
import {Blasts, Core, Events, Users} from '@core/core.models';
import {ModelsConverters} from '@core/models.converters';
import {DateTime} from 'luxon';

export namespace BlastsRequests {
    export namespace GetBlastListsByUserAccount {

        import SortedPaginatedRequest = Core.SortedPaginatedRequest;
        import BlastList = Blasts.BlastList;

        @JsonObject('GetBlastListsByUserAccountRequest')
        export class Request extends SortedPaginatedRequest {
            @JsonProperty('user_account', String, true)
            user_account: string = undefined;
            @JsonProperty("filter_blast_list_name", String, true)
            filter_blast_list_name: string = undefined;
            @JsonProperty("blast_list_type", String, true)
            blast_list_type: string = undefined;
            @JsonProperty("blast_list_creation_type", String, true)
            blast_list_creation_type: string = undefined;
        }

        @JsonObject('GetBlastListsByUserAccountResponse')
        export class Response extends BlastList {

        }
    }

    export namespace GetBlastList {

        import BlastList = Blasts.BlastList;

        @JsonObject('GetBlastListRequest')
        export class Request {
            @JsonProperty('blast_list', String, true)
            blast_list_id: string = undefined;

        }

        @JsonObject('GetBlastListResponse')
        export class Response extends BlastList {

        }
    }

    export namespace GetBlastListItemsByBlastList {
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;
        import BlastListItems = Blasts.BlastListItems;

        @JsonObject('GetBlastListItemsByBlastListRequest')
        export class Request extends SortedPaginatedRequest {
            @JsonProperty('blast_list', String, true)
            blast_list_id: string = undefined;
        }

        @JsonObject('GetBlastListItemsByBlastListResponse')
        export class Response extends BlastListItems {

        }
    }

    export namespace GetAllBlastPackages {

      import BlastPackage = Blasts.BlastPackage;
      import SortedPaginatedRequest = Core.SortedPaginatedRequest;

      @JsonObject('GetAllBlastPackagesRequest')
      export class Request extends SortedPaginatedRequest {
      }

      @JsonObject('GetAllBlastPackagesResponse')
      export class Response extends BlastPackage {
      }
    }

    export namespace CreateBlastList {
      @JsonObject('CreateBlastListRequest')
      export class Request {
        @JsonProperty('blast_list_name', String, true)
        blast_list_name: string = undefined;
        @JsonProperty('blast_list_type', String, true)
        blast_list_type: string = undefined;
        @JsonProperty('description', String, true)
        description: string = undefined;
      }
      @JsonObject('CreateBlastListResponse')
      export class Response {
      }
    }

    export namespace CreateEventBlast {

      import DateTimeConverter = ModelsConverters.DateTimeConverter;

      @JsonObject('CreateEventBlastRequest')
      export class Request {
        @JsonProperty('blast_list', String, true)
        blast_list: string = undefined;
        @JsonProperty('end_time', DateTimeConverter, true)
        end_time: DateTime = undefined;
        @JsonProperty('event', String, true)
        event: string = undefined;
        @JsonProperty('event_blast_message', String, true)
        event_blast_message: string = undefined;
        @JsonProperty('message', String, true)
        message: string = undefined;
        @JsonProperty('sent_recipients', Number, true)
        sent_recipients: number = undefined;
        @JsonProperty('start_time', DateTimeConverter, true)
        start_time: DateTime = undefined;
        @JsonProperty('total_recipients', Number, true)
        total_recipients: number = undefined;
      }
      @JsonObject('CreateEventBlastResponse')
      export class Response {
      }
    }

    export namespace GetEventBlastByBlastList {

      import EventBlast = Blasts.EventBlast;
        import SortedPaginatedRequest = Core.SortedPaginatedRequest;

      @JsonObject('GetEventBlastByBlastListRequest')
      export class Request extends SortedPaginatedRequest{
        @JsonProperty('blast_list', String, true)
        blast_list: string = undefined;
      }

      @JsonObject('GetEventBlastByBlastListResponse')
      export class Response extends EventBlast {
      }
    }

    export namespace StartEventBlast {
      @JsonObject('StartEventBlastRequest')
      export class Request {
        @JsonProperty('event_blast', String, true)
        event_blast: string = undefined;
        @JsonProperty('message', String, true)
        message: string = undefined;
      }

      @JsonObject('StartEventBlastResponse')
      export class Response {
      }
    }

    export namespace AddEventBlastRecipients {
      import EventBlastRecipient = Blasts.EventBlastRecipient;

      @JsonObject('AddEventBlastRecipientsRequest')
      export class Request {
        @JsonProperty('blast_list_items', [String], true)
        blast_list_items: string[] = undefined;
        @JsonProperty('event_blast', String, true)
        event_blast: string = undefined;
      }

      @JsonObject('AddEventBlastRecipientsResponse')
      export class Response extends EventBlastRecipient {
      }
    }

    export namespace CreateBlastListItem {
    @JsonObject('CreateBlastListItemRequest')
    export class Request {
      @JsonProperty('blast_list', String, true)
      blast_list: string = undefined;
      @JsonProperty('blast_list_item_type', String, true)
      blast_list_item_type: string = undefined;
      @JsonProperty('display_name', String, true)
      display_name: string = undefined;
      @JsonProperty('email_id', String, true)
      email_id: string = undefined;
      @JsonProperty('phone_number', String, true)
      phone_number: string = undefined;
      @JsonProperty('whatsapp_number', String, true)
      whatsapp_number: string = undefined;
    }
    @JsonObject('CreateBlastListItemResponse')
    export class Response {
    }
  }

  export namespace CopyBlastList {

    import BlastList = Blasts.BlastList;

    @JsonObject('CopyBlastLitRequest')
    export class Request {
      @JsonProperty('blast_list', String, true)
      blast_list: string = undefined;
      @JsonProperty('append_copy_tag', Boolean, true)
      append_copy_tag: boolean = undefined;
      @JsonProperty('copy_blast_list_items', Boolean, true)
      copy_blast_list_items: boolean = undefined;
    }

    @JsonObject('CopyBlastLitResponse')
    export class Response extends BlastList{

    }
  }

    export namespace CreateBlastListAndBlastListItemsByUserContacts {

        import BlastList = Blasts.BlastList;

        @JsonObject('CreateBlastListAndBlastListItemsByUserContactsRequest')
        export class Request {
            @JsonProperty('user_contacts', [String], true)
            user_contacts: string[] = undefined;
        }

        @JsonObject('CreateBlastListAndBlastListItemsByUserContactsResponse')
        export class Response extends BlastList{
        }
    }
}
