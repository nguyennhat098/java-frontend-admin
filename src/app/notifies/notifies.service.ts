import { NotifiesUser } from './notifies-user';
import { ActionResponse } from './../shared/action-response';
import { ActionRequest } from './../shared/action-request';
import { Notifies } from './notifies';

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

export class NotifiesService extends MockService {
    private href = 'http://localhost:8080/notifiesCustom';
    constructor(private _httpClient: HttpClient) {
        super();
    }

    public update(request: Notifies)
        : Observable<ActionItem<Notifies>> {
        return this._httpClient.put<ActionItem<Notifies>>(`${this.href}/update`, request);
    }
    public search(request: any): Observable<SearchResponse<Notifies>> {
        return this._httpClient.get<SearchResponse<Notifies>>(`${this.href}/search`, { params: request as any }).pipe(retry(2));
    }
    public create(request: Notifies)
        : Observable<ActionItem<Notifies>> {
        return this._httpClient.post<ActionItem<Notifies>>(`${this.href}/create`, request);
    }

    public delete(request: ActionRequest<Notifies>)
        : Observable<ActionResponse<Notifies>> {
        return this._httpClient.delete<ActionResponse<Notifies>>(`${this.href}/delete?id=${request}`, { params: request as any });
    }
    public deleteMutiple( request: Notifies[]): Observable<ActionResponse< Notifies>> {
        return this._httpClient.post<ActionResponse< Notifies>>(`${this.href}/deleteMutiple`, request);
    }
    public assignNotifies( request: NotifiesUser[]): Observable<ActionResponse< NotifiesUser>> {
        return this._httpClient.post<ActionResponse< NotifiesUser>>(`${this.href}/assignNotifies`, request);
    }
}