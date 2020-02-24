/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/modals/components/template/template.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap';
import { LoaderComponent } from '../../../loader/loader.component';
import { AggregatorService } from '../../../services/aggregator.service';
var TemplateComponent = /** @class */ (function () {
    function TemplateComponent(_sanitizationService, _aggregatorService, _modalRef) {
        this._sanitizationService = _sanitizationService;
        this._aggregatorService = _aggregatorService;
        this._modalRef = _modalRef;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    TemplateComponent.prototype.bypassSecurityTrustHtml = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        return this._sanitizationService.bypassSecurityTrustHtml(html);
    };
    /**
     * @return {?}
     */
    TemplateComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.data.cancelCallback) {
            this.data.cancelCallback(null, (/**
             * @return {?}
             */
            function () {
                _this._modalRef.hide();
            }), this.loader.componentRef.instance);
        }
        else {
            this._modalRef.hide();
        }
        if (this.data.autoClose != false) {
            this._modalRef.hide();
        }
    };
    /**
     * @param {?} close
     * @return {?}
     */
    TemplateComponent.prototype.accept = /**
     * @param {?} close
     * @return {?}
     */
    function (close) {
        var _this = this;
        this.close = close;
        this.setKey((/**
         * @return {?}
         */
        function () {
            _this.isValid();
        }));
    };
    /**
     * @return {?}
     */
    TemplateComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        if (this.loader && this.loader.componentRef && this.loader.componentRef.instance) {
            return this.loader.componentRef.instance.show();
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    TemplateComponent.prototype.isValid = /**
     * @return {?}
     */
    function () {
        if (this.loader && this.loader.componentRef && this.loader.componentRef.instance && this.loader.componentRef.instance.isValid) {
            return this.loader.componentRef.instance.isValid();
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    TemplateComponent.prototype.setKey = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        var _this = this;
        if (this.loader && this.loader.componentRef && this.loader.componentRef.instance) {
            if (!this.loader.componentRef.instance.getValidator) {
                this.close();
                this.execute();
                return;
            }
            /** @type {?} */
            var validator = (/** @type {?} */ (this.loader.componentRef.instance.getValidator()));
            this.key = this.data.validationKey;
            if (validator && validator.setKey)
                validator.setKey(this.key);
            this._aggregatorService.subscribe(this.key, (/**
             * @param {?} errors
             * @return {?}
             */
            function (errors) {
                _this.close();
                if (!errors || errors.length == 0) {
                    _this.execute();
                }
            }));
            if (callback)
                callback();
        }
    };
    /**
     * @return {?}
     */
    TemplateComponent.prototype.closeModal = /**
     * @return {?}
     */
    function () {
        this._modalRef.hide();
    };
    /**
     * @private
     * @return {?}
     */
    TemplateComponent.prototype.execute = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.data.acceptCallback) {
            this._modalRef.hide();
            this.loader.componentRef.instance.callback(this.data.mode).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                _this.data.acceptCallback(response, (/**
                 * @return {?}
                 */
                function () {
                    _this._modalRef.hide();
                }), _this.loader.componentRef.instance);
            }));
        }
        else {
            this._modalRef.hide();
        }
        if (this.data.autoClose != false) {
            this._modalRef.hide();
        }
    };
    TemplateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-template',
                    template: "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\"><span class=\"{{data?.icon ? data?.icon : 'fa fa-twitter'}}\" style=\"font-size: 30px;\"></span>\r\n    <span style=\"position: absolute;margin: 4px 0px 0px 10px;\">{{data?.title ? data?.title : 'Template'}}</span></h4>\r\n</div>\r\n<div class=\"modal-body test\">\r\n  <katana-loader #loader [data]=\"data?.data\" [template]=\"data?.template\"></katana-loader>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <katana-button [lazyload]=\"btn?.lazyload\" [icon]=\"btn?.icon\" *ngFor=\"let btn of data?.buttons\" (execute)=\"btn?.callback(_modalRef, $event)\"\r\n    [customClass]=\"btn?.customClass\" title=\"{{btn?.title}}\"></katana-button>\r\n  <katana-button *ngIf=\"!data?.hideCancelBtn\" (execute)=\"cancel()\" [customClass]=\"'default'\"\r\n    title=\"{{data?.btnCancelTitle ? data?.btnCancelTitle : 'Cancel'}}\"></katana-button>\r\n  <katana-button *ngIf=\"!data?.hideAcceptBtn\" [lazyload]=\"true\" (execute)=\"accept($event)\" [customClass]=\"'primary'\"\r\n    title=\"{{data?.btnAcceptTitle ? data?.btnAcceptTitle : 'Accept'}}\"></katana-button>\r\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".modal-title{font-size:16px;text-transform:uppercase}.modal-content{border:none!important}"]
                }] }
    ];
    /** @nocollapse */
    TemplateComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: AggregatorService },
        { type: BsModalRef }
    ]; };
    TemplateComponent.propDecorators = {
        loader: [{ type: ViewChild, args: ['loader', { static: false },] }]
    };
    return TemplateComponent;
}());
export { TemplateComponent };
if (false) {
    /** @type {?} */
    TemplateComponent.prototype.loader;
    /** @type {?} */
    TemplateComponent.prototype.data;
    /** @type {?} */
    TemplateComponent.prototype.close;
    /**
     * @type {?}
     * @protected
     */
    TemplateComponent.prototype.key;
    /**
     * @type {?}
     * @private
     */
    TemplateComponent.prototype._sanitizationService;
    /**
     * @type {?}
     * @private
     */
    TemplateComponent.prototype._aggregatorService;
    /** @type {?} */
    TemplateComponent.prototype._modalRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvbW9kYWxzL2NvbXBvbmVudHMvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBSXpFO0lBYUksMkJBQ1ksb0JBQWtDLEVBQ2xDLGtCQUFxQyxFQUN0QyxTQUFxQjtRQUZwQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWM7UUFDbEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUN0QyxjQUFTLEdBQVQsU0FBUyxDQUFZO0lBQ2hDLENBQUM7Ozs7O0lBRU0sbURBQXVCOzs7O0lBQTlCLFVBQStCLElBQVk7UUFDdkMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7OztJQUVNLGtDQUFNOzs7SUFBYjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJOzs7WUFBRTtnQkFDM0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMxQixDQUFDLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7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U0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxRQUFRO2dCQUMxRSxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFROzs7Z0JBQUU7b0JBQy9CLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzFCLENBQUMsR0FBRSxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQyxDQUFDLEVBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7O2dCQWpHSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0Isa25DQUF3QztvQkFFeEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN4Qzs7OztnQkFiUSxZQUFZO2dCQUlaLGlCQUFpQjtnQkFIakIsVUFBVTs7O3lCQWVkLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQTBGMUMsd0JBQUM7Q0FBQSxBQWxHRCxJQWtHQztTQTNGWSxpQkFBaUI7OztJQUMxQixtQ0FBdUU7O0lBQ3ZFLGlDQUErQjs7SUFDL0Isa0NBQXVCOzs7OztJQUN2QixnQ0FBc0I7Ozs7O0lBR2xCLGlEQUEwQzs7Ozs7SUFDMUMsK0NBQTZDOztJQUM3QyxzQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gZnJvbSAnbmd4LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kYWwubW9kZWwnO1xyXG5pbXBvcnQgeyBMb2FkZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFnZ3JlZ2F0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYWdncmVnYXRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFN1bW1hcnlFcnJvciB9IGZyb20gJy4uLy4uLy4uL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAna2F0YW5hLXRlbXBsYXRlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90ZW1wbGF0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlQ29tcG9uZW50IHtcclxuICAgIEBWaWV3Q2hpbGQoJ2xvYWRlcicsIHsgc3RhdGljOiBmYWxzZSB9KSBwdWJsaWMgbG9hZGVyOiBMb2FkZXJDb21wb25lbnQ7XHJcbiAgICBwdWJsaWMgZGF0YTogVGVtcGxhdGVWaWV3TW9kZWw7XHJcbiAgICBwdWJsaWMgY2xvc2U6IEZ1bmN0aW9uO1xyXG4gICAgcHJvdGVjdGVkIGtleTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3Nhbml0aXphdGlvblNlcnZpY2U6IERvbVNhbml0aXplcixcclxuICAgICAgICBwcml2YXRlIF9hZ2dyZWdhdG9yU2VydmljZTogQWdncmVnYXRvclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIF9tb2RhbFJlZjogQnNNb2RhbFJlZikge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sOiBzdHJpbmcpOiBTYWZlSHRtbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nhbml0aXphdGlvblNlcnZpY2UuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbmNlbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLmNhbmNlbENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5jYW5jZWxDYWxsYmFjayhudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RhbFJlZi5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMubG9hZGVyLmNvbXBvbmVudFJlZi5pbnN0YW5jZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kYWxSZWYuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXRhLmF1dG9DbG9zZSAhPSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RhbFJlZi5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQoY2xvc2UpIHtcclxuICAgICAgICB0aGlzLmNsb3NlID0gY2xvc2U7XHJcbiAgICAgICAgdGhpcy5zZXRLZXkoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvdygpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5sb2FkZXIgJiYgdGhpcy5sb2FkZXIuY29tcG9uZW50UmVmICYmIHRoaXMubG9hZGVyLmNvbXBvbmVudFJlZi5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkZXIuY29tcG9uZW50UmVmLmluc3RhbmNlLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmxvYWRlciAmJiB0aGlzLmxvYWRlci5jb21wb25lbnRSZWYgJiYgdGhpcy5sb2FkZXIuY29tcG9uZW50UmVmLmluc3RhbmNlICYmIHRoaXMubG9hZGVyLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRlci5jb21wb25lbnRSZWYuaW5zdGFuY2UuaXNWYWxpZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEtleShjYWxsYmFjazogKCkgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9hZGVyICYmIHRoaXMubG9hZGVyLmNvbXBvbmVudFJlZiAmJiB0aGlzLmxvYWRlci5jb21wb25lbnRSZWYuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxvYWRlci5jb21wb25lbnRSZWYuaW5zdGFuY2UuZ2V0VmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdmFsaWRhdG9yID0gPFZhbGlkYXRpb25TZXJ2aWNlPnRoaXMubG9hZGVyLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5nZXRWYWxpZGF0b3IoKTtcclxuICAgICAgICAgICAgdGhpcy5rZXkgPSB0aGlzLmRhdGEudmFsaWRhdGlvbktleTtcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRvciAmJiB2YWxpZGF0b3Iuc2V0S2V5KSB2YWxpZGF0b3Iuc2V0S2V5KHRoaXMua2V5KTtcclxuICAgICAgICAgICAgdGhpcy5fYWdncmVnYXRvclNlcnZpY2Uuc3Vic2NyaWJlKHRoaXMua2V5LCAoZXJyb3JzOiBTdW1tYXJ5RXJyb3JbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvcnMgfHwgZXJyb3JzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZU1vZGFsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX21vZGFsUmVmLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4ZWN1dGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5hY2NlcHRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RhbFJlZi5oaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5jYWxsYmFjayh0aGlzLmRhdGEubW9kZSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmFjY2VwdENhbGxiYWNrKHJlc3BvbnNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kYWxSZWYuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgdGhpcy5sb2FkZXIuY29tcG9uZW50UmVmLmluc3RhbmNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kYWxSZWYuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXRhLmF1dG9DbG9zZSAhPSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RhbFJlZi5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==