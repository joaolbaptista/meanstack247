import { Injectable } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, ValidationErrors, Validators } from '@angular/forms';


@Injectable({
	providedIn: 'root'
})
export class FormValidationService {

	isFieldInvalid(formControl: AbstractControl) {
		return (!formControl.valid && formControl.touched) ||
			(formControl.untouched);
	}

	validateAllFormFields(form: FormGroup) {
		Object.keys(form.controls).forEach(field => {
			const control = form.get(field);
			if (control instanceof FormControl) {
				control.markAsTouched({ onlySelf: true });
			} else if (control instanceof FormGroup) {
				this.validateAllFormFields(control);
			}
		});
	}
}
