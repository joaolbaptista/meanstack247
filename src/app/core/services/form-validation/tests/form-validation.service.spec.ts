import { TestBed } from '@angular/core/testing';
import { FormValidationService } from '../form-validation.service';
import { FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('Form Validation Service ', () => {
	let service: FormValidationService;
	let formBuilder: FormBuilder;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ReactiveFormsModule],
			providers: [FormValidationService]
		});
		service = TestBed.get(FormValidationService);
		formBuilder = TestBed.get(FormBuilder);
	});

	it('Should isFieldInvalid return true when the form control is invalid and was touched', () => {
		const formControl = new FormControl('', Validators.required);
		formControl.markAsTouched();
		expect(service.isFieldInvalid(formControl)).toBe(true);
	});

	it('Should isFieldInvalid return false when the form control is valid', () => {
		const formControl = new FormControl('JoaoTest', Validators.required);
		expect(service.isFieldInvalid(formControl)).toBe(true);
	});

	it('Should isFieldInvalid return true when the form control is valid but the form has been submitted', () => {
		const formControl = new FormControl('JoaoTest', Validators.required);
		expect(service.isFieldInvalid(formControl)).toBe(true);
	});

	it('Should validateAllFormFields mark all fields as touched', () => {
		const formControl1 = new FormControl('', Validators.required);
		const formControl2 = new FormControl('');
		const formGroup = formBuilder.group({
			formControl1: formControl1,
			formControl2: formControl2
		});

		service.validateAllFormFields(formGroup);

		expect(formControl1.touched).toBeTruthy();
		expect(formControl2.touched).toBeTruthy();
	});





});
