import { IMovie } from "./movies";
import { IPeople, IPersonCredits } from "./people";
import { ITvShow } from "./tvShows";

export interface IDiscoverResponse {
    page: number;
    results: IMovie[]
    total_results: number;
    total_pages: number;
}

export interface ITvShowsResponse {
    page: number;
    results: ITvShow[]
    total_results: number;
    total_pages: number;
}

export interface IPeopleResponse {
    page: number;
    results: IPeople[]
    total_results: number;
    total_pages: number;
}

export interface ICombinedCreditsResponse {
    id: number;
    cast: IPersonCredits[];
    crew: IPersonCredits[];
}