import { UserModel } from './user.model';
import { Observable } from 'rxjs';

export interface IUserService {
	getUsersList(filterData?: string): Observable<Array<UserModel>>;
	add(user: UserModel): Observable<UserModel>;
}
