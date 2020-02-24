/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/modals/modal.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseTemplate } from '../models';
export class LoadingViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.threshold = 250;
        this.timeout = 999999;
        Object.assign(this, init);
    }
}
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
export class NotificationViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.hideCancelBtn = false;
        Object.assign(this, init);
    }
}
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
export class ConfirmViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.hideCancelBtn = false;
        this.hideAcceptBtn = false;
        Object.assign(this, init);
    }
}
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
export class ItemViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.lazyload = false;
        Object.assign(this, init);
    }
}
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
export class TemplateViewModel extends BaseTemplate {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        this.hideCancelBtn = false;
        this.hideAcceptBtn = false;
        Object.assign(this, init);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9tb2RhbHMvbW9kYWwubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBR3pDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFLM0IsWUFBWSxJQUFnQztRQUo1QyxjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLFlBQU8sR0FBVyxNQUFNLENBQUM7UUFJdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGOzs7SUFQQyxxQ0FBd0I7O0lBQ3hCLG1DQUF5Qjs7SUFDekIsb0NBQWtCOztJQUNsQix1Q0FBcUI7O0FBTXZCLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFXaEMsWUFBWSxJQUFxQztRQURqRCxrQkFBYSxHQUFhLEtBQUssQ0FBQztRQUU5QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7OztJQWJDLHVDQUFpQjs7SUFDakIsc0NBQWU7O0lBQ2YsMkNBQW9COztJQUNwQixvREFBOEI7O0lBQzlCLHdDQUFpQjs7SUFDakIseUNBQWtCOztJQUNsQix5Q0FBcUM7O0lBQ3JDLDBDQUFvQjs7SUFDcEIsd0NBQTBCOztJQUMxQiw4Q0FBZ0M7O0FBTWxDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFnQjNCLFlBQVksSUFBZ0M7UUFKNUMsa0JBQWEsR0FBYSxLQUFLLENBQUM7UUFDaEMsa0JBQWEsR0FBYSxLQUFLLENBQUM7UUFJOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGOzs7SUFsQkMsa0NBQWlCOztJQUNqQixpQ0FBZTs7SUFDZixnQ0FBYzs7SUFDZCxzQ0FBb0I7O0lBQ3BCLCtDQUE4Qjs7SUFDOUIsbUNBQWlCOztJQUNqQixxQ0FBb0I7O0lBQ3BCLDBDQUF3Qjs7SUFDeEIsMENBQXdCOztJQUN4QixxQ0FBb0I7O0lBQ3BCLG1DQUEwQjs7SUFDMUIseUNBQWdDOztJQUNoQyx5Q0FBZ0M7O0lBQ2hDLDBDQUEyQzs7SUFDM0MsMENBQTJDOztBQU03QyxNQUFNLE9BQU8sYUFBYTs7OztJQU14QixZQUFZLElBQTZCO1FBRnpDLGFBQVEsR0FBYSxLQUFLLENBQUM7UUFHekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGOzs7SUFSQyw4QkFBZTs7SUFDZiw2QkFBYzs7SUFDZCxvQ0FBcUI7O0lBQ3JCLGlDQUEyQjs7SUFDM0IsaUNBQWtEOztBQU1wRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsWUFBWTs7OztJQWdCakQsWUFBWSxJQUFpQztRQUMzQyxLQUFLLEVBQUUsQ0FBQztRQUxWLGtCQUFhLEdBQWEsS0FBSyxDQUFDO1FBQ2hDLGtCQUFhLEdBQWEsS0FBSyxDQUFDO1FBSzlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjs7O0lBbkJDLG1DQUFpQjs7SUFDakIsa0NBQWU7O0lBQ2YsaUNBQWM7O0lBQ2QsdUNBQW9COztJQUNwQixnREFBOEI7O0lBQzlCLG9DQUFjOztJQUNkLGlDQUFjOztJQUNkLDJDQUF3Qjs7SUFDeEIsMkNBQXdCOztJQUN4QixzQ0FBb0I7O0lBQ3BCLG9DQUEwQjs7SUFDMUIsMENBQWdDOztJQUNoQywwQ0FBZ0M7O0lBQ2hDLDJDQUE4RTs7SUFDOUUsMkNBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVRlbXBsYXRlIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgQnNNb2RhbFJlZiB9IGZyb20gJ25neC1ib290c3RyYXAnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdWaWV3TW9kZWwge1xyXG4gIHRocmVzaG9sZDogbnVtYmVyID0gMjUwO1xyXG4gIHRpbWVvdXQ6IG51bWJlciA9IDk5OTk5OTtcclxuICB0ZW1wbGF0ZT86IHN0cmluZztcclxuICBsb2FkaW5nVGV4dD86IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxMb2FkaW5nVmlld01vZGVsPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25WaWV3TW9kZWwge1xyXG4gIGNlbnRlcj86IGJvb2xlYW47XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgY3VzdG9tU2l6ZT86IHN0cmluZztcclxuICBpZ25vcmVCYWNrZHJvcENsaWNrPzogYm9vbGVhbjtcclxuICBtZXNzYWdlPzogc3RyaW5nO1xyXG4gIGJ0blRpdGxlPzogc3RyaW5nO1xyXG4gIGNhbGxiYWNrPzogKGNsb3NlOiAoKSA9PiBhbnkpID0+IGFueTtcclxuICBhdXRvQ2xvc2U/OiBib29sZWFuO1xyXG4gIGJ1dHRvbnM/OiBJdGVtVmlld01vZGVsW107XHJcbiAgaGlkZUNhbmNlbEJ0bj86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxOb3RpZmljYXRpb25WaWV3TW9kZWw+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpcm1WaWV3TW9kZWwge1xyXG4gIGNlbnRlcj86IGJvb2xlYW47XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgaWNvbj86IHN0cmluZztcclxuICBjdXN0b21TaXplPzogc3RyaW5nO1xyXG4gIGlnbm9yZUJhY2tkcm9wQ2xpY2s/OiBib29sZWFuO1xyXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgaXNEZWxldGVkPzogYm9vbGVhbjtcclxuICBidG5BY2NlcHRUaXRsZT86IHN0cmluZztcclxuICBidG5DYW5jZWxUaXRsZT86IHN0cmluZztcclxuICBhdXRvQ2xvc2U/OiBib29sZWFuO1xyXG4gIGJ1dHRvbnM/OiBJdGVtVmlld01vZGVsW107XHJcbiAgaGlkZUNhbmNlbEJ0bj86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBoaWRlQWNjZXB0QnRuPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGFjY2VwdENhbGxiYWNrPzogKGNsb3NlOiAoKSA9PiBhbnkpID0+IGFueTtcclxuICBjYW5jZWxDYWxsYmFjaz86IChjbG9zZTogKCkgPT4gYW55KSA9PiBhbnk7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8Q29uZmlybVZpZXdNb2RlbD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSXRlbVZpZXdNb2RlbCB7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgaWNvbj86IHN0cmluZztcclxuICBjdXN0b21DbGFzcz86IHN0cmluZztcclxuICBsYXp5bG9hZD86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBjYWxsYmFjaz86IChtb2RhbFJlZjogQnNNb2RhbFJlZiwgZTogYW55KSA9PiB2b2lkO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEl0ZW1WaWV3TW9kZWw+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlVmlld01vZGVsIGV4dGVuZHMgQmFzZVRlbXBsYXRlIHtcclxuICBjZW50ZXI/OiBib29sZWFuO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIG1vZGU/OiBzdHJpbmc7XHJcbiAgY3VzdG9tU2l6ZT86IHN0cmluZztcclxuICBpZ25vcmVCYWNrZHJvcENsaWNrPzogYm9vbGVhbjtcclxuICByZXF1ZXN0PzogYW55O1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgYnRuQWNjZXB0VGl0bGU/OiBzdHJpbmc7XHJcbiAgYnRuQ2FuY2VsVGl0bGU/OiBzdHJpbmc7XHJcbiAgYXV0b0Nsb3NlPzogYm9vbGVhbjtcclxuICBidXR0b25zPzogSXRlbVZpZXdNb2RlbFtdO1xyXG4gIGhpZGVDYW5jZWxCdG4/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgaGlkZUFjY2VwdEJ0bj86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBhY2NlcHRDYWxsYmFjaz86IChyZXNwb25zZT86IGFueSwgY2xvc2U/OiAoKSA9PiBhbnksIHByb3ZpZGVyPzogYW55LCApID0+IGFueTtcclxuICBjYW5jZWxDYWxsYmFjaz86IChyZXNwb25zZT86IGFueSwgY2xvc2U/OiAoKSA9PiBhbnksIHByb3ZpZGVyPzogYW55KSA9PiBhbnk7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8VGVtcGxhdGVWaWV3TW9kZWw+KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn0iXX0=