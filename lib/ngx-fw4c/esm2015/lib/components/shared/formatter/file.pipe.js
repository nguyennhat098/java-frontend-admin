/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/formatter/file.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';
export class FilePipe extends DecimalPipe {
    /**
     * @param {?} value
     * @param {?=} digits
     * @param {?=} locale
     * @return {?}
     */
    transform(value, digits, locale) {
        if (!value)
            return '';
        /** @type {?} */
        var name = value.toString();
        /** @type {?} */
        var data = name.split('.');
        if (data.length == 1)
            return `${data[0]}`;
        /** @type {?} */
        var index = name.indexOf(data[data.length - 1]);
        return `${name.substring(0, index - 1)} ${data[data.length - 1]}`;
    }
}
FilePipe.decorators = [
    { type: Pipe, args: [{
                name: 'katanaFile'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvZm9ybWF0dGVyL2ZpbGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU05QyxNQUFNLE9BQU8sUUFBUyxTQUFRLFdBQVc7Ozs7Ozs7SUFDdkMsU0FBUyxDQUFDLEtBQWEsRUFBRSxNQUFlLEVBQUUsTUFBZTtRQUN2RCxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sRUFBRSxDQUFDOztZQUNsQixJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRTs7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztZQUN0QyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDcEUsQ0FBQzs7O1lBWkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxZQUFZO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2thdGFuYUZpbGUnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVBpcGUgZXh0ZW5kcyBEZWNpbWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBkaWdpdHM/OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xyXG4gICAgdmFyIG5hbWUgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgdmFyIGRhdGEgPSBuYW1lLnNwbGl0KCcuJyk7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPT0gMSkgcmV0dXJuIGAke2RhdGFbMF19YDtcclxuICAgIHZhciBpbmRleCA9IG5hbWUuaW5kZXhPZihkYXRhW2RhdGEubGVuZ3RoIC0gMV0pO1xyXG4gICAgcmV0dXJuIGAke25hbWUuc3Vic3RyaW5nKDAsIGluZGV4IC0gMSl9ICR7ZGF0YVtkYXRhLmxlbmd0aCAtIDFdfWA7XHJcbiAgfVxyXG59XHJcbiJdfQ==