import {Injectable} from '@angular/core';
import {RestService} from '@core/http/rest.service';
import {Restangular} from 'ngx-restangular';
import {CoreHttpClient} from '@core/http/http.module';
import {SearchConstants} from './search.constants';
import {SearchRequests} from './search.models';
import SearchEventInfos = SearchRequests.SearchEventInfos;

@Injectable({
    providedIn: 'root'
})
export class SearchService extends RestService {

    searchService: Restangular;
    searchSecuredService: Restangular;

    constructor(httpClient: CoreHttpClient) {
        super(httpClient);

        this.end_point = SearchConstants.EVENTELASTICSEARCH_ENDPOINT;
        this.secured_end_point = SearchConstants.EVENTELASTICSEARCH_SECURED_ENDPOINT;
    }

    searchEventInfos(request: SearchEventInfos.Request) {
        return this.httpClient.get(`${this.getEndPoint()}/eventelasticsearchobjects/search/autocomplete`,
            {params: this.serialize(request)});
    }

}
