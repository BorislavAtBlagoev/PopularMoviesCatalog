import { IMovie } from "./movies";

export interface IDiscoverResponse {
    page: number;
    results: IMovie[]
    total_results: number;
    total_pages: number;
}