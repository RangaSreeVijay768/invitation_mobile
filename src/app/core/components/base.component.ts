import {Directive, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '@core/auth.service';
import {Users} from '@core/core.models';
import {NotificationsService} from '@core/notifications.service';
import {NavController, Platform, PopoverController} from '@ionic/angular';
import {NgxGlobalEventsService} from '@node-modules/ngx-global-events';
import {CommonsService} from '@core/commons.service';
import {Angulartics2} from 'angulartics2';
import UserAccount = Users.UserAccount;

@Directive()
export abstract class BaseComponent implements OnInit {

    public popoverCtrl: PopoverController;
    loggedAccount: UserAccount;
    public ionicPlatform: Platform;

    @Output()
    platformReady = new EventEmitter<string>();
    @Input()
    subscribedEvents: string | string[];

    public notificationsService: NotificationsService;
    protected router: Router;
    protected authService: AuthService;
    protected navCtrl: NavController;
    protected ngxGlobalEventsService: NgxGlobalEventsService;
    protected angulartics2: Angulartics2;

    private refresh_component: boolean;

    constructor(injector: Injector) {
        this.router = injector.get(Router);
        this.authService = injector.get(AuthService);
        this.notificationsService = injector.get(NotificationsService);
        this.loggedAccount = this.authService.loggedAccount;
        this.navCtrl = injector.get(NavController);
        this.popoverCtrl = injector.get(PopoverController);
        this.ionicPlatform = injector.get(Platform);
        this.ngxGlobalEventsService = injector.get(NgxGlobalEventsService);
        this.angulartics2 = injector.get(Angulartics2);
    }

    ngOnInit() {
        this.initializeComponent();
        const events = CommonsService.convertToArray(this.subscribedEvents);
        if (events.length) {
            events.forEach((event) => {
                this.ngxGlobalEventsService.get(event).subscribe(value => {
                    this.refreshComponent();
                });
            });
        }
    }

    abstract initializeComponent();

    refreshComponent() {
        this.initializeComponent();
    }

    emitEvent(name: string) {
        this.ngxGlobalEventsService.emit(name);
    }

    trackEvent(category?: string, action?: string, label?: string, value?: string | number) {
        this.angulartics2.eventTrack.next({
            action,
            properties: {
                category,
                label,
                value
            },
        });
    }

    ionViewDidEnter() {
        this.refreshComponent();
    }
}
