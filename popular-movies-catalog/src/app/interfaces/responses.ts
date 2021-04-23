import { IMovie } from "./movies";
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