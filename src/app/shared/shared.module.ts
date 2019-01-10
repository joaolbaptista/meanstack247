import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './modules/custom-angular-material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { LoadingComponent } from './components/loading/loading.component';
const modules = [
	CustomMaterialModule,
	CommonModule,
	ReactiveFormsModule,
	FormsModule,
	RouterModule,

];

const declarations = [
	LoadingComponent
];

@NgModule({
	imports: [
		...modules,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule
	],
	exports: [
		...modules,
		...declarations
	],
	declarations: [
		...declarations,
	],
	providers: [],
})
export class SharedModule { }
