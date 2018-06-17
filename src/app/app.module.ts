import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { PerguntasComponent } from './perguntas/perguntas.component';

const appRouts: Routes = [
	{ path: '', component: AppComponent },
	{ path: 'perguntas', component: PerguntasComponent }
]

@NgModule({
	declarations: [
		AppComponent,
		PerguntasComponent
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		FormsModule,
		RouterModule.forRoot(
			appRouts,
			{ enableTracing: true }
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
