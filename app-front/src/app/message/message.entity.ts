import { User } from "app/user/user.entity";

export class Message {
    id?: number;
    messageContent: string;
    messageNew:boolean;
    messageDeleted: boolean;
    messageSeder: User;
    messageAddressee: string;
}