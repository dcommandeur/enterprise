import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'djk-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
	@Output() formData = new EventEmitter();
	@Output() moreOptions = new EventEmitter();

	hidePassword = new BehaviorSubject<Boolean>(true);
	submitted = new BehaviorSubject<Boolean>(false);

	loginForm = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', Validators.required],
	});

	constructor(public fb: FormBuilder) {}

	get f() {
		return this.loginForm.controls;
	}

	onSubmit() {
		this.submitted.next(true);

		// stop here if form is invalid
		if (this.loginForm.invalid) {
			return;
		}

		this.formData.emit(this.loginForm.value);
	}
}
