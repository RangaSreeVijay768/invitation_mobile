import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
  BasicVerifyUserWithVerificationCodeBeforeLoginModalContentComponent
} from '@basic/components/basic-verify-user-with-verification-code-before-login-modal/basic-verify-user-with-verification-code-before-login-modal-content/basic-verify-user-with-verification-code-before-login-modal-content.component';
import {Users} from '@core/core.models';
import MessageDelivery = Users.MessageDelivery;

@Component({
    selector: 'basic-verify-user-with-verification-code-before-login-modal',
    templateUrl: './basic-verify-user-with-verification-code-before-login-modal.component.html',
    styleUrls: ['./basic-verify-user-with-verification-code-before-login-modal.component.scss']
})
export class BasicVerifyUserWithVerificationCodeBeforeLoginModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    messageDelivery: MessageDelivery;


    openModal(messageDelivery?: MessageDelivery, params?) {
        console.log('message deliverd  ', messageDelivery);
        this.setModalData('messageDelivery', messageDelivery);
        super.open(BasicVerifyUserWithVerificationCodeBeforeLoginModalContentComponent, "badge-details-modal");
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
