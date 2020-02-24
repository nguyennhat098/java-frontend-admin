/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/models/base.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
export class MockData {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
    ;
}
if (false) {
    /** @type {?} */
    MockData.prototype.mockData;
    /* Skipping unhandled member: ;*/
}
/**
 * @template T
 */
export class BaseRequest extends MockData {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
    ;
}
if (false) {
    /** @type {?} */
    BaseRequest.prototype.payload;
    /* Skipping unhandled member: ;*/
}
/**
 * @template T
 */
export class BaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
    ;
}
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
export class SearchBaseRequest extends MockData {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
    ;
}
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
export class SearchBaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
    ;
}
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
export class BaseTemplate {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
    ;
}
if (false) {
    /** @type {?} */
    BaseTemplate.prototype.data;
    /** @type {?} */
    BaseTemplate.prototype.validationKey;
    /** @type {?} */
    BaseTemplate.prototype.template;
    /* Skipping unhandled member: ;*/
}
export class AggregatorViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
    ;
}
if (false) {
    /** @type {?} */
    AggregatorViewModel.prototype.value;
    /** @type {?} */
    AggregatorViewModel.prototype.key;
    /** @type {?} */
    AggregatorViewModel.prototype.currentEmitter;
    /* Skipping unhandled member: ;*/
}
export class ButtonDefinition {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.style = 'default';
        Object.assign(this, init);
    }
}
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
export class ToolbarActionPayload {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ToolbarActionPayload.prototype.loadedCallback;
    /** @type {?} */
    ToolbarActionPayload.prototype.action;
    /** @type {?} */
    ToolbarActionPayload.prototype.callback;
}
export class ObjectChange {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
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
export class LookupItem {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    LookupItem.prototype.name;
    /** @type {?} */
    LookupItem.prototype.key;
}
export class ExtendedMainMenuGroup {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
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
export class KeyValueItem {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    KeyValueItem.prototype.key;
    /** @type {?} */
    KeyValueItem.prototype.value;
}
export class BreadCrumbItem {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    BreadCrumbItem.prototype.label;
    /** @type {?} */
    BreadCrumbItem.prototype.url;
}
export class ControlType {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
ControlType.Textbox = 'Textbox';
ControlType.Dropdown = 'Dropdown';
ControlType.Button = 'Button';
if (false) {
    /** @type {?} */
    ControlType.Textbox;
    /** @type {?} */
    ControlType.Dropdown;
    /** @type {?} */
    ControlType.Button;
}
export class MenuTab {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    MenuTab.prototype.role;
    /** @type {?} */
    MenuTab.prototype.items;
}
export class MenuItem {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
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
export class Breadcrumb {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    Breadcrumb.prototype.label;
    /** @type {?} */
    Breadcrumb.prototype.url;
    /** @type {?} */
    Breadcrumb.prototype.state;
}
export class MediaItem {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    MediaItem.prototype.src;
    /** @type {?} */
    MediaItem.prototype.name;
    /** @type {?} */
    MediaItem.prototype.fullSrc;
}
export class Audit {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
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
export class TrackingGroup {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    TrackingGroup.prototype.date;
    /** @type {?} */
    TrackingGroup.prototype.details;
}
export class TrackingDetail {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    TrackingDetail.prototype.description;
    /** @type {?} */
    TrackingDetail.prototype.time;
}
export class RecommendationResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.show = false;
        this.label = 'Kết quả gợi ý';
        this.deboundTime = 500;
        this.all = false;
        Object.assign(this, init);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL21vZGVscy9iYXNlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsTUFBTSxPQUFPLFFBQVE7Ozs7SUFFakIsWUFBWSxJQUEyQjtRQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQUEsQ0FBQztDQUNMOzs7SUFKRyw0QkFBZTs7Ozs7O0FBTW5CLE1BQU0sT0FBTyxXQUFlLFNBQVEsUUFBVzs7OztJQUUzQyxZQUFZLElBQThCO1FBQ3RDLEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUFBLENBQUM7Q0FDTDs7O0lBTEcsOEJBQVk7Ozs7OztBQU9oQixNQUFNLE9BQU8sWUFBWTs7OztJQUtyQixZQUFZLElBQStCO1FBQ3ZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFBQSxDQUFDO0NBQ0w7OztJQVBHLDRCQUFTOztJQUNULDhCQUFpQjs7SUFDakIsNEJBQWM7O0lBQ2QsK0JBQWlCOzs7QUFNckIsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFFBQWE7Ozs7SUFPaEQsWUFBWSxJQUFpQztRQUN6QyxLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFBQSxDQUFDO0NBQ0w7OztJQVZHLHVDQUFvQjs7SUFDcEIsc0NBQW1COztJQUNuQixxQ0FBa0I7O0lBQ2xCLHNDQUFtQjs7SUFDbkIsb0NBQWlCOztJQUNqQixnQ0FBYzs7Ozs7O0FBT2xCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFLM0IsWUFBWSxJQUFxQztRQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQUEsQ0FBQztDQUNMOzs7SUFQRyxtQ0FBWTs7SUFDWixxQ0FBa0I7O0lBQ2xCLGtDQUFjOztJQUNkLHFDQUFpQjs7O0FBTXJCLE1BQU0sT0FBTyxZQUFZOzs7O0lBSXJCLFlBQVksSUFBNEI7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUFBLENBQUM7Q0FDTDs7O0lBTkcsNEJBQVc7O0lBQ1gscUNBQXVCOztJQUN2QixnQ0FBcUI7OztBQU16QixNQUFNLE9BQU8sbUJBQW1COzs7O0lBSTVCLFlBQVksSUFBbUM7UUFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUFBLENBQUM7Q0FDTDs7O0lBTkcsb0NBQTBCOztJQUMxQixrQ0FBYTs7SUFDYiw2Q0FBb0I7OztBQU14QixNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBUXpCLFlBQVksSUFBZ0M7UUFENUMsVUFBSyxHQUFtSSxTQUFTLENBQUM7UUFFOUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKOzs7SUFWRyxrQ0FBZTs7SUFDZixpQ0FBYzs7SUFDZCxnQ0FBYTs7SUFDYixnQ0FBYzs7SUFDZCxvQ0FBa0I7O0lBQ2xCLG9DQUFrQjs7SUFDbEIsaUNBQWtKOztBQU10SixNQUFNLE9BQU8sb0JBQW9COzs7O0lBSTdCLFlBQVksSUFBb0M7UUFDNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKOzs7SUFORyw4Q0FBeUI7O0lBQ3pCLHNDQUFlOztJQUNmLHdDQUFtQjs7QUFNdkIsTUFBTSxPQUFPLFlBQVk7Ozs7SUFLckIsWUFBWSxJQUE0QjtRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7OztJQVBHLG9DQUFxQjs7SUFDckIsZ0NBQWM7O0lBQ2QsZ0NBQWM7O0lBQ2Qsa0NBQXVCOztBQU0zQixNQUFNLE9BQU8sVUFBVTs7OztJQUduQixZQUFZLElBQTBCO1FBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjs7O0lBTEcsMEJBQWE7O0lBQ2IseUJBQWE7O0FBTWpCLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFLOUIsWUFBWSxJQUFxQztRQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7OztJQVBHLHNDQUFjOztJQUNkLHlDQUFnQjs7SUFDaEIscUNBQWE7O0lBQ2IseUNBQW1COztBQU12QixNQUFNLE9BQU8sWUFBWTs7OztJQUdyQixZQUFZLElBQTRCO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjs7O0lBTEcsMkJBQVk7O0lBQ1osNkJBQWM7O0FBTWxCLE1BQU0sT0FBTyxjQUFjOzs7O0lBR3ZCLFlBQVksSUFBOEI7UUFDdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKOzs7SUFMRywrQkFBYzs7SUFDZCw2QkFBWTs7QUFNaEIsTUFBTSxPQUFPLFdBQVc7Ozs7SUFJcEIsWUFBWSxJQUEyQjtRQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOztBQUxNLG1CQUFPLEdBQVcsU0FBUyxDQUFDO0FBQzVCLG9CQUFRLEdBQVcsVUFBVSxDQUFDO0FBQzlCLGtCQUFNLEdBQVcsUUFBUSxDQUFDOzs7SUFGakMsb0JBQW1DOztJQUNuQyxxQkFBcUM7O0lBQ3JDLG1CQUFpQzs7QUFNckMsTUFBTSxPQUFPLE9BQU87Ozs7SUFHaEIsWUFBWSxJQUF1QjtRQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7OztJQUxHLHVCQUFhOztJQUNiLHdCQUErQjs7QUFNbkMsTUFBTSxPQUFPLFFBQVE7Ozs7SUFNakIsWUFBWSxJQUF3QjtRQUNoQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7OztJQVJHLHdCQUFhOztJQUNiLHlCQUErQjs7SUFDL0IsMkJBQWdCOztJQUNoQix3QkFBYzs7SUFDZCw0QkFBbUI7O0FBTXZCLE1BQU0sT0FBTyxVQUFVOzs7O0lBSW5CLFlBQVksSUFBMEI7UUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKOzs7SUFORywyQkFBYzs7SUFDZCx5QkFBWTs7SUFDWiwyQkFBZTs7QUFNbkIsTUFBTSxPQUFPLFNBQVM7Ozs7SUFJbEIsWUFBWSxJQUF5QjtRQUNqQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7OztJQU5HLHdCQUFZOztJQUNaLHlCQUFhOztJQUNiLDRCQUFnQjs7QUFNcEIsTUFBTSxPQUFPLEtBQUs7Ozs7SUFLZCxZQUFZLElBQXFCO1FBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjs7O0lBUEcsNEJBQW1COztJQUNuQiwwQkFBbUI7O0lBQ25CLGlDQUF3Qjs7SUFDeEIsK0JBQXdCOztBQU01QixNQUFNLE9BQU8sYUFBYTs7OztJQUd0QixZQUFZLElBQTZCO1FBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjs7O0lBTEcsNkJBQVc7O0lBQ1gsZ0NBQTBCOztBQU05QixNQUFNLE9BQU8sY0FBYzs7OztJQUd2QixZQUFZLElBQThCO1FBQ3RDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjs7O0lBTEcscUNBQW9COztJQUNwQiw4QkFBVzs7QUFNZixNQUFNLE9BQU8sc0JBQXNCOzs7O0lBUy9CLFlBQVksSUFBc0M7UUFObEQsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUd0QixVQUFLLEdBQVcsZUFBZSxDQUFDO1FBQ2hDLGdCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQzFCLFFBQUcsR0FBWSxLQUFLLENBQUM7UUFFakIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKOzs7SUFYRyw4Q0FBc0I7O0lBQ3RCLHlDQUFpQjs7SUFDakIsc0NBQXNCOztJQUN0Qiw0Q0FBb0I7O0lBQ3BCLDBDQUFxQjs7SUFDckIsdUNBQWdDOztJQUNoQyw2Q0FBMEI7O0lBQzFCLHFDQUFxQjs7Ozs7O0FBTXpCLCtCQUdDOzs7SUFGRyw0QkFBdUI7O0lBQ3ZCLDZCQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VUeXBlIH0gZnJvbSAnLi4vZW51bXMvYmFzZS5lbnVtJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vY2tEYXRhPFQ+IHtcclxuICAgIG1vY2tEYXRhPzogYW55O1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TW9ja0RhdGE8VD4+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlUmVxdWVzdDxUPiBleHRlbmRzIE1vY2tEYXRhPFQ+IHtcclxuICAgIHBheWxvYWQ/OiBUO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QmFzZVJlcXVlc3Q8VD4+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VSZXNwb25zZTxUPiB7XHJcbiAgICBkYXRhPzogVDtcclxuICAgIHN0YXR1cz86IGJvb2xlYW47XHJcbiAgICBjb2RlPzogbnVtYmVyO1xyXG4gICAgbWVzc2FnZT86IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEJhc2VSZXNwb25zZTxUPj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEJhc2VSZXF1ZXN0IGV4dGVuZHMgTW9ja0RhdGE8YW55PiB7XHJcbiAgICBzZWFyY2hUZXh0Pzogc3RyaW5nO1xyXG4gICAgcGFnZUluZGV4PzogbnVtYmVyO1xyXG4gICAgcGFnZVNpemU/OiBudW1iZXI7XHJcbiAgICBkaXJlY3Rpb24/OiBzdHJpbmc7XHJcbiAgICBvcmRlckJ5Pzogc3RyaW5nO1xyXG4gICAgYWxsPzogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFNlYXJjaEJhc2VSZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hCYXNlUmVzcG9uc2U8VD4ge1xyXG4gICAgaXRlbXM/OiBUW107XHJcbiAgICBzdWNjZXNzPzogYm9vbGVhbjtcclxuICAgIGNvZGU/OiBudW1iZXI7XHJcbiAgICBtZXNzYWdlPzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8U2VhcmNoQmFzZVJlc3BvbnNlPFQ+Pikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVRlbXBsYXRlIHtcclxuICAgIGRhdGE/OiBhbnk7XHJcbiAgICB2YWxpZGF0aW9uS2V5Pzogc3RyaW5nO1xyXG4gICAgdGVtcGxhdGU/OiBUeXBlPGFueT47XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxCYXNlVGVtcGxhdGU+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdG9yVmlld01vZGVsIHtcclxuICAgIHZhbHVlPzogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgICBrZXk/OiBzdHJpbmc7XHJcbiAgICBjdXJyZW50RW1pdHRlcjogYW55O1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QWdncmVnYXRvclZpZXdNb2RlbD4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkRlZmluaXRpb24ge1xyXG4gICAgYWN0aW9uOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgaWNvbjogc3RyaW5nO1xyXG4gICAgaGlkZTogYm9vbGVhbjtcclxuICAgIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgbGF6eWxvYWQ6IGJvb2xlYW47XHJcbiAgICBzdHlsZTogJ2RlZmF1bHQnIHwgJ3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnIHwgJ2RhbmdlcicgfCAnbGluaycgfCAnaW5mbycgfCAnaW52ZXJzZScgfCAncHJpbWFyeScgfCAnb3V0bGluZS1wcmltYXJ5JyB8ICdvdXRsaW5lLWludmVyc2UnID0gJ2RlZmF1bHQnO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QnV0dG9uRGVmaW5pdGlvbj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVG9vbGJhckFjdGlvblBheWxvYWQge1xyXG4gICAgbG9hZGVkQ2FsbGJhY2s6IEZ1bmN0aW9uO1xyXG4gICAgYWN0aW9uOiBzdHJpbmc7XHJcbiAgICBjYWxsYmFjazogRnVuY3Rpb247XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxUb29sYmFyQWN0aW9uUGF5bG9hZD4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0Q2hhbmdlIHtcclxuICAgIHByb3BlcnR5TmFtZTogc3RyaW5nO1xyXG4gICAgb2xkVmFsdWU6IGFueTtcclxuICAgIG5ld1ZhbHVlOiBhbnk7XHJcbiAgICBjaGFuZ2VUeXBlOiBDaGFuZ2VUeXBlO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8T2JqZWN0Q2hhbmdlPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb29rdXBJdGVtIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGtleT86IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPExvb2t1cEl0ZW0+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV4dGVuZGVkTWFpbk1lbnVHcm91cCB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW46IGFueVtdO1xyXG4gICAgaWNvbjogc3RyaW5nO1xyXG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8RXh0ZW5kZWRNYWluTWVudUdyb3VwPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBLZXlWYWx1ZUl0ZW0ge1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8S2V5VmFsdWVJdGVtPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCcmVhZENydW1iSXRlbSB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxCcmVhZENydW1iSXRlbT4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFR5cGUge1xyXG4gICAgc3RhdGljIFRleHRib3g6IHN0cmluZyA9ICdUZXh0Ym94JztcclxuICAgIHN0YXRpYyBEcm9wZG93bjogc3RyaW5nID0gJ0Ryb3Bkb3duJztcclxuICAgIHN0YXRpYyBCdXR0b246IHN0cmluZyA9ICdCdXR0b24nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8Q29udHJvbFR5cGU+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVUYWIge1xyXG4gICAgcm9sZTogc3RyaW5nO1xyXG4gICAgaXRlbXM6IEV4dGVuZGVkTWFpbk1lbnVHcm91cFtdO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TWVudVRhYj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudUl0ZW0ge1xyXG4gICAgbWVudTogc3RyaW5nO1xyXG4gICAgaXRlbXM6IEV4dGVuZGVkTWFpbk1lbnVHcm91cFtdO1xyXG4gICAgc3ViTmFtZTogc3RyaW5nO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPE1lbnVJdGVtPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iIHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHN0YXRlPzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QnJlYWRjcnVtYj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWVkaWFJdGVtIHtcclxuICAgIHNyYzogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZnVsbFNyYzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TWVkaWFJdGVtPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdWRpdCB7XHJcbiAgICBjcmVhdGVkRGF0ZT86IERhdGU7XHJcbiAgICBjcmVhdGVkQnk/OiBzdHJpbmc7XHJcbiAgICBsYXN0TW9kaWZpZWREYXRlPzogRGF0ZTtcclxuICAgIGxhc3RNb2RpZmllZEJ5Pzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXVkaXQ+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyYWNraW5nR3JvdXAge1xyXG4gICAgZGF0ZTogRGF0ZTtcclxuICAgIGRldGFpbHM6IFRyYWNraW5nRGV0YWlsW107XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxUcmFja2luZ0dyb3VwPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFja2luZ0RldGFpbCB7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgdGltZTogRGF0ZTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFRyYWNraW5nRGV0YWlsPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZWNvbW1lbmRhdGlvblJlc3BvbnNlIHtcclxuICAgIHNlbGVjdGVkTWVudT86IHN0cmluZztcclxuICAgIGtleXdvcmQ/OiBzdHJpbmc7XHJcbiAgICBzaG93OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzZWFyY2hQYXRoPzogc3RyaW5nO1xyXG4gICAgdGVtcGxhdGU/OiBUeXBlPGFueT47XHJcbiAgICBsYWJlbDogc3RyaW5nID0gJ0vhur90IHF14bqjIGfhu6NpIMO9JztcclxuICAgIGRlYm91bmRUaW1lOiBudW1iZXIgPSA1MDA7XHJcbiAgICBhbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFJlY29tbWVuZGF0aW9uUmVzcG9uc2U+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2FsbGJhY2s8VD4ge1xyXG4gICAgaXNWYWxpZDogKCkgPT4gYm9vbGVhbjtcclxuICAgIGNhbGxiYWNrOiAodmFsdWU6IGFueSkgPT4gT2JzZXJ2YWJsZTxUPjtcclxufSJdfQ==