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
var TableColumn = /** @class */ (function () {
    function TableColumn(init) {
        Object.assign(this, init);
    }
    return TableColumn;
}());
export { TableColumn };
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
var TableSorter = /** @class */ (function () {
    function TableSorter() {
    }
    return TableSorter;
}());
export { TableSorter };
if (false) {
    /** @type {?} */
    TableSorter.prototype.direction;
    /** @type {?} */
    TableSorter.prototype.orderBy;
    /** @type {?} */
    TableSorter.prototype.order;
}
var TableAction = /** @class */ (function () {
    function TableAction(init) {
        this.type = TableConstant.ActionType.Inline;
        Object.assign(this, init);
    }
    return TableAction;
}());
export { TableAction };
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
var TableText = /** @class */ (function () {
    function TableText() {
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
    return TableText;
}());
export { TableText };
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
var TableMessage = /** @class */ (function () {
    function TableMessage() {
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
    return TableMessage;
}());
export { TableMessage };
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
var TableDatetimeFormat = /** @class */ (function () {
    function TableDatetimeFormat(init) {
        this.format = 'MM/dd/yyyy';
        this.full = true;
        Object.assign(this, init);
    }
    return TableDatetimeFormat;
}());
export { TableDatetimeFormat };
if (false) {
    /** @type {?} */
    TableDatetimeFormat.prototype.format;
    /** @type {?} */
    TableDatetimeFormat.prototype.full;
}
var EdittedField = /** @class */ (function () {
    function EdittedField(init) {
        Object.assign(this, init);
    }
    return EdittedField;
}());
export { EdittedField };
if (false) {
    /** @type {?} */
    EdittedField.prototype.item;
    /** @type {?} */
    EdittedField.prototype.field;
    /** @type {?} */
    EdittedField.prototype.index;
}
var ChangedCell = /** @class */ (function () {
    function ChangedCell(init) {
        Object.assign(this, init);
    }
    return ChangedCell;
}());
export { ChangedCell };
if (false) {
    /** @type {?} */
    ChangedCell.prototype.oldValue;
    /** @type {?} */
    ChangedCell.prototype.field;
    /** @type {?} */
    ChangedCell.prototype.currentValue;
}
var ChangedRow = /** @class */ (function () {
    function ChangedRow(init) {
        Object.assign(this, init);
    }
    return ChangedRow;
}());
export { ChangedRow };
if (false) {
    /** @type {?} */
    ChangedRow.prototype.currentItem;
    /** @type {?} */
    ChangedRow.prototype.oldItem;
    /** @type {?} */
    ChangedRow.prototype.cells;
}
var TableOption = /** @class */ (function () {
    function TableOption(init) {
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
    return TableOption;
}());
export { TableOption };
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
var TableMode = {
    compact: "compact",
    full: "full",
};
export { TableMode };
var TableConstant = /** @class */ (function () {
    function TableConstant() {
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
    return TableConstant;
}());
export { TableConstant };
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
var TableColumnType = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC90YWJsZS90YWJsZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUtBLHFDQUtDOzs7SUFKQyxrQ0FBa0I7O0lBQ2xCLHFDQUFxQjs7SUFDckIsc0NBQTZDOztJQUM3QyxzQ0FBbUU7Ozs7O0FBR3JFLCtCQUdDOzs7SUFGQyx5QkFBVzs7SUFDWCwyQkFBcUI7O0FBR3ZCO0lBNkJFLHFCQUFZLElBQTJCO1FBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7Ozs7SUEvQkMsNEJBQXFCOztJQUNyQiwrQkFBcUI7O0lBQ3JCLHFDQUFxRDs7SUFDckQsZ0NBQW1COztJQUNuQixnQ0FBb0I7O0lBQ3BCLGtDQUFzQjs7SUFDdEIsNEJBQWU7O0lBQ2Ysa0NBQXFCOztJQUNyQixvQ0FBd0I7O0lBQ3hCLDRCQUFlOztJQUNmLGdDQUFtQjs7SUFDbkIsMkJBQXVCOztJQUN2QixrQ0FBc0I7O0lBQ3RCLGlDQUFxQjs7SUFDckIsMkJBQWM7O0lBQ2QsdUNBQW9DOztJQUNwQywrQkFBa0Y7O0lBQ2xGLHFDQUF3Qzs7SUFDeEMsMkJBQXFCOztJQUNyQiw0Q0FLRTs7SUFDRix5QkFBWTs7SUFDWixxQ0FBd0M7O0FBTzFDO0lBQUE7SUFJQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLGdDQUFtQjs7SUFDbkIsOEJBQWlCOztJQUNqQiw0QkFBZTs7QUFHakI7SUFXRSxxQkFBWSxJQUEyQjtRQU52QyxTQUFJLEdBQVksYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFPOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7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QUUsVUFBVTtRQUM1QixzQkFBc0IsRUFBRSxRQUFRO1FBQ2hDLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFVBQVUsRUFBRSxZQUFZO0tBQ3pCLENBQUM7SUFFWSx1QkFBUyxHQUFHO1FBQ3hCLEdBQUcsRUFBRSxLQUFLO1FBQ1YsSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDO0lBRVksdUJBQVMsR0FBRztRQUN4QixJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxPQUFPO1FBQ2QsTUFBTSxFQUFFLFFBQVE7S0FDakIsQ0FBQztJQUVZLG9CQUFNLEdBQUc7UUFDckIsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtLQUNqQixDQUFBO0lBQ2Esd0JBQVUsR0FBRztRQUN6QixJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLE1BQU0sRUFBRSxRQUFRO0tBQ2pCLENBQUE7SUFDSCxvQkFBQztDQUFBLEFBMURELElBMERDO1NBMURZLGFBQWE7OztJQUN4Qiw2QkFBaUQ7O0lBQ2pELGtCQUFtQzs7SUFDbkMsNkJBQStDOztJQUMvQyx3QkFBd0Q7O0lBQ3hELHNCQVVFOztJQUVGLDBCQWtCRTs7SUFFRix3QkFHRTs7SUFFRix3QkFJRTs7SUFFRixxQkFJQzs7SUFDRCx5QkFJQzs7QUFDRixDQUFDOztBQUVGLElBQVksZUFBZTtJQUN6QixNQUFNLFVBQVc7SUFDakIsTUFBTSxVQUFXO0lBQ2pCLElBQUksUUFBUztJQUNiLFFBQVEsWUFBYTtJQUNyQixTQUFTLGFBQWM7SUFDdkIsYUFBYSxpQkFBa0I7SUFDL0IsSUFBSSxRQUFTO0lBQ2IsU0FBUyxhQUFjO0lBQ3ZCLE9BQU8sV0FBWTtJQUNuQixXQUFXLGVBQWdCO0lBQzNCLFFBQVEsWUFBYTtJQUNyQixRQUFRLFlBQWE7SUFDckIsTUFBTSxVQUFXO0VBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWYsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvbk9wdGlvbiB9IGZyb20gJy4uL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tb2RlbCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlRWRpdElubGluZSB7XHJcbiAgZW5hYmxlZD86IGJvb2xlYW47XHJcbiAgYXV0b0NvbW1pdD86IGJvb2xlYW47XHJcbiAgY3JlYXRlQXN5bmM/OiAoaXRlbTogYW55KSA9PiBPYnNlcnZhYmxlPGFueT47XHJcbiAgdXBkYXRlQXN5bmM/OiAoaXRlbTogYW55LCBjb2x1bW4/OiBUYWJsZUNvbHVtbikgPT4gT2JzZXJ2YWJsZTxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlQ2VsbCB7XHJcbiAgaXRlbT86IGFueTtcclxuICBjb2x1bW4/OiBUYWJsZUNvbHVtbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29sdW1uIHtcclxuICB0aXRsZT86ICgpID0+IHN0cmluZztcclxuICB2YWx1ZVJlZj86ICgpID0+IGFueTtcclxuICBpbmxpbmVDYWxsYmFjaz86IChpdGVtPzogYW55LCBmaWVsZD86IHN0cmluZykgPT4gYW55O1xyXG4gIGRpcmVjdGlvbj86IHN0cmluZztcclxuICBhbGxvd1NvcnQ/OiBib29sZWFuO1xyXG4gIGFsbG93RmlsdGVyPzogYm9vbGVhbjtcclxuICBvcmRlcj86IG51bWJlcjtcclxuICBjdXN0b21DbGFzcz86IHN0cmluZztcclxuICBkZWZhdWx0U29ydGVyPzogYm9vbGVhbjtcclxuICB3aWR0aD86IG51bWJlcjtcclxuICB0ZXh0QWxpZ24/OiBzdHJpbmc7XHJcbiAgdHlwZT86IFRhYmxlQ29sdW1uVHlwZTtcclxuICBzaG93VG9vbHRpcD86IGJvb2xlYW47XHJcbiAgaW5saW5lRWRpdD86IGJvb2xlYW47XHJcbiAgaWNvbj86IHN0cmluZztcclxuICB2YWxpZGF0aW9uT3B0aW9uPzogVmFsaWRhdGlvbk9wdGlvbjtcclxuICBjYWxsYmFjaz86IChwcm92aWRlcj86IFRhYmxlQ29tcG9uZW50LCBlbGVtZW50PzogRWxlbWVudFJlZiwgJGV2ZW50PzogYW55KSA9PiBhbnk7XHJcbiAgY3VzdG9tVGVtcGxhdGU/OiAoKSA9PiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIGhpZGU/OiAoKSA9PiBib29sZWFuO1xyXG4gIGRyb3Bkb3duQ29uZmlndXJhdGlvbj86IHtcclxuICAgIHNlYXJjaEZ1bmN0aW9uOiAodGV4dDogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBjdXJyZW50UGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyKSA9PiBPYnNlcnZhYmxlPHsgaXRlbXM6IGFueVtdLCB0b3RhbFJlY29yZHM6IG51bWJlciB9PixcclxuICAgIG11bHRpcGxlPzogYm9vbGVhbixcclxuICAgIGJpbmRMYWJlbDogc3RyaW5nLFxyXG4gICAgYmluZFZhbHVlOiBzdHJpbmcsXHJcbiAgfTtcclxuICBpZD86IHN0cmluZztcclxuICBmaWx0ZXJUZW1wbGF0ZT86ICgpID0+IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFRhYmxlQ29sdW1uPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZVNvcnRlciB7XHJcbiAgZGlyZWN0aW9uPzogc3RyaW5nO1xyXG4gIG9yZGVyQnk/OiBzdHJpbmc7XHJcbiAgb3JkZXI/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUFjdGlvbiB7XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbiAgdGl0bGU/OiAoKSA9PiBzdHJpbmc7XHJcbiAgdG9vbHRpcD86ICgpID0+IHN0cmluZztcclxuICBpY29uPzogc3RyaW5nO1xyXG4gIHR5cGU/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkFjdGlvblR5cGUuSW5saW5lO1xyXG4gIGN1c3RvbUNsYXNzPzogc3RyaW5nO1xyXG4gIGV4ZWN1dGVBc3luYz86IChpdGVtPzogYW55LCBlbGVtZW50PzogRWxlbWVudFJlZiwgcHJvdmlkZXI/OiBhbnksIGluZGV4PzogbnVtYmVyLCBsb2FkZWRDYWxsYmFjaz86IEZ1bmN0aW9uKSA9PiBhbnk7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIGhpZGU/OiAoaXRlbT86IGFueSkgPT4gYm9vbGVhbjtcclxuICBsYXp5bG9hZD86IGJvb2xlYW47XHJcbiAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8VGFibGVBY3Rpb24+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZVJlcXVlc3Qge1xyXG4gIHNlYXJjaFRleHQ/OiBzdHJpbmc7XHJcbiAgcGFnZVNpemU/OiBudW1iZXI7XHJcbiAgcGFnZUluZGV4PzogbnVtYmVyO1xyXG4gIHNvcnRlcnM/OiBUYWJsZVNvcnRlcltdO1xyXG4gIGRhdGE/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZVRleHQge1xyXG4gIHBsYWNlaG9sZGVyU2VhcmNoPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5QbGFjZWhvbGRlclNlYXJjaDtcclxuICBidG5TZWFyY2g/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkJ0blNlYXJjaDtcclxuICBidG5SZXNldD86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQnRuUmVzZXQ7XHJcbiAgYWN0aW9uPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5BY3Rpb247XHJcbiAgc2VsZWN0UGFnZVNpemU/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LlNlbGVjdFBhZ2VTaXplO1xyXG4gIGRlbGV0ZVRpdGxlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5EZWxldGVUaXRsZTtcclxuICBidG5BY2NlcHRUaXRsZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQnRuQWNjZXB0VGl0bGU7XHJcbiAgYnRuQ2FuY2VsVGl0bGU/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkJ0bkNhbmNlbFRpdGxlXHJcbiAgZmlsdGVyVGl0bGU/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkZpbHRlclRpdGxlO1xyXG4gIGFwcGx5RmlsdGVyPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5BcHBseUZpbHRlcjtcclxuICBkZXRhaWxUaXRsZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuRGV0YWlsVGl0bGU7XHJcbiAgcGFnZVRpdGxlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5QYWdlVGl0bGU7XHJcbiAgYWR2YW5jZWRTZWFyY2hUaXRsZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQWR2YW5jZWRTZWFyY2hUaXRsZTtcclxuICBhZHZhbmNlZEJ0blRpdGxlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5BZHZhbmNlZEJ0blRpdGxlO1xyXG4gIGFkdmFuY2VkQnRuQ2FuY2VsVGl0bGU/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkFkdmFuY2VkQnRuQ2FuY2VsVGl0bGU7XHJcbiAgYWxsVGl0bGU/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkFsbFRpdGxlO1xyXG4gIGFjdGlvbkljb24/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkFjdGlvbkljb247XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZU1lc3NhZ2Uge1xyXG4gIG5vdEZvdW5kTWVzc2FnZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5Ob3RGb3VuZE1lc3NhZ2U7XHJcbiAgZm91bmRNZXNzYWdlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5NZXNzYWdlLkZvdW5kTWVzc2FnZTtcclxuICBpbnZhbGlkRm9ybWF0TWVzc2FnZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5JbnZhbGlkRm9ybWF0TWVzc2FnZTtcclxuICBzZWxlY3RlZEl0ZW1zTWVzc2FnZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5TZWxlY3RlZEl0ZW1zTWVzc2FnZTtcclxuICBjb25maXJtU2VsZWN0QWxsUmVjb3Jkc01lc3NhZ2U/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuQ29uZmlybVNlbGVjdEFsbFJlY29yZHNNZXNzYWdlO1xyXG4gIGNvbmZpcm1DbGVhckFsbFJlY29yZHNNZXNzYWdlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5NZXNzYWdlLkNvbmZpcm1DbGVhckFsbFJlY29yZHNNZXNzYWdlO1xyXG4gIGRlbGV0ZU1lc3NhZ2U/OiBzdHJpbmcgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuRGVsZXRlTWVzc2FnZTtcclxuICBsb2FkaW5nTWVzc2FnZT86IHN0cmluZyA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5Mb2FkaW5nTWVzc2FnZTtcclxuICByZWZNZXNzYWdlPzogc3RyaW5nID0gVGFibGVDb25zdGFudC5NZXNzYWdlLlJlZk1lc3NhZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVSZXNwb25zZTxUPiB7XHJcbiAgdG90YWxSZWNvcmRzPzogbnVtYmVyO1xyXG4gIGl0ZW1zPzogVFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlU2VydmljZVByb3ZpZGVyIHtcclxuICBzZWFyY2hBc3luYz86IChyZXF1ZXN0PzogYW55KSA9PiBPYnNlcnZhYmxlPGFueT47XHJcbiAgY3JlYXRlQXN5bmM/OiAoaXRlbTogYW55KSA9PiBPYnNlcnZhYmxlPGFueT47XHJcbiAgdXBkYXRlQXN5bmM/OiAoaXRlbTogYW55KSA9PiBPYnNlcnZhYmxlPGFueT47XHJcbiAgZGVsZXRlQXN5bmM/OiAoaWRzOiBzdHJpbmcsIGFsbD86IGJvb2xlYW4pID0+IE9ic2VydmFibGU8YW55PjtcclxuICBleHBvcnRBc3luYz86IChyZXF1ZXN0PzogYW55KSA9PiBPYnNlcnZhYmxlPGFueT47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZURhdGV0aW1lRm9ybWF0IHtcclxuICBmb3JtYXQ6IHN0cmluZyA9ICdNTS9kZC95eXl5JztcclxuICBmdWxsOiBib29sZWFuID0gdHJ1ZTtcclxuICBjb25zdHJ1Y3Rvcihpbml0OiBQYXJ0aWFsPFRhYmxlRGF0ZXRpbWVGb3JtYXQ+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXR0ZWRGaWVsZCB7XHJcbiAgaXRlbT86IGFueTtcclxuICBmaWVsZD86IHN0cmluZztcclxuICBpbmRleD86IG51bWJlcjtcclxuICBjb25zdHJ1Y3Rvcihpbml0OiBQYXJ0aWFsPEVkaXR0ZWRGaWVsZD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlZENlbGwge1xyXG4gIG9sZFZhbHVlPzogYW55O1xyXG4gIGZpZWxkPzogc3RyaW5nO1xyXG4gIGN1cnJlbnRWYWx1ZT86IGFueTtcclxuICBjb25zdHJ1Y3Rvcihpbml0OiBQYXJ0aWFsPENoYW5nZWRDZWxsPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VkUm93IHtcclxuICBjdXJyZW50SXRlbT86IGFueTtcclxuICBvbGRJdGVtPzogYW55O1xyXG4gIGNlbGxzPzogQ2hhbmdlZENlbGxbXTtcclxuICBjb25zdHJ1Y3Rvcihpbml0OiBQYXJ0aWFsPENoYW5nZWRSb3c+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlT3B0aW9uIHtcclxuICBzb3J0PzogKGE6IGFueSwgYjogYW55LCBvcmRlckJ5OiBzdHJpbmcpID0+IG51bWJlcjtcclxuICBtdWx0aXBsZT86IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGRhdGV0aW1lRm9ybWF0PzogVGFibGVEYXRldGltZUZvcm1hdCA9IG5ldyBUYWJsZURhdGV0aW1lRm9ybWF0KHt9KTtcclxuICBwYWdpbmc/OiBib29sZWFuO1xyXG4gIHNlbGVjdGVkSXRlbXM/OiBhbnlbXTtcclxuICBzZXJ2aWNlUHJvdmlkZXI/OiBUYWJsZVNlcnZpY2VQcm92aWRlcjtcclxuICBsb2NhbERhdGE/OiAoKSA9PiBPYnNlcnZhYmxlPGFueVtdPjtcclxuICByZXF1ZXN0PzogVGFibGVSZXF1ZXN0O1xyXG4gIG1haW5Db2x1bW5zOiBUYWJsZUNvbHVtbltdID0gW107XHJcbiAgZGlzcGxheVRleHQ/OiBUYWJsZVRleHQ7XHJcbiAgbWVzc2FnZT86IFRhYmxlTWVzc2FnZTtcclxuICBjb21wb25lbnRDbGFzcz86IHN0cmluZztcclxuICBhY3Rpb25zPzogVGFibGVBY3Rpb25bXSA9IFtdO1xyXG4gIHRvcEJ1dHRvbnM/OiBUYWJsZUFjdGlvbltdID0gW107XHJcbiAgcm93RGV0YWlsVGVtcGxhdGU/OiBUeXBlPGFueT47XHJcbiAgZXhwYW5kRmlsdGVyQXJlYT86IGJvb2xlYW47XHJcbiAgcGFnZVNpemVzPzogbnVtYmVyW107XHJcbiAgZGVmYXVsdFBhZ2VTaXplPzogbnVtYmVyID0gNTtcclxuICB0b3RhbFRvb2xiYXJJdGVtPzogbnVtYmVyID0gNTtcclxuICBtYXhQYWdlPzogbnVtYmVyO1xyXG4gIGtleT86IHN0cmluZztcclxuICB0aXRsZT86IHN0cmluZztcclxuICBtYXhMZW5naHRleHQ/OiBudW1iZXI7XHJcbiAgbW9kZTogVGFibGVNb2RlID0gVGFibGVNb2RlLmZ1bGw7XHJcbiAgaGlkZVNlcXVlbmNlQ29sdW1uPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGhpZGVDaGVja2JveENvbHVtbj86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBkaXNwbGF5TW9kZT86ICdsaXN0JyB8ICdmdWxsJztcclxuICBkZWZhdWx0T3JkZXJCeT86IHN0cmluZztcclxuICBkZWZhdXRPcmRlckRpcmVjdGlvbj86IHN0cmluZztcclxuICBpbmxpbmVFZGl0PzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHNlYXJjaEZpZWxkcz86IHN0cmluZ1tdO1xyXG4gIGhhc0NvbHVtbkZpbHRlcj86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzZWxlY3RlZENoYW5nZTogKGl0ZW06IGFueSkgPT4gYW55O1xyXG4gIGNvbnN0cnVjdG9yKGluaXQ6IFBhcnRpYWw8VGFibGVPcHRpb24+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gVGFibGVNb2RlIHtcclxuICBjb21wYWN0ID0gJ2NvbXBhY3QnLFxyXG4gIGZ1bGwgPSAnZnVsbCdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29uc3RhbnQge1xyXG4gIHB1YmxpYyBzdGF0aWMgQ29tcG9uZW50Q2xhc3M6IHN0cmluZyA9ICdwcmltYXJ5JztcclxuICBwdWJsaWMgc3RhdGljIEtleTogc3RyaW5nID0gJ25hbWUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRGF0ZXRpbWVMb2NhdGU6IHN0cmluZyA9ICd2aS1WTic7XHJcbiAgcHVibGljIHN0YXRpYyBQYWdlU2l6ZXM6IG51bWJlcltdID0gWzUsIDEwLCAxNSwgMjAsIDUwXTtcclxuICBwdWJsaWMgc3RhdGljIE1lc3NhZ2UgPSB7XHJcbiAgICBOb3RGb3VuZE1lc3NhZ2U6ICdDaMawYSBjw7MgdGjDtG5nIHRpbicsXHJcbiAgICBJbnZhbGlkRm9ybWF0TWVzc2FnZTogJ2tow7RuZyBo4bujcCBs4buHLicsXHJcbiAgICBGb3VuZE1lc3NhZ2U6ICdUw6xtIHRo4bqleSA8c3BhbiBjbGFzcz1cImNvbmZpcm0taGlnaGxpZ2h0XCI+WzBdPC9zcGFuPiBr4bq/dCBxdeG6oy4nLFxyXG4gICAgU2VsZWN0ZWRJdGVtc01lc3NhZ2U6ICfEkMOjIGNo4buNbiA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPlswXTwvc3Bhbj4gYuG6o24gZ2hpLicsXHJcbiAgICBDb25maXJtU2VsZWN0QWxsUmVjb3Jkc01lc3NhZ2U6ICc8c3BhbiBjbGFzcz1cImNvbmZpcm0taGlnaGxpZ2h0XCI+Q2jhu41uIHThuqV0IGPhuqMga+G6v3QgcXXhuqM/PC9zcGFuPicsXHJcbiAgICBDb25maXJtQ2xlYXJBbGxSZWNvcmRzTWVzc2FnZTogJzxzcGFuIGNsYXNzPVwiY29uZmlybS1oaWdobGlnaHQgdGV4dC1kYW5nZXJcIj5C4buPIGNo4buNbiB04bqldCBj4bqjIDwvc3Bhbj4/JyxcclxuICAgIERlbGV0ZU1lc3NhZ2U6ICdC4bqhbiBjw7MgY2jhuq9jIGNo4bqvbiBtdeG7kW4geMOzYSA8c3BhbiBjbGFzcz1cImNvbmZpcm0taGlnaGxpZ2h0IHRleHQtZGFuZ2VyXCI+WzBdPC9zcGFuPiBraMO0bmc/JyxcclxuICAgIExvYWRpbmdNZXNzYWdlOiAnxJBhbmcgdOG6o2kgZOG7ryBsaeG7h3UuLi4nLFxyXG4gICAgUmVmTWVzc2FnZTogJ2xpw6puIHF1YW4gdOG7m2knXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBEaXNwbGF5VGV4dCA9IHtcclxuICAgIFBsYWNlaG9sZGVyU2VhcmNoOiAnTmjhuq1wIHThu6sga2jDs2EgdMOsbSBraeG6v20uLi4nLFxyXG4gICAgQnRuUmVzZXQ6ICdLaMO0aSBwaOG7pWMnLFxyXG4gICAgQnRuU2VhcmNoOiAnVMOsbSBraeG6v20nLFxyXG4gICAgQWN0aW9uOiAnSMOgbmggxJHhu5luZycsXHJcbiAgICBTZWxlY3RQYWdlU2l6ZTogJ0hp4buDbiB0aOG7iycsXHJcbiAgICBEZWxldGVUaXRsZTogJ1jDs2EnLFxyXG4gICAgQnRuQWNjZXB0VGl0bGU6ICfEkOG7k25nIMO9JyxcclxuICAgIEJ0bkNhbmNlbFRpdGxlOiAnxJDDs25nJyxcclxuICAgIEZpbHRlclRpdGxlOiAnVMOsbSBraeG6v20gdGhlbycsXHJcbiAgICBBcHBseUZpbHRlcjogJ8OBcCBk4bulbmcgbOG7jWMnLFxyXG4gICAgRGV0YWlsVGl0bGU6ICdUaMO0bmcgdGluIGNoaSB0aeG6v3QnLFxyXG4gICAgUGFnZVRpdGxlOiAnVHJhbmcnLFxyXG4gICAgQWR2YW5jZWRTZWFyY2hUaXRsZTogJ1TDrG0ga2nhur9tIG7Dom5nIGNhbycsXHJcbiAgICBBZHZhbmNlZEJ0blRpdGxlOiAnVMOsbSBraeG6v20nLFxyXG4gICAgQWR2YW5jZWRCdG5DYW5jZWxUaXRsZTogJ0jhu6d5IGLhu48nLFxyXG4gICAgQWxsVGl0bGU6ICdU4bqldCBj4bqjJyxcclxuICAgIEFjdGlvbkljb246ICdmYSBmYS1iZWxsJ1xyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgRGlyZWN0aW9uID0ge1xyXG4gICAgQVNDOiAnYXNjJyxcclxuICAgIERFU0M6ICdkZXNjJ1xyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgVGV4dEFsaWduID0ge1xyXG4gICAgTGVmdDogJ2xlZnQnLFxyXG4gICAgUmlnaHQ6ICdyaWdodCcsXHJcbiAgICBDZW50ZXI6ICdjZW50ZXInXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBBY3Rpb24gPSB7XHJcbiAgICBFZGl0OiAnZWRpdCcsXHJcbiAgICBEZWxldGU6ICdkZWxldGUnLFxyXG4gICAgQ3VzdG9tOiAnQ3VzdG9tJ1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIEFjdGlvblR5cGUgPSB7XHJcbiAgICBCb3RoOiAnYm90aCcsXHJcbiAgICBUb29sYmFyOiAndG9vbGJhcicsXHJcbiAgICBJbmxpbmU6ICdpbmxpbmUnXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGVudW0gVGFibGVDb2x1bW5UeXBlIHtcclxuICBOdW1iZXIgPSAnbnVtYmVyJyxcclxuICBTdHJpbmcgPSAnc3RyaW5nJyxcclxuICBEYXRlID0gJ2RhdGUnLFxyXG4gIERhdGVUaW1lID0gJ2RhdGV0aW1lJyxcclxuICBEYXRlUmFuZ2UgPSAnZGF0ZXJhbmdlJyxcclxuICBEYXRlVGltZVJhbmdlID0gJ2RhdGV0aW1lcmFuZ2UnLFxyXG4gIFRpbWUgPSAndGltZScsXHJcbiAgVGltZVJhbmdlID0gJ3RpbWVyYW5nZScsXHJcbiAgQm9vbGVhbiA9ICdib29sZWFuJyxcclxuICBEZXNjcmlwdGlvbiA9ICdkZXNjcmlwdGlvbicsXHJcbiAgQ3VycmVuY3kgPSAnY3VycmVuY3knLFxyXG4gIERyb3Bkb3duID0gJ2Ryb3Bkb3duJyxcclxuICBDdXN0b20gPSAnY3VzdG9tJyxcclxufSJdfQ==