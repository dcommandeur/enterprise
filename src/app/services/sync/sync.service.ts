import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from '@app/models';
import firebase from 'firebase/compat/app';

export const collections = {
	users: 'users',
};

@Injectable({
	providedIn: 'root',
})
export class SyncService {
	constructor(public firestore: AngularFirestore) {}

	public getUserDocRefByUID(uid: string): AngularFirestoreDocument<User> {
		return this.firestore.doc(`${collections.users}/${uid}`);
	}

	public deleteUserData(uid: string): Promise<any> {
		const userRef: AngularFirestoreDocument<User> = this.getUserDocRefByUID(uid);
		return userRef.delete();
	}

	public updateUserData(user: User): Promise<any> {
		// Sets user$ data to firestore on login
		const userRef: AngularFirestoreDocument<User> = this.getUserDocRefByUID(user.uid);
		const data: User = {
			uid: user.uid,
			email: user.email,
			emailVerified: user.emailVerified,
			displayName: user.displayName,
			photoURL: user.photoURL,
			phoneNumber: user.phoneNumber,
		};
		return userRef.set(data, { merge: true });
	}
}
