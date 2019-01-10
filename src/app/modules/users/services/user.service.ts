import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { IUserService } from '../models/user.service.interface';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { EndPointsDictionary } from 'src/app/shared/dictionaries/endpoints-dictionary';

@Injectable({
	providedIn: 'root'
})

export class UserService implements IUserService {

	constructor(private httpService: HttpService) { }

	// get user list to populate the table
	getUsersList(filterData?: string): Observable<UserModel[]> {
		return this.httpService.get<UserModel[]>(`${EndPointsDictionary.users}?filter=${filterData}`);
	}

	add(user: UserModel): Observable<UserModel> {
		return this.httpService.post(`${EndPointsDictionary.users}/add`, user);
	}
}
