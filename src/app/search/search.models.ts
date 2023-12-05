import {JsonObject, JsonProperty} from 'json2typescript';
import {Core, Events} from '@core/core.models';

export namespace SearchRequests {

  export namespace SearchEventInfos {
    import EventInfo = Events.EventInfo;
    import SortedPaginatedRequest = Core.SortedPaginatedRequest;

    @JsonObject('SearchEventInfosRequest')
    export class Request extends SortedPaginatedRequest{
      @JsonProperty('query', String, true)
      query: string = undefined;
      @JsonProperty("ticket_type", String, true)
      ticket_type: string = undefined;
      @JsonProperty("location_type", String, true)
      location_type: string = undefined;
      @JsonProperty("event_status", String, true)
      event_status: string = undefined;
    }

    @JsonObject('SearchEventInfosResponse')
    export class Response extends EventInfo {
    }
  }

}
