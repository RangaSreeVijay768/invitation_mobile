import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {Blasts} from '@core/core.models';
import GetBlastListItemsByBlastList = BlastsRequests.GetBlastListItemsByBlastList;
import BlastListItems = Blasts.BlastListItems;
import BlastList = Blasts.BlastList;
import {SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';
import {BlastsRequests} from '../../blasts.models';
import {BlastsService} from '../../blasts.service';

@Component({
    selector: 'blasts-get-blast-list-items-by-blast-list',
    templateUrl: './blasts-get-blast-list-items-by-blast-list.component.html',
    styleUrls: ['./blasts-get-blast-list-items-by-blast-list.component.scss']
})
export class BlastsGetBlastListItemsByBlastListComponent extends SortedPaginatedBaseComponent {

  constructor(protected blastsService: BlastsService, injector: Injector) {
    super(injector);
  }

  @Input()
  blastList: BlastList;

  blastListItems: BlastListItems[];

  @Output()
  blastListsItemsReceived = new EventEmitter<BlastListItems[]>();


  get_blast_list_items_by_blast_list_subscription$: Subscription;

  initializeComponent() {
    this.getBlastListItemsByBlastList(this.createRequestData());
  }

  // tslint:disable-next-line:variable-name
  createRequestData(blast_list_id?: string): GetBlastListItemsByBlastList.Request {
      console.log("this is"+this.blastList.blast_list_id);
    const request = new GetBlastListItemsByBlastList.Request();
    request.blast_list_id = this.blastList.blast_list_id || blast_list_id;
    return request;
  }

  getBlastListItemsByBlastList(request: GetBlastListItemsByBlastList.Request) {
    this.get_blast_list_items_by_blast_list_subscription$ = this.blastsService.getBlastListItemsByBlastList(request)
      .pipe(CommonsService.deserializeMap(GetBlastListItemsByBlastList.Response))
      .subscribe(value => {
        console.log(value);
        this.blastListItems = value;
        this.blastListsItemsReceived.emit(value);
      });
  }

}

@Component({
    selector: 'blasts-get-blast-list-items-by-blast-list-no-template',
    templateUrl: './blasts-get-blast-list-items-by-blast-list-no-template.component.html',
    styleUrls: ['./blasts-get-blast-list-items-by-blast-list.component.scss']
})
export class BlastsGetBlastListItemsByBlastListNoTemplateComponent extends BlastsGetBlastListItemsByBlastListComponent
{
}
