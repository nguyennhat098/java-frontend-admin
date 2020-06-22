import { ActionItem } from './../shared/action-item';
import { MockService } from 'ngx-fw4c';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { ActionRequest, ActionResponse, SearchResponse } from '../shared';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { Categories } from './categories';

@Injectable({
    providedIn: 'root',
})

export class CategoryService extends MockService {
    private href = 'http://localhost:8080/category';
    constructor(private _httpClient: HttpClient) {
        super();
    }

    public create(request: Categories)
        : Observable<ActionItem<Categories>> {
            console.log(request)
        return this._httpClient.post<ActionItem<Categories>>(`${this.href}/create`, request);
    }

    public update(request: Categories)
        : Observable<ActionItem<Categories>> {
        return this._httpClient.put<ActionItem<Categories>>(`${this.href}/update`, request);
    }

    public delete(request: ActionRequest<Categories>)
        : Observable<ActionResponse<Categories>> {
        return this._httpClient.delete<ActionResponse<Categories>>(`${this.href}?id=${request}`, { params: request as any });
    }


    public search(request: any): Observable<SearchResponse<Categories>> {
        return this._httpClient.get<SearchResponse<Categories>>(`${this.href}` + '/search', { params: request as any }).pipe(retry(2));
    }

    public getAll(): Observable<Categories[]> {
        return this._httpClient.get<Categories[]>(`${this.href}` + '/getAll', {}).pipe(retry(2));
    }
    // public checkUnique(name: string, id: string): Observable<any> {
    //     var checkunique = `${this.href}` + '/CheckUnique';
    //     return this._httpClient.get(checkunique, { params: { name: name, id : id } });
    // }
}