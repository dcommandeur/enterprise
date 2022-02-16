import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SyncServiceModule } from '@app/services/sync';

@NgModule({
	declarations: [AuthenticationComponent],
	imports: [CommonModule, MatSnackBarModule, SyncServiceModule],
	exports: [AuthenticationComponent],
})
export class AuthenticationModule {}
