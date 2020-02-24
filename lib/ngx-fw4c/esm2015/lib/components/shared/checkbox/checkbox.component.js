/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/checkbox/checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class CheckboxComponent {
    constructor() {
        this.customModelChange = new EventEmitter();
        this.direction = 'horizontal';
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.customModel) {
            /** @type {?} */
            const value = changes.customModel.currentValue;
            this.model = this.customModelTransformation(value);
            this.customModelChange.emit(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onModelChange(value) {
        if (this.customModelTransformation) {
            /** @type {?} */
            const newValue = this.customModelTransformation(value);
            this.customModelChange.emit(newValue);
        }
        else {
            this.modelChange.emit(value);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.emitNullOnDestroy === true)
            this.modelChange.emit(null);
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-checkbox',
                template: "<div *ngIf=\"direction === 'horizontal'\" class=\"horizontal-site\">\r\n  <div class=\"form-group\">\r\n    <div class=\"checkbox-fade vertical\">\r\n      <label>\r\n        <input type=\"checkbox\" [ngModel]=\"model\" (ngModelChange)=\"onModelChange($event)\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\">\r\n        <span class=\"cr\" [ngClass]=\"{'disabled': disabled}\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n        <span class=\"text-checkbox\" *ngIf=\"title\">{{title}}</span>\r\n      </label>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"direction === 'vertical'\" class=\"vertical-site\">\r\n  <div class=\"form-group\">\r\n    <label *ngIf=\"title\">{{title}}</label>\r\n    <div class=\"switch vertical\">\r\n      <label class=\"f-bold\">\r\n        <input type=\"checkbox\" [ngModel]=\"model\" (ngModelChange)=\"onModelChange($event)\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\" />\r\n        <span class=\"lever\"></span>\r\n      </label>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [".border-checkbox-section .border-checkbox-group{display:inline-block}.border-checkbox-section .border-checkbox-group .border-checkbox:checked+.border-checkbox-label:after{-webkit-animation:.5s linear check;animation:.5s linear check;opacity:1;border-color:#007bff}.border-checkbox-section .border-checkbox-group .border-checkbox:checked+.border-checkbox-label:after .border-checkbox-label:before{border-color:#eee}.border-checkbox-section .border-checkbox-group .border-checkbox-label{position:relative;display:inline-block;cursor:pointer;height:20px;line-height:20px;padding-left:30px;margin-right:15px}.border-checkbox-section .border-checkbox-group .border-checkbox-label:after{content:\"\";display:block;width:6px;height:12px;opacity:.9;border-right:2px solid #eee;border-top:2px solid #eee;position:absolute;left:4px;top:11px;transform:scaleX(-1) rotate(135deg);transform-origin:left top}.border-checkbox-section .border-checkbox-group .border-checkbox-label:before{content:\"\";display:block;border:2px solid #007bff;width:20px;height:20px;position:absolute;left:0}.border-checkbox-section .border-checkbox{display:none}.border-checkbox-section .border-checkbox:disabled~.border-checkbox-label{cursor:no-drop;color:#ccc}@-webkit-keyframes check{0%{height:0;width:0}25%{height:0;width:6px}50%{height:12px;width:6px}}@keyframes check{0%{height:0;width:0}25%{height:0;width:6px}50%{height:12px;width:6px}}.border-checkbox-section .border-checkbox-group-primary .border-checkbox-label:before{border:1px solid #007bff}.border-checkbox-section .border-checkbox-group-primary .border-checkbox:checked+.border-checkbox-label:after{border-color:#007bff}.border-checkbox-section .border-checkbox-group-warning .border-checkbox-label:before{border:1px solid #ff9800}.border-checkbox-section .border-checkbox-group-warning .border-checkbox:checked+.border-checkbox-label:after{border-color:#ff9800}.border-checkbox-section .border-checkbox-group-default .border-checkbox-label:before{border:1px solid #f2f2f2}.border-checkbox-section .border-checkbox-group-default .border-checkbox:checked+.border-checkbox-label:after{border-color:#f2f2f2}.border-checkbox-section .border-checkbox-group-danger .border-checkbox-label:before{border:1px solid #d61e00}.border-checkbox-section .border-checkbox-group-danger .border-checkbox:checked+.border-checkbox-label:after{border-color:#d61e00}.border-checkbox-section .border-checkbox-group-success .border-checkbox-label:before{border:1px solid #6fbb35}.border-checkbox-section .border-checkbox-group-success .border-checkbox:checked+.border-checkbox-label:after{border-color:#6fbb35}.border-checkbox-section .border-checkbox-group-inverse .border-checkbox-label:before{border:1px solid #052d3e}.border-checkbox-section .border-checkbox-group-inverse .border-checkbox:checked+.border-checkbox-label:after{border-color:#052d3e}.border-checkbox-section .border-checkbox-group-info .border-checkbox-label:before{border:1px solid #1d9ce7}.border-checkbox-section .border-checkbox-group-info .border-checkbox:checked+.border-checkbox-label:after{border-color:#1d9ce7}.checkbox-fade,.checkbox-zoom{display:inline-block}.checkbox-fade label input[type=checkbox]:checked+.cr>.cr-icon,.checkbox-fade label input[type=radio]:checked+.cr>.cr-icon,.checkbox-zoom label input[type=checkbox]:checked+.cr>.cr-icon,.checkbox-zoom label input[type=radio]:checked+.cr>.cr-icon{transform:scale(1) rotateZ(0);opacity:1}.checkbox-fade label input[type=checkbox]+.cr>.cr-icon,.checkbox-fade label input[type=radio]+.cr>.cr-icon,.checkbox-zoom label input[type=checkbox]+.cr>.cr-icon,.checkbox-zoom label input[type=radio]+.cr>.cr-icon{transform:scale(3) rotateZ(-20deg);opacity:0;transition:.3s ease-in}.checkbox-fade label:after,.checkbox-zoom label:after{content:\"\";display:table;clear:both}.checkbox-fade.fade-in-disable .cr,.checkbox-fade.fade-in-disable label,.checkbox-zoom.fade-in-disable .cr,.checkbox-zoom.fade-in-disable label{color:#ccc;cursor:no-drop}.checkbox-fade .cr,.checkbox-zoom .cr{border-radius:0;border:1px solid #87837b!important;box-shadow:1px 1px 1px rgba(0,0,0,.14);cursor:pointer;display:inline-block;float:left;height:16px;margin-right:.5em;position:relative;width:16px}.checkbox-fade .cr .cr-icon,.checkbox-zoom .cr .cr-icon{color:#007bff;font-size:.8em;left:0;line-height:0;position:absolute;right:0;text-align:center;top:50%}.checkbox-fade .cr.disabled,.checkbox-zoom .cr.disabled{opacity:.65;background-color:#eee;cursor:not-allowed}.checkbox-fade label{line-height:18px;font-weight:500}.checkbox-fade label input[type=checkbox],.checkbox-fade label input[type=radio]{display:none}.checkbox-fade label input[type=checkbox]:checked+.cr>.cr-icon,.checkbox-fade label input[type=radio]:checked+.cr>.cr-icon{transform:scale(1) rotateZ(0);opacity:1}.checkbox-fade label input[type=checkbox]+.cr>.cr-icon,.checkbox-fade label input[type=radio]+.cr>.cr-icon{transform:scale(3) rotateZ(-20deg);opacity:0;transition:.3s ease-in}.checkbox-zoom label{line-height:20px}.checkbox-zoom label input[type=checkbox],.checkbox-zoom label input[type=radio]{display:none}.checkbox-zoom label input[type=checkbox]:checked+.cr>.cr-icon,.checkbox-zoom label input[type=radio]:checked+.cr>.cr-icon{transform:scale3d(1,1,1) translate3d(0,0,0);opacity:1}.checkbox-zoom label input[type=checkbox]+.cr>.cr-icon,.checkbox-zoom label input[type=radio]+.cr>.cr-icon{transform:scale3d(.2,.2,.1) translate3d(0,0,0);opacity:0;transition:.3s ease-in}.checkbox-fade.fade-in-primary .cr,.checkbox-fade.zoom-primary .cr,.checkbox-zoom.fade-in-primary .cr,.checkbox-zoom.zoom-primary .cr{border:1px solid #007bff}.checkbox-fade.fade-in-primary .cr .cr-icon,.checkbox-fade.zoom-primary .cr .cr-icon,.checkbox-zoom.fade-in-primary .cr .cr-icon,.checkbox-zoom.zoom-primary .cr .cr-icon{color:#007bff}.checkbox-fade.fade-in-warning .cr,.checkbox-fade.zoom-warning .cr,.checkbox-zoom.fade-in-warning .cr,.checkbox-zoom.zoom-warning .cr{border:1px solid #ff9800}.checkbox-fade.fade-in-warning .cr .cr-icon,.checkbox-fade.zoom-warning .cr .cr-icon,.checkbox-zoom.fade-in-warning .cr .cr-icon,.checkbox-zoom.zoom-warning .cr .cr-icon{color:#ff9800}.checkbox-fade.fade-in-default .cr,.checkbox-fade.zoom-default .cr,.checkbox-zoom.fade-in-default .cr,.checkbox-zoom.zoom-default .cr{border:1px solid #f2f2f2}.checkbox-fade.fade-in-default .cr .cr-icon,.checkbox-fade.zoom-default .cr .cr-icon,.checkbox-zoom.fade-in-default .cr .cr-icon,.checkbox-zoom.zoom-default .cr .cr-icon{color:#f2f2f2}.checkbox-fade.fade-in-danger .cr,.checkbox-fade.zoom-danger .cr,.checkbox-zoom.fade-in-danger .cr,.checkbox-zoom.zoom-danger .cr{border:1px solid #d61e00}.checkbox-fade.fade-in-danger .cr .cr-icon,.checkbox-fade.zoom-danger .cr .cr-icon,.checkbox-zoom.fade-in-danger .cr .cr-icon,.checkbox-zoom.zoom-danger .cr .cr-icon{color:#d61e00}.checkbox-fade.fade-in-success .cr,.checkbox-fade.zoom-success .cr,.checkbox-zoom.fade-in-success .cr,.checkbox-zoom.zoom-success .cr{border:1px solid #6fbb35}.checkbox-fade.fade-in-success .cr .cr-icon,.checkbox-fade.zoom-success .cr .cr-icon,.checkbox-zoom.fade-in-success .cr .cr-icon,.checkbox-zoom.zoom-success .cr .cr-icon{color:#6fbb35}.checkbox-fade.fade-in-inverse .cr,.checkbox-fade.zoom-inverse .cr,.checkbox-zoom.fade-in-inverse .cr,.checkbox-zoom.zoom-inverse .cr{border:1px solid #052d3e}.checkbox-fade.fade-in-inverse .cr .cr-icon,.checkbox-fade.zoom-inverse .cr .cr-icon,.checkbox-zoom.fade-in-inverse .cr .cr-icon,.checkbox-zoom.zoom-inverse .cr .cr-icon{color:#052d3e}.checkbox-fade.fade-in-info .cr,.checkbox-fade.zoom-info .cr,.checkbox-zoom.fade-in-info .cr,.checkbox-zoom.zoom-info .cr{border:1px solid #1d9ce7}.checkbox-fade.fade-in-info .cr .cr-icon,.checkbox-fade.zoom-info .cr .cr-icon,.checkbox-zoom.fade-in-info .cr .cr-icon,.checkbox-zoom.zoom-info .cr .cr-icon{color:#1d9ce7}.checkbox-color{display:inline-block;margin-right:20px;cursor:pointer}.checkbox-color label{display:inline-block;position:relative;padding-left:10px;line-height:20px}.checkbox-color label::before{content:\"\";display:inline-block;position:absolute;top:0;width:20px;height:20px;left:0;right:0;text-align:center;margin-left:-20px;border:1px solid #ccc;border-radius:0;background-color:#fff;transition:border .15s ease-in-out,color .15s ease-in-out}.checkbox-color label::after{display:inline-block;position:absolute;width:16px;height:16px;left:-1px;top:0;margin-left:-17px;padding-left:3px;padding-top:1px;font-size:11px;color:#fff}.checkbox-color input[type=checkbox]{opacity:0}.checkbox-color input[type=checkbox]:focus+label::before{outline:dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}.checkbox-color input[type=checkbox]:checked+label::after{font-family:FontAwesome;content:\"\\f00c\"}.checkbox-color input[type=checkbox]:disabled+label{opacity:.65}.checkbox-color input[type=checkbox]:disabled+label::before{background-color:#eee;cursor:not-allowed}.checkbox-color.checkbox-circle label::before{border-radius:50%}.checkbox-color.checkbox-inline{margin-top:0}.checkbox-danger input[type=checkbox]:checked+label::after,.checkbox-info input[type=checkbox]:checked+label::after,.checkbox-primary input[type=checkbox]:checked+label::after,.checkbox-success input[type=checkbox]:checked+label::after,.checkbox-warning input[type=checkbox]:checked+label::after{color:#fff}.checkbox-primary input[type=checkbox]:checked+label::before{border-color:#2196f3;background-color:#007bff}.checkbox-warning input[type=checkbox]:checked+label::before{background-color:#ff9800}.checkbox-default input[type=checkbox]:checked+label::before{background-color:#f2f2f2}.checkbox-danger input[type=checkbox]:checked+label::before{background-color:#d61e00}.checkbox-success input[type=checkbox]:checked+label::before{background-color:#6fbb35}.checkbox-inverse input[type=checkbox]:checked+label::before{background-color:#052d3e}.checkbox-info input[type=checkbox]:checked+label::before{background-color:#1d9ce7}"]
            }] }
];
CheckboxComponent.propDecorators = {
    model: [{ type: Input }],
    title: [{ type: Input }],
    customModel: [{ type: Input }],
    customModelChange: [{ type: Output }],
    customModelTransformation: [{ type: Input }],
    disabled: [{ type: Input }],
    direction: [{ type: Input }],
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    emitNullOnDestroy: [{ type: Input }],
    modelChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.model;
    /** @type {?} */
    CheckboxComponent.prototype.title;
    /** @type {?} */
    CheckboxComponent.prototype.customModel;
    /** @type {?} */
    CheckboxComponent.prototype.customModelChange;
    /** @type {?} */
    CheckboxComponent.prototype.customModelTransformation;
    /** @type {?} */
    CheckboxComponent.prototype.disabled;
    /** @type {?} */
    CheckboxComponent.prototype.direction;
    /** @type {?} */
    CheckboxComponent.prototype.validationName;
    /** @type {?} */
    CheckboxComponent.prototype.validationScope;
    /** @type {?} */
    CheckboxComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    CheckboxComponent.prototype.modelChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRakcsTUFBTSxPQUFPLGlCQUFpQjtJQU45QjtRQVVxQixzQkFBaUIsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUczRCxjQUFTLEdBQThCLFlBQVksQ0FBQztRQUczRCxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDM0IsZ0JBQVcsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQXVCN0UsQ0FBQzs7Ozs7SUFyQkcsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTs7a0JBQ2YsS0FBSyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWTtZQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxhQUFhLENBQUMsS0FBYztRQUMvQixJQUFJLElBQUksQ0FBQyx5QkFBeUIsRUFBRTs7a0JBQzFCLFFBQVEsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDO1lBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNILElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxJQUFJO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7OztZQXZDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsaXNDQUF3Qzs7YUFFM0M7OztvQkFHSSxLQUFLO29CQUNMLEtBQUs7MEJBQ0wsS0FBSztnQ0FDTCxNQUFNO3dDQUNOLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSztnQ0FDTCxLQUFLOzBCQUNMLE1BQU07Ozs7SUFWUCxrQ0FBK0I7O0lBQy9CLGtDQUE4Qjs7SUFDOUIsd0NBQWlDOztJQUNqQyw4Q0FBMkU7O0lBQzNFLHNEQUErRDs7SUFDL0QscUNBQWtDOztJQUNsQyxzQ0FBb0U7O0lBQ3BFLDJDQUFnQzs7SUFDaEMsNENBQWlDOztJQUNqQyw4Q0FBNEM7O0lBQzVDLHdDQUF5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBTaW1wbGVDaGFuZ2VzLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdrYXRhbmEtY2hlY2tib3gnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbW9kZWw6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjdXN0b21Nb2RlbDogYW55O1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjdXN0b21Nb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY3VzdG9tTW9kZWxUcmFuc2Zvcm1hdGlvbjogKHZhbHVlOiBhbnkpID0+IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCcgPSAnaG9yaXpvbnRhbCc7XHJcbiAgICBASW5wdXQoKSB2YWxpZGF0aW9uTmFtZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgdmFsaWRhdGlvblNjb3BlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBlbWl0TnVsbE9uRGVzdHJveTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBtb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoY2hhbmdlcy5jdXN0b21Nb2RlbCkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNoYW5nZXMuY3VzdG9tTW9kZWwuY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gdGhpcy5jdXN0b21Nb2RlbFRyYW5zZm9ybWF0aW9uKHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21Nb2RlbENoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTW9kZWxDaGFuZ2UodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5jdXN0b21Nb2RlbFRyYW5zZm9ybWF0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5jdXN0b21Nb2RlbFRyYW5zZm9ybWF0aW9uKHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21Nb2RlbENoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbWl0TnVsbE9uRGVzdHJveSA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KG51bGwpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==