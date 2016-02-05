import { FormControl } from "../contol/FormControl";
import { Component, Input, OnInit } from 'angular2/core';

@Component({
  selector: 'formField',
  template: `
  <div class="form-group" [class.has-error]="!control.valid && control.dirty">
    <label [attr.for]="name">{{name}}</label>
    <input type={{type}} class="form-control"
            placeholder="{{name}}"
            [ngFormControl]="control">
  </div>
  <div [hidden]="control.untouched || control.valid" class="alert alert-danger">
    {{control.errorMessage}}
  </div>
  `
})
export class FormFieldComponent implements OnInit{
  @Input() name: string;
  @Input() type: string = "text";
  @Input() required: boolean;
  @Input() control: FormControl;

  constructor() {}

  ngOnInit(): void {
    if(this.required) {
      this.name += " *";
    }
  }

}
