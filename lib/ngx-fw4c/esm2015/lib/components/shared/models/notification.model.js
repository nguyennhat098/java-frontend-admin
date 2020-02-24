/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/models/notification.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function BaseSearchRequest() { }
if (false) {
    /** @type {?} */
    BaseSearchRequest.prototype.searchText;
    /** @type {?} */
    BaseSearchRequest.prototype.orderBy;
    /** @type {?} */
    BaseSearchRequest.prototype.direction;
    /** @type {?} */
    BaseSearchRequest.prototype.createdBy;
    /** @type {?} */
    BaseSearchRequest.prototype.pageIndex;
    /** @type {?} */
    BaseSearchRequest.prototype.pageSize;
}
/**
 * @record
 * @template T
 */
export function BaseSearchResponse() { }
if (false) {
    /** @type {?} */
    BaseSearchResponse.prototype.items;
    /** @type {?} */
    BaseSearchResponse.prototype.totalRecords;
}
export class GetLookupItemsRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    GetLookupItemsRequest.prototype.params;
}
export class GetLookupItemsResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    GetLookupItemsResponse.prototype.message;
    /** @type {?} */
    GetLookupItemsResponse.prototype.success;
    /** @type {?} */
    GetLookupItemsResponse.prototype.id;
    /** @type {?} */
    GetLookupItemsResponse.prototype.item;
}
export class SendNotificationRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.notificationTypes = [];
        this.payloadItems = [];
        this.recipients = [];
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    SendNotificationRequest.prototype.notificationTypes;
    /** @type {?} */
    SendNotificationRequest.prototype.payloadItems;
    /** @type {?} */
    SendNotificationRequest.prototype.templateCode;
    /** @type {?} */
    SendNotificationRequest.prototype.recipients;
    /** @type {?} */
    SendNotificationRequest.prototype.fromAbiding;
}
export class SendNotificationResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    SendNotificationResponse.prototype.message;
    /** @type {?} */
    SendNotificationResponse.prototype.success;
    /** @type {?} */
    SendNotificationResponse.prototype.id;
}
export class NotificationType {
}
NotificationType.Email = 'Email';
NotificationType.Sms = 'Sms';
NotificationType.Local = 'Local';
if (false) {
    /** @type {?} */
    NotificationType.Email;
    /** @type {?} */
    NotificationType.Sms;
    /** @type {?} */
    NotificationType.Local;
}
export class EditNotificationThreadViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.detailGroups = [];
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    EditNotificationThreadViewModel.prototype.id;
    /** @type {?} */
    EditNotificationThreadViewModel.prototype.hasRead;
    /** @type {?} */
    EditNotificationThreadViewModel.prototype.detailGroups;
}
export class NotificationDetailGroup {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.details = [];
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    NotificationDetailGroup.prototype.details;
    /** @type {?} */
    NotificationDetailGroup.prototype.date;
}
export class NotificationDetail {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    NotificationDetail.prototype.description;
    /** @type {?} */
    NotificationDetail.prototype.title;
    /** @type {?} */
    NotificationDetail.prototype.time;
    /** @type {?} */
    NotificationDetail.prototype.code;
    /** @type {?} */
    NotificationDetail.prototype.id;
    /** @type {?} */
    NotificationDetail.prototype.hasRead;
    /** @type {?} */
    NotificationDetail.prototype.payload;
}
export class RetrieveNotificationThreadRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    RetrieveNotificationThreadRequest.prototype.id;
    /** @type {?} */
    RetrieveNotificationThreadRequest.prototype.pageIndex;
    /** @type {?} */
    RetrieveNotificationThreadRequest.prototype.pageSize;
}
export class RetrieveNotificationThreadResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    RetrieveNotificationThreadResponse.prototype.message;
    /** @type {?} */
    RetrieveNotificationThreadResponse.prototype.item;
    /** @type {?} */
    RetrieveNotificationThreadResponse.prototype.success;
    /** @type {?} */
    RetrieveNotificationThreadResponse.prototype.id;
}
export class NotificationTemplateVariable {
}
NotificationTemplateVariable.OrderIdentifier = 'OrderIdentifier';
NotificationTemplateVariable.PendingApprovalProductsCount = 'PendingApprovalProductsCount';
NotificationTemplateVariable.SuppliersCount = 'SuppliersCount';
NotificationTemplateVariable.PendingInquiriesCount = 'PendingInquiriesCount';
NotificationTemplateVariable.BuyerName = 'BuyerName';
NotificationTemplateVariable.ProductName = 'ProductName';
if (false) {
    /** @type {?} */
    NotificationTemplateVariable.OrderIdentifier;
    /** @type {?} */
    NotificationTemplateVariable.PendingApprovalProductsCount;
    /** @type {?} */
    NotificationTemplateVariable.SuppliersCount;
    /** @type {?} */
    NotificationTemplateVariable.PendingInquiriesCount;
    /** @type {?} */
    NotificationTemplateVariable.BuyerName;
    /** @type {?} */
    NotificationTemplateVariable.ProductName;
}
export class RegisterChannelRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
export class RegisterChannelResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    RegisterChannelResponse.prototype.message;
    /** @type {?} */
    RegisterChannelResponse.prototype.id;
    /** @type {?} */
    RegisterChannelResponse.prototype.success;
}
export class SendLiveNotificationRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.recipients = [];
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    SendLiveNotificationRequest.prototype.message;
    /** @type {?} */
    SendLiveNotificationRequest.prototype.recipients;
}
export class RemoveNotificationDetailRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    RemoveNotificationDetailRequest.prototype.id;
    /** @type {?} */
    RemoveNotificationDetailRequest.prototype.groupType;
    /** @type {?} */
    RemoveNotificationDetailRequest.prototype.dateGroup;
    /** @type {?} */
    RemoveNotificationDetailRequest.prototype.details;
}
export class RemoveNotificationDetailResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    RemoveNotificationDetailResponse.prototype.message;
    /** @type {?} */
    RemoveNotificationDetailResponse.prototype.success;
    /** @type {?} */
    RemoveNotificationDetailResponse.prototype.id;
}
export class RemoveNotificationDetailGroupType {
}
RemoveNotificationDetailGroupType.All = 'All';
RemoveNotificationDetailGroupType.GroupByDate = 'GroupByDate';
RemoveNotificationDetailGroupType.Single = 'Single';
if (false) {
    /** @type {?} */
    RemoveNotificationDetailGroupType.All;
    /** @type {?} */
    RemoveNotificationDetailGroupType.GroupByDate;
    /** @type {?} */
    RemoveNotificationDetailGroupType.Single;
}
export class RetrieveNotificationDetailRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    RetrieveNotificationDetailRequest.prototype.id;
    /** @type {?} */
    RetrieveNotificationDetailRequest.prototype.userId;
}
export class RetrieveNotificationDetailResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    RetrieveNotificationDetailResponse.prototype.message;
    /** @type {?} */
    RetrieveNotificationDetailResponse.prototype.item;
    /** @type {?} */
    RetrieveNotificationDetailResponse.prototype.success;
    /** @type {?} */
    RetrieveNotificationDetailResponse.prototype.id;
}
export class SearchInboxNotificationsRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    SearchInboxNotificationsRequest.prototype.pageIndex;
    /** @type {?} */
    SearchInboxNotificationsRequest.prototype.pageSize;
    /** @type {?} */
    SearchInboxNotificationsRequest.prototype.searchText;
    /** @type {?} */
    SearchInboxNotificationsRequest.prototype.orderBy;
    /** @type {?} */
    SearchInboxNotificationsRequest.prototype.direction;
    /** @type {?} */
    SearchInboxNotificationsRequest.prototype.createdBy;
    /** @type {?} */
    SearchInboxNotificationsRequest.prototype.userId;
    /** @type {?} */
    SearchInboxNotificationsRequest.prototype.fromAbiding;
}
export class SearchInboxNotificationsResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    SearchInboxNotificationsResponse.prototype.message;
    /** @type {?} */
    SearchInboxNotificationsResponse.prototype.items;
    /** @type {?} */
    SearchInboxNotificationsResponse.prototype.totalPendingRecords;
    /** @type {?} */
    SearchInboxNotificationsResponse.prototype.totalRecords;
    /** @type {?} */
    SearchInboxNotificationsResponse.prototype.success;
    /** @type {?} */
    SearchInboxNotificationsResponse.prototype.id;
}
export class MarkAllNotificationsReadRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    MarkAllNotificationsReadRequest.prototype.id;
}
export class MarkAllNotificationsReadResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    MarkAllNotificationsReadResponse.prototype.message;
    /** @type {?} */
    MarkAllNotificationsReadResponse.prototype.success;
    /** @type {?} */
    MarkAllNotificationsReadResponse.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvbW9kZWxzL25vdGlmaWNhdGlvbi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLHVDQU9DOzs7SUFOQyx1Q0FBbUI7O0lBQ25CLG9DQUFnQjs7SUFDaEIsc0NBQWtCOztJQUNsQixzQ0FBa0I7O0lBQ2xCLHNDQUFrQjs7SUFDbEIscUNBQWlCOzs7Ozs7QUFHbkIsd0NBR0M7OztJQUZDLG1DQUFXOztJQUNYLDBDQUFxQjs7QUFHdkIsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUVoQyxZQUFZLElBQXFDO1FBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjs7O0lBSkMsdUNBQXNCOztBQU14QixNQUFNLE9BQU8sc0JBQXNCOzs7O0lBS2pDLFlBQVksSUFBc0M7UUFDaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGOzs7SUFQQyx5Q0FBZ0I7O0lBQ2hCLHlDQUFpQjs7SUFDakIsb0NBQVc7O0lBQ1gsc0NBQVU7O0FBTVosTUFBTSxPQUFPLHVCQUF1Qjs7OztJQU1sQyxZQUFZLElBQXVDO1FBTG5ELHNCQUFpQixHQUFhLEVBQUUsQ0FBQztRQUNqQyxpQkFBWSxHQUFtQixFQUFFLENBQUM7UUFFbEMsZUFBVSxHQUFhLEVBQUUsQ0FBQztRQUd4QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7OztJQVJDLG9EQUFpQzs7SUFDakMsK0NBQWtDOztJQUNsQywrQ0FBcUI7O0lBQ3JCLDZDQUEwQjs7SUFDMUIsOENBQXFCOztBQU12QixNQUFNLE9BQU8sd0JBQXdCOzs7O0lBSW5DLFlBQVksSUFB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OztJQVhDLG9EQUFrQjs7SUFDbEIsbURBQWlCOztJQUNqQixxREFBbUI7O0lBQ25CLGtEQUFnQjs7SUFDaEIsb0RBQWtCOztJQUNsQixvREFBa0I7O0lBQ2xCLGlEQUFlOztJQUNmLHNEQUFxQjs7QUFNdkIsTUFBTSxPQUFPLGdDQUFnQzs7OztJQU8zQyxZQUFZLElBQWdEO1FBQzFELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjs7O0lBVEMsbURBQWdCOztJQUNoQixpREFBaUM7O0lBQ2pDLCtEQUE0Qjs7SUFDNUIsd0RBQXFCOztJQUNyQixtREFBaUI7O0lBQ2pCLDhDQUFXOztBQU1iLE1BQU0sT0FBTywrQkFBK0I7Ozs7SUFFMUMsWUFBWSxJQUErQztRQUN6RCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7OztJQUpDLDZDQUFXOztBQU1iLE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7SUFJM0MsWUFBWSxJQUFnRDtRQUMxRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7OztJQU5DLG1EQUFnQjs7SUFDaEIsbURBQWlCOztJQUNqQiw4Q0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtleVZhbHVlSXRlbSB9IGZyb20gJy4vYmFzZS5tb2RlbCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VTZWFyY2hSZXF1ZXN0IHtcclxuICBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcbiAgb3JkZXJCeTogc3RyaW5nO1xyXG4gIGRpcmVjdGlvbjogc3RyaW5nO1xyXG4gIGNyZWF0ZWRCeTogc3RyaW5nO1xyXG4gIHBhZ2VJbmRleDogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzZVNlYXJjaFJlc3BvbnNlPFQ+IHtcclxuICBpdGVtczogVFtdO1xyXG4gIHRvdGFsUmVjb3JkczogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0TG9va3VwSXRlbXNSZXF1ZXN0IHtcclxuICBwdWJsaWMgcGFyYW1zOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8R2V0TG9va3VwSXRlbXNSZXF1ZXN0Pikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRMb29rdXBJdGVtc1Jlc3BvbnNlIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBpZDogc3RyaW5nO1xyXG4gIGl0ZW06IGFueTtcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxHZXRMb29rdXBJdGVtc1Jlc3BvbnNlPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZW5kTm90aWZpY2F0aW9uUmVxdWVzdCB7XHJcbiAgbm90aWZpY2F0aW9uVHlwZXM6IHN0cmluZ1tdID0gW107XHJcbiAgcGF5bG9hZEl0ZW1zOiBLZXlWYWx1ZUl0ZW1bXSA9IFtdO1xyXG4gIHRlbXBsYXRlQ29kZTogc3RyaW5nO1xyXG4gIHJlY2lwaWVudHM6IHN0cmluZ1tdID0gW107XHJcbiAgZnJvbUFiaWRpbmc6IGJvb2xlYW47XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8U2VuZE5vdGlmaWNhdGlvblJlcXVlc3Q+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlbmROb3RpZmljYXRpb25SZXNwb25zZSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgaWQ6IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxTZW5kTm90aWZpY2F0aW9uUmVzcG9uc2U+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblR5cGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW1haWw6IHN0cmluZyA9ICdFbWFpbCc7XHJcbiAgcHVibGljIHN0YXRpYyBTbXM6IHN0cmluZyA9ICdTbXMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTG9jYWw6IHN0cmluZyA9ICdMb2NhbCc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0Tm90aWZpY2F0aW9uVGhyZWFkVmlld01vZGVsIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGhhc1JlYWQ6IGJvb2xlYW47XHJcbiAgZGV0YWlsR3JvdXBzOiBOb3RpZmljYXRpb25EZXRhaWxHcm91cFtdID0gW107XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8RWRpdE5vdGlmaWNhdGlvblRocmVhZFZpZXdNb2RlbD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uRGV0YWlsR3JvdXAge1xyXG4gIGRldGFpbHM6IE5vdGlmaWNhdGlvbkRldGFpbFtdID0gW107XHJcbiAgZGF0ZTogRGF0ZTtcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxOb3RpZmljYXRpb25EZXRhaWxHcm91cD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uRGV0YWlsIHtcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgdGltZTogRGF0ZTtcclxuICBjb2RlOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBoYXNSZWFkOiBib29sZWFuO1xyXG4gIHBheWxvYWQ6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxOb3RpZmljYXRpb25EZXRhaWw+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJldHJpZXZlTm90aWZpY2F0aW9uVGhyZWFkUmVxdWVzdCB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBwYWdlSW5kZXg6IG51bWJlcjtcclxuICBwYWdlU2l6ZTogbnVtYmVyO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFJldHJpZXZlTm90aWZpY2F0aW9uVGhyZWFkUmVxdWVzdD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmV0cmlldmVOb3RpZmljYXRpb25UaHJlYWRSZXNwb25zZSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIGl0ZW06IEVkaXROb3RpZmljYXRpb25UaHJlYWRWaWV3TW9kZWw7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBpZDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFJldHJpZXZlTm90aWZpY2F0aW9uVGhyZWFkUmVzcG9uc2U+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblRlbXBsYXRlVmFyaWFibGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgT3JkZXJJZGVudGlmaWVyOiBzdHJpbmcgPSAnT3JkZXJJZGVudGlmaWVyJztcclxuICBwdWJsaWMgc3RhdGljIFBlbmRpbmdBcHByb3ZhbFByb2R1Y3RzQ291bnQ6IHN0cmluZyA9ICdQZW5kaW5nQXBwcm92YWxQcm9kdWN0c0NvdW50JztcclxuICBwdWJsaWMgc3RhdGljIFN1cHBsaWVyc0NvdW50OiBzdHJpbmcgPSAnU3VwcGxpZXJzQ291bnQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgUGVuZGluZ0lucXVpcmllc0NvdW50OiBzdHJpbmcgPSAnUGVuZGluZ0lucXVpcmllc0NvdW50JztcclxuICBwdWJsaWMgc3RhdGljIEJ1eWVyTmFtZTogc3RyaW5nID0gJ0J1eWVyTmFtZSc7XHJcbiAgcHVibGljIHN0YXRpYyBQcm9kdWN0TmFtZTogc3RyaW5nID0gJ1Byb2R1Y3ROYW1lJztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ2hhbm5lbFJlcXVlc3Qge1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFJlZ2lzdGVyQ2hhbm5lbFJlcXVlc3Q+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ2hhbm5lbFJlc3BvbnNlIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZzsgc3VjY2VzczogYm9vbGVhbjtcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxSZWdpc3RlckNoYW5uZWxSZXNwb25zZT4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VuZExpdmVOb3RpZmljYXRpb25SZXF1ZXN0IHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcmVjaXBpZW50czogc3RyaW5nW10gPSBbXTtcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxTZW5kTGl2ZU5vdGlmaWNhdGlvblJlcXVlc3Q+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbW92ZU5vdGlmaWNhdGlvbkRldGFpbFJlcXVlc3Qge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgZ3JvdXBUeXBlOiBzdHJpbmc7XHJcbiAgZGF0ZUdyb3VwOiBEYXRlO1xyXG4gIGRldGFpbHM6IHN0cmluZ1tdO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFJlbW92ZU5vdGlmaWNhdGlvbkRldGFpbFJlcXVlc3Q+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbW92ZU5vdGlmaWNhdGlvbkRldGFpbFJlc3BvbnNlIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBpZDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFJlbW92ZU5vdGlmaWNhdGlvbkRldGFpbFJlc3BvbnNlPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZW1vdmVOb3RpZmljYXRpb25EZXRhaWxHcm91cFR5cGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgQWxsOiBzdHJpbmcgPSAnQWxsJztcclxuICBwdWJsaWMgc3RhdGljIEdyb3VwQnlEYXRlOiBzdHJpbmcgPSAnR3JvdXBCeURhdGUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU2luZ2xlOiBzdHJpbmcgPSAnU2luZ2xlJztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJldHJpZXZlTm90aWZpY2F0aW9uRGV0YWlsUmVxdWVzdCB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxSZXRyaWV2ZU5vdGlmaWNhdGlvbkRldGFpbFJlcXVlc3Q+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJldHJpZXZlTm90aWZpY2F0aW9uRGV0YWlsUmVzcG9uc2Uge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBpdGVtOiBOb3RpZmljYXRpb25EZXRhaWw7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBpZDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFJldHJpZXZlTm90aWZpY2F0aW9uRGV0YWlsUmVzcG9uc2U+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEluYm94Tm90aWZpY2F0aW9uc1JlcXVlc3QgaW1wbGVtZW50cyBCYXNlU2VhcmNoUmVxdWVzdCB7XHJcbiAgcGFnZUluZGV4OiBudW1iZXI7XHJcbiAgcGFnZVNpemU6IG51bWJlcjtcclxuICBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcbiAgb3JkZXJCeTogc3RyaW5nO1xyXG4gIGRpcmVjdGlvbjogc3RyaW5nO1xyXG4gIGNyZWF0ZWRCeTogc3RyaW5nO1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG4gIGZyb21BYmlkaW5nOiBib29sZWFuO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFNlYXJjaEluYm94Tm90aWZpY2F0aW9uc1JlcXVlc3Q+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEluYm94Tm90aWZpY2F0aW9uc1Jlc3BvbnNlIGltcGxlbWVudHMgQmFzZVNlYXJjaFJlc3BvbnNlPE5vdGlmaWNhdGlvbkRldGFpbEdyb3VwPiB7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIGl0ZW1zOiBOb3RpZmljYXRpb25EZXRhaWxHcm91cFtdO1xyXG4gIHRvdGFsUGVuZGluZ1JlY29yZHM6IG51bWJlcjtcclxuICB0b3RhbFJlY29yZHM6IG51bWJlcjtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8U2VhcmNoSW5ib3hOb3RpZmljYXRpb25zUmVzcG9uc2U+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmtBbGxOb3RpZmljYXRpb25zUmVhZFJlcXVlc3Qge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TWFya0FsbE5vdGlmaWNhdGlvbnNSZWFkUmVxdWVzdD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWFya0FsbE5vdGlmaWNhdGlvbnNSZWFkUmVzcG9uc2Uge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TWFya0FsbE5vdGlmaWNhdGlvbnNSZWFkUmVzcG9uc2U+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG4iXX0=