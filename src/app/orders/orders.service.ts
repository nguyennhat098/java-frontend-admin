import { OrderDetail } from './order-detail';
import { Orders } from './orders';
import { ActionItem } from './../shared/action-item';
import { MockService } from 'ngx-fw4c';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SearchResponse } from '../shared';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class OrdersService extends MockService {
    private href = 'http://localhost:8080';
    constructor(private _httpClient: HttpClient) {
        super();
    }

    public update(request: Orders)
        : Observable<ActionItem<Orders>> {
        return this._httpClient.put<ActionItem<Orders>>(`${this.href}/order/update`, request);
    }
    public search(request: any): Observable<SearchResponse<Orders>> {
        return this._httpClient.get<SearchResponse<Orders>>(`${this.href}/order/search`, { params: request as any }).pipe(retry(2));
    }
    public getOrderDetails(request: any): Observable<OrderDetail[]> {
        return this._httpClient.get<OrderDetail[]>(`${this.href}/order/getOrderDetailById?id=${request}`, { params: request as any }).pipe(retry(2));
    }
}