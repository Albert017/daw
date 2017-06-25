import { User } from '../user/user.entity';
export class Post{
    id?: number;
    postTitle: string;
    postAuthor:User;
    postTag: string;
    postDate: string;
    postUpVotes: number;
    postDownVotes: number;
    postComments?: Object[]; //Por ahora asi
    report?: boolean;
}