/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/loader/html.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
var HtmlPipe = /** @class */ (function () {
    function HtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    HtmlPipe.prototype.transform = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    HtmlPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'html'
                },] }
    ];
    /** @nocollapse */
    HtmlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return HtmlPipe;
}());
export { HtmlPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HtmlPipe.prototype._sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvbG9hZGVyL2h0bWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUVuRTtJQUlFLGtCQUFvQixVQUF3QjtRQUF4QixlQUFVLEdBQVYsVUFBVSxDQUFjO0lBQzVDLENBQUM7Ozs7O0lBRU0sNEJBQVM7Ozs7SUFBaEIsVUFBaUIsQ0FBUztRQUN4QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Z0JBVEYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxNQUFNO2lCQUNiOzs7O2dCQUpRLFlBQVk7O0lBWXJCLGVBQUM7Q0FBQSxBQVZELElBVUM7U0FQWSxRQUFROzs7Ozs7SUFDUCw4QkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdodG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSHRtbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRyYW5zZm9ybSh2OiBzdHJpbmcpOiBTYWZlSHRtbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHYpO1xyXG4gIH1cclxufSJdfQ==