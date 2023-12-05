import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import GetAllBlastPackages = BlastsRequests.GetAllBlastPackages;
import {Blasts} from '@core/core.models';
import BlastPackage = Blasts.BlastPackage;
import {SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';
import {BlastsRequests} from '../../blasts.models';
import {BlastsService} from '../../blasts.service';

@Component({
    selector: 'blasts-get-all-blast-packages',
    templateUrl: './blasts-get-all-blast-packages.component.html',
    styleUrls: ['./blasts-get-all-blast-packages.component.scss']
})
export class BlastsGetAllBlastPackagesComponent extends SortedPaginatedBaseComponent {

    constructor(protected blastsService: BlastsService, injector: Injector) {
        super(injector);
    }

    blast_packages: BlastPackage[];

    @Output()
    blastPackagesReceived = new EventEmitter<BlastPackage[]>();

    get_all_blast_packages_subscription$: Subscription;

    initializeComponent() {
      this.getAllBlastPackages(this.createRequestData());
    }

    createRequestData(first?: number, count?: number, column_name?: string, column_order?: string): GetAllBlastPackages.Request {
      let request = new GetAllBlastPackages.Request();
      request = this.setLimits(request, first, count);
      request = this.setColumnOrders(request, column_name, column_order);
      return request;
    }

    getAllBlastPackages(request: GetAllBlastPackages.Request) {
      this.get_all_blast_packages_subscription$ = this.blastsService.getAllBlastPackages(request)
        .pipe(CommonsService.deserializeMap(GetAllBlastPackages.Response))
        .subscribe(value => {
          this.blast_packages = value;
          this.blastPackagesReceived.emit(value);
          console.log(this.blast_packages);
        });
    }

}

@Component({
    selector: 'blasts-get-all-blast-packages-no-template',
    templateUrl: './blasts-get-all-blast-packages-no-template.component.html',
    styleUrls: ['./blasts-get-all-blast-packages.component.scss']
})
export class BlastsGetAllBlastPackagesNoTemplateComponent extends BlastsGetAllBlastPackagesComponent
{
}
