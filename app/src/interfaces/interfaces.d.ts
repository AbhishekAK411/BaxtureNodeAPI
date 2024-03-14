export interface IUser {
    userId?: string,
    username: string;
    age: number;
    hobbies: string[]
}

export interface IResponse {
    status: number,
    success: boolean,
    users: IUser[],
    user: IUser
}