import { RegisterFormModule } from '@components/register-form';
import { LoginFormModule } from '@components/login-form';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		LoginRoutingModule,
		MatButtonModule,
		LoginFormModule,
		RegisterFormModule,
	],
})
export class LoginModule {}
