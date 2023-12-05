import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';
import {Blasts, Users} from '@core/core.models';
import {BaseInfiniteScrollComponent} from '@core/components/base-infinite-scroll.component';
import UserAccount = Users.UserAccount;
import BlastList = Blasts.BlastList;
import GetBlastListsByUserAccount = BlastsRequests.GetBlastListsByUserAccount;
import {BlastsRequests} from '../../blasts.models';
import {BlastsService} from '../../blasts.service';

@Component({
    selector: 'blasts-get-blast-lists-by-user-account',
    templateUrl: './blasts-get-blast-lists-by-user-account.component.html',
    styleUrls: ['./blasts-get-blast-lists-by-user-account.component.scss']
})
export class BlastsGetBlastListsByUserAccountComponent extends SortedPaginatedBaseComponent {

    constructor(protected blastsService: BlastsService, injector: Injector) {
        super(injector);
    }

    @Input()
    userAccount: UserAccount;
    @Input()
    blastListType: string;
    @Input()
    filterBlastListName: string;
    @Input()
    blastListCreationType: string;

    blastLists: BlastList[];

    @Output()
    blastListsReceived = new EventEmitter<BlastList[]>();


    get_blast_lists_by_user_account_subscription$: Subscription;

    initializeComponent() {
        this.getBlastListsByUserAccount(this.createRequestData());
    }

    // tslint:disable-next-line:variable-name
    createRequestData(filter_blast_list_name?: string, blast_list_type?: string, first?: number, count?: number,
                      column_name?: string,
                      column_order?: string): GetBlastListsByUserAccount.Request {
        let request = new GetBlastListsByUserAccount.Request();
        request.user_account = this.userAccount.user_account_id;
        request.filter_blast_list_name = filter_blast_list_name;
        request.blast_list_creation_type = this.blastListCreationType;
        request.blast_list_type = blast_list_type || this.blastListType;
        request = this.setLimits(request, first, count);
        request = this.setColumnOrders(request, column_name, column_order);
        return request;
    }

    getBlastListsByUserAccount(request: GetBlastListsByUserAccount.Request) {
        // console.log(request,this.userAccount);
        this.get_blast_lists_by_user_account_subscription$ = this.blastsService.getBlastListsByUserAccount(request)
            .pipe(CommonsService.deserializeMap(GetBlastListsByUserAccount.Response))
            .subscribe(value => {
                this.blastLists = value;
                this.blastListsReceived.emit(value);
            });
    }
}

@Component({
    selector: 'blasts-get-blast-lists-by-user-account-no-template',
    templateUrl: './blasts-get-blast-lists-by-user-account-no-template.component.html',
    styleUrls: ['./blasts-get-blast-lists-by-user-account.component.scss']
})
export class BlastsGetBlastListsByUserAccountNoTemplateComponent extends BlastsGetBlastListsByUserAccountComponent {
}

@Component({
    selector: 'blasts-get-blast-lists-by-user-account-scrolling',
    templateUrl: './blasts-get-blast-lists-by-user-account-scrolling.component.html',
    styleUrls: ['./blasts-get-blast-lists-by-user-account.component.scss']
})
export class BlastsGetBlastListsByUserAccountScrollingComponent
    extends BaseInfiniteScrollComponent<BlastsGetBlastListsByUserAccountComponent> {

    filter_type: string;

    @Input()
    filterBlastListName: string;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    show() {
        console.log(this.filter_type);
    }

    performScrolling() {
        this.scrolling_component.getBlastListsByUserAccount(
            this.scrolling_component.createRequestData(this.filterBlastListName, this.filter_type, this.currentCount,
                this.numberOfItems));
    }

    updateFilterBlastListName(filter_blast_list_name: string) {
        this.filterBlastListName = filter_blast_list_name;
        this.scrolling_component.filterBlastListName = filter_blast_list_name;
        this.resetScrolling();
        this.onScroll();
    }

    refreshScrolling() {
        this.resetScrolling();
        this.onScroll();
    }
}
