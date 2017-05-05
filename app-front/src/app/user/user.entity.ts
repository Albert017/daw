
export class User{
    id?: number;
    username: string;
    userEmail?:string;
    roles: string[];
    userFollowers?: User[];
    userFollowing?: User[];
    userPasswordHash?: string;
    userBiography?: string;
    userLocation?: string;
    userLink?: string;
    userComments?: string; //temporalmente hasta que se implemente la clase userComments
    userSentMessages?: string;
    userReceivedMessages?: string;
    userPosts?: string;
    report?: boolean;
}