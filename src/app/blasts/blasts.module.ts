import {NgModule} from "@angular/core";
import {CoreModule} from "@core/core.module";
import {
    BlastsGetBlastListsByUserAccountComponent,
    BlastsGetBlastListsByUserAccountNoTemplateComponent, BlastsGetBlastListsByUserAccountScrollingComponent
} from './components/blasts-get-blast-lists-by-user-account/blasts-get-blast-lists-by-user-account.component';
import {
  BlastsGetBlastListItemsByBlastListComponent,
  BlastsGetBlastListItemsByBlastListNoTemplateComponent
} from './components/blasts-get-blast-list-items-by-blast-list/blasts-get-blast-list-items-by-blast-list.component';
import {
  BlastsGetAllBlastPackagesComponent,
  BlastsGetAllBlastPackagesNoTemplateComponent
} from './components/blasts-get-all-blast-packages/blasts-get-all-blast-packages.component';
import {
    BlastsCopyBlastListComponent,
    BlastsCopyBlastListNoTemplateComponent
} from './components/blasts-copy-blast-list/blasts-copy-blast-list.component';
import { BlastsSearchBlastListsFormComponent } from './components/blasts-search-blast-lists-form/blasts-search-blast-lists-form.component';
import {GetBlastListResolver} from './blasts.resolvers';
import { BlastsBlastsFilterModalComponent } from './components/blasts-blasts-filter-modal/blasts-blasts-filter-modal.component';
import { BalstsBlastsFilterModalContentComponent } from './components/blasts-blasts-filter-modal/balsts-blasts-filter-modal-content/balsts-blasts-filter-modal-content.component';
import {ImagesModule} from '@images/images.module';
@NgModule({
    declarations: [


        BlastsGetBlastListsByUserAccountComponent,
        BlastsGetBlastListsByUserAccountNoTemplateComponent,
        BlastsGetBlastListItemsByBlastListComponent,
        BlastsGetBlastListItemsByBlastListNoTemplateComponent,
        BlastsGetAllBlastPackagesComponent,
        BlastsGetAllBlastPackagesNoTemplateComponent,
        BlastsCopyBlastListComponent,
        BlastsCopyBlastListNoTemplateComponent,
        BlastsSearchBlastListsFormComponent,
        BlastsGetBlastListsByUserAccountScrollingComponent,
        BlastsBlastsFilterModalComponent,
        BalstsBlastsFilterModalContentComponent,
    ],
  imports: [
    CoreModule,
      ImagesModule
  ],
    exports: [
        BlastsGetBlastListsByUserAccountNoTemplateComponent,
        BlastsGetBlastListItemsByBlastListNoTemplateComponent,
        BlastsGetAllBlastPackagesNoTemplateComponent,
        BlastsCopyBlastListNoTemplateComponent,
        BlastsSearchBlastListsFormComponent,
        BlastsGetBlastListsByUserAccountScrollingComponent
    ],
  providers: [
    GetBlastListResolver,
  ]
  // entryComponents:[
  //
  // ]
})

export class BlastsModule {
}
