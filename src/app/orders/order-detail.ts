export class OrderDetail {
    id?: number;
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
    catgoryName:string;
    categoryId:number;
    constructor(init?: Partial<OrderDetail>) {
        Object.assign(this, init);
    }
}