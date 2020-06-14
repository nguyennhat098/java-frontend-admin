import { Orders } from './orders';
import { ActionItem } from './../shared/action-item';
import { MockService, ValidationRuleResponse } from 'ngx-fw4c';
import { AppConsts } from '../shared/AppConsts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
 import { ActionRequest, ActionResponse, SearchResponse } from '../shared';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
// import { ActionItem } from 'app/shared/action-item';
// import { ActionItem, ActionResponse } from 'app/shared/action-response';
// import { ActionRequest } from 'app/shared/action-request';
// import { SearchResponse } from 'app/shared/search-response';

@Injectable({
    providedIn: 'root',
  })

export class OrdersService extends MockService {
    private href = 'http://localhost:8080';
    constructor(private _httpClient: HttpClient){
        super();
    }
    
    public update(request: Orders)
        : Observable<ActionItem<Orders>> {
            return this._httpClient.put<ActionItem<Orders>>(`${this.href}/order/update`,  request);
    }

   
    public search(request: any): Observable<SearchResponse<Orders>> {
    return this._httpClient.get<SearchResponse<Orders>>(`${this.href}/order/search`, {params: request as any}).pipe(retry(2));
    }
}