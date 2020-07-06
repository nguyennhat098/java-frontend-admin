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
    constructor(init?: Partial<ChatMessage>) {
        Object.assign(this, init);
    }
}

// export class ChatMessage {
//     senderID: number;
//       messageBody: string;
//       senderName: string;
//       timeStamp: number;
//     constructor(init?: Partial<ChatMessage>) {
//         Object.assign(this, init);
//     }
// }

