import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
// import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'user-profiles-blasts-create-new-group-modal-content',
    templateUrl: './user-profiles-blasts-create-new-group-modal-content.component.html',
    styleUrls: ['./user-profiles-blasts-create-new-group-modal-content.component.scss']
})
export class UserProfilesBlastsCreateNewGroupModalContentComponent extends BaseModalContentComponent {

    constructor( injector: Injector) {
        super(injector);
    }

  displayMessage = 'Select type';

  Options = ['Email', 'Mobile', 'Whatsapp'];
  initializeComponent() {
  }


  changeMessage(selectedItem: string){
    this.displayMessage = selectedItem;
  }

}

