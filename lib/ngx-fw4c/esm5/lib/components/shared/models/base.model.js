/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/models/base.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @template T
 */
var /**
 * @template T
 */
MockData = /** @class */ (function () {
    function MockData(init) {
        Object.assign(this, init);
    }
    ;
    return MockData;
}());
/**
 * @template T
 */
export { MockData };
if (false) {
    /** @type {?} */
    MockData.prototype.mockData;
    /* Skipping unhandled member: ;*/
}
/**
 * @template T
 */
var /**
 * @template T
 */
BaseRequest = /** @class */ (function (_super) {
    tslib_1.__extends(BaseRequest, _super);
    function BaseRequest(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    ;
    return BaseRequest;
}(MockData));
/**
 * @template T
 */
export { BaseRequest };
if (false) {
    /** @type {?} */
    BaseRequest.prototype.payload;
    /* Skipping unhandled member: ;*/
}
/**
 * @template T
 */
var /**
 * @template T
 */
BaseResponse = /** @class */ (function () {
    function BaseResponse(init) {
        Object.assign(this, init);
    }
    ;
    return BaseResponse;
}());
/**
 * @template T
 */
export { BaseResponse };
if (false) {
    /** @type {?} */
    BaseResponse.prototype.data;
    /** @type {?} */
    BaseResponse.prototype.status;
    /** @type {?} */
    BaseResponse.prototype.code;
    /** @type {?} */
    BaseResponse.prototype.message;
    /* Skipping unhandled member: ;*/
}
var SearchBaseRequest = /** @class */ (function (_super) {
    tslib_1.__extends(SearchBaseRequest, _super);
    function SearchBaseRequest(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    ;
    return SearchBaseRequest;
}(MockData));
export { SearchBaseRequest };
if (false) {
    /** @type {?} */
    SearchBaseRequest.prototype.searchText;
    /** @type {?} */
    SearchBaseRequest.prototype.pageIndex;
    /** @type {?} */
    SearchBaseRequest.prototype.pageSize;
    /** @type {?} */
    SearchBaseRequest.prototype.direction;
    /** @type {?} */
    SearchBaseRequest.prototype.orderBy;
    /** @type {?} */
    SearchBaseRequest.prototype.all;
    /* Skipping unhandled member: ;*/
}
/**
 * @template T
 */
var /**
 * @template T
 */
SearchBaseResponse = /** @class */ (function () {
    function SearchBaseResponse(init) {
        Object.assign(this, init);
    }
    ;
    return SearchBaseResponse;
}());
/**
 * @template T
 */
export { SearchBaseResponse };
if (false) {
    /** @type {?} */
    SearchBaseResponse.prototype.items;
    /** @type {?} */
    SearchBaseResponse.prototype.success;
    /** @type {?} */
    SearchBaseResponse.prototype.code;
    /** @type {?} */
    SearchBaseResponse.prototype.message;
    /* Skipping unhandled member: ;*/
}
var BaseTemplate = /** @class */ (function () {
    function BaseTemplate(init) {
        Object.assign(this, init);
    }
    ;
    return BaseTemplate;
}());
export { BaseTemplate };
if (false) {
    /** @type {?} */
    BaseTemplate.prototype.data;
    /** @type {?} */
    BaseTemplate.prototype.validationKey;
    /** @type {?} */
    BaseTemplate.prototype.template;
    /* Skipping unhandled member: ;*/
}
var AggregatorViewModel = /** @class */ (function () {
    function AggregatorViewModel(init) {
        Object.assign(this, init);
    }
    ;
    return AggregatorViewModel;
}());
export { AggregatorViewModel };
if (false) {
    /** @type {?} */
    AggregatorViewModel.prototype.value;
    /** @type {?} */
    AggregatorViewModel.prototype.key;
    /** @type {?} */
    AggregatorViewModel.prototype.currentEmitter;
    /* Skipping unhandled member: ;*/
}
var ButtonDefinition = /** @class */ (function () {
    function ButtonDefinition(init) {
        this.style = 'default';
        Object.assign(this, init);
    }
    return ButtonDefinition;
}());
export { ButtonDefinition };
if (false) {
    /** @type {?} */
    ButtonDefinition.prototype.action;
    /** @type {?} */
    ButtonDefinition.prototype.title;
    /** @type {?} */
    ButtonDefinition.prototype.icon;
    /** @type {?} */
    ButtonDefinition.prototype.hide;
    /** @type {?} */
    ButtonDefinition.prototype.disabled;
    /** @type {?} */
    ButtonDefinition.prototype.lazyload;
    /** @type {?} */
    ButtonDefinition.prototype.style;
}
var ToolbarActionPayload = /** @class */ (function () {
    function ToolbarActionPayload(init) {
        Object.assign(this, init);
    }
    return ToolbarActionPayload;
}());
export { ToolbarActionPayload };
if (false) {
    /** @type {?} */
    ToolbarActionPayload.prototype.loadedCallback;
    /** @type {?} */
    ToolbarActionPayload.prototype.action;
    /** @type {?} */
    ToolbarActionPayload.prototype.callback;
}
var ObjectChange = /** @class */ (function () {
    function ObjectChange(init) {
        Object.assign(this, init);
    }
    return ObjectChange;
}());
export { ObjectChange };
if (false) {
    /** @type {?} */
    ObjectChange.prototype.propertyName;
    /** @type {?} */
    ObjectChange.prototype.oldValue;
    /** @type {?} */
    ObjectChange.prototype.newValue;
    /** @type {?} */
    ObjectChange.prototype.changeType;
}
var LookupItem = /** @class */ (function () {
    function LookupItem(init) {
        Object.assign(this, init);
    }
    return LookupItem;
}());
export { LookupItem };
if (false) {
    /** @type {?} */
    LookupItem.prototype.name;
    /** @type {?} */
    LookupItem.prototype.key;
}
var ExtendedMainMenuGroup = /** @class */ (function () {
    function ExtendedMainMenuGroup(init) {
        Object.assign(this, init);
    }
    return ExtendedMainMenuGroup;
}());
export { ExtendedMainMenuGroup };
if (false) {
    /** @type {?} */
    ExtendedMainMenuGroup.prototype.label;
    /** @type {?} */
    ExtendedMainMenuGroup.prototype.children;
    /** @type {?} */
    ExtendedMainMenuGroup.prototype.icon;
    /** @type {?} */
    ExtendedMainMenuGroup.prototype.selected;
}
var KeyValueItem = /** @class */ (function () {
    function KeyValueItem(init) {
        Object.assign(this, init);
    }
    return KeyValueItem;
}());
export { KeyValueItem };
if (false) {
    /** @type {?} */
    KeyValueItem.prototype.key;
    /** @type {?} */
    KeyValueItem.prototype.value;
}
var BreadCrumbItem = /** @class */ (function () {
    function BreadCrumbItem(init) {
        Object.assign(this, init);
    }
    return BreadCrumbItem;
}());
export { BreadCrumbItem };
if (false) {
    /** @type {?} */
    BreadCrumbItem.prototype.label;
    /** @type {?} */
    BreadCrumbItem.prototype.url;
}
var ControlType = /** @class */ (function () {
    function ControlType(init) {
        Object.assign(this, init);
    }
    ControlType.Textbox = 'Textbox';
    ControlType.Dropdown = 'Dropdown';
    ControlType.Button = 'Button';
    return ControlType;
}());
export { ControlType };
if (false) {
    /** @type {?} */
    ControlType.Textbox;
    /** @type {?} */
    ControlType.Dropdown;
    /** @type {?} */
    ControlType.Button;
}
var MenuTab = /** @class */ (function () {
    function MenuTab(init) {
        Object.assign(this, init);
    }
    return MenuTab;
}());
export { MenuTab };
if (false) {
    /** @type {?} */
    MenuTab.prototype.role;
    /** @type {?} */
    MenuTab.prototype.items;
}
var MenuItem = /** @class */ (function () {
    function MenuItem(init) {
        Object.assign(this, init);
    }
    return MenuItem;
}());
export { MenuItem };
if (false) {
    /** @type {?} */
    MenuItem.prototype.menu;
    /** @type {?} */
    MenuItem.prototype.items;
    /** @type {?} */
    MenuItem.prototype.subName;
    /** @type {?} */
    MenuItem.prototype.name;
    /** @type {?} */
    MenuItem.prototype.selected;
}
var Breadcrumb = /** @class */ (function () {
    function Breadcrumb(init) {
        Object.assign(this, init);
    }
    return Breadcrumb;
}());
export { Breadcrumb };
if (false) {
    /** @type {?} */
    Breadcrumb.prototype.label;
    /** @type {?} */
    Breadcrumb.prototype.url;
    /** @type {?} */
    Breadcrumb.prototype.state;
}
var MediaItem = /** @class */ (function () {
    function MediaItem(init) {
        Object.assign(this, init);
    }
    return MediaItem;
}());
export { MediaItem };
if (false) {
    /** @type {?} */
    MediaItem.prototype.src;
    /** @type {?} */
    MediaItem.prototype.name;
    /** @type {?} */
    MediaItem.prototype.fullSrc;
}
var Audit = /** @class */ (function () {
    function Audit(init) {
        Object.assign(this, init);
    }
    return Audit;
}());
export { Audit };
if (false) {
    /** @type {?} */
    Audit.prototype.createdDate;
    /** @type {?} */
    Audit.prototype.createdBy;
    /** @type {?} */
    Audit.prototype.lastModifiedDate;
    /** @type {?} */
    Audit.prototype.lastModifiedBy;
}
var TrackingGroup = /** @class */ (function () {
    function TrackingGroup(init) {
        Object.assign(this, init);
    }
    return TrackingGroup;
}());
export { TrackingGroup };
if (false) {
    /** @type {?} */
    TrackingGroup.prototype.date;
    /** @type {?} */
    TrackingGroup.prototype.details;
}
var TrackingDetail = /** @class */ (function () {
    function TrackingDetail(init) {
        Object.assign(this, init);
    }
    return TrackingDetail;
}());
export { TrackingDetail };
if (false) {
    /** @type {?} */
    TrackingDetail.prototype.description;
    /** @type {?} */
    TrackingDetail.prototype.time;
}
var RecommendationResponse = /** @class */ (function () {
    function RecommendationResponse(init) {
        this.show = false;
        this.label = 'Kết quả gợi ý';
        this.deboundTime = 500;
        this.all = false;
        Object.assign(this, init);
    }
    return RecommendationResponse;
}());
export { RecommendationResponse };
if (false) {
    /** @type {?} */
    RecommendationResponse.prototype.selectedMenu;
    /** @type {?} */
    RecommendationResponse.prototype.keyword;
    /** @type {?} */
    RecommendationResponse.prototype.show;
    /** @type {?} */
    RecommendationResponse.prototype.searchPath;
    /** @type {?} */
    RecommendationResponse.prototype.template;
    /** @type {?} */
    RecommendationResponse.prototype.label;
    /** @type {?} */
    RecommendationResponse.prototype.deboundTime;
    /** @type {?} */
    RecommendationResponse.prototype.all;
}
/**
 * @record
 * @template T
 */
export function ICallback() { }
if (false) {
    /** @type {?} */
    ICallback.prototype.isValid;
    /** @type {?} */
    ICallback.prototype.callback;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL21vZGVscy9iYXNlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBOzs7O0lBRUksa0JBQVksSUFBMkI7UUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUFBLENBQUM7SUFDTixlQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7Ozs7Ozs7SUFKRyw0QkFBZTs7Ozs7O0FBTW5COzs7O0lBQW9DLHVDQUFXO0lBRTNDLHFCQUFZLElBQThCO1FBQTFDLFlBQ0ksaUJBQU8sU0FFVjtRQURHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUM5QixDQUFDO0lBQUEsQ0FBQztJQUNOLGtCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQW9DLFFBQVEsR0FNM0M7Ozs7Ozs7SUFMRyw4QkFBWTs7Ozs7O0FBT2hCOzs7O0lBS0ksc0JBQVksSUFBK0I7UUFDdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUFBLENBQUM7SUFDTixtQkFBQztBQUFELENBQUMsQUFSRCxJQVFDOzs7Ozs7O0lBUEcsNEJBQVM7O0lBQ1QsOEJBQWlCOztJQUNqQiw0QkFBYzs7SUFDZCwrQkFBaUI7OztBQU1yQjtJQUF1Qyw2Q0FBYTtJQU9oRCwyQkFBWSxJQUFpQztRQUE3QyxZQUNJLGlCQUFPLFNBRVY7UUFERyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFDOUIsQ0FBQztJQUFBLENBQUM7SUFDTix3QkFBQztBQUFELENBQUMsQUFYRCxDQUF1QyxRQUFRLEdBVzlDOzs7O0lBVkcsdUNBQW9COztJQUNwQixzQ0FBbUI7O0lBQ25CLHFD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Q0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQzs7OztJQVBHLDRCQUFtQjs7SUFDbkIsMEJBQW1COztJQUNuQixpQ0FBd0I7O0lBQ3hCLCtCQUF3Qjs7QUFNNUI7SUFHSSx1QkFBWSxJQUE2QjtRQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxHLDZCQUFXOztJQUNYLGdDQUEwQjs7QUFNOUI7SUFHSSx3QkFBWSxJQUE4QjtRQUN0QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxHLHFDQUFvQjs7SUFDcEIsOEJBQVc7O0FBTWY7SUFTSSxnQ0FBWSxJQUFzQztRQU5sRCxTQUFJLEdBQVksS0FBSyxDQUFDO1FBR3RCLFVBQUssR0FBVyxlQUFlLENBQUM7UUFDaEMsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFDMUIsUUFBRyxHQUFZLEtBQUssQ0FBQztRQUVqQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQzs7OztJQVhHLDhDQUFzQjs7SUFDdEIseUNBQWlCOztJQUNqQixzQ0FBc0I7O0lBQ3RCLDRDQUFvQjs7SUFDcEIsMENBQXFCOztJQUNyQix1Q0FBZ0M7O0lBQ2hDLDZDQUEwQjs7SUFDMUIscUNBQXFCOzs7Ozs7QUFNekIsK0JBR0M7OztJQUZHLDRCQUF1Qjs7SUFDdkIsNkJBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENoYW5nZVR5cGUgfSBmcm9tICcuLi9lbnVtcy9iYXNlLmVudW0nO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTW9ja0RhdGE8VD4ge1xyXG4gICAgbW9ja0RhdGE/OiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxNb2NrRGF0YTxUPj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VSZXF1ZXN0PFQ+IGV4dGVuZHMgTW9ja0RhdGE8VD4ge1xyXG4gICAgcGF5bG9hZD86IFQ7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxCYXNlUmVxdWVzdDxUPj4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVJlc3BvbnNlPFQ+IHtcclxuICAgIGRhdGE/OiBUO1xyXG4gICAgc3RhdHVzPzogYm9vbGVhbjtcclxuICAgIGNvZGU/OiBudW1iZXI7XHJcbiAgICBtZXNzYWdlPzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QmFzZVJlc3BvbnNlPFQ+Pikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQmFzZVJlcXVlc3QgZXh0ZW5kcyBNb2NrRGF0YTxhbnk+IHtcclxuICAgIHNlYXJjaFRleHQ/OiBzdHJpbmc7XHJcbiAgICBwYWdlSW5kZXg/OiBudW1iZXI7XHJcbiAgICBwYWdlU2l6ZT86IG51bWJlcjtcclxuICAgIGRpcmVjdGlvbj86IHN0cmluZztcclxuICAgIG9yZGVyQnk/OiBzdHJpbmc7XHJcbiAgICBhbGw/OiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8U2VhcmNoQmFzZVJlcXVlc3Q+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEJhc2VSZXNwb25zZTxUPiB7XHJcbiAgICBpdGVtcz86IFRbXTtcclxuICAgIHN1Y2Nlc3M/OiBib29sZWFuO1xyXG4gICAgY29kZT86IG51bWJlcjtcclxuICAgIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxTZWFyY2hCYXNlUmVzcG9uc2U8VD4+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlVGVtcGxhdGUge1xyXG4gICAgZGF0YT86IGFueTtcclxuICAgIHZhbGlkYXRpb25LZXk/OiBzdHJpbmc7XHJcbiAgICB0ZW1wbGF0ZT86IFR5cGU8YW55PjtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEJhc2VUZW1wbGF0ZT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFnZ3JlZ2F0b3JWaWV3TW9kZWwge1xyXG4gICAgdmFsdWU/OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAgIGtleT86IHN0cmluZztcclxuICAgIGN1cnJlbnRFbWl0dGVyOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxBZ2dyZWdhdG9yVmlld01vZGVsPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uRGVmaW5pdGlvbiB7XHJcbiAgICBhY3Rpb246IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBoaWRlOiBib29sZWFuO1xyXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBsYXp5bG9hZDogYm9vbGVhbjtcclxuICAgIHN0eWxlOiAnZGVmYXVsdCcgfCAnc3VjY2VzcycgfCAnd2FybmluZycgfCAnZGFuZ2VyJyB8ICdsaW5rJyB8ICdpbmZvJyB8ICdpbnZlcnNlJyB8ICdwcmltYXJ5JyB8ICdvdXRsaW5lLXByaW1hcnknIHwgJ291dGxpbmUtaW52ZXJzZScgPSAnZGVmYXVsdCc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxCdXR0b25EZWZpbml0aW9uPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFyQWN0aW9uUGF5bG9hZCB7XHJcbiAgICBsb2FkZWRDYWxsYmFjazogRnVuY3Rpb247XHJcbiAgICBhY3Rpb246IHN0cmluZztcclxuICAgIGNhbGxiYWNrOiBGdW5jdGlvbjtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFRvb2xiYXJBY3Rpb25QYXlsb2FkPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPYmplY3RDaGFuZ2Uge1xyXG4gICAgcHJvcGVydHlOYW1lOiBzdHJpbmc7XHJcbiAgICBvbGRWYWx1ZTogYW55O1xyXG4gICAgbmV3VmFsdWU6IGFueTtcclxuICAgIGNoYW5nZVR5cGU6IENoYW5nZVR5cGU7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxPYmplY3RDaGFuZ2U+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvb2t1cEl0ZW0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAga2V5Pzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TG9va3VwSXRlbT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXh0ZW5kZWRNYWluTWVudUdyb3VwIHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBjaGlsZHJlbjogYW55W107XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBzZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxFeHRlbmRlZE1haW5NZW51R3JvdXA+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtleVZhbHVlSXRlbSB7XHJcbiAgICBrZXk6IHN0cmluZztcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxLZXlWYWx1ZUl0ZW0+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJyZWFkQ3J1bWJJdGVtIHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEJyZWFkQ3J1bWJJdGVtPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sVHlwZSB7XHJcbiAgICBzdGF0aWMgVGV4dGJveDogc3RyaW5nID0gJ1RleHRib3gnO1xyXG4gICAgc3RhdGljIERyb3Bkb3duOiBzdHJpbmcgPSAnRHJvcGRvd24nO1xyXG4gICAgc3RhdGljIEJ1dHRvbjogc3RyaW5nID0gJ0J1dHRvbic7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxDb250cm9sVHlwZT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudVRhYiB7XHJcbiAgICByb2xlOiBzdHJpbmc7XHJcbiAgICBpdGVtczogRXh0ZW5kZWRNYWluTWVudUdyb3VwW107XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxNZW51VGFiPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51SXRlbSB7XHJcbiAgICBtZW51OiBzdHJpbmc7XHJcbiAgICBpdGVtczogRXh0ZW5kZWRNYWluTWVudUdyb3VwW107XHJcbiAgICBzdWJOYW1lOiBzdHJpbmc7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TWVudUl0ZW0+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWIge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgc3RhdGU/OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxCcmVhZGNydW1iPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNZWRpYUl0ZW0ge1xyXG4gICAgc3JjOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBmdWxsU3JjOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxNZWRpYUl0ZW0+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1ZGl0IHtcclxuICAgIGNyZWF0ZWREYXRlPzogRGF0ZTtcclxuICAgIGNyZWF0ZWRCeT86IHN0cmluZztcclxuICAgIGxhc3RNb2RpZmllZERhdGU/OiBEYXRlO1xyXG4gICAgbGFzdE1vZGlmaWVkQnk/OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxBdWRpdD4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhY2tpbmdHcm91cCB7XHJcbiAgICBkYXRlOiBEYXRlO1xyXG4gICAgZGV0YWlsczogVHJhY2tpbmdEZXRhaWxbXTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFRyYWNraW5nR3JvdXA+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyYWNraW5nRGV0YWlsIHtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICB0aW1lOiBEYXRlO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8VHJhY2tpbmdEZXRhaWw+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlY29tbWVuZGF0aW9uUmVzcG9uc2Uge1xyXG4gICAgc2VsZWN0ZWRNZW51Pzogc3RyaW5nO1xyXG4gICAga2V5d29yZD86IHN0cmluZztcclxuICAgIHNob3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNlYXJjaFBhdGg/OiBzdHJpbmc7XHJcbiAgICB0ZW1wbGF0ZT86IFR5cGU8YW55PjtcclxuICAgIGxhYmVsOiBzdHJpbmcgPSAnS+G6v3QgcXXhuqMgZ+G7o2kgw70nO1xyXG4gICAgZGVib3VuZFRpbWU6IG51bWJlciA9IDUwMDtcclxuICAgIGFsbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8UmVjb21tZW5kYXRpb25SZXNwb25zZT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDYWxsYmFjazxUPiB7XHJcbiAgICBpc1ZhbGlkOiAoKSA9PiBib29sZWFuO1xyXG4gICAgY2FsbGJhY2s6ICh2YWx1ZTogYW55KSA9PiBPYnNlcnZhYmxlPFQ+O1xyXG59Il19