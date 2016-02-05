import { Control } from 'angular2/common';
import { Injectable } from 'angular2/core';

export interface ValidationResult {
  message: string;
}
// Since we haven't a lot of service validations we bundle them here. In the future this class my compose UserValidators and so on.

/*
* This class is used to validate the input value of form controls.
*/
@Injectable()
export class FormFieldValidationService {
  constructor() {}

  validateUserName(control: Control): ValidationResult {
    const startsWithLetter_regex = /^[a-zA-Z]/;

    if(!control.value.match(startsWithLetter_regex)) {
      return {message: "Username has to start with a letter"};
    } else if(control.value.length < 3) {
      return {message: "Username must have more than 3 letters"};
    } else{
     return null;
   }
  }

  validateEmail = (control: Control): ValidationResult => {
    // RFC 2822 compliant regex
    const email_regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (!control.value.match(email_regex)) {
      return {message: "Please enter a valid email"};
    } else if(this.isEmailAlreadyExisting(control.value)) {
      return {message: "Email is already in use"};
    } else {
      return null;
    }
  }

  private isEmailAlreadyExisting(email: string): boolean {
    // normally you would make a http request here
    return email === "a@b.com";
  }

  validatePassword(control: Control): ValidationResult {
    const password_regex = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{3,}$/);
    // RFC 2822 compliant regex
    if (!control.value.match(password_regex)) {
      return {message: "Password needs 1 uppercase letter 1 lowercase letter and a number"};
    } else {
      return null;
    }
  }

  validateTelephoneNumber(control: Control): ValidationResult {
    var reg = /^\d+$/;;
    // RFC 2822 compliant regex
    if (control.value.length > 0 && !control.value.match(reg)) {
      return {message: "invalid telephonenumber"};
    } else {
      return null;
    }
  }


}
