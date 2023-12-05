import {Component, Injector, Input} from '@angular/core';
import {Observable} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {Blasts} from "@core/core.models";
import BlastListItems = Blasts.BlastListItems;
import BlastList = Blasts.BlastList;

@Component({
    selector: 'user-profiles-blast-details-contacts-page',
    templateUrl: './user-profiles-blast-details-contacts-page.component.html',
    styleUrls: ['./user-profiles-blast-details-contacts-page.component.scss']
})
export class UserProfilesBlastDetailsContactsPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    // blastList$: Observable<BlastList>;
    @Input()
    blastList: BlastList;

    blastListItems: BlastListItems[];

    initializeComponent() {
        // this.blastList$ = this.getRouterParameterFromParentObservable('blastList', 1);
        // this.blastList$.subscribe(value => {
        //     this.blastList = value;
        // });
    }
}

