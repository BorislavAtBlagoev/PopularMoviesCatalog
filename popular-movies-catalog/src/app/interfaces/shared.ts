import { IMovie } from "./movies";
import { ITvShow } from "./tvShows";

export const isMovie = (media: ITvShow | IMovie): media is ITvShow => {
    return (media as ITvShow).name !== undefined;
}