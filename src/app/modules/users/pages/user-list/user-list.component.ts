import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
	userList: Array<UserModel> = [];
	dataSource: MatTableDataSource<UserModel> = new MatTableDataSource;
	displayedColumns: string[] = ['id', 'personName'];
	searchInput = new FormControl();
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	constructor(
		private userService: UserService
	) {

	}

	ngOnInit() {
		this.searchInput.valueChanges.pipe(debounceTime(500), distinctUntilChanged())
			.subscribe(searchInput => this.applyFilter(searchInput));
		this.getUsers();
	}

	getUsers(): void {
		this.userService.getUsersList()
			.subscribe(response => {
				this.userList = response;
				this.dataSource = new MatTableDataSource(this.userList);
				this.setMaterialSortPaginator();
			});
	}

	applyFilter(searchInput: string) {
		this.userService.getUsersList(searchInput)
			.subscribe(response => {
				this.userList = response;
				this.dataSource = new MatTableDataSource(this.userList);
				this.setMaterialSortPaginator();
			})
	}

	private setMaterialSortPaginator() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

}
