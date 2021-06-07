import { AbstractControl, ValidatorFn } from '@angular/forms';

export function phoneNumberValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;
    }
    const isValid = nameRe.test(control.value);
    return !isValid ? { invalidPhoneNumber: true } : null;
  };
}
