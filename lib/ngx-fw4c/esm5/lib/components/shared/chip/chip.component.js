/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/chip/chip.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';
import { ValidationService } from '../validation/validation.service';
var ChipComponent = /** @class */ (function () {
    function ChipComponent(dataService) {
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
    ChipComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.model) {
            for (var i = 0; i < this.model.length; i++) {
                this.model[i] = this.model[i].toString();
            }
        }
    };
    /**
     * @return {?}
     */
    ChipComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.emitNullOnDestroy === true)
            this.modelChange.emit([]);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ChipComponent.prototype.handleBlur = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.onBlur.emit($event);
    };
    ChipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-chips',
                    template: "<div class=\"form-group\">\r\n  <label *ngIf=\"title\">{{title}}</label>\r\n  <div [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\">\r\n    <tag-input (onBlur)=\"handleBlur($event)\" [disable]=\"disabled\" [ngModel]=\"model\"\r\n      (ngModelChange)=\"modelChange.emit($event)\" [modelAsStrings]=\"true\" ngClass=\"tag-select\" theme=\"minimal\"\r\n      [maxItems]=\"maxItems\" [placeholder]=\"placeholder\" [secondaryPlaceholder]=\"placeholder\"\r\n      (onAdd)=\"onAdd.emit($event)\" (onRemove)=\"onRemove.emit($event)\" [addOnBlur]=\"false\">\r\n    </tag-input>\r\n  </div>\r\n</div>",
                    styles: [":host /deep/ tag-input{overflow:hidden}:host /deep/ tag-input .tag-wrapper div{text-overflow:initial}:host /deep/ tag-input .tag-select{border:1px solid #e6e6e6}:host /deep/ tag-input tag-input-form input{width:300%}"]
                }] }
    ];
    /** @nocollapse */
    ChipComponent.ctorParameters = function () { return [
        { type: DataService }
    ]; };
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
    return ChipComponent;
}());
export { ChipComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9jaGlwL2NoaXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFckU7SUFxQkUsdUJBQXNCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBWjlCLGdCQUFXLEdBQVcsZ0JBQWdCLENBQUM7UUFLOUMsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBRTNCLGdCQUFXLEdBQTJCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekQsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlDLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFZCxDQUFDOzs7O0lBRW5ELGdDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzFDO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsbUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssSUFBSTtZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVNLGtDQUFVOzs7O0lBQWpCLFVBQWtCLE1BQU07UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsNm9CQUFvQzs7aUJBRXJDOzs7O2dCQVBRLFdBQVc7Ozt3QkFVakIsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLO2lDQUNMLEtBQUs7a0NBQ0wsS0FBSztvQ0FDTCxLQUFLO29DQUNMLEtBQUs7OEJBQ0wsTUFBTTt3QkFDTixNQUFNOzJCQUNOLE1BQU07eUJBQ04sTUFBTTs7SUFvQlQsb0JBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQWpDWSxhQUFhOzs7SUFDeEIsOEJBQThCOztJQUM5Qiw4QkFBZ0M7O0lBQ2hDLG9DQUF1RDs7SUFDdkQsaUNBQWlDOztJQUNqQyxpQ0FBa0M7O0lBQ2xDLHVDQUF1Qzs7SUFDdkMsd0NBQXdDOztJQUN4QywwQ0FBNEM7O0lBQzVDLDBDQUE4Qzs7SUFDOUMsb0NBQTBFOztJQUMxRSw4QkFBK0Q7O0lBQy9ELGlDQUFrRTs7SUFDbEUsK0JBQWdFOzs7OztJQUVwRCxvQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uU2VydmljZSB9IGZyb20gJy4uL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2F0YW5hLWNoaXBzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hpcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2hpcC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgbW9kZWw6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ05o4bqtcCB0aMO0bmcgdGluJztcclxuICBASW5wdXQoKSBwdWJsaWMgbWF4SXRlbXM6IG51bWJlcjtcclxuICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcHVibGljIHZhbGlkYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIHZhbGlkYXRpb25TY29wZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGVtaXROdWxsT25EZXN0cm95OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgbW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkFkZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvblJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tb2RlbCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubW9kZWwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLm1vZGVsW2ldID0gdGhpcy5tb2RlbFtpXS50b1N0cmluZygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVtaXROdWxsT25EZXN0cm95ID09PSB0cnVlKVxyXG4gICAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQoW10pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhbmRsZUJsdXIoJGV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQmx1ci5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==