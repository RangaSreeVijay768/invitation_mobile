import {Component, EventEmitter, Injector, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {UsersRequests} from '@users/users.models';
import {UsersService} from '@users/users.service';
import {Users} from '@core/core.models';
import {SortedPaginatedBaseComponent} from "@core/components/paginated-base.component";
import GetAllUserContacts = UsersRequests.GetAllUserContacts;
import UserContact = Users.UserContact;

@Component({
    selector: 'user-profiles-get-all-user-contacts',
    templateUrl: './user-profiles-get-all-user-contacts.component.html',
    styleUrls: ['./user-profiles-get-all-user-contacts.component.scss']
})
export class UserProfilesGetAllUserContactsComponent extends SortedPaginatedBaseComponent {

    constructor(protected userService: UsersService, injector: Injector) {
        super(injector);
    }

    @Output()
    userContactsRecieved = new EventEmitter<UserContact[]>;

    @Output()
    userContacts = new EventEmitter<UserContact[]>;

    initializeComponent() {
        this.getAllUserContacts(this.createRequestData());
    }

    createRequestData(first?: number, count?: number, column_name?: string,
                      column_order?: string): GetAllUserContacts.Request {
        let request = new GetAllUserContacts.Request();
        request = this.setLimits(request, first, count);
        request = this.setColumnOrders(request, column_name, column_order);
        return request;
    }

    get_all_user_contacts_subscription$: Subscription;

    getAllUserContacts(request: GetAllUserContacts.Request) {
        this.get_all_user_contacts_subscription$ = this.userService.getAllUserContacts(request)
            .pipe(CommonsService.deserializeMap(GetAllUserContacts.Response))
            .subscribe(value => {
                this.userContacts = value;
                this.userContactsRecieved.emit(value);
            });
    }

}

@Component({
    selector: 'user-profiles-get-all-user-contacts-no-template',
    templateUrl: './user-profiles-get-all-user-contacts-no-template.component.html',
    styleUrls: ['./user-profiles-get-all-user-contacts.component.scss']
})
export class UserProfilesGetAllUserContactsNoTemplateComponent extends UserProfilesGetAllUserContactsComponent {
}
