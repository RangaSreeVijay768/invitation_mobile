import {Injectable} from '@angular/core';
import {RestService} from '@core/http/rest.service';
import {Unquery} from 'unquery';


@Injectable({
    providedIn: 'root'
})
export class UnqueryParserService extends RestService {


    // constructor(restangular: Restangular) {
    //     super(restangular);
    //
    // }

    unquery(url: string) {
        return Unquery(url, {
            utm_source: Unquery.string(),
            utm_medium: Unquery.string()
        });
        // return querySchema
    }


}
