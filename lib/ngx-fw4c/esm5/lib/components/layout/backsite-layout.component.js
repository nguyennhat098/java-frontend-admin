/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/layout/backsite-layout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { DefaultLayoutService } from './layout.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AggregatorService } from '../shared/services/aggregator.service';
import { KeyConst } from '../shared/constants/key.const';
import { Breadcrumb, RecommendationResponse } from '../shared/models/base.model';
import { ActionService } from '../shared/services/action.service';
import { AuthenticationService } from '../auth/auth.service';
import { CacheService } from '../shared/services/cache.service';
import { PermisisonProvider } from '../auth/permission.provider';
import { DataService } from '../shared/services/data.service';
var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(workspaceLayoutService, route, authenticationService, router, actionService, dataService, aggregatorService, cacheService, permisisonProvider) {
        this.workspaceLayoutService = workspaceLayoutService;
        this.route = route;
        this.authenticationService = authenticationService;
        this.router = router;
        this.actionService = actionService;
        this.dataService = dataService;
        this.aggregatorService = aggregatorService;
        this.cacheService = cacheService;
        this.permisisonProvider = permisisonProvider;
        this.notifications = [];
        this.logo = 'https://cmcglobal.com.vn/css/image-common/Combined%20Shape.svg';
        this.title = 'CMC Global - Aspire to inspire the Digital World';
        this.isModalShow = false;
        this.modalImageSrc = '';
        this.imageAltText = '';
        this.breadcrumbs = [];
        this.authUrl = '/auth';
        this.setActive = false;
        this.menuType = 'TOP';
        this.forbidden = '/forbidden';
        this.notFound = '/not-found';
        this.previousPath = '/';
        this.recommendation = new RecommendationResponse({});
    }
    ;
    /**
     * @return {?}
     */
    AdminLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isMobile = this.actionService.isMobile();
        if (this.isMobile)
            this.menuType = 'LEFT';
        this.aggregatorService.subscribe(KeyConst.ViewImage, (/**
         * @param {?} image
         * @return {?}
         */
        function (image) {
            _this.isModalShow = true;
            _this.modalImageSrc = image.src;
            _this.imageAltText = image.altText;
        }));
        this.route.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data) {
                if (data.menuType)
                    _this.menuType = (/** @type {?} */ (data.menuType));
                if (data.logo)
                    _this.logo = (/** @type {?} */ (data.logo));
                if (data.title)
                    (/** @type {?} */ (data.title));
                if (data.url)
                    _this.url = (/** @type {?} */ (data.url));
                if (data.breadcrumb)
                    _this.breadcrumb = (/** @type {?} */ (data.breadcrumb));
                if (data.forbidden)
                    _this.forbidden = (/** @type {?} */ (data.forbidden));
                if (data.recommendation)
                    _this.recommendation = (/** @type {?} */ (data.recommendation));
                if (data.profileUrl)
                    _this.profileUrl = (/** @type {?} */ (data.profileUrl));
                if (data.searchPlaceholder)
                    _this.searchPlaceholder = (/** @type {?} */ (data.searchPlaceholder));
                if (!_this.breadcrumb) {
                    _this.breadcrumb = new Breadcrumb({
                        label: 'Home',
                        url: _this.url
                    });
                }
                else {
                    _this.breadcrumb.url = _this.url;
                }
                _this.dataService.getToken((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    if (!response || !response.user) {
                        _this.router.navigate([_this.authUrl]);
                    }
                    else {
                        _this.menuTabs = response.menuTabs;
                        _this.currentUser = response.user;
                        _this.checkPermision(_this.currentUser, _this.router, (/**
                         * @return {?}
                         */
                        function () {
                            if (_this.router.url == '/')
                                _this.router.navigate([_this.url]);
                        }));
                    }
                }));
            }
        }));
    };
    /**
     * @return {?}
     */
    AdminLayoutComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof NavigationEnd) {
                _this.dataService.getToken((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    if (!response || !response.user) {
                        _this.router.navigate([_this.authUrl]);
                    }
                    else {
                        _this.currentUser = response.user;
                        _this.menuTabs = response.menuTabs;
                        _this.checkPermision(_this.currentUser, _this.router, (/**
                         * @return {?}
                         */
                        function () {
                            if (_this.router.url == '/') {
                                _this.router.navigate([_this.url]);
                                _this.setActive = !_this.setActive;
                            }
                            else {
                                /** @type {?} */
                                var reload = (/** @type {?} */ (_this.cacheService.get(KeyConst.Reload)));
                                if (reload != false) {
                                    _this.cacheService.set(KeyConst.Reload, false);
                                    window.location.reload();
                                }
                            }
                        }));
                    }
                }));
            }
        }));
    };
    /**
     * @return {?}
     */
    AdminLayoutComponent.prototype.isAuthPage = /**
     * @return {?}
     */
    function () {
        return this.router.url.indexOf('/auth') > -1;
    };
    /**
     * @return {?}
     */
    AdminLayoutComponent.prototype.closeImage = /**
     * @return {?}
     */
    function () {
        this.isModalShow = false;
    };
    /**
     * @return {?}
     */
    AdminLayoutComponent.prototype.hasForbidden = /**
     * @return {?}
     */
    function () {
        return this.router.url == this.forbidden || this.router.url == this.notFound;
    };
    /**
     * @param {?} items
     * @return {?}
     */
    AdminLayoutComponent.prototype.changeMenu = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.breadcrumbs = items;
        this.breadcrumbs.splice(0, 0, this.breadcrumb);
        this.aggregatorService.publish(KeyConst.MenuChanged, this.breadcrumbs);
    };
    /**
     * @private
     * @param {?} user
     * @param {?} router
     * @param {?} callback
     * @return {?}
     */
    AdminLayoutComponent.prototype.checkPermision = /**
     * @private
     * @param {?} user
     * @param {?} router
     * @param {?} callback
     * @return {?}
     */
    function (user, router, callback) {
        /** @type {?} */
        var isValid = this.permisisonProvider.hasPermisison(user, router.url);
        if (!isValid) {
            router.navigate([this.forbidden]);
        }
        else {
            if (this.router.url != this.notFound && this.router.url != this.forbidden) {
                this.previousPath = this.router.url;
                callback();
            }
        }
    };
    AdminLayoutComponent.decorators = [
        { type: Component, args: [{
                    template: "<div class=\"pcoded\" [attr.nav-type]=\"workspaceLayoutService.navType\"\r\n  [attr.theme-layout]=\"workspaceLayoutService.themeLayout\" [attr.layout-type]=\"workspaceLayoutService.layoutType\"\r\n  [attr.vertical-placement]=\"workspaceLayoutService.verticalPlacement\"\r\n  [attr.vertical-layout]=\"workspaceLayoutService.verticalLayout\"\r\n  [attr.pcoded-device-type]=\"workspaceLayoutService.deviceType\"\r\n  [attr.vertical-nav-type]=\"workspaceLayoutService.verticalNavType\"\r\n  [attr.vertical-effect]=\"currentUser && !hasForbidden() ? workspaceLayoutService.verticalEffect: 'shink'\"\r\n  [attr.vnavigation-view]=\"workspaceLayoutService.vNavigationView\"\r\n  (window:resize)=\"workspaceLayoutService.onResize($event)\">\r\n  <div class=\"pcoded-overlay-box\"></div>\r\n  <div class=\"img-viewer-container\">\r\n    <div (click)=\"closeImage()\" [class.show-now]=\"isModalShow\" class=\"modal\">\r\n      <div class=\"view-wrapper modal-content\">\r\n        <div class=\"adv-popup\">\r\n          <img *ngIf=\"modalImageSrc\" [src]=\"modalImageSrc\">\r\n          <button class=\"btn-close-image\"><i class=\"fa fa-close-line\"></i></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"pcoded-container navbar-wrapper\">\r\n    <default-header [searchPlaceholder]=\"searchPlaceholder\" [profileUrl]=\"profileUrl\" [notFound]=\"notFound\" [forbidden]=\"forbidden\" [data]=\"recommendation\"\r\n      [menuType]=\"menuType\" [menuTabs]=\"menuTabs\" [notifications]=\"notifications\" [logo]=\"logo\" [title]=\"title\">\r\n    </default-header>\r\n    <div class=\"pcoded-main-container\" [ngClass]=\"{'auth-bg': isAuthPage()}\" [style.margin-top]=\"workspaceLayoutService.headerFixedMargin\">\r\n      <div class=\"pcoded-wrapper\">\r\n        <default-sidebar *ngIf=\"!hasForbidden() && menuTabs && currentUser && (menuType == 'LEFT' || isMobile)\"\r\n          [setActive]=\"setActive\" (change)=\"changeMenu($event)\" [menuTabs]=\"menuTabs\"></default-sidebar>\r\n        <div class=\"pcoded-content\" [ngClass]=\"{'content-left': menuType == 'TOP'}\">\r\n          <div class=\"pcoded-inner-content\" [ngClass]=\"{'content-top': !currentUser}\">\r\n            <default-navbar *ngIf=\"currentUser && menuType != 'TOP'\" [url]=\"url\" [breadcrumb]=\"breadcrumb\"\r\n              [menuTabs]=\"menuTabs\" [items]=\"breadcrumbs\">\r\n            </default-navbar>\r\n            <div class=\"main-body\" [ngClass]=\"{'main-top': menuType == 'TOP'}\">\r\n              <div class=\"page-wrapper\">\r\n                <div *ngIf=\"currentUser\" class=\"page-body\">\r\n                  <katana-card>\r\n                    <router-outlet>\r\n                      <katana-spinner></katana-spinner>\r\n                    </router-outlet>\r\n                  </katana-card>\r\n                </div>\r\n                <div *ngIf=\"!currentUser\">\r\n                  <router-outlet>\r\n                  </router-outlet>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <default-toolbar></default-toolbar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <default-footer></default-footer>\r\n  </div>\r\n</div>",
                    styles: [".main-top{margin-top:30px}.content-left{margin-left:0!important}.content-top{padding-top:0!important}.auth-bg{background:url(https://previews.123rf.com/images/arrow/arrow1506/arrow150600003/41178096-internet-security-background.jpg) center center/cover no-repeat}"]
                }] }
    ];
    /** @nocollapse */
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: DefaultLayoutService },
        { type: ActivatedRoute },
        { type: AuthenticationService },
        { type: Router },
        { type: ActionService },
        { type: DataService },
        { type: AggregatorService },
        { type: CacheService },
        { type: PermisisonProvider }
    ]; };
    return AdminLayoutComponent;
}());
export { AdminLayoutComponent };
if (false) {
    /** @type {?} */
    AdminLayoutComponent.prototype.notifications;
    /** @type {?} */
    AdminLayoutComponent.prototype.logo;
    /** @type {?} */
    AdminLayoutComponent.prototype.title;
    /** @type {?} */
    AdminLayoutComponent.prototype.menuTabs;
    /** @type {?} */
    AdminLayoutComponent.prototype.isModalShow;
    /** @type {?} */
    AdminLayoutComponent.prototype.modalImageSrc;
    /** @type {?} */
    AdminLayoutComponent.prototype.imageAltText;
    /** @type {?} */
    AdminLayoutComponent.prototype.breadcrumbs;
    /** @type {?} */
    AdminLayoutComponent.prototype.breadcrumb;
    /** @type {?} */
    AdminLayoutComponent.prototype.url;
    /** @type {?} */
    AdminLayoutComponent.prototype.authUrl;
    /** @type {?} */
    AdminLayoutComponent.prototype.setActive;
    /** @type {?} */
    AdminLayoutComponent.prototype.menuType;
    /** @type {?} */
    AdminLayoutComponent.prototype.isMobile;
    /** @type {?} */
    AdminLayoutComponent.prototype.forbidden;
    /** @type {?} */
    AdminLayoutComponent.prototype.notFound;
    /** @type {?} */
    AdminLayoutComponent.prototype.previousPath;
    /** @type {?} */
    AdminLayoutComponent.prototype.recommendation;
    /** @type {?} */
    AdminLayoutComponent.prototype.currentUser;
    /** @type {?} */
    AdminLayoutComponent.prototype.profileUrl;
    /** @type {?} */
    AdminLayoutComponent.prototype.searchPlaceholder;
    /** @type {?} */
    AdminLayoutComponent.prototype.workspaceLayoutService;
    /** @type {?} */
    AdminLayoutComponent.prototype.route;
    /** @type {?} */
    AdminLayoutComponent.prototype.authenticationService;
    /**
     * @type {?}
     * @protected
     */
    AdminLayoutComponent.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    AdminLayoutComponent.prototype.actionService;
    /**
     * @type {?}
     * @protected
     */
    AdminLayoutComponent.prototype.dataService;
    /**
     * @type {?}
     * @protected
     */
    AdminLayoutComponent.prototype.aggregatorService;
    /**
     * @type {?}
     * @protected
     */
    AdminLayoutComponent.prototype.cacheService;
    /**
     * @type {?}
     * @protected
     */
    AdminLayoutComponent.prototype.permisisonProvider;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja3NpdGUtbGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGF5b3V0L2JhY2tzaXRlLWxheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFekQsT0FBTyxFQUFXLFVBQVUsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTlEO0lBNEJJLDhCQUNXLHNCQUE0QyxFQUM1QyxLQUFxQixFQUNyQixxQkFBNEMsRUFDekMsTUFBYyxFQUNkLGFBQTRCLEVBQzVCLFdBQXdCLEVBQ3hCLGlCQUFvQyxFQUNwQyxZQUEwQixFQUMxQixrQkFBc0M7UUFSekMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFzQjtRQUM1QyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FB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LENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDcEMsUUFBUSxFQUFFLENBQUM7YUFDZDtTQUNKO0lBQ0wsQ0FBQzs7Z0JBNUlKLFNBQVMsU0FBQztvQkFDUCwrcEdBQStDOztpQkFFbEQ7Ozs7Z0JBaEJRLG9CQUFvQjtnQkFDcEIsY0FBYztnQkFNZCxxQkFBcUI7Z0JBTkwsTUFBTTtnQkFLdEIsYUFBYTtnQkFLYixXQUFXO2dCQVRYLGlCQUFpQjtnQkFPakIsWUFBWTtnQkFDWixrQkFBa0I7O0lBZ0ozQiwyQkFBQztDQUFBLEFBN0lELElBNklDO1NBeElZLG9CQUFvQjs7O0lBQzdCLDZDQUFnRDs7SUFDaEQsb0NBQXVGOztJQUN2RixxQ0FBMEU7O0lBQzFFLHdDQUEyQjs7SUFDM0IsMkNBQW9DOztJQUNwQyw2Q0FBa0M7O0lBQ2xDLDRDQUFpQzs7SUFDakMsMkNBQXNDOztJQUN0QywwQ0FBOEI7O0lBQzlCLG1DQUFtQjs7SUFDbkIsdUNBQWlDOztJQUNqQyx5Q0FBa0M7O0lBQ2xDLHdDQUFnQzs7SUFDaEMsd0NBQXlCOztJQUN6Qix5Q0FBd0M7O0lBQ3hDLHdDQUF1Qzs7SUFDdkMsNENBQWtDOztJQUNsQyw4Q0FBdUQ7O0lBQ3ZELDJDQUFrQzs7SUFDbEMsMENBQTBCOztJQUMxQixpREFBaUM7O0lBRzdCLHNEQUFtRDs7SUFDbkQscUNBQTRCOztJQUM1QixxREFBbUQ7Ozs7O0lBQ25ELHNDQUF3Qjs7Ozs7SUFDeEIsNkNBQXNDOzs7OztJQUN0QywyQ0FBa0M7Ozs7O0lBQ2xDLGlEQUE4Qzs7Ozs7SUFDOUMsNENBQW9DOzs7OztJQUNwQyxrREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERlZmF1bHRMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9sYXlvdXQuc2VydmljZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBZ2dyZWdhdG9yU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hZ2dyZWdhdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBLZXlDb25zdCB9IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMva2V5LmNvbnN0JztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uRGV0YWlsIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy9ub3RpZmljYXRpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBNZW51VGFiLCBCcmVhZGNydW1iLCBSZWNvbW1lbmRhdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy9iYXNlLm1vZGVsJztcclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hY3Rpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlLCBVc2VyVmlld01vZGVsIH0gZnJvbSAnLi4vYXV0aC9hdXRoLm1vZGVsJztcclxuaW1wb3J0IHsgQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2NhY2hlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQZXJtaXNpc29uUHJvdmlkZXIgfSBmcm9tICcuLi9hdXRoL3Blcm1pc3Npb24ucHJvdmlkZXInO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYmFja3NpdGUtbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2JhY2tzaXRlLWxheW91dC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWRtaW5MYXlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gICAgcHVibGljIG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbkRldGFpbFtdID0gW107XHJcbiAgICBwdWJsaWMgbG9nbzogc3RyaW5nID0gJ2h0dHBzOi8vY21jZ2xvYmFsLmNvbS52bi9jc3MvaW1hZ2UtY29tbW9uL0NvbWJpbmVkJTIwU2hhcGUuc3ZnJztcclxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJ0NNQyBHbG9iYWwgLSBBc3BpcmUgdG8gaW5zcGlyZSB0aGUgRGlnaXRhbCBXb3JsZCc7O1xyXG4gICAgcHVibGljIG1lbnVUYWJzOiBNZW51VGFiW107XHJcbiAgICBwdWJsaWMgaXNNb2RhbFNob3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBtb2RhbEltYWdlU3JjOiBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBpbWFnZUFsdFRleHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIGJyZWFkY3J1bWJzOiBCcmVhZGNydW1iW10gPSBbXTtcclxuICAgIHB1YmxpYyBicmVhZGNydW1iOiBCcmVhZGNydW1iO1xyXG4gICAgcHVibGljIHVybDogc3RyaW5nO1xyXG4gICAgcHVibGljIGF1dGhVcmw6IHN0cmluZyA9ICcvYXV0aCc7XHJcbiAgICBwdWJsaWMgc2V0QWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgbWVudVR5cGU6IHN0cmluZyA9ICdUT1AnO1xyXG4gICAgcHVibGljIGlzTW9iaWxlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGZvcmJpZGRlbjogc3RyaW5nID0gJy9mb3JiaWRkZW4nO1xyXG4gICAgcHVibGljIG5vdEZvdW5kOiBzdHJpbmcgPSAnL25vdC1mb3VuZCc7XHJcbiAgICBwdWJsaWMgcHJldmlvdXNQYXRoOiBzdHJpbmcgPSAnLyc7XHJcbiAgICBwdWJsaWMgcmVjb21tZW5kYXRpb24gPSBuZXcgUmVjb21tZW5kYXRpb25SZXNwb25zZSh7fSk7XHJcbiAgICBwdWJsaWMgY3VycmVudFVzZXI6IFVzZXJWaWV3TW9kZWw7XHJcbiAgICBwdWJsaWMgcHJvZmlsZVVybDogc3RyaW5nO1xyXG4gICAgcHVibGljIHNlYXJjaFBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHdvcmtzcGFjZUxheW91dFNlcnZpY2U6IERlZmF1bHRMYXlvdXRTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHVibGljIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcm90ZWN0ZWQgYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZSxcclxuICAgICAgICBwcm90ZWN0ZWQgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHByb3RlY3RlZCBhZ2dyZWdhdG9yU2VydmljZTogQWdncmVnYXRvclNlcnZpY2UsXHJcbiAgICAgICAgcHJvdGVjdGVkIGNhY2hlU2VydmljZTogQ2FjaGVTZXJ2aWNlLFxyXG4gICAgICAgIHByb3RlY3RlZCBwZXJtaXNpc29uUHJvdmlkZXI6IFBlcm1pc2lzb25Qcm92aWRlclxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzTW9iaWxlID0gdGhpcy5hY3Rpb25TZXJ2aWNlLmlzTW9iaWxlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGUpIHRoaXMubWVudVR5cGUgPSAnTEVGVCc7XHJcbiAgICAgICAgdGhpcy5hZ2dyZWdhdG9yU2VydmljZS5zdWJzY3JpYmUoS2V5Q29uc3QuVmlld0ltYWdlLCAoaW1hZ2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzTW9kYWxTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEltYWdlU3JjID0gaW1hZ2Uuc3JjO1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlQWx0VGV4dCA9IGltYWdlLmFsdFRleHQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGUuZGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5tZW51VHlwZSkgdGhpcy5tZW51VHlwZSA9IDxzdHJpbmc+ZGF0YS5tZW51VHlwZTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxvZ28pIHRoaXMubG9nbyA9IDxzdHJpbmc+ZGF0YS5sb2dvO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudGl0bGUpPHN0cmluZz5kYXRhLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudXJsKSB0aGlzLnVybCA9IDxzdHJpbmc+ZGF0YS51cmw7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5icmVhZGNydW1iKSB0aGlzLmJyZWFkY3J1bWIgPSA8QnJlYWRjcnVtYj5kYXRhLmJyZWFkY3J1bWI7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5mb3JiaWRkZW4pIHRoaXMuZm9yYmlkZGVuID0gPHN0cmluZz5kYXRhLmZvcmJpZGRlbjtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlY29tbWVuZGF0aW9uKSB0aGlzLnJlY29tbWVuZGF0aW9uID0gPFJlY29tbWVuZGF0aW9uUmVzcG9uc2U+ZGF0YS5yZWNvbW1lbmRhdGlvbjtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnByb2ZpbGVVcmwpIHRoaXMucHJvZmlsZVVybCA9IDxzdHJpbmc+ZGF0YS5wcm9maWxlVXJsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc2VhcmNoUGxhY2Vob2xkZXIpIHRoaXMuc2VhcmNoUGxhY2Vob2xkZXIgPSA8c3RyaW5nPmRhdGEuc2VhcmNoUGxhY2Vob2xkZXI7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYnJlYWRjcnVtYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnJlYWRjcnVtYiA9IG5ldyBCcmVhZGNydW1iKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdIb21lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLnVybFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyZWFkY3J1bWIudXJsID0gdGhpcy51cmw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldFRva2VuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLnVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aFVybF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51VGFicyA9IHJlc3BvbnNlLm1lbnVUYWJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gcmVzcG9uc2UudXNlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1Blcm1pc2lvbih0aGlzLmN1cnJlbnRVc2VyLCB0aGlzLnJvdXRlciwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucm91dGVyLnVybCA9PSAnLycpIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnVybF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldFRva2VuKChyZXNwb25zZTogQXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UudXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoVXJsXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gcmVzcG9uc2UudXNlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51VGFicyA9IHJlc3BvbnNlLm1lbnVUYWJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUGVybWlzaW9uKHRoaXMuY3VycmVudFVzZXIsIHRoaXMucm91dGVyLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yb3V0ZXIudXJsID09ICcvJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnVybF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlID0gIXRoaXMuc2V0QWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVsb2FkID0gPGJvb2xlYW4+dGhpcy5jYWNoZVNlcnZpY2UuZ2V0KEtleUNvbnN0LlJlbG9hZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbG9hZCAhPSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU2VydmljZS5zZXQoS2V5Q29uc3QuUmVsb2FkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzQXV0aFBhZ2UoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLnVybC5pbmRleE9mKCcvYXV0aCcpID4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlSW1hZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc01vZGFsU2hvdyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXNGb3JiaWRkZW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLnVybCA9PSB0aGlzLmZvcmJpZGRlbiB8fCB0aGlzLnJvdXRlci51cmwgPT0gdGhpcy5ub3RGb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlTWVudShpdGVtczogQnJlYWRjcnVtYltdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5icmVhZGNydW1icyA9IGl0ZW1zO1xyXG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYnMuc3BsaWNlKDAsIDAsIHRoaXMuYnJlYWRjcnVtYik7XHJcbiAgICAgICAgdGhpcy5hZ2dyZWdhdG9yU2VydmljZS5wdWJsaXNoKEtleUNvbnN0Lk1lbnVDaGFuZ2VkLCB0aGlzLmJyZWFkY3J1bWJzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrUGVybWlzaW9uKHVzZXI6IFVzZXJWaWV3TW9kZWwsIHJvdXRlcjogUm91dGVyLCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHZhciBpc1ZhbGlkID0gdGhpcy5wZXJtaXNpc29uUHJvdmlkZXIuaGFzUGVybWlzaXNvbih1c2VyLCByb3V0ZXIudXJsKTtcclxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgcm91dGVyLm5hdmlnYXRlKFt0aGlzLmZvcmJpZGRlbl0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJvdXRlci51cmwgIT0gdGhpcy5ub3RGb3VuZCAmJiB0aGlzLnJvdXRlci51cmwgIT0gdGhpcy5mb3JiaWRkZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNQYXRoID0gdGhpcy5yb3V0ZXIudXJsO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=