/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/validation/validation.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function IValidation() { }
if (false) {
    /**
     * @return {?}
     */
    IValidation.prototype.callback = function () { };
    /**
     * @return {?}
     */
    IValidation.prototype.getErrors = function () { };
}
export class SummaryError {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    SummaryError.prototype.element;
    /** @type {?} */
    SummaryError.prototype.messages;
}
export class ValidationRuleResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ValidationRuleResponse.prototype.status;
    /** @type {?} */
    ValidationRuleResponse.prototype.message;
}
/**
 * @abstract
 */
export class ValidationRule {
    /**
     * @param {?=} overridenErrorMessage
     */
    constructor(overridenErrorMessage) {
        this.errorMessage = overridenErrorMessage;
    }
}
if (false) {
    /** @type {?} */
    ValidationRule.prototype.key;
    /** @type {?} */
    ValidationRule.prototype.execute;
    /** @type {?} */
    ValidationRule.prototype.errorMessage;
    /** @type {?} */
    ValidationRule.prototype.id;
    /** @type {?} */
    ValidationRule.prototype.isValid;
    /** @type {?} */
    ValidationRule.prototype.required;
}
export class RequiredValidationRule extends ValidationRule {
    /**
     * @param {?=} overridenErrorMessage
     */
    constructor(overridenErrorMessage) {
        super(overridenErrorMessage);
        this.key = ValidationConstant.Required;
    }
}
export class EmailValidationRule extends ValidationRule {
    /**
     * @param {?=} overridenErrorMessage
     */
    constructor(overridenErrorMessage) {
        super(overridenErrorMessage);
        this.key = ValidationConstant.Email;
    }
}
export class PhoneValidationRule extends ValidationRule {
    /**
     * @param {?=} overridenErrorMessage
     */
    constructor(overridenErrorMessage) {
        super(overridenErrorMessage);
        this.key = ValidationConstant.Phone;
    }
}
export class CustomValidationRule extends ValidationRule {
    /**
     * @param {?} execute
     * @param {?=} required
     * @param {?=} overridenErrorMessage
     * @param {?=} isValid
     */
    constructor(execute, required, overridenErrorMessage, isValid) {
        super(overridenErrorMessage);
        this.execute = execute;
        this.key = ValidationConstant.Custom;
        this.isValid = isValid;
        this.required = required;
    }
}
export class ValidationOption {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.rules = [];
        this.dirtyCheck = true;
        this.errorMessageClass = ValidationConstant.ErrorMessageClass;
        this.errorElementClass = ValidationConstant.ErrorElementClass;
        this.successElementClass = ValidationConstant.SuccessElementClass;
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ValidationOption.prototype.validationName;
    /** @type {?} */
    ValidationOption.prototype.rules;
    /** @type {?} */
    ValidationOption.prototype.valueResolver;
    /** @type {?} */
    ValidationOption.prototype.itemRef;
    /** @type {?} */
    ValidationOption.prototype.displayText;
    /** @type {?} */
    ValidationOption.prototype.validationId;
    /** @type {?} */
    ValidationOption.prototype.payloadRef;
    /** @type {?} */
    ValidationOption.prototype.relevantFields;
    /** @type {?} */
    ValidationOption.prototype.dynamic;
    /** @type {?} */
    ValidationOption.prototype.dirtyCheck;
    /** @type {?} */
    ValidationOption.prototype.scope;
    /** @type {?} */
    ValidationOption.prototype.errorTargetId;
    /** @type {?} */
    ValidationOption.prototype.errorMessageClass;
    /** @type {?} */
    ValidationOption.prototype.errorElementClass;
    /** @type {?} */
    ValidationOption.prototype.successElementClass;
}
export class ClientValidator {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.options = [];
        this.relatedValidationProviders = [];
        this.requiredMessage = ValidationConstant.requiredMessage;
        this.invalidMessage = ValidationConstant.invalidMessage;
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ClientValidator.prototype.formRef;
    /** @type {?} */
    ClientValidator.prototype.options;
    /** @type {?} */
    ClientValidator.prototype.payloadRef;
    /** @type {?} */
    ClientValidator.prototype.scope;
    /** @type {?} */
    ClientValidator.prototype.relatedValidationProviders;
    /** @type {?} */
    ClientValidator.prototype.requiredMessage;
    /** @type {?} */
    ClientValidator.prototype.invalidMessage;
}
export class ChangedItem {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.change = false;
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ChangedItem.prototype.id;
    /** @type {?} */
    ChangedItem.prototype.oldValue;
    /** @type {?} */
    ChangedItem.prototype.value;
    /** @type {?} */
    ChangedItem.prototype.field;
    /** @type {?} */
    ChangedItem.prototype.change;
}
export class ValidationConstant {
}
ValidationConstant.Required = 'Required';
ValidationConstant.Email = 'Email';
ValidationConstant.Phone = 'Phone';
ValidationConstant.Custom = 'Custom';
ValidationConstant.ErrorMessage = 'Không hợp lệ vui lòng thử lại.';
ValidationConstant.ErrorElementClass = 'ng-invalid';
ValidationConstant.SuccessElementClass = 'ng-valid';
ValidationConstant.ErrorMessageClass = 'text-danger';
ValidationConstant.DefaultErrorStyles = 'padding:0;list-style:none;font-weight:400;font-size:13px; width: 100%';
ValidationConstant.DefaultErrorClass = 'validation-error';
ValidationConstant.AttributeName = 'validation-name';
ValidationConstant.AttributeOptionName = 'dynamic-option';
ValidationConstant.AttributeDynamicName = 'dynamic-validation';
ValidationConstant.ErrorTargetId = 'error-target-id';
ValidationConstant.DynamicErrorAttribute = 'dynamic-error-attribute';
ValidationConstant.ERROR_ELEMENT_ID = 'error-element-id';
ValidationConstant.ERROR_ITEM_ELEMENT_ID = 'error-item-element-id';
ValidationConstant.VALIDATION_ID = 'validation-id';
ValidationConstant.ARRAY_SEQUENCE_ID = 'array-sequence-id';
ValidationConstant.requiredMessage = 'là bắt buộc';
ValidationConstant.invalidMessage = 'không hợp lệ';
if (false) {
    /** @type {?} */
    ValidationConstant.Required;
    /** @type {?} */
    ValidationConstant.Email;
    /** @type {?} */
    ValidationConstant.Phone;
    /** @type {?} */
    ValidationConstant.Custom;
    /** @type {?} */
    ValidationConstant.ErrorMessage;
    /** @type {?} */
    ValidationConstant.ErrorElementClass;
    /** @type {?} */
    ValidationConstant.SuccessElementClass;
    /** @type {?} */
    ValidationConstant.ErrorMessageClass;
    /** @type {?} */
    ValidationConstant.DefaultErrorStyles;
    /** @type {?} */
    ValidationConstant.DefaultErrorClass;
    /** @type {?} */
    ValidationConstant.AttributeName;
    /** @type {?} */
    ValidationConstant.AttributeOptionName;
    /** @type {?} */
    ValidationConstant.AttributeDynamicName;
    /** @type {?} */
    ValidationConstant.ErrorTargetId;
    /** @type {?} */
    ValidationConstant.DynamicErrorAttribute;
    /** @type {?} */
    ValidationConstant.ERROR_ELEMENT_ID;
    /** @type {?} */
    ValidationConstant.ERROR_ITEM_ELEMENT_ID;
    /** @type {?} */
    ValidationConstant.VALIDATION_ID;
    /** @type {?} */
    ValidationConstant.ARRAY_SEQUENCE_ID;
    /** @type {?} */
    ValidationConstant.requiredMessage;
    /** @type {?} */
    ValidationConstant.invalidMessage;
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLGlDQUdDOzs7OztJQUZHLGlEQUE0Qjs7OztJQUM1QixrREFBd0M7O0FBRzVDLE1BQU0sT0FBTyxZQUFZOzs7O0lBR3JCLFlBQVksSUFBNEI7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKOzs7SUFMRywrQkFBb0I7O0lBQ3BCLGdDQUFtQjs7QUFNdkIsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUcvQixZQUFZLElBQXNDO1FBQzlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjs7O0lBTEcsd0NBQWlCOztJQUNqQix5Q0FBaUI7Ozs7O0FBTXJCLE1BQU0sT0FBZ0IsY0FBYzs7OztJQU9oQyxZQUFZLHFCQUFvRTtRQUU1RSxJQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFxQixDQUFDO0lBQzlDLENBQUM7Q0FDSjs7O0lBVkcsNkJBQVk7O0lBQ1osaUNBQStGOztJQUMvRixzQ0FBMkQ7O0lBQzNELDRCQUFZOztJQUNaLGlDQUFrQjs7SUFDbEIsa0NBQW1COztBQU92QixNQUFNLE9BQU8sc0JBQXVCLFNBQVEsY0FBYzs7OztJQUN0RCxZQUNJLHFCQUFvRTtRQUVwRSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztJQUMzQyxDQUFDO0NBQ0o7QUFFRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsY0FBYzs7OztJQUNuRCxZQUFZLHFCQUFvRTtRQUU1RSxLQUFLLENBQUMscUJBQXFCLENB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QyxxQ0FBa0IsR0FBVyx1RUFBdUUsQ0FBQztBQUNyRyxvQ0FBaUIsR0FBVyxrQkFBa0IsQ0FBQztBQUMvQyxnQ0FBYSxHQUFXLGlCQUFpQixDQUFDO0FBQzFDLHNDQUFtQixHQUFXLGdCQUFnQixDQUFDO0FBQy9DLHVDQUFvQixHQUFXLG9CQUFvQixDQUFDO0FBQ3BELGdDQUFhLEdBQVcsaUJBQWlCLENBQUM7QUFDMUMsd0NBQXFCLEdBQVcseUJBQXlCLENBQUM7QUFDMUQsbUNBQWdCLEdBQUcsa0JBQWtCLENBQUM7QUFDdEMsd0NBQXFCLEdBQUcsdUJBQXVCLENBQUM7QUFDaEQsZ0NBQWEsR0FBRyxlQUFlLENBQUM7QUFDaEMsb0NBQWlCLEdBQUcsbUJBQW1CLENBQUM7QUFDeEMsa0NBQWUsR0FBVyxhQUFhLENBQUM7QUFDeEMsaUNBQWMsR0FBVyxjQUFjLENBQUM7OztJQXBCdEQsNEJBQTRDOztJQUM1Qyx5QkFBc0M7O0lBQ3RDLHlCQUFzQzs7SUFDdEMsMEJBQXdDOztJQUN4QyxnQ0FBc0U7O0lBQ3RFLHFDQUF1RDs7SUFDdkQsdUNBQXVEOztJQUN2RCxxQ0FBd0Q7O0lBQ3hELHNDQUFtSDs7SUFDbkgscUNBQTZEOztJQUM3RCxpQ0FBd0Q7O0lBQ3hELHVDQUE2RDs7SUFDN0Qsd0NBQWtFOztJQUNsRSxpQ0FBd0Q7O0lBQ3hELHlDQUF3RTs7SUFDeEUsb0NBQW9EOztJQUNwRCx5Q0FBOEQ7O0lBQzlELGlDQUE4Qzs7SUFDOUMscUNBQXNEOztJQUN0RCxtQ0FBc0Q7O0lBQ3RELGtDQUFzRDs7QUFDekQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uU2VydmljZSB9IGZyb20gJy4vdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZhbGlkYXRpb24ge1xyXG4gICAgY2FsbGJhY2soKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgZ2V0RXJyb3JzKCk6IE9ic2VydmFibGU8U3VtbWFyeUVycm9yW10+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3VtbWFyeUVycm9yIHtcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgICBtZXNzYWdlczogc3RyaW5nW107XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxTdW1tYXJ5RXJyb3I+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25SdWxlUmVzcG9uc2Uge1xyXG4gICAgc3RhdHVzPzogYm9vbGVhbjtcclxuICAgIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxWYWxpZGF0aW9uUnVsZVJlc3BvbnNlPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWYWxpZGF0aW9uUnVsZSB7XHJcbiAgICBrZXk6IHN0cmluZztcclxuICAgIGV4ZWN1dGU6ICh2YWx1ZT86IGFueSwgcGF5bG9hZD86IGFueSwgcm93SW5kZXg/OiBudW1iZXIpID0+IE9ic2VydmFibGU8VmFsaWRhdGlvblJ1bGVSZXNwb25zZT47XHJcbiAgICBlcnJvck1lc3NhZ2U6IChlbGVtZW50PzogYW55LCByb3dJbmRleD86IHN0cmluZykgPT4gc3RyaW5nO1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBpc1ZhbGlkPzogYm9vbGVhbjtcclxuICAgIHJlcXVpcmVkPzogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKG92ZXJyaWRlbkVycm9yTWVzc2FnZT86IChlbGVtZW50PzogYW55LCByb3dJbmRleD86IHN0cmluZykgPT4gc3RyaW5nXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IG92ZXJyaWRlbkVycm9yTWVzc2FnZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlcXVpcmVkVmFsaWRhdGlvblJ1bGUgZXh0ZW5kcyBWYWxpZGF0aW9uUnVsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBvdmVycmlkZW5FcnJvck1lc3NhZ2U/OiAoZWxlbWVudD86IGFueSwgcm93SW5kZXg/OiBzdHJpbmcpID0+IHN0cmluZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIob3ZlcnJpZGVuRXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmtleSA9IFZhbGlkYXRpb25Db25zdGFudC5SZXF1aXJlZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVtYWlsVmFsaWRhdGlvblJ1bGUgZXh0ZW5kcyBWYWxpZGF0aW9uUnVsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvdmVycmlkZW5FcnJvck1lc3NhZ2U/OiAoZWxlbWVudD86IGFueSwgcm93SW5kZXg/OiBzdHJpbmcpID0+IHN0cmluZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIob3ZlcnJpZGVuRXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmtleSA9IFZhbGlkYXRpb25Db25zdGFudC5FbWFpbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBob25lVmFsaWRhdGlvblJ1bGUgZXh0ZW5kcyBWYWxpZGF0aW9uUnVsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvdmVycmlkZW5FcnJvck1lc3NhZ2U/OiAoZWxlbWVudD86IGFueSwgcm93SW5kZXg/OiBzdHJpbmcpID0+IHN0cmluZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIob3ZlcnJpZGVuRXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmtleSA9IFZhbGlkYXRpb25Db25zdGFudC5QaG9uZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbVZhbGlkYXRpb25SdWxlIGV4dGVuZHMgVmFsaWRhdGlvblJ1bGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZXhlY3V0ZTogKHZhbHVlPzogYW55LCBwYXlsb2FkPzogYW55LCByb3dJbmRleD86IG51bWJlcikgPT4gT2JzZXJ2YWJsZTxWYWxpZGF0aW9uUnVsZVJlc3BvbnNlPixcclxuICAgICAgICByZXF1aXJlZD86IGJvb2xlYW4sXHJcbiAgICAgICAgb3ZlcnJpZGVuRXJyb3JNZXNzYWdlPzogKGVsZW1lbnQ/OiBhbnksIHJvd0luZGV4Pzogc3RyaW5nKSA9PiBzdHJpbmcsXHJcbiAgICAgICAgaXNWYWxpZD86IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKG92ZXJyaWRlbkVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5leGVjdXRlID0gZXhlY3V0ZTtcclxuICAgICAgICB0aGlzLmtleSA9IFZhbGlkYXRpb25Db25zdGFudC5DdXN0b207XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gaXNWYWxpZDtcclxuICAgICAgICB0aGlzLnJlcXVpcmVkID0gcmVxdWlyZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uT3B0aW9uIHtcclxuICAgIHZhbGlkYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgICBydWxlczogVmFsaWRhdGlvblJ1bGVbXSA9IFtdO1xyXG4gICAgdmFsdWVSZXNvbHZlcjogKGl0ZW06IGFueSwgcGF5bG9hZDogYW55LCByb3dJbmRleD86IG51bWJlcikgPT4gYW55IHwgYW55W107XHJcbiAgICBpdGVtUmVmPzogYW55O1xyXG4gICAgZGlzcGxheVRleHQ/OiBzdHJpbmc7XHJcbiAgICB2YWxpZGF0aW9uSWQ/OiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkUmVmPzogKCkgPT4gYW55O1xyXG4gICAgcmVsZXZhbnRGaWVsZHM/OiAocGF5bG9hZDogYW55KSA9PiBzdHJpbmdbXTtcclxuICAgIGR5bmFtaWM/OiBib29sZWFuO1xyXG4gICAgZGlydHlDaGVjazogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBzY29wZT86IHN0cmluZztcclxuICAgIGVycm9yVGFyZ2V0SWQ/OiBzdHJpbmc7XHJcbiAgICBlcnJvck1lc3NhZ2VDbGFzcz86IHN0cmluZyA9IFZhbGlkYXRpb25Db25zdGFudC5FcnJvck1lc3NhZ2VDbGFzcztcclxuICAgIGVycm9yRWxlbWVudENsYXNzPzogc3RyaW5nID0gVmFsaWRhdGlvbkNvbnN0YW50LkVycm9yRWxlbWVudENsYXNzO1xyXG4gICAgc3VjY2Vzc0VsZW1lbnRDbGFzcz86IHN0cmluZyA9IFZhbGlkYXRpb25Db25zdGFudC5TdWNjZXNzRWxlbWVudENsYXNzO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8VmFsaWRhdGlvbk9wdGlvbj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xpZW50VmFsaWRhdG9yIHtcclxuICAgIGZvcm1SZWY6IEVsZW1lbnRSZWY7XHJcbiAgICBvcHRpb25zOiBWYWxpZGF0aW9uT3B0aW9uW10gPSBbXTtcclxuICAgIHBheWxvYWRSZWY/OiAoKSA9PiBhbnk7XHJcbiAgICBzY29wZT86IHN0cmluZztcclxuICAgIHJlbGF0ZWRWYWxpZGF0aW9uUHJvdmlkZXJzPzogVmFsaWRhdGlvblNlcnZpY2VbXSA9IFtdO1xyXG4gICAgcmVxdWlyZWRNZXNzYWdlOiBzdHJpbmcgPSBWYWxpZGF0aW9uQ29uc3RhbnQucmVxdWlyZWRNZXNzYWdlO1xyXG4gICAgaW52YWxpZE1lc3NhZ2U6IHN0cmluZyA9IFZhbGlkYXRpb25Db25zdGFudC5pbnZhbGlkTWVzc2FnZTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPENsaWVudFZhbGlkYXRvcj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlZEl0ZW0ge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBvbGRWYWx1ZT86IGFueTtcclxuICAgIHZhbHVlPzogYW55O1xyXG4gICAgZmllbGQ/OiBzdHJpbmc7XHJcbiAgICBjaGFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPENoYW5nZWRJdGVtPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uQ29uc3RhbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyBSZXF1aXJlZDogc3RyaW5nID0gJ1JlcXVpcmVkJztcclxuICAgIHB1YmxpYyBzdGF0aWMgRW1haWw6IHN0cmluZyA9ICdFbWFpbCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFBob25lOiBzdHJpbmcgPSAnUGhvbmUnO1xyXG4gICAgcHVibGljIHN0YXRpYyBDdXN0b206IHN0cmluZyA9ICdDdXN0b20nO1xyXG4gICAgcHVibGljIHN0YXRpYyBFcnJvck1lc3NhZ2U6IHN0cmluZyA9ICdLaMO0bmcgaOG7o3AgbOG7hyB2dWkgbMOybmcgdGjhu60gbOG6oWkuJztcclxuICAgIHB1YmxpYyBzdGF0aWMgRXJyb3JFbGVtZW50Q2xhc3M6IHN0cmluZyA9ICduZy1pbnZhbGlkJztcclxuICAgIHB1YmxpYyBzdGF0aWMgU3VjY2Vzc0VsZW1lbnRDbGFzczogc3RyaW5nID0gJ25nLXZhbGlkJztcclxuICAgIHB1YmxpYyBzdGF0aWMgRXJyb3JNZXNzYWdlQ2xhc3M6IHN0cmluZyA9ICd0ZXh0LWRhbmdlcic7XHJcbiAgICBwdWJsaWMgc3RhdGljIERlZmF1bHRFcnJvclN0eWxlczogc3RyaW5nID0gJ3BhZGRpbmc6MDtsaXN0LXN0eWxlOm5vbmU7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToxM3B4OyB3aWR0aDogMTAwJSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIERlZmF1bHRFcnJvckNsYXNzOiBzdHJpbmcgPSAndmFsaWRhdGlvbi1lcnJvcic7XHJcbiAgICBwdWJsaWMgc3RhdGljIEF0dHJpYnV0ZU5hbWU6IHN0cmluZyA9ICd2YWxpZGF0aW9uLW5hbWUnO1xyXG4gICAgcHVibGljIHN0YXRpYyBBdHRyaWJ1dGVPcHRpb25OYW1lOiBzdHJpbmcgPSAnZHluYW1pYy1vcHRpb24nO1xyXG4gICAgcHVibGljIHN0YXRpYyBBdHRyaWJ1dGVEeW5hbWljTmFtZTogc3RyaW5nID0gJ2R5bmFtaWMtdmFsaWRhdGlvbic7XHJcbiAgICBwdWJsaWMgc3RhdGljIEVycm9yVGFyZ2V0SWQ6IHN0cmluZyA9ICdlcnJvci10YXJnZXQtaWQnO1xyXG4gICAgcHVibGljIHN0YXRpYyBEeW5hbWljRXJyb3JBdHRyaWJ1dGU6IHN0cmluZyA9ICdkeW5hbWljLWVycm9yLWF0dHJpYnV0ZSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEVSUk9SX0VMRU1FTlRfSUQgPSAnZXJyb3ItZWxlbWVudC1pZCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEVSUk9SX0lURU1fRUxFTUVOVF9JRCA9ICdlcnJvci1pdGVtLWVsZW1lbnQtaWQnO1xyXG4gICAgcHVibGljIHN0YXRpYyBWQUxJREFUSU9OX0lEID0gJ3ZhbGlkYXRpb24taWQnO1xyXG4gICAgcHVibGljIHN0YXRpYyBBUlJBWV9TRVFVRU5DRV9JRCA9ICdhcnJheS1zZXF1ZW5jZS1pZCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlcXVpcmVkTWVzc2FnZTogc3RyaW5nID0gJ2zDoCBi4bqvdCBideG7mWMnO1xyXG4gICAgcHVibGljIHN0YXRpYyBpbnZhbGlkTWVzc2FnZTogc3RyaW5nID0gJ2tow7RuZyBo4bujcCBs4buHJztcclxufTtcclxuIl19