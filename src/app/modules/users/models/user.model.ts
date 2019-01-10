import { IUser } from './user.interface';

export class UserModel implements IUser {
	personName: string;

	constructor(params: any) {
		this.personName = params.personName;
	}
}