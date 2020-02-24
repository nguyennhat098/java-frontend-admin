/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/formatter/safe.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SafePipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    SafePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'katanaSafe'
                },] }
    ];
    /** @nocollapse */
    SafePipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return SafePipe;
}());
export { SafePipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SafePipe.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvZm9ybWF0dGVyL3NhZmUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RDtJQUtJLGtCQUNZLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDL0IsQ0FBQzs7Ozs7SUFFTCw0QkFBUzs7OztJQUFULFVBQVUsS0FBVTtRQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBWEosSUFBSSxTQUFDO29CQUNGLElBQUksRUFBRSxZQUFZO2lCQUNyQjs7OztnQkFKUSxZQUFZOztJQWNyQixlQUFDO0NBQUEsQUFaRCxJQVlDO1NBUlksUUFBUTs7Ozs7O0lBRWIsNkJBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdrYXRhbmFTYWZlJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhZmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iXX0=