/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/auth/auth.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CacheService } from '../shared/services/cache.service';
import { AuthConst } from './auth.const';
import { Router } from '@angular/router';
import { MockService } from '../shared/services/mock.service';
import { KeyConst } from '../shared/constants/key.const';
import { DataService } from '../shared/services/data.service';
import { SettingService } from '../shared/services/setting.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../shared/services/data.service";
import * as i3 from "../shared/services/setting.service";
import * as i4 from "../shared/services/cache.service";
import * as i5 from "@angular/router";
export class AuthenticationService extends MockService {
    /**
     * @param {?} httpClient
     * @param {?} dataService
     * @param {?} settingService
     * @param {?} _cacheService
     * @param {?} _router
     */
    constructor(httpClient, dataService, settingService, _cacheService, _router) {
        super();
        this.httpClient = httpClient;
        this.dataService = dataService;
        this.settingService = settingService;
        this._cacheService = _cacheService;
        this._router = _router;
        this.dataService.getToken((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (!response || !response.user)
                return;
            /** @type {?} */
            var user = response.user;
            this.currentUser = user;
            if (this.currentUser) {
                if (!this.currentUser.permissions)
                    this.currentUser.permissions = [];
                if (!this.currentUser.roles)
                    this.currentUser.roles = [];
                for (let i = 0; i < this.currentUser.roles.length; i++) {
                    if (!this.currentUser.roles[i].permissions) {
                        this.currentUser.roles[i].permissions = [];
                    }
                }
            }
        }));
    }
    /**
     * @param {?} url
     * @return {?}
     */
    setApi(url) {
        this._cacheService.set(KeyConst.AuthApi, url);
    }
    /**
     * @return {?}
     */
    getApi() {
        /** @type {?} */
        var url = this._cacheService.get(KeyConst.AuthApi);
        if (!url)
            url = 'v1/authentications';
        return url;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    search(request) {
        return this.verify(this.httpClient.get(`${this.getApi()}/search`, { params: (/** @type {?} */ (request)) }), request.mockData);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    retrieve(request) {
        return this.verify(this.httpClient.get(`${this.getApi()}/${request.payload.userName}`), request.mockData);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    login(request) {
        return this.verify(this.httpClient.post(`${this.getApi()}/login`, request), request.mockData);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    create(request) {
        return this.verify(this.httpClient.post(`${this.getApi()}/`, request), request.mockData);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    update(request) {
        return this.verify(this.httpClient.put(`${this.getApi()}/`, request), request.mockData);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    delete(request) {
        return this.verify(this.httpClient.delete(`${this.getApi()}?ids=${request.ids}`), request.mockData);
    }
    /**
     * @return {?}
     */
    refresh() {
        this.dataService.getToken((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (!response || !response.user)
                return;
            this.httpClient.post(`${this.getApi()}/refresh`, {
                token: response.refreshToken,
                payload: {
                    key: this.settingService.useKey(),
                    secret: this.settingService.useSecretKey()
                }
            }).subscribe();
        }));
    }
    /**
     * @param {?=} path
     * @param {?=} refresh
     * @return {?}
     */
    logout(path = '/', refresh = false) {
        if (!this.useMock()) {
            this.dataService.getToken((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                if (!response || !response.user)
                    return;
                this.httpClient.post(`${this.getApi()}/logout`, {
                    token: response.token,
                    refreshToken: response.refreshToken,
                    payload: {
                        key: this.settingService.useKey(),
                        secret: this.settingService.useSecretKey()
                    }
                }).subscribe();
            }));
        }
        this._cacheService.remove(AuthConst.Token);
        this._cacheService.remove(KeyConst.AuthApi);
        this._cacheService.remove(KeyConst.Reload);
        this._cacheService.remove(KeyConst.Key);
        this._cacheService.remove(KeyConst.SecretKey);
        if (path)
            this._router.navigate([path]);
        if (refresh)
            window.location.href = window.location.href;
    }
}
AuthenticationService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
AuthenticationService.ctorParameters = () => [
    { type: HttpClient },
    { type: DataService },
    { type: SettingService },
    { type: CacheService },
    { type: Router }
];
/** @nocollapse */ AuthenticationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.DataService), i0.ɵɵinject(i3.SettingService), i0.ɵɵinject(i4.CacheService), i0.ɵɵinject(i5.Router)); }, token: AuthenticationService, providedIn: "root" });
if (false) {
    /** @type {?} */
    AuthenticationService.prototype.currentUser;
    /**
     * @type {?}
     * @protected
     */
    AuthenticationService.prototype.httpClient;
    /**
     * @type {?}
     * @protected
     */
    AuthenticationService.prototype.dataService;
    /**
     * @type {?}
     * @protected
     */
    AuthenticationService.prototype.settingService;
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype._cacheService;
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype._router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBaUJsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7Ozs7O0FBR3BFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxXQUFXOzs7Ozs7OztJQUdwRCxZQUNZLFVBQXNCLEVBQ3RCLFdBQXdCLEVBQ3hCLGNBQThCLEVBQ2hDLGFBQTJCLEVBQzNCLE9BQWU7UUFFdkIsS0FBSyxFQUFFLENBQUM7UUFORSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBR3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUTs7OztRQUFDLENBQUMsUUFBcUMsRUFBRSxFQUFFO1lBQ2xFLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtn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b3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge1xyXG4gIEF1dGhlbnRpY2F0aW9uTG9naW5SZXF1ZXN0LFxyXG4gIEF1dGhlbnRpY2F0aW9uTG9naW5SZXNwb25zZSxcclxuICBVc2VyVmlld01vZGVsLFxyXG4gIEF1dGhlbnRpY2F0aW9uU2VhcmNoUmVxdWVzdCxcclxuICBBdXRoZW50aWNhdGlvblNlYXJjaFJlc3BvbnNlLFxyXG4gIEF1dGhlbnRpY2F0aW9uUmV0cmlldmVSZXF1ZXN0LFxyXG4gIEF1dGhlbnRpY2F0aW9uUmV0cmlldmVSZXNwb25zZSxcclxuICBBdXRoZW50aWNhdGlvbkNyZWF0ZVJlcXVlc3QsXHJcbiAgQXV0aGVudGljYXRpb25DcmVhdGVSZXNwb25zZSxcclxuICBBdXRoZW50aWNhdGlvblVwZGF0ZVJlcXVlc3QsXHJcbiAgQXV0aGVudGljYXRpb25VcGRhdGVSZXNwb25zZSxcclxuICBBdXRoZW50aWNhdGlvbkRlbGV0ZVJlcXVlc3QsXHJcbiAgQXV0aGVudGljYXRpb25EZWxldGVSZXNwb25zZVxyXG59IGZyb20gJy4vYXV0aC5tb2RlbCc7XHJcbmltcG9ydCB7IENhY2hlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9jYWNoZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aENvbnN0IH0gZnJvbSAnLi9hdXRoLmNvbnN0JztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTW9ja1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvbW9jay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgS2V5Q29uc3QgfSBmcm9tICcuLi9zaGFyZWQvY29uc3RhbnRzL2tleS5jb25zdCc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IFNldHRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL3NldHRpbmcuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIGV4dGVuZHMgTW9ja1NlcnZpY2Uge1xyXG4gIHB1YmxpYyBjdXJyZW50VXNlcjogVXNlclZpZXdNb2RlbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudCxcclxuICAgIHByb3RlY3RlZCBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXHJcbiAgICBwcm90ZWN0ZWQgc2V0dGluZ1NlcnZpY2U6IFNldHRpbmdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfY2FjaGVTZXJ2aWNlOiBDYWNoZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0VG9rZW4oKHJlc3BvbnNlOiBBdXRoZW50aWNhdGlvbkxvZ2luUmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UudXNlcikgcmV0dXJuO1xyXG4gICAgICB2YXIgdXNlciA9IHJlc3BvbnNlLnVzZXI7XHJcbiAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50VXNlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50VXNlci5wZXJtaXNzaW9ucykgdGhpcy5jdXJyZW50VXNlci5wZXJtaXNzaW9ucyA9IFtdO1xyXG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50VXNlci5yb2xlcykgdGhpcy5jdXJyZW50VXNlci5yb2xlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50VXNlci5yb2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRVc2VyLnJvbGVzW2ldLnBlcm1pc3Npb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIucm9sZXNbaV0ucGVybWlzc2lvbnMgPSBbXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEFwaSh1cmw6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2FjaGVTZXJ2aWNlLnNldChLZXlDb25zdC5BdXRoQXBpLCB1cmwpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEFwaSgpOiBzdHJpbmcge1xyXG4gICAgdmFyIHVybCA9IHRoaXMuX2NhY2hlU2VydmljZS5nZXQoS2V5Q29uc3QuQXV0aEFwaSk7XHJcbiAgICBpZiAoIXVybCkgdXJsID0gJ3YxL2F1dGhlbnRpY2F0aW9ucyc7XHJcbiAgICByZXR1cm4gdXJsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlYXJjaChyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblNlYXJjaFJlcXVlc3QpOiBPYnNlcnZhYmxlPEF1dGhlbnRpY2F0aW9uU2VhcmNoUmVzcG9uc2U+IHtcclxuICAgIHJldHVybiB0aGlzLnZlcmlmeSh0aGlzLmh0dHBDbGllbnQuZ2V0PEF1dGhlbnRpY2F0aW9uU2VhcmNoUmVzcG9uc2U+KGAke3RoaXMuZ2V0QXBpKCl9L3NlYXJjaGAsIHsgcGFyYW1zOiByZXF1ZXN0IGFzIGFueSB9KSwgcmVxdWVzdC5tb2NrRGF0YSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXRyaWV2ZShyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblJldHJpZXZlUmVxdWVzdCk6IE9ic2VydmFibGU8QXV0aGVudGljYXRpb25SZXRyaWV2ZVJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy52ZXJpZnkodGhpcy5odHRwQ2xpZW50LmdldDxBdXRoZW50aWNhdGlvblJldHJpZXZlUmVzcG9uc2U+KGAke3RoaXMuZ2V0QXBpKCl9LyR7cmVxdWVzdC5wYXlsb2FkLnVzZXJOYW1lfWApLCByZXF1ZXN0Lm1vY2tEYXRhKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2dpbihyZXF1ZXN0OiBBdXRoZW50aWNhdGlvbkxvZ2luUmVxdWVzdCk6IE9ic2VydmFibGU8QXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy52ZXJpZnkodGhpcy5odHRwQ2xpZW50LnBvc3Q8QXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlPihgJHt0aGlzLmdldEFwaSgpfS9sb2dpbmAsIHJlcXVlc3QpLCByZXF1ZXN0Lm1vY2tEYXRhKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUocmVxdWVzdDogQXV0aGVudGljYXRpb25DcmVhdGVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxBdXRoZW50aWNhdGlvbkNyZWF0ZVJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy52ZXJpZnkodGhpcy5odHRwQ2xpZW50LnBvc3Q8QXV0aGVudGljYXRpb25DcmVhdGVSZXNwb25zZT4oYCR7dGhpcy5nZXRBcGkoKX0vYCwgcmVxdWVzdCksIHJlcXVlc3QubW9ja0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZShyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblVwZGF0ZVJlcXVlc3QpOiBPYnNlcnZhYmxlPEF1dGhlbnRpY2F0aW9uVXBkYXRlUmVzcG9uc2U+IHtcclxuICAgIHJldHVybiB0aGlzLnZlcmlmeSh0aGlzLmh0dHBDbGllbnQucHV0PEF1dGhlbnRpY2F0aW9uVXBkYXRlUmVzcG9uc2U+KGAke3RoaXMuZ2V0QXBpKCl9L2AsIHJlcXVlc3QpLCByZXF1ZXN0Lm1vY2tEYXRhKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZWxldGUocmVxdWVzdDogQXV0aGVudGljYXRpb25EZWxldGVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxBdXRoZW50aWNhdGlvbkRlbGV0ZVJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy52ZXJpZnkodGhpcy5odHRwQ2xpZW50LmRlbGV0ZTxBdXRoZW50aWNhdGlvbkRlbGV0ZVJlc3BvbnNlPihgJHt0aGlzLmdldEFwaSgpfT9pZHM9JHtyZXF1ZXN0Lmlkc31gKSwgcmVxdWVzdC5tb2NrRGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVmcmVzaCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0VG9rZW4oKHJlc3BvbnNlOiBBdXRoZW50aWNhdGlvbkxvZ2luUmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UudXNlcikgcmV0dXJuO1xyXG4gICAgICB0aGlzLmh0dHBDbGllbnQucG9zdDxBdXRoZW50aWNhdGlvbkNyZWF0ZVJlc3BvbnNlPihgJHt0aGlzLmdldEFwaSgpfS9yZWZyZXNoYCwge1xyXG4gICAgICAgIHRva2VuOiByZXNwb25zZS5yZWZyZXNoVG9rZW4sXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAga2V5OiB0aGlzLnNldHRpbmdTZXJ2aWNlLnVzZUtleSgpLFxyXG4gICAgICAgICAgc2VjcmV0OiB0aGlzLnNldHRpbmdTZXJ2aWNlLnVzZVNlY3JldEtleSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS5zdWJzY3JpYmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvZ291dChwYXRoOiBzdHJpbmcgPSAnLycsIHJlZnJlc2g6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnVzZU1vY2soKSkge1xyXG4gICAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldFRva2VuKChyZXNwb25zZTogQXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UudXNlcikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaHR0cENsaWVudC5wb3N0PEF1dGhlbnRpY2F0aW9uQ3JlYXRlUmVzcG9uc2U+KGAke3RoaXMuZ2V0QXBpKCl9L2xvZ291dGAsIHtcclxuICAgICAgICAgIHRva2VuOiByZXNwb25zZS50b2tlbixcclxuICAgICAgICAgIHJlZnJlc2hUb2tlbjogcmVzcG9uc2UucmVmcmVzaFRva2VuLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBrZXk6IHRoaXMuc2V0dGluZ1NlcnZpY2UudXNlS2V5KCksXHJcbiAgICAgICAgICAgIHNlY3JldDogdGhpcy5zZXR0aW5nU2VydmljZS51c2VTZWNyZXRLZXkoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLnN1YnNjcmliZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuX2NhY2hlU2VydmljZS5yZW1vdmUoQXV0aENvbnN0LlRva2VuKTtcclxuICAgIHRoaXMuX2NhY2hlU2VydmljZS5yZW1vdmUoS2V5Q29uc3QuQXV0aEFwaSk7XHJcbiAgICB0aGlzLl9jYWNoZVNlcnZpY2UucmVtb3ZlKEtleUNvbnN0LlJlbG9hZCk7XHJcbiAgICB0aGlzLl9jYWNoZVNlcnZpY2UucmVtb3ZlKEtleUNvbnN0LktleSk7XHJcbiAgICB0aGlzLl9jYWNoZVNlcnZpY2UucmVtb3ZlKEtleUNvbnN0LlNlY3JldEtleSk7XHJcbiAgICBpZiAocGF0aCkgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtwYXRoXSk7XHJcbiAgICBpZiAocmVmcmVzaCkgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICB9XHJcbn0iXX0=