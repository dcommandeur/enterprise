import { BehaviorSubject } from 'rxjs';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IndexDialogComponent } from '@components/index-dialog';
import { animate, style, transition, trigger } from '@angular/animations';
import { sleep } from '@app/utils/sleep';

@Component({
	selector: 'djk-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss'],
	animations: [
		trigger('logoTrigger', [
			transition(':enter', [
				style({ opacity: 0, transform: 'scale(0.3)' }),
				animate(
					'220ms 750ms cubic-bezier(0.0, 0.0, 0.2, 1)',
					style({ opacity: 1, transform: 'scale(1)' })
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
export class IndexComponent {
	logoOpen = new BehaviorSubject<boolean>(false);

	constructor(public auth: AngularFireAuth, public dialog: MatDialog, private router: Router) {}

	async openDialog() {
		await sleep(600);
		const dialogRef = this.dialog.open(IndexDialogComponent);

		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				this.router.navigate(['/login']);
			}
		});
	}
}
