import { ActionItem } from './../shared/action-item';
import { MockService, ValidationRuleResponse } from 'ngx-fw4c';
import { AppConsts } from '../shared/AppConsts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
 import { ActionRequest, ActionResponse, SearchResponse } from '../shared';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { Products } from './product';
// import { ActionItem } from 'app/shared/action-item';
// import { ActionItem, ActionResponse } from 'app/shared/action-response';
// import { ActionRequest } from 'app/shared/action-request';
// import { SearchResponse } from 'app/shared/search-response';

@Injectable({
    providedIn: 'root',
  })

export class ProductService extends MockService {
    private href = 'http://localhost:8080';
    constructor(private _httpClient: HttpClient){
        super();
    }

    public create (request: Products)
        : Observable<ActionItem<Products>> {
            return this._httpClient.post<ActionItem<Products>>(`${this.href}/product/create`,  request );
        }
    
    public update(request: Products)
        : Observable<ActionItem<Products>> {
            return this._httpClient.put<ActionItem<Products>>(`${this.href}/product/update`,  request);
    }

    public delete(request: ActionRequest<Products>)
    : Observable<ActionResponse<Products>> {
        return this._httpClient.delete<ActionResponse<Products>>(`${this.href}/product/delete?id=${request}`,   {params: request as any});
}

   
    public search(request: any): Observable<SearchResponse<Products>> {
    return this._httpClient.get<SearchResponse<Products>>(`${this.href}/product/search`, {params: request as any}).pipe(retry(2));
    }

    // public getAllActive(): Observable<SearchResponse<System>> {
    //     return this._httpClient.get<SearchResponse<System>>(`${this.href}` + '/getActive')
    // }
    // public checkUnique(name: string, id: string): Observable<any> {
    //     var checkunique = `${this.href}` + '/CheckUnique';
    //     return this._httpClient.get(checkunique, { params: { name: name, id : id } });
    // }
    // public getById( request: ActionRequest<System>): Observable<ActionItem<System>> {
    //     return this._httpClient.put<ActionItem<System>>(`${this.href}` + '/GetById', request);
    // }

    public checkUniqueName(request: string): Observable<ValidationRuleResponse> {
        return this._httpClient.get(`${this.href}/product/checkUniqueName?params=${request}`, { params: request as any });
       }
    public deleteMutiple( request: Products[]): Observable<Products> {
        return this._httpClient.post<Products>(`${this.href}/product/deleteMutiple`, request);
    }
}