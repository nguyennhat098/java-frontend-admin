import { Menus } from './Menus';
import { ActionItem } from './../shared/action-item';
import { MockService, ValidationRuleResponse } from 'ngx-fw4c';
import { AppConsts } from '../shared/AppConsts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ActionRequest, ActionResponse, SearchResponse } from '../shared';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class CommonService extends MockService {
    private href = 'http://localhost:8080';
    constructor(private _httpClient: HttpClient) {
        super();
    }

    public getByRoleId(request: any): Observable<Menus[]> {
        return this._httpClient.get<Menus[]>(`${this.href}/menu/getListByRoleId?roleId=${request}`, {}).pipe(retry(2));
    }
    
    public getActionByRole(roleId: any): Observable<any> {
        return this._httpClient.get<any>(`${this.href}/role/getActionByRole?roleId=${roleId}`, {}).pipe(retry(2));
    }
}