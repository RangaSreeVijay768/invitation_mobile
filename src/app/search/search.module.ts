import {NgModule} from '@angular/core';
import {CoreModule} from '@core/core.module';

import { SearchSearchEventInfosFormComponent } from './components/search-search-event-infos-form/search-search-event-infos-form.component';

@NgModule({
    declarations: [
      SearchSearchEventInfosFormComponent
  ],
    imports: [
        CoreModule
    ],
  exports: [
    SearchSearchEventInfosFormComponent

  ],
    // entryComponents:[
    //
    // ]
})

export class SearchModule {

}
