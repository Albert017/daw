import {Comment} from "app/comment.model";
import { Post } from "app/post/post.entity";

export class User {
    id?: number;
    username?: string;
    userEmail?:string;
    userBiography?: string;
    userLocation?: string;
    userLink?: string;
    report?: boolean;
    roles?: string[];
    userFollowing?: User[];
    userFollowers?: User[];
    userPosts?: Post[];
    userPasswordHash?: string;
    userComments?: Comment[]; //temporalmente hasta que se implemente la clase userComments
    userSentMessages?: string;
    userReceivedMessages?: string;
}