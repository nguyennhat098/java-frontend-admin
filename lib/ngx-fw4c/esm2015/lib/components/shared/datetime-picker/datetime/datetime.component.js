/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/datetime-picker/datetime/datetime.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
export class DatetimePickerComponent {
    /**
     * @param {?} dataService
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.placeholder = 'Điền thông tin';
        this.startView = 'month';
        this.pickerType = 'calendar';
        this.pickerMode = 'popup';
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.id = this.dataService.newGuid();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.emitNullOnDestroy)
            this.modelChange.emit(null);
    }
    /**
     * @return {?}
     */
    getElement() {
        /** @type {?} */
        var elements = document.getElementsByTagName('input');
        if (elements) {
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].id == this.id) {
                    return elements[i];
                }
            }
        }
    }
}
DatetimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-datetime-picker',
                template: "<div class=\"form-group\" style=\"min-width: 190px;\">\r\n  <label *ngIf=\"title\">{{title}}</label>\r\n  <div class=\"input-group\">\r\n    <input id=\"{{id}}\" [attr.validation-name]=\"validationName ? validationName : null\" [owlDateTimeTrigger]=\"dt2\"\r\n      class=\"form-control\" [owlDateTime]=\"dt2\" [placeholder]=\"placeholder\" [ngModel]=\"model\"\r\n      (ngModelChange)=\"modelChange.emit($event)\" [attr.scope]=\"validationScope ? validationScope : null\"\r\n      [disabled]=\"disabled\" pattern=\"(0[1-9]|1[0-9]|2[0-9]|3[01])/(0[1-9]|1[012])/[0-9]{4}\" maxlength=\"10\">\r\n    <span [owlDateTimeTrigger]=\"dt2\" class=\"date-time-icon\"><i class=\"fa fa-calendar-o date-icon\"></i></span>\r\n    <owl-date-time #dt2 [pickerType]=\"pickerType\" [startView]=\"startView\" pickerMode=\"popup\"></owl-date-time>\r\n  </div>\r\n</div>",
                styles: [".form-control[readonly]{background-color:#fff}.date-time-icon{position:absolute;top:5px;right:10px;z-index:4;color:#4b4542}.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%;display:flex;position:absolute;z-index:1000}.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%;position:fixed;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.48}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.6)}.cdk-overlay-transparent-backdrop{background:0 0}.cdk-global-scrollblock{width:100%}.owl-dialog-container{position:relative;pointer-events:auto;box-sizing:border-box;display:block;padding:1.5em;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);border-radius:2px;overflow:auto;background:#fff;color:rgba(0,0,0,.87);outline:0}.owl-hidden-accessible{border:0;clip:rect(0 0 0 0);margin:-1px;padding:0;clip:rect(0 0 0 0);height:1px;overflow:hidden;position:absolute;width:1px}.owl-dt-container{box-sizing:border-box;display:block;font-size:1rem;background:#fff;pointer-events:auto;z-index:1000}.owl-dt-container *{box-sizing:border-box}.owl-dt-container-row{border-bottom:1px solid rgba(0,0,0,.12)}.owl-dt-container-row:last-child{border-bottom:none}.owl-dt-calendar{display:flex;flex-direction:column;width:100%}.owl-dt-calendar-control{display:flex;align-items:center;font-size:1em;width:100%;padding:.5em;color:#000}.owl-dt-calendar-control .owl-dt-calendar-control-content{flex:1 1 auto;display:flex;justify-content:center;align-items:center}.owl-dt-calendar-control .owl-dt-calendar-control-content .owl-dt-calendar-control-button{padding:0 .8em}.owl-dt-calendar-control .owl-dt-calendar-control-content .owl-dt-calendar-control-button:hover{background-color:rgba(0,0,0,.12)}.owl-dt-calendar-main{display:flex;flex-direction:column;flex:1 1 auto;padding:0 .5em .5em;outline:0}.owl-dt-calendar-view{display:block;flex:1 1 auto}.owl-dt-calendar-multi-year-view{display:flex;align-items:center}.owl-dt-calendar-multi-year-view .owl-dt-calendar-table{width:calc(100% - 3em)}.owl-dt-calendar-multi-year-view .owl-dt-calendar-table .owl-dt-calendar-header th{padding-bottom:.25em}.owl-dt-calendar-table{width:100%;border-collapse:collapse;border-spacing:0}.owl-dt-calendar-table .owl-dt-calendar-header{color:rgba(0,0,0,.4)}.owl-dt-calendar-table .owl-dt-calendar-header .owl-dt-weekdays th{font-size:.7em;font-weight:400;text-align:center;padding-bottom:1em}.owl-dt-calendar-table .owl-dt-calendar-header .owl-dt-calendar-table-divider{position:relative;height:1px;padding-bottom:.5em}.owl-dt-calendar-table .owl-dt-calendar-header .owl-dt-calendar-table-divider:after{content:\"\";position:absolute;top:0;left:-.5em;right:-.5em;height:1px;background:rgba(0,0,0,.12)}.owl-dt-calendar-table .owl-dt-calendar-cell{position:relative;height:0;line-height:0;text-align:center;outline:0;cursor:pointer;color:rgba(0,0,0,.85);-webkit-appearance:none;-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent}.owl-dt-calendar-table .owl-dt-calendar-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;font-size:.8em;line-height:1;border:1px solid transparent;border-radius:999px;color:inherit}.owl-dt-calendar-table .owl-dt-calendar-cell-content:hover{background:#f4f3f0}.owl-dt-calendar-table .owl-dt-calendar-cell-out{opacity:.2}.owl-dt-calendar-table .owl-dt-calendar-cell-today:not(.owl-dt-calendar-cell-selected){border-color:rgba(0,0,0,.4)}.owl-dt-calendar-table .owl-dt-calendar-cell-selected{color:rgba(255,255,255,.85);background-color:#007bff;font-weight:500}.owl-dt-calendar-table .owl-dt-calendar-cell-selected:hover{background:#007bff}.owl-dt-calendar-table .owl-dt-calendar-cell-selected.owl-dt-calendar-cell-today{box-shadow:inset 0 0 0 1px rgba(255,255,255,.85)}.owl-dt-calendar-table .owl-dt-calendar-cell-disabled{cursor:default}.owl-dt-calendar-table .owl-dt-calendar-cell-disabled>.owl-dt-calendar-cell-content:not(.owl-dt-calendar-cell-selected){color:rgba(0,0,0,.4)}.owl-dt-calendar-table .owl-dt-calendar-cell-disabled>.owl-dt-calendar-cell-content.owl-dt-calendar-cell-selected{opacity:.4}.owl-dt-calendar-table .owl-dt-calendar-cell-disabled>.owl-dt-calendar-cell-today:not(.owl-dt-calendar-cell-selected){border-color:rgba(0,0,0,.2)}.owl-dt-calendar-table .owl-dt-calendar-cell-active:focus>.owl-dt-calendar-cell-content:not(.owl-dt-calendar-cell-selected),.owl-dt-calendar-table:not(.owl-dt-calendar-cell-disabled):hover>.owl-dt-calendar-cell-content:not(.owl-dt-calendar-cell-selected){background-color:rgba(0,0,0,.04)}.owl-dt-calendar-table .owl-dt-calendar-cell-in-range{background:#cce5ff}.owl-dt-calendar-table .owl-dt-calendar-cell-in-range.owl-dt-calendar-cell-range-from{border-top-left-radius:999px;border-bottom-left-radius:999px}.owl-dt-calendar-table .owl-dt-calendar-cell-in-range.owl-dt-calendar-cell-range-to{border-top-right-radius:999px;border-bottom-right-radius:999px}.owl-dt-timer{display:flex;justify-content:center;width:100%;height:7em;padding:.5em;outline:0}.owl-dt-timer-box{position:relative;display:inline-flex;flex-direction:column;align-items:center;width:25%;height:100%}.owl-dt-timer-content{flex:1 1 auto;display:flex;justify-content:center;align-items:center;width:100%;margin:.2em 0}.owl-dt-timer-content .owl-dt-timer-input{display:block;width:2em;text-align:center;border:1px solid rgba(0,0,0,.5);border-radius:3px;outline:0;font-size:1.2em;padding:.2em}.owl-dt-timer-divider{display:inline-block;align-self:flex-end;position:absolute;width:.6em;height:100%;left:-.3em}.owl-dt-timer-divider:after{content:\"\";display:inline-block;width:.35em;height:.35em;position:absolute;left:50%;border-radius:50%;transform:translateX(-50%);background-color:currentColor;bottom:35%}.owl-dt-timer-divider:before{content:\"\";display:inline-block;width:.35em;height:.35em;position:absolute;left:50%;border-radius:50%;transform:translateX(-50%);background-color:currentColor;top:35%}.owl-dt-control-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;margin:0;padding:0;background-color:transparent;font-size:1em;color:inherit}.owl-dt-control-button .owl-dt-control-button-content{position:relative;display:inline-flex;justify-content:center;align-items:center;outline:0}.owl-dt-control-button:focus>.owl-dt-control-button-content{background-color:rgba(0,0,0,.12)}.owl-dt-control-button:not(:-moz-focusring):focus>.owl-dt-control-button-content{box-shadow:none}.owl-dt-control-period-button .owl-dt-control-button-content{height:1.5em;padding:0 .5em;border-radius:3px;transition:background-color .1s linear}.owl-dt-control-period-button:hover>.owl-dt-control-button-content{background-color:rgba(0,0,0,.12)}.owl-dt-control-period-button .owl-dt-control-button-arrow{display:flex;justify-content:center;align-items:center;width:1em;height:1em;margin:.1em;transition:transform .2s}.owl-dt-control-arrow-button .owl-dt-control-button-content{padding:0;border-radius:50%;width:1.5em;height:1.5em}.owl-dt-control-arrow-button svg{width:50%;height:50%;fill:currentColor}.owl-dt-control-arrow-button[disabled]{color:rgba(0,0,0,.4);cursor:default}.owl-dt-inline-container{position:relative;width:18.5em;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);display:inline-block}.owl-dt-inline-container .owl-dt-calendar{width:100%;height:20.25em}.owl-dt-inline-container .owl-dt-timer{width:100%}.owl-dt-popup-container{position:relative;width:18.5em;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.owl-dt-popup-container .owl-dt-calendar{width:100%;height:20.25em}.owl-dt-popup-container .owl-dt-timer{width:100%}.owl-dt-dialog-container{max-height:95vh;margin:-1.5em}.owl-dt-dialog-container .owl-dt-calendar{min-width:250px;min-height:330px;max-width:750px;max-height:750px}.owl-dt-dialog-container .owl-dt-timer{min-width:250px;max-width:750px}.owl-dt-container-buttons{display:flex;width:100%;height:2em;color:#007bff}.owl-dt-container-control-button{font-size:13px;font-weight:500;width:50%;height:100%;border-radius:0}.owl-dt-container-control-button .owl-dt-control-button-content{height:100%;width:100%;transition:background-color .1s linear}.owl-dt-container-control-button:hover .owl-dt-control-button-content{background-color:rgba(0,0,0,.1)}.owl-dt-container-info{padding:0 .5em;cursor:pointer;-webkit-tap-highlight-color:transparent}.owl-dt-container-info .owl-dt-container-range{display:flex;justify-content:space-between;padding:.5em 0;font-size:.8em}.owl-dt-container-info .owl-dt-container-range:last-child{border-top:1px solid rgba(0,0,0,.12)}.owl-dt-container-info .owl-dt-container-info-active{color:#007bff}.owl-dt-container-disabled,.owl-dt-trigger-disabled{opacity:.35;filter:Alpha(Opacity=35);background-image:none;cursor:default!important}.owl-dt-timer-hour12{display:flex;justify-content:center;align-items:center;color:#007bff}.owl-dt-timer-hour12 .owl-dt-timer-hour12-box{border:1px solid currentColor;border-radius:2px;transition:background .2s}.owl-dt-timer-hour12 .owl-dt-timer-hour12-box .owl-dt-control-button-content{width:100%;height:100%;padding:.5em}.owl-dt-timer-hour12 .owl-dt-timer-hour12-box:focus .owl-dt-control-button-content,.owl-dt-timer-hour12 .owl-dt-timer-hour12-box:hover .owl-dt-control-button-content{background:#3f51b5;color:#fff}@media all and (orientation:landscape){.owl-dt-dialog-container .owl-dt-calendar{width:58vh;height:62vh}.owl-dt-dialog-container .owl-dt-timer{width:58vh}}@media all and (orientation:portrait){.owl-dt-dialog-container .owl-dt-calendar{width:80vw;height:80vw}.owl-dt-dialog-container .owl-dt-timer{width:80vw}}.ui-calendar-button{top:0;right:0}"]
            }] }
];
/** @nocollapse */
DatetimePickerComponent.ctorParameters = () => [
    { type: DataService }
];
DatetimePickerComponent.propDecorators = {
    title: [{ type: Input }],
    model: [{ type: Input }],
    disabled: [{ type: Input }],
    minValue: [{ type: Input }],
    maxValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    startView: [{ type: Input }],
    pickerType: [{ type: Input }],
    pickerMode: [{ type: Input }],
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    emitNullOnDestroy: [{ type: Input }],
    modelChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DatetimePickerComponent.prototype.title;
    /** @type {?} */
    DatetimePickerComponent.prototype.model;
    /** @type {?} */
    DatetimePickerComponent.prototype.disabled;
    /** @type {?} */
    DatetimePickerComponent.prototype.minValue;
    /** @type {?} */
    DatetimePickerComponent.prototype.maxValue;
    /** @type {?} */
    DatetimePickerComponent.prototype.placeholder;
    /** @type {?} */
    DatetimePickerComponent.prototype.startView;
    /** @type {?} */
    DatetimePickerComponent.prototype.pickerType;
    /** @type {?} */
    DatetimePickerComponent.prototype.pickerMode;
    /** @type {?} */
    DatetimePickerComponent.prototype.validationName;
    /** @type {?} */
    DatetimePickerComponent.prototype.validationScope;
    /** @type {?} */
    DatetimePickerComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    DatetimePickerComponent.prototype.modelChange;
    /** @type {?} */
    DatetimePickerComponent.prototype.id;
    /**
     * @type {?}
     * @protected
     */
    DatetimePickerComponent.prototype.dataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvZGF0ZXRpbWUtcGlja2VyL2RhdGV0aW1lL2RhdGV0aW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBUTFELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFnQmxDLFlBQXNCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBVjlCLGdCQUFXLEdBQVcsZ0JBQWdCLENBQUM7UUFDdkMsY0FBUyxHQUFzQyxPQUFPLENBQUM7UUFDdkQsZUFBVSxHQUFrQyxVQUFVLENBQUM7UUFDdkQsZUFBVSxHQUF1QixPQUFPLENBQUM7UUFHaEQsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQzNCLGdCQUFXLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7SUFHcEIsQ0FBQzs7OztJQUVuRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsaUJBQWlCO1lBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFTSxVQUFVOztZQUNYLFFBQVEsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDO1FBQ3JELElBQUksUUFBUSxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO29CQUM3QixPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEI7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7O1lBMUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyw2MUJBQXdDOzthQUV6Qzs7OztZQU5RLFdBQVc7OztvQkFTakIsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7MEJBQ0wsTUFBTTs7OztJQVpQLHdDQUE4Qjs7SUFDOUIsd0NBQTRCOztJQUM1QiwyQ0FBa0M7O0lBQ2xDLDJDQUErQjs7SUFDL0IsMkNBQStCOztJQUMvQiw4Q0FBdUQ7O0lBQ3ZELDRDQUF1RTs7SUFDdkUsNkNBQXVFOztJQUN2RSw2Q0FBeUQ7O0lBQ3pELGlEQUF1Qzs7SUFDdkMsa0RBQXdDOztJQUN4QyxvREFBNEM7O0lBQzVDLDhDQUFzRTs7SUFDdEUscUNBQWtCOzs7OztJQUVOLDhDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2thdGFuYS1kYXRldGltZS1waWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRldGltZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZXRpbWUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGV0aW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtb2RlbDogRGF0ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcHVibGljIG1pblZhbHVlOiBEYXRlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYXhWYWx1ZTogRGF0ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICfEkGnhu4FuIHRow7RuZyB0aW4nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzdGFydFZpZXc6ICdtb250aCcgfCAneWVhcnMnIHwgJ211bHRpLXllYXJzJyA9ICdtb250aCc7XHJcbiAgQElucHV0KCkgcHVibGljIHBpY2tlclR5cGU6ICdjYWxlbmRhcicgfCAndGltZXInIHwgJ2JvdGgnID0gJ2NhbGVuZGFyJztcclxuICBASW5wdXQoKSBwdWJsaWMgcGlja2VyTW9kZTogJ3BvcHVwJyB8ICdkaWFsb2cnID0gJ3BvcHVwJztcclxuICBASW5wdXQoKSBwdWJsaWMgdmFsaWRhdGlvbk5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgdmFsaWRhdGlvblNjb3BlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZW1pdE51bGxPbkRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcHVibGljIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgcHVibGljIGlkOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaWQgPSB0aGlzLmRhdGFTZXJ2aWNlLm5ld0d1aWQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZW1pdE51bGxPbkRlc3Ryb3kpXHJcbiAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChudWxsKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRFbGVtZW50KCk6IGFueSB7XHJcbiAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcclxuICAgIGlmIChlbGVtZW50cykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRzW2ldLmlkID09IHRoaXMuaWQpIHtcclxuICAgICAgICAgIHJldHVybiBlbGVtZW50c1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19