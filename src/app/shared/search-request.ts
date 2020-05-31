export class SearchRequest<TViewModel>{
    direction?: string;
    orderBy?: string; 
    pageIndex?: number;
    pageSize?: number;
    searchText?: string;
    itemFilter?: TViewModel;
    token?: string; 
    constructor(init?: Partial<SearchRequest<TViewModel>>) {
        Object.assign(this, init);
    }
}
