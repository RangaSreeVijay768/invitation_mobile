import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {CommonsService} from '@core/commons.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {EventsService} from '@events/events.service';
import {EventsRequests} from '@events/events.models';
// import GetEvent = EventsRequests.GetEvent;
import GetEventInfo = EventsRequests.GetEventInfo;
import GetUserEventInfo = EventsRequests.GetUserEventInfo;
// @Injectable()
// export class GetEventResolver implements Resolve<Observable<GetEvent.Response>> {
//     constructor(protected eventsService: EventsService) {
//     }
//     resolve(route: ActivatedRouteSnapshot) {
//         const request = new GetEvent.Request();
//         request.event_id = route.paramMap.get('eventId');
//         return this.eventsService.getEvent(request)
//             .pipe(CommonsService.logResponse, CommonsService.deserializeMap(GetEvent.Response));
//     }
// }
@Injectable()
export class GetEventInfoResolver implements Resolve<Observable<GetEventInfo.Response>> {

    constructor(protected eventsService: EventsService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        const request = new GetEventInfo.Request();
        request.event_id = route.paramMap.get('eventId');
        return this.eventsService.getEventInfo(request)
            .pipe(CommonsService.logResponse, CommonsService.deserializeMap(GetEventInfo.Response));
    }
}

@Injectable()
export class GetUserEventInfoResolver implements Resolve<Observable<GetUserEventInfo.Response>> {
    constructor(protected eventsService: EventsService,) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        const request = new GetUserEventInfo.Request;
        request.event_id = route.paramMap.get('eventId');
        console.log('hello' + route.paramMap.get('eventId'));

        // request.event_id = '88567d42-7b5c-4ec1-8e56-43bcb38b0428';
        return this.eventsService.getUserEventInfo(request)
            .pipe(CommonsService.deserializeMap(GetUserEventInfo.Response));
    }
}
