import {BaseComponent} from '@core/components/base.component';
import {Component, ElementRef, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import Swiper from 'swiper';
import {Blasts, Core, Events} from '@core/core.models';
import Event = Events.Event;
import BlastListItems = Blasts.BlastListItems;
import BlastList = Blasts.BlastList;
import EventBlast = Blasts.EventBlast;
import {CoreSwiperSlider} from '@core/components/core-swiper-slider';
import SlideInfo = Core.SlideInfo;

@Component({
    selector: 'user-profiles-blasts-invite-to-event-swiper',
    templateUrl: './user-profiles-blasts-invite-to-event-swiper.component.html',
    styleUrls: ['./user-profiles-blasts-invite-to-event-swiper.component.scss']
})
export class UserProfilesBlastsInviteToEventSwiperComponent extends BaseComponent {

    @ViewChild('swiper')
    swiperRef: ElementRef | undefined;

    swiper: Swiper;

    @Input()
    events: Event[];

    @Input()
    blastList: BlastList;

    @Output()
    eventBlastStarted = new EventEmitter<string>();

    @Output()
    closeModalReceived = new EventEmitter<string>();


    event_blast_id: string;

    event_blast: EventBlast;

    blast_list_item: BlastListItems[] = [];


    current_time = CommonsService.getCurrentTimeAsDateTime();

    SLIDES = {
        'SELECT_EVENT_SLIDE': new SlideInfo('SELECT_EVENT_SLIDE', 0),
        'SELECT_CONTACT_SLIDE': new SlideInfo('SELECT_CONTACT_SLIDE', 1),
        'SEND_INVITATION_SLIDE': new SlideInfo('SEND_INVITATION_SLIDE', 2),
    };
    constructor(injector: Injector) {
        super(injector);
    }

    currentSlide = 0;



    selectedEvent: Event;


    blastListItems: BlastListItems[] = [];

    print() {
        console.log('these', this.blastListItems);
    }


    initializeComponent() {
        console.log('these lll', this.events);

    }


    swiperReady(event: any) {
        this.swiper = event.detail[0];
    }

    slideNext() {
        this.swiper.slideNext();
        this.currentSlide+=1;
        console.log(this.currentSlide);
    }

    closeModal(){
        this.closeModalReceived.emit("SUCCESS");
    }

    selectAllItems(blast_list_items: BlastListItems[]) {
        this.blast_list_item = this.blast_list_item.concat(blast_list_items);
    }

    selected_blast_list_item: BlastListItems[] = [];

    selected_all_contacts_from_blast_list = 'NO';

    handleBlastListItemCheckBoxEvent(event: any, request_item: BlastListItems) {
        if (event.target.checked) {
            this.addToSelectedContactsFromBlastList(request_item);
        } else {
            this.removeUserContactFromBlastList(request_item);
        }
    }

    handleSelectAllContactsFromBlastList() {
        console.log('in selecting blast list');
        if (this.selected_all_contacts_from_blast_list === 'NO') {
            console.log('present is NO');
            this.selectAllContactsFromBlastList(this.blastListItems);
            this.selected_all_contacts_from_blast_list = 'ADD';
        } else {
            this.selected_blast_list_item = [];
            this.selected_all_contacts_from_blast_list = 'NO';
        }
    }

    selectAllContactsFromBlastList(request_items: BlastListItems[]) {
        this.selected_blast_list_item = this.selected_blast_list_item.concat(request_items);
        console.log(this.selected_blast_list_item);
    }

    addToSelectedContactsFromBlastList(request_item: BlastListItems) {
        this.selected_blast_list_item = this.selected_blast_list_item.concat(request_item);
        console.log(this.selected_blast_list_item);
    }

    removeUserContactFromBlastList(request_item: BlastListItems) {
        const index_of = this.selected_blast_list_item.findIndex(item => request_item.display_name === item.display_name);
        if (index_of !== -1) {
            this.selected_blast_list_item = this.selected_blast_list_item.slice(0, index_of).concat(this.selected_blast_list_item.slice(index_of + 1));
        }
        console.log(this.selected_blast_list_item);
    }

}
