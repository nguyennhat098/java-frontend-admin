export interface ResponseApi<T> {
    totalRecords?:number;
    items?: T[];
}