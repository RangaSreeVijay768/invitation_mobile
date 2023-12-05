import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Flip} from 'number-flip';

@Directive({
    selector: '[coreNumberFlip]'
})
export class CoreNumberFlipDirective implements OnChanges {
    private flip;

    constructor(private el: ElementRef) {

    }

    @Input() numberFlip: number;

    ngOnChanges(changes: SimpleChanges) {

        console.log(this.el, changes);

        const change = changes.numberFlip;
        let fromNbr;
        change.currentValue = change.currentValue || 0;
        if (change.firstChange) {
            fromNbr = Array.from({length: change.currentValue.toString().length}, () => '9').join('');
        } else {
            fromNbr = change.previousValue;
        }
        this.el.nativeElement.innerHTML = change.currentValue;
        try {
            setTimeout(() => {
                this.flip = new Flip({
                    node: this.el.nativeElement,
                    from: fromNbr,
                    to: change.currentValue
                });
            }, 100);


        } catch (e) {
            console.log(e);
        }
    }
}
