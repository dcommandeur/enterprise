import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat';

@Component({
	selector: 'djk-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
	rightPanel = new BehaviorSubject<Boolean>(false);

	constructor(public auth: AngularFireAuth, private router: Router) {}

	ngOnInit(): void {}

	async loginWithGoogle() {
		try {
			await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
			this.router.navigate(['/home']);
		} catch (error) {
			console.warn(error);
		}
	}

	handleLogin(data: any) {
		console.log(data);
	}

	handleRegister(data: any) {
		console.log(data);
	}
}
