/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/formatter/kb.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';
var KbPipe = /** @class */ (function (_super) {
    tslib_1.__extends(KbPipe, _super);
    function KbPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    KbPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    function (value, digits, locale) {
        return _super.prototype.transform.call(this, Math.round(value / 1024), '1.0') + " KB";
    };
    KbPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'katanaKb'
                },] }
    ];
    return KbPipe;
}(DecimalPipe));
export { KbPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2IucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2Zvcm1hdHRlci9rYi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU5QztJQUk0QixrQ0FBVztJQUp2Qzs7SUFRQSxDQUFDOzs7Ozs7O0lBSEMsMEJBQVM7Ozs7OztJQUFULFVBQVUsS0FBYSxFQUFFLE1BQWUsRUFBRSxNQUFlO1FBQ3ZELE9BQVUsaUJBQU0sU0FBUyxZQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFLLENBQUM7SUFDbEUsQ0FBQzs7Z0JBUEYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxVQUFVO2lCQUNqQjs7SUFNRCxhQUFDO0NBQUEsQUFSRCxDQUk0QixXQUFXLEdBSXRDO1NBSlksTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdrYXRhbmFLYidcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBLYlBpcGUgZXh0ZW5kcyBEZWNpbWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBkaWdpdHM/OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGAke3N1cGVyLnRyYW5zZm9ybShNYXRoLnJvdW5kKHZhbHVlIC8gMTAyNCksICcxLjAnKX0gS0JgO1xyXG4gIH1cclxufVxyXG4iXX0=