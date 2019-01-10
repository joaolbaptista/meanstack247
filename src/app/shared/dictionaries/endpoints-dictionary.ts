import { environment } from 'src/environments/environment';

const apiUrl = environment.API_URL;

// Necessary endpoints to be shared around the app when it's necessary
export const EndPointsDictionary = {
	users: `${apiUrl}`
}
