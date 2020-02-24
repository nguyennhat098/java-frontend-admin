/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/accordion/accordionanchor.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Inject } from '@angular/core';
import { AccordionLinkDirective } from './accordionlink.directive';
export class AccordionAnchorDirective {
    /**
     * @param {?} navlink
     */
    constructor(navlink) {
        this.navlink = navlink;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        this.navlink.toggle();
    }
}
AccordionAnchorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[katanaAccordionToggle]'
            },] }
];
/** @nocollapse */
AccordionAnchorDirective.ctorParameters = () => [
    { type: AccordionLinkDirective, decorators: [{ type: Inject, args: [AccordionLinkDirective,] }] }
];
AccordionAnchorDirective.propDecorators = {
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AccordionAnchorDirective.prototype.navlink;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uYW5jaG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2FjY29yZGlvbi9hY2NvcmRpb25hbmNob3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBTW5FLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFHbkMsWUFBNkMsT0FBK0I7UUFDMUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFHTSxPQUFPLENBQUMsQ0FBTTtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3hCLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2FBQ3BDOzs7O1lBSlEsc0JBQXNCLHVCQVNmLE1BQU0sU0FBQyxzQkFBc0I7OztzQkFJMUMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQU5qQywyQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjY29yZGlvbkxpbmtEaXJlY3RpdmUgfSBmcm9tICcuL2FjY29yZGlvbmxpbmsuZGlyZWN0aXZlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2thdGFuYUFjY29yZGlvblRvZ2dsZV0nXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQW5jaG9yRGlyZWN0aXZlIHtcclxuICBwcm90ZWN0ZWQgbmF2bGluazogQWNjb3JkaW9uTGlua0RpcmVjdGl2ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoIEBJbmplY3QoQWNjb3JkaW9uTGlua0RpcmVjdGl2ZSkgbmF2bGluazogQWNjb3JkaW9uTGlua0RpcmVjdGl2ZSkge1xyXG4gICAgdGhpcy5uYXZsaW5rID0gbmF2bGluaztcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBwdWJsaWMgb25DbGljayhlOiBhbnkpIHtcclxuICAgIHRoaXMubmF2bGluay50b2dnbGUoKTtcclxuICB9XHJcbn1cclxuIl19