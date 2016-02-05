import { Control } from 'angular2/common';
import { ValidationResult } from '../validation/formvalidator.service';
export class FormControl extends Control {
  errors: ValidationResult;

  get errorMessage(): string {
    if(this.errors != null && this.errors.message != null) {
      return this.errors.message;
    }
    return null;
  }
  
}
