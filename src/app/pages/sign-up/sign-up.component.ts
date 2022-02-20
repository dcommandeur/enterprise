import { Router } from '@angular/router';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat';

@Component({
	selector: 'djk-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
	constructor(public auth: AngularFireAuth, private router: Router) {}

	async loginWithGoogle() {
		try {
			await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
			this.router.navigate(['/home']);
		} catch (error) {
			console.warn(error);
		}
	}

	handleRegister(data: any) {
		console.log(data);
	}
}
