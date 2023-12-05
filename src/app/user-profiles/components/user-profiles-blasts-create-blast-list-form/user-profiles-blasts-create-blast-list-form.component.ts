import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import CreateBlastList = BlastsRequests.CreateBlastList;

import {EVENTS_CREATE_EVENT_FORM_LAYOUT} from '@events/events.form.models';
import {Images} from '@core/core.models';
import UploadedFile = Images.UploadedFile;
import {BlastsService} from '../../../blasts/blasts.service';
import {CREATE_BLAST_LIST_FORM_MODEL, USER_PROFILES_BLASTS_CREATE_BLAST_LIST_FORM_LAYOUT} from '@user-profiles/user-profiles.form.models';
import {BlastsRequests} from '../../../blasts/blasts.models';

@Component({
    selector: 'user-profiles-blasts-create-blast-list-form',
    templateUrl: './user-profiles-blasts-create-blast-list-form.component.html',
    styleUrls: ['./user-profiles-blasts-create-blast-list-form.component.scss']
})
export class UserProfilesBlastsCreateBlastListFormComponent extends FormComponent {

    constructor(protected blastsService: BlastsService, injector: Injector) {
        super(injector);
    }

    uploaded_file: UploadedFile;
    event_id: string;

    eventCreated = new EventEmitter<string>();

    contactTypeList = ['Email', 'Text', 'Whatsapp'];
    currentContactType = 'Select contact type';

    changeContactType(selected) {
        this.currentContactType = selected;
    }

    @Output()
    blastListCreated = new EventEmitter<boolean>();

    create_blast_list_subscription$: Subscription;

    formLayout = USER_PROFILES_BLASTS_CREATE_BLAST_LIST_FORM_LAYOUT;

    initializeComponent() {
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return CREATE_BLAST_LIST_FORM_MODEL();
    }

    createRequestData(): CreateBlastList.Request {
        const request = new CreateBlastList.Request();
        request.blast_list_name = this.getInputModelValueAsString('blast_list_name');
        request.blast_list_type = this.getInputModelValueAsString('blast_list_type');
        request.description = this.getInputModelValueAsString('description');
        return request;
    }

    createBlastList = (request: CreateBlastList.Request) => {
        this.create_blast_list_subscription$ = this.blastsService.createBlastList(request)
            .subscribe(value => {
                this.blastListCreated.emit(true);
            });
    };
}
