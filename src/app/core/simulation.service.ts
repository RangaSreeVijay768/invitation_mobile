import {Injectable} from '@angular/core';
import {environment} from '@environment/environment';
import {CommonsService} from '@core/commons.service';
import {Images} from '@core/core.models';
import {ContactPayload, PhoneType} from "@capacitor-community/contacts";
import UploadedFile = Images.UploadedFile;

@Injectable({
    providedIn: 'root'
})
export class SimulationService {

    constructor() {
    }

    static getContactsArray(override_simulate?: boolean): ContactPayload[] {
        if (SimulationService.isSimulateData(override_simulate)) {
            return [
                // @ts-ignore
                {name: {display: 'Rakesh'}, phones: [{number: '+918058406194', type: PhoneType.Mobile}]},
                // {displayName: 'Rakesh 2', phoneNumbers: [{value: '+917382090691', type: 'mobile'}]},
            ];
        } else {
            return [];
        }
    }

    static getCircleUploadedImageFiles(override_simulate?: boolean): UploadedFile {
        if (SimulationService.isSimulateData(override_simulate)) {
            return CommonsService.deserialize({
                'uploaded_file_id': '15e669cf-507a-49de-bb40-1bbd6b3fc7f3',
                'file_name': 'IMG-20230328-WA0002.jpg',
                'file_link': 'http://sdotss-images.s3-website.ap-south-1.amazonaws.com/315c493e-5e31-40a6-9ca4-9fcd60607a28/1680253243165/IMG-20230328-WA0002.jpg',
                'file_path': '315c493e-5e31-40a6-9ca4-9fcd60607a28/1680253243165/IMG-20230328-WA0002.jpg',
                'file_service_data': null
            }, UploadedFile);
        } else {
            return null;
        }
    }

    static getCirclePostUploadedImageFiles(override_simulate?: boolean): UploadedFile[] {
        if (SimulationService.isSimulateData(override_simulate)) {
            return [CommonsService.deserialize({
                'uploaded_file_id': '15e669cf-507a-49de-bb40-1bbd6b3fc7f3',
                'file_name': 'IMG-20230328-WA0002.jpg',
                'file_link': 'http://sdotss-images.s3-website.ap-south-1.amazonaws.com/315c493e-5e31-40a6-9ca4-9fcd60607a28/1680253243165/IMG-20230328-WA0002.jpg',
                'file_path': '315c493e-5e31-40a6-9ca4-9fcd60607a28/1680253243165/IMG-20230328-WA0002.jpg',
                'file_service_data': null
            }, UploadedFile)];
        } else {
            return [];
        }
    }

    static isSimulateData(override_simulate?: boolean) {
        return override_simulate || environment.simulateData;
    }
}
