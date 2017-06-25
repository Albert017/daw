import { User } from "app/user/user.entity";

export interface Comment {
    commentContent: string;
    id?: number;
    author?:User;
}