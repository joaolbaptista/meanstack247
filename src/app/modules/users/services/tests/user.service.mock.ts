import { IUserService } from '../../models/user.service.interface';
import { UserModel } from '../../models/user.model';
import { Observable, of } from 'rxjs';

export class UserServiceMock implements IUserService {
	harcodedUserList: Array<UserModel> = [
		new UserModel({
			personName: 'Joao Baptista'
		}),
		new UserModel({
			personName: 'Andy Scott'
		}),
		new UserModel({
			personName: 'Shaun Rosa'
		}),
		new UserModel({
			personName: 'Ian Matos'
		})
	];

	getUsersList(filter?: string): Observable<UserModel[]> {
		return of(
			this.harcodedUserList
		);
	}

	add(user: UserModel): Observable<UserModel> {
		return of(
			this.harcodedUserList[0]
		);
	}
}
