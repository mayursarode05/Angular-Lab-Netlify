import { AbstractControl, ValidationErrors } from '@angular/forms';

export function dateInPast(control: AbstractControl): ValidationErrors | null {
  const selectedDate = new Date(control.value);
  const today = new Date();

  // Set time to 00:00:00 for both dates to compare only the dates
  selectedDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  if (selectedDate > today) {
    return { dateInFuture: true };
  }
  return null;
}
