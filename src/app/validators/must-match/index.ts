import { FormGroup } from '@angular/forms';

export function MustMatchValidator(controlName: string, matchingControlName: string) {
	return (formGroup: FormGroup) => {
		const control = formGroup.controls[controlName];
		const matchingControl = formGroup.controls[matchingControlName];
		if (matchingControl.errors && !matchingControl.errors['mustMatchValidator']) {
			return;
		}
		if (control.value !== matchingControl.value) {
			matchingControl.setErrors({ mustMatchValidator: true });
		} else {
			matchingControl.setErrors(null);
		}
	};
}
