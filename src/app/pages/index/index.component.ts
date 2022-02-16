import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IndexDialogComponent } from '@components/index-dialog';

@Component({
	selector: 'djk-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
	constructor(public auth: AngularFireAuth, public dialog: MatDialog, private router: Router) {}

	openDialog() {
		const dialogRef = this.dialog.open(IndexDialogComponent);

		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				this.router.navigate(['/login']);
			}
		});
	}
}
