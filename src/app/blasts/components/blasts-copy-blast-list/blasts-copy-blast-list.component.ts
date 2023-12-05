import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {Blasts} from '@core/core.models';
import BlastList = Blasts.BlastList;
import CopyBlastList = BlastsRequests.CopyBlastList;
import {BlastsRequests} from '../../blasts.models';
import {BlastsService} from '../../blasts.service';

@Component({
  selector: 'blasts-copy-blast-list',
  templateUrl: './blasts-copy-blast-list.component.html',
  styleUrls: ['./blasts-copy-blast-list.component.scss']
})
export class BlastsCopyBlastListComponent extends BaseComponent {

  @Input()
  blastList: BlastList;
  @Input()
  appendCopyTag: boolean;
  @Input()
  copyBlastListItems: boolean;

  @Output()
  blastListCopied = new EventEmitter<BlastList>();

  constructor(protected blastsService: BlastsService, injector: Injector) {
    super(injector);
  }

  initializeComponent() {
  }

  createRequestData(blast_list_id?: string, copy_blast_list_items?: boolean, append_copy_tag?: boolean): CopyBlastList.Request {
    const request = new CopyBlastList.Request();

    request.blast_list = blast_list_id || this.blastList.blast_list_id;
    request.copy_blast_list_items = CommonsService.isNullOrUndefined(copy_blast_list_items) ? this.copyBlastListItems : copy_blast_list_items;
    request.append_copy_tag = CommonsService.isNullOrUndefined(append_copy_tag) ? this.appendCopyTag : append_copy_tag;
    return request;
  }

  copy_blast_list_subscription$: Subscription;

  copyBlastList(request: CopyBlastList.Request) {
    this.copy_blast_list_subscription$ = this.blastsService.copyBlastList(request)
      .pipe(CommonsService.deserializeMap(CopyBlastList.Response))
      .subscribe(value => {
        this.blastListCopied.emit(value);
      });
  }
}

@Component({
  selector: 'blasts-copy-blast-list-no-template',
  templateUrl: './blasts-copy-blast-list-no-template.component.html',
  styleUrls: ['./blasts-copy-blast-list.component.scss']
})
export class BlastsCopyBlastListNoTemplateComponent extends BlastsCopyBlastListComponent {
}
