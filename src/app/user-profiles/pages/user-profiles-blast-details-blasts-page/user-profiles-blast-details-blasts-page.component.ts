import {Component, Injector, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {PageComponent} from "@core/components/page.component";
import {Blasts} from '@core/core.models';
import BlastList = Blasts.BlastList;

@Component({
    selector: 'user-profiles-blast-details-blasts-page',
    templateUrl: './user-profiles-blast-details-blasts-page.component.html',
    styleUrls: ['./user-profiles-blast-details-blasts-page.component.scss']
})
export class UserProfilesBlastDetailsBlastsPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    // blastList$: Observable<BlastList>;
    @Input()
    blastList: BlastList;
    initializeComponent() {
      // this.blastList$ = this.getRouterParameterFromParentObservable('blastList', 1);
      // this.blastList$.subscribe(value => {
      //   this.blastList = value;
      // });
    }

    protected readonly event = event;
}
