import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {FormComponent} from "@core/components/form.component";
import {DynamicFormControlModel} from "@ng-dynamic-forms/core";
import {
    USER_PROFILES_INVITE_TO_EVENT_SWIPER_SEARCH_EVENTS_FORM_LAYOUT, USER_PROFILES_INVITE_TO_EVENT_SWIPER_SEARCH_EVENTS_FORM_MODEL
} from '@user-profiles/user-profiles.form.models';


@Component({
    selector: 'user-profiles-blasts-invite-to-event-swiper-search-contact-form',
    templateUrl: './user-profiles-blasts-invite-to-event-swiper-search-contact-form.component.html',
    styleUrls: ['./user-profiles-blasts-invite-to-event-swiper-search-contact-form.component.scss']
})
export class UserProfilesBlastsInviteToEventSwiperSearchContactFormComponent extends FormComponent {

    constructor(injector: Injector) {
        super(injector);
    }
    formLayout = USER_PROFILES_INVITE_TO_EVENT_SWIPER_SEARCH_EVENTS_FORM_LAYOUT;

    initializeComponent() {
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return USER_PROFILES_INVITE_TO_EVENT_SWIPER_SEARCH_EVENTS_FORM_MODEL();
    }
}
