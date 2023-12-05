import {Component, Injector, Input} from "@angular/core";
import {
    CoreUpdateContentMetaComponent
} from "@core/components/core-update-content-meta/core-update-content-meta.component";
import {Events} from "@core/core.models";
import EventInfo = Events.EventInfo;

@Component({
    selector: 'events-set-event-meta-data',
    templateUrl: './events-set-event-meta-data.component.html',
    styleUrls: ['./events-set-event-meta-data.component.scss']
})
export class EventsSetEventMetaDataComponent extends CoreUpdateContentMetaComponent {

    @Input()
    eventInfo: EventInfo;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        console.log(this.eventInfo);
        if (this.eventInfo) {
            this.title = this.eventInfo.event.event_title;
            this.description = this.eventInfo.event.event_description;
            this.image = this.eventInfo.image?.uploaded_file.file_link;
            // this.image =
            //     'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_3.png';
            this.imageWidth = 1200;
            this.imageHeight = 900;
        }
        super.initializeComponent();
        window['prerenderReady'] = true;
    }

}

@Component({
    selector: 'events-set-event-meta-data-no-template',
    templateUrl: './events-set-event-meta-data-no-template.component.html',
    styleUrls: ['./events-set-event-meta-data.component.scss']
})
export class EventsSetEventMetaDataNoTemplateComponent extends EventsSetEventMetaDataComponent {
}
