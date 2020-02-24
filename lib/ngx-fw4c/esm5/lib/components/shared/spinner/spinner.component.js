/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/spinner/spinner.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Subscription } from 'rxjs';
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router) {
        var _this = this;
        this.router = router;
        this.isSpinnerVisible = true;
        this.subscriptions = new Subscription();
        /** @type {?} */
        var routerSubscription = this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof NavigationStart) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
                _this.isSpinnerVisible = false;
            }
        }), (/**
         * @return {?}
         */
        function () {
            _this.isSpinnerVisible = false;
        }));
        this.subscriptions.add(routerSubscription);
    }
    /**
     * @return {?}
     */
    SpinnerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isSpinnerVisible = false;
        this.subscriptions.unsubscribe();
    };
    SpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-spinner',
                    template: "<div class=\"loading-indicator\" [class.show]=\"isSpinnerVisible\">\r\n  <div class=\"spinner\">\r\n    <div class=\"bounce1\"></div>\r\n    <div class=\"bounce2\"></div>\r\n    <div class=\"bounce3\"></div>\r\n  </div>"
                }] }
    ];
    /** @nocollapse */
    SpinnerComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return SpinnerComponent;
}());
export { SpinnerComponent };
if (false) {
    /** @type {?} */
    SpinnerComponent.prototype.isSpinnerVisible;
    /**
     * @type {?}
     * @private
     */
    SpinnerComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    SpinnerComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwQztJQVNFLDBCQUFvQixNQUFjO1FBQWxDLGlCQVdDO1FBWG1CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIM0IscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7O1lBR2pELGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQUs7WUFDNUQsSUFBSSxLQUFLLFlBQVksZUFBZSxFQUFFO2dCQUNwQyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2FBQzlCO2lCQUFNLElBQUksS0FBSyxZQUFZLGFBQWEsSUFBSSxLQUFLLFlBQVksZ0JBQWdCLElBQUksS0FBSyxZQUFZLGVBQWUsRUFBRTtnQkFDbEgsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQzthQUMvQjtRQUNILENBQUM7OztRQUFFO1lBQ0QsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDLEVBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFTSxzQ0FBVzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsdU9BQXVDO2lCQUN4Qzs7OztnQkFOUSxNQUFNOztJQTZCZix1QkFBQztDQUFBLEFBMUJELElBMEJDO1NBckJZLGdCQUFnQjs7O0lBQzNCLDRDQUErQjs7Ozs7SUFDL0IseUNBQXlEOzs7OztJQUU3QyxrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25TdGFydCwgTmF2aWdhdGlvbkVuZCwgTmF2aWdhdGlvbkNhbmNlbCwgTmF2aWdhdGlvbkVycm9yIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2thdGFuYS1zcGlubmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIGlzU3Bpbm5lclZpc2libGUgPSB0cnVlO1xyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICBjb25zdCByb3V0ZXJTdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpIHtcclxuICAgICAgICB0aGlzLmlzU3Bpbm5lclZpc2libGUgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCB8fCBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25DYW5jZWwgfHwgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3IpIHtcclxuICAgICAgICB0aGlzLmlzU3Bpbm5lclZpc2libGUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmlzU3Bpbm5lclZpc2libGUgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChyb3V0ZXJTdWJzY3JpcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc1NwaW5uZXJWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19