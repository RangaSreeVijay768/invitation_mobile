import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Output,Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonsService} from '@core/commons.service';

import {SortedPaginatedBaseComponent} from "@core/components/paginated-base.component";
import {Core} from "@core/core.models";
import SortedPaginatedRequest = Core.SortedPaginatedRequest;

@Component({
    selector: '<%= dasherize(name) %>',
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component extends SortedPaginatedBaseComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(first?: number, count?: number, column_name?: string, column_order?: string): SortedPaginatedRequest.Request {
        let request = new SortedPaginatedRequest.Request();

        request = this.setLimits(request, first, count);
        request = this.setColumnOrders(request, column_name, column_order);
        return request;
    }

}

@Component({
    selector: '<%= dasherize(name) %>-no-template',
    templateUrl: './<%= dasherize(name) %>-no-template.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>NoTemplateComponent extends <%= classify(name) %>Component
{
}
