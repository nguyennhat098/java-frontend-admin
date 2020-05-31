export class Products {
    id?: string;
    name?: number;
    slug?: string;
    content?: string;
    images?: string;
    price?: number;
    salePrice?: number;
    moreImages?: string;
    created?: Date;
    modifileDate?: Date;
    status?: boolean;
    topHot?: boolean;
    catgoryName?: string;
    constructor(init?: Partial<Products>) {
        Object.assign(this, init);
    }
}
