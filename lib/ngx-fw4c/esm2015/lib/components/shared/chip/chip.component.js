/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/chip/chip.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';
import { ValidationService } from '../validation/validation.service';
export class ChipComponent {
    /**
     * @param {?} dataService
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.placeholder = 'Nhập thông tin';
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
        this.onAdd = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.onBlur = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.model) {
            for (let i = 0; i < this.model.length; i++) {
                this.model[i] = this.model[i].toString();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.emitNullOnDestroy === true)
            this.modelChange.emit([]);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleBlur($event) {
        this.onBlur.emit($event);
    }
}
ChipComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-chips',
                template: "<div class=\"form-group\">\r\n  <label *ngIf=\"title\">{{title}}</label>\r\n  <div [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\">\r\n    <tag-input (onBlur)=\"handleBlur($event)\" [disable]=\"disabled\" [ngModel]=\"model\"\r\n      (ngModelChange)=\"modelChange.emit($event)\" [modelAsStrings]=\"true\" ngClass=\"tag-select\" theme=\"minimal\"\r\n      [maxItems]=\"maxItems\" [placeholder]=\"placeholder\" [secondaryPlaceholder]=\"placeholder\"\r\n      (onAdd)=\"onAdd.emit($event)\" (onRemove)=\"onRemove.emit($event)\" [addOnBlur]=\"false\">\r\n    </tag-input>\r\n  </div>\r\n</div>",
                styles: [":host /deep/ tag-input{overflow:hidden}:host /deep/ tag-input .tag-wrapper div{text-overflow:initial}:host /deep/ tag-input .tag-select{border:1px solid #e6e6e6}:host /deep/ tag-input tag-input-form input{width:300%}"]
            }] }
];
/** @nocollapse */
ChipComponent.ctorParameters = () => [
    { type: DataService }
];
ChipComponent.propDecorators = {
    title: [{ type: Input }],
    model: [{ type: Input }],
    placeholder: [{ type: Input }],
    maxItems: [{ type: Input }],
    disabled: [{ type: Input }],
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    emitNullOnDestroy: [{ type: Input }],
    validationService: [{ type: Input }],
    modelChange: [{ type: Output }],
    onAdd: [{ type: Output }],
    onRemove: [{ type: Output }],
    onBlur: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ChipComponent.prototype.title;
    /** @type {?} */
    ChipComponent.prototype.model;
    /** @type {?} */
    ChipComponent.prototype.placeholder;
    /** @type {?} */
    ChipComponent.prototype.maxItems;
    /** @type {?} */
    ChipComponent.prototype.disabled;
    /** @type {?} */
    ChipComponent.prototype.validationName;
    /** @type {?} */
    ChipComponent.prototype.validationScope;
    /** @type {?} */
    ChipComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    ChipComponent.prototype.validationService;
    /** @type {?} */
    ChipComponent.prototype.modelChange;
    /** @type {?} */
    ChipComponent.prototype.onAdd;
    /** @type {?} */
    ChipComponent.prototype.onRemove;
    /** @type {?} */
    ChipComponent.prototype.onBlur;
    /**
     * @type {?}
     * @protected
     */
    ChipComponent.prototype.dataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9jaGlwL2NoaXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFRckUsTUFBTSxPQUFPLGFBQWE7Ozs7SUFleEIsWUFBc0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFaOUIsZ0JBQVcsR0FBVyxnQkFBZ0IsQ0FBQztRQUs5QyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFFM0IsZ0JBQVcsR0FBMkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RCxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUMsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pELFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVkLENBQUM7Ozs7SUFFbkQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzFDO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGlCQUFpQixLQUFLLElBQUk7WUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFTSxVQUFVLENBQUMsTUFBTTtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qiw2b0JBQW9DOzthQUVyQzs7OztZQVBRLFdBQVc7OztvQkFVakIsS0FBSztvQkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSztnQ0FDTCxLQUFLO2dDQUNMLEtBQUs7MEJBQ0wsTUFBTTtvQkFDTixNQUFNO3VCQUNOLE1BQU07cUJBQ04sTUFBTTs7OztJQVpQLDhCQUE4Qjs7SUFDOUIsOEJBQWdDOztJQUNoQyxvQ0FBdUQ7O0lBQ3ZELGlDQUFpQzs7SUFDakMsaUNBQWtDOztJQUNsQyx1Q0FBdUM7O0lBQ3ZDLHdDQUF3Qzs7SUFDeEMsMENBQTRDOztJQUM1QywwQ0FBOEM7O0lBQzlDLG9DQUEwRTs7SUFDMUUsOEJBQStEOztJQUMvRCxpQ0FBa0U7O0lBQ2xFLCtCQUFnRTs7Ozs7SUFFcEQsb0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tICcuLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2thdGFuYS1jaGlwcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoaXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NoaXAuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENoaXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIG1vZGVsOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdOaOG6rXAgdGjDtG5nIHRpbic7XHJcbiAgQElucHV0KCkgcHVibGljIG1heEl0ZW1zOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWxpZGF0aW9uTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWxpZGF0aW9uU2NvcGU6IHN0cmluZztcclxuICBASW5wdXQoKSBlbWl0TnVsbE9uRGVzdHJveTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZTtcclxuICBAT3V0cHV0KCkgcHVibGljIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25BZGQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25SZW1vdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25CbHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubW9kZWwpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vZGVsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbFtpXSA9IHRoaXMubW9kZWxbaV0udG9TdHJpbmcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lbWl0TnVsbE9uRGVzdHJveSA9PT0gdHJ1ZSlcclxuICAgICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KFtdKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVCbHVyKCRldmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkJsdXIuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=