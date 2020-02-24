/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/auth/auth.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var AuthenticationService = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationService, _super);
    function AuthenticationService(httpClient, dataService, settingService, _cacheService, _router) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.dataService = dataService;
        _this.settingService = settingService;
        _this._cacheService = _cacheService;
        _this._router = _router;
        _this.dataService.getToken((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (!response || !response.user)
                return;
            /** @type {?} */
            var user = response.user;
            _this.currentUser = user;
            if (_this.currentUser) {
                if (!_this.currentUser.permissions)
                    _this.currentUser.permissions = [];
                if (!_this.currentUser.roles)
                    _this.currentUser.roles = [];
                for (var i = 0; i < _this.currentUser.roles.length; i++) {
                    if (!_this.currentUser.roles[i].permissions) {
                        _this.currentUser.roles[i].permissions = [];
                    }
                }
            }
        }));
        return _this;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    AuthenticationService.prototype.setApi = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this._cacheService.set(KeyConst.AuthApi, url);
    };
    /**
     * @return {?}
     */
    AuthenticationService.prototype.getApi = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var url = this._cacheService.get(KeyConst.AuthApi);
        if (!url)
            url = 'v1/authentications';
        return url;
    };
    /**
     * @param {?} request
     * @return {?}
     */
    AuthenticationService.prototype.search = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.verify(this.httpClient.get(this.getApi() + "/search", { params: (/** @type {?} */ (request)) }), request.mockData);
    };
    /**
     * @param {?} request
     * @return {?}
     */
    AuthenticationService.prototype.retrieve = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.verify(this.httpClient.get(this.getApi() + "/" + request.payload.userName), request.mockData);
    };
    /**
     * @param {?} request
     * @return {?}
     */
    AuthenticationService.prototype.login = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.verify(this.httpClient.post(this.getApi() + "/login", request), request.mockData);
    };
    /**
     * @param {?} request
     * @return {?}
     */
    AuthenticationService.prototype.create = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.verify(this.httpClient.post(this.getApi() + "/", request), request.mockData);
    };
    /**
     * @param {?} request
     * @return {?}
     */
    AuthenticationService.prototype.update = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.verify(this.httpClient.put(this.getApi() + "/", request), request.mockData);
    };
    /**
     * @param {?} request
     * @return {?}
     */
    AuthenticationService.prototype.delete = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.verify(this.httpClient.delete(this.getApi() + "?ids=" + request.ids), request.mockData);
    };
    /**
     * @return {?}
     */
    AuthenticationService.prototype.refresh = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dataService.getToken((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (!response || !response.user)
                return;
            _this.httpClient.post(_this.getApi() + "/refresh", {
                token: response.refreshToken,
                payload: {
                    key: _this.settingService.useKey(),
                    secret: _this.settingService.useSecretKey()
                }
            }).subscribe();
        }));
    };
    /**
     * @param {?=} path
     * @param {?=} refresh
     * @return {?}
     */
    AuthenticationService.prototype.logout = /**
     * @param {?=} path
     * @param {?=} refresh
     * @return {?}
     */
    function (path, refresh) {
        var _this = this;
        if (path === void 0) { path = '/'; }
        if (refresh === void 0) { refresh = false; }
        if (!this.useMock()) {
            this.dataService.getToken((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (!response || !response.user)
                    return;
                _this.httpClient.post(_this.getApi() + "/logout", {
                    token: response.token,
                    refreshToken: response.refreshToken,
                    payload: {
                        key: _this.settingService.useKey(),
                        secret: _this.settingService.useSecretKey()
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
    };
    AuthenticationService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    AuthenticationService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: DataService },
        { type: SettingService },
        { type: CacheService },
        { type: Router }
    ]; };
    /** @nocollapse */ AuthenticationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.DataService), i0.ɵɵinject(i3.SettingService), i0.ɵɵinject(i4.CacheService), i0.ɵɵinject(i5.Router)); }, token: AuthenticationService, providedIn: "root" });
    return AuthenticationService;
}(MockService));
export { AuthenticationService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWlCbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7OztBQUVwRTtJQUMyQyxpREFBVztJQUdwRCwrQkFDWSxVQUFzQixFQUN0QixXQUF3QixFQUN4QixjQUE4QixFQUNoQyxhQUEyQixFQUMzQixPQUFlO1FBTHpCLFlBT0UsaUJBQU8sU0FlUjtRQXJCVyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDaEMsbUJBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUd2QixLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVE7Ozs7UUFBQyxVQUFDLFFBQXFDO1lBQzlELElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtnQkFBRSxPQUFPOztnQkFDcEMsSUFBSSxHQUFH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Ozs7OztJQUNsQywrQ0FBd0M7Ozs7O0lBQ3hDLDhDQUFtQzs7Ozs7SUFDbkMsd0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgQXV0aGVudGljYXRpb25Mb2dpblJlcXVlc3QsXHJcbiAgQXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlLFxyXG4gIFVzZXJWaWV3TW9kZWwsXHJcbiAgQXV0aGVudGljYXRpb25TZWFyY2hSZXF1ZXN0LFxyXG4gIEF1dGhlbnRpY2F0aW9uU2VhcmNoUmVzcG9uc2UsXHJcbiAgQXV0aGVudGljYXRpb25SZXRyaWV2ZVJlcXVlc3QsXHJcbiAgQXV0aGVudGljYXRpb25SZXRyaWV2ZVJlc3BvbnNlLFxyXG4gIEF1dGhlbnRpY2F0aW9uQ3JlYXRlUmVxdWVzdCxcclxuICBBdXRoZW50aWNhdGlvbkNyZWF0ZVJlc3BvbnNlLFxyXG4gIEF1dGhlbnRpY2F0aW9uVXBkYXRlUmVxdWVzdCxcclxuICBBdXRoZW50aWNhdGlvblVwZGF0ZVJlc3BvbnNlLFxyXG4gIEF1dGhlbnRpY2F0aW9uRGVsZXRlUmVxdWVzdCxcclxuICBBdXRoZW50aWNhdGlvbkRlbGV0ZVJlc3BvbnNlXHJcbn0gZnJvbSAnLi9hdXRoLm1vZGVsJztcclxuaW1wb3J0IHsgQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2NhY2hlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoQ29uc3QgfSBmcm9tICcuL2F1dGguY29uc3QnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNb2NrU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9tb2NrLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBLZXlDb25zdCB9IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMva2V5LmNvbnN0JztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2V0dGluZ1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblNlcnZpY2UgZXh0ZW5kcyBNb2NrU2VydmljZSB7XHJcbiAgcHVibGljIGN1cnJlbnRVc2VyOiBVc2VyVmlld01vZGVsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxyXG4gICAgcHJvdGVjdGVkIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBzZXR0aW5nU2VydmljZTogU2V0dGluZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9jYWNoZVNlcnZpY2U6IENhY2hlU2VydmljZSxcclxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5kYXRhU2VydmljZS5nZXRUb2tlbigocmVzcG9uc2U6IEF1dGhlbnRpY2F0aW9uTG9naW5SZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS51c2VyKSByZXR1cm47XHJcbiAgICAgIHZhciB1c2VyID0gcmVzcG9uc2UudXNlcjtcclxuICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRVc2VyLnBlcm1pc3Npb25zKSB0aGlzLmN1cnJlbnRVc2VyLnBlcm1pc3Npb25zID0gW107XHJcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRVc2VyLnJvbGVzKSB0aGlzLmN1cnJlbnRVc2VyLnJvbGVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRVc2VyLnJvbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFVzZXIucm9sZXNbaV0ucGVybWlzc2lvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlci5yb2xlc1tpXS5wZXJtaXNzaW9ucyA9IFtdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0QXBpKHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jYWNoZVNlcnZpY2Uuc2V0KEtleUNvbnN0LkF1dGhBcGksIHVybCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0QXBpKCk6IHN0cmluZyB7XHJcbiAgICB2YXIgdXJsID0gdGhpcy5fY2FjaGVTZXJ2aWNlLmdldChLZXlDb25zdC5BdXRoQXBpKTtcclxuICAgIGlmICghdXJsKSB1cmwgPSAndjEvYXV0aGVudGljYXRpb25zJztcclxuICAgIHJldHVybiB1cmw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VhcmNoKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uU2VhcmNoUmVxdWVzdCk6IE9ic2VydmFibGU8QXV0aGVudGljYXRpb25TZWFyY2hSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmVyaWZ5KHRoaXMuaHR0cENsaWVudC5nZXQ8QXV0aGVudGljYXRpb25TZWFyY2hSZXNwb25zZT4oYCR7dGhpcy5nZXRBcGkoKX0vc2VhcmNoYCwgeyBwYXJhbXM6IHJlcXVlc3QgYXMgYW55IH0pLCByZXF1ZXN0Lm1vY2tEYXRhKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJldHJpZXZlKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUmV0cmlldmVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxBdXRoZW50aWNhdGlvblJldHJpZXZlUmVzcG9uc2U+IHtcclxuICAgIHJldHVybiB0aGlzLnZlcmlmeSh0aGlzLmh0dHBDbGllbnQuZ2V0PEF1dGhlbnRpY2F0aW9uUmV0cmlldmVSZXNwb25zZT4oYCR7dGhpcy5nZXRBcGkoKX0vJHtyZXF1ZXN0LnBheWxvYWQudXNlck5hbWV9YCksIHJlcXVlc3QubW9ja0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvZ2luKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uTG9naW5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxBdXRoZW50aWNhdGlvbkxvZ2luUmVzcG9uc2U+IHtcclxuICAgIHJldHVybiB0aGlzLnZlcmlmeSh0aGlzLmh0dHBDbGllbnQucG9zdDxBdXRoZW50aWNhdGlvbkxvZ2luUmVzcG9uc2U+KGAke3RoaXMuZ2V0QXBpKCl9L2xvZ2luYCwgcmVxdWVzdCksIHJlcXVlc3QubW9ja0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZShyZXF1ZXN0OiBBdXRoZW50aWNhdGlvbkNyZWF0ZVJlcXVlc3QpOiBPYnNlcnZhYmxlPEF1dGhlbnRpY2F0aW9uQ3JlYXRlUmVzcG9uc2U+IHtcclxuICAgIHJldHVybiB0aGlzLnZlcmlmeSh0aGlzLmh0dHBDbGllbnQucG9zdDxBdXRoZW50aWNhdGlvbkNyZWF0ZVJlc3BvbnNlPihgJHt0aGlzLmdldEFwaSgpfS9gLCByZXF1ZXN0KSwgcmVxdWVzdC5tb2NrRGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uVXBkYXRlUmVxdWVzdCk6IE9ic2VydmFibGU8QXV0aGVudGljYXRpb25VcGRhdGVSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmVyaWZ5KHRoaXMuaHR0cENsaWVudC5wdXQ8QXV0aGVudGljYXRpb25VcGRhdGVSZXNwb25zZT4oYCR7dGhpcy5nZXRBcGkoKX0vYCwgcmVxdWVzdCksIHJlcXVlc3QubW9ja0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlbGV0ZShyZXF1ZXN0OiBBdXRoZW50aWNhdGlvbkRlbGV0ZVJlcXVlc3QpOiBPYnNlcnZhYmxlPEF1dGhlbnRpY2F0aW9uRGVsZXRlUmVzcG9uc2U+IHtcclxuICAgIHJldHVybiB0aGlzLnZlcmlmeSh0aGlzLmh0dHBDbGllbnQuZGVsZXRlPEF1dGhlbnRpY2F0aW9uRGVsZXRlUmVzcG9uc2U+KGAke3RoaXMuZ2V0QXBpKCl9P2lkcz0ke3JlcXVlc3QuaWRzfWApLCByZXF1ZXN0Lm1vY2tEYXRhKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWZyZXNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRhU2VydmljZS5nZXRUb2tlbigocmVzcG9uc2U6IEF1dGhlbnRpY2F0aW9uTG9naW5SZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS51c2VyKSByZXR1cm47XHJcbiAgICAgIHRoaXMuaHR0cENsaWVudC5wb3N0PEF1dGhlbnRpY2F0aW9uQ3JlYXRlUmVzcG9uc2U+KGAke3RoaXMuZ2V0QXBpKCl9L3JlZnJlc2hgLCB7XHJcbiAgICAgICAgdG9rZW46IHJlc3BvbnNlLnJlZnJlc2hUb2tlbixcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBrZXk6IHRoaXMuc2V0dGluZ1NlcnZpY2UudXNlS2V5KCksXHJcbiAgICAgICAgICBzZWNyZXQ6IHRoaXMuc2V0dGluZ1NlcnZpY2UudXNlU2VjcmV0S2V5KClcclxuICAgICAgICB9XHJcbiAgICAgIH0pLnN1YnNjcmliZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9nb3V0KHBhdGg6IHN0cmluZyA9ICcvJywgcmVmcmVzaDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMudXNlTW9jaygpKSB7XHJcbiAgICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0VG9rZW4oKHJlc3BvbnNlOiBBdXRoZW50aWNhdGlvbkxvZ2luUmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS51c2VyKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5odHRwQ2xpZW50LnBvc3Q8QXV0aGVudGljYXRpb25DcmVhdGVSZXNwb25zZT4oYCR7dGhpcy5nZXRBcGkoKX0vbG9nb3V0YCwge1xyXG4gICAgICAgICAgdG9rZW46IHJlc3BvbnNlLnRva2VuLFxyXG4gICAgICAgICAgcmVmcmVzaFRva2VuOiByZXNwb25zZS5yZWZyZXNoVG9rZW4sXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGtleTogdGhpcy5zZXR0aW5nU2VydmljZS51c2VLZXkoKSxcclxuICAgICAgICAgICAgc2VjcmV0OiB0aGlzLnNldHRpbmdTZXJ2aWNlLnVzZVNlY3JldEtleSgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY2FjaGVTZXJ2aWNlLnJlbW92ZShBdXRoQ29uc3QuVG9rZW4pO1xyXG4gICAgdGhpcy5fY2FjaGVTZXJ2aWNlLnJlbW92ZShLZXlDb25zdC5BdXRoQXBpKTtcclxuICAgIHRoaXMuX2NhY2hlU2VydmljZS5yZW1vdmUoS2V5Q29uc3QuUmVsb2FkKTtcclxuICAgIHRoaXMuX2NhY2hlU2VydmljZS5yZW1vdmUoS2V5Q29uc3QuS2V5KTtcclxuICAgIHRoaXMuX2NhY2hlU2VydmljZS5yZW1vdmUoS2V5Q29uc3QuU2VjcmV0S2V5KTtcclxuICAgIGlmIChwYXRoKSB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW3BhdGhdKTtcclxuICAgIGlmIChyZWZyZXNoKSB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gIH1cclxufSJdfQ==