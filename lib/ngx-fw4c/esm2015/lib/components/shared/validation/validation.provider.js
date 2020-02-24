/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/validation/validation.provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
export class ValidationProvider {
    constructor() {
        this.required = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            return of(this.isRequired(value));
        });
        this.email = (/**
         * @param {?} email
         * @return {?}
         */
        (email) => {
            if (!email)
                return of(true);
            return of(this.isValidEmail(email));
        });
        this.phone = (/**
         * @param {?} phone
         * @return {?}
         */
        (phone) => {
            if (!phone)
                return of(true);
            return of(this.isValidPhone(phone));
        });
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isRequired(value) {
        if (typeof (value) === 'string') {
            /** @type {?} */
            const trimmedValue = (/** @type {?} */ (value.trim()));
            return trimmedValue != '' && trimmedValue != undefined && trimmedValue != null;
        }
        if (Array.isArray(value)) {
            return value.length > 0;
        }
        if (value)
            return true;
        return false;
    }
    /**
     * @private
     * @param {?} email
     * @return {?}
     */
    isValidEmail(email) {
        if (!email)
            return true;
        /** @type {?} */
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    /**
     * @private
     * @param {?} phone
     * @return {?}
     */
    isValidPhone(phone) {
        if (!phone)
            return true;
        return phone.length === 10;
    }
}
ValidationProvider.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ValidationProvider.ctorParameters = () => [];
/** @nocollapse */ ValidationProvider.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ValidationProvider_Factory() { return new ValidationProvider(); }, token: ValidationProvider, providedIn: "root" });
if (false) {
    /** @type {?} */
    ValidationProvider.prototype.required;
    /** @type {?} */
    ValidationProvider.prototype.email;
    /** @type {?} */
    ValidationProvider.prototype.phone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHdEMsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QjtRQUVPLGFBQVE7Ozs7UUFBd0MsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUNwRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUFBO1FBRU0sVUFBSzs7OztRQUEyQyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDLEVBQUE7UUFFTSxVQUFLOzs7O1FBQTJDLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDdkUsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBQTtJQWRlLENBQUM7Ozs7OztJQWdCVCxVQUFVLENBQUMsS0FBVTtRQUMzQixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLEVBQUU7O2tCQUN6QixZQUFZLEdBQUcsbUJBQVEsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFBO1lBQ3pDLE9BQU8sWUFBWSxJQUFJLEVBQUUsSUFBSSxZQUFZLElBQUksU0FBUyxJQUFJLFlBQVksSUFBSSxJQUFJLENBQUM7U0FDaEY7UUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUN6QjtRQUNELElBQUksS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLElBQUksQ0FBQzs7WUFDcEIsS0FBSyxHQUFHLCtEQUErRDtRQUMzRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLElBQUksQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7OztZQXZDRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7Ozs7O0lBSWhDLHNDQUVDOztJQUVELG1DQUdDOztJQUVELG1DQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25Qcm92aWRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgcHVibGljIHJlcXVpcmVkOiAodmFsdWU6IGFueSkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPiA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gb2YodGhpcy5pc1JlcXVpcmVkKHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZW1haWw6IChlbWFpbDogc3RyaW5nKSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gKGVtYWlsOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICghZW1haWwpIHJldHVybiBvZih0cnVlKTtcclxuICAgIHJldHVybiBvZih0aGlzLmlzVmFsaWRFbWFpbChlbWFpbCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBob25lOiAocGhvbmU6IHN0cmluZykgPT4gT2JzZXJ2YWJsZTxib29sZWFuPiA9IChwaG9uZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIXBob25lKSByZXR1cm4gb2YodHJ1ZSk7XHJcbiAgICByZXR1cm4gb2YodGhpcy5pc1ZhbGlkUGhvbmUocGhvbmUpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNSZXF1aXJlZCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodHlwZW9mICh2YWx1ZSkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGNvbnN0IHRyaW1tZWRWYWx1ZSA9IDxzdHJpbmc+dmFsdWUudHJpbSgpO1xyXG4gICAgICByZXR1cm4gdHJpbW1lZFZhbHVlICE9ICcnICYmIHRyaW1tZWRWYWx1ZSAhPSB1bmRlZmluZWQgJiYgdHJpbW1lZFZhbHVlICE9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZhbGlkRW1haWwoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFlbWFpbCkgcmV0dXJuIHRydWU7XHJcbiAgICB2YXIgcmVnZXggPSAvXihbYS16QS1aMC05Xy4rLV0pK1xcQCgoW2EtekEtWjAtOS1dKStcXC4pKyhbYS16QS1aMC05XXsyLDR9KSskLztcclxuICAgIHJldHVybiByZWdleC50ZXN0KGVtYWlsKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNWYWxpZFBob25lKHBob25lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghcGhvbmUpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIHBob25lLmxlbmd0aCA9PT0gMTA7XHJcbiAgfVxyXG59Il19