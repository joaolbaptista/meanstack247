import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserComponent } from './create-user.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserService } from '../../services/user.service';
import { UserServiceMock } from '../../services/tests/user.service.mock';
import { FormValidationService } from 'src/app/core/services/form-validation/form-validation.service';
import { Location } from '@angular/common';
import { UserModel } from '../../models/user.model';
import { of } from 'rxjs';
import { ToastrModule } from 'ngx-toastr';

describe('CreateUserComponent', () => {
	let component: CreateUserComponent;
	let fixture: ComponentFixture<CreateUserComponent>;
	let location: Location;
	let userService: UserService;
	let formValidationService: FormValidationService;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				SharedModule,
				RouterTestingModule,
				HttpClientTestingModule,
				BrowserAnimationsModule,
				ToastrModule.forRoot()
			],
			declarations: [CreateUserComponent],
			providers: [
				{
					provide: UserService,
					useClass: UserServiceMock
				}
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		formValidationService = TestBed.get(FormValidationService);
		userService = TestBed.get(UserService);
		location = TestBed.get(Location);
		fixture = TestBed.createComponent(CreateUserComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should create an empty user', () => {
		const user = {} as UserModel;
		expect(component.user).toEqual(user);
	});

	it('should init the form with 3 fields', () => {
		expect(component.form.get('personName')).toBeDefined();
	});

	it('should init form as invalid', () => {
		expect(component.form.valid).toBeFalsy();
	});

	it('should set form as valid if all the required fields are defined', () => {
		component.form.get('personName').setValue('Joao');
		expect(component.form.valid).toBeTruthy();
	});

	it('should redirect to the previous screen if the user clicks the cancel button', () => {
		let locationSpy = spyOn(location, 'back');

		component.onCancel();

		expect(locationSpy).toHaveBeenCalled();
	});

	it('should redirect to the user list when the user has been saved successfully', () => {
		let locationSpy = spyOn(location, 'back');
		spyOn(userService, 'add').and.returnValue(of(false));
		component.form.get('personName').setValue('Joao');
		component.onSubmit();
		expect(locationSpy).toHaveBeenCalled();
	});
	it('should show call the validation service if the button submit is clicked and the form is invalid', () => {
		const formValidationServiceSpy = spyOn(formValidationService, 'validateAllFormFields');
		component.onSubmit();
		expect(formValidationServiceSpy).toHaveBeenCalled();
	});


});
