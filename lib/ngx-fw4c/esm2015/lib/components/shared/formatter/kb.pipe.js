/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/formatter/kb.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';
export class KbPipe extends DecimalPipe {
    /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    transform(value, digits, locale) {
        return `${super.transform(Math.round(value / 1024), '1.0')} KB`;
    }
}
KbPipe.decorators = [
    { type: Pipe, args: [{
                name: 'katanaKb'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2IucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2Zvcm1hdHRlci9rYi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTTlDLE1BQU0sT0FBTyxNQUFPLFNBQVEsV0FBVzs7Ozs7OztJQUNyQyxTQUFTLENBQUMsS0FBYSxFQUFFLE1BQWUsRUFBRSxNQUFlO1FBQ3ZELE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDbEUsQ0FBQzs7O1lBUEYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxVQUFVO2FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2thdGFuYUtiJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEtiUGlwZSBleHRlbmRzIERlY2ltYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIGRpZ2l0cz86IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gYCR7c3VwZXIudHJhbnNmb3JtKE1hdGgucm91bmQodmFsdWUgLyAxMDI0KSwgJzEuMCcpfSBLQmA7XHJcbiAgfVxyXG59XHJcbiJdfQ==