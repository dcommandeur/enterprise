export interface User {
	uid: string;
	displayName: string;
	email: string;
	emailVerified: boolean;
	phoneNumber: string | null;
	photoURL: string;
}
