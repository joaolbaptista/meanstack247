import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { CustomMaterialModule } from './shared/modules/custom-angular-material.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptorProviders } from './core/interceptors/interceptors';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
	declarations: [
		AppComponent,
		LayoutComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		CustomMaterialModule,
		SharedModule,
		HttpClientModule,
		ToastrModule.forRoot({
			positionClass: 'toast-bottom-right'
		}
		)
	],
	providers: [
		HttpInterceptorProviders
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
