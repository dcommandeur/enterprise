import { RouterModule } from '@angular/router';
import { LoginDialogComponent } from './login-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [LoginDialogComponent],
	imports: [CommonModule, MatDialogModule, MatButtonModule, RouterModule],
	exports: [LoginDialogComponent],
})
export class LoginDialogModule {}
