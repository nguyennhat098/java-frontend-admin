/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/modals/components/loading/loading.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { LoadingViewModel } from '../../modal.model';
var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    /**
     * @return {?}
     */
    LoadingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.option)
            this.option = new LoadingViewModel();
    };
    LoadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-loading',
                    template: "<ng-container *ngIf=\"option?.template then custom; else default\"></ng-container>\r\n\r\n<ng-template #custom>\r\n  <ng4-loading-spinner [threshold]=\"option?.threshold\" [timeout]=\"option?.timeout\" [template]=\"option?.template\"\r\n    [loadingText]=\"option?.loadingText\" [zIndex]=\"9999\">\r\n  </ng4-loading-spinner>\r\n</ng-template>\r\n\r\n<ng-template #default>\r\n  <ng4-loading-spinner [threshold]=\"option?.threshold\" [timeout]=\"option?.timeout\"\r\n    [loadingText]=\"option?.loadingText\" [zIndex]=\"9999\"></ng4-loading-spinner>\r\n</ng-template>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    LoadingComponent.propDecorators = {
        option: [{ type: Input }]
    };
    return LoadingComponent;
}());
export { LoadingComponent };
if (false) {
    /** @type {?} */
    LoadingComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9tb2RhbHMvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQ7SUFBQTtJQWFBLENBQUM7Ozs7SUFIRyxtQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztJQUMzRCxDQUFDOztnQkFaSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsbWtCQUF1QztvQkFFdkMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN4Qzs7O3lCQUdJLEtBQUs7O0lBS1YsdUJBQUM7Q0FBQSxBQWJELElBYUM7U0FOWSxnQkFBZ0I7OztJQUN6QixrQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvYWRpbmdWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi9tb2RhbC5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAna2F0YW5hLWxvYWRpbmcnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgcHVibGljIG9wdGlvbjogTG9hZGluZ1ZpZXdNb2RlbDtcclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMub3B0aW9uKSB0aGlzLm9wdGlvbiA9IG5ldyBMb2FkaW5nVmlld01vZGVsKCk7XHJcbiAgICB9XHJcbn1cclxuIl19