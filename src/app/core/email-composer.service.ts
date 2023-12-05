import {Injectable} from '@angular/core';
import {JsonObject, JsonProperty} from 'json2typescript';
import {CommonsService} from '@core/commons.service';
import {EmailComposer} from '@node-modules/capacitor-email-composer'

export namespace SendEmailToCustomerCare {

    @JsonObject()
    export class Request {
        @JsonProperty('to', [String], true)
        to: string[] = undefined;
        @JsonProperty('subject', String, true)
        subject: string = undefined;
    }

    @JsonObject()
    export class Response {

    }
}

@Injectable({
    providedIn: 'root'
})
export class EmailComposerService {

    // constructor(protected emailComposer: EmailComposer) {
    // }

    sendEmail(request: SendEmailToCustomerCare.Request) {
        return EmailComposer.open(CommonsService.serialize(request));
    }
}
