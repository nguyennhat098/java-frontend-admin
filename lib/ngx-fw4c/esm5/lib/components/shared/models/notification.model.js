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
var GetLookupItemsRequest = /** @class */ (function () {
    function GetLookupItemsRequest(init) {
        Object.assign(this, init);
    }
    return GetLookupItemsRequest;
}());
export { GetLookupItemsRequest };
if (false) {
    /** @type {?} */
    GetLookupItemsRequest.prototype.params;
}
var GetLookupItemsResponse = /** @class */ (function () {
    function GetLookupItemsResponse(init) {
        Object.assign(this, init);
    }
    return GetLookupItemsResponse;
}());
export { GetLookupItemsResponse };
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
var SendNotificationRequest = /** @class */ (function () {
    function SendNotificationRequest(init) {
        this.notificationTypes = [];
        this.payloadItems = [];
        this.recipients = [];
        Object.assign(this, init);
    }
    return SendNotificationRequest;
}());
export { SendNotificationRequest };
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
var SendNotificationResponse = /** @class */ (function () {
    function SendNotificationResponse(init) {
        Object.assign(this, init);
    }
    return SendNotificationResponse;
}());
export { SendNotificationResponse };
if (false) {
    /** @type {?} */
    SendNotificationResponse.prototype.message;
    /** @type {?} */
    SendNotificationResponse.prototype.success;
    /** @type {?} */
    SendNotificationResponse.prototype.id;
}
var NotificationType = /** @class */ (function () {
    function NotificationType() {
    }
    NotificationType.Email = 'Email';
    NotificationType.Sms = 'Sms';
    NotificationType.Local = 'Local';
    return NotificationType;
}());
export { NotificationType };
if (false) {
    /** @type {?} */
    NotificationType.Email;
    /** @type {?} */
    NotificationType.Sms;
    /** @type {?} */
    NotificationType.Local;
}
var EditNotificationThreadViewModel = /** @class */ (function () {
    function EditNotificationThreadViewModel(init) {
        this.detailGroups = [];
        Object.assign(this, init);
    }
    return EditNotificationThreadViewModel;
}());
export { EditNotificationThreadViewModel };
if (false) {
    /** @type {?} */
    EditNotificationThreadViewModel.prototype.id;
    /** @type {?} */
    EditNotificationThreadViewModel.prototype.hasRead;
    /** @type {?} */
    EditNotificationThreadViewModel.prototype.detailGroups;
}
var NotificationDetailGroup = /** @class */ (function () {
    function NotificationDetailGroup(init) {
        this.details = [];
        Object.assign(this, init);
    }
    return NotificationDetailGroup;
}());
export { NotificationDetailGroup };
if (false) {
    /** @type {?} */
    NotificationDetailGroup.prototype.details;
    /** @type {?} */
    NotificationDetailGroup.prototype.date;
}
var NotificationDetail = /** @class */ (function () {
    function NotificationDetail(init) {
        Object.assign(this, init);
    }
    return NotificationDetail;
}());
export { NotificationDetail };
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
var RetrieveNotificationThreadRequest = /** @class */ (function () {
    function RetrieveNotificationThreadRequest(init) {
        Object.assign(this, init);
    }
    return RetrieveNotificationThreadRequest;
}());
export { RetrieveNotificationThreadRequest };
if (false) {
    /** @type {?} */
    RetrieveNotificationThreadRequest.prototype.id;
    /** @type {?} */
    RetrieveNotificationThreadRequest.prototype.pageIndex;
    /** @type {?} */
    RetrieveNotificationThreadRequest.prototype.pageSize;
}
var RetrieveNotificationThreadResponse = /** @class */ (function () {
    function RetrieveNotificationThreadResponse(init) {
        Object.assign(this, init);
    }
    return RetrieveNotificationThreadResponse;
}());
export { RetrieveNotificationThreadResponse };
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
var NotificationTemplateVariable = /** @class */ (function () {
    function NotificationTemplateVariable() {
    }
    NotificationTemplateVariable.OrderIdentifier = 'OrderIdentifier';
    NotificationTemplateVariable.PendingApprovalProductsCount = 'PendingApprovalProductsCount';
    NotificationTemplateVariable.SuppliersCount = 'SuppliersCount';
    NotificationTemplateVariable.PendingInquiriesCount = 'PendingInquiriesCount';
    NotificationTemplateVariable.BuyerName = 'BuyerName';
    NotificationTemplateVariable.ProductName = 'ProductName';
    return NotificationTemplateVariable;
}());
export { NotificationTemplateVariable };
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
var RegisterChannelRequest = /** @class */ (function () {
    function RegisterChannelRequest(init) {
        Object.assign(this, init);
    }
    return RegisterChannelRequest;
}());
export { RegisterChannelRequest };
var RegisterChannelResponse = /** @class */ (function () {
    function RegisterChannelResponse(init) {
        Object.assign(this, init);
    }
    return RegisterChannelResponse;
}());
export { RegisterChannelResponse };
if (false) {
    /** @type {?} */
    RegisterChannelResponse.prototype.message;
    /** @type {?} */
    RegisterChannelResponse.prototype.id;
    /** @type {?} */
    RegisterChannelResponse.prototype.success;
}
var SendLiveNotificationRequest = /** @class */ (function () {
    function SendLiveNotificationRequest(init) {
        this.recipients = [];
        Object.assign(this, init);
    }
    return SendLiveNotificationRequest;
}());
export { SendLiveNotificationRequest };
if (false) {
    /** @type {?} */
    SendLiveNotificationRequest.prototype.message;
    /** @type {?} */
    SendLiveNotificationRequest.prototype.recipients;
}
var RemoveNotificationDetailRequest = /** @class */ (function () {
    function RemoveNotificationDetailRequest(init) {
        Object.assign(this, init);
    }
    return RemoveNotificationDetailRequest;
}());
export { RemoveNotificationDetailRequest };
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
var RemoveNotificationDetailResponse = /** @class */ (function () {
    function RemoveNotificationDetailResponse(init) {
        Object.assign(this, init);
    }
    return RemoveNotificationDetailResponse;
}());
export { RemoveNotificationDetailResponse };
if (false) {
    /** @type {?} */
    RemoveNotificationDetailResponse.prototype.message;
    /** @type {?} */
    RemoveNotificationDetailResponse.prototype.success;
    /** @type {?} */
    RemoveNotificationDetailResponse.prototype.id;
}
var RemoveNotificationDetailGroupType = /** @class */ (function () {
    function RemoveNotificationDetailGroupType() {
    }
    RemoveNotificationDetailGroupType.All = 'All';
    RemoveNotificationDetailGroupType.GroupByDate = 'GroupByDate';
    RemoveNotificationDetailGroupType.Single = 'Single';
    return RemoveNotificationDetailGroupType;
}());
export { RemoveNotificationDetailGroupType };
if (false) {
    /** @type {?} */
    RemoveNotificationDetailGroupType.All;
    /** @type {?} */
    RemoveNotificationDetailGroupType.GroupByDate;
    /** @type {?} */
    RemoveNotificationDetailGroupType.Single;
}
var RetrieveNotificationDetailRequest = /** @class */ (function () {
    function RetrieveNotificationDetailRequest(init) {
        Object.assign(this, init);
    }
    return RetrieveNotificationDetailRequest;
}());
export { RetrieveNotificationDetailRequest };
if (false) {
    /** @type {?} */
    RetrieveNotificationDetailRequest.prototype.id;
    /** @type {?} */
    RetrieveNotificationDetailRequest.prototype.userId;
}
var RetrieveNotificationDetailResponse = /** @class */ (function () {
    function RetrieveNotificationDetailResponse(init) {
        Object.assign(this, init);
    }
    return RetrieveNotificationDetailResponse;
}());
export { RetrieveNotificationDetailResponse };
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
var SearchInboxNotificationsRequest = /** @class */ (function () {
    function SearchInboxNotificationsRequest(init) {
        Object.assign(this, init);
    }
    return SearchInboxNotificationsRequest;
}());
export { SearchInboxNotificationsRequest };
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
var SearchInboxNotificationsResponse = /** @class */ (function () {
    function SearchInboxNotificationsResponse(init) {
        Object.assign(this, init);
    }
    return SearchInboxNotificationsResponse;
}());
export { SearchInboxNotificationsResponse };
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
var MarkAllNotificationsReadRequest = /** @class */ (function () {
    function MarkAllNotificationsReadRequest(init) {
        Object.assign(this, init);
    }
    return MarkAllNotificationsReadRequest;
}());
export { MarkAllNotificationsReadRequest };
if (false) {
    /** @type {?} */
    MarkAllNotificationsReadRequest.prototype.id;
}
var MarkAllNotificationsReadResponse = /** @class */ (function () {
    function MarkAllNotificationsReadResponse(init) {
        Object.assign(this, init);
    }
    return MarkAllNotificationsReadResponse;
}());
export { MarkAllNotificationsReadResponse };
if (false) {
    /** @type {?} */
    MarkAllNotificationsReadResponse.prototype.message;
    /** @type {?} */
    MarkAllNotificationsReadResponse.prototype.success;
    /** @type {?} */
    MarkAllNotificationsReadResponse.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvbW9kZWxzL25vdGlmaWNhdGlvbi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLHVDQU9DOzs7SUFOQyx1Q0FBbUI7O0lBQ25CLG9DQUFnQjs7SUFDaEIsc0NBQWtCOztJQUNsQixzQ0FBa0I7O0lBQ2xCLHNDQUFrQjs7SUFDbEIscUNBQWlCOzs7Ozs7QUFHbkIsd0NBR0M7OztJQUZDLG1DQUFXOztJQUNYLDBDQUFxQjs7QUFHdkI7SUFFRSwrQkFBWSxJQUFxQztRQUMvQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7OztJQUpDLHVDQUFzQjs7QUFNeEI7SUFLRSxnQ0FBWSxJQUFzQztRQUNoRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQzs7OztJQVBDLHlDQUFnQjs7SUFDaEIseUNBQWlCOztJQUNqQixvQ0FBVzs7SUFDWCxzQ0FBVTs7QUFNWjtJQU1FLGlDQUFZLElBQXVDO1FBTG5ELHNCQUFpQixHQUFhLEVBQUUsQ0FBQztRQUNqQyxpQkFBWSxHQUFtQixFQUFFLENBQUM7UUFFbEMsZUFBVSxHQUFhLEVBQUUsQ0FBQztRQUd4QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQzs7OztJQVJDLG9EQUFpQzs7SUFDakMsK0NBQWtDOztJQUNsQywrQ0FBcUI7O0lBQ3JCLDZDQUEwQjs7SUFDMUIsOENBQXFCOztBQU12QjtJQUlFLGtDQUFZLElB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Q0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCx5Q0FBQztBQUFELENBQUMsQUFSRCxJQVFDOzs7O0lBUEMscURBQWdCOztJQUNoQixrREFBeUI7O0lBQ3pCLHFEQUFpQjs7SUFDakIsZ0RBQVc7O0FBTWI7SUFTRSx5Q0FBWSxJQUErQztRQUN6RCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsc0NBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQzs7OztJQVhDLG9EQUFrQjs7SUFDbEIsbURBQWlCOztJQUNqQixxREFBbUI7O0lBQ25CLGtEQUFnQjs7SUFDaEIsb0RBQWtCOztJQUNsQixvREFBa0I7O0lBQ2xCLGlEQUFlOztJQUNmLHNEQUFxQjs7QUFNdkI7SUFPRSwwQ0FBWSxJQUFnRDtRQUMxRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsdUNBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQzs7OztJQVRDLG1EQUFnQjs7SUFDaEIsaURBQWlDOztJQUNqQywrREFBNEI7O0lBQzVCLHdEQUFxQjs7SUFDckIsbURBQWlCOztJQUNqQiw4Q0FBVzs7QUFNYjtJQUVFLHlDQUFZLElBQStDO1FBQ3pELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCxzQ0FBQztBQUFELENBQUMsQUFMRCxJQUtDOzs7O0lBSkMsNkNBQVc7O0FBTWI7SUFJRSwwQ0FBWSxJQUFnRDtRQUMxRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsdUNBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQzs7OztJQU5DLG1EQUFnQjs7SUFDaEIsbURBQWlCOztJQUNqQiw4Q0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtleVZhbHVlSXRlbSB9IGZyb20gJy4vYmFzZS5tb2RlbCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VTZWFyY2hSZXF1ZXN0IHtcclxuICBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcbiAgb3JkZXJCeTogc3RyaW5nO1xyXG4gIGRpcmVjdGlvbjogc3RyaW5nO1xyXG4gIGNyZWF0ZWRCeTogc3RyaW5nO1xyXG4gIHBhZ2VJbmRleDogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzZVNlYXJjaFJlc3BvbnNlPFQ+IHtcclxuICBpdGVtczogVFtdO1xyXG4gIHRvdGFsUmVjb3JkczogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0TG9va3VwSXRlbXNSZXF1ZXN0IHtcclxuICBwdWJsaWMgcGFyYW1zOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8R2V0TG9va3VwSXRlbXNSZXF1ZXN0Pikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRMb29rdXBJdGVtc1Jlc3BvbnNlIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBpZDogc3RyaW5nO1xyXG4gIGl0ZW06IGFueTtcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxHZXRMb29rdXBJdGVtc1Jlc3BvbnNlPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZW5kTm90aWZpY2F0aW9uUmVxdWVzdCB7XHJcbiAgbm90aWZpY2F0aW9uVHlwZXM6IHN0cmluZ1tdID0gW107XHJcbiAgcGF5bG9hZEl0ZW1zOiBLZXlWYWx1ZUl0ZW1bXSA9IFtdO1xyXG4gIHRlbXBsYXRlQ29kZTogc3RyaW5nO1xyXG4gIHJlY2lwaWVudHM6IHN0cmluZ1tdID0gW107XHJcbiAgZnJvbUFiaWRpbmc6IGJvb2xlYW47XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8U2VuZE5vdGlmaWNhdGlvblJlcXVlc3Q+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlbmROb3RpZmljYXRpb25SZXNwb25zZSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgaWQ6IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxTZW5kTm90aWZpY2F0aW9uUmVzcG9uc2U+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblR5cGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW1haWw6IHN0cmluZyA9ICdFbWFpbCc7XHJcbiAgcHVibGljIHN0YXRpYyBTbXM6IHN0cmluZyA9ICdTbXMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTG9jYWw6IHN0cmluZyA9ICdMb2NhbCc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0Tm90aWZpY2F0aW9uVGhyZWFkVmlld01vZGVsIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGhhc1JlYWQ6IGJvb2xlYW47XHJcbiAgZGV0YWlsR3JvdXBzOiBOb3RpZmljYXRpb25EZXRhaWxHcm91cFtdID0gW107XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8RWRpdE5vdGlmaWNhdGlvblRocmVhZFZpZXdNb2RlbD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uRGV0YWlsR3JvdXAge1xyXG4gIGRldGFpbHM6IE5vdGlmaWNhdGlvbkRldGFpbFtdID0gW107XHJcbiAgZGF0ZTogRGF0ZTtcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxOb3RpZmljYXRpb25EZXRhaWxHcm91cD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uRGV0YWlsIHtcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgdGltZTogRGF0ZTtcclxuICBjb2RlOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBoYXNSZWFkOiBib29sZWFuO1xyXG4gIHBheWxvYWQ6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxOb3RpZmljYXRpb25EZXRhaWw+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJldHJpZXZlTm90aWZpY2F0aW9uVGhyZWFkUmVxdWVzdCB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBwYWdlSW5kZXg6IG51bWJlcjtcclxuICBwYWdlU2l6ZTogbnVtYmVyO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFJldHJpZXZlTm90aWZpY2F0aW9uVGhyZWFkUmVxdWVzdD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmV0cmlldmVOb3RpZmljYXRpb25UaHJlYWRSZXNwb25zZSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIGl0ZW06IEVkaXROb3RpZmljYXRpb25UaHJlYWRWaWV3TW9kZWw7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBpZDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFJldHJpZXZlTm90aWZpY2F0aW9uVGhyZWFkUmVzcG9uc2U+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblRlbXBsYXRlVmFyaWFibGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgT3JkZXJJZGVudGlmaWVyOiBzdHJpbmcgPSAnT3JkZXJJZGVudGlmaWVyJztcclxuICBwdWJsaWMgc3RhdGljIFBlbmRpbmdBcHByb3ZhbFByb2R1Y3RzQ291bnQ6IHN0cmluZyA9ICdQZW5kaW5nQXBwcm92YWxQcm9kdWN0c0NvdW50JztcclxuICBwdWJsaWMgc3RhdGljIFN1cHBsaWVyc0NvdW50OiBzdHJpbmcgPSAnU3VwcGxpZXJzQ291bnQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgUGVuZGluZ0lucXVpcmllc0NvdW50OiBzdHJpbmcgPSAnUGVuZGluZ0lucXVpcmllc0NvdW50JztcclxuICBwdWJsaWMgc3RhdGljIEJ1eWVyTmFtZTogc3RyaW5nID0gJ0J1eWVyTmFtZSc7XHJcbiAgcHVibGljIHN0YXRpYyBQcm9kdWN0TmFtZTogc3RyaW5nID0gJ1Byb2R1Y3ROYW1lJztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ2hhbm5lbFJlcXVlc3Qge1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFJlZ2lzdGVyQ2hhbm5lbFJlcXVlc3Q+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ2hhbm5lbFJlc3BvbnNlIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZzsgc3VjY2VzczogYm9vbGVhbjtcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxSZWdpc3RlckNoYW5uZWxSZXNwb25zZT4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VuZExpdmVOb3RpZmljYXRpb25SZXF1ZXN0IHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcmVjaXBpZW50czogc3RyaW5nW10gPSBbXTtcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxTZW5kTGl2ZU5vdGlmaWNhdGlvblJlcXVlc3Q+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbW92ZU5vdGlmaWNhdGlvbkRldGFpbFJlcXVlc3Qge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgZ3JvdXBUeXBlOiBzdHJpbmc7XHJcbiAgZGF0ZUdyb3VwOiBEYXRlO1xyXG4gIGRldGFpbHM6IHN0cmluZ1tdO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFJlbW92ZU5vdGlmaWNhdGlvbkRldGFpbFJlcXVlc3Q+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbW92ZU5vdGlmaWNhdGlvbkRldGFpbFJlc3BvbnNlIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBpZDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFJlbW92ZU5vdGlmaWNhdGlvbkRldGFpbFJlc3BvbnNlPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZW1vdmVOb3RpZmljYXRpb25EZXRhaWxHcm91cFR5cGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgQWxsOiBzdHJpbmcgPSAnQWxsJztcclxuICBwdWJsaWMgc3RhdGljIEdyb3VwQnlEYXRlOiBzdHJpbmcgPSAnR3JvdXBCeURhdGUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU2luZ2xlOiBzdHJpbmcgPSAnU2luZ2xlJztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJldHJpZXZlTm90aWZpY2F0aW9uRGV0YWlsUmVxdWVzdCB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxSZXRyaWV2ZU5vdGlmaWNhdGlvbkRldGFpbFJlcXVlc3Q+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJldHJpZXZlTm90aWZpY2F0aW9uRGV0YWlsUmVzcG9uc2Uge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBpdGVtOiBOb3RpZmljYXRpb25EZXRhaWw7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBpZDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFJldHJpZXZlTm90aWZpY2F0aW9uRGV0YWlsUmVzcG9uc2U+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEluYm94Tm90aWZpY2F0aW9uc1JlcXVlc3QgaW1wbGVtZW50cyBCYXNlU2VhcmNoUmVxdWVzdCB7XHJcbiAgcGFnZUluZGV4OiBudW1iZXI7XHJcbiAgcGFnZVNpemU6IG51bWJlcjtcclxuICBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcbiAgb3JkZXJCeTogc3RyaW5nO1xyXG4gIGRpcmVjdGlvbjogc3RyaW5nO1xyXG4gIGNyZWF0ZWRCeTogc3RyaW5nO1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG4gIGZyb21BYmlkaW5nOiBib29sZWFuO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFNlYXJjaEluYm94Tm90aWZpY2F0aW9uc1JlcXVlc3Q+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEluYm94Tm90aWZpY2F0aW9uc1Jlc3BvbnNlIGltcGxlbWVudHMgQmFzZVNlYXJjaFJlc3BvbnNlPE5vdGlmaWNhdGlvbkRldGFpbEdyb3VwPiB7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIGl0ZW1zOiBOb3RpZmljYXRpb25EZXRhaWxHcm91cFtdO1xyXG4gIHRvdGFsUGVuZGluZ1JlY29yZHM6IG51bWJlcjtcclxuICB0b3RhbFJlY29yZHM6IG51bWJlcjtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8U2VhcmNoSW5ib3hOb3RpZmljYXRpb25zUmVzcG9uc2U+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmtBbGxOb3RpZmljYXRpb25zUmVhZFJlcXVlc3Qge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TWFya0FsbE5vdGlmaWNhdGlvbnNSZWFkUmVxdWVzdD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWFya0FsbE5vdGlmaWNhdGlvbnNSZWFkUmVzcG9uc2Uge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TWFya0FsbE5vdGlmaWNhdGlvbnNSZWFkUmVzcG9uc2U+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG4iXX0=