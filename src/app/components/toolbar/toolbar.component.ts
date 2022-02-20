import { Router } from '@angular/router';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
	selector: 'djk-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss'],
	animations: [
		trigger('sidenavButtonTrigger', [
			transition(':enter', [
				style({ opacity: 0, marginLeft: '-40px' }),
				animate(
					'350ms cubic-bezier(0.0, 0.0, 0.2, 1)',
					style({ opacity: 1, marginLeft: '0' })
				),
			]),
			transition(':leave', [
				animate(
					'250ms cubic-bezier(0.4, 0.0, 1, 1)',
					style({ opacity: 0, marginLeft: '-40px' })
				),
			]),
		]),
	],
})
export class ToolbarComponent {
	@Output() sidenav = new EventEmitter();
	@Input() ToolbarSidenavButton = false;

	constructor(public auth: AngularFireAuth, private router: Router) {}

	logout() {
		this.auth.signOut();
		this.router.navigate(['/']);
	}
}
