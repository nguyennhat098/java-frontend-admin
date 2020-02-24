/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/modals/components/notification/notification.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap';
var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(_sanitizationService, _modalRef) {
        this._sanitizationService = _sanitizationService;
        this._modalRef = _modalRef;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    NotificationComponent.prototype.bypassSecurityTrustHtml = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        return this._sanitizationService.bypassSecurityTrustHtml(html);
    };
    /**
     * @return {?}
     */
    NotificationComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.data.callback) {
            this.data.callback((/**
             * @return {?}
             */
            function () {
                _this._modalRef.hide();
            }));
        }
        else {
            this._modalRef.hide();
        }
        if (this.data.autoClose != false) {
            this._modalRef.hide();
        }
    };
    NotificationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-notification',
                    template: "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\"><span class=\"fa fa-bell-o\" style=\"font-size: 30px;\"></span> <span\r\n      style=\"position: absolute;margin: 4px 0px 0px 10px;\">{{data?.title ? data?.title : 'Notification'}}</span></h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <p class=\"text-center text-font-14  text-muted\" [innerHTML]=\"data?.message\"></p>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <katana-button [lazyload]=\"btn?.lazyload\" [icon]=\"btn?.icon\" *ngFor=\"let btn of data?.buttons\"\r\n    (execute)=\"btn?.callback(_modalRef, $event)\" [customClass]=\"btn?.customClass\" title=\"{{btn?.title}}\">\r\n  </katana-button>\r\n  <button (click)=\"cancel()\" *ngIf=\"!data?.hideCancelBtn\"\r\n    class=\"btn btn-info\">{{data?.btnTitle ? data?.btnTitle : 'Cancel'}}</button>\r\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".modal-title{font-size:16px;text-transform:uppercase}.modal-content{border:none!important}"]
                }] }
    ];
    /** @nocollapse */
    NotificationComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: BsModalRef }
    ]; };
    return NotificationComponent;
}());
export { NotificationComponent };
if (false) {
    /** @type {?} */
    NotificationComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    NotificationComponent.prototype._sanitizationService;
    /** @type {?} */
    NotificationComponent.prototype._modalRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL21vZGFscy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQztJQVNJLCtCQUNZLG9CQUFrQyxFQUNuQyxTQUFxQjtRQURwQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWM7UUFDbkMsY0FBUyxHQUFULFNBQVMsQ0FBWTtJQUNoQyxDQUFDOzs7OztJQUVNLHVEQUF1Qjs7OztJQUE5QixVQUErQixJQUFZO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFTSxzQ0FBTTs7O0lBQWI7UUFBQSxpQkFXQztRQVZHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFROzs7WUFBQztnQkFDZixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLENBQUMsRUFBQyxDQUFDO1NBQ047YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssRUFBRTtZQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQzs7Z0JBN0JKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQix3MEJBQTRDO29CQUU1QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3hDOzs7O2dCQVRRLFlBQVk7Z0JBQ1osVUFBVTs7SUFpQ25CLDRCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0F2QlkscUJBQXFCOzs7SUFDOUIscUNBQW1DOzs7OztJQUUvQixxREFBMEM7O0lBQzFDLDBDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gZnJvbSAnbmd4LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL21vZGFsLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdrYXRhbmEtbm90aWZpY2F0aW9uJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9ub3RpZmljYXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBkYXRhOiBOb3RpZmljYXRpb25WaWV3TW9kZWw7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9zYW5pdGl6YXRpb25TZXJ2aWNlOiBEb21TYW5pdGl6ZXIsXHJcbiAgICAgICAgcHVibGljIF9tb2RhbFJlZjogQnNNb2RhbFJlZikge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sOiBzdHJpbmcpOiBTYWZlSHRtbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nhbml0aXphdGlvblNlcnZpY2UuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbmNlbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLmNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RhbFJlZi5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGFsUmVmLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5hdXRvQ2xvc2UgIT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kYWxSZWYuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=