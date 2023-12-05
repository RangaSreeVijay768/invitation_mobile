import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from "@angular/core";
import {
    DynamicFormControlComponent, DynamicFormControlCustomEvent, DynamicFormControlLayout, DynamicFormLayoutService,
    DynamicFormValidationService
} from '@ng-dynamic-forms/core';
import {UntypedFormGroup} from '@angular/forms';
import {
    CoreGoogleAddressAutoCompletionModel
} from '@core/components/forms/core-google-address-auto-completion-form-control/core-google-address-auto-completion-form-control.model';
import {Core} from '@core/core.models';
import GooglePlaceLocation = Core.GooglePlaceLocation;
import {IonInput} from "@node-modules/@ionic/angular";

@Component({
    selector: 'core-google-address-auto-completion-form-control',
    templateUrl: './core-google-address-auto-completion-form-control.component.html',
    styleUrls: ['./core-google-address-auto-completion-form-control.component.scss']
})
export class CoreGoogleAddressAutoCompletionFormControlComponent extends DynamicFormControlComponent
    implements AfterViewInit {

    autocompleteInput: string;

    @Input() group: UntypedFormGroup;
    @Input() layout: DynamicFormControlLayout;
    @Input() model: CoreGoogleAddressAutoCompletionModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();


    @Input() addressType: string;
    @Output() setAddress: EventEmitter<any> = new EventEmitter();
    @ViewChild('addresstext') addressText: any;

    constructor(layoutService: DynamicFormLayoutService, validationService: DynamicFormValidationService) {
        super(layoutService, validationService);
    }

    initializeComponent() {
    }

    ngAfterViewInit(): void {
        this.getPlaceAutocomplete();
    }

    private getPlaceAutocomplete() {
        const google = window['google'];
        console.log(this.addressText)
        const autocomplete = new google.maps.places.Autocomplete(this.addressText.nativeElement,
            {});
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace();
            console.log(place);
            const google_place_location = new GooglePlaceLocation();
            google_place_location.place_id = place.place_id;
            google_place_location.vicinity = place.vicinity;
            google_place_location.full_address = place.formatted_address;
            google_place_location.longitude = place.geometry.location.lng();
            google_place_location.latitude = place.geometry.location.lat();
            google_place_location.url = place.url;
            google_place_location.json_string = JSON.stringify(place);
            this.model.value = google_place_location;
            this.change.emit(google_place_location);
        });
    }


}
