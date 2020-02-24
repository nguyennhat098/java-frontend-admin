/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/layout/navbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { Breadcrumb } from '../shared/models/base.model';
import { ActionService } from '../shared/services/action.service';
import { Router } from '@angular/router';
import { AggregatorService } from '../shared/services/aggregator.service';
import { KeyConst } from '../shared/constants/key.const';
export class DefaultNavBarComponent {
    /**
     * @param {?} _actionService
     * @param {?} _router
     * @param {?} aggregatorService
     */
    constructor(_actionService, _router, aggregatorService) {
        this._actionService = _actionService;
        this._router = _router;
        this.aggregatorService = aggregatorService;
        this.hideBreadcrumbsSection = false;
        this.menuTabs = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.items || this.items.length == 0) {
            if (this.menuTabs && this.menuTabs.length > 0) {
                /** @type {?} */
                var data = this._router.url;
                /** @type {?} */
                var states = data.split('/');
                if (states.length > 0) {
                    /** @type {?} */
                    var state = states[states.length - 1];
                    if (!state && this.url) {
                        data = this.url;
                        states = data.split('/');
                        state = states[states.length - 1];
                    }
                    if (state) {
                        /** @type {?} */
                        var name = this._actionService.retrieveStateName(state, this.menuTabs);
                        this._actionService.changeItem({ state: state, name: name }, this.menuTabs, (/**
                         * @param {?} items
                         * @return {?}
                         */
                        (items) => {
                            this.items = items;
                            this.items.splice(0, 0, this.breadcrumb);
                        }));
                    }
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.aggregatorService.subscribe(KeyConst.MenuChanged, (/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            this.items = items;
        }));
    }
    /**
     * @return {?}
     */
    retrieveCurrentItem() {
        if (!this.items || this.items.length == 0)
            return null;
        return this.items[this.items.length - 1];
    }
}
DefaultNavBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'default-navbar',
                template: "<div *ngIf=\"!hideBreadcrumbsSection\" class=\"d-flex align-items-center breadcrumbs-wrapper\">\r\n  <div class=\"d-none d-sm-block\">\r\n    <h5 class=\"m-0 784title text-uppercase\">{{retrieveCurrentItem()?.label}}</h5>\r\n  </div>\r\n  <div class=\"ml-auto d-flex align-items-center\">\r\n    <i class=\"icofont icofont-home mr-1 text-primary f-16\"></i>\r\n    <default-breadcrumbs [menuTabs]=\"menuTabs\" [items]=\"items\"></default-breadcrumbs>\r\n  </div>\r\n</div>"
            }] }
];
/** @nocollapse */
DefaultNavBarComponent.ctorParameters = () => [
    { type: ActionService },
    { type: Router },
    { type: AggregatorService }
];
DefaultNavBarComponent.propDecorators = {
    hideBreadcrumbsSection: [{ type: Input }],
    items: [{ type: Input }],
    menuTabs: [{ type: Input }],
    url: [{ type: Input }],
    breadcrumb: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DefaultNavBarComponent.prototype.hideBreadcrumbsSection;
    /** @type {?} */
    DefaultNavBarComponent.prototype.items;
    /** @type {?} */
    DefaultNavBarComponent.prototype.menuTabs;
    /** @type {?} */
    DefaultNavBarComponent.prototype.url;
    /** @type {?} */
    DefaultNavBarComponent.prototype.breadcrumb;
    /**
     * @type {?}
     * @private
     */
    DefaultNavBarComponent.prototype._actionService;
    /**
     * @type {?}
     * @private
     */
    DefaultNavBarComponent.prototype._router;
    /**
     * @type {?}
     * @protected
     */
    DefaultNavBarComponent.prototype.aggregatorService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBVyxNQUFNLDZCQUE2QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsTUFBTSxFQUFpQixNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU96RCxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7SUFPL0IsWUFDWSxjQUE2QixFQUM3QixPQUFlLEVBQ2IsaUJBQW9DO1FBRnRDLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDYixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBVGxDLDJCQUFzQixHQUFZLEtBQUssQ0FBQztRQUV4QyxhQUFRLEdBQWMsRUFBRSxDQUFDO0lBUXJDLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3ZDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O29CQUN2QyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHOztvQkFDdkIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUM1QixJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzt3QkFDZixLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUNyQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7d0JBQ3BCLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUNoQixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDekIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNyQztvQkFDRCxJQUFJLEtBQUssRUFBRTs7NEJBQ0gsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7d0JBQ3RFLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVE7Ozs7d0JBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTs0QkFDbEYsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7NEJBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUM3QyxDQUFDLEVBQUMsQ0FBQztxQkFDTjtpQkFDSjthQUNKO1NBQ0o7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVc7Ozs7UUFBRSxDQUFDLEtBQW1CLEVBQUUsRUFBRTtZQUMzRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFTSxtQkFBbUI7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7WUFuREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLG9lQUFzQzthQUN6Qzs7OztZQVJRLGFBQWE7WUFDYixNQUFNO1lBQ04saUJBQWlCOzs7cUNBU3JCLEtBQUs7b0JBQ0wsS0FBSzt1QkFDTCxLQUFLO2tCQUNMLEtBQUs7eUJBQ0wsS0FBSzs7OztJQUpOLHdEQUF3RDs7SUFDeEQsdUNBQW9DOztJQUNwQywwQ0FBeUM7O0lBQ3pDLHFDQUE0Qjs7SUFDNUIsNENBQXVDOzs7OztJQUduQyxnREFBcUM7Ozs7O0lBQ3JDLHlDQUF1Qjs7Ozs7SUFDdkIsbURBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1iLCBNZW51VGFiIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy9iYXNlLm1vZGVsJztcclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hY3Rpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFnZ3JlZ2F0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2FnZ3JlZ2F0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEtleUNvbnN0IH0gZnJvbSAnLi4vc2hhcmVkL2NvbnN0YW50cy9rZXkuY29uc3QnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RlZmF1bHQtbmF2YmFyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9uYXZiYXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdE5hdkJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBoaWRlQnJlYWRjcnVtYnNTZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaXRlbXM6IEJyZWFkY3J1bWJbXTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBtZW51VGFiczogTWVudVRhYltdID0gW107XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdXJsOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgYnJlYWRjcnVtYjogQnJlYWRjcnVtYjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9hY3Rpb25TZXJ2aWNlOiBBY3Rpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByb3RlY3RlZCBhZ2dyZWdhdG9yU2VydmljZTogQWdncmVnYXRvclNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1zIHx8IHRoaXMuaXRlbXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWVudVRhYnMgJiYgdGhpcy5tZW51VGFicy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX3JvdXRlci51cmw7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGVzID0gZGF0YS5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gc3RhdGVzW3N0YXRlcy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXRlICYmIHRoaXMudXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLnVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVzID0gZGF0YS5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHN0YXRlc1tzdGF0ZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IHRoaXMuX2FjdGlvblNlcnZpY2UucmV0cmlldmVTdGF0ZU5hbWUoc3RhdGUsIHRoaXMubWVudVRhYnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY3Rpb25TZXJ2aWNlLmNoYW5nZUl0ZW0oeyBzdGF0ZTogc3RhdGUsIG5hbWU6IG5hbWUgfSwgdGhpcy5tZW51VGFicywgKGl0ZW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZSgwLCAwLCB0aGlzLmJyZWFkY3J1bWIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hZ2dyZWdhdG9yU2VydmljZS5zdWJzY3JpYmUoS2V5Q29uc3QuTWVudUNoYW5nZWQsIChpdGVtczogQnJlYWRjcnVtYltdKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmV0cmlldmVDdXJyZW50SXRlbSgpOiBCcmVhZGNydW1iIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXRlbXMgfHwgdGhpcy5pdGVtcy5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbdGhpcy5pdGVtcy5sZW5ndGggLSAxXTtcclxuICAgIH1cclxufVxyXG4iXX0=