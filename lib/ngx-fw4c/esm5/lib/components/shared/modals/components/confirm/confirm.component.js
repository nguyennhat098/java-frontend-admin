/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/modals/components/confirm/confirm.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap';
var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(_sanitizationService, _modalRef) {
        this._sanitizationService = _sanitizationService;
        this._modalRef = _modalRef;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    ConfirmComponent.prototype.bypassSecurityTrustHtml = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        return this._sanitizationService.bypassSecurityTrustHtml(html);
    };
    /**
     * @return {?}
     */
    ConfirmComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.data.cancelCallback) {
            this.data.cancelCallback((/**
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
    /**
     * @return {?}
     */
    ConfirmComponent.prototype.accept = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.data.acceptCallback) {
            this.data.acceptCallback((/**
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
    ConfirmComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-confirm',
                    template: "<div class=\"modal-header \">\r\n  <h4 class=\"modal-title\"><span class=\"fa fa-question-circle-o\" style=\"font-size: 30px;\"></span> <span\r\n      style=\"position: absolute;margin: 4px 0px 0px 10px;\">{{data?.title ? data?.title : 'Confirm'}}</span></h4>\r\n</div>\r\n<div class=\"modal-body justify-content-center\">\r\n  <p class=\"text-center text-font-14  text-muted\" [innerHTML]=\"data?.message\"></p>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <katana-button [lazyload]=\"btn?.lazyload\" [icon]=\"btn?.icon\" *ngFor=\"let btn of data?.buttons\" (execute)=\"btn?.callback(_modalRef, $event)\"\r\n    [customClass]=\"btn?.customClass\" title=\"{{btn?.title}}\"></katana-button>\r\n  <button (click)=\"cancel()\" *ngIf=\"!data?.hideCancelBtn\"\r\n    class=\"btn btn-link\">{{data?.btnCancelTitle ? data?.btnCancelTitle : 'Cancel'}}</button>\r\n  <button (click)=\"accept()\" *ngIf=\"!data?.hideAcceptBtn\"\r\n    class=\"btn btn-primary\">{{data?.btnAcceptTitle ? data?.btnAcceptTitle : 'Accept'}}</button>\r\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".modal-title{font-size:16px;text-transform:uppercase}.modal-content{border:none!important}"]
                }] }
    ];
    /** @nocollapse */
    ConfirmComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: BsModalRef }
    ]; };
    return ConfirmComponent;
}());
export { ConfirmComponent };
if (false) {
    /** @type {?} */
    ConfirmComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    ConfirmComponent.prototype._sanitizationService;
    /** @type {?} */
    ConfirmComponent.prototype._modalRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9tb2RhbHMvY29tcG9uZW50cy9jb25maXJtL2NvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQztJQVNJLDBCQUNZLG9CQUFrQyxFQUNuQyxTQUFxQjtRQURwQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWM7UUFDbkMsY0FBUyxHQUFULFNBQVMsQ0FBWTtJQUNoQyxDQUFDOzs7OztJQUVNLGtEQUF1Qjs7OztJQUE5QixVQUErQixJQUFZO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFTSxpQ0FBTTs7O0lBQWI7UUFBQSxpQkFXQztRQVZHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjOzs7WUFBQztnQkFDckIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMxQixDQUFDLEVBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7Ozs7SUFFTSxpQ0FBTTs7O0lBQWI7UUFBQSxpQkFXQztRQVZHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjOzs7WUFBQztnQkFDckIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMxQixDQUFDLEVBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7O2dCQTFDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsa2hDQUF1QztvQkFFdkMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN4Qzs7OztnQkFUUSxZQUFZO2dCQUNaLFVBQVU7O0lBOENuQix1QkFBQztDQUFBLEFBM0NELElBMkNDO1NBcENZLGdCQUFnQjs7O0lBQ3pCLGdDQUE4Qjs7Ozs7SUFFMUIsZ0RBQTBDOztJQUMxQyxxQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQnNNb2RhbFJlZiB9IGZyb20gJ25neC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBDb25maXJtVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kYWwubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2thdGFuYS1jb25maXJtJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NvbmZpcm0uY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maXJtQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBkYXRhOiBDb25maXJtVmlld01vZGVsO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfc2FuaXRpemF0aW9uU2VydmljZTogRG9tU2FuaXRpemVyLFxyXG4gICAgICAgIHB1YmxpYyBfbW9kYWxSZWY6IEJzTW9kYWxSZWYpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbDogc3RyaW5nKTogU2FmZUh0bWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zYW5pdGl6YXRpb25TZXJ2aWNlLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5jZWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jYW5jZWxDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuY2FuY2VsQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kYWxSZWYuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RhbFJlZi5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuYXV0b0Nsb3NlICE9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGFsUmVmLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLmFjY2VwdENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5hY2NlcHRDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RhbFJlZi5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGFsUmVmLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5hdXRvQ2xvc2UgIT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kYWxSZWYuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=