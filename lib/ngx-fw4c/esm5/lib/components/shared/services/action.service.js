/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/services/action.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { SettingService } from './setting.service';
import { Breadcrumb } from '../models/base.model';
import * as i0 from "@angular/core";
import * as i1 from "./setting.service";
var ActionService = /** @class */ (function () {
    function ActionService(_settingService) {
        this._settingService = _settingService;
    }
    /**
     * @param {?} callback
     * @param {?=} timeout
     * @return {?}
     */
    ActionService.prototype.executeAsync = /**
     * @param {?} callback
     * @param {?=} timeout
     * @return {?}
     */
    function (callback, timeout) {
        if (timeout === void 0) { timeout = 50; }
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (callback)
                callback();
        }), timeout);
    };
    /**
     * @return {?}
     */
    ActionService.prototype.scrollTop = /**
     * @return {?}
     */
    function () {
        window.scrollTo(0, 0);
    };
    /**
     * @return {?}
     */
    ActionService.prototype.isMobile = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var userAgent = navigator.userAgent;
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(userAgent));
    };
    /**
     * @template T
     * @param {?} callback
     * @return {?}
     */
    ActionService.prototype.verify = /**
     * @template T
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        /** @type {?} */
        var mock = this._settingService.useMock();
        if (mock)
            return of((/** @type {?} */ ({})));
        return callback;
    };
    /**
     * @param {?} item
     * @param {?} menuTabs
     * @param {?=} callback
     * @return {?}
     */
    ActionService.prototype.changeItem = /**
     * @param {?} item
     * @param {?} menuTabs
     * @param {?=} callback
     * @return {?}
     */
    function (item, menuTabs, callback) {
        /** @type {?} */
        var items = [];
        /** @type {?} */
        var parent = (/** @type {?} */ (this.retrieveParent(item.state, menuTabs)));
        if (parent != null) {
            items.push(parent);
        }
        if (!items.find((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.label == item.name; }))) {
            items.push(new Breadcrumb({
                label: item.name,
                url: item.mainState ? "/" + item.mainState + "/" + item.state : "" + item.state
            }));
        }
        if (callback)
            callback(items);
        return items;
    };
    /**
     * @param {?} state
     * @param {?} menuTabs
     * @return {?}
     */
    ActionService.prototype.retrieveParent = /**
     * @param {?} state
     * @param {?} menuTabs
     * @return {?}
     */
    function (state, menuTabs) {
        if (!menuTabs || menuTabs.length == 0)
            return;
        for (var i = 0; i < menuTabs.length; i++) {
            /** @type {?} */
            var items = menuTabs[i].items;
            if (!items || items.length == 0)
                continue;
            for (var j = 0; j < items.length; j++) {
                /** @type {?} */
                var children = items[j].children;
                if (!children || children.length == 0)
                    return;
                for (var k = 0; k < children.length; k++) {
                    if (children[k].state == state)
                        return new Breadcrumb({
                            label: items[j].label,
                            state: children[k].mainState,
                            url: children[k].mainState ? "/" + children[k].mainState + "/" + children[0].state : "" + children[0].state
                        });
                }
            }
        }
        return null;
    };
    /**
     * @param {?} state
     * @param {?} menuTabs
     * @return {?}
     */
    ActionService.prototype.retrieveChild = /**
     * @param {?} state
     * @param {?} menuTabs
     * @return {?}
     */
    function (state, menuTabs) {
        if (!menuTabs || menuTabs.length == 0)
            return;
        for (var i = 0; i < menuTabs.length; i++) {
            /** @type {?} */
            var items = menuTabs[i].items;
            if (!items || items.length == 0)
                continue;
            for (var j = 0; j < items.length; j++) {
                /** @type {?} */
                var children = items[j].children;
                if (!children || children.length == 0)
                    return;
                for (var k = 0; k < children.length; k++) {
                    if (children[k].mainState == state) {
                        return new Breadcrumb({
                            state: children[k].mainState,
                            label: children[k].name,
                            url: children[k].mainState
                                ? "/" + children[k].mainState + "/" + children[0].state
                                : "/" + children[0].state
                        });
                    }
                }
            }
        }
        return null;
    };
    /**
     * @param {?} state
     * @param {?} menuTabs
     * @return {?}
     */
    ActionService.prototype.retrieveStateName = /**
     * @param {?} state
     * @param {?} menuTabs
     * @return {?}
     */
    function (state, menuTabs) {
        if (!menuTabs || menuTabs.length == 0)
            return;
        for (var i = 0; i < menuTabs.length; i++) {
            /** @type {?} */
            var items = menuTabs[i].items;
            if (!items || items.length == 0)
                continue;
            for (var j = 0; j < items.length; j++) {
                /** @type {?} */
                var children = items[j].children;
                if (!children || children.length == 0)
                    return;
                for (var k = 0; k < children.length; k++) {
                    if (children[k].state == state)
                        return children[k].name;
                }
            }
        }
        return null;
    };
    ActionService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ActionService.ctorParameters = function () { return [
        { type: SettingService }
    ]; };
    /** @nocollapse */ ActionService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ActionService_Factory() { return new ActionService(i0.ɵɵinject(i1.SettingService)); }, token: ActionService, providedIn: "root" });
    return ActionService;
}());
export { ActionService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActionService.prototype._settingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9zZXJ2aWNlcy9hY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBVyxNQUFNLHNCQUFzQixDQUFDOzs7QUFFM0Q7SUFFSSx1QkFDWSxlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFDdkMsQ0FBQzs7Ozs7O0lBRUUsb0NBQVk7Ozs7O0lBQW5CLFVBQW9CLFFBQW1CLEVBQUUsT0FBb0I7UUFBcEIsd0JBQUEsRUFBQSxZQUFvQjtRQUN6RCxVQUFVOzs7UUFBQztZQUNQLElBQUksUUFBUTtnQkFBRSxRQUFRLEVBQUUsQ0FBQztRQUM3QixDQUFDLEdBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVNLGlDQUFTOzs7SUFBaEI7UUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRU0sZ0NBQVE7OztJQUFmOztZQUNVLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUztRQUNyQyxPQUFPLENBQUMsb0ZBQW9GLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDbEgsQ0FBQzs7Ozs7O0lBRU0sOEJBQU07Ozs7O0lBQWIsVUFBaUIsUUFBdUI7O1lBQ2hDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRTtRQUN6QyxJQUFJLElBQUk7WUFBRSxPQUFPLEVBQUUsQ0FBQyxtQkFBQSxFQUFFLEVBQUss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SUFFTSx5Q0FBaUI7Ozs7O0lBQXhCLFVBQXlCLEtBQWEsRUFBRSxRQUFtQjtRQUN2RCxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU87UUFDOUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUNsQyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDN0IsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUM7Z0JBQUUsU0FBUztZQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7b0JBQy9CLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTtnQkFDaEMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUM7b0JBQUUsT0FBTztnQkFDOUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3RDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLO3dCQUFFLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztpQkFDM0Q7YUFDSjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Z0JBckdKLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBSHpCLGNBQWM7Ozt3QkFGdkI7Q0EyR0MsQUF0R0QsSUFzR0M7U0FyR1ksYUFBYTs7Ozs7O0lBRWxCLHdDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU2V0dGluZ1NlcnZpY2UgfSBmcm9tICcuL3NldHRpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IEJyZWFkY3J1bWIsIE1lbnVUYWIgfSBmcm9tICcuLi9tb2RlbHMvYmFzZS5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQWN0aW9uU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9zZXR0aW5nU2VydmljZTogU2V0dGluZ1NlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIGV4ZWN1dGVBc3luYyhjYWxsYmFjazogKCkgPT4gYW55LCB0aW1lb3V0OiBudW1iZXIgPSA1MCk6IHZvaWQge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSwgdGltZW91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjcm9sbFRvcCgpOiB2b2lkIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICAgICAgcmV0dXJuICgvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaXxNb2JpbGV8bW9iaWxlfENyaU9TL2kudGVzdCh1c2VyQWdlbnQpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmVyaWZ5PFQ+KGNhbGxiYWNrOiBPYnNlcnZhYmxlPFQ+KTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICAgICAgdmFyIG1vY2sgPSB0aGlzLl9zZXR0aW5nU2VydmljZS51c2VNb2NrKCk7XHJcbiAgICAgICAgaWYgKG1vY2spIHJldHVybiBvZih7fSBhcyBUKTtcclxuICAgICAgICByZXR1cm4gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZUl0ZW0oaXRlbTogYW55LCBtZW51VGFiczogTWVudVRhYltdLCBjYWxsYmFjaz86IChicmVhZENydW1iczogQnJlYWRjcnVtYltdKSA9PiBhbnkpOiBCcmVhZGNydW1iW10ge1xyXG4gICAgICAgIHZhciBpdGVtczogQnJlYWRjcnVtYltdID0gW107XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IDxCcmVhZGNydW1iPnRoaXMucmV0cmlldmVQYXJlbnQoaXRlbS5zdGF0ZSwgbWVudVRhYnMpO1xyXG4gICAgICAgIGlmIChwYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKHBhcmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXRlbXMuZmluZChzID0+IHMubGFiZWwgPT0gaXRlbS5uYW1lKSkge1xyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKG5ldyBCcmVhZGNydW1iKHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBpdGVtLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGl0ZW0ubWFpblN0YXRlID8gYC8ke2l0ZW0ubWFpblN0YXRlfS8ke2l0ZW0uc3RhdGV9YCA6IGAke2l0ZW0uc3RhdGV9YFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soaXRlbXMpO1xyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmV0cmlldmVQYXJlbnQoc3RhdGU6IHN0cmluZywgbWVudVRhYnM6IE1lbnVUYWJbXSk6IEJyZWFkY3J1bWIge1xyXG4gICAgICAgIGlmICghbWVudVRhYnMgfHwgbWVudVRhYnMubGVuZ3RoID09IDApIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVUYWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IG1lbnVUYWJzW2ldLml0ZW1zO1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PSAwKSBjb250aW51ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gaXRlbXNbal0uY2hpbGRyZW47XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuIHx8IGNoaWxkcmVuLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGNoaWxkcmVuLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuW2tdLnN0YXRlID09IHN0YXRlKSByZXR1cm4gbmV3IEJyZWFkY3J1bWIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogaXRlbXNbal0ubGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBjaGlsZHJlbltrXS5tYWluU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY2hpbGRyZW5ba10ubWFpblN0YXRlID8gYC8ke2NoaWxkcmVuW2tdLm1haW5TdGF0ZX0vJHtjaGlsZHJlblswXS5zdGF0ZX1gIDogYCR7Y2hpbGRyZW5bMF0uc3RhdGV9YFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXRyaWV2ZUNoaWxkKHN0YXRlOiBzdHJpbmcsIG1lbnVUYWJzOiBNZW51VGFiW10pOiBCcmVhZGNydW1iIHtcclxuICAgICAgICBpZiAoIW1lbnVUYWJzIHx8IG1lbnVUYWJzLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51VGFicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBtZW51VGFic1tpXS5pdGVtcztcclxuICAgICAgICAgICAgaWYgKCFpdGVtcyB8fCBpdGVtcy5sZW5ndGggPT0gMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlbXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IGl0ZW1zW2pdLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbiB8fCBjaGlsZHJlbi5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjaGlsZHJlbi5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbltrXS5tYWluU3RhdGUgPT0gc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCcmVhZGNydW1iKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBjaGlsZHJlbltrXS5tYWluU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogY2hpbGRyZW5ba10ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY2hpbGRyZW5ba10ubWFpblN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgLyR7Y2hpbGRyZW5ba10ubWFpblN0YXRlfS8ke2NoaWxkcmVuWzBdLnN0YXRlfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGAvJHtjaGlsZHJlblswXS5zdGF0ZX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmV0cmlldmVTdGF0ZU5hbWUoc3RhdGU6IHN0cmluZywgbWVudVRhYnM6IE1lbnVUYWJbXSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCFtZW51VGFicyB8fCBtZW51VGFicy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudVRhYnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gbWVudVRhYnNbaV0uaXRlbXM7XHJcbiAgICAgICAgICAgIGlmICghaXRlbXMgfHwgaXRlbXMubGVuZ3RoID09IDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZW1zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBpdGVtc1tqXS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgICAgIGlmICghY2hpbGRyZW4gfHwgY2hpbGRyZW4ubGVuZ3RoID09IDApIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY2hpbGRyZW4ubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5ba10uc3RhdGUgPT0gc3RhdGUpIHJldHVybiBjaGlsZHJlbltrXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==