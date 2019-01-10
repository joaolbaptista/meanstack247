import { NgModule } from '@angular/core';
import { UserListComponent } from './pages/user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users.routing';
import { CustomMaterialModule } from 'src/app/shared/modules/custom-angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateUserComponent } from './pages/create-user/create-user.component';


@NgModule({
	imports: [
		CommonModule,
		UsersRoutingModule,
		CustomMaterialModule,
		SharedModule,
	],
	declarations: [
		UserListComponent,
		CreateUserComponent
	],
	providers: [],
})
export class UsersModule { }
