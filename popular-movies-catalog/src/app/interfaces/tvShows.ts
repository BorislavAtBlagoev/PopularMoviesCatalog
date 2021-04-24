export interface ITvShow {
    poster_path: string | null;
    popularity: number;
    id: number;
    name: string;
    backdrop_path: string | null;
    vote_average: number;
    overview: string;
    first_air_date: string;
    origin_country: string[];
    genre_ids: number[];
    original_language: string;
    vote_count: number;
    original_name: string;
}

export interface ITvShowsFilterSettings {
    sort_by: string;
    first_air_date_year: string;
    with_genres: string;
    page: string;
    [key: string]: string;
}

