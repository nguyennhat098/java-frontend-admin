/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/formatter/currency.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';
var CurrencyPipe = /** @class */ (function (_super) {
    tslib_1.__extends(CurrencyPipe, _super);
    function CurrencyPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    CurrencyPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    function (value, digits, locale) {
        return _super.prototype.transform.call(this, value, '1.0') + " VN\u0110";
    };
    CurrencyPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'katanaCurrency'
                },] }
    ];
    return CurrencyPipe;
}(DecimalPipe));
export { CurrencyPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2Zvcm1hdHRlci9jdXJyZW5jeS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU5QztJQUlrQyx3Q0FBVztJQUo3Qzs7SUFRQSxDQUFDOzs7Ozs7O0lBSEMsZ0NBQVM7Ozs7OztJQUFULFVBQVUsS0FBVSxFQUFFLE1BQWUsRUFBRSxNQUFlO1FBQ3BELE9BQVUsaUJBQU0sU0FBUyxZQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsY0FBTSxDQUFDO0lBQ2hELENBQUM7O2dCQVBGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsZ0JBQWdCO2lCQUN2Qjs7SUFNRCxtQkFBQztDQUFBLEFBUkQsQ0FJa0MsV0FBVyxHQUk1QztTQUpZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAna2F0YW5hQ3VycmVuY3knXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lQaXBlIGV4dGVuZHMgRGVjaW1hbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgZGlnaXRzPzogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIHJldHVybiBgJHtzdXBlci50cmFuc2Zvcm0odmFsdWUsICcxLjAnKX0gVk7EkGA7XHJcbiAgfVxyXG59XHJcbiJdfQ==