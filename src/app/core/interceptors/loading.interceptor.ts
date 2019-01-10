import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
	private totalRequests: number;

	constructor() {
		this.totalRequests = 0;
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const started = Date.now();
		let ok: string;
		this.totalRequests++;

		let loading = document.getElementById('loadinghttp');
		if (loading) {
			loading.style.display = 'block';
		}



		return next.handle(req)
			.pipe(
				tap(
					event => ok = event instanceof HttpResponse ? 'succeeded' : '',
					error => ok = 'failed'
				),
				finalize(() => {
					// Log when response observable either completes or errors
					this.totalRequests--;

					if (this.totalRequests == 0) {
						let loading = document.getElementById('loadinghttp');
						if (loading) {
							loading.style.display = 'none';
						}
					}
				})
			);
	}
}