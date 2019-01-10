/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './loading.interceptor';

/** Http interceptor providers in outside-in order */
export const HttpInterceptorProviders = [
	{ provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
];