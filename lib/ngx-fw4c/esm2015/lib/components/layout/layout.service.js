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
export class DefaultLayoutService {
    /**
     * @param {?} router
     * @param {?} _aggregatorService
     */
    constructor(router, _aggregatorService) {
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
        const scrollHeight = window.screen.height - 150;
        this.innerHeight = scrollHeight + 'px';
        this.windowWidth = window.innerWidth;
        this.setMenuAttributes(this.windowWidth);
        /** @type {?} */
        const navigationSubscription = this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof NavigationEnd))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.toolbarItems = [];
        }));
        this.subscriptions.add(navigationSubscription);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.innerHeight = event.target.innerHeight + 'px';
        this.windowWidth = event.target.innerWidth;
        /** @type {?} */
        let reSizeFlag = true;
        if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
            reSizeFlag = false;
        }
        else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
            reSizeFlag = false;
        }
        if (reSizeFlag) {
            this.setMenuAttributes(this.windowWidth);
        }
    }
    /**
     * @param {?} windowWidth
     * @return {?}
     */
    setMenuAttributes(windowWidth) {
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
    }
    /**
     * @return {?}
     */
    toggleOpened() {
        if (this.windowWidth < 768) {
            this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
        }
        this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClickedOutside(e) {
        if (this.windowWidth < 768 && this.toggleOn && this.verticalNavType !== 'offcanvas') {
            this.toggleOn = true;
            this.verticalNavType = 'offcanvas';
        }
    }
    /**
     * @return {?}
     */
    onMobileMenu() {
        this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
    }
    /**
     * @return {?}
     */
    toggleChat() {
        this.chatToggle = this.chatToggle === 'out' ? 'in' : 'out';
        this.chatToggleInverse = this.chatToggleInverse === 'out' ? 'in' : 'out';
        this.chatInnerToggle = 'off';
        this.chatInnerToggleInverse = 'off';
    }
    /**
     * @return {?}
     */
    toggleChatInner() {
        this.chatInnerToggle = this.chatInnerToggle === 'off' ? 'on' : 'off';
        this.chatInnerToggleInverse = this.chatInnerToggleInverse === 'off' ? 'on' : 'off';
    }
    /**
     * @return {?}
     */
    setSidebarPosition() {
        this.isSidebarChecked = !this.isSidebarChecked;
        this.pcodedSidebarPosition = this.isSidebarChecked === true ? 'fixed' : 'absolute';
    }
    /**
     * @return {?}
     */
    setHeaderPosition() {
        this.isHeaderChecked = !this.isHeaderChecked;
        this.pcodedHeaderPosition = this.isHeaderChecked === true ? 'fixed' : 'relative';
        this.headerFixedMargin = this.isHeaderChecked === true ? '50px' : '';
    }
    /**
     * @param {?} pattern
     * @return {?}
     */
    setBackgroundPattern(pattern) {
        document.querySelector('body').setAttribute('themebg-pattern', pattern);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    setLayoutType(type) {
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
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setNavBarTheme(theme) {
        if (theme === 'themelight1') {
            this.navBarTheme = 'themelight1';
        }
        else {
            this.navBarTheme = 'theme1';
        }
    }
    /**
     * @param {?} actions
     * @return {?}
     */
    initToolbarItems(actions) {
        this.toolbarItems = actions.map((/**
         * @param {?} action
         * @return {?}
         */
        action => {
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
    }
    /**
     * @return {?}
     */
    getToolbarItems() {
        return this.toolbarItems;
    }
    /**
     * @return {?}
     */
    hasToolbarItems() {
        if (!this.toolbarItems)
            return false;
        return this.toolbarItems.length > 0;
    }
    /**
     * @param {?} image
     * @return {?}
     */
    showImage(image) {
        this._aggregatorService.publish(KeyConst.ViewImage, image);
    }
}
DefaultLayoutService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
DefaultLayoutService.ctorParameters = () => [
    { type: Router },
    { type: AggregatorService }
];
/** @nocollapse */ DefaultLayoutService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DefaultLayoutService_Factory() { return new DefaultLayoutService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.AggregatorService)); }, token: DefaultLayoutService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRy9DLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBc0M3QixZQUNZLE1BQWMsRUFDZCxrQkFBcUM7UUFEckMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFMekMsa0JBQWEsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRCxpQkFBWSxHQUF1QixFQUFFLENBQUM7UUFNMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQztRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxPQUFPLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztRQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDOztjQUN0QixZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRztRQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7O2NBRW5DLHNCQUFzQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLFlBQVksYUFBYSxFQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEgsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFDO1FBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFTSxRQUFRLENBQUMsS0FBSztRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDOztZQUN2QyxVQUFVLEdBQUcsSUFBSTtRQUNyQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFO1lBQ3JGLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDdEI7YUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFO1lBQy9ELFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDdEI7UUFDRCxJQUFJLFVBQVUsRUFBRTtZQUNaLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUM7SUFDTCxDQUFDOzs7OztJQUVNLGlCQUFpQixDQUFDLFdBQVc7UUFDaEMsSUFBSSxXQUFXLElBQUksR0FBRyxJQUFJLFdBQVcsSUFBSSxJQUFJLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUM7WUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7U0FDaEM7YUFBTSxJQUFJLFdBQVcsR0FBRyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUM7WUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7U0FDbkM7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDO1lBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQzs7OztJQUVNLFlBQVk7UUFDZixJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUMvRTtRQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQzFGLENBQUM7Ozs7O0lBRU0sZ0JBQWdCLENBQUMsQ0FBUTtRQUM1QixJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxXQUFXLEVBQUU7WUFDakYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUM7U0FDdEM7SUFDTCxDQUFDOzs7O0lBRU0sWUFBWTtRQUNmLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUMvRixDQUFDOzs7O0lBRU0sVUFBVTtRQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN6RSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFTSxlQUFlO1FBQ2xCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN2RixDQUFDOzs7O0lBRU0sa0JBQWtCO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDdkYsQ0FBQzs7OztJQUVNLGlCQUFpQjtRQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM3QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ2pGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsZUFBZSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDekUsQ0FBQzs7Ozs7SUFFTSxvQkFBb0IsQ0FBQyxPQUFPO1FBQy9CLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7O0lBRU0sYUFBYSxDQUFDLElBQVk7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4RDthQUFNO1lBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7WUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7WUFDMUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNEO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxjQUFjLENBQUMsS0FBYTtRQUMvQixJQUFJLEtBQUssS0FBSyxhQUFhLEVBQUU7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7U0FDcEM7YUFBTTtZQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxnQkFBZ0IsQ0FBQyxPQUFpQjtRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckMsUUFBUSxNQUFNLEVBQUU7Z0JBQ1osS0FBSyxhQUFhLENBQUMsSUFBSTtvQkFDbkIsT0FBTyxJQUFJLGdCQUFnQixDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3BHLEtBQUssYUFBYSxDQUFDLE9BQU87b0JBQ3RCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDekYsS0FBSyxhQUFhLENBQUMsTUFBTTtvQkFDckIsT0FBTyxJQUFJLGdCQUFnQixDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztnQkFDdEUsS0FBSyxhQUFhLENBQUMsSUFBSTtvQkFDbkIsT0FBTyxJQUFJLGdCQUFnQixDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDdkUsS0FBSyxhQUFhLENBQUMsaUJBQWlCO29CQUNoQyxPQUFPLElBQUksZ0JBQWdCLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDO2dCQUMxRSxLQUFLLGFBQWEsQ0FBQyxVQUFVO29CQUN6QixPQUFPLElBQUksZ0JBQWdCLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDN0YsS0FBSyxhQUFhLENBQUMsS0FBSztvQkFDcEIsT0FBTyxJQUFJLGdCQUFnQixDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQzthQUN6RTtRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVNLGVBQWU7UUFDbEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFTSxlQUFlO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRU0sU0FBUyxDQUFDLEtBQVU7UUFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9ELENBQUM7OztZQXpOSixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBUnpCLE1BQU07WUFLTixpQkFBaUI7Ozs7O0lBS3RCLHVDQUF1Qjs7SUFDdkIsMkNBQTJCOztJQUMzQiwwQ0FBMEI7O0lBQzFCLGlEQUFpQzs7SUFDakMsOENBQThCOztJQUM5QiwwQ0FBMEI7O0lBQzFCLHNDQUFzQjs7SUFDdEIsd0NBQXdCOztJQUN4QiwrQ0FBK0I7O0lBQy9CLDhDQUE4Qjs7SUFDOUIsK0NBQStCOztJQUMvQixvREFBb0M7O0lBQ3BDLHFEQUFxQzs7SUFDckMsMkNBQTJCOztJQUMzQix5Q0FBeUI7O0lBQ3pCLDJDQUEyQjs7SUFDM0IsMkNBQTJCOztJQUMzQix3Q0FBeUI7O0lBQ3pCLGlEQUFpQzs7SUFDakMsMkNBQTJCOztJQUMzQiwrQ0FBK0I7O0lBQy9CLGlEQUFpQzs7SUFDakMsMENBQTBCOztJQUMxQixpREFBaUM7O0lBQ2pDLCtDQUErQjs7SUFDL0Isc0RBQXNDOztJQUN0Qyw4Q0FBOEI7O0lBQzlCLDBDQUEyQjs7SUFDM0IsK0NBQStCOztJQUMvQiw2Q0FBOEI7O0lBQzlCLDJDQUEyQjs7SUFDM0IsNENBQTRCOztJQUM1QixnREFBaUM7O0lBQ2pDLCtDQUFnQzs7Ozs7SUFDaEMsNkNBQXlEOzs7OztJQUN6RCw0Q0FBOEM7Ozs7O0lBRzFDLHNDQUFzQjs7Ozs7SUFDdEIsa0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBCdXR0b25EZWZpbml0aW9uIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy9iYXNlLm1vZGVsJztcclxuaW1wb3J0IHsgVG9vbGJhckFjdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9lbnVtcy9iYXNlLmVudW0nO1xyXG5pbXBvcnQgeyBBZ2dyZWdhdG9yU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hZ2dyZWdhdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBLZXlDb25zdCB9IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIERlZmF1bHRMYXlvdXRTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBuYXZUeXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdGhlbWVMYXlvdXQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBsYXlvdXRUeXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdmVydGljYWxQbGFjZW1lbnQ6IHN0cmluZztcclxuICAgIHB1YmxpYyB2ZXJ0aWNhbExheW91dDogc3RyaW5nO1xyXG4gICAgcHVibGljIGRldmljZVR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBpbWdTcmM6IHN0cmluZztcclxuICAgIHB1YmxpYyBpbWdUaXRsZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHZlcnRpY2FsTmF2VHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHZlcnRpY2FsRWZmZWN0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdk5hdmlnYXRpb25WaWV3OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGNvZGVkSGVhZGVyUG9zaXRpb246IHN0cmluZztcclxuICAgIHB1YmxpYyBwY29kZWRTaWRlYmFyUG9zaXRpb246IHN0cmluZztcclxuICAgIHB1YmxpYyBoZWFkZXJUaGVtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGxvZ29UaGVtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGlubmVySGVpZ2h0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgd2luZG93V2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0b2dnbGVPbjogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBoZWFkZXJGaXhlZE1hcmdpbjogc3RyaW5nO1xyXG4gICAgcHVibGljIG5hdkJhclRoZW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYWN0aXZlSXRlbVRoZW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaXNDb2xsYXBzZWRNb2JpbGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBjaGF0VG9nZ2xlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2hhdFRvZ2dsZUludmVyc2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBjaGF0SW5uZXJUb2dnbGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBjaGF0SW5uZXJUb2dnbGVJbnZlcnNlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVudVRpdGxlVGhlbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBpdGVtQm9yZGVyOiBib29sZWFuO1xyXG4gICAgcHVibGljIGl0ZW1Cb3JkZXJTdHlsZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHN1Ykl0ZW1Cb3JkZXI6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc3ViSXRlbUljb246IHN0cmluZztcclxuICAgIHB1YmxpYyBkcm9wRG93bkljb246IHN0cmluZztcclxuICAgIHB1YmxpYyBpc1NpZGViYXJDaGVja2VkOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzSGVhZGVyQ2hlY2tlZDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG4gICAgcHJpdmF0ZSB0b29sYmFySXRlbXM6IEJ1dHRvbkRlZmluaXRpb25bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWdncmVnYXRvclNlcnZpY2U6IEFnZ3JlZ2F0b3JTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLm5hdlR5cGUgPSAnc3Q1JztcclxuICAgICAgICB0aGlzLnRoZW1lTGF5b3V0ID0gJ3ZlcnRpY2FsJztcclxuICAgICAgICB0aGlzLnZOYXZpZ2F0aW9uVmlldyA9ICd2aWV3MSc7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbFBsYWNlbWVudCA9ICdsZWZ0JztcclxuICAgICAgICB0aGlzLnZlcnRpY2FsTGF5b3V0ID0gJ3dpZGUnO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlVHlwZSA9ICdkZXNrdG9wJztcclxuICAgICAgICB0aGlzLnZlcnRpY2FsTmF2VHlwZSA9ICdvZmZjYW52YXMnO1xyXG4gICAgICAgIHRoaXMudmVydGljYWxFZmZlY3QgPSAnc2hyaW5rJztcclxuICAgICAgICB0aGlzLnBjb2RlZEhlYWRlclBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICB0aGlzLnBjb2RlZFNpZGViYXJQb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJUaGVtZSA9ICd0aGVtZTEnO1xyXG4gICAgICAgIHRoaXMubG9nb1RoZW1lID0gJ3RoZW1lMSc7XHJcbiAgICAgICAgdGhpcy50b2dnbGVPbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJGaXhlZE1hcmdpbiA9ICc1MHB4JztcclxuICAgICAgICB0aGlzLm5hdkJhclRoZW1lID0gJ3RoZW1lbGlnaHQxJztcclxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW1UaGVtZSA9ICd0aGVtZTQnO1xyXG4gICAgICAgIHRoaXMuaXNDb2xsYXBzZWRNb2JpbGUgPSAnbm8tYmxvY2snO1xyXG4gICAgICAgIHRoaXMuY2hhdFRvZ2dsZSA9ICdvdXQnO1xyXG4gICAgICAgIHRoaXMuY2hhdFRvZ2dsZUludmVyc2UgPSAnaW4nO1xyXG4gICAgICAgIHRoaXMuY2hhdElubmVyVG9nZ2xlID0gJ29mZic7XHJcbiAgICAgICAgdGhpcy5jaGF0SW5uZXJUb2dnbGVJbnZlcnNlID0gJ29uJztcclxuICAgICAgICB0aGlzLm1lbnVUaXRsZVRoZW1lID0gJ3RoZW1lNSc7XHJcbiAgICAgICAgdGhpcy5pdGVtQm9yZGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLml0ZW1Cb3JkZXJTdHlsZSA9ICdub25lJztcclxuICAgICAgICB0aGlzLnN1Ykl0ZW1Cb3JkZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3ViSXRlbUljb24gPSAnc3R5bGU2JztcclxuICAgICAgICB0aGlzLmRyb3BEb3duSWNvbiA9ICdzdHlsZTEnO1xyXG4gICAgICAgIHRoaXMuaXNTaWRlYmFyQ2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc0hlYWRlckNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHdpbmRvdy5zY3JlZW4uaGVpZ2h0IC0gMTUwO1xyXG4gICAgICAgIHRoaXMuaW5uZXJIZWlnaHQgPSBzY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLnNldE1lbnVBdHRyaWJ1dGVzKHRoaXMud2luZG93V2lkdGgpO1xyXG5cclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uU3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhckl0ZW1zID0gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChuYXZpZ2F0aW9uU3Vic2NyaXB0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25SZXNpemUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmlubmVySGVpZ2h0ID0gZXZlbnQudGFyZ2V0LmlubmVySGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB0aGlzLndpbmRvd1dpZHRoID0gZXZlbnQudGFyZ2V0LmlubmVyV2lkdGg7XHJcbiAgICAgICAgbGV0IHJlU2l6ZUZsYWcgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmRldmljZVR5cGUgPT09ICd0YWJsZXQnICYmIHRoaXMud2luZG93V2lkdGggPj0gNzY4ICYmIHRoaXMud2luZG93V2lkdGggPD0gMTAyNCkge1xyXG4gICAgICAgICAgICByZVNpemVGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRldmljZVR5cGUgPT09ICdtb2JpbGUnICYmIHRoaXMud2luZG93V2lkdGggPCA3NjgpIHtcclxuICAgICAgICAgICAgcmVTaXplRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVTaXplRmxhZykge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1lbnVBdHRyaWJ1dGVzKHRoaXMud2luZG93V2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TWVudUF0dHJpYnV0ZXMod2luZG93V2lkdGgpIHtcclxuICAgICAgICBpZiAod2luZG93V2lkdGggPj0gNzY4ICYmIHdpbmRvd1dpZHRoIDw9IDEwMjQpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2VUeXBlID0gJ3RhYmxldCc7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxOYXZUeXBlID0gJ29mZmNhbnZhcyc7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxFZmZlY3QgPSAncHVzaCc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3dXaWR0aCA8IDc2OCkge1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZVR5cGUgPSAnbW9iaWxlJztcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbE5hdlR5cGUgPSAnb2ZmY2FudmFzJztcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbEVmZmVjdCA9ICdvdmVybGF5JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZVR5cGUgPSAnZGVza3RvcCc7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxOYXZUeXBlID0gJ29mZmNhbnZhcyc7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxFZmZlY3QgPSAnc2hyaW5rJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZU9wZW5lZCgpIHtcclxuICAgICAgICBpZiAodGhpcy53aW5kb3dXaWR0aCA8IDc2OCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZU9uID0gdGhpcy52ZXJ0aWNhbE5hdlR5cGUgPT09ICdvZmZjYW52YXMnID8gdHJ1ZSA6IHRoaXMudG9nZ2xlT247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmVydGljYWxOYXZUeXBlID0gdGhpcy52ZXJ0aWNhbE5hdlR5cGUgPT09ICdleHBhbmRlZCcgPyAnb2ZmY2FudmFzJyA6ICdleHBhbmRlZCc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ2xpY2tlZE91dHNpZGUoZTogRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy53aW5kb3dXaWR0aCA8IDc2OCAmJiB0aGlzLnRvZ2dsZU9uICYmIHRoaXMudmVydGljYWxOYXZUeXBlICE9PSAnb2ZmY2FudmFzJykge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZU9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbE5hdlR5cGUgPSAnb2ZmY2FudmFzJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTW9iaWxlTWVudSgpIHtcclxuICAgICAgICB0aGlzLmlzQ29sbGFwc2VkTW9iaWxlID0gdGhpcy5pc0NvbGxhcHNlZE1vYmlsZSA9PT0gJ3llcy1ibG9jaycgPyAnbm8tYmxvY2snIDogJ3llcy1ibG9jayc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZUNoYXQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGF0VG9nZ2xlID0gdGhpcy5jaGF0VG9nZ2xlID09PSAnb3V0JyA/ICdpbicgOiAnb3V0JztcclxuICAgICAgICB0aGlzLmNoYXRUb2dnbGVJbnZlcnNlID0gdGhpcy5jaGF0VG9nZ2xlSW52ZXJzZSA9PT0gJ291dCcgPyAnaW4nIDogJ291dCc7XHJcbiAgICAgICAgdGhpcy5jaGF0SW5uZXJUb2dnbGUgPSAnb2ZmJztcclxuICAgICAgICB0aGlzLmNoYXRJbm5lclRvZ2dsZUludmVyc2UgPSAnb2ZmJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlQ2hhdElubmVyKCkge1xyXG4gICAgICAgIHRoaXMuY2hhdElubmVyVG9nZ2xlID0gdGhpcy5jaGF0SW5uZXJUb2dnbGUgPT09ICdvZmYnID8gJ29uJyA6ICdvZmYnO1xyXG4gICAgICAgIHRoaXMuY2hhdElubmVyVG9nZ2xlSW52ZXJzZSA9IHRoaXMuY2hhdElubmVyVG9nZ2xlSW52ZXJzZSA9PT0gJ29mZicgPyAnb24nIDogJ29mZic7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNpZGViYXJQb3NpdGlvbigpIHtcclxuICAgICAgICB0aGlzLmlzU2lkZWJhckNoZWNrZWQgPSAhdGhpcy5pc1NpZGViYXJDaGVja2VkO1xyXG4gICAgICAgIHRoaXMucGNvZGVkU2lkZWJhclBvc2l0aW9uID0gdGhpcy5pc1NpZGViYXJDaGVja2VkID09PSB0cnVlID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZSc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEhlYWRlclBvc2l0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuaXNIZWFkZXJDaGVja2VkID0gIXRoaXMuaXNIZWFkZXJDaGVja2VkO1xyXG4gICAgICAgIHRoaXMucGNvZGVkSGVhZGVyUG9zaXRpb24gPSB0aGlzLmlzSGVhZGVyQ2hlY2tlZCA9PT0gdHJ1ZSA/ICdmaXhlZCcgOiAncmVsYXRpdmUnO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyRml4ZWRNYXJnaW4gPSB0aGlzLmlzSGVhZGVyQ2hlY2tlZCA9PT0gdHJ1ZSA/ICc1MHB4JyA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRCYWNrZ3JvdW5kUGF0dGVybihwYXR0ZXJuKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnNldEF0dHJpYnV0ZSgndGhlbWViZy1wYXR0ZXJuJywgcGF0dGVybik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldExheW91dFR5cGUodHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5sYXlvdXRUeXBlID0gdHlwZTtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ2RhcmsnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyVGhlbWUgPSAndGhlbWU2JztcclxuICAgICAgICAgICAgdGhpcy5uYXZCYXJUaGVtZSA9ICd0aGVtZTEnO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ29UaGVtZSA9ICd0aGVtZTYnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyVGhlbWUgPSAndGhlbWUxJztcclxuICAgICAgICAgICAgdGhpcy5uYXZCYXJUaGVtZSA9ICd0aGVtZWxpZ2h0MSc7XHJcbiAgICAgICAgICAgIHRoaXMubG9nb1RoZW1lID0gJ3RoZW1lMSc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXROYXZCYXJUaGVtZSh0aGVtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoZW1lID09PSAndGhlbWVsaWdodDEnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2QmFyVGhlbWUgPSAndGhlbWVsaWdodDEnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2QmFyVGhlbWUgPSAndGhlbWUxJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRUb29sYmFySXRlbXMoYWN0aW9uczogc3RyaW5nW10pIHtcclxuICAgICAgICB0aGlzLnRvb2xiYXJJdGVtcyA9IGFjdGlvbnMubWFwKGFjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRvb2xiYXJBY3Rpb24uU2F2ZTpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkRlZmluaXRpb24oeyBhY3Rpb246IGFjdGlvbiwgdGl0bGU6ICdMxrB1Jywgc3R5bGU6ICdwcmltYXJ5JywgbGF6eWxvYWQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRvb2xiYXJBY3Rpb24uU2F2ZUFsbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkRlZmluaXRpb24oeyBhY3Rpb246IGFjdGlvbiwgdGl0bGU6ICdMxrB1IHThuqV0IGPhuqMnLCBsYXp5bG9hZDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9vbGJhckFjdGlvbi5DYW5jZWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25EZWZpbml0aW9uKHsgYWN0aW9uOiBhY3Rpb24sIHRpdGxlOiAnSOG7p3kgbMawdScgfSk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRvb2xiYXJBY3Rpb24uQmFjazpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkRlZmluaXRpb24oeyBhY3Rpb246IGFjdGlvbiwgdGl0bGU6ICdRdWF5IGzhuqFpJyB9KTtcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9vbGJhckFjdGlvbi5FZGl0Q29sdW1uT3B0aW9uczpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkRlZmluaXRpb24oeyBhY3Rpb246IGFjdGlvbiwgdGl0bGU6ICdRdeG6o24gbMO9IGPhu5l0JyB9KTtcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9vbGJhckFjdGlvbi5TYXZlQW5kTmV3OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uRGVmaW5pdGlvbih7IGFjdGlvbjogYWN0aW9uLCB0aXRsZTogJ0zGsHUgdsOgIHThuqFvIG3hu5tpJywgbGF6eWxvYWQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRvb2xiYXJBY3Rpb24uUmVzZXQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25EZWZpbml0aW9uKHsgYWN0aW9uOiBhY3Rpb24sIHRpdGxlOiAnTMOgbSBt4bubaScgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VG9vbGJhckl0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvb2xiYXJJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzVG9vbGJhckl0ZW1zKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy50b29sYmFySXRlbXMpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpcy50b29sYmFySXRlbXMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0ltYWdlKGltYWdlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9hZ2dyZWdhdG9yU2VydmljZS5wdWJsaXNoKEtleUNvbnN0LlZpZXdJbWFnZSwgaW1hZ2UpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==