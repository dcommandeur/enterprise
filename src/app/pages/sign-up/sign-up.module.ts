import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormModule } from '@components/register-form';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	declarations: [SignUpComponent],
	imports: [
		CommonModule,
		SignUpRoutingModule,
		MatButtonModule,
		RegisterFormModule,
		MatIconModule,
		MatDialogModule,
	],
})
export class SignUpModule {}
