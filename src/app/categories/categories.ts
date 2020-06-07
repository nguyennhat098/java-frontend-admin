export class Categories {
    id?: number;
    name?: string;
    slug?: string;
    status?: boolean;
    createdDate?: Date;
    modifileDate?: Date;
    constructor(init?: Partial<Categories>) {
        Object.assign(this, init);
    }
}
