/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/accordion/accordionlink.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Inject, Input } from '@angular/core';
import { AccordionDirective } from './accordion.directive';
export class AccordionLinkDirective {
    /**
     * @param {?} nav
     */
    constructor(nav) {
        this.nav = nav;
    }
    /**
     * @return {?}
     */
    get open() {
        return this._open;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set open(value) {
        this._open = value;
        document.querySelector('.pcoded-inner-navbar').classList.toggle('scroll-sidebar');
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nav.addLink(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    /**
     * @return {?}
     */
    toggle() {
        document.querySelector('.pcoded-inner-navbar').classList.add('scroll-sidebar');
        this.open = !this.open;
    }
}
AccordionLinkDirective.decorators = [
    { type: Directive, args: [{
                selector: '[katanaAccordionLink]'
            },] }
];
/** @nocollapse */
AccordionLinkDirective.ctorParameters = () => [
    { type: AccordionDirective, decorators: [{ type: Inject, args: [AccordionDirective,] }] }
];
AccordionLinkDirective.propDecorators = {
    group: [{ type: Input }],
    open: [{ type: HostBinding, args: ['class.pcoded-trigger',] }, { type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9ubGluay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9hY2NvcmRpb24vYWNjb3JkaW9ubGluay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU0zRCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBb0JqQyxZQUF3QyxHQUF1QjtRQUM3RCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDOzs7O0lBcEJELElBR0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELElBQUksSUFBSSxDQUFDLEtBQWM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7OztJQVNNLFFBQVE7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRU0sTUFBTTtRQUNYLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7O1lBdkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2FBQ2xDOzs7O1lBSlEsa0JBQWtCLHVCQTBCWixNQUFNLFNBQUMsa0JBQWtCOzs7b0JBbkJyQyxLQUFLO21CQUNMLFdBQVcsU0FBQyxzQkFBc0IsY0FDbEMsS0FBSzs7OztJQUZOLHVDQUEyQjs7Ozs7SUFnQjNCLHVDQUF5Qjs7Ozs7SUFDekIscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5qZWN0LCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9hY2NvcmRpb24uZGlyZWN0aXZlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2thdGFuYUFjY29yZGlvbkxpbmtdJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkxpbmtEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgcHVibGljIGdyb3VwOiBhbnk7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wY29kZWQtdHJpZ2dlcicpXHJcbiAgQElucHV0KClcclxuXHJcbiAgZ2V0IG9wZW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3BlbjtcclxuICB9XHJcblxyXG4gIHNldCBvcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9vcGVuID0gdmFsdWU7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGNvZGVkLWlubmVyLW5hdmJhcicpLmNsYXNzTGlzdC50b2dnbGUoJ3Njcm9sbC1zaWRlYmFyJyk7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5uYXYuY2xvc2VPdGhlckxpbmtzKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIF9vcGVuOiBib29sZWFuO1xyXG4gIHByb3RlY3RlZCBuYXY6IEFjY29yZGlvbkRpcmVjdGl2ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChBY2NvcmRpb25EaXJlY3RpdmUpIG5hdjogQWNjb3JkaW9uRGlyZWN0aXZlKSB7XHJcbiAgICB0aGlzLm5hdiA9IG5hdjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiBhbnkge1xyXG4gICAgdGhpcy5uYXYuYWRkTGluayh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiBhbnkge1xyXG4gICAgdGhpcy5uYXYucmVtb3ZlR3JvdXAodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlKCk6IGFueSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGNvZGVkLWlubmVyLW5hdmJhcicpLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1zaWRlYmFyJyk7XHJcbiAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xyXG4gIH1cclxufVxyXG4iXX0=