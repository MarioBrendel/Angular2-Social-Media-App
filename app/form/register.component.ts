import { FormControl } from "./contol/FormControl";
import { FormFieldComponent } from "./field/formfield.component";
import { Component, OnInit } from 'angular2/core';
import { ControlGroup } from 'angular2/common';
import { FormFieldValidationService } from './validation/formvalidator.service';

@Component({
  selector: 'register-form',
  directives: [FormFieldComponent],
  providers: [FormFieldValidationService],
  template: `
  <div class="container">
  <form [ngFormModel]="registerForm"
        (ngSubmit)="onSubmit()"
        #regForm="ngForm">

    <formField name="Username" type="text" required="true"
      [control]="regForm.form.find('username')"></formField>

    <formField name="Email" type="email" required="true"
      [control]="regForm.form.find('email')"> </formField>

    <formField name="Telephone" type="text"
      [control]="regForm.form.find('telephone')"> </formField>

    <formField name="Password" type="password" required="true"
      [control]="regForm.form.find('password')"> </formField>

    <button type="submit" class="btn btn-primary"
            [disabled]="!regForm.form.valid">Submit</button>

  </form>
  </div>
  `
})
export class RegisterComponent implements OnInit {
  private registerForm: ControlGroup;

  constructor(private _validationService: FormFieldValidationService) {}

  ngOnInit(): void {
    this.registerForm = new ControlGroup({
      username: new FormControl('', this._validationService.validateUserName),
      email: new FormControl('', this._validationService.validateEmail),
      telephone: new FormControl('', this._validationService.validateTelephoneNumber),
      password: new FormControl('', this._validationService.validatePassword),
    });
  }

  onSubmit(): void {
    console.log('Username: ' + this.registerForm.find('username').value);
    console.log('Email: ' + this.registerForm.find('email').value);
    console.log('Telephone: ' + this.registerForm.find('telephone').value);
  }
}
