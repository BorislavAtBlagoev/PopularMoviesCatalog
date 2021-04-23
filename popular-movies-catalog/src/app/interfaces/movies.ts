export interface IMovie {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IFilteringOption {
    label: string;
    value: string | number;
}

export interface IGenre {
    id: number;
    name: string;
}

export interface IGenreResponse {
    genres: IGenre[]
}

export interface IFilterSettings {
    sort_by: string;
    primary_release_year: string;
    with_genres: string,
    page: string;
    [key: string]: string;
}
