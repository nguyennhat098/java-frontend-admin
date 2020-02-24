/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/services/setting.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CacheService } from './cache.service';
import { KeyConst } from '../constants/key.const';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./cache.service";
var SettingService = /** @class */ (function () {
    function SettingService(httpClient, _cacheService) {
        this.httpClient = httpClient;
        this._cacheService = _cacheService;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    SettingService.prototype.search = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.httpClient.get("v1/settings/search", { params: (/** @type {?} */ (request)) });
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    SettingService.prototype.useMock = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value == true || value == false) {
            this._cacheService.set('mock', value);
            return value;
        }
        /** @type {?} */
        var currentValue = (/** @type {?} */ (this._cacheService.get('mock')));
        if (!currentValue)
            return false;
        return currentValue;
    };
    /**
     * @param {?=} key
     * @return {?}
     */
    SettingService.prototype.useKey = /**
     * @param {?=} key
     * @return {?}
     */
    function (key) {
        if (key) {
            this._cacheService.set(KeyConst.Key, key);
            return key;
        }
        else {
            /** @type {?} */
            var currentKey = (/** @type {?} */ (this._cacheService.get(KeyConst.Key)));
            return currentKey;
        }
    };
    /**
     * @param {?=} key
     * @return {?}
     */
    SettingService.prototype.useSecretKey = /**
     * @param {?=} key
     * @return {?}
     */
    function (key) {
        if (key) {
            this._cacheService.set(KeyConst.SecretKey, key);
            return key;
        }
        else {
            /** @type {?} */
            var currentKey = (/** @type {?} */ (this._cacheService.get(KeyConst.SecretKey)));
            return currentKey;
        }
    };
    SettingService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    SettingService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: CacheService }
    ]; };
    /** @nocollapse */ SettingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SettingService_Factory() { return new SettingService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.CacheService)); }, token: SettingService, providedIn: "root" });
    return SettingService;
}());
export { SettingService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SettingService.prototype.httpClient;
    /**
     * @type {?}
     * @private
     */
    SettingService.prototype._cacheService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVsRDtJQUVJLHdCQUNjLFVBQXNCLEVBQ3hCLGFBQTJCO1FBRHpCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWM7SUFDbkMsQ0FBQzs7Ozs7SUFFRSwrQkFBTTs7OztJQUFiLFVBQWMsT0FBMEI7UUFDcEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBd0Isb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsbUJBQUEsT0FBTyxFQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7Ozs7O0lBRU0sZ0NBQU87Ozs7SUFBZCxVQUFlLEtBQWU7UUFDMUIsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUU7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCOztZQUNHLFlBQVksR0FBRyxtQkFBUyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBQTtRQUMxRCxJQUFJLENBQUMsWUFBWTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ2hDLE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU0sK0JBQU07Ozs7SUFBYixVQUFjLEdBQVk7UUFDdEIsSUFBSSxHQUFHLEVBQUU7WUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sR0FBRyxDQUFDO1NBQ2Q7YUFBTTs7Z0JBQ0MsVUFBVSxHQUFHLG1CQUFRLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBQTtZQUM3RCxPQUFPLFVBQVUsQ0FBQztTQUNyQjtJQUNMLENBQUM7Ozs7O0lBRU0scUNBQVk7Ozs7SUFBbkIsVUFBb0IsR0FBWTtRQUM1QixJQUFJLEdBQUcsRUFBRTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDaEQsT0FBTyxHQUFHLENBQUM7U0FDZDthQUFNOztnQkFDQyxVQUFVLEdBQUcsbUJBQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFBO1lBQ25FLE9BQU8sVUFBVSxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQzs7Z0JBdkNKLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBTHpCLFVBQVU7Z0JBRVYsWUFBWTs7O3lCQUxyQjtDQWdEQyxBQXhDRCxJQXdDQztTQXZDWSxjQUFjOzs7Ozs7SUFFbkIsb0NBQWdDOzs7OztJQUNoQyx1Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU2V0dGluZ1NlYXJjaFJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgU2VhcmNoQmFzZVJlcXVlc3QgfSBmcm9tICcuLi9tb2RlbHMvYmFzZS5tb2RlbCc7XHJcbmltcG9ydCB7IENhY2hlU2VydmljZSB9IGZyb20gJy4vY2FjaGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEtleUNvbnN0IH0gZnJvbSAnLi4vY29uc3RhbnRzL2tleS5jb25zdCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBfY2FjaGVTZXJ2aWNlOiBDYWNoZVNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIHNlYXJjaChyZXF1ZXN0OiBTZWFyY2hCYXNlUmVxdWVzdCk6IE9ic2VydmFibGU8U2V0dGluZ1NlYXJjaFJlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8U2V0dGluZ1NlYXJjaFJlc3BvbnNlPihgdjEvc2V0dGluZ3Mvc2VhcmNoYCwgeyBwYXJhbXM6IHJlcXVlc3QgYXMgYW55IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1c2VNb2NrKHZhbHVlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlIHx8IHZhbHVlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlU2VydmljZS5zZXQoJ21vY2snLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IDxib29sZWFuPnRoaXMuX2NhY2hlU2VydmljZS5nZXQoJ21vY2snKTtcclxuICAgICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVzZUtleShrZXk/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FjaGVTZXJ2aWNlLnNldChLZXlDb25zdC5LZXksIGtleSk7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRLZXkgPSA8c3RyaW5nPnRoaXMuX2NhY2hlU2VydmljZS5nZXQoS2V5Q29uc3QuS2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1c2VTZWNyZXRLZXkoa2V5Pzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlU2VydmljZS5zZXQoS2V5Q29uc3QuU2VjcmV0S2V5LCBrZXkpO1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50S2V5ID0gPHN0cmluZz50aGlzLl9jYWNoZVNlcnZpY2UuZ2V0KEtleUNvbnN0LlNlY3JldEtleSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50S2V5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=