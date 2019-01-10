import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from '../user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/shared/modules/custom-angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from '../../../services/user.service';
import { UserServiceMock } from '../../../services/tests/user.service.mock';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
	let component: UserListComponent;
	let fixture: ComponentFixture<UserListComponent>;
	let userService: UserService;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
				ReactiveFormsModule,
				CustomMaterialModule,
				HttpClientModule,
				BrowserAnimationsModule
			],
			declarations: [UserListComponent],
			providers: [
				{
					provide: UserService,
					useClass: UserServiceMock // mocked service
				}
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		userService = TestBed.get(UserService);
		fixture = TestBed.createComponent(UserListComponent);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should run the OnInit life cycle', () => {
		const serviceSpy = spyOn(userService, 'getUsersList').and.callThrough();
		fixture.detectChanges();
		// service call
		expect(serviceSpy).toHaveBeenCalled();
		expect(component.userList.length).toBe(4);
	});

	it('should update the form control input when type', async(() => {
		const input = fixture.debugElement.query(By.css('input')).nativeElement;
		fixture.detectChanges();
		input.value = 'jo';
		input.dispatchEvent(new Event('input'));
		fixture.whenStable().then(() => {
			expect(component.searchInput.value).toEqual('jo');
		});
	}));

	it('should call applyFilter function when the search input has some input', async(() => {
		const funcSpy = spyOn(component, 'applyFilter');
		const input = fixture.debugElement.query(By.css('input')).nativeElement;
		fixture.detectChanges();
		input.value = 'jo';
		input.dispatchEvent(new Event('input'));
		fixture.whenStable().then(() => {
			expect(funcSpy).toHaveBeenCalled();
		});
	}));

	it('should filter the users list when there is a input filter text', () => {
		const serviceSpy = spyOn(userService, 'getUsersList').and.callThrough();
		const input = fixture.debugElement.query(By.css('input')).nativeElement;
		fixture.detectChanges();
		input.value = 'no name';
		input.dispatchEvent(new Event('input'));
		fixture.whenStable().then(() => {
			expect(serviceSpy).toHaveBeenCalled();
			expect(component.userList.length).toBe(0);
		});

	});
});
