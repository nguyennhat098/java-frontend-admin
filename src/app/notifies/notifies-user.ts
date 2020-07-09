
export class NotifiesUser {
    id: number;
    notifiesId: number;
    userId: number;
    constructor(init?: Partial<NotifiesUser>) {
        Object.assign(this, init);
    }
}