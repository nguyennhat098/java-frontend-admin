/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/services/menu.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { MenuItem } from '../models/base.model';
import * as i0 from "@angular/core";
var MenuService = /** @class */ (function () {
    function MenuService() {
        this.tabs = [];
    }
    /**
     * @param {?} menuTabs
     * @param {?} callback
     * @param {?} set
     * @return {?}
     */
    MenuService.prototype.init = /**
     * @param {?} menuTabs
     * @param {?} callback
     * @param {?} set
     * @return {?}
     */
    function (menuTabs, callback, set) {
        /** @type {?} */
        var menuTabbedItems = menuTabs;
        this.tabs = menuTabbedItems.reduce((/**
         * @param {?} result
         * @param {?} current
         * @return {?}
         */
        function (result, current) {
            /** @type {?} */
            var item = set
                ? set(current.role)
                : new MenuItem({
                    menu: current.role,
                    items: current.items,
                    subName: current.role,
                    name: current.role
                });
            if (item.name) {
                result.push(item);
            }
            return result;
        }), []);
        if (!this.tabs || !this.tabs[0]) {
            this.tabs = [];
        }
        if (callback)
            callback();
    };
    /**
     * @param {?=} menu
     * @return {?}
     */
    MenuService.prototype.loadMenuItems = /**
     * @param {?=} menu
     * @return {?}
     */
    function (menu) {
        if (!menu) {
            return this.tabs.reduce((/**
             * @param {?} result
             * @param {?} current
             * @return {?}
             */
            function (result, current) {
                result.push.apply(result, tslib_1.__spread(current.items));
                return result;
            }), []);
        }
        /** @type {?} */
        var tab = this.tabs.find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.menu === menu; }));
        if (!tab) {
            return;
        }
        return tab.items;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    MenuService.prototype.loadFirstTabItems = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var currentMenu = this.tabs.find((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.menu.toLowerCase() == key.toLowerCase(); }));
        if (!currentMenu) {
            return [];
        }
        return currentMenu.items;
    };
    /**
     * @return {?}
     */
    MenuService.prototype.loadFirstTab = /**
     * @return {?}
     */
    function () {
        return this.tabs[0];
    };
    /**
     * @return {?}
     */
    MenuService.prototype.getTabs = /**
     * @return {?}
     */
    function () {
        return this.tabs;
    };
    MenuService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MenuService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MenuService_Factory() { return new MenuService(); }, token: MenuService, providedIn: "root" });
    return MenuService;
}());
export { MenuService };
if (false) {
    /** @type {?} */
    MenuService.prototype.tabs;
    /** @type {?} */
    MenuService.prototype.currentSupporterId;
    /** @type {?} */
    MenuService.prototype.currentSelectedSupplierName;
    /** @type {?} */
    MenuService.prototype.currentSelectedSupplierId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFrQyxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFaEY7SUFBQTtRQUVXLFNBQUksR0FBc0YsRUFBRSxDQUFDO0tBd0R2Rzs7Ozs7OztJQW5EVSwwQkFBSTs7Ozs7O0lBQVgsVUFBWSxRQUFtQixFQUFFLFFBQW1CLEVBQUUsR0FBK0I7O1lBQzdFLGVBQWUsR0FBRyxRQUFRO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDLE1BQU07Ozs7O1FBQUMsVUFBQyxNQUFNLEVBQUUsT0FBTzs7Z0JBQzNDLElBQUksR0FBRyxHQUFHO2dCQUNWLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDO29CQUNYLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtvQkFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO29CQUNwQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7b0JBQ3JCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtpQkFDckIsQ0FBQztZQUNOLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JCO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxRQUFRO1lBQUUsUUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFTSxtQ0FBYTs7OztJQUFwQixVQUFxQixJQUFhO1FBQzlCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTs7Ozs7WUFBQyxVQUFDLE1BQU0sRUFBRSxPQUFPO2dCQUNwQyxNQUFNLENBQUMsSUFBSSxPQUFYLE1BQU0sbUJBQVMsT0FBTyxDQUFDLEtBQUssR0FBRTtnQkFDOUIsT0FBTyxNQUFNLENBQUM7WUFDbEIsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ1Y7O1lBQ0ssR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQWYsQ0FBZSxFQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDTixPQUFPO1NBQ1Y7UUFDRCxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTSx1Q0FBaUI7Ozs7SUFBeEIsVUFBeUIsR0FBVzs7WUFDNUIsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQXpDLENBQXlDLEVBQUM7UUFDaEYsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNkLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFDRCxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVNLGtDQUFZOzs7SUFBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVNLDZCQUFPOzs7SUFBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDOztnQkF6REosVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O3NCQUpsQztDQThEQyxBQTFERCxJQTBEQztTQXpEWSxXQUFXOzs7SUFDcEIsMkJBQW9HOztJQUNwRyx5Q0FBa0M7O0lBQ2xDLGtEQUEyQzs7SUFDM0MsZ0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTWVudUtleSB9IGZyb20gJy4uL2NvbnN0YW50cy9tZW51LmNvbnN0JztcclxuaW1wb3J0IHsgTWVudVRhYiwgRXh0ZW5kZWRNYWluTWVudUdyb3VwLCBNZW51SXRlbSB9IGZyb20gJy4uL21vZGVscy9iYXNlLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBNZW51U2VydmljZSB7XHJcbiAgICBwdWJsaWMgdGFiczogeyBuYW1lOiBzdHJpbmcsIG1lbnU6IHN0cmluZywgc3ViTmFtZTogc3RyaW5nLCBpdGVtczogRXh0ZW5kZWRNYWluTWVudUdyb3VwW10gfVtdID0gW107XHJcbiAgICBwdWJsaWMgY3VycmVudFN1cHBvcnRlcklkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY3VycmVudFNlbGVjdGVkU3VwcGxpZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY3VycmVudFNlbGVjdGVkU3VwcGxpZXJJZDogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBpbml0KG1lbnVUYWJzOiBNZW51VGFiW10sIGNhbGxiYWNrOiAoKSA9PiBhbnksIHNldDogKHJvbGU6IHN0cmluZykgPT4gTWVudUl0ZW0pOiB2b2lkIHtcclxuICAgICAgICBsZXQgbWVudVRhYmJlZEl0ZW1zID0gbWVudVRhYnM7XHJcbiAgICAgICAgdGhpcy50YWJzID0gbWVudVRhYmJlZEl0ZW1zLnJlZHVjZSgocmVzdWx0LCBjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gc2V0XHJcbiAgICAgICAgICAgICAgICA/IHNldChjdXJyZW50LnJvbGUpXHJcbiAgICAgICAgICAgICAgICA6IG5ldyBNZW51SXRlbSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVudTogY3VycmVudC5yb2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBjdXJyZW50Lml0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Yk5hbWU6IGN1cnJlbnQucm9sZSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBjdXJyZW50LnJvbGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgICAgICBpZiAoIXRoaXMudGFicyB8fCAhdGhpcy50YWJzWzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFicyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRNZW51SXRlbXMobWVudT86IHN0cmluZykge1xyXG4gICAgICAgIGlmICghbWVudSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YWJzLnJlZHVjZSgocmVzdWx0LCBjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCguLi5jdXJyZW50Lml0ZW1zKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH0sIFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGFiID0gdGhpcy50YWJzLmZpbmQoeCA9PiB4Lm1lbnUgPT09IG1lbnUpO1xyXG4gICAgICAgIGlmICghdGFiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhYi5pdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEZpcnN0VGFiSXRlbXMoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgY3VycmVudE1lbnUgPSB0aGlzLnRhYnMuZmluZChzID0+IHMubWVudS50b0xvd2VyQ2FzZSgpID09IGtleS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICBpZiAoIWN1cnJlbnRNZW51KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRNZW51Lml0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkRmlyc3RUYWIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFic1swXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VGFicygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YWJzO1xyXG4gICAgfVxyXG59Il19