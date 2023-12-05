import {Component} from '@angular/core';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

interface faq{
    title:string;
    description:string;
}
@Component({
    selector: 'app-accordion-static',
    templateUrl: './accordion-static.component.html',
    styleUrls: ['./accordion-static.component.scss']
})
export class AccordionStaticComponent {
    faqs: faq[] = [
        {
            title:"Question1",
            description:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
        },
        {
            title:"Question2",
            description:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
        },
        {
            title:"Question3",
            description:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
        },
        {
            title:"Question4",
            description:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
        },
        {
            title:"Question5",
            description:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
        },
    ]
}
