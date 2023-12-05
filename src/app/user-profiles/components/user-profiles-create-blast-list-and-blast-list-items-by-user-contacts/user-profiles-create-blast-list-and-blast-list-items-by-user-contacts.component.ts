import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {Blasts, Users} from '@core/core.models';
import CreateBlastListAndBlastListItemsByUserContacts = BlastsRequests.CreateBlastListAndBlastListItemsByUserContacts;
import BlastList = Blasts.BlastList;
import UserContact = Users.UserContact;
import {BlastsService} from '../../../blasts/blasts.service';
import {BlastsRequests} from '../../../blasts/blasts.models';

@Component({
    selector: 'user-profiles-create-blast-list-and-blast-list-items-by-user-contacts',
    templateUrl: './user-profiles-create-blast-list-and-blast-list-items-by-user-contacts.component.html',
    styleUrls: ['./user-profiles-create-blast-list-and-blast-list-items-by-user-contacts.component.scss']
})
export class UserProfilesCreateBlastListAndBlastListItemsByUserContactsComponent extends BaseComponent {

    constructor(protected blastService: BlastsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    @Input()
    userContacts: Users.UserContact[] = [];

    blastList: BlastList;

    @Output()
    blastListCreated = new EventEmitter<BlastList>();

    createRequestData(user_contacts?: UserContact[]): CreateBlastListAndBlastListItemsByUserContacts.Request {
        user_contacts = CommonsService.convertToArray(user_contacts || this.userContacts);
        const user_contact_ids = user_contacts.map(user_contact => user_contact.user_contact_id);
        const request = new CreateBlastListAndBlastListItemsByUserContacts.Request();
        request.user_contacts = user_contact_ids;
        return request;
    }

    create_blast_list_and_blast_list_item_by_user_contacts_subscription$: Subscription;

    createBlastListAndBlastListItemsByUserContacts = (request: CreateBlastListAndBlastListItemsByUserContacts.Request) => {
        this.create_blast_list_and_blast_list_item_by_user_contacts_subscription$ =
            this.blastService.createBlastListAndBlastListItemsByUserContacts(request)
                .pipe(CommonsService.deserializeMap(CreateBlastListAndBlastListItemsByUserContacts.Response))
                .subscribe(value => {
                    this.blastList = value;
                    this.blastListCreated.emit(value);
                });
    };


}
