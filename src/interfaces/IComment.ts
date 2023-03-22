import { IUser } from "./IUser";

export interface IComment {
    _id: string;
    comment: string;
    text: string;
    user: IUser;
}
