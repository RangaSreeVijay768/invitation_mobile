import {Injectable} from "@angular/core";
import {RestService} from "@core/http/rest.service";
import {EventsConstants} from "@events/events.constants";
import {CoreHttpClient} from "@core/http/http.module";
import {EventsRequests} from "@events/events.models";
import CreatePaymentIntent = EventsRequests.CreatePaymentIntent;

@Injectable({
    providedIn: 'root'
})
export class OrdersService extends RestService {


    constructor(httpClient: CoreHttpClient) {
        super(httpClient);
        this.end_point = EventsConstants.ORDERS_ENDPOINT;
        this.secured_end_point = EventsConstants.ORDERS_SECURED_ENDPOINT;
    }

    createPaymentIntent(request: CreatePaymentIntent.Request) {
        return this.httpClient.post(`${this.getSecuredEndPoint()}/stripe/paymentintent`, this.serialize(request));
    }
}
