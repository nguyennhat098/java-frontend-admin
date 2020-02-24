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
export class ActionService {
    /**
     * @param {?} _settingService
     */
    constructor(_settingService) {
        this._settingService = _settingService;
    }
    /**
     * @param {?} callback
     * @param {?=} timeout
     * @return {?}
     */
    executeAsync(callback, timeout = 50) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (callback)
                callback();
        }), timeout);
    }
    /**
     * @return {?}
     */
    scrollTop() {
        window.scrollTo(0, 0);
    }
    /**
     * @return {?}
     */
    isMobile() {
        /** @type {?} */
        const userAgent = navigator.userAgent;
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(userAgent));
    }
    /**
     * @template T
     * @param {?} callback
     * @return {?}
     */
    verify(callback) {
        /** @type {?} */
        var mock = this._settingService.useMock();
        if (mock)
            return of((/** @type {?} */ ({})));
        return callback;
    }
    /**
     * @param {?} item
     * @param {?} menuTabs
     * @param {?=} callback
     * @return {?}
     */
    changeItem(item, menuTabs, callback) {
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
        s => s.label == item.name))) {
            items.push(new Breadcrumb({
                label: item.name,
                url: item.mainState ? `/${item.mainState}/${item.state}` : `${item.state}`
            }));
        }
        if (callback)
            callback(items);
        return items;
    }
    /**
     * @param {?} state
     * @param {?} menuTabs
     * @return {?}
     */
    retrieveParent(state, menuTabs) {
        if (!menuTabs || menuTabs.length == 0)
            return;
        for (let i = 0; i < menuTabs.length; i++) {
            /** @type {?} */
            var items = menuTabs[i].items;
            if (!items || items.length == 0)
                continue;
            for (let j = 0; j < items.length; j++) {
                /** @type {?} */
                var children = items[j].children;
                if (!children || children.length == 0)
                    return;
                for (let k = 0; k < children.length; k++) {
                    if (children[k].state == state)
                        return new Breadcrumb({
                            label: items[j].label,
                            state: children[k].mainState,
                            url: children[k].mainState ? `/${children[k].mainState}/${children[0].state}` : `${children[0].state}`
                        });
                }
            }
        }
        return null;
    }
    /**
     * @param {?} state
     * @param {?} menuTabs
     * @return {?}
     */
    retrieveChild(state, menuTabs) {
        if (!menuTabs || menuTabs.length == 0)
            return;
        for (let i = 0; i < menuTabs.length; i++) {
            /** @type {?} */
            var items = menuTabs[i].items;
            if (!items || items.length == 0)
                continue;
            for (let j = 0; j < items.length; j++) {
                /** @type {?} */
                var children = items[j].children;
                if (!children || children.length == 0)
                    return;
                for (let k = 0; k < children.length; k++) {
                    if (children[k].mainState == state) {
                        return new Breadcrumb({
                            state: children[k].mainState,
                            label: children[k].name,
                            url: children[k].mainState
                                ? `/${children[k].mainState}/${children[0].state}`
                                : `/${children[0].state}`
                        });
                    }
                }
            }
        }
        return null;
    }
    /**
     * @param {?} state
     * @param {?} menuTabs
     * @return {?}
     */
    retrieveStateName(state, menuTabs) {
        if (!menuTabs || menuTabs.length == 0)
            return;
        for (let i = 0; i < menuTabs.length; i++) {
            /** @type {?} */
            var items = menuTabs[i].items;
            if (!items || items.length == 0)
                continue;
            for (let j = 0; j < items.length; j++) {
                /** @type {?} */
                var children = items[j].children;
                if (!children || children.length == 0)
                    return;
                for (let k = 0; k < children.length; k++) {
                    if (children[k].state == state)
                        return children[k].name;
                }
            }
        }
        return null;
    }
}
ActionService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ActionService.ctorParameters = () => [
    { type: SettingService }
];
/** @nocollapse */ ActionService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ActionService_Factory() { return new ActionService(i0.ɵɵinject(i1.SettingService)); }, token: ActionService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActionService.prototype._settingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9zZXJ2aWNlcy9hY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBVyxNQUFNLHNCQUFzQixDQUFDOzs7QUFHM0QsTUFBTSxPQUFPLGFBQWE7Ozs7SUFDdEIsWUFDWSxlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFDdkMsQ0FBQzs7Ozs7O0lBRUUsWUFBWSxDQUFDLFFBQW1CLEVBQUUsVUFBa0IsRUFBRTtRQUN6RCxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDWixJQUFJLFFBQVE7Z0JBQUUsUUFBUSxFQUFFLENBQUM7UUFDN0IsQ0FBQyxHQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFTSxTQUFTO1FBQ1osTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVNLFFBQVE7O2NBQ0wsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTO1FBQ3JDLE9BQU8sQ0FBQyxvRkFBb0YsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNsSCxDQUFDOzs7Ozs7SUFFTSxNQUFNLENBQUksUUFBdUI7O1lBQ2hDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRTtRQUN6QyxJQUFJLElBQUk7WUFBRSxPQUFPLEVBQUUsQ0FBQyxtQkFBQSxFQUFFLEVBQUssQ0FBQyxDQUFDO1FBQzdCLE9BQU8sUUFBUSxDQUFD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UUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU87UUFDOUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUNsQyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDN0IsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUM7Z0JBQUUsU0FBUztZQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7b0JBQy9CLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTtnQkFDaEMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUM7b0JBQUUsT0FBTztnQkFDOUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3RDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLO3dCQUFFLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztpQkFDM0Q7YUFDSjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7O1lBckdKLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFIekIsY0FBYzs7Ozs7Ozs7SUFNZix3Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNldHRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9zZXR0aW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1iLCBNZW51VGFiIH0gZnJvbSAnLi4vbW9kZWxzL2Jhc2UubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEFjdGlvblNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfc2V0dGluZ1NlcnZpY2U6IFNldHRpbmdTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBleGVjdXRlQXN5bmMoY2FsbGJhY2s6ICgpID0+IGFueSwgdGltZW91dDogbnVtYmVyID0gNTApOiB2b2lkIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0sIHRpbWVvdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzY3JvbGxUb3AoKTogdm9pZCB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc01vYmlsZSgpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgICAgIHJldHVybiAoL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbml8TW9iaWxlfG1vYmlsZXxDcmlPUy9pLnRlc3QodXNlckFnZW50KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZlcmlmeTxUPihjYWxsYmFjazogT2JzZXJ2YWJsZTxUPik6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgICAgIHZhciBtb2NrID0gdGhpcy5fc2V0dGluZ1NlcnZpY2UudXNlTW9jaygpO1xyXG4gICAgICAgIGlmIChtb2NrKSByZXR1cm4gb2Yoe30gYXMgVCk7XHJcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VJdGVtKGl0ZW06IGFueSwgbWVudVRhYnM6IE1lbnVUYWJbXSwgY2FsbGJhY2s/OiAoYnJlYWRDcnVtYnM6IEJyZWFkY3J1bWJbXSkgPT4gYW55KTogQnJlYWRjcnVtYltdIHtcclxuICAgICAgICB2YXIgaXRlbXM6IEJyZWFkY3J1bWJbXSA9IFtdO1xyXG4gICAgICAgIHZhciBwYXJlbnQgPSA8QnJlYWRjcnVtYj50aGlzLnJldHJpZXZlUGFyZW50KGl0ZW0uc3RhdGUsIG1lbnVUYWJzKTtcclxuICAgICAgICBpZiAocGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaXRlbXMucHVzaChwYXJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWl0ZW1zLmZpbmQocyA9PiBzLmxhYmVsID09IGl0ZW0ubmFtZSkpIHtcclxuICAgICAgICAgICAgaXRlbXMucHVzaChuZXcgQnJlYWRjcnVtYih7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogaXRlbS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBpdGVtLm1haW5TdGF0ZSA/IGAvJHtpdGVtLm1haW5TdGF0ZX0vJHtpdGVtLnN0YXRlfWAgOiBgJHtpdGVtLnN0YXRlfWBcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGl0ZW1zKTtcclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJldHJpZXZlUGFyZW50KHN0YXRlOiBzdHJpbmcsIG1lbnVUYWJzOiBNZW51VGFiW10pOiBCcmVhZGNydW1iIHtcclxuICAgICAgICBpZiAoIW1lbnVUYWJzIHx8IG1lbnVUYWJzLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51VGFicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBtZW51VGFic1tpXS5pdGVtcztcclxuICAgICAgICAgICAgaWYgKCFpdGVtcyB8fCBpdGVtcy5sZW5ndGggPT0gMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlbXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IGl0ZW1zW2pdLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbiB8fCBjaGlsZHJlbi5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjaGlsZHJlbi5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbltrXS5zdGF0ZSA9PSBzdGF0ZSkgcmV0dXJuIG5ldyBCcmVhZGNydW1iKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW1zW2pdLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogY2hpbGRyZW5ba10ubWFpblN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGNoaWxkcmVuW2tdLm1haW5TdGF0ZSA/IGAvJHtjaGlsZHJlbltrXS5tYWluU3RhdGV9LyR7Y2hpbGRyZW5bMF0uc3RhdGV9YCA6IGAke2NoaWxkcmVuWzBdLnN0YXRlfWBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmV0cmlldmVDaGlsZChzdGF0ZTogc3RyaW5nLCBtZW51VGFiczogTWVudVRhYltdKTogQnJlYWRjcnVtYiB7XHJcbiAgICAgICAgaWYgKCFtZW51VGFicyB8fCBtZW51VGFicy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudVRhYnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gbWVudVRhYnNbaV0uaXRlbXM7XHJcbiAgICAgICAgICAgIGlmICghaXRlbXMgfHwgaXRlbXMubGVuZ3RoID09IDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZW1zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBpdGVtc1tqXS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgICAgIGlmICghY2hpbGRyZW4gfHwgY2hpbGRyZW4ubGVuZ3RoID09IDApIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY2hpbGRyZW4ubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5ba10ubWFpblN0YXRlID09IHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnJlYWRjcnVtYih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogY2hpbGRyZW5ba10ubWFpblN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGNoaWxkcmVuW2tdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGNoaWxkcmVuW2tdLm1haW5TdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYC8ke2NoaWxkcmVuW2tdLm1haW5TdGF0ZX0vJHtjaGlsZHJlblswXS5zdGF0ZX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgLyR7Y2hpbGRyZW5bMF0uc3RhdGV9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJldHJpZXZlU3RhdGVOYW1lKHN0YXRlOiBzdHJpbmcsIG1lbnVUYWJzOiBNZW51VGFiW10pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghbWVudVRhYnMgfHwgbWVudVRhYnMubGVuZ3RoID09IDApIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVUYWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IG1lbnVUYWJzW2ldLml0ZW1zO1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PSAwKSBjb250aW51ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gaXRlbXNbal0uY2hpbGRyZW47XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuIHx8IGNoaWxkcmVuLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGNoaWxkcmVuLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuW2tdLnN0YXRlID09IHN0YXRlKSByZXR1cm4gY2hpbGRyZW5ba10ubmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4iXX0=