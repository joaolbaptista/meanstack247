import { UserService } from '../user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserServiceMock } from './user.service.mock';
import { UserModel } from '../../models/user.model';

describe('UserService', () => {

	let service: UserService;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
			],
			providers: [
				{
					provide: UserService,
					useClass: UserServiceMock
				},
				UserService,
			]
		});

		service = TestBed.get(UserService);
	});

	it('should be created', () => {
		expect(UserService).toBeTruthy();
	});


	it('Should return a UserModel', () => {
		service.getUsersList().subscribe(user => {
			expect(user).toBeDefined();
			expect(user.length).toBe(4);
			expect(user[0].personName).toEqual('Joao Baptista')
		});
	});

	it('should return added user', () => {
		const user: UserModel = {
			personName: 'Joao Baptista'
		};
		service.add(user).subscribe(result => {
			expect(result).toEqual(user);
		});
	});
});
