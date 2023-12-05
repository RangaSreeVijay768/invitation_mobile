import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'user-profiles-create-blast-list-item',
    templateUrl: './user-profiles-create-blast-list-item.component.html',
    styleUrls: ['./user-profiles-create-blast-list-item.component.scss']
})
export class UserProfilesCreateBlastListItemComponent extends BaseComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }



}

@Component({
    selector: 'user-profiles-create-blast-list-item-no-template',
    templateUrl: './user-profiles-create-blast-list-item-no-template.component.html',
    styleUrls: ['./user-profiles-create-blast-list-item.component.scss']
})
export class UserProfilesCreateBlastListItemNoTemplateComponent extends UserProfilesCreateBlastListItemComponent
{
}
