export class Notifies {
    id: number;
    content: string;
    createdDate: Date;
    modifyDate: Date;
    endDate: Date;
    image: string;
    link: string;
    status: number;
    constructor(init?: Partial<Notifies>) {
        Object.assign(this, init);
    }
}
