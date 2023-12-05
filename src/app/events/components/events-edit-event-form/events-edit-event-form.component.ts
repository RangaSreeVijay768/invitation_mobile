import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {ImagesUploadFileCreateEventComponent} from '@images/components/images-upload-file/images-upload-file.component';
import {Core, Events, Images} from '@core/core.models';
import {EVENTS_CREATE_EVENT_FORM_LAYOUT, EVENTS_UPDATE_EVENT_FORM_LAYOUT, EVENTS_UPDATE_EVENT_FORM_MODEL} from '@events/events.form.models';
import {EventsRequests} from '@events/events.models';
import {EventsService} from '@events/events.service';
import UploadedFile = Images.UploadedFile;
import Event = Events.Event;
import UpdateEvent = EventsRequests.UpdateEvent;
import LocationRequest = EventsRequests.CreateEvent.LocationRequest;
import GooglePlaceLocation = Core.GooglePlaceLocation;

@Component({
    selector: 'events-edit-event-form',
    templateUrl: './events-edit-event-form.component.html',
    styleUrls: ['./events-edit-event-form.component.scss']
})
export class EventsEditEventFormComponent extends FormComponent {

    constructor(protected eventService: EventsService, injector: Injector) {
        super(injector);
    }

    @Input()
    event: Event;

    eventVisibility = '';

    location_availability_status = 'ACTIVE';
    event_timings_availability_status = 'ACTIVE';
    guest_list_visibility: string;
    location_type = 'OFFLINE';


    uploaded_file: UploadedFile;
    event_id: string;

    Options = ['Only hosts can invite guests', 'Invitees can invite guests'];
    displayMessage = '';

    @ViewChild(ImagesUploadFileCreateEventComponent, {static: true})
    images_upload_file_create_event_component: ImagesUploadFileCreateEventComponent;

    @Output()
    eventUpdated = new EventEmitter<boolean>();

    formLayout = EVENTS_UPDATE_EVENT_FORM_LAYOUT;

    initializeComponent() {
    }

    afterInitializeComponent() {
        this.getInputModel('event_title').value = this.event.event_title;
        this.getInputModel('event_description').value = this.event.event_description;
        this.getInputModel('event_category').value = this.event.event_category;
        this.getInputModel('organizer_or_host_name').value = this.event.organizer_or_host_name;
        // if (this.event.start_time) {
        //     // @ts-ignore
        //     this.getInputModel('start_date').value = {
        //         // @ts-ignore
        //         year: this.event.start_time.year,
        //         month: this.event.start_time.month,
        //         day: this.event.start_time.day
        //     };
        // }
        // if (this.event.end_time) {
        //     // @ts-ignore
        //     this.getInputModel('end_date').value = {
        //         // @ts-ignore
        //         year: this.event.end_time.year,
        //         month: this.event.end_time.month,
        //         day: this.event.end_time.day
        //     };
        // }
    }

    getFormModel(): DynamicFormControlModel[] {
        return EVENTS_UPDATE_EVENT_FORM_MODEL();
    }

    changeMessage(selectedItem: string) {
        this.displayMessage = selectedItem;
        this.eventVisibility = this.displayMessage === 'Only hosts can invite guests' ? 'HOSTS' : 'EVERYONE';
        this.eventVisibility = this.displayMessage === 'Invitees can invite guests' ? 'HOSTS_AND_INVITEES' : 'EVERYONE';
    }

    createRequestData(event_id?: string): UpdateEvent.Request {
        const request = new UpdateEvent.Request();
        // request.date_of_birth = this.getInputModelValueAsString('date_of_birth');
        request.event_id = event_id || this.event.event_id;
        request.event_title = this.getInputModelValueAsString('event_title');
        request.event_description = this.getInputModelValueAsString('event_description');
        request.event_category = this.getInputModelValueAsString('event_category');
        request.start_time = CommonsService.getDateTimeFromDate(this.getDateModelValue('start_date'));
        request.end_time = CommonsService.getDateTimeFromDate(this.getDateModelValue('end_date'));
        request.organizer_or_host_name = this.getInputModelValueAsString('organizer_or_host_name');

        // @ts-ignore
        const location: GooglePlaceLocation = this.getInputModel('location').value;
        if (location) {
            const location_request = new LocationRequest();
            location_request.url = location.url;
            location_request.vicinity = location.vicinity;
            location_request.latitude = location.latitude;
            location_request.longitude = location.longitude;
            location_request.place_id = location.place_id;
            location_request.google_maps_response = location.json_string;
            location_request.address = location.full_address;
            request.location = location_request;
        }

        return request;
    }


    update_event_subscription$: Subscription;

    updateEvent(request: UpdateEvent.Request) {
        this.update_event_subscription$ = this.eventService.updateEvent(request)
            .subscribe(value => {
                console.log('success update');
                this.eventUpdated.emit(value);
            });
    }

    protected readonly EVENTS_CREATE_EVENT_FORM_LAYOUT = EVENTS_CREATE_EVENT_FORM_LAYOUT;
}

@Component({
    selector: 'events-edit-event-form-no-template',
    templateUrl: './events-edit-event-form-no-template.component.html',
    styleUrls: ['./events-edit-event-form.component.scss']
})
export class EventsEditEventFormNoTemplateComponent extends EventsEditEventFormComponent {


    createRequestData(event_id?: string): UpdateEvent.Request {
        const request = new UpdateEvent.Request();
        request.event_id = event_id || this.event.event_id;

        return request;
    }
}
