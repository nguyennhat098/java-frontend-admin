/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/services/menu.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { MenuItem } from '../models/base.model';
import * as i0 from "@angular/core";
export class MenuService {
    constructor() {
        this.tabs = [];
    }
    /**
     * @param {?} menuTabs
     * @param {?} callback
     * @param {?} set
     * @return {?}
     */
    init(menuTabs, callback, set) {
        /** @type {?} */
        let menuTabbedItems = menuTabs;
        this.tabs = menuTabbedItems.reduce((/**
         * @param {?} result
         * @param {?} current
         * @return {?}
         */
        (result, current) => {
            /** @type {?} */
            let item = set
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
    }
    /**
     * @param {?=} menu
     * @return {?}
     */
    loadMenuItems(menu) {
        if (!menu) {
            return this.tabs.reduce((/**
             * @param {?} result
             * @param {?} current
             * @return {?}
             */
            (result, current) => {
                result.push(...current.items);
                return result;
            }), []);
        }
        /** @type {?} */
        const tab = this.tabs.find((/**
         * @param {?} x
         * @return {?}
         */
        x => x.menu === menu));
        if (!tab) {
            return;
        }
        return tab.items;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    loadFirstTabItems(key) {
        /** @type {?} */
        let currentMenu = this.tabs.find((/**
         * @param {?} s
         * @return {?}
         */
        s => s.menu.toLowerCase() == key.toLowerCase()));
        if (!currentMenu) {
            return [];
        }
        return currentMenu.items;
    }
    /**
     * @return {?}
     */
    loadFirstTab() {
        return this.tabs[0];
    }
    /**
     * @return {?}
     */
    getTabs() {
        return this.tabs;
    }
}
MenuService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MenuService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MenuService_Factory() { return new MenuService(); }, token: MenuService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQWtDLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUdoRixNQUFNLE9BQU8sV0FBVztJQUR4QjtRQUVXLFNBQUksR0FBc0YsRUFBRSxDQUFDO0tBd0R2Rzs7Ozs7OztJQW5EVSxJQUFJLENBQUMsUUFBbUIsRUFBRSxRQUFtQixFQUFFLEdBQStCOztZQUM3RSxlQUFlLEdBQUcsUUFBUTtRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQyxNQUFNOzs7OztRQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFOztnQkFDL0MsSUFBSSxHQUFHLEdBQUc7Z0JBQ1YsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNuQixDQUFDLENBQUMsSUFBSSxRQUFRLENBQUM7b0JBQ1gsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO29CQUNsQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7b0JBQ3BCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtvQkFDckIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO2lCQUNyQixDQUFDO1lBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckI7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDbEI7UUFDRCxJQUFJLFFBQVE7WUFBRSxRQUFRLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVNLGFBQWEsQ0FBQyxJQUFhO1FBQzlCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTs7Ozs7WUFBQyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtnQkFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsT0FBTyxNQUFNLENBQUM7WUFDbEIsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ1Y7O2NBQ0ssR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUM7UUFDaEQsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNOLE9BQU87U0FDVjtRQUNELE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7OztJQUVNLGlCQUFpQixDQUFDLEdBQVc7O1lBQzVCLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFDO1FBQ2hGLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDZCxPQUFPLEVBQUUsQ0FBQztTQUNiO1FBQ0QsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFTSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7OztZQXpESixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OztJQUU5QiwyQkFBb0c7O0lBQ3BHLHlDQUFrQzs7SUFDbEMsa0RBQTJDOztJQUMzQyxnREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNZW51S2V5IH0gZnJvbSAnLi4vY29uc3RhbnRzL21lbnUuY29uc3QnO1xyXG5pbXBvcnQgeyBNZW51VGFiLCBFeHRlbmRlZE1haW5NZW51R3JvdXAsIE1lbnVJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL2Jhc2UubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIE1lbnVTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyB0YWJzOiB7IG5hbWU6IHN0cmluZywgbWVudTogc3RyaW5nLCBzdWJOYW1lOiBzdHJpbmcsIGl0ZW1zOiBFeHRlbmRlZE1haW5NZW51R3JvdXBbXSB9W10gPSBbXTtcclxuICAgIHB1YmxpYyBjdXJyZW50U3VwcG9ydGVySWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBjdXJyZW50U2VsZWN0ZWRTdXBwbGllck5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBjdXJyZW50U2VsZWN0ZWRTdXBwbGllcklkOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGluaXQobWVudVRhYnM6IE1lbnVUYWJbXSwgY2FsbGJhY2s6ICgpID0+IGFueSwgc2V0OiAocm9sZTogc3RyaW5nKSA9PiBNZW51SXRlbSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtZW51VGFiYmVkSXRlbXMgPSBtZW51VGFicztcclxuICAgICAgICB0aGlzLnRhYnMgPSBtZW51VGFiYmVkSXRlbXMucmVkdWNlKChyZXN1bHQsIGN1cnJlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBzZXRcclxuICAgICAgICAgICAgICAgID8gc2V0KGN1cnJlbnQucm9sZSlcclxuICAgICAgICAgICAgICAgIDogbmV3IE1lbnVJdGVtKHtcclxuICAgICAgICAgICAgICAgICAgICBtZW51OiBjdXJyZW50LnJvbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IGN1cnJlbnQuaXRlbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViTmFtZTogY3VycmVudC5yb2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGN1cnJlbnQucm9sZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgICAgIGlmICghdGhpcy50YWJzIHx8ICF0aGlzLnRhYnNbMF0pIHtcclxuICAgICAgICAgICAgdGhpcy50YWJzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZE1lbnVJdGVtcyhtZW51Pzogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFtZW51KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhYnMucmVkdWNlKChyZXN1bHQsIGN1cnJlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKC4uLmN1cnJlbnQuaXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfSwgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0YWIgPSB0aGlzLnRhYnMuZmluZCh4ID0+IHgubWVudSA9PT0gbWVudSk7XHJcbiAgICAgICAgaWYgKCF0YWIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFiLml0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkRmlyc3RUYWJJdGVtcyhrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBjdXJyZW50TWVudSA9IHRoaXMudGFicy5maW5kKHMgPT4gcy5tZW51LnRvTG93ZXJDYXNlKCkgPT0ga2V5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIGlmICghY3VycmVudE1lbnUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3VycmVudE1lbnUuaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRGaXJzdFRhYigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YWJzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUYWJzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhYnM7XHJcbiAgICB9XHJcbn0iXX0=