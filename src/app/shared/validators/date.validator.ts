import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const regex =
      /^(\d{2})\/(\d{2})\/(\d{4})$/;

    if (!regex.test(value)) {
      return { invalidDate: true };
    }

    const [, day, month, year] = value.match(regex)!;

    const date = new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
    );

    const isValid =
      date.getFullYear() === Number(year) &&
      date.getMonth() === Number(month) - 1 &&
      date.getDate() === Number(day);

    return isValid ? null : { invalidDate: true };
  };
}