import { Router } from '@angular/router';
import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
	selector: 'djk-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
	@Output() sidenav = new EventEmitter();

	constructor(public auth: AngularFireAuth, private router: Router) {}

	logout() {
		this.auth.signOut();
		this.router.navigate(['/']);
	}
}
