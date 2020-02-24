/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/radio/radio-item/radio-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, TemplateRef, Input } from '@angular/core';
export class RadioItemComponent {
    constructor() {
        this.disabled = false;
        this.checked = false;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    changeItem($event) {
        $event.stopPropagation();
        if (this.selectedCallBack) {
            this.selectedCallBack(this);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    select($event) {
        $event.stopPropagation();
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    registerSelectedCallback(callback) {
        this.selectedCallBack = callback;
    }
}
RadioItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-radio-item',
                template: "<div class=\"form-radio d-inline-block\">\r\n    <div class=\"radio radio-inline\">\r\n        <label class=\"form-check-label\" [ngClass]=\"{'radio-disable': disabled}\">\r\n            <input class=\"form-check-input\" type=\"radio\" [attr.value]=\"value\" [disabled]=\"disabled\" [checked]=\"checked\"\r\n                   (change)=\"changeItem($event)\" (click)=\"select($event)\">\r\n            <i class=\"helper\"></i> {{label}}\r\n        </label>\r\n    </div>\r\n</div>",
                styles: [".form-radio{position:relative}.form-radio .form-help{position:absolute;width:100%}.form-radio label{position:relative;padding-left:1.5rem;text-align:left;color:#333;display:block;line-height:1.8;cursor:pointer}.form-radio input{width:auto;opacity:.00000001;position:absolute;left:0}.radio .helper{position:absolute;top:-.15rem;left:-.25rem;cursor:pointer;display:block;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#999}.radio .helper::after{transform:scale(0);background-color:#007bff}.radio .helper::after,.radio .helper::before{content:\"\";position:absolute;left:0;top:3px;margin:.25rem;width:1rem;height:1rem;transition:transform .28s;border-radius:50%;border:.125rem solid #007bff}.radio label:hover .helper{color:#007bff}.radio input:checked~.helper::after{transform:scale(.5)}.radio input:checked~.helper::before{color:#007bff}.radio.radiofill input:checked~.helper::after{transform:scale(1)}.radio.radiofill .helper::after{background-color:#007bff}.radio.radio-outline input:checked~.helper::after{transform:scale(.6)}.radio.radio-outline .helper::after{background-color:#fff;border:.225rem solid #007bff}.radio.radio-matrial input~.helper::after{background-color:#fff}.radio.radio-matrial input:checked~.helper::after{transform:scale(.5);box-shadow:0 1px 7px -1px rgba(0,0,0,.72)}.radio.radio-matrial input:checked~.helper::before{background-color:#007bff}.radio.radio-disable{opacity:.7}.radio.radio-disable label{cursor:not-allowed}.radio-inline{display:inline-block;margin-right:20px}.radio.radiofill.radio-primary .helper::after{background-color:#007bff;border-color:#007bff}.radio.radiofill.radio-primary .helper::before{border-color:#007bff}.radio.radio-outline.radio-primary .helper::after{background-color:#fff;border:.225rem solid #007bff}.radio.radio-outline.radio-primary .helper::before{border-color:#007bff}.radio.radio-matrial.radio-primary input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-primary input~.helper::before{background-color:#007bff;border-color:#007bff}.radio.radiofill.radio-warning .helper::after{background-color:#ff9800;border-color:#ff9800}.radio.radiofill.radio-warning .helper::before{border-color:#ff9800}.radio.radio-outline.radio-warning .helper::after{background-color:#fff;border:.225rem solid #ff9800}.radio.radio-outline.radio-warning .helper::before{border-color:#ff9800}.radio.radio-matrial.radio-warning input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-warning input~.helper::before{background-color:#ff9800;border-color:#ff9800}.radio.radiofill.radio-default .helper::after{background-color:#f2f2f2;border-color:#f2f2f2}.radio.radiofill.radio-default .helper::before{border-color:#f2f2f2}.radio.radio-outline.radio-default .helper::after{background-color:#fff;border:.225rem solid #f2f2f2}.radio.radio-outline.radio-default .helper::before{border-color:#f2f2f2}.radio.radio-matrial.radio-default input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-default input~.helper::before{background-color:#f2f2f2;border-color:#f2f2f2}.radio.radiofill.radio-danger .helper::after{background-color:#d61e00;border-color:#d61e00}.radio.radiofill.radio-danger .helper::before{border-color:#d61e00}.radio.radio-outline.radio-danger .helper::after{background-color:#fff;border:.225rem solid #d61e00}.radio.radio-outline.radio-danger .helper::before{border-color:#d61e00}.radio.radio-matrial.radio-danger input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-danger input~.helper::before{background-color:#d61e00;border-color:#d61e00}.radio.radiofill.radio-success .helper::after{background-color:#6fbb35;border-color:#6fbb35}.radio.radiofill.radio-success .helper::before{border-color:#6fbb35}.radio.radio-outline.radio-success .helper::after{background-color:#fff;border:.225rem solid #6fbb35}.radio.radio-outline.radio-success .helper::before{border-color:#6fbb35}.radio.radio-matrial.radio-success input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-success input~.helper::before{background-color:#6fbb35;border-color:#6fbb35}.radio.radiofill.radio-inverse .helper::after{background-color:#052d3e;border-color:#052d3e}.radio.radiofill.radio-inverse .helper::before{border-color:#052d3e}.radio.radio-outline.radio-inverse .helper::after{background-color:#fff;border:.225rem solid #052d3e}.radio.radio-outline.radio-inverse .helper::before{border-color:#052d3e}.radio.radio-matrial.radio-inverse input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-inverse input~.helper::before{background-color:#052d3e;border-color:#052d3e}.radio.radiofill.radio-info .helper::after{background-color:#1d9ce7;border-color:#1d9ce7}.radio.radiofill.radio-info .helper::before{border-color:#1d9ce7}.radio.radio-outline.radio-info .helper::after{background-color:#fff;border:.225rem solid #1d9ce7}.radio.radio-outline.radio-info .helper::before{border-color:#1d9ce7}.radio.radio-matrial.radio-info input~.helper::after{background-color:#fff;border-color:#fff}.radio.radio-matrial.radio-info input~.helper::before{background-color:#1d9ce7;border-color:#1d9ce7}"]
            }] }
];
RadioItemComponent.propDecorators = {
    template: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    value: [{ type: Input }],
    label: [{ type: Input }],
    disabled: [{ type: Input }],
    checked: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RadioItemComponent.prototype.template;
    /** @type {?} */
    RadioItemComponent.prototype.value;
    /** @type {?} */
    RadioItemComponent.prototype.label;
    /** @type {?} */
    RadioItemComponent.prototype.disabled;
    /** @type {?} */
    RadioItemComponent.prototype.checked;
    /** @type {?} */
    RadioItemComponent.prototype.groupIndex;
    /**
     * @type {?}
     * @private
     */
    RadioItemComponent.prototype.selectedCallBack;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8taXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9yYWRpby9yYWRpby1pdGVtL3JhZGlvLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF6RSxNQUFNLE9BQU8sa0JBQWtCO0lBTi9CO1FBVWtCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsWUFBTyxHQUFZLEtBQUssQ0FBQztJQWtCM0MsQ0FBQzs7Ozs7SUFkUSxVQUFVLENBQUMsTUFBYTtRQUM3QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsTUFBTTtRQUNsQixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTSx3QkFBd0IsQ0FBQyxRQUFrQjtRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO0lBQ25DLENBQUM7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsNGVBQTBDOzthQUUzQzs7O3VCQUdFLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO29CQUN2QyxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLOzs7O0lBSk4sc0NBQTRFOztJQUM1RSxtQ0FBMkI7O0lBQzNCLG1DQUE4Qjs7SUFDOUIsc0NBQTBDOztJQUMxQyxxQ0FBeUM7O0lBQ3pDLHdDQUEwQjs7Ozs7SUFDMUIsOENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrYXRhbmEtcmFkaW8taXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3JhZGlvLWl0ZW0uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJhZGlvSXRlbUNvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZTogYW55O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGdyb3VwSW5kZXg6IG51bWJlcjtcclxuICBwcml2YXRlIHNlbGVjdGVkQ2FsbEJhY2s6IEZ1bmN0aW9uO1xyXG5cclxuICBwdWJsaWMgY2hhbmdlSXRlbSgkZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZENhbGxCYWNrKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDYWxsQmFjayh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWxlY3QoJGV2ZW50KSB7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJTZWxlY3RlZENhbGxiYWNrKGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgdGhpcy5zZWxlY3RlZENhbGxCYWNrID0gY2FsbGJhY2s7XHJcbiAgfVxyXG59XHJcbiJdfQ==