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
export class TemplateComponent {
    /**
     * @param {?} _sanitizationService
     * @param {?} _aggregatorService
     * @param {?} _modalRef
     */
    constructor(_sanitizationService, _aggregatorService, _modalRef) {
        this._sanitizationService = _sanitizationService;
        this._aggregatorService = _aggregatorService;
        this._modalRef = _modalRef;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    bypassSecurityTrustHtml(html) {
        return this._sanitizationService.bypassSecurityTrustHtml(html);
    }
    /**
     * @return {?}
     */
    cancel() {
        if (this.data.cancelCallback) {
            this.data.cancelCallback(null, (/**
             * @return {?}
             */
            () => {
                this._modalRef.hide();
            }), this.loader.componentRef.instance);
        }
        else {
            this._modalRef.hide();
        }
        if (this.data.autoClose != false) {
            this._modalRef.hide();
        }
    }
    /**
     * @param {?} close
     * @return {?}
     */
    accept(close) {
        this.close = close;
        this.setKey((/**
         * @return {?}
         */
        () => {
            this.isValid();
        }));
    }
    /**
     * @return {?}
     */
    show() {
        if (this.loader && this.loader.componentRef && this.loader.componentRef.instance) {
            return this.loader.componentRef.instance.show();
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    isValid() {
        if (this.loader && this.loader.componentRef && this.loader.componentRef.instance && this.loader.componentRef.instance.isValid) {
            return this.loader.componentRef.instance.isValid();
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    setKey(callback) {
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
            (errors) => {
                this.close();
                if (!errors || errors.length == 0) {
                    this.execute();
                }
            }));
            if (callback)
                callback();
        }
    }
    /**
     * @return {?}
     */
    closeModal() {
        this._modalRef.hide();
    }
    /**
     * @private
     * @return {?}
     */
    execute() {
        if (this.data.acceptCallback) {
            this._modalRef.hide();
            this.loader.componentRef.instance.callback(this.data.mode).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                this.data.acceptCallback(response, (/**
                 * @return {?}
                 */
                () => {
                    this._modalRef.hide();
                }), this.loader.componentRef.instance);
            }));
        }
        else {
            this._modalRef.hide();
        }
        if (this.data.autoClose != false) {
            this._modalRef.hide();
        }
    }
}
TemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-template',
                template: "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\"><span class=\"{{data?.icon ? data?.icon : 'fa fa-twitter'}}\" style=\"font-size: 30px;\"></span>\r\n    <span style=\"position: absolute;margin: 4px 0px 0px 10px;\">{{data?.title ? data?.title : 'Template'}}</span></h4>\r\n</div>\r\n<div class=\"modal-body test\">\r\n  <katana-loader #loader [data]=\"data?.data\" [template]=\"data?.template\"></katana-loader>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <katana-button [lazyload]=\"btn?.lazyload\" [icon]=\"btn?.icon\" *ngFor=\"let btn of data?.buttons\" (execute)=\"btn?.callback(_modalRef, $event)\"\r\n    [customClass]=\"btn?.customClass\" title=\"{{btn?.title}}\"></katana-button>\r\n  <katana-button *ngIf=\"!data?.hideCancelBtn\" (execute)=\"cancel()\" [customClass]=\"'default'\"\r\n    title=\"{{data?.btnCancelTitle ? data?.btnCancelTitle : 'Cancel'}}\"></katana-button>\r\n  <katana-button *ngIf=\"!data?.hideAcceptBtn\" [lazyload]=\"true\" (execute)=\"accept($event)\" [customClass]=\"'primary'\"\r\n    title=\"{{data?.btnAcceptTitle ? data?.btnAcceptTitle : 'Accept'}}\"></katana-button>\r\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".modal-title{font-size:16px;text-transform:uppercase}.modal-content{border:none!important}"]
            }] }
];
/** @nocollapse */
TemplateComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: AggregatorService },
    { type: BsModalRef }
];
TemplateComponent.propDecorators = {
    loader: [{ type: ViewChild, args: ['loader', { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvbW9kYWxzL2NvbXBvbmVudHMvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBV3pFLE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQU0xQixZQUNZLG9CQUFrQyxFQUNsQyxrQkFBcUMsRUFDdEMsU0FBcUI7UUFGcEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFjO1FBQ2xDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDdEMsY0FBUyxHQUFULFNBQVMsQ0FBWTtJQUNoQyxDQUFDOzs7OztJQUVNLHVCQUF1QixDQUFDLElBQVk7UUFDdkMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7OztJQUVNLE1BQU07UUFDVCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUk7OztZQUFFLEdBQUcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMxQixDQUFDLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENB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LENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQzlFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVE7OztnQkFBRSxHQUFHLEVBQUU7b0JBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzFCLENBQUMsR0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQyxDQUFDLEVBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7OztZQWpHSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0Isa25DQUF3QztnQkFFeEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3hDOzs7O1lBYlEsWUFBWTtZQUlaLGlCQUFpQjtZQUhqQixVQUFVOzs7cUJBZWQsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFBdEMsbUNBQXVFOztJQUN2RSxpQ0FBK0I7O0lBQy9CLGtDQUF1Qjs7Ozs7SUFDdkIsZ0NBQXNCOzs7OztJQUdsQixpREFBMEM7Ozs7O0lBQzFDLCtDQUE2Qzs7SUFDN0Msc0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQnNNb2RhbFJlZiB9IGZyb20gJ25neC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL21vZGFsLm1vZGVsJztcclxuaW1wb3J0IHsgTG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbG9hZGVyL2xvYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZ2dyZWdhdG9yU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FnZ3JlZ2F0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdmFsaWRhdGlvbi92YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdW1tYXJ5RXJyb3IgfSBmcm9tICcuLi8uLi8uLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24ubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2thdGFuYS10ZW1wbGF0ZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGVtcGxhdGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGVtcGxhdGUuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUNvbXBvbmVudCB7XHJcbiAgICBAVmlld0NoaWxkKCdsb2FkZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgcHVibGljIGxvYWRlcjogTG9hZGVyQ29tcG9uZW50O1xyXG4gICAgcHVibGljIGRhdGE6IFRlbXBsYXRlVmlld01vZGVsO1xyXG4gICAgcHVibGljIGNsb3NlOiBGdW5jdGlvbjtcclxuICAgIHByb3RlY3RlZCBrZXk6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9zYW5pdGl6YXRpb25TZXJ2aWNlOiBEb21TYW5pdGl6ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWdncmVnYXRvclNlcnZpY2U6IEFnZ3JlZ2F0b3JTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBfbW9kYWxSZWY6IEJzTW9kYWxSZWYpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbDogc3RyaW5nKTogU2FmZUh0bWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zYW5pdGl6YXRpb25TZXJ2aWNlLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5jZWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jYW5jZWxDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuY2FuY2VsQ2FsbGJhY2sobnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kYWxSZWYuaGlkZSgpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLmxvYWRlci5jb21wb25lbnRSZWYuaW5zdGFuY2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGFsUmVmLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5hdXRvQ2xvc2UgIT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kYWxSZWYuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0KGNsb3NlKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSA9IGNsb3NlO1xyXG4gICAgICAgIHRoaXMuc2V0S2V5KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3coKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9hZGVyICYmIHRoaXMubG9hZGVyLmNvbXBvbmVudFJlZiAmJiB0aGlzLmxvYWRlci5jb21wb25lbnRSZWYuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZGVyLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5sb2FkZXIgJiYgdGhpcy5sb2FkZXIuY29tcG9uZW50UmVmICYmIHRoaXMubG9hZGVyLmNvbXBvbmVudFJlZi5pbnN0YW5jZSAmJiB0aGlzLmxvYWRlci5jb21wb25lbnRSZWYuaW5zdGFuY2UuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkZXIuY29tcG9uZW50UmVmLmluc3RhbmNlLmlzVmFsaWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRLZXkoY2FsbGJhY2s6ICgpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxvYWRlciAmJiB0aGlzLmxvYWRlci5jb21wb25lbnRSZWYgJiYgdGhpcy5sb2FkZXIuY29tcG9uZW50UmVmLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5sb2FkZXIuY29tcG9uZW50UmVmLmluc3RhbmNlLmdldFZhbGlkYXRvcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHZhbGlkYXRvciA9IDxWYWxpZGF0aW9uU2VydmljZT50aGlzLmxvYWRlci5jb21wb25lbnRSZWYuaW5zdGFuY2UuZ2V0VmFsaWRhdG9yKCk7XHJcbiAgICAgICAgICAgIHRoaXMua2V5ID0gdGhpcy5kYXRhLnZhbGlkYXRpb25LZXk7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IgJiYgdmFsaWRhdG9yLnNldEtleSkgdmFsaWRhdG9yLnNldEtleSh0aGlzLmtleSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FnZ3JlZ2F0b3JTZXJ2aWNlLnN1YnNjcmliZSh0aGlzLmtleSwgKGVycm9yczogU3VtbWFyeUVycm9yW10pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIGlmICghZXJyb3JzIHx8IGVycm9ycy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VNb2RhbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9tb2RhbFJlZi5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleGVjdXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuYWNjZXB0Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kYWxSZWYuaGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlci5jb21wb25lbnRSZWYuaW5zdGFuY2UuY2FsbGJhY2sodGhpcy5kYXRhLm1vZGUpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5hY2NlcHRDYWxsYmFjayhyZXNwb25zZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vZGFsUmVmLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMubG9hZGVyLmNvbXBvbmVudFJlZi5pbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGFsUmVmLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5hdXRvQ2xvc2UgIT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kYWxSZWYuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=