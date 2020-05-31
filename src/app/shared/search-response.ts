export class SearchResponse<TViewModel>{
    totalRecords?: number;
    items?: TViewModel[];
    status?: boolean;
    message?: string;
    constructor(init?: Partial<SearchResponse<TViewModel>>) {
        Object.assign(this, init);
    }
}
