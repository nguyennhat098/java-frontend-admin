export class ChatMessage {
    senderID: number;
    senderName: string;
    fullName:string;
    messageBody: string;
    new:boolean;
    image:string;
    timeStamp: number;
    keyData?:string;
    roomName?:string;
    totalNew?:number;
    constructor(init?: Partial<ChatMessage>) {
        Object.assign(this, init);
    }
}
