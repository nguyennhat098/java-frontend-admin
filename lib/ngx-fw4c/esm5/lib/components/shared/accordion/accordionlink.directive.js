/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/accordion/accordionlink.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Inject, Input } from '@angular/core';
import { AccordionDirective } from './accordion.directive';
var AccordionLinkDirective = /** @class */ (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: /**
         * @return {?}
         */
        function () {
            return this._open;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._open = value;
            document.querySelector('.pcoded-inner-navbar').classList.toggle('scroll-sidebar');
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AccordionLinkDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.nav.addLink(this);
    };
    /**
     * @return {?}
     */
    AccordionLinkDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.nav.removeGroup(this);
    };
    /**
     * @return {?}
     */
    AccordionLinkDirective.prototype.toggle = /**
     * @return {?}
     */
    function () {
        document.querySelector('.pcoded-inner-navbar').classList.add('scroll-sidebar');
        this.open = !this.open;
    };
    AccordionLinkDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[katanaAccordionLink]'
                },] }
    ];
    /** @nocollapse */
    AccordionLinkDirective.ctorParameters = function () { return [
        { type: AccordionDirective, decorators: [{ type: Inject, args: [AccordionDirective,] }] }
    ]; };
    AccordionLinkDirective.propDecorators = {
        group: [{ type: Input }],
        open: [{ type: HostBinding, args: ['class.pcoded-trigger',] }, { type: Input }]
    };
    return AccordionLinkDirective;
}());
export { AccordionLinkDirective };
if (false) {
    /** @type {?} */
    AccordionLinkDirective.prototype.group;
    /**
     * @type {?}
     * @protected
     */
    AccordionLinkDirective.prototype._open;
    /**
     * @type {?}
     * @protected
     */
    AccordionLinkDirective.prototype.nav;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9ubGluay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9hY2NvcmRpb24vYWNjb3JkaW9ubGluay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRDtJQXdCRSxnQ0FBd0MsR0FBdUI7UUFDN0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQXBCRCxzQkFHSSx3Q0FBSTs7OztRQUhSO1lBSUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7Ozs7O1FBRUQsVUFBUyxLQUFjO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbEYsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEM7UUFDSCxDQUFDOzs7T0FSQTs7OztJQWlCTSx5Q0FBUTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRU0sNENBQVc7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFTSx1Q0FBTTs7O0lBQWI7UUFDRSxRQUFRLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7O2dCQXZDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtpQkFDbEM7Ozs7Z0JBSlEsa0JBQWtCLHVCQTBCWixNQUFNLFNBQUMsa0JBQWtCOzs7d0JBbkJyQyxLQUFLO3VCQUNMLFdBQVcsU0FBQyxzQkFBc0IsY0FDbEMsS0FBSzs7SUFpQ1IsNkJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXBDWSxzQkFBc0I7OztJQUNqQyx1Q0FBMkI7Ozs7O0lBZ0IzQix1Q0FBeUI7Ozs7O0lBQ3pCLHFDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIEluamVjdCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjY29yZGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vYWNjb3JkaW9uLmRpcmVjdGl2ZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1trYXRhbmFBY2NvcmRpb25MaW5rXSdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25MaW5rRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBncm91cDogYW55O1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MucGNvZGVkLXRyaWdnZXInKVxyXG4gIEBJbnB1dCgpXHJcblxyXG4gIGdldCBvcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX29wZW47XHJcbiAgfVxyXG5cclxuICBzZXQgb3Blbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fb3BlbiA9IHZhbHVlO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBjb2RlZC1pbm5lci1uYXZiYXInKS5jbGFzc0xpc3QudG9nZ2xlKCdzY3JvbGwtc2lkZWJhcicpO1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMubmF2LmNsb3NlT3RoZXJMaW5rcyh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfb3BlbjogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgbmF2OiBBY2NvcmRpb25EaXJlY3RpdmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQWNjb3JkaW9uRGlyZWN0aXZlKSBuYXY6IEFjY29yZGlvbkRpcmVjdGl2ZSkge1xyXG4gICAgdGhpcy5uYXYgPSBuYXY7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogYW55IHtcclxuICAgIHRoaXMubmF2LmFkZExpbmsodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogYW55IHtcclxuICAgIHRoaXMubmF2LnJlbW92ZUdyb3VwKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZSgpOiBhbnkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBjb2RlZC1pbm5lci1uYXZiYXInKS5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtc2lkZWJhcicpO1xyXG4gICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcclxuICB9XHJcbn1cclxuIl19