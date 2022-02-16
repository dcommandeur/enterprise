import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MustMatchValidator } from '@validators/must-match';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'djk-register-form',
	templateUrl: './register-form.component.html',
	styleUrls: ['./register-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
	@Output() formData = new EventEmitter();

	hidePassword = new BehaviorSubject<Boolean>(true);
	submitted = new BehaviorSubject<Boolean>(false);

	registerForm = this.fb.group(
		{
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
			confirmPassword: ['', Validators.required],
		},
		{
			validator: MustMatchValidator('password', 'confirmPassword'),
		}
	);

	constructor(public fb: FormBuilder) {}

	get f() {
		return this.registerForm.controls;
	}

	onSubmit() {
		this.submitted.next(true);

		// stop here if form is invalid
		if (this.registerForm.invalid) {
			return;
		}

		this.formData.emit(this.registerForm.value);
	}
}
