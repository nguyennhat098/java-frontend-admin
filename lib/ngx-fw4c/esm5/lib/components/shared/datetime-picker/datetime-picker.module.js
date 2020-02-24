/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/datetime-picker/datetime-picker.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE, OwlDateTimeIntl } from 'ng-pick-datetime';
import { DatetimePickerComponent } from './datetime/datetime.component';
import { DaterangePickerComponent } from './daterange/daterange.component';
import * as i0 from "@angular/core";
/** @type {?} */
var declarations = [DatetimePickerComponent, DaterangePickerComponent];
var DatetimePickerModule = /** @class */ (function () {
    function DatetimePickerModule() {
    }
    /**
     * @return {?}
     */
    DatetimePickerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DatetimePickerModule,
            providers: []
        };
    };
    /**
     * @return {?}
     */
    DatetimePickerModule.forChild = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DatetimePickerModule,
            providers: [
                { provide: OWL_DATE_TIME_LOCALE, useValue: 'vi' },
                { provide: OwlDateTimeIntl, useClass: DefaultDateTimeLabels }
            ]
        };
    };
    DatetimePickerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: declarations,
                    imports: [
                        CommonModule,
                        FormsModule,
                        OwlDateTimeModule,
                        OwlNativeDateTimeModule
                    ],
                    entryComponents: declarations,
                    exports: declarations
                },] }
    ];
    return DatetimePickerModule;
}());
export { DatetimePickerModule };
var DefaultDateTimeLabels = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultDateTimeLabels, _super);
    function DefaultDateTimeLabels() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.upSecondLabel = 'Thêm 1 giây';
        _this.downSecondLabel = 'Bớt 1 giây';
        _this.upMinuteLabel = 'Thêm 1 phút';
        _this.downMinuteLabel = 'Bớt 1 phút';
        _this.upHourLabel = 'Thêm 1 giờ';
        _this.downHourLabel = 'Bớt 1 giờ';
        _this.prevMonthLabel = 'Tháng trước';
        _this.nextMonthLabel = 'Tháng tới';
        _this.prevYearLabel = 'Năm trước';
        _this.nextYearLabel = 'Năm tới';
        _this.prevMultiYearLabel = '21 năm trước';
        _this.nextMultiYearLabel = '21 năm sau';
        _this.switchToMonthViewLabel = 'Xem theo tháng';
        _this.switchToMultiYearViewLabel = 'Xem theo tháng năm';
        _this.cancelBtnLabel = 'Quay lại';
        _this.setBtnLabel = 'Chọn';
        _this.rangeFromLabel = 'Từ';
        _this.rangeToLabel = 'Đến';
        _this.hour12AMLabel = 'AM';
        _this.hour12PMLabel = 'PM';
        return _this;
    }
    DefaultDateTimeLabels.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ DefaultDateTimeLabels.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DefaultDateTimeLabels_Factory() { return new DefaultDateTimeLabels(); }, token: DefaultDateTimeLabels, providedIn: "root" });
    return DefaultDateTimeLabels;
}(OwlDateTimeIntl));
export { DefaultDateTimeLabels };
if (false) {
    /** @type {?} */
    DefaultDateTimeLabels.prototype.upSecondLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.downSecondLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.upMinuteLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.downMinuteLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.upHourLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.downHourLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.prevMonthLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.nextMonthLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.prevYearLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.nextYearLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.prevMultiYearLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.nextMultiYearLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.switchToMonthViewLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.switchToMultiYearViewLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.cancelBtnLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.setBtnLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.rangeFromLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.rangeToLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.hour12AMLabel;
    /** @type {?} */
    DefaultDateTimeLabels.prototype.hour12PMLabel;
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2RhdGV0aW1lLXBpY2tlci9kYXRldGltZS1waWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNySCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7O0lBRXJFLFlBQVksR0FBRyxDQUFDLHVCQUF1QixFQUFFLHdCQUF3QixDQUFDO0FBRXhFO0lBQUE7SUE4QkEsQ0FBQzs7OztJQWpCaUIsNEJBQU87OztJQUFyQjtRQUNJLE9BQU87WUFDSCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRSxFQUNWO1NBQ0osQ0FBQztJQUNOLENBQUM7Ozs7SUFFYSw2QkFBUTs7O0lBQXRCO1FBQ0ksT0FBTztZQUNILFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNQLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Z0JBQ2pELEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUU7YUFDaEU7U0FDSixDQUFDO0lBQ04sQ0FBQzs7Z0JBN0JKLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUUsWUFBWTtvQkFDMUIsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxpQkFBaUI7d0JBQ2pCLHVCQUF1QjtxQkFDMUI7b0JBQ0QsZUFBZSxFQUFFLFlBQVk7b0JBQzdCLE9BQU8sRUFBRSxZQUFZO2lCQUN4Qjs7SUFvQkQsMkJBQUM7Q0FBQSxBQTlCRCxJQThCQztTQWxCWSxvQkFBb0I7QUFvQmpDO0lBQzJDLGlEQUFlO0lBRDFEO1FBQUEscUVBc0JDO1FBcEJHLG1CQUFhLEdBQUcsYUFBYSxDQUFDO1FBQzlCLHFCQUFlLEdBQUcsWUFBWSxDQUFDO1FBQy9CLG1CQUFhLEdBQUcsYUFBYSxDQUFDO1FBQzlCLHFCQUFlLEdBQUcsWUFBWSxDQUFDO1FBQy9CLGlCQUFXLEdBQUcsWUFBWSxDQUFDO1FBQzNCLG1CQUFhLEdBQUcsV0FBVyxDQUFDO1FBQzVCLG9CQUFjLEdBQUcsYUFBYSxDQUFDO1FBQy9CLG9CQUFjLEdBQUcsV0FBVyxDQUFDO1FBQzdCLG1CQUFhLEdBQUcsV0FBVyxDQUFDO1FBQzVCLG1CQUFhLEdBQUcsU0FBUyxDQUFDO1FBQzFCLHdCQUFrQixHQUFHLGNBQWMsQ0FBQztRQUNwQyx3QkFBa0IsR0FBRyxZQUFZLENBQUM7UUFDbEMsNEJBQXNCLEdBQUcsZ0JBQWdCLENBQUM7UUFDMUMsZ0NBQTBCLEdBQUcsb0JBQW9CLENBQUM7UUFDbEQsb0JBQWMsR0FBRyxVQUFVLENBQUM7UUFDNUIsaUJBQVcsR0FBRyxNQUFNLENBQUM7UUFDckIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsa0JBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsbUJBQWEsR0FBRyxJQUFJLENBQUM7O0tBQ3hCOztnQkF0QkEsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O2dDQXpDbEM7Q0ErREMsQUF0QkQsQ0FDMkMsZUFBZSxHQXFCekQ7U0FyQlkscUJBQXFCOzs7SUFDOUIsOENBQThCOztJQUM5QixnREFBK0I7O0lBQy9CLDhDQUE4Qjs7SUFDOUIsZ0RBQStCOztJQUMvQiw0Q0FBMkI7O0lBQzNCLDhDQUE0Qjs7SUFDNUIsK0NBQStCOztJQUMvQiwrQ0FBNkI7O0lBQzdCLDhDQUE0Qjs7SUFDNUIsOENBQTBCOztJQUMxQixtREFBb0M7O0lBQ3BDLG1EQUFrQzs7SUFDbEMsdURBQTBDOztJQUMxQywyREFBa0Q7O0lBQ2xELCtDQUE0Qjs7SUFDNUIsNENBQXFCOztJQUNyQiwrQ0FBc0I7O0lBQ3RCLDZDQUFxQjs7SUFDckIsOENBQXFCOztJQUNyQiw4Q0FBcUI7O0FBQ3hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT3dsRGF0ZVRpbWVNb2R1bGUsIE93bE5hdGl2ZURhdGVUaW1lTW9kdWxlLCBPV0xfREFURV9USU1FX0xPQ0FMRSwgT3dsRGF0ZVRpbWVJbnRsIH0gZnJvbSAnbmctcGljay1kYXRldGltZSc7XHJcbmltcG9ydCB7IERhdGV0aW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRldGltZS9kYXRldGltZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlcmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVyYW5nZS9kYXRlcmFuZ2UuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtEYXRldGltZVBpY2tlckNvbXBvbmVudCwgRGF0ZXJhbmdlUGlja2VyQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucyxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgT3dsRGF0ZVRpbWVNb2R1bGUsXHJcbiAgICAgICAgT3dsTmF0aXZlRGF0ZVRpbWVNb2R1bGVcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IGRlY2xhcmF0aW9ucyxcclxuICAgIGV4cG9ydHM6IGRlY2xhcmF0aW9uc1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGV0aW1lUGlja2VyTW9kdWxlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogRGF0ZXRpbWVQaWNrZXJNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBEYXRldGltZVBpY2tlck1vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IE9XTF9EQVRFX1RJTUVfTE9DQUxFLCB1c2VWYWx1ZTogJ3ZpJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBPd2xEYXRlVGltZUludGwsIHVzZUNsYXNzOiBEZWZhdWx0RGF0ZVRpbWVMYWJlbHMgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIERlZmF1bHREYXRlVGltZUxhYmVscyBleHRlbmRzIE93bERhdGVUaW1lSW50bCB7XHJcbiAgICB1cFNlY29uZExhYmVsID0gJ1Row6ptIDEgZ2nDonknO1xyXG4gICAgZG93blNlY29uZExhYmVsID0gJ0Lhu5t0IDEgZ2nDonknO1xyXG4gICAgdXBNaW51dGVMYWJlbCA9ICdUaMOqbSAxIHBow7p0JztcclxuICAgIGRvd25NaW51dGVMYWJlbCA9ICdC4bubdCAxIHBow7p0JztcclxuICAgIHVwSG91ckxhYmVsID0gJ1Row6ptIDEgZ2nhu50nO1xyXG4gICAgZG93bkhvdXJMYWJlbCA9ICdC4bubdCAxIGdp4budJztcclxuICAgIHByZXZNb250aExhYmVsID0gJ1Row6FuZyB0csaw4bubYyc7XHJcbiAgICBuZXh0TW9udGhMYWJlbCA9ICdUaMOhbmcgdOG7m2knO1xyXG4gICAgcHJldlllYXJMYWJlbCA9ICdOxINtIHRyxrDhu5tjJztcclxuICAgIG5leHRZZWFyTGFiZWwgPSAnTsSDbSB04bubaSc7XHJcbiAgICBwcmV2TXVsdGlZZWFyTGFiZWwgPSAnMjEgbsSDbSB0csaw4bubYyc7XHJcbiAgICBuZXh0TXVsdGlZZWFyTGFiZWwgPSAnMjEgbsSDbSBzYXUnO1xyXG4gICAgc3dpdGNoVG9Nb250aFZpZXdMYWJlbCA9ICdYZW0gdGhlbyB0aMOhbmcnO1xyXG4gICAgc3dpdGNoVG9NdWx0aVllYXJWaWV3TGFiZWwgPSAnWGVtIHRoZW8gdGjDoW5nIG7Eg20nO1xyXG4gICAgY2FuY2VsQnRuTGFiZWwgPSAnUXVheSBs4bqhaSc7XHJcbiAgICBzZXRCdG5MYWJlbCA9ICdDaOG7jW4nO1xyXG4gICAgcmFuZ2VGcm9tTGFiZWwgPSAnVOG7qyc7XHJcbiAgICByYW5nZVRvTGFiZWwgPSAnxJDhur9uJztcclxuICAgIGhvdXIxMkFNTGFiZWwgPSAnQU0nO1xyXG4gICAgaG91cjEyUE1MYWJlbCA9ICdQTSc7XHJcbn07Il19