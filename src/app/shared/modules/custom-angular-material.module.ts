import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatTableModule,
	MatFormFieldModule,
	MatPaginatorModule,
	MatCheckboxModule,
	MatInputModule,
	MatSortModule,
	MatToolbarModule,
	MatTabsModule,
	MatDialogModule,
	MatProgressBarModule,
	MatListModule,
	MatSelectModule,
	MatTooltipModule,
	MatSidenavModule,
	MatIconModule
} from '@angular/material';
const modules = [
	MatButtonModule,
	MatTableModule,
	MatFormFieldModule,
	MatPaginatorModule,
	MatCheckboxModule,
	MatInputModule,
	MatSortModule,
	MatToolbarModule,
	MatTabsModule,
	MatDialogModule,
	MatProgressBarModule,
	MatListModule,
	MatSelectModule,
	MatTooltipModule,
	MatSidenavModule,
	MatIconModule
];

@NgModule({
	imports: [...modules],
	exports: [...modules]
})
export class CustomMaterialModule { }
