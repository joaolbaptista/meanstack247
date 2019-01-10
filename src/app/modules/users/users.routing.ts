import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';

const routes: Routes = [
	{ path: '', component: UserListComponent },
	{ path: 'add', component: CreateUserComponent}
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	declarations: [],
})
export class UsersRoutingModule { }