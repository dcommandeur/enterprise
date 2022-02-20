import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
	AngularFireAuthGuard,
	hasCustomClaim,
	redirectUnauthorizedTo,
	redirectLoggedInTo,
} from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./pages/index').then((m) => m.IndexModule),
	},
	{
		path: 'login',
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectLoggedInToHome },
		loadChildren: () => import('./pages/login').then((m) => m.LoginModule),
	},
	{
		path: 'sign-up',
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectLoggedInToHome },
		loadChildren: () => import('./pages/sign-up').then((m) => m.SignUpModule),
	},
	{
		path: 'forgot-password',
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectLoggedInToHome },
		loadChildren: () => import('./pages/forgot-password').then((m) => m.ForgotPasswordModule),
	},
	{
		path: 'home',
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToLogin },
		loadChildren: () => import('./pages/home').then((m) => m.HomeModule),
	},
	{
		path: '**',
		loadChildren: () => import('./pages/not-found').then((m) => m.NotFoundModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
