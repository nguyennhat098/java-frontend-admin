/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/layout/layout.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ButtonDefinition } from '../shared/models/base.model';
import { ToolbarAction } from '../shared/enums/base.enum';
import { AggregatorService } from '../shared/services/aggregator.service';
import { KeyConst } from '../shared/constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../shared/services/aggregator.service";
var DefaultLayoutService = /** @class */ (function () {
    function DefaultLayoutService(router, _aggregatorService) {
        var _this = this;
        this.router = router;
        this._aggregatorService = _aggregatorService;
        this.subscriptions = new Subscription();
        this.toolbarItems = [];
        this.navType = 'st5';
        this.themeLayout = 'vertical';
        this.vNavigationView = 'view1';
        this.verticalPlacement = 'left';
        this.verticalLayout = 'wide';
        this.deviceType = 'desktop';
        this.verticalNavType = 'offcanvas';
        this.verticalEffect = 'shrink';
        this.pcodedHeaderPosition = 'fixed';
        this.pcodedSidebarPosition = 'fixed';
        this.headerTheme = 'theme1';
        this.logoTheme = 'theme1';
        this.toggleOn = true;
        this.headerFixedMargin = '50px';
        this.navBarTheme = 'themelight1';
        this.activeItemTheme = 'theme4';
        this.isCollapsedMobile = 'no-block';
        this.chatToggle = 'out';
        this.chatToggleInverse = 'in';
        this.chatInnerToggle = 'off';
        this.chatInnerToggleInverse = 'on';
        this.menuTitleTheme = 'theme5';
        this.itemBorder = true;
        this.itemBorderStyle = 'none';
        this.subItemBorder = true;
        this.subItemIcon = 'style6';
        this.dropDownIcon = 'style1';
        this.isSidebarChecked = true;
        this.isHeaderChecked = true;
        /** @type {?} */
        var scrollHeight = window.screen.height - 150;
        this.innerHeight = scrollHeight + 'px';
        this.windowWidth = window.innerWidth;
        this.setMenuAttributes(this.windowWidth);
        /** @type {?} */
        var navigationSubscription = this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event instanceof NavigationEnd; }))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.toolbarItems = [];
        }));
        this.subscriptions.add(navigationSubscription);
    }
    /**
     * @return {?}
     */
    DefaultLayoutService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.unsubscribe();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DefaultLayoutService.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.innerHeight = event.target.innerHeight + 'px';
        this.windowWidth = event.target.innerWidth;
        /** @type {?} */
        var reSizeFlag = true;
        if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
            reSizeFlag = false;
        }
        else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
            reSizeFlag = false;
        }
        if (reSizeFlag) {
            this.setMenuAttributes(this.windowWidth);
        }
    };
    /**
     * @param {?} windowWidth
     * @return {?}
     */
    DefaultLayoutService.prototype.setMenuAttributes = /**
     * @param {?} windowWidth
     * @return {?}
     */
    function (windowWidth) {
        if (windowWidth >= 768 && windowWidth <= 1024) {
            this.deviceType = 'tablet';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'push';
        }
        else if (windowWidth < 768) {
            this.deviceType = 'mobile';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
        }
        else {
            this.deviceType = 'desktop';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'shrink';
        }
    };
    /**
     * @return {?}
     */
    DefaultLayoutService.prototype.toggleOpened = /**
     * @return {?}
     */
    function () {
        if (this.windowWidth < 768) {
            this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
        }
        this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DefaultLayoutService.prototype.onClickedOutside = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.windowWidth < 768 && this.toggleOn && this.verticalNavType !== 'offcanvas') {
            this.toggleOn = true;
            this.verticalNavType = 'offcanvas';
        }
    };
    /**
     * @return {?}
     */
    DefaultLayoutService.prototype.onMobileMenu = /**
     * @return {?}
     */
    function () {
        this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
    };
    /**
     * @return {?}
     */
    DefaultLayoutService.prototype.toggleChat = /**
     * @return {?}
     */
    function () {
        this.chatToggle = this.chatToggle === 'out' ? 'in' : 'out';
        this.chatToggleInverse = this.chatToggleInverse === 'out' ? 'in' : 'out';
        this.chatInnerToggle = 'off';
        this.chatInnerToggleInverse = 'off';
    };
    /**
     * @return {?}
     */
    DefaultLayoutService.prototype.toggleChatInner = /**
     * @return {?}
     */
    function () {
        this.chatInnerToggle = this.chatInnerToggle === 'off' ? 'on' : 'off';
        this.chatInnerToggleInverse = this.chatInnerToggleInverse === 'off' ? 'on' : 'off';
    };
    /**
     * @return {?}
     */
    DefaultLayoutService.prototype.setSidebarPosition = /**
     * @return {?}
     */
    function () {
        this.isSidebarChecked = !this.isSidebarChecked;
        this.pcodedSidebarPosition = this.isSidebarChecked === true ? 'fixed' : 'absolute';
    };
    /**
     * @return {?}
     */
    DefaultLayoutService.prototype.setHeaderPosition = /**
     * @return {?}
     */
    function () {
        this.isHeaderChecked = !this.isHeaderChecked;
        this.pcodedHeaderPosition = this.isHeaderChecked === true ? 'fixed' : 'relative';
        this.headerFixedMargin = this.isHeaderChecked === true ? '50px' : '';
    };
    /**
     * @param {?} pattern
     * @return {?}
     */
    DefaultLayoutService.prototype.setBackgroundPattern = /**
     * @param {?} pattern
     * @return {?}
     */
    function (pattern) {
        document.querySelector('body').setAttribute('themebg-pattern', pattern);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    DefaultLayoutService.prototype.setLayoutType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.layoutType = type;
        if (type === 'dark') {
            this.headerTheme = 'theme6';
            this.navBarTheme = 'theme1';
            this.logoTheme = 'theme6';
            document.querySelector('body').classList.add('dark');
        }
        else {
            this.headerTheme = 'theme1';
            this.navBarTheme = 'themelight1';
            this.logoTheme = 'theme1';
            document.querySelector('body').classList.remove('dark');
        }
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    DefaultLayoutService.prototype.setNavBarTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        if (theme === 'themelight1') {
            this.navBarTheme = 'themelight1';
        }
        else {
            this.navBarTheme = 'theme1';
        }
    };
    /**
     * @param {?} actions
     * @return {?}
     */
    DefaultLayoutService.prototype.initToolbarItems = /**
     * @param {?} actions
     * @return {?}
     */
    function (actions) {
        this.toolbarItems = actions.map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            switch (action) {
                case ToolbarAction.Save:
                    return new ButtonDefinition({ action: action, title: 'Lưu', style: 'primary', lazyload: true });
                case ToolbarAction.SaveAll:
                    return new ButtonDefinition({ action: action, title: 'Lưu tất cả', lazyload: true });
                case ToolbarAction.Cancel:
                    return new ButtonDefinition({ action: action, title: 'Hủy lưu' });
                case ToolbarAction.Back:
                    return new ButtonDefinition({ action: action, title: 'Quay lại' });
                case ToolbarAction.EditColumnOptions:
                    return new ButtonDefinition({ action: action, title: 'Quản lý cột' });
                case ToolbarAction.SaveAndNew:
                    return new ButtonDefinition({ action: action, title: 'Lưu và tạo mới', lazyload: true });
                case ToolbarAction.Reset:
                    return new ButtonDefinition({ action: action, title: 'Làm mới' });
            }
        }));
    };
    /**
     * @return {?}
     */
    DefaultLayoutService.prototype.getToolbarItems = /**
     * @return {?}
     */
    function () {
        return this.toolbarItems;
    };
    /**
     * @return {?}
     */
    DefaultLayoutService.prototype.hasToolbarItems = /**
     * @return {?}
     */
    function () {
        if (!this.toolbarItems)
            return false;
        return this.toolbarItems.length > 0;
    };
    /**
     * @param {?} image
     * @return {?}
     */
    DefaultLayoutService.prototype.showImage = /**
     * @param {?} image
     * @return {?}
     */
    function (image) {
        this._aggregatorService.publish(KeyConst.ViewImage, image);
    };
    DefaultLayoutService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    DefaultLayoutService.ctorParameters = function () { return [
        { type: Router },
        { type: AggregatorService }
    ]; };
    /** @nocollapse */ DefaultLayoutService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DefaultLayoutService_Factory() { return new DefaultLayoutService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.AggregatorService)); }, token: DefaultLayoutService, providedIn: "root" });
    return DefaultLayoutService;
}());
export { DefaultLayoutService };
if (false) {
    /** @type {?} */
    DefaultLayoutService.prototype.navType;
    /** @type {?} */
    DefaultLayoutService.prototype.themeLayout;
    /** @type {?} */
    DefaultLayoutService.prototype.layoutType;
    /** @type {?} */
    DefaultLayoutService.prototype.verticalPlacement;
    /** @type {?} */
    DefaultLayoutService.prototype.verticalLayout;
    /** @type {?} */
    DefaultLayoutService.prototype.deviceType;
    /** @type {?} */
    DefaultLayoutService.prototype.imgSrc;
    /** @type {?} */
    DefaultLayoutService.prototype.imgTitle;
    /** @type {?} */
    DefaultLayoutService.prototype.verticalNavType;
    /** @type {?} */
    DefaultLayoutService.prototype.verticalEffect;
    /** @type {?} */
    DefaultLayoutService.prototype.vNavigationView;
    /** @type {?} */
    DefaultLayoutService.prototype.pcodedHeaderPosition;
    /** @type {?} */
    DefaultLayoutService.prototype.pcodedSidebarPosition;
    /** @type {?} */
    DefaultLayoutService.prototype.headerTheme;
    /** @type {?} */
    DefaultLayoutService.prototype.logoTheme;
    /** @type {?} */
    DefaultLayoutService.prototype.innerHeight;
    /** @type {?} */
    DefaultLayoutService.prototype.windowWidth;
    /** @type {?} */
    DefaultLayoutService.prototype.toggleOn;
    /** @type {?} */
    DefaultLayoutService.prototype.headerFixedMargin;
    /** @type {?} */
    DefaultLayoutService.prototype.navBarTheme;
    /** @type {?} */
    DefaultLayoutService.prototype.activeItemTheme;
    /** @type {?} */
    DefaultLayoutService.prototype.isCollapsedMobile;
    /** @type {?} */
    DefaultLayoutService.prototype.chatToggle;
    /** @type {?} */
    DefaultLayoutService.prototype.chatToggleInverse;
    /** @type {?} */
    DefaultLayoutService.prototype.chatInnerToggle;
    /** @type {?} */
    DefaultLayoutService.prototype.chatInnerToggleInverse;
    /** @type {?} */
    DefaultLayoutService.prototype.menuTitleTheme;
    /** @type {?} */
    DefaultLayoutService.prototype.itemBorder;
    /** @type {?} */
    DefaultLayoutService.prototype.itemBorderStyle;
    /** @type {?} */
    DefaultLayoutService.prototype.subItemBorder;
    /** @type {?} */
    DefaultLayoutService.prototype.subItemIcon;
    /** @type {?} */
    DefaultLayoutService.prototype.dropDownIcon;
    /** @type {?} */
    DefaultLayoutService.prototype.isSidebarChecked;
    /** @type {?} */
    DefaultLayoutService.prototype.isHeaderChecked;
    /**
     * @type {?}
     * @private
     */
    DefaultLayoutService.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    DefaultLayoutService.prototype.toolbarItems;
    /**
     * @type {?}
     * @private
     */
    DefaultLayoutService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DefaultLayoutService.prototype._aggregatorService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRS9DO0lBdUNJLDhCQUNZLE1BQWMsRUFDZCxrQkFBcUM7UUFGakQsaUJBMENDO1FBekNXLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBTHpDLGtCQUFhLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakQsaUJBQVksR0FBdUIsRUFBRSxDQUFDO1FBTTFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFD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c0I7O0lBQ3RCLHdDQUF3Qjs7SUFDeEIsK0NBQStCOztJQUMvQiw4Q0FBOEI7O0lBQzlCLCtDQUErQjs7SUFDL0Isb0RBQW9DOztJQUNwQyxxREFBcUM7O0lBQ3JDLDJDQUEyQjs7SUFDM0IseUNBQXlCOztJQUN6QiwyQ0FBMkI7O0lBQzNCLDJDQUEyQjs7SUFDM0Isd0NBQXlCOztJQUN6QixpREFBaUM7O0lBQ2pDLDJDQUEyQjs7SUFDM0IsK0NBQStCOztJQUMvQixpREFBaUM7O0lBQ2pDLDBDQUEwQjs7SUFDMUIsaURBQWlDOztJQUNqQywrQ0FBK0I7O0lBQy9CLHNEQUFzQzs7SUFDdEMsOENBQThCOztJQUM5QiwwQ0FBMkI7O0lBQzNCLCtDQUErQjs7SUFDL0IsNkNBQThCOztJQUM5QiwyQ0FBMkI7O0lBQzNCLDRDQUE0Qjs7SUFDNUIsZ0RBQWlDOztJQUNqQywrQ0FBZ0M7Ozs7O0lBQ2hDLDZDQUF5RDs7Ozs7SUFDekQsNENBQThDOzs7OztJQUcxQyxzQ0FBc0I7Ozs7O0lBQ3RCLGtEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQnV0dG9uRGVmaW5pdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbHMvYmFzZS5tb2RlbCc7XHJcbmltcG9ydCB7IFRvb2xiYXJBY3Rpb24gfSBmcm9tICcuLi9zaGFyZWQvZW51bXMvYmFzZS5lbnVtJztcclxuaW1wb3J0IHsgQWdncmVnYXRvclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYWdncmVnYXRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgS2V5Q29uc3QgfSBmcm9tICcuLi9zaGFyZWQvY29uc3RhbnRzJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0TGF5b3V0U2VydmljZSB7XHJcbiAgICBwdWJsaWMgbmF2VHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHRoZW1lTGF5b3V0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbGF5b3V0VHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHZlcnRpY2FsUGxhY2VtZW50OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdmVydGljYWxMYXlvdXQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBkZXZpY2VUeXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaW1nU3JjOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaW1nVGl0bGU6IHN0cmluZztcclxuICAgIHB1YmxpYyB2ZXJ0aWNhbE5hdlR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyB2ZXJ0aWNhbEVmZmVjdDogc3RyaW5nO1xyXG4gICAgcHVibGljIHZOYXZpZ2F0aW9uVmlldzogc3RyaW5nO1xyXG4gICAgcHVibGljIHBjb2RlZEhlYWRlclBvc2l0aW9uOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGNvZGVkU2lkZWJhclBvc2l0aW9uOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaGVhZGVyVGhlbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBsb2dvVGhlbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBpbm5lckhlaWdodDogc3RyaW5nO1xyXG4gICAgcHVibGljIHdpbmRvd1dpZHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdG9nZ2xlT246IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaGVhZGVyRml4ZWRNYXJnaW46IHN0cmluZztcclxuICAgIHB1YmxpYyBuYXZCYXJUaGVtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGFjdGl2ZUl0ZW1UaGVtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGlzQ29sbGFwc2VkTW9iaWxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2hhdFRvZ2dsZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGNoYXRUb2dnbGVJbnZlcnNlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2hhdElubmVyVG9nZ2xlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2hhdElubmVyVG9nZ2xlSW52ZXJzZTogc3RyaW5nO1xyXG4gICAgcHVibGljIG1lbnVUaXRsZVRoZW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaXRlbUJvcmRlcjogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpdGVtQm9yZGVyU3R5bGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBzdWJJdGVtQm9yZGVyOiBib29sZWFuO1xyXG4gICAgcHVibGljIHN1Ykl0ZW1JY29uOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZHJvcERvd25JY29uOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaXNTaWRlYmFyQ2hlY2tlZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc0hlYWRlckNoZWNrZWQ6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuICAgIHByaXZhdGUgdG9vbGJhckl0ZW1zOiBCdXR0b25EZWZpbml0aW9uW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2FnZ3JlZ2F0b3JTZXJ2aWNlOiBBZ2dyZWdhdG9yU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5uYXZUeXBlID0gJ3N0NSc7XHJcbiAgICAgICAgdGhpcy50aGVtZUxheW91dCA9ICd2ZXJ0aWNhbCc7XHJcbiAgICAgICAgdGhpcy52TmF2aWdhdGlvblZpZXcgPSAndmlldzEnO1xyXG4gICAgICAgIHRoaXMudmVydGljYWxQbGFjZW1lbnQgPSAnbGVmdCc7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbExheW91dCA9ICd3aWRlJztcclxuICAgICAgICB0aGlzLmRldmljZVR5cGUgPSAnZGVza3RvcCc7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbE5hdlR5cGUgPSAnb2ZmY2FudmFzJztcclxuICAgICAgICB0aGlzLnZlcnRpY2FsRWZmZWN0ID0gJ3Nocmluayc7XHJcbiAgICAgICAgdGhpcy5wY29kZWRIZWFkZXJQb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgdGhpcy5wY29kZWRTaWRlYmFyUG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyVGhlbWUgPSAndGhlbWUxJztcclxuICAgICAgICB0aGlzLmxvZ29UaGVtZSA9ICd0aGVtZTEnO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlT24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyRml4ZWRNYXJnaW4gPSAnNTBweCc7XHJcbiAgICAgICAgdGhpcy5uYXZCYXJUaGVtZSA9ICd0aGVtZWxpZ2h0MSc7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtVGhlbWUgPSAndGhlbWU0JztcclxuICAgICAgICB0aGlzLmlzQ29sbGFwc2VkTW9iaWxlID0gJ25vLWJsb2NrJztcclxuICAgICAgICB0aGlzLmNoYXRUb2dnbGUgPSAnb3V0JztcclxuICAgICAgICB0aGlzLmNoYXRUb2dnbGVJbnZlcnNlID0gJ2luJztcclxuICAgICAgICB0aGlzLmNoYXRJbm5lclRvZ2dsZSA9ICdvZmYnO1xyXG4gICAgICAgIHRoaXMuY2hhdElubmVyVG9nZ2xlSW52ZXJzZSA9ICdvbic7XHJcbiAgICAgICAgdGhpcy5tZW51VGl0bGVUaGVtZSA9ICd0aGVtZTUnO1xyXG4gICAgICAgIHRoaXMuaXRlbUJvcmRlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pdGVtQm9yZGVyU3R5bGUgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5zdWJJdGVtQm9yZGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN1Ykl0ZW1JY29uID0gJ3N0eWxlNic7XHJcbiAgICAgICAgdGhpcy5kcm9wRG93bkljb24gPSAnc3R5bGUxJztcclxuICAgICAgICB0aGlzLmlzU2lkZWJhckNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNIZWFkZXJDaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB3aW5kb3cuc2NyZWVuLmhlaWdodCAtIDE1MDtcclxuICAgICAgICB0aGlzLmlubmVySGVpZ2h0ID0gc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdGhpcy5zZXRNZW51QXR0cmlidXRlcyh0aGlzLndpbmRvd1dpZHRoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvblN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGVyLmV2ZW50cy5waXBlKGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXJJdGVtcyA9IFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQobmF2aWdhdGlvblN1YnNjcmlwdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUmVzaXplKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5pbm5lckhlaWdodCA9IGV2ZW50LnRhcmdldC5pbm5lckhlaWdodCArICdweCc7XHJcbiAgICAgICAgdGhpcy53aW5kb3dXaWR0aCA9IGV2ZW50LnRhcmdldC5pbm5lcldpZHRoO1xyXG4gICAgICAgIGxldCByZVNpemVGbGFnID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5kZXZpY2VUeXBlID09PSAndGFibGV0JyAmJiB0aGlzLndpbmRvd1dpZHRoID49IDc2OCAmJiB0aGlzLndpbmRvd1dpZHRoIDw9IDEwMjQpIHtcclxuICAgICAgICAgICAgcmVTaXplRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kZXZpY2VUeXBlID09PSAnbW9iaWxlJyAmJiB0aGlzLndpbmRvd1dpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgICAgIHJlU2l6ZUZsYWcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlU2l6ZUZsYWcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRNZW51QXR0cmlidXRlcyh0aGlzLndpbmRvd1dpZHRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1lbnVBdHRyaWJ1dGVzKHdpbmRvd1dpZHRoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1dpZHRoID49IDc2OCAmJiB3aW5kb3dXaWR0aCA8PSAxMDI0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlVHlwZSA9ICd0YWJsZXQnO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsTmF2VHlwZSA9ICdvZmZjYW52YXMnO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsRWZmZWN0ID0gJ3B1c2gnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod2luZG93V2lkdGggPCA3NjgpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2VUeXBlID0gJ21vYmlsZSc7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxOYXZUeXBlID0gJ29mZmNhbnZhcyc7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxFZmZlY3QgPSAnb3ZlcmxheSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2VUeXBlID0gJ2Rlc2t0b3AnO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsTmF2VHlwZSA9ICdvZmZjYW52YXMnO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsRWZmZWN0ID0gJ3Nocmluayc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVPcGVuZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMud2luZG93V2lkdGggPCA3NjgpIHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVPbiA9IHRoaXMudmVydGljYWxOYXZUeXBlID09PSAnb2ZmY2FudmFzJyA/IHRydWUgOiB0aGlzLnRvZ2dsZU9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZlcnRpY2FsTmF2VHlwZSA9IHRoaXMudmVydGljYWxOYXZUeXBlID09PSAnZXhwYW5kZWQnID8gJ29mZmNhbnZhcycgOiAnZXhwYW5kZWQnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsaWNrZWRPdXRzaWRlKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMud2luZG93V2lkdGggPCA3NjggJiYgdGhpcy50b2dnbGVPbiAmJiB0aGlzLnZlcnRpY2FsTmF2VHlwZSAhPT0gJ29mZmNhbnZhcycpIHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVPbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxOYXZUeXBlID0gJ29mZmNhbnZhcyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbk1vYmlsZU1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5pc0NvbGxhcHNlZE1vYmlsZSA9IHRoaXMuaXNDb2xsYXBzZWRNb2JpbGUgPT09ICd5ZXMtYmxvY2snID8gJ25vLWJsb2NrJyA6ICd5ZXMtYmxvY2snO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVDaGF0KCkge1xyXG4gICAgICAgIHRoaXMuY2hhdFRvZ2dsZSA9IHRoaXMuY2hhdFRvZ2dsZSA9PT0gJ291dCcgPyAnaW4nIDogJ291dCc7XHJcbiAgICAgICAgdGhpcy5jaGF0VG9nZ2xlSW52ZXJzZSA9IHRoaXMuY2hhdFRvZ2dsZUludmVyc2UgPT09ICdvdXQnID8gJ2luJyA6ICdvdXQnO1xyXG4gICAgICAgIHRoaXMuY2hhdElubmVyVG9nZ2xlID0gJ29mZic7XHJcbiAgICAgICAgdGhpcy5jaGF0SW5uZXJUb2dnbGVJbnZlcnNlID0gJ29mZic7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZUNoYXRJbm5lcigpIHtcclxuICAgICAgICB0aGlzLmNoYXRJbm5lclRvZ2dsZSA9IHRoaXMuY2hhdElubmVyVG9nZ2xlID09PSAnb2ZmJyA/ICdvbicgOiAnb2ZmJztcclxuICAgICAgICB0aGlzLmNoYXRJbm5lclRvZ2dsZUludmVyc2UgPSB0aGlzLmNoYXRJbm5lclRvZ2dsZUludmVyc2UgPT09ICdvZmYnID8gJ29uJyA6ICdvZmYnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTaWRlYmFyUG9zaXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5pc1NpZGViYXJDaGVja2VkID0gIXRoaXMuaXNTaWRlYmFyQ2hlY2tlZDtcclxuICAgICAgICB0aGlzLnBjb2RlZFNpZGViYXJQb3NpdGlvbiA9IHRoaXMuaXNTaWRlYmFyQ2hlY2tlZCA9PT0gdHJ1ZSA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRIZWFkZXJQb3NpdGlvbigpIHtcclxuICAgICAgICB0aGlzLmlzSGVhZGVyQ2hlY2tlZCA9ICF0aGlzLmlzSGVhZGVyQ2hlY2tlZDtcclxuICAgICAgICB0aGlzLnBjb2RlZEhlYWRlclBvc2l0aW9uID0gdGhpcy5pc0hlYWRlckNoZWNrZWQgPT09IHRydWUgPyAnZml4ZWQnIDogJ3JlbGF0aXZlJztcclxuICAgICAgICB0aGlzLmhlYWRlckZpeGVkTWFyZ2luID0gdGhpcy5pc0hlYWRlckNoZWNrZWQgPT09IHRydWUgPyAnNTBweCcgOiAnJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0QmFja2dyb3VuZFBhdHRlcm4ocGF0dGVybikge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zZXRBdHRyaWJ1dGUoJ3RoZW1lYmctcGF0dGVybicsIHBhdHRlcm4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRMYXlvdXRUeXBlKHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubGF5b3V0VHlwZSA9IHR5cGU7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdkYXJrJykge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlclRoZW1lID0gJ3RoZW1lNic7XHJcbiAgICAgICAgICAgIHRoaXMubmF2QmFyVGhlbWUgPSAndGhlbWUxJztcclxuICAgICAgICAgICAgdGhpcy5sb2dvVGhlbWUgPSAndGhlbWU2JztcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlclRoZW1lID0gJ3RoZW1lMSc7XHJcbiAgICAgICAgICAgIHRoaXMubmF2QmFyVGhlbWUgPSAndGhlbWVsaWdodDEnO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ29UaGVtZSA9ICd0aGVtZTEnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TmF2QmFyVGhlbWUodGhlbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGVtZSA9PT0gJ3RoZW1lbGlnaHQxJykge1xyXG4gICAgICAgICAgICB0aGlzLm5hdkJhclRoZW1lID0gJ3RoZW1lbGlnaHQxJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5hdkJhclRoZW1lID0gJ3RoZW1lMSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0VG9vbGJhckl0ZW1zKGFjdGlvbnM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgdGhpcy50b29sYmFySXRlbXMgPSBhY3Rpb25zLm1hcChhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUb29sYmFyQWN0aW9uLlNhdmU6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25EZWZpbml0aW9uKHsgYWN0aW9uOiBhY3Rpb24sIHRpdGxlOiAnTMawdScsIHN0eWxlOiAncHJpbWFyeScsIGxhenlsb2FkOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUb29sYmFyQWN0aW9uLlNhdmVBbGw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25EZWZpbml0aW9uKHsgYWN0aW9uOiBhY3Rpb24sIHRpdGxlOiAnTMawdSB04bqldCBj4bqjJywgbGF6eWxvYWQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRvb2xiYXJBY3Rpb24uQ2FuY2VsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uRGVmaW5pdGlvbih7IGFjdGlvbjogYWN0aW9uLCB0aXRsZTogJ0jhu6d5IGzGsHUnIH0pO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUb29sYmFyQWN0aW9uLkJhY2s6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25EZWZpbml0aW9uKHsgYWN0aW9uOiBhY3Rpb24sIHRpdGxlOiAnUXVheSBs4bqhaScgfSk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRvb2xiYXJBY3Rpb24uRWRpdENvbHVtbk9wdGlvbnM6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25EZWZpbml0aW9uKHsgYWN0aW9uOiBhY3Rpb24sIHRpdGxlOiAnUXXhuqNuIGzDvSBj4buZdCcgfSk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRvb2xiYXJBY3Rpb24uU2F2ZUFuZE5ldzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkRlZmluaXRpb24oeyBhY3Rpb246IGFjdGlvbiwgdGl0bGU6ICdMxrB1IHbDoCB04bqhbyBt4bubaScsIGxhenlsb2FkOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUb29sYmFyQWN0aW9uLlJlc2V0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uRGVmaW5pdGlvbih7IGFjdGlvbjogYWN0aW9uLCB0aXRsZTogJ0zDoG0gbeG7m2knIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRvb2xiYXJJdGVtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b29sYmFySXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhc1Rvb2xiYXJJdGVtcygpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXRoaXMudG9vbGJhckl0ZW1zKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9vbGJhckl0ZW1zLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dJbWFnZShpbWFnZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fYWdncmVnYXRvclNlcnZpY2UucHVibGlzaChLZXlDb25zdC5WaWV3SW1hZ2UsIGltYWdlKTtcclxuICAgIH1cclxufVxyXG4iXX0=