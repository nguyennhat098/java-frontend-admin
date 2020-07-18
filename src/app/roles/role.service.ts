import { RoleActions } from './RoleActions';
import { Actions } from './Actions';
import { ActionItem } from './../shared/action-item';
import { MockService, ValidationRuleResponse } from 'ngx-fw4c';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ActionRequest, ActionResponse, SearchResponse } from '../shared';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { Roles } from './Role';

@Injectable({
    providedIn: 'root',
})

export class RoleService extends MockService {
    private href = 'https://shopdemo112.herokuapp.com';
    constructor(private _httpClient: HttpClient) {
        super();
    }

    public create(request: Roles)
        : Observable<ActionItem<Roles>> {
        return this._httpClient.post<ActionItem<Roles>>(`${this.href}/role/create`, request);
    }

    public update(request: Roles)
        : Observable<ActionItem<Roles>> {
        return this._httpClient.put<ActionItem<Roles>>(`${this.href}/role/update`, request);
    }

    public delete(request: ActionRequest<Roles>)
        : Observable<ActionResponse<Roles>> {
        return this._httpClient.delete<ActionResponse<Roles>>(`${this.href}/role/delete?id=${request}`, { params: request as any });
    }
    public search(request: any): Observable<SearchResponse<Roles>> {
        return this._httpClient.get<SearchResponse<Roles>>(`${this.href}/role/search`, { params: request as any }).pipe(retry(2));
    }

    public getAll(): Observable<Roles[]> {
        return this._httpClient.get<Roles[]>(`${this.href}/role/getAll`, { }).pipe(retry(2));
    }

    public checkUniqueRoleName(request: string): Observable<ValidationRuleResponse> {
        return this._httpClient.get(`${this.href}/role/checkUniqueRoleName?name=${request}`, { params: request as any });
    }
    public getActionByRole(roleId: any): Observable<any> {
        return this._httpClient.get<any>(`${this.href}/role/getActionByRole?roleId=${roleId}`, {}).pipe(retry(2));
    }
    public getActionByRoleAction(request: any): Observable<Actions[]> {
        return this._httpClient.get<Actions[]>(`${this.href}/role/getActionByRoleAction?roleId=${request.id}`, {}).pipe(retry(2));
    }
    public deleteMutipleAction( request: RoleActions[]): Observable<ActionResponse<Roles>> {
        console.log(request)
        return this._httpClient.post<ActionResponse<Roles>>(`${this.href}/roleAction/deleteMutiple`, request);
    }
    public deleteAction(request:number):Observable<any>{
        return this._httpClient.delete(`${this.href}/roleAction/delete?id=${request}`, {});
    }
    public addMutipleAction( request: RoleActions[]): Observable<ActionResponse<Roles>> {
        return this._httpClient.post<ActionResponse<Roles>>(`${this.href}/roleAction/createMutiple`, request);
    }
    public addAction(request:RoleActions):Observable<any>{
        return this._httpClient.post(`${this.href}/roleAction/create`, request);
    }
}