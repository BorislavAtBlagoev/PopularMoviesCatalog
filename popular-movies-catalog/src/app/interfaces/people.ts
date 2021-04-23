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
