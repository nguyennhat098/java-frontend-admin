/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/textbox/textbox.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from './textbox.component';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FormModule } from '../form/form.module';
import { CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';
/** @type {?} */
export var CustomCurrencyMaskConfig = {
    align: 'left',
    allowNegative: false,
    decimal: '.',
    precision: 0,
    prefix: '',
    suffix: ' VNĐ',
    thousands: ','
};
var TextboxModule = /** @class */ (function () {
    function TextboxModule() {
    }
    TextboxModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TextboxComponent],
                    imports: [
                        CommonModule,
                        FormsModule,
                        FormModule,
                        CurrencyMaskModule
                    ],
                    exports: [TextboxComponent],
                    providers: [
                        { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
                    ]
                },] }
    ];
    return TextboxModule;
}());
export { TextboxModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGJveC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC90ZXh0Ym94L3RleHRib3gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7QUFFbEYsTUFBTSxLQUFPLHdCQUF3QixHQUFHO0lBQ3RDLEtBQUssRUFBRSxNQUFNO0lBQ2IsYUFBYSxFQUFFLEtBQUs7SUFDcEIsT0FBTyxFQUFFLEdBQUc7SUFDWixTQUFTLEVBQUUsQ0FBQztJQUNaLE1BQU0sRUFBRSxFQUFFO0lBQ1YsTUFBTSxFQUFFLE1BQU07SUFDZCxTQUFTLEVBQUUsR0FBRztDQUNmO0FBRUQ7SUFBQTtJQWVBLENBQUM7O2dCQWZBLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDaEMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxVQUFVO3dCQUNWLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQzNCLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUU7cUJBQ3RFO2lCQUNGOztJQUdELG9CQUFDO0NBQUEsQUFmRCxJQWVDO1NBRFksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFRleHRib3hDb21wb25lbnQgfSBmcm9tICcuL3RleHRib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEN1cnJlbmN5TWFza01vZHVsZSB9IGZyb20gJ25nMi1jdXJyZW5jeS1tYXNrJztcclxuaW1wb3J0IHsgRm9ybU1vZHVsZSB9IGZyb20gJy4uL2Zvcm0vZm9ybS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDVVJSRU5DWV9NQVNLX0NPTkZJRyB9IGZyb20gJ25nMi1jdXJyZW5jeS1tYXNrL3NyYy9jdXJyZW5jeS1tYXNrLmNvbmZpZyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ3VzdG9tQ3VycmVuY3lNYXNrQ29uZmlnID0ge1xyXG4gIGFsaWduOiAnbGVmdCcsXHJcbiAgYWxsb3dOZWdhdGl2ZTogZmFsc2UsXHJcbiAgZGVjaW1hbDogJy4nLFxyXG4gIHByZWNpc2lvbjogMCxcclxuICBwcmVmaXg6ICcnLFxyXG4gIHN1ZmZpeDogJyBWTsSQJyxcclxuICB0aG91c2FuZHM6ICcsJ1xyXG59O1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtUZXh0Ym94Q29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIEZvcm1Nb2R1bGUsXHJcbiAgICBDdXJyZW5jeU1hc2tNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtUZXh0Ym94Q29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHsgcHJvdmlkZTogQ1VSUkVOQ1lfTUFTS19DT05GSUcsIHVzZVZhbHVlOiBDdXN0b21DdXJyZW5jeU1hc2tDb25maWcgfVxyXG4gIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0Ym94TW9kdWxlIHtcclxufVxyXG5cclxuIl19