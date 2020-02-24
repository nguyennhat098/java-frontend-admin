/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/formatter/file.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';
var FilePipe = /** @class */ (function (_super) {
    tslib_1.__extends(FilePipe, _super);
    function FilePipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    FilePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    function (value, digits, locale) {
        if (!value)
            return '';
        /** @type {?} */
        var name = value.toString();
        /** @type {?} */
        var data = name.split('.');
        if (data.length == 1)
            return "" + data[0];
        /** @type {?} */
        var index = name.indexOf(data[data.length - 1]);
        return name.substring(0, index - 1) + " " + data[data.length - 1];
    };
    FilePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'katanaFile'
                },] }
    ];
    return FilePipe;
}(DecimalPipe));
export { FilePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvZm9ybWF0dGVyL2ZpbGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFOUM7SUFJOEIsb0NBQVc7SUFKekM7O0lBYUEsQ0FBQzs7Ozs7OztJQVJDLDRCQUFTOzs7Ozs7SUFBVCxVQUFVLEtBQWEsRUFBRSxNQUFlLEVBQUUsTUFBZTtRQUN2RCxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sRUFBRSxDQUFDOztZQUNsQixJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRTs7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTyxLQUFHLElBQUksQ0FBQyxDQUFDLENBQUcsQ0FBQzs7WUFDdEMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0MsT0FBVSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFNBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFHLENBQUM7SUFDcEUsQ0FBQzs7Z0JBWkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxZQUFZO2lCQUNuQjs7SUFXRCxlQUFDO0NBQUEsQUFiRCxDQUk4QixXQUFXLEdBU3hDO1NBVFksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdrYXRhbmFGaWxlJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVQaXBlIGV4dGVuZHMgRGVjaW1hbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgZGlnaXRzPzogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIGlmICghdmFsdWUpIHJldHVybiAnJztcclxuICAgIHZhciBuYW1lID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgIHZhciBkYXRhID0gbmFtZS5zcGxpdCgnLicpO1xyXG4gICAgaWYgKGRhdGEubGVuZ3RoID09IDEpIHJldHVybiBgJHtkYXRhWzBdfWA7XHJcbiAgICB2YXIgaW5kZXggPSBuYW1lLmluZGV4T2YoZGF0YVtkYXRhLmxlbmd0aCAtIDFdKTtcclxuICAgIHJldHVybiBgJHtuYW1lLnN1YnN0cmluZygwLCBpbmRleCAtIDEpfSAke2RhdGFbZGF0YS5sZW5ndGggLSAxXX1gO1xyXG4gIH1cclxufVxyXG4iXX0=