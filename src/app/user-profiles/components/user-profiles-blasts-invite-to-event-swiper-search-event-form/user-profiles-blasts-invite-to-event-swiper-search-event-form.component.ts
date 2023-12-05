import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
// import {debounceTime} from "rxjs";
import {FormComponent} from "@core/components/form.component";
import {DynamicFormControlModel} from "@ng-dynamic-forms/core";
import {
    USER_PROFILES_INVITE_TO_EVENT_SWIPER_SEARCH_CONTACTS_FORM_LAYOUT, USER_PROFILES_INVITE_TO_EVENT_SWIPER_SEARCH_CONTACTS_FORM_MODEL
} from '@user-profiles/user-profiles.form.models';

@Component({
    selector: 'user-profiles-blasts-invite-to-event-swiper-search-event-form',
    templateUrl: './user-profiles-blasts-invite-to-event-swiper-search-event-form.component.html',
    styleUrls: ['./user-profiles-blasts-invite-to-event-swiper-search-event-form.component.scss']
})
export class UserProfilesBlastsInviteToEventSwiperSearchEventFormComponent extends FormComponent {

    @Input()
    debounceTime: number;

    @Output()
    searchTermCreated = new EventEmitter<string>();

    constructor(injector: Injector) {
        super(injector);
    }

    formLayout = USER_PROFILES_INVITE_TO_EVENT_SWIPER_SEARCH_CONTACTS_FORM_LAYOUT;

    initializeComponent() {
    }

    afterInitializeComponent() {
        // this.getInputModel('search_term').valueChanges.pipe(debounceTime(this.debounceTime || 300))
        //     .subscribe(value => {
        //         this.searchTermCreated.emit(<string>value);
        //     });
    }

    getFormModel(): DynamicFormControlModel[] {
        return USER_PROFILES_INVITE_TO_EVENT_SWIPER_SEARCH_CONTACTS_FORM_MODEL();
    }
}
