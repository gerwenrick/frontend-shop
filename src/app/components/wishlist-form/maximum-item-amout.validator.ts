import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function maximumItemAmountValidator(maximumAmount: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const controlValue = control.value;

    if (!controlValue) return null;

    if (control.value > maximumAmount) {
      return { maximumAmountExceeded: { maximumAmount, actual: controlValue } };
    }

    return null;
  };
}
