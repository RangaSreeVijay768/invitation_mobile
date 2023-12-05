import {BaseComponent} from "@core/components/base.component";
import {CommonsService} from "@core/commons.service";
import {Directive} from "@angular/core";

@Directive()
export abstract class BaseDetailsComponent extends BaseComponent {

    makeServiceCallWithIdIfObjectNull(object, request, call?, error?) {
        if (CommonsService.isNullOrUndefined(object)) {
            if (!CommonsService.isNullOrUndefined(request)) {
                if (!CommonsService.isNullOrUndefined(call)) {
                    call(request);
                }
            } else {
                if (!CommonsService.isNullOrUndefined(error)) {
                    error(request);
                }
            }
        }
    }

}
