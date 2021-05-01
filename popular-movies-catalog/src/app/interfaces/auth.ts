export interface IUser {
    uid: string | undefined;
    displayName: string | undefined | null;
    email: string | undefined | null;
    photoURL: string | undefined | null;
}

export interface IUserCredentials {
    email: string,
    password: string
}