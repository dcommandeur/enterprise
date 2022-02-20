import { Router } from '@angular/router';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '@components/login-dialog';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat';

@Component({
	selector: 'djk-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
	constructor(public auth: AngularFireAuth, private router: Router, public dialog: MatDialog) {}

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

	moreOptions() {
		this.dialog.open(LoginDialogComponent);
	}
}
