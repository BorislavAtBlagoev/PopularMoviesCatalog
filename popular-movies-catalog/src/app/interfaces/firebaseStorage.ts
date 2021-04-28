export interface IFirestormMedia {
    id: number;
    title: string;
    isWatched: boolean;
    posterPath: string | null;
    mediaType: string;
    createdAt: Date;
}