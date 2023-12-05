import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {FormComponent} from "@core/components/form.component";
import {DynamicFormControlModel} from "@ng-dynamic-forms/core";
import {BLASTS_SEARCH_BLAST_LISTS_FORM_LAYOUT, BLASTS_SEARCH_BLAST_LISTS_FORM_MODEL} from '../../blasts.form.models';
// import {
//   BLASTS_SEARCH_BLAST_LISTS_FORM_LAYOUT,
//   // BLASTS_SEARCH_BLAST_LISTS_FORM_LAYOUT,
//   BLASTS_SEARCH_BLAST_LISTS_FORM_MODEL
// } from "@app/blasts/blasts.form.models";
import {debounceTime} from "rxjs/operators";

@Component({
    selector: 'blasts-search-blast-lists-form',
    templateUrl: './blasts-search-blast-lists-form.component.html',
    styleUrls: ['./blasts-search-blast-lists-form.component.scss']
})
export class BlastsSearchBlastListsFormComponent extends FormComponent {

    @Output()
    searchTermCreated = new EventEmitter<string>();

    @Input()
    debounceTime: number;

    constructor(injector: Injector) {
        super(injector);
    }
    formLayout = BLASTS_SEARCH_BLAST_LISTS_FORM_LAYOUT;

    initializeComponent() {
    }


    getFormModel(): DynamicFormControlModel[] {
        return BLASTS_SEARCH_BLAST_LISTS_FORM_MODEL();
    }

    afterInitializeComponent() {
        this.getInputModel('search_term').valueChanges.pipe(debounceTime(this.debounceTime || 300))
            .subscribe(value => {
                this.searchTermCreated.emit(<string>value||'');
            });
    }
}
