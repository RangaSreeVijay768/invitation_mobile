import {Injectable} from "@angular/core";
import {RestService} from "@core/http/rest.service";

@Injectable({
    providedIn: 'root'
})
export class <%= classify(name) %>Service extends RestService {

    <%= camelize(name) %>Service: Restangular;
    <%= camelize(name) %>SecuredService: Restangular;

    constructor(restangular: Restangular) {
        super(restangular);

        this.<%= camelize(name) %>Service = super.getService(<%= classify(name) %>Constants.);
        this.<%= camelize(name) %>SecuredService = super.getService(<%= classify(name) %>Constants.);
    }

}
