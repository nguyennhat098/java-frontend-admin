import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationLoginRequest, AuthenticationLoginResponse, UserViewModel, AuthenticationSearchRequest, AuthenticationSearchResponse, AuthenticationRetrieveRequest, AuthenticationRetrieveResponse, AuthenticationCreateRequest, AuthenticationCreateResponse, AuthenticationUpdateRequest, AuthenticationUpdateResponse, AuthenticationDeleteRequest, AuthenticationDeleteResponse } from './auth.model';
import { CacheService } from '../shared/services/cache.service';
import { Router } from '@angular/router';
import { MockService } from '../shared/services/mock.service';
import { DataService } from '../shared/services/data.service';
import { SettingService } from '../shared/services/setting.service';
export declare class AuthenticationService extends MockService {
    protected httpClient: HttpClient;
    protected dataService: DataService;
    protected settingService: SettingService;
    private _cacheService;
    private _router;
    currentUser: UserViewModel;
    constructor(httpClient: HttpClient, dataService: DataService, settingService: SettingService, _cacheService: CacheService, _router: Router);
    setApi(url: string): void;
    getApi(): string;
    search(request: AuthenticationSearchRequest): Observable<AuthenticationSearchResponse>;
    retrieve(request: AuthenticationRetrieveRequest): Observable<AuthenticationRetrieveResponse>;
    login(request: AuthenticationLoginRequest): Observable<AuthenticationLoginResponse>;
    create(request: AuthenticationCreateRequest): Observable<AuthenticationCreateResponse>;
    update(request: AuthenticationUpdateRequest): Observable<AuthenticationUpdateResponse>;
    delete(request: AuthenticationDeleteRequest): Observable<AuthenticationDeleteResponse>;
    refresh(): void;
    logout(path?: string, refresh?: boolean): void;
}
