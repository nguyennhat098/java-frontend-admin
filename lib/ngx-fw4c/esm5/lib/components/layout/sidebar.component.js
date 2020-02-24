/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/layout/sidebar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DefaultLayoutService } from './layout.service';
import { MenuService } from '../shared/services/menu.service';
import { ActionService } from '../shared/services/action.service';
import { AggregatorService } from '../shared/services/aggregator.service';
var DefaultSidebarComponent = /** @class */ (function () {
    function DefaultSidebarComponent(workspaceLayoutService, route, router, menuService, actionService, aggregatorService) {
        this.workspaceLayoutService = workspaceLayoutService;
        this.route = route;
        this.router = router;
        this.menuService = menuService;
        this.actionService = actionService;
        this.aggregatorService = aggregatorService;
        this.menuTabs = [];
        this.change = new EventEmitter();
        this.menuItems = [];
        this.collapsedItems = [];
        this.isSupplier = false;
        this.tabs = [];
        this.isPageLoad = false;
    }
    /**
     * @return {?}
     */
    DefaultSidebarComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.actionService.executeAsync((/**
         * @return {?}
         */
        function () {
            _this.menuService.init(_this.menuTabs, (/**
             * @return {?}
             */
            function () {
                _this.tabs = _this.menuService.getTabs();
                _this.currentUrl = _this.tabs[0].menu;
                _this.menuItems = _this.menuService.loadFirstTabItems(_this.currentUrl);
                _this.actionService.executeAsync((/**
                 * @return {?}
                 */
                function () {
                    _this.isCollapsedSideBar = 'no-block';
                }));
                _this.actionService.executeAsync((/**
                 * @return {?}
                 */
                function () {
                    _this.selectMenu();
                }));
                _this.router.events.subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    if (event instanceof NavigationEnd) {
                        _this.actionService.executeAsync((/**
                         * @return {?}
                         */
                        function () {
                            _this.selectMenu();
                        }));
                    }
                }));
            }), _this.set);
        }));
    };
    /**
     * @return {?}
     */
    DefaultSidebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.navigateTo) {
            this.navigateTo = (/**
             * @param {?} menu
             * @param {?} router
             * @return {?}
             */
            function (menu, router) {
                router.navigate(['/', menu, 'dashboard']);
            });
        }
        this.isMobile = this.actionService.isMobile();
        if (this.isMobile) {
            if (this.workspaceLayoutService.verticalEffect == 'overlay') {
                this.workspaceLayoutService.verticalEffect = 'shrink';
            }
            else {
                this.workspaceLayoutService.verticalEffect = 'overlay';
            }
        }
    };
    /**
     * @return {?}
     */
    DefaultSidebarComponent.prototype.toggleMenu = /**
     * @return {?}
     */
    function () {
        if (this.isMobile && this.menuType == 'LEFT') {
            if (this.workspaceLayoutService.verticalEffect == 'overlay') {
                this.workspaceLayoutService.verticalEffect = 'shrink';
            }
            else {
                this.workspaceLayoutService.verticalEffect = 'overlay';
            }
        }
    };
    /**
     * @return {?}
     */
    DefaultSidebarComponent.prototype.toggleOpenedSidebar = /**
     * @return {?}
     */
    function () {
        this.isCollapsedSideBar = this.isCollapsedSideBar === 'yes-block' ? 'no-block' : 'yes-block';
    };
    /**
     * @param {?} menu
     * @return {?}
     */
    DefaultSidebarComponent.prototype.loadMenu = /**
     * @param {?} menu
     * @return {?}
     */
    function (menu) {
        this.menuItems = this.menuService.loadMenuItems(menu);
        this.currentUrl = menu.toLocaleLowerCase();
        this.navigateTo(this.currentUrl, this.router);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    DefaultSidebarComponent.prototype.selectItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        this.actionService.changeItem(item, this.menuTabs, (/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            _this.change.emit(items);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    DefaultSidebarComponent.prototype.selectMenu = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var url = this.router.url;
        /** @type {?} */
        var menuItems = document.querySelectorAll('.pcoded-navigatio-lavel');
        if (menuItems && menuItems.length > 0) {
            menuItems.forEach((/**
             * @param {?} menu
             * @return {?}
             */
            function (menu) {
                menu.classList.remove('active');
                /** @type {?} */
                var children = document.querySelectorAll("." + menu.text);
                if (children && children.length > 0) {
                    children.forEach((/**
                     * @param {?} child
                     * @return {?}
                     */
                    function (child) {
                        child.classList.remove('active');
                    }));
                }
                if (menu.href && menu.href.indexOf(url) > -1) {
                    menu.classList.add('active');
                }
                else {
                    if (children && children.length > 0) {
                        children.forEach((/**
                         * @param {?} child
                         * @return {?}
                         */
                        function (child) {
                            if (child.href && child.href.indexOf(url) > -1) {
                                child.classList.add('active');
                                menu.classList.add('active');
                            }
                        }));
                    }
                }
            }));
        }
    };
    DefaultSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'default-sidebar',
                    template: "<nav id=\"main_navbar\" class=\"pcoded-navbar workspace-side-bar\"\r\n    (clickOutside)=\"workspaceLayoutService.onClickedOutside($event)\" [exclude]=\"'#mobile-collapse'\"\r\n    [attr.pcoded-header-position]=\"workspaceLayoutService.pcodedHeaderPosition\"\r\n    [attr.navbar-theme]=\"workspaceLayoutService.navBarTheme\"\r\n    [attr.active-item-theme]=\"workspaceLayoutService.activeItemTheme\" sub-item-theme=\"theme2\" active-item-style=\"style0\"\r\n    [attr.pcoded-navbar-position]=\"workspaceLayoutService.pcodedSidebarPosition\">\r\n    <div class=\"pcoded-inner-navbar main-menu o-hidden pcoded-inner-navbar-workspace\" cAccordion>\r\n        <div width=\"100%\" height=\"calc(100% - 40px)\" size=\"4px\" color=\"#fff\" opacity=\"0.3\" allowPageScroll=\"false\">\r\n            <ul class=\"nav\">\r\n                <li class=\"nav-item\" *ngFor=\"let item of tabs; index as i\"\r\n                    [ngClass]=\"this.currentUrl.toLowerCase() === item.menu.toLowerCase() ? 'active-menu':''\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0);\" (click)=\"loadMenu(item.menu)\">\r\n                        <span>{{item.subName}}</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <div (mouseover)=\"clicked = false\" *ngFor=\"let asideItems of menuItems ; index as i\"\r\n                [ngStyle]=\"{'margin-top': i == 0 ? '1rem': '0'}\" class=\"d-color pcoded-left-item--wrapper\">\r\n                <a class=\"pcoded-navigatio-lavel d-flex align-items-center\" menu-title-theme=\"theme5\"\r\n                    href=\"javascript:void(0)\"\r\n                    routerLink=\"/{{asideItems?.children[0]?.mainState}}/{{asideItems?.children[0]?.state}}\"\r\n                    (click)=\"selectItem(asideItems?.children[0])\" *ngIf=\"asideItems.label || menuItems.length > 0\">\r\n                    <span class=\"pcoded-micon\" title=\"{{asideItems.label}}\">\r\n                        <i class=\"{{ asideItems.icon }}\"></i>\r\n                    </span>\r\n                    <span>{{asideItems.label}}</span>\r\n                    <i [hidden]=\"asideItems.children.length == 1\" class=\"show-sub icofont-thin-right icofont\"></i>\r\n                </a>\r\n                <ul *ngIf=\"asideItems.children.length > 1\" (mouseup)=\"clicked = true\" [hidden]=\"clicked\"\r\n                    class=\"pcoded-item pcoded-left-item\" item-border=\"true\" item-border-style=\"none\"\r\n                    subitem-border=\"true\" katanaAccordionLink>\r\n                    <ng-template ngFor let-asideItem [ngForOf]=\"asideItems.children\">\r\n                        <li [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'link'\" katanaAccordionLink\r\n                            group=\"{{asideItem.state}}\" class=\"pcoded-left-item-child\" (click)=\"toggleMenu()\">\r\n                            <a class=\"{{asideItems.label}}\" routerLink=\"/{{asideItem.mainState}}/{{asideItem.state}}\"\r\n                                target=\"{{asideItem.target ? '_blank' : '_self'}}\" katanaAccordionToggle\r\n                                *ngIf=\"asideItem.mainState; else mainContent\" (click)=\"selectItem(asideItem)\">\r\n                                <span class=\"pcoded-micon\">\r\n                                    <i class=\"{{ asideItem.icon }}\"></i>\r\n                                    <b>{{ asideItem.shortLabel }}</b>\r\n                                </span>\r\n                                <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\r\n                            </a>\r\n                            <ng-template #mainContent>\r\n                                <a [routerLink]=\"[asideItem.state]\" target=\"{{asideItem.target ? '_blank' : '_self'}}\"\r\n                                    cAccordionToggle>\r\n                                    <span class=\"pcoded-micon\">\r\n                                        <i class=\"{{ asideItem.icon }}\"></i>\r\n                                        <b>{{ asideItem.shortLabel }}</b>\r\n                                    </span>\r\n                                    <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\r\n                                    <span *ngFor=\"let asideBadge of asideItem.badge\"\r\n                                        class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\r\n                                    <span class=\"pcoded-mcaret\"></span>\r\n                                </a>\r\n                            </ng-template>\r\n                        </li>\r\n                    </ng-template>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div class=\"back-drop\" (click)=\"toggleMenu()\"></div>",
                    styles: [".back-drop{display:none}@media (max-width:1024px){.back-drop{background:#000;opacity:.2;position:fixed;width:100%;height:100%;z-index:9}}"]
                }] }
    ];
    /** @nocollapse */
    DefaultSidebarComponent.ctorParameters = function () { return [
        { type: DefaultLayoutService },
        { type: ActivatedRoute },
        { type: Router },
        { type: MenuService },
        { type: ActionService },
        { type: AggregatorService }
    ]; };
    DefaultSidebarComponent.propDecorators = {
        menuTabs: [{ type: Input }],
        navigateTo: [{ type: Input }],
        set: [{ type: Input }],
        menuType: [{ type: Input }],
        setActive: [{ type: Input }],
        change: [{ type: Output }]
    };
    return DefaultSidebarComponent;
}());
export { DefaultSidebarComponent };
if (false) {
    /** @type {?} */
    DefaultSidebarComponent.prototype.menuTabs;
    /** @type {?} */
    DefaultSidebarComponent.prototype.navigateTo;
    /** @type {?} */
    DefaultSidebarComponent.prototype.set;
    /** @type {?} */
    DefaultSidebarComponent.prototype.menuType;
    /** @type {?} */
    DefaultSidebarComponent.prototype.setActive;
    /** @type {?} */
    DefaultSidebarComponent.prototype.change;
    /** @type {?} */
    DefaultSidebarComponent.prototype.currentUrl;
    /** @type {?} */
    DefaultSidebarComponent.prototype.menuItems;
    /** @type {?} */
    DefaultSidebarComponent.prototype.isCollapsedSideBar;
    /** @type {?} */
    DefaultSidebarComponent.prototype.collapsedItems;
    /** @type {?} */
    DefaultSidebarComponent.prototype.isSupplier;
    /** @type {?} */
    DefaultSidebarComponent.prototype.tabs;
    /** @type {?} */
    DefaultSidebarComponent.prototype.carouselTile;
    /** @type {?} */
    DefaultSidebarComponent.prototype.isPageLoad;
    /** @type {?} */
    DefaultSidebarComponent.prototype.isMobile;
    /** @type {?} */
    DefaultSidebarComponent.prototype.clicked;
    /** @type {?} */
    DefaultSidebarComponent.prototype.workspaceLayoutService;
    /**
     * @type {?}
     * @protected
     */
    DefaultSidebarComponent.prototype.route;
    /**
     * @type {?}
     * @protected
     */
    DefaultSidebarComponent.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    DefaultSidebarComponent.prototype.menuService;
    /**
     * @type {?}
     * @protected
     */
    DefaultSidebarComponent.prototype.actionService;
    /**
     * @type {?}
     * @protected
     */
    DefaultSidebarComponent.prototype.aggregatorService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xheW91dC9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUUxRTtJQXdCRSxpQ0FDUyxzQkFBNEMsRUFDekMsS0FBcUIsRUFDckIsTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLGFBQTRCLEVBQzVCLGlCQUFvQztRQUx2QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXNCO1FBQ3pDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBdkJoQyxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBS3hCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUVwRCxjQUFTLEdBQTRCLEVBQUUsQ0FBQztRQUV4QyxtQkFBYyxHQUE0QixFQUFFLENBQUM7UUFDN0MsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixTQUFJLEdBQXNELEVBQUUsQ0FBQztRQUU3RCxl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SUFDMUIsdUNBQW9FOztJQUNwRSwrQ0FBeUI7O0lBQ3pCLDZDQUFtQzs7SUFDbkMsMkNBQXlCOztJQUN6QiwwQ0FBd0I7O0lBR3RCLHlEQUFtRDs7Ozs7SUFDbkQsd0NBQStCOzs7OztJQUMvQix5Q0FBd0I7Ozs7O0lBQ3hCLDhDQUFrQzs7Ozs7SUFDbEMsZ0RBQXNDOzs7OztJQUN0QyxvREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRGVmYXVsdExheW91dFNlcnZpY2UgfSBmcm9tICcuL2xheW91dC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvbWVudS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXh0ZW5kZWRNYWluTWVudUdyb3VwLCBNZW51VGFiLCBNZW51SXRlbSwgQnJlYWRjcnVtYiB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbHMvYmFzZS5tb2RlbCc7XHJcbmltcG9ydCB7IEFjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYWN0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBZ2dyZWdhdG9yU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hZ2dyZWdhdG9yLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkZWZhdWx0LXNpZGViYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlYmFyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0U2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBwdWJsaWMgbWVudVRhYnM6IE1lbnVUYWJbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBuYXZpZ2F0ZVRvOiAobWVudTogc3RyaW5nLCByb3V0ZXI6IFJvdXRlcikgPT4gdm9pZDtcclxuICBASW5wdXQoKSBwdWJsaWMgc2V0OiAocm9sZTogc3RyaW5nKSA9PiBNZW51SXRlbTtcclxuICBASW5wdXQoKSBwdWJsaWMgbWVudVR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgc2V0QWN0aXZlOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxCcmVhZGNydW1iW10+KCk7XHJcbiAgcHVibGljIGN1cnJlbnRVcmw6IHN0cmluZztcclxuICBwdWJsaWMgbWVudUl0ZW1zOiBFeHRlbmRlZE1haW5NZW51R3JvdXBbXSA9IFtdO1xyXG4gIHB1YmxpYyBpc0NvbGxhcHNlZFNpZGVCYXI6IHN0cmluZztcclxuICBwdWJsaWMgY29sbGFwc2VkSXRlbXM6IEV4dGVuZGVkTWFpbk1lbnVHcm91cFtdID0gW107XHJcbiAgcHVibGljIGlzU3VwcGxpZXIgPSBmYWxzZTtcclxuICBwdWJsaWMgdGFiczogeyBuYW1lOiBzdHJpbmcsIG1lbnU6IHN0cmluZywgc3ViTmFtZTogc3RyaW5nIH1bXSA9IFtdO1xyXG4gIHB1YmxpYyBjYXJvdXNlbFRpbGU6IGFueTtcclxuICBwdWJsaWMgaXNQYWdlTG9hZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc01vYmlsZTogYm9vbGVhbjtcclxuICBwdWJsaWMgY2xpY2tlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgd29ya3NwYWNlTGF5b3V0U2VydmljZTogRGVmYXVsdExheW91dFNlcnZpY2UsXHJcbiAgICBwcm90ZWN0ZWQgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJvdGVjdGVkIG1lbnVTZXJ2aWNlOiBNZW51U2VydmljZSxcclxuICAgIHByb3RlY3RlZCBhY3Rpb25TZXJ2aWNlOiBBY3Rpb25TZXJ2aWNlLFxyXG4gICAgcHJvdGVjdGVkIGFnZ3JlZ2F0b3JTZXJ2aWNlOiBBZ2dyZWdhdG9yU2VydmljZVxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGlvblNlcnZpY2UuZXhlY3V0ZUFzeW5jKCgpID0+IHtcclxuICAgICAgdGhpcy5tZW51U2VydmljZS5pbml0KHRoaXMubWVudVRhYnMsICgpID0+IHtcclxuICAgICAgICB0aGlzLnRhYnMgPSB0aGlzLm1lbnVTZXJ2aWNlLmdldFRhYnMoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRVcmwgPSB0aGlzLnRhYnNbMF0ubWVudTtcclxuICAgICAgICB0aGlzLm1lbnVJdGVtcyA9IHRoaXMubWVudVNlcnZpY2UubG9hZEZpcnN0VGFiSXRlbXModGhpcy5jdXJyZW50VXJsKTtcclxuICAgICAgICB0aGlzLmFjdGlvblNlcnZpY2UuZXhlY3V0ZUFzeW5jKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNDb2xsYXBzZWRTaWRlQmFyID0gJ25vLWJsb2NrJztcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFjdGlvblNlcnZpY2UuZXhlY3V0ZUFzeW5jKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0TWVudSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uU2VydmljZS5leGVjdXRlQXN5bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0TWVudSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSwgdGhpcy5zZXQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uYXZpZ2F0ZVRvKSB7XHJcbiAgICAgIHRoaXMubmF2aWdhdGVUbyA9IChtZW51OiBzdHJpbmcsIHJvdXRlcjogUm91dGVyKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLm5hdmlnYXRlKFsnLycsIG1lbnUsICdkYXNoYm9hcmQnXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaXNNb2JpbGUgPSB0aGlzLmFjdGlvblNlcnZpY2UuaXNNb2JpbGUoKTtcclxuICAgIGlmICh0aGlzLmlzTW9iaWxlKSB7XHJcbiAgICAgIGlmICh0aGlzLndvcmtzcGFjZUxheW91dFNlcnZpY2UudmVydGljYWxFZmZlY3QgPT0gJ292ZXJsYXknKSB7XHJcbiAgICAgICAgdGhpcy53b3Jrc3BhY2VMYXlvdXRTZXJ2aWNlLnZlcnRpY2FsRWZmZWN0ID0gJ3Nocmluayc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy53b3Jrc3BhY2VMYXlvdXRTZXJ2aWNlLnZlcnRpY2FsRWZmZWN0ID0gJ292ZXJsYXknO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlTWVudSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzTW9iaWxlICYmIHRoaXMubWVudVR5cGUgPT0gJ0xFRlQnKSB7XHJcbiAgICAgIGlmICh0aGlzLndvcmtzcGFjZUxheW91dFNlcnZpY2UudmVydGljYWxFZmZlY3QgPT0gJ292ZXJsYXknKSB7XHJcbiAgICAgICAgdGhpcy53b3Jrc3BhY2VMYXlvdXRTZXJ2aWNlLnZlcnRpY2FsRWZmZWN0ID0gJ3Nocmluayc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy53b3Jrc3BhY2VMYXlvdXRTZXJ2aWNlLnZlcnRpY2FsRWZmZWN0ID0gJ292ZXJsYXknO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlT3BlbmVkU2lkZWJhcigpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNDb2xsYXBzZWRTaWRlQmFyID0gdGhpcy5pc0NvbGxhcHNlZFNpZGVCYXIgPT09ICd5ZXMtYmxvY2snID8gJ25vLWJsb2NrJyA6ICd5ZXMtYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWRNZW51KG1lbnU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5tZW51SXRlbXMgPSB0aGlzLm1lbnVTZXJ2aWNlLmxvYWRNZW51SXRlbXMobWVudSk7XHJcbiAgICB0aGlzLmN1cnJlbnRVcmwgPSBtZW51LnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICB0aGlzLm5hdmlnYXRlVG8odGhpcy5jdXJyZW50VXJsLCB0aGlzLnJvdXRlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VsZWN0SXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aW9uU2VydmljZS5jaGFuZ2VJdGVtKGl0ZW0sIHRoaXMubWVudVRhYnMsIChpdGVtczogQnJlYWRjcnVtYltdKSA9PiB7XHJcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaXRlbXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbGVjdE1lbnUoKTogdm9pZCB7XHJcbiAgICB2YXIgdXJsID0gdGhpcy5yb3V0ZXIudXJsO1xyXG4gICAgdmFyIG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wY29kZWQtbmF2aWdhdGlvLWxhdmVsJyk7XHJcbiAgICBpZiAobWVudUl0ZW1zICYmIG1lbnVJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG1lbnVJdGVtcy5mb3JFYWNoKChtZW51OiBhbnkpID0+IHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke21lbnUudGV4dH1gKTtcclxuICAgICAgICBpZiAoY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lbnUuaHJlZiAmJiBtZW51LmhyZWYuaW5kZXhPZih1cmwpID4gLTEpIHtcclxuICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoY2hpbGQuaHJlZiAmJiBjaGlsZC5ocmVmLmluZGV4T2YodXJsKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=