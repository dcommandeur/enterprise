import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '@app/models';
import { SyncService } from '@app/services/sync';
import firebase from '@firebase/app-compat';

@Component({
	selector: 'djk-authentication',
	template: '',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationComponent implements OnInit {
	firstCheck = false;

	constructor(private snackBar: MatSnackBar, private syncService: SyncService) {}

	ngOnInit(): void {
		firebase.auth().onAuthStateChanged((user) => {
			if (this.firstCheck) {
				if (user) {
					this.updateFirestore(user);
					this.openSnackBar('You have logged in succesfully', 'close', 'green');
				} else {
					this.openSnackBar('You have logged out succesfully', 'close', 'red');
				}
			} else {
				this.firstCheck = true;
			}
		});
	}

	openSnackBar(message: string, action: string, panel: string) {
		this.snackBar.open(message, action, {
			duration: 2300,
			horizontalPosition: 'right',
			verticalPosition: 'top',
			panelClass: `panel-${panel}`,
		});
	}

	parseUserInfo(user: any): User {
		return {
			uid: user.uid,
			displayName: user.displayName,
			email: user.email,
			emailVerified: user.emailVerified,
			phoneNumber: user.phoneNumber,
			photoURL: user.photoURL,
		};
	}

	async updateFirestore(user: any) {
		try {
			await this.syncService.updateUserData(this.parseUserInfo(user));
		} catch (e) {
			console.error(`Error occurred while updating user data with firestore: ${e}`);
		}
	}
}
