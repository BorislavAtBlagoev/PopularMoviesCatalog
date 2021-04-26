export interface IPeople {
    popularity: number;
    birthday: string | null;
    known_for_department: string;
    deathday: string | null;
    id: number;
    name: string;
    also_known_as: string[];
    gender: number;
    biography: string;
    place_of_birth: string | null;
    profile_path: string;
    adult: boolean;
    imdb_id: string;
    homepage: string | null;
    known_for: IKnownFor[];
}

export interface IPersonCredits {
    id: number;
    original_language: string;
    episode_count: number;
    overview: string;
    origin_country: string[];
    original_name: string;
    genre_ids: number[];
    name: string;
    media_type: string;
    poster_path: string | null;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    character: string;
    backdrop_path: string | null;
    popularity: number;
    credit_id: string;
    original_title: string;
    video: boolean;
    release_date: string;
    title: string;
    adult: boolean;
    department: string;
}

interface IKnownFor {
    poster_path: string | null;
    adult: boolean;
    overview: string;
    release_date: string;
    original_title: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    title: string;
    backdrop_path: string | null;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

