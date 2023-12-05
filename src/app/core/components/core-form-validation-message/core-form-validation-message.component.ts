import {Component, Injector, Input} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {DynamicFormControlContainerComponent} from '@ng-dynamic-forms/core';
import {UntypedFormControl} from '@angular/forms';

@Component({
  selector: 'core-form-validation-message',
  templateUrl: './core-form-validation-message.component.html',
  styleUrls: ['./core-form-validation-message.component.scss'],
})
export class CoreFormValidationMessageComponent extends BaseComponent {

  @Input()
  controlComponent: DynamicFormControlContainerComponent;

  @Input()
  control: UntypedFormControl;


  constructor(injector: Injector) {
    super(injector);
  }

  initializeComponent() {
  }
}
