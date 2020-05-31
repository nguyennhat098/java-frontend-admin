import { MockService } from 'ngx-fw4c';
import { AppConsts } from '../shared/AppConsts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { ActionRequest, ActionResponse, SearchResponse, ActionItem } from '../shared';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { Products } from './product';

@Injectable({
    providedIn: 'root',
  })

export class ProductService extends MockService {
    private href = 'http://localhost:8080/WebAppDemostration';
    constructor(private _httpClient: HttpClient){
        super();
    }

    public create (request: Products)
        : Observable<ActionItem<Products>> {
            return this._httpClient.post<ActionItem<Products>>(`${this.href}`,  request );
        }
    
    public update(request: Products)
        : Observable<ActionItem<Products>> {
            return this._httpClient.put<ActionItem<Products>>(`${this.href}`,  request);
    }

    public delete(request: ActionRequest<Products>)
    : Observable<ActionResponse<Products>> {
        return this._httpClient.delete<ActionResponse<Products>>(`${this.href}`,  {params: request as any});
}

   
    public search(request: any): Observable<SearchResponse<Products>> {
    return this._httpClient.get<SearchResponse<Products>>(`${this.href}` + '/product/getAll', {params: request as any}).pipe(retry(2));
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

    // public checkUniqueKey(key: string, id: string): Observable<any> {
    //     var checkunique = `${this.href}` + '/CheckUniqueKey';
    //     return this._httpClient.get(checkunique, { params: { key: key, id : id } });
    //    }
    // public getSystemById( request: number): Observable<System> {
    //     return this._httpClient.get<System>(`${this.href}` + '/GetById', {params: {id: request} as any});
    // }
}