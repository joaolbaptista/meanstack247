
import { Injectable, Inject } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
	providedIn: 'root',
})
export class HttpService {

	constructor(
		private http: HttpClient,
	) {

	}

	private postData(data?: Object): Object {
		let dataToSend = data ? JSON.parse(JSON.stringify(data)) : null;
		return this.processDataAttributes(dataToSend);
	}

	private processLink(link: string | string[]): string {
		let processedLink = '';

		if (link instanceof Array) {
			processedLink = link[0];
			for (let index = 1; index < link.length; index++) {
				processedLink = processedLink.replace('{' + (index - 1) + '}', link[index]);
			}


		} else {
			processedLink = link;
		}

		return processedLink;
	}

	get<T>(link: string | string[]): Observable<T> {
		return this.http.get(this.processLink(link))
			.pipe(
				map(response => this.extractData(response)),
				catchError(this.handleErrorProcessing)
			);
	}

	post<T>(link: string | string[], data?: Object): Observable<T> {
		return this.http.post(this.processLink(link), this.postData(data))
			.pipe(
				map(response => this.extractData(response)),
				catchError(this.handleErrorProcessing)
			);
	}

	put<T>(link: string | string[], data?: Object): Observable<T> {
		return this.http.put(this.processLink(link), this.postData(data))
			.pipe(
				map(response => this.extractData(response)),
				catchError(this.handleErrorProcessing)
			);
	}

	delete(link: string | string[]): Observable<Object> {
		return this.http.delete(this.processLink(link))
			.pipe(
				map(response => this.extractData(response)),
				catchError(this.handleErrorProcessing)
			);
	}

	private extractData(data: Object) {
		let body = this.processBody(data);

		return body;
	}

	private processBody(data: any): any {

		return data;
	}

	private handleErrorProcessing(error: HttpErrorResponse) {

		let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';

		return observableThrowError(error);
	}

	private processDataAttributes(data: any): any {
		return data;
	}

}

