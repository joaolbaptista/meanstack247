import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Location } from '@angular/common';
import { FormValidationService } from 'src/app/core/services/form-validation/form-validation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-create-user',
	templateUrl: './create-user.component.html',
	styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

	form: FormGroup;
	user: UserModel;

	constructor(
		private formBuilder: FormBuilder,
		private userService: UserService,
		private location: Location,
		private formValidationService: FormValidationService,
		private toastr: ToastrService
	) {
		this.user = {} as UserModel;
	}

	ngOnInit() {
		this.initForm();
	}

	onSubmit() {
		if (this.form.valid) {
			this.user = this.form.getRawValue();
			this.userService.add(this.user)
				.subscribe(
					result => {
						this.toastr.success('User Added', 'Success');
						this.redirectToPreviousScreen();
					});
		} else {
			this.formValidationService.validateAllFormFields(this.form);
			this.toastr.error('Please fill all the required fields!', 'Error');
		}
	}

	onCancel() {
		this.redirectToPreviousScreen();
	}

	redirectToPreviousScreen(): void {
		this.location.back();
	}

	// function that checks if the control is valid
	isFieldInvalid(formControl: AbstractControl): boolean {
		return this.formValidationService.isFieldInvalid(formControl);
	}

	// initialize the formgroup
	private initForm(): void {
		this.form = this.formBuilder.group({
			personName: [null, Validators.required]
		});
	}

}
