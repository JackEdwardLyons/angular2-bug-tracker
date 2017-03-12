// This file checks the value of a form and ensures it doesn't 
// match a specific forbidden-string.validator.js
import { ValidatorFn, AbstractControl } from '@angular/forms';

export function forbiddenStringValidator(strReg: RegExp): ValidatorFn {
  // This line returns an object with a key value pair
  return (control: AbstractControl): { [key: string]: any } => {
    const str = control.value;
    const invalid = strReg.test(str);
    // pass an object back giving details about the error
    return invalid ? { 'forbiddenString': { str } } : null;
  }
}  