/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/modals/modal.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseTemplate } from '../models';
var LoadingViewModel = /** @class */ (function () {
    function LoadingViewModel(init) {
        this.threshold = 250;
        this.timeout = 999999;
        Object.assign(this, init);
    }
    return LoadingViewModel;
}());
export { LoadingViewModel };
if (false) {
    /** @type {?} */
    LoadingViewModel.prototype.threshold;
    /** @type {?} */
    LoadingViewModel.prototype.timeout;
    /** @type {?} */
    LoadingViewModel.prototype.template;
    /** @type {?} */
    LoadingViewModel.prototype.loadingText;
}
var NotificationViewModel = /** @class */ (function () {
    function NotificationViewModel(init) {
        this.hideCancelBtn = false;
        Object.assign(this, init);
    }
    return NotificationViewModel;
}());
export { NotificationViewModel };
if (false) {
    /** @type {?} */
    NotificationViewModel.prototype.center;
    /** @type {?} */
    NotificationViewModel.prototype.title;
    /** @type {?} */
    NotificationViewModel.prototype.customSize;
    /** @type {?} */
    NotificationViewModel.prototype.ignoreBackdropClick;
    /** @type {?} */
    NotificationViewModel.prototype.message;
    /** @type {?} */
    NotificationViewModel.prototype.btnTitle;
    /** @type {?} */
    NotificationViewModel.prototype.callback;
    /** @type {?} */
    NotificationViewModel.prototype.autoClose;
    /** @type {?} */
    NotificationViewModel.prototype.buttons;
    /** @type {?} */
    NotificationViewModel.prototype.hideCancelBtn;
}
var ConfirmViewModel = /** @class */ (function () {
    function ConfirmViewModel(init) {
        this.hideCancelBtn = false;
        this.hideAcceptBtn = false;
        Object.assign(this, init);
    }
    return ConfirmViewModel;
}());
export { ConfirmViewModel };
if (false) {
    /** @type {?} */
    ConfirmViewModel.prototype.center;
    /** @type {?} */
    ConfirmViewModel.prototype.title;
    /** @type {?} */
    ConfirmViewModel.prototype.icon;
    /** @type {?} */
    ConfirmViewModel.prototype.customSize;
    /** @type {?} */
    ConfirmViewModel.prototype.ignoreBackdropClick;
    /** @type {?} */
    ConfirmViewModel.prototype.message;
    /** @type {?} */
    ConfirmViewModel.prototype.isDeleted;
    /** @type {?} */
    ConfirmViewModel.prototype.btnAcceptTitle;
    /** @type {?} */
    ConfirmViewModel.prototype.btnCancelTitle;
    /** @type {?} */
    ConfirmViewModel.prototype.autoClose;
    /** @type {?} */
    ConfirmViewModel.prototype.buttons;
    /** @type {?} */
    ConfirmViewModel.prototype.hideCancelBtn;
    /** @type {?} */
    ConfirmViewModel.prototype.hideAcceptBtn;
    /** @type {?} */
    ConfirmViewModel.prototype.acceptCallback;
    /** @type {?} */
    ConfirmViewModel.prototype.cancelCallback;
}
var ItemViewModel = /** @class */ (function () {
    function ItemViewModel(init) {
        this.lazyload = false;
        Object.assign(this, init);
    }
    return ItemViewModel;
}());
export { ItemViewModel };
if (false) {
    /** @type {?} */
    ItemViewModel.prototype.title;
    /** @type {?} */
    ItemViewModel.prototype.icon;
    /** @type {?} */
    ItemViewModel.prototype.customClass;
    /** @type {?} */
    ItemViewModel.prototype.lazyload;
    /** @type {?} */
    ItemViewModel.prototype.callback;
}
var TemplateViewModel = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateViewModel, _super);
    function TemplateViewModel(init) {
        var _this = _super.call(this) || this;
        _this.hideCancelBtn = false;
        _this.hideAcceptBtn = false;
        Object.assign(_this, init);
        return _this;
    }
    return TemplateViewModel;
}(BaseTemplate));
export { TemplateViewModel };
if (false) {
    /** @type {?} */
    TemplateViewModel.prototype.center;
    /** @type {?} */
    TemplateViewModel.prototype.title;
    /** @type {?} */
    TemplateViewModel.prototype.mode;
    /** @type {?} */
    TemplateViewModel.prototype.customSize;
    /** @type {?} */
    TemplateViewModel.prototype.ignoreBackdropClick;
    /** @type {?} */
    TemplateViewModel.prototype.request;
    /** @type {?} */
    TemplateViewModel.prototype.icon;
    /** @type {?} */
    TemplateViewModel.prototype.btnAcceptTitle;
    /** @type {?} */
    TemplateViewModel.prototype.btnCancelTitle;
    /** @type {?} */
    TemplateViewModel.prototype.autoClose;
    /** @type {?} */
    TemplateViewModel.prototype.buttons;
    /** @type {?} */
    TemplateViewModel.prototype.hideCancelBtn;
    /** @type {?} */
    TemplateViewModel.prototype.hideAcceptBtn;
    /** @type {?} */
    TemplateViewModel.prototype.acceptCallback;
    /** @type {?} */
    TemplateViewModel.prototype.cancelCallback;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9tb2RhbHMvbW9kYWwubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUd6QztJQUtFLDBCQUFZLElBQWdDO1FBSjVDLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsWUFBTyxHQUFXLE1BQU0sQ0FBQztRQUl2QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQzs7OztJQVBDLHFDQUF3Qjs7SUFDeEIsbUNBQXlCOztJQUN6QixvQ0FBa0I7O0lBQ2xCLHVDQUFxQjs7QUFNdkI7SUFXRSwrQkFBWSxJQUFxQztRQURqRCxrQkFBYSxHQUFhLEtBQUssQ0FBQztRQUU5QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7OztJQWJDLHVDQUFpQjs7SUFDakIsc0NBQWU7O0lBQ2YsMkNBQW9COztJQUNwQixvREFBOEI7O0lBQzlCLHdDQUFpQjs7SUFDakIseUNBQWtCOztJQUNsQix5Q0FBcUM7O0lBQ3JDLDBDQUFvQjs7SUFDcEIsd0NBQTBCOztJQUMxQiw4Q0FBZ0M7O0FBTWxDO0lBZ0JFLDBCQUFZLElBQWdDO1FBSjVDLGtCQUFhLEdBQWEsS0FBSyxDQUFDO1FBQ2hDLGtCQUFhLEdBQWEsS0FBSyxDQUFDO1FBSTlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7Ozs7SUFsQkMsa0NBQWlCOztJQUNqQixpQ0FBZTs7SUFDZixnQ0FBYzs7SUFDZCxzQ0FBb0I7O0lBQ3BCLCtDQUE4Qjs7SUFDOUIsbUNBQWlCOztJQUNqQixxQ0FBb0I7O0lBQ3BCLDBDQUF3Qjs7SUFDeEIsMENBQXdCOztJQUN4QixxQ0FBb0I7O0lBQ3BCLG1DQUEwQjs7SUFDMUIseUNBQWdDOztJQUNoQyx5Q0FBZ0M7O0lBQ2hDLDBDQUEyQzs7SUFDM0MsMENBQTJDOztBQU03QztJQU1FLHVCQUFZLElBQTZCO1FBRnpDLGFBQVEsR0FBYSxLQUFLLENBQUM7UUFHekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7Ozs7SUFSQyw4QkFBZTs7SUFDZiw2QkFBYzs7SUFDZCxvQ0FBcUI7O0lBQ3JCLGlDQUEyQjs7SUFDM0IsaUNBQWtEOztBQU1wRDtJQUF1Qyw2Q0FBWTtJQWdCakQsMkJBQVksSUFBaUM7UUFBN0MsWUFDRSxpQkFBTyxTQUVSO1FBUEQsbUJBQWEsR0FBYSxLQUFLLENBQUM7UUFDaEMsbUJBQWEsR0FBYSxLQUFLLENBQUM7UUFLOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQzVCLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFwQkQsQ0FBdUMsWUFBWSxHQW9CbEQ7Ozs7SUFuQkMsbUNBQWlCOztJQUNqQixrQ0FBZTs7SUFDZixpQ0FBYzs7SUFDZCx1Q0FBb0I7O0lBQ3BCLGdEQUE4Qjs7SUFDOUIsb0NBQWM7O0lBQ2QsaUNBQWM7O0lBQ2QsMkNBQXdCOztJQUN4QiwyQ0FBd0I7O0lBQ3hCLHNDQUFvQjs7SUFDcEIsb0NBQTBCOztJQUMxQiwwQ0FBZ0M7O0lBQ2hDLDBDQUFnQzs7SUFDaEMsMkNBQThFOztJQUM5RSwyQ0FBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlVGVtcGxhdGUgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gZnJvbSAnbmd4LWJvb3RzdHJhcCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1ZpZXdNb2RlbCB7XHJcbiAgdGhyZXNob2xkOiBudW1iZXIgPSAyNTA7XHJcbiAgdGltZW91dDogbnVtYmVyID0gOTk5OTk5O1xyXG4gIHRlbXBsYXRlPzogc3RyaW5nO1xyXG4gIGxvYWRpbmdUZXh0Pzogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPExvYWRpbmdWaWV3TW9kZWw+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblZpZXdNb2RlbCB7XHJcbiAgY2VudGVyPzogYm9vbGVhbjtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBjdXN0b21TaXplPzogc3RyaW5nO1xyXG4gIGlnbm9yZUJhY2tkcm9wQ2xpY2s/OiBib29sZWFuO1xyXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgYnRuVGl0bGU/OiBzdHJpbmc7XHJcbiAgY2FsbGJhY2s/OiAoY2xvc2U6ICgpID0+IGFueSkgPT4gYW55O1xyXG4gIGF1dG9DbG9zZT86IGJvb2xlYW47XHJcbiAgYnV0dG9ucz86IEl0ZW1WaWV3TW9kZWxbXTtcclxuICBoaWRlQ2FuY2VsQnRuPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPE5vdGlmaWNhdGlvblZpZXdNb2RlbD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlybVZpZXdNb2RlbCB7XHJcbiAgY2VudGVyPzogYm9vbGVhbjtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBpY29uPzogc3RyaW5nO1xyXG4gIGN1c3RvbVNpemU/OiBzdHJpbmc7XHJcbiAgaWdub3JlQmFja2Ryb3BDbGljaz86IGJvb2xlYW47XHJcbiAgbWVzc2FnZT86IHN0cmluZztcclxuICBpc0RlbGV0ZWQ/OiBib29sZWFuO1xyXG4gIGJ0bkFjY2VwdFRpdGxlPzogc3RyaW5nO1xyXG4gIGJ0bkNhbmNlbFRpdGxlPzogc3RyaW5nO1xyXG4gIGF1dG9DbG9zZT86IGJvb2xlYW47XHJcbiAgYnV0dG9ucz86IEl0ZW1WaWV3TW9kZWxbXTtcclxuICBoaWRlQ2FuY2VsQnRuPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGhpZGVBY2NlcHRCdG4/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgYWNjZXB0Q2FsbGJhY2s/OiAoY2xvc2U6ICgpID0+IGFueSkgPT4gYW55O1xyXG4gIGNhbmNlbENhbGxiYWNrPzogKGNsb3NlOiAoKSA9PiBhbnkpID0+IGFueTtcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxDb25maXJtVmlld01vZGVsPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVtVmlld01vZGVsIHtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBpY29uPzogc3RyaW5nO1xyXG4gIGN1c3RvbUNsYXNzPzogc3RyaW5nO1xyXG4gIGxhenlsb2FkPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNhbGxiYWNrPzogKG1vZGFsUmVmOiBCc01vZGFsUmVmLCBlOiBhbnkpID0+IHZvaWQ7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8SXRlbVZpZXdNb2RlbD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVWaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVGVtcGxhdGUge1xyXG4gIGNlbnRlcj86IGJvb2xlYW47XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgbW9kZT86IHN0cmluZztcclxuICBjdXN0b21TaXplPzogc3RyaW5nO1xyXG4gIGlnbm9yZUJhY2tkcm9wQ2xpY2s/OiBib29sZWFuO1xyXG4gIHJlcXVlc3Q/OiBhbnk7XHJcbiAgaWNvbj86IHN0cmluZztcclxuICBidG5BY2NlcHRUaXRsZT86IHN0cmluZztcclxuICBidG5DYW5jZWxUaXRsZT86IHN0cmluZztcclxuICBhdXRvQ2xvc2U/OiBib29sZWFuO1xyXG4gIGJ1dHRvbnM/OiBJdGVtVmlld01vZGVsW107XHJcbiAgaGlkZUNhbmNlbEJ0bj86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBoaWRlQWNjZXB0QnRuPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGFjY2VwdENhbGxiYWNrPzogKHJlc3BvbnNlPzogYW55LCBjbG9zZT86ICgpID0+IGFueSwgcHJvdmlkZXI/OiBhbnksICkgPT4gYW55O1xyXG4gIGNhbmNlbENhbGxiYWNrPzogKHJlc3BvbnNlPzogYW55LCBjbG9zZT86ICgpID0+IGFueSwgcHJvdmlkZXI/OiBhbnkpID0+IGFueTtcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxUZW1wbGF0ZVZpZXdNb2RlbD4pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufSJdfQ==