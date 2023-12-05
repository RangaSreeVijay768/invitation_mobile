import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {FormComponent} from "@core/components/form.component";
import {DynamicFormControlEvent, DynamicFormControlModel} from "@ng-dynamic-forms/core";

import CreateBlastListItem = BlastsRequests.CreateBlastListItem;
import {ModalResult} from '@core/app.models';
import {
    CREATE_BLAST_LIST_ITEM_FORM_MODEL, USER_PROFILES_CREATE_BLAST_LIST_ITEM_FORM_LAYOUT
} from '@user-profiles/user-profiles.form.models';
import {BlastsService} from '../../../blasts/blasts.service';
import {BlastsRequests} from '../../../blasts/blasts.models';

@Component({
    selector: 'user-profiles-create-blast-item-form',
    templateUrl: './user-profiles-create-blast-item-form.component.html',
    styleUrls: ['./user-profiles-create-blast-item-form.component.scss']
})
export class UserProfilesCreateBlastItemFormComponent extends FormComponent {

    constructor(protected blastService: BlastsService, injector: Injector) {
        super(injector);
    }

    @Input()
    name: string;

    @Input()
    blastListId: string;

    @Input()
    blastListItemType:string;


    @Output()
    blastListItemCreated = new EventEmitter<boolean>();

    create_blast_list_item_subscription$: Subscription;

    formLayout = USER_PROFILES_CREATE_BLAST_LIST_ITEM_FORM_LAYOUT;

    initializeComponent() {
      console.log('name ', this.blastListId);
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return CREATE_BLAST_LIST_ITEM_FORM_MODEL();
    }


  createRequestData(): CreateBlastListItem.Request {
    const request = new CreateBlastListItem.Request();
    request.blast_list = this.blastListId;
    request.blast_list_item_type = this.blastListItemType;
    request.display_name = this.getInputModelValueAsString('display_name');
    request.email_id = this.getInputModelValueAsString('email_id');
    request.phone_number = this.getInputModelValueAsString('phone_number');
    // request.whatsapp_number = '1234567890';
    return request;
  }

  createBlastListItem = (request: CreateBlastListItem.Request) => {
    this.create_blast_list_item_subscription$ = this.blastService.createBlastListItem(request)
      .subscribe(value => {
        this.blastListItemCreated.emit(true);
      });
  };


}
