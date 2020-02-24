/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/file/file.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { MockData, Audit } from '../models';
var FileViewModel = /** @class */ (function (_super) {
    tslib_1.__extends(FileViewModel, _super);
    function FileViewModel(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return FileViewModel;
}(Audit));
export { FileViewModel };
if (false) {
    /** @type {?} */
    FileViewModel.prototype.id;
    /** @type {?} */
    FileViewModel.prototype.name;
    /** @type {?} */
    FileViewModel.prototype.src;
    /** @type {?} */
    FileViewModel.prototype.type;
    /** @type {?} */
    FileViewModel.prototype.size;
}
var FileRequest = /** @class */ (function (_super) {
    tslib_1.__extends(FileRequest, _super);
    function FileRequest(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return FileRequest;
}(MockData));
export { FileRequest };
if (false) {
    /** @type {?} */
    FileRequest.prototype.items;
    /** @type {?} */
    FileRequest.prototype.others;
    /** @type {?} */
    FileRequest.prototype.createdBy;
}
var FileResponse = /** @class */ (function () {
    function FileResponse(init) {
        this.items = [];
        Object.assign(this, init);
    }
    return FileResponse;
}());
export { FileResponse };
if (false) {
    /** @type {?} */
    FileResponse.prototype.code;
    /** @type {?} */
    FileResponse.prototype.status;
    /** @type {?} */
    FileResponse.prototype.message;
    /** @type {?} */
    FileResponse.prototype.totalRecords;
    /** @type {?} */
    FileResponse.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2ZpbGUvZmlsZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU1QztJQUFtQyx5Q0FBSztJQU1wQyx1QkFBWSxJQUE2QjtRQUF6QyxZQUNJLGlCQUFPLFNBRVY7UUFERyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFDOUIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQVZELENBQW1DLEtBQUssR0FVdkM7Ozs7SUFURywyQkFBWTs7SUFDWiw2QkFBYzs7SUFDZCw0QkFBYTs7SUFDYiw2QkFBYzs7SUFDZCw2QkFBYzs7QUFPbEI7SUFBaUMsdUNBQXNCO0lBSW5ELHFCQUFZLElBQTJCO1FBQXZDLFlBQ0ksaUJBQU8sU0FFVjtRQURHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUM5QixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBaUMsUUFBUSxHQVF4Qzs7OztJQVBHLDRCQUF1Qjs7SUFDdkIsNkJBQXlCOztJQUN6QixnQ0FBa0I7O0FBT3RCO0lBTUksc0JBQVksSUFBNEI7UUFEeEMsVUFBSyxHQUFvQixFQUFFLENBQUM7UUFFeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7Ozs7SUFSRyw0QkFBYzs7SUFDZCw4QkFBaUI7O0lBQ2pCLCtCQUFpQjs7SUFDakIsb0NBQXNCOztJQUN0Qiw2QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2NrRGF0YSwgQXVkaXQgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVWaWV3TW9kZWwgZXh0ZW5kcyBBdWRpdCB7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBzcmM/OiBzdHJpbmc7XHJcbiAgICB0eXBlPzogc3RyaW5nO1xyXG4gICAgc2l6ZT86IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEZpbGVWaWV3TW9kZWw+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVJlcXVlc3QgZXh0ZW5kcyBNb2NrRGF0YTxGaWxlUmVzcG9uc2U+IHtcclxuICAgIGl0ZW1zOiBGaWxlVmlld01vZGVsW107XHJcbiAgICBvdGhlcnM/OiBGaWxlVmlld01vZGVsW107XHJcbiAgICBjcmVhdGVkQnk6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEZpbGVSZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVSZXNwb25zZSB7XHJcbiAgICBjb2RlPzogc3RyaW5nO1xyXG4gICAgc3RhdHVzPzogYm9vbGVhbjtcclxuICAgIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgICB0b3RhbFJlY29yZHM/OiBudW1iZXI7XHJcbiAgICBpdGVtczogRmlsZVZpZXdNb2RlbFtdID0gW107XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxGaWxlUmVzcG9uc2U+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufSJdfQ==