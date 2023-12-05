import {Component, Injector} from "@angular/core";
import {Observable} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {Blasts} from "@core/core.models";
import BlastListItems = Blasts.BlastListItems;
import BlastList = Blasts.BlastList;
import {EventsConstants} from '@events/events.constants';

@Component({
    selector: 'user-profiles-blast-details-page',
    templateUrl: './user-profiles-blast-details-page.component.html',
    styleUrls: ['./user-profiles-blast-details-page.component.scss']
})
export class UserProfilesBlastDetailsPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

  // blastLists: BlastList[];


  selected_option = '';
  options = EventsConstants.BLAST_OPTIONS;

    blastList$: Observable<BlastList>;
    blastList: BlastList;
    blastListItems: BlastListItems[];

    isSlide: boolean = false;

    segment:string;


    initializeComponent() {
      this.blastList$ = this.getRouterParameterObservable('blastList');
      this.blastList$.subscribe(value => {
        this.blastList = value;
        console.log('sg bl', this.blastList);
      });
        this.segment='All Contacts';
    }


}
