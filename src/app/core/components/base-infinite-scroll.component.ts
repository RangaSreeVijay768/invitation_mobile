import {BaseComponent} from '@core/components/base.component';
import {AfterViewInit, Directive, Injector, Input, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {IonInfiniteScroll} from '@ionic/angular';
import uniqBy from 'lodash/uniqBy';

@Directive()
export abstract class BaseInfiniteScrollComponent<T> extends BaseComponent implements AfterViewInit {

    public static DEFAULT_SCROLL_THROTTLE = 50;
    public static DEFAULT_NUMBER_OF_ITEMS = 6;

    public DEFAULT_LOADING_SPINNER = 'bubbles';
    public DEFAULT_LOADING_TEXT = 'Loading more data...';

    public DEFAULT_LOADING_THRESHOLD = '20%';

    @Input()
    items = [];
    @Input()
    currentCount: number;
    @Input()
    numberOfItems: number;
    @Input()
    disableScroll: boolean;
    @Input()
    itemsFinished: boolean;
    @Input()
    removeDuplicate: Function;
    @Input()
    scrollThrottle: number;
    @Input()
    offset: number;

    @ViewChildren('component')
    components: QueryList<T>;
    @ViewChild(IonInfiniteScroll, {static: true})
    infiniteScroll: IonInfiniteScroll;

    scrolling_component: T;

    items_unique: any[];


    constructor(injector: Injector) {
        super(injector);
        this.items = this.items || [];
        this.currentCount = this.items.length;
        this.numberOfItems = this.numberOfItems || BaseInfiniteScrollComponent.DEFAULT_NUMBER_OF_ITEMS;
        this.scrollThrottle = this.scrollThrottle || BaseInfiniteScrollComponent.DEFAULT_SCROLL_THROTTLE;
    }

    ngAfterViewInit(): void {
        this.components.changes.subscribe((comps: QueryList<T>) => {
            this.scrolling_component = comps.first;
        });
        this.scrolling_component = this.components.first;
    }

    // TODO: Make this abstract once everything is done
    performScrolling() {
    }

    onScroll() {
        if (!this.itemsFinished) {
            this.performScrolling();
        }
    }

    resetScrolling() {
        this.items = [];
        this.items_unique = [];
        this.currentCount = 0;
        this.disableScroll = false;
        this.itemsFinished = false;
        if (this.scrolling_component) {
            this.scrolling_component['first'] = 0;
        }
    }

    refreshScrolling() {
        this.resetScrolling();
        if (this.scrolling_component) {
            // @ts-ignore
            this.scrolling_component.refreshComponent();
        }
    }

    addItems(itemResults) {
        if (itemResults && itemResults.length > 0) {
            this.items = this.items.concat(itemResults);
            if (!CommonsService.isNullOrUndefined(this.removeDuplicate) && this.items.length > 0) {
                this.items_unique = uniqBy(this.items, value => this.removeDuplicate(value));
            }
            this.currentCount = this.items.length;
            this.disableScroll = false;
            this.infiniteScroll.complete();
        } else {
            this.itemsFinished = true;
            this.disableScroll = true;
            if (this.infiniteScroll) {
                this.infiniteScroll.complete();
            }
        }
        // this.onScroll();
    }

    removeItemAtIndex(index: number) {
        this.items.splice(index, 1);
        this.currentCount = this.items.length;
        this.disableScroll = false;
        this.performScrolling();
    }

}


@Directive()
export abstract class AbstractInfiniteScrollComponent<T, B> extends BaseComponent implements AfterViewInit {

    public static DEFAULT_SCROLL_THROTTLE = 500;
    public DEFAULT_LOADING_SPINNER = 'bubbles';
    public DEFAULT_LOADING_TEXT = 'Loading more data...';
    public DEFAULT_LOADING_THRESHOLD = '50px';

    @Input()
    items: B[];
    @Input()
    disableScroll: boolean;
    @Input()
    numberOfItems: number;

    @Input()
    itemsFinished: boolean;
    @Input()
    removeDuplicate: Function;
    @Input()
    scrollThrottle: number;

    @ViewChildren('component')
    components: QueryList<T>;

    @ViewChild(IonInfiniteScroll)
    infiniteScroll: IonInfiniteScroll;

    scrolling_component: T;

    items_unique: any[];

    constructor(injector: Injector) {
        super(injector);
        this.items = this.items || [];
        this.scrollThrottle = this.scrollThrottle || AbstractInfiniteScrollComponent.DEFAULT_SCROLL_THROTTLE;
    }

    ngAfterViewInit(): void {
        this.components.changes.subscribe((comps: QueryList<T>) => {
            this.scrolling_component = comps.first;
        });
        this.scrolling_component = this.components.first;
    }

    abstract performScrolling() ;

    onScroll($event?) {
        if (!this.itemsFinished && !this.disableScroll) {
            this.disableScroll = true;
            this.performScrolling();
        } else {
            this.infiniteScroll.complete();
        }
    }
}
