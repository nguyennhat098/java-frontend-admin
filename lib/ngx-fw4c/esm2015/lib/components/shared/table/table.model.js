/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/table/table.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function TableEditInline() { }
if (false) {
    /** @type {?|undefined} */
    TableEditInline.prototype.enabled;
    /** @type {?|undefined} */
    TableEditInline.prototype.autoCommit;
    /** @type {?|undefined} */
    TableEditInline.prototype.createAsync;
    /** @type {?|undefined} */
    TableEditInline.prototype.updateAsync;
}
/**
 * @record
 */
export function TableCell() { }
if (false) {
    /** @type {?|undefined} */
    TableCell.prototype.item;
    /** @type {?|undefined} */
    TableCell.prototype.column;
}
export class TableColumn {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    TableColumn.prototype.title;
    /** @type {?} */
    TableColumn.prototype.valueRef;
    /** @type {?} */
    TableColumn.prototype.inlineCallback;
    /** @type {?} */
    TableColumn.prototype.direction;
    /** @type {?} */
    TableColumn.prototype.allowSort;
    /** @type {?} */
    TableColumn.prototype.allowFilter;
    /** @type {?} */
    TableColumn.prototype.order;
    /** @type {?} */
    TableColumn.prototype.customClass;
    /** @type {?} */
    TableColumn.prototype.defaultSorter;
    /** @type {?} */
    TableColumn.prototype.width;
    /** @type {?} */
    TableColumn.prototype.textAlign;
    /** @type {?} */
    TableColumn.prototype.type;
    /** @type {?} */
    TableColumn.prototype.showTooltip;
    /** @type {?} */
    TableColumn.prototype.inlineEdit;
    /** @type {?} */
    TableColumn.prototype.icon;
    /** @type {?} */
    TableColumn.prototype.validationOption;
    /** @type {?} */
    TableColumn.prototype.callback;
    /** @type {?} */
    TableColumn.prototype.customTemplate;
    /** @type {?} */
    TableColumn.prototype.hide;
    /** @type {?} */
    TableColumn.prototype.dropdownConfiguration;
    /** @type {?} */
    TableColumn.prototype.id;
    /** @type {?} */
    TableColumn.prototype.filterTemplate;
}
export class TableSorter {
}
if (false) {
    /** @type {?} */
    TableSorter.prototype.direction;
    /** @type {?} */
    TableSorter.prototype.orderBy;
    /** @type {?} */
    TableSorter.prototype.order;
}
export class TableAction {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.type = TableConstant.ActionType.Inline;
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    TableAction.prototype.id;
    /** @type {?} */
    TableAction.prototype.title;
    /** @type {?} */
    TableAction.prototype.tooltip;
    /** @type {?} */
    TableAction.prototype.icon;
    /** @type {?} */
    TableAction.prototype.type;
    /** @type {?} */
    TableAction.prototype.customClass;
    /** @type {?} */
    TableAction.prototype.executeAsync;
    /** @type {?} */
    TableAction.prototype.disabled;
    /** @type {?} */
    TableAction.prototype.hide;
    /** @type {?} */
    TableAction.prototype.lazyload;
}
/**
 * @record
 */
export function TableRequest() { }
if (false) {
    /** @type {?|undefined} */
    TableRequest.prototype.searchText;
    /** @type {?|undefined} */
    TableRequest.prototype.pageSize;
    /** @type {?|undefined} */
    TableRequest.prototype.pageIndex;
    /** @type {?|undefined} */
    TableRequest.prototype.sorters;
    /** @type {?|undefined} */
    TableRequest.prototype.data;
}
export class TableText {
    constructor() {
        this.placeholderSearch = TableConstant.DisplayText.PlaceholderSearch;
        this.btnSearch = TableConstant.DisplayText.BtnSearch;
        this.btnReset = TableConstant.DisplayText.BtnReset;
        this.action = TableConstant.DisplayText.Action;
        this.selectPageSize = TableConstant.DisplayText.SelectPageSize;
        this.deleteTitle = TableConstant.DisplayText.DeleteTitle;
        this.btnAcceptTitle = TableConstant.DisplayText.BtnAcceptTitle;
        this.btnCancelTitle = TableConstant.DisplayText.BtnCancelTitle;
        this.filterTitle = TableConstant.DisplayText.FilterTitle;
        this.applyFilter = TableConstant.DisplayText.ApplyFilter;
        this.detailTitle = TableConstant.DisplayText.DetailTitle;
        this.pageTitle = TableConstant.DisplayText.PageTitle;
        this.advancedSearchTitle = TableConstant.DisplayText.AdvancedSearchTitle;
        this.advancedBtnTitle = TableConstant.DisplayText.AdvancedBtnTitle;
        this.advancedBtnCancelTitle = TableConstant.DisplayText.AdvancedBtnCancelTitle;
        this.allTitle = TableConstant.DisplayText.AllTitle;
        this.actionIcon = TableConstant.DisplayText.ActionIcon;
    }
}
if (false) {
    /** @type {?} */
    TableText.prototype.placeholderSearch;
    /** @type {?} */
    TableText.prototype.btnSearch;
    /** @type {?} */
    TableText.prototype.btnReset;
    /** @type {?} */
    TableText.prototype.action;
    /** @type {?} */
    TableText.prototype.selectPageSize;
    /** @type {?} */
    TableText.prototype.deleteTitle;
    /** @type {?} */
    TableText.prototype.btnAcceptTitle;
    /** @type {?} */
    TableText.prototype.btnCancelTitle;
    /** @type {?} */
    TableText.prototype.filterTitle;
    /** @type {?} */
    TableText.prototype.applyFilter;
    /** @type {?} */
    TableText.prototype.detailTitle;
    /** @type {?} */
    TableText.prototype.pageTitle;
    /** @type {?} */
    TableText.prototype.advancedSearchTitle;
    /** @type {?} */
    TableText.prototype.advancedBtnTitle;
    /** @type {?} */
    TableText.prototype.advancedBtnCancelTitle;
    /** @type {?} */
    TableText.prototype.allTitle;
    /** @type {?} */
    TableText.prototype.actionIcon;
}
export class TableMessage {
    constructor() {
        this.notFoundMessage = TableConstant.Message.NotFoundMessage;
        this.foundMessage = TableConstant.Message.FoundMessage;
        this.invalidFormatMessage = TableConstant.Message.InvalidFormatMessage;
        this.selectedItemsMessage = TableConstant.Message.SelectedItemsMessage;
        this.confirmSelectAllRecordsMessage = TableConstant.Message.ConfirmSelectAllRecordsMessage;
        this.confirmClearAllRecordsMessage = TableConstant.Message.ConfirmClearAllRecordsMessage;
        this.deleteMessage = TableConstant.Message.DeleteMessage;
        this.loadingMessage = TableConstant.Message.LoadingMessage;
        this.refMessage = TableConstant.Message.RefMessage;
    }
}
if (false) {
    /** @type {?} */
    TableMessage.prototype.notFoundMessage;
    /** @type {?} */
    TableMessage.prototype.foundMessage;
    /** @type {?} */
    TableMessage.prototype.invalidFormatMessage;
    /** @type {?} */
    TableMessage.prototype.selectedItemsMessage;
    /** @type {?} */
    TableMessage.prototype.confirmSelectAllRecordsMessage;
    /** @type {?} */
    TableMessage.prototype.confirmClearAllRecordsMessage;
    /** @type {?} */
    TableMessage.prototype.deleteMessage;
    /** @type {?} */
    TableMessage.prototype.loadingMessage;
    /** @type {?} */
    TableMessage.prototype.refMessage;
}
/**
 * @record
 * @template T
 */
export function TableResponse() { }
if (false) {
    /** @type {?|undefined} */
    TableResponse.prototype.totalRecords;
    /** @type {?|undefined} */
    TableResponse.prototype.items;
}
/**
 * @record
 */
export function TableServiceProvider() { }
if (false) {
    /** @type {?|undefined} */
    TableServiceProvider.prototype.searchAsync;
    /** @type {?|undefined} */
    TableServiceProvider.prototype.createAsync;
    /** @type {?|undefined} */
    TableServiceProvider.prototype.updateAsync;
    /** @type {?|undefined} */
    TableServiceProvider.prototype.deleteAsync;
    /** @type {?|undefined} */
    TableServiceProvider.prototype.exportAsync;
}
export class TableDatetimeFormat {
    /**
     * @param {?} init
     */
    constructor(init) {
        this.format = 'MM/dd/yyyy';
        this.full = true;
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    TableDatetimeFormat.prototype.format;
    /** @type {?} */
    TableDatetimeFormat.prototype.full;
}
export class EdittedField {
    /**
     * @param {?} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    EdittedField.prototype.item;
    /** @type {?} */
    EdittedField.prototype.field;
    /** @type {?} */
    EdittedField.prototype.index;
}
export class ChangedCell {
    /**
     * @param {?} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ChangedCell.prototype.oldValue;
    /** @type {?} */
    ChangedCell.prototype.field;
    /** @type {?} */
    ChangedCell.prototype.currentValue;
}
export class ChangedRow {
    /**
     * @param {?} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ChangedRow.prototype.currentItem;
    /** @type {?} */
    ChangedRow.prototype.oldItem;
    /** @type {?} */
    ChangedRow.prototype.cells;
}
export class TableOption {
    /**
     * @param {?} init
     */
    constructor(init) {
        this.multiple = true;
        this.datetimeFormat = new TableDatetimeFormat({});
        this.mainColumns = [];
        this.actions = [];
        this.topButtons = [];
        this.defaultPageSize = 5;
        this.totalToolbarItem = 5;
        this.mode = TableMode.full;
        this.hideSequenceColumn = false;
        this.hideCheckboxColumn = false;
        this.inlineEdit = false;
        this.hasColumnFilter = false;
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    TableOption.prototype.sort;
    /** @type {?} */
    TableOption.prototype.multiple;
    /** @type {?} */
    TableOption.prototype.datetimeFormat;
    /** @type {?} */
    TableOption.prototype.paging;
    /** @type {?} */
    TableOption.prototype.selectedItems;
    /** @type {?} */
    TableOption.prototype.serviceProvider;
    /** @type {?} */
    TableOption.prototype.localData;
    /** @type {?} */
    TableOption.prototype.request;
    /** @type {?} */
    TableOption.prototype.mainColumns;
    /** @type {?} */
    TableOption.prototype.displayText;
    /** @type {?} */
    TableOption.prototype.message;
    /** @type {?} */
    TableOption.prototype.componentClass;
    /** @type {?} */
    TableOption.prototype.actions;
    /** @type {?} */
    TableOption.prototype.topButtons;
    /** @type {?} */
    TableOption.prototype.rowDetailTemplate;
    /** @type {?} */
    TableOption.prototype.expandFilterArea;
    /** @type {?} */
    TableOption.prototype.pageSizes;
    /** @type {?} */
    TableOption.prototype.defaultPageSize;
    /** @type {?} */
    TableOption.prototype.totalToolbarItem;
    /** @type {?} */
    TableOption.prototype.maxPage;
    /** @type {?} */
    TableOption.prototype.key;
    /** @type {?} */
    TableOption.prototype.title;
    /** @type {?} */
    TableOption.prototype.maxLenghtext;
    /** @type {?} */
    TableOption.prototype.mode;
    /** @type {?} */
    TableOption.prototype.hideSequenceColumn;
    /** @type {?} */
    TableOption.prototype.hideCheckboxColumn;
    /** @type {?} */
    TableOption.prototype.displayMode;
    /** @type {?} */
    TableOption.prototype.defaultOrderBy;
    /** @type {?} */
    TableOption.prototype.defautOrderDirection;
    /** @type {?} */
    TableOption.prototype.inlineEdit;
    /** @type {?} */
    TableOption.prototype.searchFields;
    /** @type {?} */
    TableOption.prototype.hasColumnFilter;
    /** @type {?} */
    TableOption.prototype.selectedChange;
}
/** @enum {string} */
const TableMode = {
    compact: "compact",
    full: "full",
};
export { TableMode };
export class TableConstant {
}
TableConstant.ComponentClass = 'primary';
TableConstant.Key = 'name';
TableConstant.DatetimeLocate = 'vi-VN';
TableConstant.PageSizes = [5, 10, 15, 20, 50];
TableConstant.Message = {
    NotFoundMessage: 'Chưa có thông tin',
    InvalidFormatMessage: 'không hợp lệ.',
    FoundMessage: 'Tìm thấy <span class="confirm-highlight">[0]</span> kết quả.',
    SelectedItemsMessage: 'Đã chọn <span class="highlight">[0]</span> bản ghi.',
    ConfirmSelectAllRecordsMessage: '<span class="confirm-highlight">Chọn tất cả kết quả?</span>',
    ConfirmClearAllRecordsMessage: '<span class="confirm-highlight text-danger">Bỏ chọn tất cả </span>?',
    DeleteMessage: 'Bạn có chắc chắn muốn xóa <span class="confirm-highlight text-danger">[0]</span> không?',
    LoadingMessage: 'Đang tải dữ liệu...',
    RefMessage: 'liên quan tới'
};
TableConstant.DisplayText = {
    PlaceholderSearch: 'Nhập từ khóa tìm kiếm...',
    BtnReset: 'Khôi phục',
    BtnSearch: 'Tìm kiếm',
    Action: 'Hành động',
    SelectPageSize: 'Hiển thị',
    DeleteTitle: 'Xóa',
    BtnAcceptTitle: 'Đồng ý',
    BtnCancelTitle: 'Đóng',
    FilterTitle: 'Tìm kiếm theo',
    ApplyFilter: 'Áp dụng lọc',
    DetailTitle: 'Thông tin chi tiết',
    PageTitle: 'Trang',
    AdvancedSearchTitle: 'Tìm kiếm nâng cao',
    AdvancedBtnTitle: 'Tìm kiếm',
    AdvancedBtnCancelTitle: 'Hủy bỏ',
    AllTitle: 'Tất cả',
    ActionIcon: 'fa fa-bell'
};
TableConstant.Direction = {
    ASC: 'asc',
    DESC: 'desc'
};
TableConstant.TextAlign = {
    Left: 'left',
    Right: 'right',
    Center: 'center'
};
TableConstant.Action = {
    Edit: 'edit',
    Delete: 'delete',
    Custom: 'Custom'
};
TableConstant.ActionType = {
    Both: 'both',
    Toolbar: 'toolbar',
    Inline: 'inline'
};
if (false) {
    /** @type {?} */
    TableConstant.ComponentClass;
    /** @type {?} */
    TableConstant.Key;
    /** @type {?} */
    TableConstant.DatetimeLocate;
    /** @type {?} */
    TableConstant.PageSizes;
    /** @type {?} */
    TableConstant.Message;
    /** @type {?} */
    TableConstant.DisplayText;
    /** @type {?} */
    TableConstant.Direction;
    /** @type {?} */
    TableConstant.TextAlign;
    /** @type {?} */
    TableConstant.Action;
    /** @type {?} */
    TableConstant.ActionType;
}
;
/** @enum {string} */
const TableColumnType = {
    Number: "number",
    String: "string",
    Date: "date",
    DateTime: "datetime",
    DateRange: "daterange",
    DateTimeRange: "datetimerange",
    Time: "time",
    TimeRange: "timerange",
    Boolean: "boolean",
    Description: "description",
    Currency: "currency",
    Dropdown: "dropdown",
    Custom: "custom",
};
export { TableColumnType };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC90YWJsZS90YWJsZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUtBLHFDQUtDOzs7SUFKQyxrQ0FBa0I7O0lBQ2xCLHFDQUFxQjs7SUFDckIsc0NBQTZDOztJQUM3QyxzQ0FBbUU7Ozs7O0FBR3JFLCtCQUdDOzs7SUFGQyx5QkFBVzs7SUFDWCwyQkFBcUI7O0FBR3ZCLE1BQU0sT0FBTyxXQUFXOzs7O0lBNkJ0QixZQUFZLElBQTJCO1FBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjs7O0lBL0JDLDRCQUFxQjs7SUFDckIsK0JBQXFCOztJQUNyQixxQ0FBcUQ7O0lBQ3JELGdDQUFtQjs7SUFDbkIsZ0NBQW9COztJQUNwQixrQ0FBc0I7O0lBQ3RCLDRCQUFlOztJQUNmLGtDQUFxQjs7SUFDckIsb0NBQXdCOztJQUN4Qiw0QkFBZTs7SUFDZixnQ0FBbUI7O0lBQ25CLDJCQUF1Qjs7SUFDdkIsa0NBQXNCOztJQUN0QixpQ0FBcUI7O0lBQ3JCLDJCQUFjOztJQUNkLHVDQUFvQzs7SUFDcEMsK0JBQWtGOztJQUNsRixxQ0FBd0M7O0lBQ3hDLDJCQUFxQjs7SUFDckIsNENBS0U7O0lBQ0YseUJBQVk7O0lBQ1oscUNBQXdDOztBQU8xQyxNQUFNLE9BQU8sV0FBVztDQUl2Qjs7O0lBSEMsZ0NBQW1COztJQUNuQiw4QkFBaUI7O0lBQ2pCLDRCQUFlOztBQUdqQixNQUFNLE9BQU8sV0FBVzs7OztJQVd0QixZQUFZLElBQTJCO1FBTnZDLFNBQUksR0FBWSxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQU85QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7OztJ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S0FBSztJQUNWLElBQUksRUFBRSxNQUFNO0NBQ2IsQ0FBQztBQUVZLHVCQUFTLEdBQUc7SUFDeEIsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsT0FBTztJQUNkLE1BQU0sRUFBRSxRQUFRO0NBQ2pCLENBQUM7QUFFWSxvQkFBTSxHQUFHO0lBQ3JCLElBQUksRUFBRSxNQUFNO0lBQ1osTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7Q0FDakIsQ0FBQTtBQUNhLHdCQUFVLEdBQUc7SUFDekIsSUFBSSxFQUFFLE1BQU07SUFDWixPQUFPLEVBQUUsU0FBUztJQUNsQixNQUFNLEVBQUUsUUFBUTtDQUNqQixDQUFBOzs7SUF4REQsNkJBQWlEOztJQUNqRCxrQkFBbUM7O0lBQ25DLDZCQUErQzs7SUFDL0Msd0JBQXdEOztJQUN4RCxzQkFVRTs7SUFFRiwwQkFrQkU7O0lBRUYsd0JBR0U7O0lBRUYsd0JBSUU7O0lBRUYscUJBSUM7O0lBQ0QseUJBSUM7O0FBQ0YsQ0FBQzs7QUFFRixNQUFZLGVBQWU7SUFDekIsTUFBTSxVQUFXO0lBQ2pCLE1BQU0sVUFBVztJQUNqQixJQUFJLFFBQVM7SUFDYixRQUFRLFlBQWE7SUFDckIsU0FBUyxhQUFjO0lBQ3ZCLGFBQWEsaUJBQWtCO0lBQy9CLElBQUksUUFBUztJQUNiLFNBQVMsYUFBYztJQUN2QixPQUFPLFdBQVk7SUFDbkIsV0FBVyxlQUFnQjtJQUMzQixRQUFRLFlBQWE7SUFDckIsUUFBUSxZQUFhO0lBQ3JCLE1BQU0sVUFBVztFQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUmVmLCBFbGVtZW50UmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25PcHRpb24gfSBmcm9tICcuLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24ubW9kZWwnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZUVkaXRJbmxpbmUge1xyXG4gIGVuYWJsZWQ/OiBib29sZWFuO1xyXG4gIGF1dG9Db21taXQ/OiBib29sZWFuO1xyXG4gIGNyZWF0ZUFzeW5jPzogKGl0ZW06IGFueSkgPT4gT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHVwZGF0ZUFzeW5jPzogKGl0ZW06IGFueSwgY29sdW1uPzogVGFibGVDb2x1bW4pID0+IE9ic2VydmFibGU8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZUNlbGwge1xyXG4gIGl0ZW0/OiBhbnk7XHJcbiAgY29sdW1uPzogVGFibGVDb2x1bW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbHVtbiB7XHJcbiAgdGl0bGU/OiAoKSA9PiBzdHJpbmc7XHJcbiAgdmFsdWVSZWY/OiAoKSA9PiBhbnk7XHJcbiAgaW5saW5lQ2FsbGJhY2s/OiAoaXRlbT86IGFueSwgZmllbGQ/OiBzdHJpbmcpID0+IGFueTtcclxuICBkaXJlY3Rpb24/OiBzdHJpbmc7XHJcbiAgYWxsb3dTb3J0PzogYm9vbGVhbjtcclxuICBhbGxvd0ZpbHRlcj86IGJvb2xlYW47XHJcbiAgb3JkZXI/OiBudW1iZXI7XHJcbiAgY3VzdG9tQ2xhc3M/OiBzdHJpbmc7XHJcbiAgZGVmYXVsdFNvcnRlcj86IGJvb2xlYW47XHJcbiAgd2lkdGg/OiBudW1iZXI7XHJcbiAgdGV4dEFsaWduPzogc3RyaW5nO1xyXG4gIHR5cGU/OiBUYWJsZUNvbHVtblR5cGU7XHJcbiAgc2hvd1Rvb2x0aXA/OiBib29sZWFuO1xyXG4gIGlubGluZUVkaXQ/OiBib29sZWFuO1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgdmFsaWRhdGlvbk9wdGlvbj86IFZhbGlkYXRpb25PcHRpb247XHJcbiAgY2FsbGJhY2s/OiAocHJvdmlkZXI/OiBUYWJsZUNvbXBvbmVudCwgZWxlbWVudD86IEVsZW1lbnRSZWYsICRldmVudD86IGFueSkgPT4gYW55O1xyXG4gIGN1c3RvbVRlbXBsYXRlPzogKCkgPT4gVGVtcGxhdGVSZWY8YW55PjtcclxuICBoaWRlPzogKCkgPT4gYm9vbGVhbjtcclxuICBkcm9wZG93bkNvbmZpZ3VyYXRpb24/OiB7XHJcbiAgICBzZWFyY2hGdW5jdGlvbjogKHRleHQ6IHN0cmluZywgaW5kZXg6IG51bWJlciwgY3VycmVudFBhZ2U6IG51bWJlciwgcGFnZVNpemU6IG51bWJlcikgPT4gT2JzZXJ2YWJsZTx7IGl0ZW1zOiBhbnlbXSwgdG90YWxSZWNvcmRzOiBudW1iZXIgfT4sXHJcbiAgICBtdWx0aXBsZT86IGJvb2xlYW4sXHJcbiAgICBiaW5kTGFiZWw6IHN0cmluZyxcclxuICAgIGJpbmRWYWx1ZTogc3RyaW5nLFxyXG4gIH07XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbiAgZmlsdGVyVGVtcGxhdGU/OiAoKSA9PiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxUYWJsZUNvbHVtbj4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVTb3J0ZXIge1xyXG4gIGRpcmVjdGlvbj86IHN0cmluZztcclxuICBvcmRlckJ5Pzogc3RyaW5nO1xyXG4gIG9yZGVyPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVBY3Rpb24ge1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIHRpdGxlPzogKCkgPT4gc3RyaW5nO1xyXG4gIHRvb2x0aXA/OiAoKSA9PiBzdHJpbmc7XHJcbiAgaWNvbj86IHN0cmluZztcclxuICB0eXBlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5BY3Rpb25UeXBlLklubGluZTtcclxuICBjdXN0b21DbGFzcz86IHN0cmluZztcclxuICBleGVjdXRlQXN5bmM/OiAoaXRlbT86IGFueSwgZWxlbWVudD86IEVsZW1lbnRSZWYsIHByb3ZpZGVyPzogYW55LCBpbmRleD86IG51bWJlciwgbG9hZGVkQ2FsbGJhY2s/OiBGdW5jdGlvbikgPT4gYW55O1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICBoaWRlPzogKGl0ZW0/OiBhbnkpID0+IGJvb2xlYW47XHJcbiAgbGF6eWxvYWQ/OiBib29sZWFuO1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFRhYmxlQWN0aW9uPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVSZXF1ZXN0IHtcclxuICBzZWFyY2hUZXh0Pzogc3RyaW5nO1xyXG4gIHBhZ2VTaXplPzogbnVtYmVyO1xyXG4gIHBhZ2VJbmRleD86IG51bWJlcjtcclxuICBzb3J0ZXJzPzogVGFibGVTb3J0ZXJbXTtcclxuICBkYXRhPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVUZXh0IHtcclxuICBwbGFjZWhvbGRlclNlYXJjaD86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuUGxhY2Vob2xkZXJTZWFyY2g7XHJcbiAgYnRuU2VhcmNoPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5CdG5TZWFyY2g7XHJcbiAgYnRuUmVzZXQ/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkJ0blJlc2V0O1xyXG4gIGFjdGlvbj86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQWN0aW9uO1xyXG4gIHNlbGVjdFBhZ2VTaXplPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5TZWxlY3RQYWdlU2l6ZTtcclxuICBkZWxldGVUaXRsZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuRGVsZXRlVGl0bGU7XHJcbiAgYnRuQWNjZXB0VGl0bGU/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkJ0bkFjY2VwdFRpdGxlO1xyXG4gIGJ0bkNhbmNlbFRpdGxlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5CdG5DYW5jZWxUaXRsZVxyXG4gIGZpbHRlclRpdGxlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5GaWx0ZXJUaXRsZTtcclxuICBhcHBseUZpbHRlcj86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQXBwbHlGaWx0ZXI7XHJcbiAgZGV0YWlsVGl0bGU/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkRldGFpbFRpdGxlO1xyXG4gIHBhZ2VUaXRsZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuUGFnZVRpdGxlO1xyXG4gIGFkdmFuY2VkU2VhcmNoVGl0bGU/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkFkdmFuY2VkU2VhcmNoVGl0bGU7XHJcbiAgYWR2YW5jZWRCdG5UaXRsZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQWR2YW5jZWRCdG5UaXRsZTtcclxuICBhZHZhbmNlZEJ0bkNhbmNlbFRpdGxlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5BZHZhbmNlZEJ0bkNhbmNlbFRpdGxlO1xyXG4gIGFsbFRpdGxlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5BbGxUaXRsZTtcclxuICBhY3Rpb25JY29uPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5BY3Rpb25JY29uO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVNZXNzYWdlIHtcclxuICBub3RGb3VuZE1lc3NhZ2U/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuTm90Rm91bmRNZXNzYWdlO1xyXG4gIGZvdW5kTWVzc2FnZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5Gb3VuZE1lc3NhZ2U7XHJcbiAgaW52YWxpZEZvcm1hdE1lc3NhZ2U/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuSW52YWxpZEZvcm1hdE1lc3NhZ2U7XHJcbiAgc2VsZWN0ZWRJdGVtc01lc3NhZ2U/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuU2VsZWN0ZWRJdGVtc01lc3NhZ2U7XHJcbiAgY29uZmlybVNlbGVjdEFsbFJlY29yZHNNZXNzYWdlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5NZXNzYWdlLkNvbmZpcm1TZWxlY3RBbGxSZWNvcmRzTWVzc2FnZTtcclxuICBjb25maXJtQ2xlYXJBbGxSZWNvcmRzTWVzc2FnZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5Db25maXJtQ2xlYXJBbGxSZWNvcmRzTWVzc2FnZTtcclxuICBkZWxldGVNZXNzYWdlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5NZXNzYWdlLkRlbGV0ZU1lc3NhZ2U7XHJcbiAgbG9hZGluZ01lc3NhZ2U/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuTG9hZGluZ01lc3NhZ2U7XHJcbiAgcmVmTWVzc2FnZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5SZWZNZXNzYWdlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlUmVzcG9uc2U8VD4ge1xyXG4gIHRvdGFsUmVjb3Jkcz86IG51bWJlcjtcclxuICBpdGVtcz86IFRbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZVNlcnZpY2VQcm92aWRlciB7XHJcbiAgc2VhcmNoQXN5bmM/OiAocmVxdWVzdD86IGFueSkgPT4gT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIGNyZWF0ZUFzeW5jPzogKGl0ZW06IGFueSkgPT4gT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHVwZGF0ZUFzeW5jPzogKGl0ZW06IGFueSkgPT4gT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIGRlbGV0ZUFzeW5jPzogKGlkczogc3RyaW5nLCBhbGw/OiBib29sZWFuKSA9PiBPYnNlcnZhYmxlPGFueT47XHJcbiAgZXhwb3J0QXN5bmM/OiAocmVxdWVzdD86IGFueSkgPT4gT2JzZXJ2YWJsZTxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVEYXRldGltZUZvcm1hdCB7XHJcbiAgZm9ybWF0OiBzdHJpbmcgPSAnTU0vZGQveXl5eSc7XHJcbiAgZnVsbDogYm9vbGVhbiA9IHRydWU7XHJcbiAgY29uc3RydWN0b3IoaW5pdDogUGFydGlhbDxUYWJsZURhdGV0aW1lRm9ybWF0Pikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0dGVkRmllbGQge1xyXG4gIGl0ZW0/OiBhbnk7XHJcbiAgZmllbGQ/OiBzdHJpbmc7XHJcbiAgaW5kZXg/OiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IoaW5pdDogUGFydGlhbDxFZGl0dGVkRmllbGQ+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZWRDZWxsIHtcclxuICBvbGRWYWx1ZT86IGFueTtcclxuICBmaWVsZD86IHN0cmluZztcclxuICBjdXJyZW50VmFsdWU/OiBhbnk7XHJcbiAgY29uc3RydWN0b3IoaW5pdDogUGFydGlhbDxDaGFuZ2VkQ2VsbD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlZFJvdyB7XHJcbiAgY3VycmVudEl0ZW0/OiBhbnk7XHJcbiAgb2xkSXRlbT86IGFueTtcclxuICBjZWxscz86IENoYW5nZWRDZWxsW107XHJcbiAgY29uc3RydWN0b3IoaW5pdDogUGFydGlhbDxDaGFuZ2VkUm93Pikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZU9wdGlvbiB7XHJcbiAgc29ydD86IChhOiBhbnksIGI6IGFueSwgb3JkZXJCeTogc3RyaW5nKSA9PiBudW1iZXI7XHJcbiAgbXVsdGlwbGU/OiBib29sZWFuID0gdHJ1ZTtcclxuICBkYXRldGltZUZvcm1hdD86IFRhYmxlRGF0ZXRpbWVGb3JtYXQgPSBuZXcgVGFibGVEYXRldGltZUZvcm1hdCh7fSk7XHJcbiAgcGFnaW5nPzogYm9vbGVhbjtcclxuICBzZWxlY3RlZEl0ZW1zPzogYW55W107XHJcbiAgc2VydmljZVByb3ZpZGVyPzogVGFibGVTZXJ2aWNlUHJvdmlkZXI7XHJcbiAgbG9jYWxEYXRhPzogKCkgPT4gT2JzZXJ2YWJsZTxhbnlbXT47XHJcbiAgcmVxdWVzdD86IFRhYmxlUmVxdWVzdDtcclxuICBtYWluQ29sdW1uczogVGFibGVDb2x1bW5bXSA9IFtdO1xyXG4gIGRpc3BsYXlUZXh0PzogVGFibGVUZXh0O1xyXG4gIG1lc3NhZ2U/OiBUYWJsZU1lc3NhZ2U7XHJcbiAgY29tcG9uZW50Q2xhc3M/OiBzdHJpbmc7XHJcbiAgYWN0aW9ucz86IFRhYmxlQWN0aW9uW10gPSBbXTtcclxuICB0b3BCdXR0b25zPzogVGFibGVBY3Rpb25bXSA9IFtdO1xyXG4gIHJvd0RldGFpbFRlbXBsYXRlPzogVHlwZTxhbnk+O1xyXG4gIGV4cGFuZEZpbHRlckFyZWE/OiBib29sZWFuO1xyXG4gIHBhZ2VTaXplcz86IG51bWJlcltdO1xyXG4gIGRlZmF1bHRQYWdlU2l6ZT86IG51bWJlciA9IDU7XHJcbiAgdG90YWxUb29sYmFySXRlbT86IG51bWJlciA9IDU7XHJcbiAgbWF4UGFnZT86IG51bWJlcjtcclxuICBrZXk/OiBzdHJpbmc7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgbWF4TGVuZ2h0ZXh0PzogbnVtYmVyO1xyXG4gIG1vZGU6IFRhYmxlTW9kZSA9IFRhYmxlTW9kZS5mdWxsO1xyXG4gIGhpZGVTZXF1ZW5jZUNvbHVtbj86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBoaWRlQ2hlY2tib3hDb2x1bW4/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgZGlzcGxheU1vZGU/OiAnbGlzdCcgfCAnZnVsbCc7XHJcbiAgZGVmYXVsdE9yZGVyQnk/OiBzdHJpbmc7XHJcbiAgZGVmYXV0T3JkZXJEaXJlY3Rpb24/OiBzdHJpbmc7XHJcbiAgaW5saW5lRWRpdD86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzZWFyY2hGaWVsZHM/OiBzdHJpbmdbXTtcclxuICBoYXNDb2x1bW5GaWx0ZXI/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2VsZWN0ZWRDaGFuZ2U6IChpdGVtOiBhbnkpID0+IGFueTtcclxuICBjb25zdHJ1Y3Rvcihpbml0OiBQYXJ0aWFsPFRhYmxlT3B0aW9uPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRhYmxlTW9kZSB7XHJcbiAgY29tcGFjdCA9ICdjb21wYWN0JyxcclxuICBmdWxsID0gJ2Z1bGwnXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbnN0YW50IHtcclxuICBwdWJsaWMgc3RhdGljIENvbXBvbmVudENsYXNzOiBzdHJpbmcgPSAncHJpbWFyeSc7XHJcbiAgcHVibGljIHN0YXRpYyBLZXk6IHN0cmluZyA9ICduYW1lJztcclxuICBwdWJsaWMgc3RhdGljIERhdGV0aW1lTG9jYXRlOiBzdHJpbmcgPSAndmktVk4nO1xyXG4gIHB1YmxpYyBzdGF0aWMgUGFnZVNpemVzOiBudW1iZXJbXSA9IFs1LCAxMCwgMTUsIDIwLCA1MF07XHJcbiAgcHVibGljIHN0YXRpYyBNZXNzYWdlID0ge1xyXG4gICAgTm90Rm91bmRNZXNzYWdlOiAnQ2jGsGEgY8OzIHRow7RuZyB0aW4nLFxyXG4gICAgSW52YWxpZEZvcm1hdE1lc3NhZ2U6ICdraMO0bmcgaOG7o3AgbOG7hy4nLFxyXG4gICAgRm91bmRNZXNzYWdlOiAnVMOsbSB0aOG6pXkgPHNwYW4gY2xhc3M9XCJjb25maXJtLWhpZ2hsaWdodFwiPlswXTwvc3Bhbj4ga+G6v3QgcXXhuqMuJyxcclxuICAgIFNlbGVjdGVkSXRlbXNNZXNzYWdlOiAnxJDDoyBjaOG7jW4gPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj5bMF08L3NwYW4+IGLhuqNuIGdoaS4nLFxyXG4gICAgQ29uZmlybVNlbGVjdEFsbFJlY29yZHNNZXNzYWdlOiAnPHNwYW4gY2xhc3M9XCJjb25maXJtLWhpZ2hsaWdodFwiPkNo4buNbiB04bqldCBj4bqjIGvhur90IHF14bqjPzwvc3Bhbj4nLFxyXG4gICAgQ29uZmlybUNsZWFyQWxsUmVjb3Jkc01lc3NhZ2U6ICc8c3BhbiBjbGFzcz1cImNvbmZpcm0taGlnaGxpZ2h0IHRleHQtZGFuZ2VyXCI+QuG7jyBjaOG7jW4gdOG6pXQgY+G6oyA8L3NwYW4+PycsXHJcbiAgICBEZWxldGVNZXNzYWdlOiAnQuG6oW4gY8OzIGNo4bqvYyBjaOG6r24gbXXhu5FuIHjDs2EgPHNwYW4gY2xhc3M9XCJjb25maXJtLWhpZ2hsaWdodCB0ZXh0LWRhbmdlclwiPlswXTwvc3Bhbj4ga2jDtG5nPycsXHJcbiAgICBMb2FkaW5nTWVzc2FnZTogJ8SQYW5nIHThuqNpIGThu68gbGnhu4d1Li4uJyxcclxuICAgIFJlZk1lc3NhZ2U6ICdsacOqbiBxdWFuIHThu5tpJ1xyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgRGlzcGxheVRleHQgPSB7XHJcbiAgICBQbGFjZWhvbGRlclNlYXJjaDogJ05o4bqtcCB04burIGtow7NhIHTDrG0ga2nhur9tLi4uJyxcclxuICAgIEJ0blJlc2V0OiAnS2jDtGkgcGjhu6VjJyxcclxuICAgIEJ0blNlYXJjaDogJ1TDrG0ga2nhur9tJyxcclxuICAgIEFjdGlvbjogJ0jDoG5oIMSR4buZbmcnLFxyXG4gICAgU2VsZWN0UGFnZVNpemU6ICdIaeG7g24gdGjhu4snLFxyXG4gICAgRGVsZXRlVGl0bGU6ICdYw7NhJyxcclxuICAgIEJ0bkFjY2VwdFRpdGxlOiAnxJDhu5NuZyDDvScsXHJcbiAgICBCdG5DYW5jZWxUaXRsZTogJ8SQw7NuZycsXHJcbiAgICBGaWx0ZXJUaXRsZTogJ1TDrG0ga2nhur9tIHRoZW8nLFxyXG4gICAgQXBwbHlGaWx0ZXI6ICfDgXAgZOG7pW5nIGzhu41jJyxcclxuICAgIERldGFpbFRpdGxlOiAnVGjDtG5nIHRpbiBjaGkgdGnhur90JyxcclxuICAgIFBhZ2VUaXRsZTogJ1RyYW5nJyxcclxuICAgIEFkdmFuY2VkU2VhcmNoVGl0bGU6ICdUw6xtIGtp4bq/bSBuw6JuZyBjYW8nLFxyXG4gICAgQWR2YW5jZWRCdG5UaXRsZTogJ1TDrG0ga2nhur9tJyxcclxuICAgIEFkdmFuY2VkQnRuQ2FuY2VsVGl0bGU6ICdI4buneSBi4buPJyxcclxuICAgIEFsbFRpdGxlOiAnVOG6pXQgY+G6oycsXHJcbiAgICBBY3Rpb25JY29uOiAnZmEgZmEtYmVsbCdcclxuICB9O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIERpcmVjdGlvbiA9IHtcclxuICAgIEFTQzogJ2FzYycsXHJcbiAgICBERVNDOiAnZGVzYydcclxuICB9O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIFRleHRBbGlnbiA9IHtcclxuICAgIExlZnQ6ICdsZWZ0JyxcclxuICAgIFJpZ2h0OiAncmlnaHQnLFxyXG4gICAgQ2VudGVyOiAnY2VudGVyJ1xyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgQWN0aW9uID0ge1xyXG4gICAgRWRpdDogJ2VkaXQnLFxyXG4gICAgRGVsZXRlOiAnZGVsZXRlJyxcclxuICAgIEN1c3RvbTogJ0N1c3RvbSdcclxuICB9XHJcbiAgcHVibGljIHN0YXRpYyBBY3Rpb25UeXBlID0ge1xyXG4gICAgQm90aDogJ2JvdGgnLFxyXG4gICAgVG9vbGJhcjogJ3Rvb2xiYXInLFxyXG4gICAgSW5saW5lOiAnaW5saW5lJ1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBlbnVtIFRhYmxlQ29sdW1uVHlwZSB7XHJcbiAgTnVtYmVyID0gJ251bWJlcicsXHJcbiAgU3RyaW5nID0gJ3N0cmluZycsXHJcbiAgRGF0ZSA9ICdkYXRlJyxcclxuICBEYXRlVGltZSA9ICdkYXRldGltZScsXHJcbiAgRGF0ZVJhbmdlID0gJ2RhdGVyYW5nZScsXHJcbiAgRGF0ZVRpbWVSYW5nZSA9ICdkYXRldGltZXJhbmdlJyxcclxuICBUaW1lID0gJ3RpbWUnLFxyXG4gIFRpbWVSYW5nZSA9ICd0aW1lcmFuZ2UnLFxyXG4gIEJvb2xlYW4gPSAnYm9vbGVhbicsXHJcbiAgRGVzY3JpcHRpb24gPSAnZGVzY3JpcHRpb24nLFxyXG4gIEN1cnJlbmN5ID0gJ2N1cnJlbmN5JyxcclxuICBEcm9wZG93biA9ICdkcm9wZG93bicsXHJcbiAgQ3VzdG9tID0gJ2N1c3RvbScsXHJcbn0iXX0=