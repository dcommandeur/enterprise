import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { USE_DEVICE_LANGUAGE } from '@angular/fire/compat/auth';
import { environment } from '@env/environment';
import { AuthenticationModule } from '@components/authentication';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAnalyticsModule,
		AngularFirestoreModule,
		AuthenticationModule,
	],
	providers: [{ provide: USE_DEVICE_LANGUAGE, useValue: true }],
	bootstrap: [AppComponent],
})
export class AppModule {}
