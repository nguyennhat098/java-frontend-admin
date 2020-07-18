import { ActionItem } from './../shared/action-item';
import { MockService, ValidationRuleResponse } from 'ngx-fw4c';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ActionRequest, ActionResponse, SearchResponse } from '../shared';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { Products } from './product';

@Injectable({
    providedIn: 'root',
})

export class ProductService extends MockService {
    private href = 'https://shopdemo112.herokuapp.com';
    constructor(private _httpClient: HttpClient) {
        super();
    }

    public create(request: Products)
        : Observable<ActionItem<Products>> {
        return this._httpClient.post<ActionItem<Products>>(`${this.href}/product/create`, request);
    }

    public update(request: Products)
        : Observable<ActionItem<Products>> {
        return this._httpClient.put<ActionItem<Products>>(`${this.href}/product/update`, request);
    }

    public delete(request: ActionRequest<Products>)
        : Observable<ActionResponse<Products>> {
        return this._httpClient.delete<ActionResponse<Products>>(`${this.href}/product/delete?id=${request}`, { params: request as any });
    }

    public search(request: any): Observable<SearchResponse<Products>> {
        return this._httpClient.get<SearchResponse<Products>>(`${this.href}/product/search`, { params: request as any }).pipe(retry(2));
    }

    public checkUniqueName(request: string): Observable<ValidationRuleResponse> {
        return this._httpClient.get(`${this.href}/product/checkUniqueName?params=${request}`, { params: request as any });
    }
    public deleteMutiple(request: Products[]): Observable<Products> {
        return this._httpClient.post<Products>(`${this.href}/product/deleteMutiple`, request);
    }
    public validatePrice(price: number, item: Products): Observable<ValidationRuleResponse> {
        return of(new ValidationRuleResponse({
            message: 'sale price not greater price',
            status: !item.salePrice || item.salePrice < price
        }))
    }
    public validateSalePrice(val: number, item: Products): Observable<ValidationRuleResponse> {
        return of(new ValidationRuleResponse({
            message: 'sale price not greater price',
            status: !item.price || item.price > val
        }));
    }
}