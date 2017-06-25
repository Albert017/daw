import { User } from '../user/user.entity';
import { Post } from '../post/post.entity';
export class Comment{
    id?: number;
    commentContent: string;
    commentUser:User;
    commentPost: Post;
    report?: boolean;
}