import {Component, EventEmitter, Injector, Output, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {EVENTS_CREATE_EVENT_FORM_LAYOUT, EVENTS_CREATE_EVENT_FORM_MODEL} from '@events/events.form.models';
import {EventsRequests} from '@events/events.models';
import {EventsService} from '@events/events.service';
import {Core, Events, Images} from '@core/core.models';
import {ImagesUploadFileCreateEventComponent} from '@images/components/images-upload-file/images-upload-file.component';
import CreateEvent = EventsRequests.CreateEvent;
import UploadedFile = Images.UploadedFile;
import Event = Events.Event;
import {LoadingController} from '@node-modules/@ionic/angular';
import {Moment} from '@node-modules/moment/moment';
import {considerSettingUpAutocompletion} from '@angular/cli/src/utilities/completion';
import {DateTime} from 'luxon';
import LocationRequest = EventsRequests.CreateEvent.LocationRequest;
import GooglePlaceLocation = Core.GooglePlaceLocation;

@Component({
    selector: 'events-create-event-form',
    templateUrl: './events-create-event-form.component.html',
    styleUrls: ['./events-create-event-form.component.scss']
})
export class EventsCreateEventFormComponent extends FormComponent {

    constructor(protected eventsService: EventsService, injector: Injector, protected loadingController: LoadingController) {
        super(injector);
    }

    event: Event;


    uploaded_file: UploadedFile;
    event_id: string;

    loading_in_progress: boolean;
    current_loader: HTMLIonLoadingElement;

    location_type = 'OFFLINE';

    @ViewChild(ImagesUploadFileCreateEventComponent, {static: true})
    images_upload_file_create_event_component: ImagesUploadFileCreateEventComponent;


    create_event_subscription$: Subscription;

    location_availability_status = 'ACTIVE';
    event_timings_availability_status = 'ACTIVE';
    guest_list_visibility: string;
    // location_type: string;

    @Output()
    eventCreated = new EventEmitter<string>();

    formLayout = EVENTS_CREATE_EVENT_FORM_LAYOUT;

    start_date: Moment;

    initializeComponent() {
    }

    async startLoading() {
        this.loading_in_progress = true;
        await this.showLoading();
    }

    stopLoading() {
        this.loading_in_progress = false;
        if (this.current_loader) {
            this.current_loader.dismiss();
        }
    }

    async showLoading() {
        this.current_loader = await this.loadingController.create({
            message: 'uploading your favorite pic',
            spinner: 'crescent',
        });
        await this.current_loader.present();
    }

    afterInitializeComponent() {
        this.getInputModel('location_availability_status').valueChanges.subscribe(value => {
            if (!value) {
                this.location_availability_status = 'ACTIVE';
            } else {
                this.location_availability_status = undefined;
            }
        });
        this.getInputModel('event_timings_availability_status').valueChanges.subscribe(value => {
            if (!value) {
                this.event_timings_availability_status = 'ACTIVE';
            } else {
                this.event_timings_availability_status = undefined;
            }
        });
        this.getInputModel('guest_list_visibility').valueChanges.subscribe(value => {
            if (value) {
                this.guest_list_visibility = 'ACTIVE';
            } else {
                this.guest_list_visibility = undefined;
            }
        });
        this.getInputModel('location_type').valueChanges.subscribe(value => {
            this.location_type = <string>value;
        });
    }

    dateTimeString: string;

    getFormModel(): DynamicFormControlModel[] {
        return EVENTS_CREATE_EVENT_FORM_MODEL();
    }

    start_time: DateTime;

    createRequestData(): CreateEvent.Request {
        const request = new CreateEvent.Request();
        request.event_title = this.getInputModelValueAsString('event_title');
        request.organizer_or_host_name = this.getInputModelValueAsString('organizer');
        request.event_description = this.getInputModelValueAsString('event_description');
        request.location_type = this.location_type;

        const start_time_value = CommonsService.getDateTimeFromDateTimeString(this.getInputModel('start_time').value.toString(),
            'yyyy-MM-dd\'T\'HH:mm:ss');
        if (start_time_value) {
            request.start_time =
                CommonsService.getDateTimeFromDateTimeString(this.getInputModel('start_date').value.toString(), 'yyyy-MM-dd\'T\'HH:mm:ss')
                    // @ts-ignore
                    .set({hour: start_time_value.hour, minute: start_time_value.minute});
        }

        const end_time_value = CommonsService.getDateTimeFromDateTimeString(this.getInputModel('end_time').value.toString(),
            'yyyy-MM-dd\'T\'HH:mm:ss');
        if (start_time_value) {
            request.end_time =
                CommonsService.getDateTimeFromDateTimeString(this.getInputModel('end_date').value.toString(), 'yyyy-MM-dd\'T\'HH:mm:ss')
                    // @ts-ignore
                    .set({hour: end_time_value.hour, minute: end_time_value.minute});
        }

        // @ts-ignore
        const location: GooglePlaceLocation = this.getInputModel('location_type1').value;
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

        request.invitation_policy = this.getInputModelValueAsString('invitation_policy');
        request.event_category = this.getInputModelValueAsString('event_category');
        return request;
    }

    createEvent = (request: CreateEvent.Request) => {
        console.log(request);
        this.create_event_subscription$ = this.eventsService.createEvent(request)
            .subscribe((value: string) => {
                // @ts-ignore
                this.event_id = value;
                if (!this.uploaded_file) {
                    // @ts-ignore
                    this.eventCreated.emit(value);
                } else {
                    // @ts-ignore
                    this.images_upload_file_create_event_component.attachImage(this.uploaded_file.uploaded_file_id,
                        value);
                }
            });
    }


}
