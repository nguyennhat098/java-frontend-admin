/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/layout/header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { DefaultLayoutService } from './layout.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ActionService } from '../shared/services/action.service';
import { AggregatorService } from '../shared/services/aggregator.service';
import { AuthenticationService } from '../auth/auth.service';
import { KeyConst } from '../shared/constants/key.const';
import { RecommendationResponse } from '../shared/models/base.model';
import { MenuService } from '../shared/services/menu.service';
import { DataService } from '../shared/services/data.service';
export class DefaultHeaderComponent {
    /**
     * @param {?} layoutService
     * @param {?} router
     * @param {?} route
     * @param {?} actionService
     * @param {?} dataService
     * @param {?} aggregatorService
     * @param {?} authenticationService
     * @param {?} menuService
     */
    constructor(layoutService, router, route, actionService, dataService, aggregatorService, authenticationService, menuService) {
        this.layoutService = layoutService;
        this.router = router;
        this.route = route;
        this.actionService = actionService;
        this.dataService = dataService;
        this.aggregatorService = aggregatorService;
        this.authenticationService = authenticationService;
        this.menuService = menuService;
        this.notifications = [];
        this.menuTabs = [];
        this.data = new RecommendationResponse();
        this.loading = false;
        this.menuItems = [];
        this.isSupplier = false;
        this.tabs = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.searchPlaceholder)
            this.searchPlaceholder = 'Please input...';
        this.isMobile = this.actionService.isMobile();
        if (this.isMobile) {
            this.toggleMenu();
        }
        if (!this.authenticationService.currentUser) {
            this.toggleMenu();
        }
        this.dataService.getToken((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.user = response.user;
        }));
        this.debound = this.dataService.initDebounceTime(this.data.deboundTime);
        this.registerEvents();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.initMenu();
        this.dataService.getToken((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (!response || !response.user)
                return;
            this.user = response.user;
        }));
    }
    /**
     * @return {?}
     */
    search() {
        this.data.show = false;
        this.data.all = false;
        this.aggregatorService.publish(KeyConst.Search, this.data);
    }
    /**
     * @return {?}
     */
    clear() {
        this.data.keyword = '';
        this.data.show = false;
    }
    /**
     * @return {?}
     */
    focus() {
        this.setTemplate();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    setRecommendation($event) {
        if ($event.which == 13) {
            this.search();
        }
        else {
            this.setTemplate();
        }
    }
    /**
     * @return {?}
     */
    toggleMenu() {
        if (this.layoutService.verticalEffect == 'overlay') {
            this.layoutService.verticalEffect = 'shrink';
        }
        else {
            this.layoutService.verticalEffect = 'overlay';
        }
    }
    /**
     * @return {?}
     */
    logout() {
        this.authenticationService.logout(null, true);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectItem(item) {
        if (this.menuItems) {
            this.menuItems.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                item.selected = false;
            }));
        }
        item.selected = true;
        this.selectedMenu = item;
        this.data.selectedMenu = this.selectedMenu.label;
        if (this.selectedMenu.children && this.selectedMenu.children.length > 0) {
            this.selectedMenu.children.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                item.selected = false;
            }));
            this.selectedMenu.children[0].selected = true;
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getParentLink(item) {
        if (!item.children || item.children.length == 0)
            return 'javascript:;';
        /** @type {?} */
        var currentItem = item.children[0];
        /** @type {?} */
        var link = currentItem.mainState ? `/${currentItem.mainState}/${currentItem.state}` : `/${currentItem.state}`;
        return link;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getChildLink(item) {
        return item.mainState ? `/${item.mainState}/${item.state}` : `/${item.state}`;
    }
    /**
     * @param {?} child
     * @return {?}
     */
    selectSubMenu(child) {
        if (!this.selectedMenu)
            return;
        if (this.selectedMenu.children) {
            this.selectedMenu.children.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                item.selected = false;
            }));
        }
        child.selected = true;
        this.data.selectedMenu = child.name;
    }
    /**
     * @return {?}
     */
    hasForbidden() {
        return this.router.url == this.forbidden || this.router.url == this.notFound;
    }
    /**
     * @private
     * @return {?}
     */
    registerEvents() {
        this.initMenu();
    }
    /**
     * @private
     * @return {?}
     */
    initMenu() {
        this.dataService.getToken((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (!response || !response.user)
                return;
            this.user = response.user;
            this.menuTabs = response.menuTabs;
            this.menuService.init(this.menuTabs, (/**
             * @return {?}
             */
            () => {
                this.tabs = this.menuService.getTabs();
                this.currentUrl = this.tabs[0].menu;
                this.menuItems = this.menuService.loadFirstTabItems(this.currentUrl);
                this.actionService.executeAsync((/**
                 * @return {?}
                 */
                () => {
                    this.isCollapsedSideBar = 'no-block';
                }));
                this.setMenu();
            }), this.set);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    setTemplate() {
        if (this.data.keyword && this.data.keyword != '' && this.data.keyword != null) {
            this.data.show = true;
            /** @type {?} */
            var paths = this.router.url.split('/');
            this.data.selectedMenu = this.actionService.retrieveStateName(paths[paths.length - 1], this.menuTabs);
            this.debound.next((/**
             * @return {?}
             */
            () => this.aggregatorService.publish(KeyConst.KeywordChanged, this.data)));
        }
        else {
            this.clear();
        }
    }
    /**
     * @private
     * @return {?}
     */
    setMenu() {
        if (this.menuItems) {
            /** @type {?} */
            var url = this.router.url;
            this.menuItems.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                if (item.children) {
                    item.children.forEach((/**
                     * @param {?} kid
                     * @return {?}
                     */
                    (kid) => {
                        /** @type {?} */
                        var state = kid.mainState ? kid.mainState : kid.state;
                        if (url.indexOf(state) > -1) {
                            this.actionService.executeAsync((/**
                             * @return {?}
                             */
                            () => {
                                /** @type {?} */
                                let items = document.querySelectorAll(".top-item");
                                if (items && items.length > 0) {
                                    for (let i = 0; i < items.length; i++) {
                                        /** @type {?} */
                                        const href = ((/** @type {?} */ (items[i]))).href;
                                        if (href && href.toString().indexOf(state) > 0) {
                                            item.selected = true;
                                            this.data.selectedMenu = item.label;
                                            this.selectedMenu = item;
                                            /** @type {?} */
                                            var data = url.split('/');
                                            if (data && data.length > 0 && this.selectedMenu.children) {
                                                /** @type {?} */
                                                var currentChild = this.selectedMenu.children.find((/**
                                                 * @param {?} s
                                                 * @return {?}
                                                 */
                                                s => s.state == data[data.length - 1]));
                                                if (currentChild) {
                                                    currentChild.selected = true;
                                                    this.data.selectedMenu = currentChild.name;
                                                }
                                            }
                                            break;
                                        }
                                    }
                                }
                            }));
                        }
                    }));
                }
            }));
        }
    }
}
DefaultHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'default-header',
                template: "<nav class=\"navbar header-navbar pcoded-header header-workspace\"\r\n  [attr.pcoded-header-position]=\"layoutService.pcodedHeaderPosition\" [attr.header-theme]=\"layoutService.headerTheme\">\r\n  <div class=\"navbar-wrapper\">\r\n    <div class=\"navbar-container-right\">\r\n      <a *ngIf=\"!hasForbidden() && user && (menuType == 'LEFT' || isMobile)\" #menu class=\"btn-show-hide-menu ml-1\"\r\n        (click)=\"toggleMenu()\" href=\"javascript:;\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n    <div class=\"navbar-logo\" [attr.logo-theme]=\"layoutService.logoTheme\">\r\n      <a class=\"logo--wrapper\" [routerLink]=\"['/']\">\r\n        <ng-container *ngIf=\"logo\">\r\n          <img class=\"text-logo\" [src]=\"logo\" alt=\"\" [title]=\"title\">\r\n        </ng-container>\r\n      </a>\r\n    </div>\r\n    <ng-container *ngIf=\"!isMobile; else mobileActions\">\r\n      <div *ngIf=\"menuType == 'TOP' && user && !hasForbidden()\" class=\"navbar-container menu-top\">\r\n        <ul class=\"nav-left\">\r\n          <li *ngFor=\"let menuItem of menuItems\">\r\n            <a (click)=\"selectItem(menuItem)\" class=\"top-item\" [ngClass]=\"{'active-menu': menuItem.selected}\"\r\n              [routerLink]=\"getParentLink(menuItem)\"><span class=\"{{menuItem?.icon}}\"></span> {{menuItem?.label}}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"navbar-container ml-auto\">\r\n        <ul class=\"nav-left\">\r\n        </ul>\r\n        <ul class=\"nav-right\" [ngClass]=\"layoutService.isCollapsedMobile\">\r\n          <li *ngIf=\"user && !hasForbidden()\">\r\n            <div class=\"row form search-bar form-inline\">\r\n              <div class=\"flex-custom\">\r\n                <div class=\"form-group search-input-wrapper\">\r\n                  <span (click)=\"search()\" class=\"search-icon\">\r\n                    <i class=\"fa fa-search\"></i>\r\n                  </span>\r\n                  <input spellcheck=\"false\" (click)=\"focus()\" [(ngModel)]=\"data.keyword\"\r\n                    (keyup)=\"setRecommendation($event)\" type=\"text\" class=\"form-control search-input\"\r\n                    [placeholder]=\"searchPlaceholder\">\r\n                  <span class=\"search-reset\" *ngIf=\"data.keyword\">\r\n                    <i *ngIf=\"loading\" class=\"fa fa-spinner rotate-refresh\"></i>\r\n                    <i *ngIf=\"!loading\" class=\"fa fa-times-circle\" (click)=\"clear()\"></i>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li *ngIf=\"user && !hasForbidden()\" class=\"header-notification\">\r\n            <a href=\"javascript:;\">\r\n              <i class=\"fa fa-bell bell icon-noti\"></i>\r\n              <span class=\"badge\">1</span>\r\n            </a>\r\n            <div class=\"notify--wrapper\">\r\n              <h6 class=\"m-b-0 text-font-13\">\r\n                <a href=\"javascript:;\" class=\"text-primary text-font-13\">Ch\u1EE9c n\u0103ng \u0111ang ho\u00E0n thi\u1EC7n...</a>\r\n              </h6>\r\n              <ul class=\"list-unstyled\">\r\n                <li class=\"w-100\" *ngFor=\"let notification of notifications\">\r\n                  <a href=\"javascript:;\">\r\n                    <p class=\"text-bold mb-1\">FW4C</p>\r\n                    <p class=\"time m-0\">\r\n                      <i class=\"icofont icofont-clock-time\"></i>25/10/2019\r\n                    </p>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n              <h6 class=\"text-center p-2 view-all-noti m-0\">\r\n                <a href=\"javascript:;\" class=\"text-primary text-font-13 link-view-more\">\r\n                  Xem t\u1EA5t c\u1EA3\r\n                </a>\r\n              </h6>\r\n            </div>\r\n          </li>\r\n          <li class=\"user-profile header-notification\" *ngIf=\"user\">\r\n            <a [routerLink]=\"['/']\">\r\n              <img [hidden]=\"!user?.image?.src\" [src]=\"user?.image?.src\" alt=\"\" srcset=\"\"\r\n                style=\"border: 2px solid #ffffff; background: #f8f8f8; width: auto; height: 25px; width: 25px; border-radius: 50%;\">\r\n              <span [hidden]=\"user?.image?.src\" class=\"ava\"\r\n                [attr.data-letters]=\"(user.lastName | slice:0:1) + (user.firstName | slice:0:1)\"></span>\r\n              <span style=\"font-weight: normal;\">{{user.fullName}}</span>\r\n              <i class=\"ti-angle-down\"></i>\r\n            </a>\r\n            <div class=\"user-list-option--wrapper\">\r\n              <ul class=\"show-notification profile-notification\">\r\n                <li class=\"p-0\">\r\n                  <a href=\"javascript:void(0)\" [routerLink]=\"profileUrl\"><i></i>T\u00E0i kho\u1EA3n</a>\r\n                </li>\r\n                <li class=\"p-0\" (click)=\"logout()\">\r\n                  <a href=\"javascript:void(0)\"><i></i>Tho\u00E1t</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n  <div *ngIf=\"!hasForbidden() && menuType == 'TOP' && !isMobile && user && !data.show\" class=\"sub-top\">\r\n    <ul class=\"sub-items\">\r\n      <li style=\"padding: 10px;\">\r\n        <a [ngClass]=\"{'active-menu': child.selected}\" (click)=\"selectSubMenu(child)\"\r\n          *ngFor=\"let child of selectedMenu?.children\" [routerLink]=\"getChildLink(child)\"><span\r\n            class=\"{{child?.icon}}\"></span> {{child?.name}}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <katana-recommendation [data]=\"data\"></katana-recommendation>\r\n</nav>\r\n<ng-template #mobileActions>\r\n  <div class=\"navbar-container-mobile ml-auto\">\r\n    <div class=\"header-notification d-flex align-items-center\">\r\n      <img [hidden]=\"!user?.image?.src\" [src]=\"user?.image?.src\" alt=\"\" srcset=\"\"\r\n        style=\" width:32px; border: 2px solid #ffffff; border-radius: 50%; background: #f8f8f8;\">\r\n      <span [hidden]=\"user?.image?.src\" class=\"ava\"\r\n        [attr.data-letters]=\"(user.lastName | slice:0:1) + (user.firstName | slice:0:1)\"></span>\r\n      <i class=\"text-white ti-angle-down\"></i>\r\n      <div class=\"user-list-option--wrapper\">\r\n        <ul class=\"show-notification profile-notification m-0\">\r\n          <li><a class=\"p-0\" [routerLink]=\"['/user-profile']\">H\u1ED3 s\u01A1 c\u00E1 nh\u00E2n</a></li>\r\n          <li><a href=\"javascript:void(0)\" (click)=\"logout()\"><i class=\"ti-layout-sidebar-left\"></i>Tho\u00E1t</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                styles: ["a{text-decoration:none}.header-notification .text-white{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;white-space:normal}.header-notification .text-white.ti-angle-down{padding:0 8px;line-height:40px}span.ava[data-letters]:before{content:attr(data-letters);display:inline-block;font-size:1em;width:35px;height:35px;line-height:35px;text-align:center;border-radius:50%;background:#f8f8f8;vertical-align:middle;margin-right:.3em;color:#a9a9a9}.menu-top{margin-left:60px}.menu-top ul li a{font-weight:500;border-bottom:2px solid #007bff;padding-left:0;padding-right:0}.menu-top ul li a:hover{border-bottom:2px solid #ff9500}.active-menu{border-bottom:2px solid #ff9500!important}.sub-top{background-color:#fff;min-height:32px;width:100%}.sub-items{text-align:center;margin-bottom:0}.sub-items li{font-size:12px;font-weight:500}.sub-items li a{padding:0;margin-right:15px;border-bottom:2px solid transparent}"]
            }] }
];
/** @nocollapse */
DefaultHeaderComponent.ctorParameters = () => [
    { type: DefaultLayoutService },
    { type: Router },
    { type: ActivatedRoute },
    { type: ActionService },
    { type: DataService },
    { type: AggregatorService },
    { type: AuthenticationService },
    { type: MenuService }
];
DefaultHeaderComponent.propDecorators = {
    notifications: [{ type: Input }],
    logo: [{ type: Input }],
    title: [{ type: Input }],
    menuType: [{ type: Input }],
    set: [{ type: Input }],
    menuTabs: [{ type: Input }],
    data: [{ type: Input }],
    forbidden: [{ type: Input }],
    notFound: [{ type: Input }],
    profileUrl: [{ type: Input }],
    searchPlaceholder: [{ type: Input }],
    menu: [{ type: ViewChild, args: ['menu', { static: true },] }]
};
if (false) {
    /** @type {?} */
    DefaultHeaderComponent.prototype.notifications;
    /** @type {?} */
    DefaultHeaderComponent.prototype.logo;
    /** @type {?} */
    DefaultHeaderComponent.prototype.title;
    /** @type {?} */
    DefaultHeaderComponent.prototype.menuType;
    /** @type {?} */
    DefaultHeaderComponent.prototype.set;
    /** @type {?} */
    DefaultHeaderComponent.prototype.menuTabs;
    /** @type {?} */
    DefaultHeaderComponent.prototype.data;
    /** @type {?} */
    DefaultHeaderComponent.prototype.forbidden;
    /** @type {?} */
    DefaultHeaderComponent.prototype.notFound;
    /** @type {?} */
    DefaultHeaderComponent.prototype.profileUrl;
    /** @type {?} */
    DefaultHeaderComponent.prototype.searchPlaceholder;
    /** @type {?} */
    DefaultHeaderComponent.prototype.menu;
    /** @type {?} */
    DefaultHeaderComponent.prototype.loading;
    /** @type {?} */
    DefaultHeaderComponent.prototype.filter;
    /** @type {?} */
    DefaultHeaderComponent.prototype.user;
    /** @type {?} */
    DefaultHeaderComponent.prototype.isMobile;
    /** @type {?} */
    DefaultHeaderComponent.prototype.currentUrl;
    /** @type {?} */
    DefaultHeaderComponent.prototype.menuItems;
    /** @type {?} */
    DefaultHeaderComponent.prototype.isCollapsedSideBar;
    /** @type {?} */
    DefaultHeaderComponent.prototype.isSupplier;
    /** @type {?} */
    DefaultHeaderComponent.prototype.tabs;
    /** @type {?} */
    DefaultHeaderComponent.prototype.selectedMenu;
    /**
     * @type {?}
     * @protected
     */
    DefaultHeaderComponent.prototype.debound;
    /** @type {?} */
    DefaultHeaderComponent.prototype.layoutService;
    /**
     * @type {?}
     * @protected
     */
    DefaultHeaderComponent.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    DefaultHeaderComponent.prototype.route;
    /**
     * @type {?}
     * @protected
     */
    DefaultHeaderComponent.prototype.actionService;
    /**
     * @type {?}
     * @protected
     */
    DefaultHeaderComponent.prototype.dataService;
    /**
     * @type {?}
     * @protected
     */
    DefaultHeaderComponent.prototype.aggregatorService;
    /**
     * @type {?}
     * @protected
     */
    DefaultHeaderComponent.prototype.authenticationService;
    /**
     * @type {?}
     * @protected
     */
    DefaultHeaderComponent.prototype.menuService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUdsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekQsT0FBTyxFQUE0QyxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9HLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFTOUQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7Ozs7Ozs7SUF5Qi9CLFlBQ1csYUFBbUMsRUFDaEMsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLGFBQTRCLEVBQzVCLFdBQXdCLEVBQ3hCLGlCQUFvQyxFQUNwQyxxQkFBNEMsRUFDNUMsV0FBd0I7UUFQM0Isa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FB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QkFDMUIsb2xOQUFzQzs7YUFFekM7Ozs7WUFqQlEsb0JBQW9CO1lBQ3BCLE1BQU07WUFBRSxjQUFjO1lBQ3RCLGFBQWE7WUFRYixXQUFXO1lBTFgsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUdyQixXQUFXOzs7NEJBV2YsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSztrQkFDTCxLQUFLO3VCQUNMLEtBQUs7bUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSztnQ0FDTCxLQUFLO21CQUNMLFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBWG5DLCtDQUF5RDs7SUFDekQsc0NBQTZCOztJQUM3Qix1Q0FBOEI7O0lBQzlCLDBDQUFpQzs7SUFDakMscUNBQWdEOztJQUNoRCwwQ0FBeUM7O0lBQ3pDLHNDQUFvRDs7SUFDcEQsMkNBQWtDOztJQUNsQywwQ0FBaUM7O0lBQ2pDLDRDQUFtQzs7SUFDbkMsbURBQTBDOztJQUMxQyxzQ0FBNkQ7O0lBQzdELHlDQUFnQzs7SUFDaEMsd0NBQXNCOztJQUN0QixzQ0FBMkI7O0lBQzNCLDBDQUF5Qjs7SUFDekIsNENBQTBCOztJQUMxQiwyQ0FBK0M7O0lBQy9DLG9EQUFrQzs7SUFDbEMsNENBQTBCOztJQUMxQixzQ0FBb0U7O0lBQ3BFLDhDQUEyQzs7Ozs7SUFDM0MseUNBQWdDOztJQUc1QiwrQ0FBMEM7Ozs7O0lBQzFDLHdDQUF3Qjs7Ozs7SUFDeEIsdUNBQStCOzs7OztJQUMvQiwrQ0FBc0M7Ozs7O0lBQ3RDLDZDQUFrQzs7Ozs7SUFDbEMsbURBQThDOzs7OztJQUM5Qyx1REFBc0Q7Ozs7O0lBQ3RELDZDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkNoYW5nZXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEZWZhdWx0TGF5b3V0U2VydmljZSB9IGZyb20gJy4vbGF5b3V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hY3Rpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkRldGFpbCB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbHMvbm90aWZpY2F0aW9uLm1vZGVsJztcclxuaW1wb3J0IHsgVXNlclZpZXdNb2RlbCwgQXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlIH0gZnJvbSAnLi4vYXV0aC9hdXRoLm1vZGVsJztcclxuaW1wb3J0IHsgQWdncmVnYXRvclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYWdncmVnYXRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBLZXlDb25zdCB9IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMva2V5LmNvbnN0JztcclxuaW1wb3J0IHsgTWVudVRhYiwgRXh0ZW5kZWRNYWluTWVudUdyb3VwLCBNZW51SXRlbSwgUmVjb21tZW5kYXRpb25SZXNwb25zZSB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbHMvYmFzZS5tb2RlbCc7XHJcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL21lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkZWZhdWx0LWhlYWRlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBub3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25EZXRhaWxbXSA9IFtdO1xyXG4gICAgQElucHV0KCkgcHVibGljIGxvZ286IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcHVibGljIG1lbnVUeXBlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc2V0OiAocm9sZTogc3RyaW5nKSA9PiBNZW51SXRlbTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBtZW51VGFiczogTWVudVRhYltdID0gW107XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGF0YSA9IG5ldyBSZWNvbW1lbmRhdGlvblJlc3BvbnNlKCk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZm9yYmlkZGVuOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbm90Rm91bmQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwcm9maWxlVXJsOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc2VhcmNoUGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgIEBWaWV3Q2hpbGQoJ21lbnUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgbWVudTogRWxlbWVudFJlZjtcclxuICAgIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZmlsdGVyOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdXNlcjogVXNlclZpZXdNb2RlbDtcclxuICAgIHB1YmxpYyBpc01vYmlsZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBjdXJyZW50VXJsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVudUl0ZW1zOiBFeHRlbmRlZE1haW5NZW51R3JvdXBbXSA9IFtdO1xyXG4gICAgcHVibGljIGlzQ29sbGFwc2VkU2lkZUJhcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGlzU3VwcGxpZXIgPSBmYWxzZTtcclxuICAgIHB1YmxpYyB0YWJzOiB7IG5hbWU6IHN0cmluZywgbWVudTogc3RyaW5nLCBzdWJOYW1lOiBzdHJpbmcgfVtdID0gW107XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRNZW51OiBFeHRlbmRlZE1haW5NZW51R3JvdXA7XHJcbiAgICBwcm90ZWN0ZWQgZGVib3VuZDogU3ViamVjdDxhbnk+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBsYXlvdXRTZXJ2aWNlOiBEZWZhdWx0TGF5b3V0U2VydmljZSxcclxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcm90ZWN0ZWQgYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZSxcclxuICAgICAgICBwcm90ZWN0ZWQgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHByb3RlY3RlZCBhZ2dyZWdhdG9yU2VydmljZTogQWdncmVnYXRvclNlcnZpY2UsXHJcbiAgICAgICAgcHJvdGVjdGVkIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByb3RlY3RlZCBtZW51U2VydmljZTogTWVudVNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlYXJjaFBsYWNlaG9sZGVyKSB0aGlzLnNlYXJjaFBsYWNlaG9sZGVyID0gJ1BsZWFzZSBpbnB1dC4uLic7XHJcbiAgICAgICAgdGhpcy5pc01vYmlsZSA9IHRoaXMuYWN0aW9uU2VydmljZS5pc01vYmlsZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldFRva2VuKChyZXNwb25zZTogQXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHJlc3BvbnNlLnVzZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kZWJvdW5kID0gdGhpcy5kYXRhU2VydmljZS5pbml0RGVib3VuY2VUaW1lKHRoaXMuZGF0YS5kZWJvdW5kVGltZSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5pdE1lbnUoKTtcclxuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldFRva2VuKChyZXNwb25zZTogQXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLnVzZXIpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy51c2VyID0gcmVzcG9uc2UudXNlcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VhcmNoKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YS5zaG93ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kYXRhLmFsbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWdncmVnYXRvclNlcnZpY2UucHVibGlzaChLZXlDb25zdC5TZWFyY2gsIHRoaXMuZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YS5rZXl3b3JkID0gJyc7XHJcbiAgICAgICAgdGhpcy5kYXRhLnNob3cgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9jdXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRUZW1wbGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRSZWNvbW1lbmRhdGlvbigkZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICgkZXZlbnQud2hpY2ggPT0gMTMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2goKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRlbXBsYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVNZW51KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxheW91dFNlcnZpY2UudmVydGljYWxFZmZlY3QgPT0gJ292ZXJsYXknKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF5b3V0U2VydmljZS52ZXJ0aWNhbEVmZmVjdCA9ICdzaHJpbmsnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF5b3V0U2VydmljZS52ZXJ0aWNhbEVmZmVjdCA9ICdvdmVybGF5JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ291dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dvdXQobnVsbCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdEl0ZW0oaXRlbTogRXh0ZW5kZWRNYWluTWVudUdyb3VwKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubWVudUl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNZW51ID0gaXRlbTtcclxuICAgICAgICB0aGlzLmRhdGEuc2VsZWN0ZWRNZW51ID0gdGhpcy5zZWxlY3RlZE1lbnUubGFiZWw7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRNZW51LmNoaWxkcmVuICYmIHRoaXMuc2VsZWN0ZWRNZW51LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1lbnUuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1lbnUuY2hpbGRyZW5bMF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGFyZW50TGluayhpdGVtOiBFeHRlbmRlZE1haW5NZW51R3JvdXApOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghaXRlbS5jaGlsZHJlbiB8fCBpdGVtLmNoaWxkcmVuLmxlbmd0aCA9PSAwKSByZXR1cm4gJ2phdmFzY3JpcHQ6Oyc7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRJdGVtID0gaXRlbS5jaGlsZHJlblswXTtcclxuICAgICAgICB2YXIgbGluayA9IGN1cnJlbnRJdGVtLm1haW5TdGF0ZSA/IGAvJHtjdXJyZW50SXRlbS5tYWluU3RhdGV9LyR7Y3VycmVudEl0ZW0uc3RhdGV9YCA6IGAvJHtjdXJyZW50SXRlbS5zdGF0ZX1gO1xyXG4gICAgICAgIHJldHVybiBsaW5rO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDaGlsZExpbmsoaXRlbTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5tYWluU3RhdGUgPyBgLyR7aXRlbS5tYWluU3RhdGV9LyR7aXRlbS5zdGF0ZX1gIDogYC8ke2l0ZW0uc3RhdGV9YDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0U3ViTWVudShjaGlsZDogTWVudUl0ZW0pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRNZW51KSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRNZW51LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRNZW51LmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoaWxkLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRhdGEuc2VsZWN0ZWRNZW51ID0gY2hpbGQubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzRm9yYmlkZGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlci51cmwgPT0gdGhpcy5mb3JiaWRkZW4gfHwgdGhpcy5yb3V0ZXIudXJsID09IHRoaXMubm90Rm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluaXRNZW51KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0TWVudSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldFRva2VuKChyZXNwb25zZTogQXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLnVzZXIpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy51c2VyID0gcmVzcG9uc2UudXNlcjtcclxuICAgICAgICAgICAgdGhpcy5tZW51VGFicyA9IHJlc3BvbnNlLm1lbnVUYWJzO1xyXG4gICAgICAgICAgICB0aGlzLm1lbnVTZXJ2aWNlLmluaXQodGhpcy5tZW51VGFicywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWJzID0gdGhpcy5tZW51U2VydmljZS5nZXRUYWJzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVcmwgPSB0aGlzLnRhYnNbMF0ubWVudTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudUl0ZW1zID0gdGhpcy5tZW51U2VydmljZS5sb2FkRmlyc3RUYWJJdGVtcyh0aGlzLmN1cnJlbnRVcmwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25TZXJ2aWNlLmV4ZWN1dGVBc3luYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZFNpZGVCYXIgPSAnbm8tYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1lbnUoKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5zZXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VGVtcGxhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5rZXl3b3JkICYmIHRoaXMuZGF0YS5rZXl3b3JkICE9ICcnICYmIHRoaXMuZGF0YS5rZXl3b3JkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXIgcGF0aHMgPSB0aGlzLnJvdXRlci51cmwuc3BsaXQoJy8nKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnNlbGVjdGVkTWVudSA9IHRoaXMuYWN0aW9uU2VydmljZS5yZXRyaWV2ZVN0YXRlTmFtZShwYXRoc1twYXRocy5sZW5ndGggLSAxXSwgdGhpcy5tZW51VGFicyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVib3VuZC5uZXh0KCgpID0+IHRoaXMuYWdncmVnYXRvclNlcnZpY2UucHVibGlzaChLZXlDb25zdC5LZXl3b3JkQ2hhbmdlZCwgdGhpcy5kYXRhKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldE1lbnUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubWVudUl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHZhciB1cmwgPSB0aGlzLnJvdXRlci51cmw7XHJcbiAgICAgICAgICAgIHRoaXMubWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGlsZHJlbi5mb3JFYWNoKChraWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXRlID0ga2lkLm1haW5TdGF0ZSA/IGtpZC5tYWluU3RhdGUgOiBraWQuc3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cmwuaW5kZXhPZihzdGF0ZSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25TZXJ2aWNlLmV4ZWN1dGVBc3luYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b3AtaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBocmVmID0gKDxhbnk+aXRlbXNbaV0pLmhyZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaHJlZiAmJiBocmVmLnRvU3RyaW5nKCkuaW5kZXhPZihzdGF0ZSkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNlbGVjdGVkTWVudSA9IGl0ZW0ubGFiZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1lbnUgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdXJsLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwICYmIHRoaXMuc2VsZWN0ZWRNZW51LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Q2hpbGQgPSB0aGlzLnNlbGVjdGVkTWVudS5jaGlsZHJlbi5maW5kKHMgPT4gcy5zdGF0ZSA9PSBkYXRhW2RhdGEubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2hpbGQuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNlbGVjdGVkTWVudSA9IGN1cnJlbnRDaGlsZC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==