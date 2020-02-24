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
export class SettingService {
    /**
     * @param {?} httpClient
     * @param {?} _cacheService
     */
    constructor(httpClient, _cacheService) {
        this.httpClient = httpClient;
        this._cacheService = _cacheService;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    search(request) {
        return this.httpClient.get(`v1/settings/search`, { params: (/** @type {?} */ (request)) });
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    useMock(value) {
        if (value == true || value == false) {
            this._cacheService.set('mock', value);
            return value;
        }
        /** @type {?} */
        var currentValue = (/** @type {?} */ (this._cacheService.get('mock')));
        if (!currentValue)
            return false;
        return currentValue;
    }
    /**
     * @param {?=} key
     * @return {?}
     */
    useKey(key) {
        if (key) {
            this._cacheService.set(KeyConst.Key, key);
            return key;
        }
        else {
            /** @type {?} */
            var currentKey = (/** @type {?} */ (this._cacheService.get(KeyConst.Key)));
            return currentKey;
        }
    }
    /**
     * @param {?=} key
     * @return {?}
     */
    useSecretKey(key) {
        if (key) {
            this._cacheService.set(KeyConst.SecretKey, key);
            return key;
        }
        else {
            /** @type {?} */
            var currentKey = (/** @type {?} */ (this._cacheService.get(KeyConst.SecretKey)));
            return currentKey;
        }
    }
}
SettingService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
SettingService.ctorParameters = () => [
    { type: HttpClient },
    { type: CacheService }
];
/** @nocollapse */ SettingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SettingService_Factory() { return new SettingService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.CacheService)); }, token: SettingService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUdsRCxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFDdkIsWUFDYyxVQUFzQixFQUN4QixhQUEyQjtRQUR6QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQ25DLENBQUM7Ozs7O0lBRUUsTUFBTSxDQUFDLE9BQTBCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQXdCLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLG1CQUFBLE9BQU8sRUFBTyxFQUFFLENBQUMsQ0FBQztJQUN4RyxDQUFDOzs7OztJQUVNLE9BQU8sQ0FBQyxLQUFlO1FBQzFCLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0QyxPQUFPLEtBQUssQ0FBQztTQUNoQjs7WUFDRyxZQUFZLEdBQUcsbUJBQVMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUE7UUFDMUQsSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNoQyxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxHQUFZO1FBQ3RCLElBQUksR0FBRyxFQUFFO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMxQyxPQUFPLEdBQUcsQ0FBQztTQUNkO2FBQU07O2dCQUNDLFVBQVUsR0FBRyxtQkFBUSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUE7WUFDN0QsT0FBTyxVQUFVLENBQUM7U0FDckI7SUFDTCxDQUFDOzs7OztJQUVNLFlBQVksQ0FBQyxHQUFZO1FBQzVCLElBQUksR0FBRyxFQUFFO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNoRCxPQUFPLEdBQUcsQ0FBQztTQUNkO2FBQU07O2dCQUNDLFVBQVUsR0FBRyxtQkFBUSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUE7WUFDbkUsT0FBTyxVQUFVLENBQUM7U0FDckI7SUFDTCxDQUFDOzs7WUF2Q0osVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQUx6QixVQUFVO1lBRVYsWUFBWTs7Ozs7Ozs7SUFNYixvQ0FBZ0M7Ozs7O0lBQ2hDLHVDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTZXR0aW5nU2VhcmNoUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXNlUmVxdWVzdCB9IGZyb20gJy4uL21vZGVscy9iYXNlLm1vZGVsJztcclxuaW1wb3J0IHsgQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnLi9jYWNoZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgS2V5Q29uc3QgfSBmcm9tICcuLi9jb25zdGFudHMva2V5LmNvbnN0JztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudCxcclxuICAgICAgICBwcml2YXRlIF9jYWNoZVNlcnZpY2U6IENhY2hlU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgc2VhcmNoKHJlcXVlc3Q6IFNlYXJjaEJhc2VSZXF1ZXN0KTogT2JzZXJ2YWJsZTxTZXR0aW5nU2VhcmNoUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxTZXR0aW5nU2VhcmNoUmVzcG9uc2U+KGB2MS9zZXR0aW5ncy9zZWFyY2hgLCB7IHBhcmFtczogcmVxdWVzdCBhcyBhbnkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVzZU1vY2sodmFsdWU/OiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IHRydWUgfHwgdmFsdWUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FjaGVTZXJ2aWNlLnNldCgnbW9jaycsIHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gPGJvb2xlYW4+dGhpcy5fY2FjaGVTZXJ2aWNlLmdldCgnbW9jaycpO1xyXG4gICAgICAgIGlmICghY3VycmVudFZhbHVlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXNlS2V5KGtleT86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKGtleSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWNoZVNlcnZpY2Uuc2V0KEtleUNvbnN0LktleSwga2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudEtleSA9IDxzdHJpbmc+dGhpcy5fY2FjaGVTZXJ2aWNlLmdldChLZXlDb25zdC5LZXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEtleTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVzZVNlY3JldEtleShrZXk/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FjaGVTZXJ2aWNlLnNldChLZXlDb25zdC5TZWNyZXRLZXksIGtleSk7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRLZXkgPSA8c3RyaW5nPnRoaXMuX2NhY2hlU2VydmljZS5nZXQoS2V5Q29uc3QuU2VjcmV0S2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==