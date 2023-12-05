import {Directive, HostListener} from '@angular/core';

@Directive({
    selector: '[coreClickStopPropogation]'
})
export class CoreClickStopPropogationDirective {

    @HostListener('click', ['$event'])
    public onClick(event: MouseEvent): void {
        event.stopPropagation();
        event.preventDefault();
    }

}
