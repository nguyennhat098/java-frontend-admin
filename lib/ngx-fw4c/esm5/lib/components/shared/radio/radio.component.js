/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/radio/radio.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ContentChildren, QueryList, Input, Output, EventEmitter, Directive } from '@angular/core';
import { RadioItemComponent } from './radio-item/radio-item.component';
var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        this.modelChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    RadioComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.items.forEach((/**
         * @param {?} s
         * @param {?} index
         * @return {?}
         */
        function (s, index) {
            s.groupIndex = index;
            if (_this.model !== null && _this.model !== undefined && _this.model === s.value) {
                s.checked = true;
            }
            s.registerSelectedCallback((/**
             * @param {?} componentRef
             * @return {?}
             */
            function (componentRef) {
                _this.items.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    item.checked = false;
                }));
                /** @type {?} */
                var selectedItem = _this.items.find((/**
                 * @param {?} y
                 * @return {?}
                 */
                function (y) { return y.groupIndex === componentRef.groupIndex; }));
                selectedItem.checked = true;
                _this.model = componentRef.value;
                _this.modelChange.emit(componentRef.value);
            }));
        }));
    };
    /**
     * @return {?}
     */
    RadioComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.modelChange.emit(null);
    };
    RadioComponent.decorators = [
        { type: Directive, args: [{
                    selector: 'katana-radio-items'
                },] }
    ];
    RadioComponent.propDecorators = {
        items: [{ type: ContentChildren, args: [RadioItemComponent,] }],
        modelChange: [{ type: Output }],
        model: [{ type: Input }],
        label: [{ type: Input }],
        disabled: [{ type: Input }],
        formControlName: [{ type: Input }],
        validationName: [{ type: Input }]
    };
    return RadioComponent;
}());
export { RadioComponent };
if (false) {
    /** @type {?} */
    RadioComponent.prototype.items;
    /** @type {?} */
    RadioComponent.prototype.modelChange;
    /** @type {?} */
    RadioComponent.prototype.model;
    /** @type {?} */
    RadioComponent.prototype.label;
    /** @type {?} */
    RadioComponent.prototype.disabled;
    /** @type {?} */
    RadioComponent.prototype.formControlName;
    /** @type {?} */
    RadioComponent.prototype.validationName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvcmFkaW8vcmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFvQixlQUFlLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV2RTtJQUFBO1FBTXFCLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUE0QnpFLENBQUM7Ozs7SUFyQkcsMkNBQWtCOzs7SUFBbEI7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7O1FBQUMsVUFBQyxDQUFDLEVBQUUsS0FBSztZQUN4QixDQUFDLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLEtBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTtnQkFDM0UsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDcEI7WUFDRCxDQUFDLENBQUMsd0JBQXdCOzs7O1lBQUMsVUFBQyxZQUFnQztnQkFDeEQsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUEsSUFBSTtvQkFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLENBQUMsRUFBQyxDQUFDOztvQkFDQyxZQUFZLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFVBQVUsS0FBSyxZQUFZLENBQUMsVUFBVSxFQUF4QyxDQUF3QyxFQUFDO2dCQUNqRixZQUFZLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUNoQyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxFQUFDLENBQUM7UUFDUCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkFqQ0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7aUJBQ2pDOzs7d0JBR0ksZUFBZSxTQUFDLGtCQUFrQjs4QkFDbEMsTUFBTTt3QkFDTixLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSztrQ0FDTCxLQUFLO2lDQUNMLEtBQUs7O0lBdUJWLHFCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0E5QlksY0FBYzs7O0lBQ3ZCLCtCQUFpRjs7SUFDakYscUNBQXFFOztJQUNyRSwrQkFBMkI7O0lBQzNCLCtCQUE4Qjs7SUFDOUIsa0NBQWtDOztJQUNsQyx5Q0FBd0M7O0lBQ3hDLHdDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJhZGlvSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vcmFkaW8taXRlbS9yYWRpby1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAna2F0YW5hLXJhZGlvLWl0ZW1zJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJhZGlvQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuICAgIEBDb250ZW50Q2hpbGRyZW4oUmFkaW9JdGVtQ29tcG9uZW50KSBwdWJsaWMgaXRlbXM6IFF1ZXJ5TGlzdDxSYWRpb0l0ZW1Db21wb25lbnQ+O1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBtb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbW9kZWw6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgcHVibGljIGZvcm1Db250cm9sTmFtZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcHVibGljIHZhbGlkYXRpb25OYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgocywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcy5ncm91cEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsICE9PSBudWxsICYmIHRoaXMubW9kZWwgIT09IHVuZGVmaW5lZCAmJiB0aGlzLm1vZGVsID09PSBzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBzLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHMucmVnaXN0ZXJTZWxlY3RlZENhbGxiYWNrKChjb21wb25lbnRSZWY6IFJhZGlvSXRlbUNvbXBvbmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gdGhpcy5pdGVtcy5maW5kKHkgPT4geS5ncm91cEluZGV4ID09PSBjb21wb25lbnRSZWYuZ3JvdXBJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0gY29tcG9uZW50UmVmLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KGNvbXBvbmVudFJlZi52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChudWxsKTtcclxuICAgIH1cclxufVxyXG4iXX0=