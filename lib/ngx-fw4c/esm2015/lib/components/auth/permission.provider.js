/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/auth/permission.provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthenticationService } from './auth.service';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
export class PermisisonProvider {
    /**
     * @param {?} authenticationService
     */
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    /**
     * @param {?} user
     * @param {?} permisisonKey
     * @param {?=} activityKey
     * @return {?}
     */
    hasPermisison(user, permisisonKey, activityKey = null) {
        if (!permisisonKey)
            return false;
        if (['/', '/auth', '/forbidden', '/not-found'].indexOf(permisisonKey) > -1)
            return true;
        /** @type {?} */
        var currentPermisison = this.retrieveCurrentPermission(user, permisisonKey);
        if (!currentPermisison)
            return false;
        if (!activityKey)
            return true;
        /** @type {?} */
        var currentActivity = currentPermisison.activities.find((/**
         * @param {?} s
         * @return {?}
         */
        s => s.enabled && s.key == activityKey));
        return currentActivity ? true : false;
    }
    /**
     * @private
     * @param {?} user
     * @param {?} key
     * @return {?}
     */
    retrieveCurrentPermission(user, key) {
        if (!key || !user)
            return null;
        /** @type {?} */
        let currentPermisison = user.permissions.find((/**
         * @param {?} s
         * @return {?}
         */
        s => s.enabled && key.indexOf(s.key) > -1));
        if (!currentPermisison) {
            for (let i = 0; i < user.roles.length; i++) {
                if (user.roles[i].enabled) {
                    for (let j = 0; j < user.roles[i].permissions.length; j++) {
                        if (user.roles[i].permissions[j].enabled && key.indexOf(user.roles[i].permissions[j].key) > -1)
                            return user.roles[i].permissions[j];
                    }
                }
            }
        }
        return currentPermisison;
    }
}
PermisisonProvider.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
PermisisonProvider.ctorParameters = () => [
    { type: AuthenticationService }
];
/** @nocollapse */ PermisisonProvider.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PermisisonProvider_Factory() { return new PermisisonProvider(i0.ɵɵinject(i1.AuthenticationService)); }, token: PermisisonProvider, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    PermisisonProvider.prototype.authenticationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXV0aC9wZXJtaXNzaW9uLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBR3ZELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFDN0IsWUFDWSxxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUNwRCxDQUFDOzs7Ozs7O0lBRUUsYUFBYSxDQUFDLElBQW1CLEVBQUUsYUFBcUIsRUFBRSxjQUFzQixJQUFJO1FBQ3pGLElBQUksQ0FBQyxhQUFhO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQzs7WUFDcEYsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksRUFBRSxhQUFhLENBQUM7UUFDM0UsSUFBSSxDQUFDLGlCQUFpQjtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTyxJQUFJLENBQUM7O1lBQzFCLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLFdBQVcsRUFBQztRQUMvRixPQUFPLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDeEMsQ0FBQzs7Ozs7OztJQUVPLHlCQUF5QixDQUFDLElBQW1CLEVBQUUsR0FBVztRQUNoRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDOztZQUMzQixpQkFBaUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUM7UUFDeEYsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtvQkFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDekQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDckk7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDOzs7WUE3QkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQUZ6QixxQkFBcUI7Ozs7Ozs7O0lBSzFCLG1EQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblZpZXdNb2RlbCwgVXNlclZpZXdNb2RlbCB9IGZyb20gJy4vYXV0aC5tb2RlbCc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNpc29uUHJvdmlkZXIge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgcHVibGljIGhhc1Blcm1pc2lzb24odXNlcjogVXNlclZpZXdNb2RlbCwgcGVybWlzaXNvbktleTogc3RyaW5nLCBhY3Rpdml0eUtleTogc3RyaW5nID0gbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFwZXJtaXNpc29uS2V5KSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoWycvJywgJy9hdXRoJywgJy9mb3JiaWRkZW4nLCAnL25vdC1mb3VuZCddLmluZGV4T2YocGVybWlzaXNvbktleSkgPiAtMSkgcmV0dXJuIHRydWU7XHJcbiAgICB2YXIgY3VycmVudFBlcm1pc2lzb24gPSB0aGlzLnJldHJpZXZlQ3VycmVudFBlcm1pc3Npb24odXNlciwgcGVybWlzaXNvbktleSk7XHJcbiAgICBpZiAoIWN1cnJlbnRQZXJtaXNpc29uKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoIWFjdGl2aXR5S2V5KSByZXR1cm4gdHJ1ZTtcclxuICAgIHZhciBjdXJyZW50QWN0aXZpdHkgPSBjdXJyZW50UGVybWlzaXNvbi5hY3Rpdml0aWVzLmZpbmQocyA9PiBzLmVuYWJsZWQgJiYgcy5rZXkgPT0gYWN0aXZpdHlLZXkpO1xyXG4gICAgcmV0dXJuIGN1cnJlbnRBY3Rpdml0eSA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmV0cmlldmVDdXJyZW50UGVybWlzc2lvbih1c2VyOiBVc2VyVmlld01vZGVsLCBrZXk6IHN0cmluZyk6IFBlcm1pc3Npb25WaWV3TW9kZWwge1xyXG4gICAgaWYgKCFrZXkgfHwgIXVzZXIpIHJldHVybiBudWxsO1xyXG4gICAgbGV0IGN1cnJlbnRQZXJtaXNpc29uID0gdXNlci5wZXJtaXNzaW9ucy5maW5kKHMgPT4gcy5lbmFibGVkICYmIGtleS5pbmRleE9mKHMua2V5KSA+IC0xKTtcclxuICAgIGlmICghY3VycmVudFBlcm1pc2lzb24pIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyLnJvbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHVzZXIucm9sZXNbaV0uZW5hYmxlZCkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB1c2VyLnJvbGVzW2ldLnBlcm1pc3Npb25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyLnJvbGVzW2ldLnBlcm1pc3Npb25zW2pdLmVuYWJsZWQgJiYga2V5LmluZGV4T2YodXNlci5yb2xlc1tpXS5wZXJtaXNzaW9uc1tqXS5rZXkpID4gLTEpIHJldHVybiB1c2VyLnJvbGVzW2ldLnBlcm1pc3Npb25zW2pdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGN1cnJlbnRQZXJtaXNpc29uO1xyXG4gIH1cclxufSJdfQ==