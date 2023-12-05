import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {Subscription} from "rxjs";
import {ModalResult} from '@core/app.models';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import StartEventBlast = BlastsRequests.StartEventBlast;
import {BlastsService} from '../../../blasts/blasts.service';
import {BlastsRequests} from '../../../blasts/blasts.models';
import {START_EVENT_BLAST_FORM_LAYOUT, START_EVENT_BLAST_FORM_MODEL} from '@user-profiles/user-profiles.form.models';

@Component({
    selector: 'user-profiles-start-event-blast',
    templateUrl: './user-profiles-start-event-blast.component.html',
    styleUrls: ['./user-profiles-start-event-blast.component.scss']
})
export class UserProfilesStartEventBlastComponent extends FormComponent {

    constructor(protected blastService: BlastsService, injector: Injector) {
        super(injector);
    }

    getFormModel(): DynamicFormControlModel[] {
        return START_EVENT_BLAST_FORM_MODEL();
    }

    formLayout = START_EVENT_BLAST_FORM_LAYOUT;

    @Output()
    closeResult = new EventEmitter<ModalResult>();

    @Input()
    event_blast_id: string;

    start_event_blast_subscription$: Subscription;

    @Output()
    eventBlastStarted = new EventEmitter<boolean>();

    initializeComponent() {
    }

    createRequestData(): StartEventBlast.Request {
        const request = new StartEventBlast.Request();
        request.event_blast = this.event_blast_id;
        request.message = this.getInputModelValueAsString('message');
        console.log(request);
        return request;
    }

    startEventBlast = (request: StartEventBlast.Request) => {
        this.start_event_blast_subscription$ = this.blastService.startEventBlast(request)
            .subscribe(value => {
                console.log('in start event blast');
                this.eventBlastStarted.emit(true);
            });
    };

    afterInitializeComponent() {
        this.getInputModel('message').value =
            'Hey, As we have decided to hold a party on Christmas, it would not be possible without you. You are cordially invited to my party and make the party convivial.';
    }

}

@Component({
    selector: 'user-profiles-start-event-blast-no-template',
    templateUrl: './user-profiles-start-event-blast-no-template.component.html',
    styleUrls: ['./user-profiles-start-event-blast.component.scss']
})
export class UserProfilesStartEventBlastNoTemplateComponent extends UserProfilesStartEventBlastComponent {
}
