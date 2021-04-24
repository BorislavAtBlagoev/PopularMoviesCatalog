import { IFilterSettings } from "../interfaces/movies";
import { environment } from '../../environments/environment';
import { ITvShowsFilterSettings } from "../interfaces/tvShows";

class Url {
    constructor(private baseApiUrl: string, private apiKey: string) { }

    buildUrl(endpoint: string, params?: IFilterSettings | ITvShowsFilterSettings): string {
        const queryParams = params ? Object.keys(params).map(key => key + '=' + params[key]).join('&') : '';

        return `${this.baseApiUrl}/${endpoint}?api_key=${this.apiKey}&${queryParams}`;
    }
}

export const url = new Url(environment.API_CREDENTIALS.BASE_URL, environment.API_CREDENTIALS.API_KEY);
