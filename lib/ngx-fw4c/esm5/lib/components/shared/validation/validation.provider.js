/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/validation/validation.provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
var ValidationProvider = /** @class */ (function () {
    function ValidationProvider() {
        var _this = this;
        this.required = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return of(_this.isRequired(value));
        });
        this.email = (/**
         * @param {?} email
         * @return {?}
         */
        function (email) {
            if (!email)
                return of(true);
            return of(_this.isValidEmail(email));
        });
        this.phone = (/**
         * @param {?} phone
         * @return {?}
         */
        function (phone) {
            if (!phone)
                return of(true);
            return of(_this.isValidPhone(phone));
        });
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    ValidationProvider.prototype.isRequired = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (typeof (value) === 'string') {
            /** @type {?} */
            var trimmedValue = (/** @type {?} */ (value.trim()));
            return trimmedValue != '' && trimmedValue != undefined && trimmedValue != null;
        }
        if (Array.isArray(value)) {
            return value.length > 0;
        }
        if (value)
            return true;
        return false;
    };
    /**
     * @private
     * @param {?} email
     * @return {?}
     */
    ValidationProvider.prototype.isValidEmail = /**
     * @private
     * @param {?} email
     * @return {?}
     */
    function (email) {
        if (!email)
            return true;
        /** @type {?} */
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    };
    /**
     * @private
     * @param {?} phone
     * @return {?}
     */
    ValidationProvider.prototype.isValidPhone = /**
     * @private
     * @param {?} phone
     * @return {?}
     */
    function (phone) {
        if (!phone)
            return true;
        return phone.length === 10;
    };
    ValidationProvider.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ValidationProvider.ctorParameters = function () { return []; };
    /** @nocollapse */ ValidationProvider.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ValidationProvider_Factory() { return new ValidationProvider(); }, token: ValidationProvider, providedIn: "root" });
    return ValidationProvider;
}());
export { ValidationProvider };
if (false) {
    /** @type {?} */
    ValidationProvider.prototype.required;
    /** @type {?} */
    ValidationProvider.prototype.email;
    /** @type {?} */
    ValidationProvider.prototype.phone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFdEM7SUFFRTtRQUFBLGlCQUFpQjtRQUVWLGFBQVE7Ozs7UUFBd0MsVUFBQyxLQUFVO1lBQ2hFLE9BQU8sRUFBRSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUE7UUFFTSxVQUFLOzs7O1FBQTJDLFVBQUMsS0FBYTtZQUNuRSxJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixPQUFPLEVBQUUsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFBO1FBRU0sVUFBSzs7OztRQUEyQyxVQUFDLEtBQWE7WUFDbkUsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsT0FBTyxFQUFFLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBQTtJQWRlLENBQUM7Ozs7OztJQWdCVCx1Q0FBVTs7Ozs7SUFBbEIsVUFBbUIsS0FBVTtRQUMzQixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLEVBQUU7O2dCQUN6QixZQUFZLEdBQUcsbUJBQVEsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFBO1lBQ3pDLE9BQU8sWUFBWSxJQUFJLEVBQUUsSUFBSSxZQUFZLElBQUksU0FBUyxJQUFJLFlBQVksSUFBSSxJQUFJLENBQUM7U0FDaEY7UUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUN6QjtRQUNELElBQUksS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRU8seUNBQVk7Ozs7O0lBQXBCLFVBQXFCLEtBQWE7UUFDaEMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLElBQUksQ0FBQzs7WUFDcEIsS0FBSyxHQUFHLCtEQUErRDtRQUMzRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRU8seUNBQVk7Ozs7O0lBQXBCLFVBQXFCLEtBQWE7UUFDaEMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLElBQUksQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7O2dCQXZDRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7Ozs2QkFIbEM7Q0EyQ0MsQUF4Q0QsSUF3Q0M7U0F2Q1ksa0JBQWtCOzs7SUFHN0Isc0NBRUM7O0lBRUQsbUNBR0M7O0lBRUQsbUNBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblByb3ZpZGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBwdWJsaWMgcmVxdWlyZWQ6ICh2YWx1ZTogYW55KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBvZih0aGlzLmlzUmVxdWlyZWQodmFsdWUpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBlbWFpbDogKGVtYWlsOiBzdHJpbmcpID0+IE9ic2VydmFibGU8Ym9vbGVhbj4gPSAoZW1haWw6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFlbWFpbCkgcmV0dXJuIG9mKHRydWUpO1xyXG4gICAgcmV0dXJuIG9mKHRoaXMuaXNWYWxpZEVtYWlsKGVtYWlsKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGhvbmU6IChwaG9uZTogc3RyaW5nKSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gKHBob25lOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICghcGhvbmUpIHJldHVybiBvZih0cnVlKTtcclxuICAgIHJldHVybiBvZih0aGlzLmlzVmFsaWRQaG9uZShwaG9uZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1JlcXVpcmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICh0eXBlb2YgKHZhbHVlKSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgY29uc3QgdHJpbW1lZFZhbHVlID0gPHN0cmluZz52YWx1ZS50cmltKCk7XHJcbiAgICAgIHJldHVybiB0cmltbWVkVmFsdWUgIT0gJycgJiYgdHJpbW1lZFZhbHVlICE9IHVuZGVmaW5lZCAmJiB0cmltbWVkVmFsdWUgIT0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZSkgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVmFsaWRFbWFpbChlbWFpbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWVtYWlsKSByZXR1cm4gdHJ1ZTtcclxuICAgIHZhciByZWdleCA9IC9eKFthLXpBLVowLTlfListXSkrXFxAKChbYS16QS1aMC05LV0pK1xcLikrKFthLXpBLVowLTldezIsNH0pKyQvO1xyXG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoZW1haWwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZhbGlkUGhvbmUocGhvbmU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFwaG9uZSkgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gcGhvbmUubGVuZ3RoID09PSAxMDtcclxuICB9XHJcbn0iXX0=