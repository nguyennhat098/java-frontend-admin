import { Categories } from '../categories/categories';

export class Products {
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
    categories:Categories;
    catgoryName:string;
    categoryId:number;
    constructor(init?: Partial<Products>) {
        Object.assign(this, init);
    }
}
