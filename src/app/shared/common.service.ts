import { Menus } from './Menus';
import { MockService } from 'ngx-fw4c';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class CommonService extends MockService {
    private href = 'https://shopdemo112.herokuapp.com';
    constructor(private _httpClient: HttpClient) {
        super();
    }

    public getByRoleId(request: any): Observable<Menus[]> {
        return this._httpClient.get<Menus[]>(`${this.href}/menu/getListByRoleId?roleId=${request}`).pipe(retry(2));
    }
    
    public getActionByRole(roleId: any): Observable<any> {
        return this._httpClient.get<any>(`${this.href}/role/getActionByRole?roleId=${roleId}`).pipe(retry(2));
    }
}