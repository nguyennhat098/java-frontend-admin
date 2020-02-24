/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/services/base-notification.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @abstract
 */
var BaseNotificationService = /** @class */ (function () {
    function BaseNotificationService() {
    }
    BaseNotificationService.decorators = [
        { type: Injectable }
    ];
    return BaseNotificationService;
}());
export { BaseNotificationService };
if (false) {
    /**
     * @abstract
     * @param {?} message
     * @param {?=} title
     * @return {?}
     */
    BaseNotificationService.prototype.success = function (message, title) { };
    /**
     * @abstract
     * @param {?} message
     * @param {?=} title
     * @return {?}
     */
    BaseNotificationService.prototype.error = function (message, title) { };
    /**
     * @abstract
     * @param {?} message
     * @param {?=} title
     * @return {?}
     */
    BaseNotificationService.prototype.info = function (message, title) { };
    /**
     * @abstract
     * @param {?} message
     * @param {?=} title
     * @return {?}
     */
    BaseNotificationService.prototype.warning = function (message, title) { };
    /**
     * @abstract
     * @param {?} request
     * @return {?}
     */
    BaseNotificationService.prototype.send = function (request) { };
    /**
     * @abstract
     * @param {?} request
     * @return {?}
     */
    BaseNotificationService.prototype.retrieveNotificationThread = function (request) { };
    /**
     * @abstract
     * @param {?} request
     * @return {?}
     */
    BaseNotificationService.prototype.searchNotificationDetails = function (request) { };
    /**
     * @abstract
     * @param {?} request
     * @return {?}
     */
    BaseNotificationService.prototype.removeNotificationDetail = function (request) { };
    /**
     * @abstract
     * @param {?} request
     * @return {?}
     */
    BaseNotificationService.prototype.retrieveNotificationDetail = function (request) { };
    /**
     * @abstract
     * @param {?} request
     * @return {?}
     */
    BaseNotificationService.prototype.markAllRead = function (request) { };
    /**
     * @abstract
     * @return {?}
     */
    BaseNotificationService.prototype.registerConnection = function () { };
    /**
     * @abstract
     * @param {?} detail
     * @return {?}
     */
    BaseNotificationService.prototype.redirect = function (detail) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1ub3RpZmljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL2Jhc2Utbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBa0IzQztJQUFBO0lBY0EsQ0FBQzs7Z0JBZEEsVUFBVTs7SUFjWCw4QkFBQztDQUFBLEFBZEQsSUFjQztTQWJxQix1QkFBdUI7Ozs7Ozs7O0lBQzNDLDBFQUErRDs7Ozs7OztJQUMvRCx3RUFBNkQ7Ozs7Ozs7SUFDN0QsdUVBQTREOzs7Ozs7O0lBQzVELDBFQUErRDs7Ozs7O0lBQy9ELGdFQUE2Rjs7Ozs7O0lBQzdGLHNGQUF1STs7Ozs7O0lBQ3ZJLHFGQUFrSTs7Ozs7O0lBQ2xJLG9GQUFpSTs7Ozs7O0lBQ2pJLHNGQUF1STs7Ozs7O0lBQ3ZJLHVFQUFvSDs7Ozs7SUFDcEgsdUVBQXFDOzs7Ozs7SUFDckMsbUVBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgU2VuZE5vdGlmaWNhdGlvblJlcXVlc3QsXHJcbiAgU2VuZE5vdGlmaWNhdGlvblJlc3BvbnNlLFxyXG4gIFJldHJpZXZlTm90aWZpY2F0aW9uVGhyZWFkUmVxdWVzdCxcclxuICBSZXRyaWV2ZU5vdGlmaWNhdGlvblRocmVhZFJlc3BvbnNlLFxyXG4gIFNlYXJjaEluYm94Tm90aWZpY2F0aW9uc1JlcXVlc3QsXHJcbiAgU2VhcmNoSW5ib3hOb3RpZmljYXRpb25zUmVzcG9uc2UsXHJcbiAgUmVtb3ZlTm90aWZpY2F0aW9uRGV0YWlsUmVxdWVzdCxcclxuICBSZW1vdmVOb3RpZmljYXRpb25EZXRhaWxSZXNwb25zZSxcclxuICBSZXRyaWV2ZU5vdGlmaWNhdGlvbkRldGFpbFJlcXVlc3QsXHJcbiAgUmV0cmlldmVOb3RpZmljYXRpb25EZXRhaWxSZXNwb25zZSxcclxuICBNYXJrQWxsTm90aWZpY2F0aW9uc1JlYWRSZXF1ZXN0LFxyXG4gIE1hcmtBbGxOb3RpZmljYXRpb25zUmVhZFJlc3BvbnNlLFxyXG4gIE5vdGlmaWNhdGlvbkRldGFpbFxyXG59IGZyb20gJy4uL21vZGVscy9ub3RpZmljYXRpb24ubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZU5vdGlmaWNhdGlvblNlcnZpY2Uge1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcpOiB2b2lkO1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nKTogdm9pZDtcclxuICBwdWJsaWMgYWJzdHJhY3QgaW5mbyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nKTogdm9pZDtcclxuICBwdWJsaWMgYWJzdHJhY3Qgd2FybmluZyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nKTogdm9pZDtcclxuICBwdWJsaWMgYWJzdHJhY3Qgc2VuZChyZXF1ZXN0OiBTZW5kTm90aWZpY2F0aW9uUmVxdWVzdCk6IE9ic2VydmFibGU8U2VuZE5vdGlmaWNhdGlvblJlc3BvbnNlPjtcclxuICBwdWJsaWMgYWJzdHJhY3QgcmV0cmlldmVOb3RpZmljYXRpb25UaHJlYWQocmVxdWVzdDogUmV0cmlldmVOb3RpZmljYXRpb25UaHJlYWRSZXF1ZXN0KTogT2JzZXJ2YWJsZTxSZXRyaWV2ZU5vdGlmaWNhdGlvblRocmVhZFJlc3BvbnNlPjtcclxuICBwdWJsaWMgYWJzdHJhY3Qgc2VhcmNoTm90aWZpY2F0aW9uRGV0YWlscyhyZXF1ZXN0OiBTZWFyY2hJbmJveE5vdGlmaWNhdGlvbnNSZXF1ZXN0KTogT2JzZXJ2YWJsZTxTZWFyY2hJbmJveE5vdGlmaWNhdGlvbnNSZXNwb25zZT47XHJcbiAgcHVibGljIGFic3RyYWN0IHJlbW92ZU5vdGlmaWNhdGlvbkRldGFpbChyZXF1ZXN0OiBSZW1vdmVOb3RpZmljYXRpb25EZXRhaWxSZXF1ZXN0KTogT2JzZXJ2YWJsZTxSZW1vdmVOb3RpZmljYXRpb25EZXRhaWxSZXNwb25zZT47XHJcbiAgcHVibGljIGFic3RyYWN0IHJldHJpZXZlTm90aWZpY2F0aW9uRGV0YWlsKHJlcXVlc3Q6IFJldHJpZXZlTm90aWZpY2F0aW9uRGV0YWlsUmVxdWVzdCk6IE9ic2VydmFibGU8UmV0cmlldmVOb3RpZmljYXRpb25EZXRhaWxSZXNwb25zZT47XHJcbiAgcHVibGljIGFic3RyYWN0IG1hcmtBbGxSZWFkKHJlcXVlc3Q6IE1hcmtBbGxOb3RpZmljYXRpb25zUmVhZFJlcXVlc3QpOiBPYnNlcnZhYmxlPE1hcmtBbGxOb3RpZmljYXRpb25zUmVhZFJlc3BvbnNlPjtcclxuICBwdWJsaWMgYWJzdHJhY3QgcmVnaXN0ZXJDb25uZWN0aW9uKCk7XHJcbiAgcHVibGljIGFic3RyYWN0IHJlZGlyZWN0KGRldGFpbDogTm90aWZpY2F0aW9uRGV0YWlsKTogdm9pZDtcclxufVxyXG4iXX0=