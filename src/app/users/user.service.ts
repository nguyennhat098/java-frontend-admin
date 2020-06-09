import { Actions } from './../roles/Actions';
import { Users } from './user';
// import { User } from './../auth/AuthenticationService.service';
// import { RoleActions } from './RoleActions';
// import { Actions } from './Actions';
import { ActionItem } from './../shared/action-item';
import { MockService, ValidationRuleResponse } from 'ngx-fw4c';
import { AppConsts } from '../shared/AppConsts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ActionRequest, ActionResponse, SearchResponse } from '../shared';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
// import { Roles } from './Role';
// import { ActionItem } from 'app/shared/action-item';
// import { ActionItem, ActionResponse } from 'app/shared/action-response';
// import { ActionRequest } from 'app/shared/action-request';
// import { SearchResponse } from 'app/shared/search-response';

@Injectable({
    providedIn: 'root',
})

export class UserService extends MockService {
    private href = 'http://localhost:8080';
    constructor(private _httpClient: HttpClient) {
        super();
    }

    public create(request: Users)
        : Observable<ActionItem<Users>> {
        return this._httpClient.post<ActionItem<Users>>(`${this.href}/role/create`, request);
    }

    public update(request: Users)
        : Observable<ActionItem<Users>> {
        return this._httpClient.put<ActionItem<Users>>(`${this.href}/role/update`, request);
    }

    public delete(request: ActionRequest<Users>)
        : Observable<ActionResponse<Users>> {
        return this._httpClient.delete<ActionResponse<Users>>(`${this.href}/role/delete?id=${request}`, { params: request as any });
    }


    public search(request: any): Observable<SearchResponse<Users>> {
        return this._httpClient.get<SearchResponse<Users>>(`${this.href}/role/search`, { params: request as any }).pipe(retry(2));
    }

    public getActionByRole(roleId: any): Observable<any> {
        return this._httpClient.get<any>(`${this.href}/role/getActionByRole?roleId=${roleId}`, {}).pipe(retry(2));
    }
    public getActionByRoleAction(roleId: any): Observable<Actions[]> {
        return this._httpClient.get<Actions[]>(`${this.href}/role/getActionByRoleAction?roleId=${roleId}`, {}).pipe(retry(2));
    }
    public deleteMutiple( request: Users[]): Observable<Users> {
        return this._httpClient.post<Users>(`${this.href}/product/deleteMutiple`, request);
    }

    public checkUniqueName(request: string): Observable<ValidationRuleResponse> {
        return this._httpClient.get(`${this.href}/role/checkUniqueName?params=${request}`, { params: request as any });
    }
}