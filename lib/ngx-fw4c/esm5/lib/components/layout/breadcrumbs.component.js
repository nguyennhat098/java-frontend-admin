/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/layout/breadcrumbs.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Output, EventEmitter, Input } from "@angular/core";
import { AggregatorService } from '../shared/services/aggregator.service';
import { KeyConst } from '../shared/constants/key.const';
import { ActionService } from '../shared/services/action.service';
var DefaultBreadcrumbsComponent = /** @class */ (function () {
    function DefaultBreadcrumbsComponent(aggregatorService, actionService) {
        this.aggregatorService = aggregatorService;
        this.actionService = actionService;
        this.change = new EventEmitter();
    }
    /**
     * @return {?}
     */
    DefaultBreadcrumbsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.aggregatorService.subscribe(KeyConst.MenuChanged, (/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            _this.items = items;
        }));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    DefaultBreadcrumbsComponent.prototype.selectItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!this.items || this.items.length == 0)
            return;
        /** @type {?} */
        var index = this.items.findIndex((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.label == item.label; }));
        if (index == -1)
            return;
        /** @type {?} */
        var data = [];
        for (var i = 0; i < this.items.length; i++) {
            data.push(this.items[i]);
            if (this.items[i].label == item.label)
                break;
        }
        /** @type {?} */
        var child = this.actionService.retrieveChild(item.state, this.menuTabs);
        if (child) {
            data.push(child);
        }
        this.items = data;
        this.aggregatorService.publish(KeyConst.MenuChanged, this.items);
    };
    DefaultBreadcrumbsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'default-breadcrumbs',
                    template: "<ol class=\"breadcrumb\">\r\n    <li *ngFor=\"let breadcrumb of items; let i = index\" class=\"breadcrumb-item\">\r\n        <!-- <a *ngIf=\"i < items.length - 1\" (click)=\"selectItem(breadcrumb)\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label}}</a> -->\r\n        <a class=\"breadcrumb-color\" *ngIf=\"i < items.length - 1\">{{breadcrumb.label}}</a>\r\n        <a style=\"pointer-events: none;\" *ngIf=\"i == items.length - 1\">{{breadcrumb.label}}</a>\r\n    </li>\r\n</ol>",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["@charset \"UTF-8\";.breadcrumb{display:flex;flex-wrap:wrap;padding:.15rem 0;list-style:none;margin-bottom:0}.breadcrumb-item a,.breadcrumb-item span{font-size:12px!important}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;padding-left:.5rem;color:#87837b;content:\"\uF105\";font:14px/1 FontAwesome}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#87837b}.breadcrumb-color{color:#007bff!important}"]
                }] }
    ];
    /** @nocollapse */
    DefaultBreadcrumbsComponent.ctorParameters = function () { return [
        { type: AggregatorService },
        { type: ActionService }
    ]; };
    DefaultBreadcrumbsComponent.propDecorators = {
        items: [{ type: Input }],
        menuTabs: [{ type: Input }],
        change: [{ type: Output }]
    };
    return DefaultBreadcrumbsComponent;
}());
export { DefaultBreadcrumbsComponent };
if (false) {
    /** @type {?} */
    DefaultBreadcrumbsComponent.prototype.items;
    /** @type {?} */
    DefaultBreadcrumbsComponent.prototype.menuTabs;
    /** @type {?} */
    DefaultBreadcrumbsComponent.prototype.change;
    /**
     * @type {?}
     * @protected
     */
    DefaultBreadcrumbsComponent.prototype.aggregatorService;
    /**
     * @type {?}
     * @protected
     */
    DefaultBreadcrumbsComponent.prototype.actionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9sYXlvdXQvYnJlYWRjcnVtYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWxFO0lBWUkscUNBQ2MsaUJBQW9DLEVBQ3BDLGFBQTRCO1FBRDVCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFKaEMsV0FBTSxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBSzlELENBQUM7Ozs7SUFFTCw4Q0FBUTs7O0lBQVI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVc7Ozs7UUFBRSxVQUFDLEtBQW1CO1lBQ3ZFLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFTSxnREFBVTs7OztJQUFqQixVQUFrQixJQUFnQjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTzs7WUFDOUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFyQixDQUFxQixFQUFDO1FBQzVELElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztZQUFFLE9BQU87O1lBRXBCLElBQUksR0FBRyxFQUFFO1FBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUs7Z0JBQUUsTUFBTTtTQUNoRDs7WUFDRyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZFLElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Z0JBdkNKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiw2ZUFBMkM7b0JBRTNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDeEM7Ozs7Z0JBVFEsaUJBQWlCO2dCQUVqQixhQUFhOzs7d0JBVWpCLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxNQUFNOztJQThCWCxrQ0FBQztDQUFBLEFBeENELElBd0NDO1NBakNZLDJCQUEyQjs7O0lBQ3BDLDRDQUFvQzs7SUFDcEMsK0NBQW9DOztJQUNwQyw2Q0FBa0U7Ozs7O0lBRzlELHdEQUE4Qzs7Ozs7SUFDOUMsb0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1iLCBNZW51VGFiIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy9iYXNlLm1vZGVsJztcclxuaW1wb3J0IHsgQWdncmVnYXRvclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYWdncmVnYXRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgS2V5Q29uc3QgfSBmcm9tICcuLi9zaGFyZWQvY29uc3RhbnRzL2tleS5jb25zdCc7XHJcbmltcG9ydCB7IEFjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYWN0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RlZmF1bHQtYnJlYWRjcnVtYnMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdEJyZWFkY3J1bWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBpdGVtczogQnJlYWRjcnVtYltdO1xyXG4gICAgQElucHV0KCkgcHVibGljIG1lbnVUYWJzOiBNZW51VGFiW107XHJcbiAgICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8QnJlYWRjcnVtYltdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgYWdncmVnYXRvclNlcnZpY2U6IEFnZ3JlZ2F0b3JTZXJ2aWNlLFxyXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25TZXJ2aWNlOiBBY3Rpb25TZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWdncmVnYXRvclNlcnZpY2Uuc3Vic2NyaWJlKEtleUNvbnN0Lk1lbnVDaGFuZ2VkLCAoaXRlbXM6IEJyZWFkY3J1bWJbXSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdEl0ZW0oaXRlbTogQnJlYWRjcnVtYik6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pdGVtcyB8fCB0aGlzLml0ZW1zLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5pdGVtcy5maW5kSW5kZXgocyA9PiBzLmxhYmVsID09IGl0ZW0ubGFiZWwpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAtMSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkYXRhLnB1c2godGhpcy5pdGVtc1tpXSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zW2ldLmxhYmVsID09IGl0ZW0ubGFiZWwpIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmFjdGlvblNlcnZpY2UucmV0cmlldmVDaGlsZChpdGVtLnN0YXRlLCB0aGlzLm1lbnVUYWJzKTtcclxuICAgICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgZGF0YS5wdXNoKGNoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5hZ2dyZWdhdG9yU2VydmljZS5wdWJsaXNoKEtleUNvbnN0Lk1lbnVDaGFuZ2VkLCB0aGlzLml0ZW1zKTtcclxuICAgIH1cclxufVxyXG4iXX0=