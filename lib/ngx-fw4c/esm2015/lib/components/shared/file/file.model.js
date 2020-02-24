/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/file/file.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MockData, Audit } from '../models';
export class FileViewModel extends Audit {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
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
export class FileRequest extends MockData {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    FileRequest.prototype.items;
    /** @type {?} */
    FileRequest.prototype.others;
    /** @type {?} */
    FileRequest.prototype.createdBy;
}
export class FileResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.items = [];
        Object.assign(this, init);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2ZpbGUvZmlsZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTVDLE1BQU0sT0FBTyxhQUFjLFNBQVEsS0FBSzs7OztJQU1wQyxZQUFZLElBQTZCO1FBQ3JDLEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKOzs7SUFURywyQkFBWTs7SUFDWiw2QkFBYzs7SUFDZCw0QkFBYTs7SUFDYiw2QkFBYzs7SUFDZCw2QkFBYzs7QUFPbEIsTUFBTSxPQUFPLFdBQVksU0FBUSxRQUFzQjs7OztJQUluRCxZQUFZLElBQTJCO1FBQ25DLEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKOzs7SUFQRyw0QkFBdUI7O0lBQ3ZCLDZCQUF5Qjs7SUFDekIsZ0NBQWtCOztBQU90QixNQUFNLE9BQU8sWUFBWTs7OztJQU1yQixZQUFZLElBQTRCO1FBRHhDLFVBQUssR0FBb0IsRUFBRSxDQUFDO1FBRXhCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjs7O0lBUkcsNEJBQWM7O0lBQ2QsOEJBQWlCOztJQUNqQiwrQkFBaUI7O0lBQ2pCLG9DQUFzQjs7SUFDdEIsNkJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9ja0RhdGEsIEF1ZGl0IH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlVmlld01vZGVsIGV4dGVuZHMgQXVkaXQge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgc3JjPzogc3RyaW5nO1xyXG4gICAgdHlwZT86IHN0cmluZztcclxuICAgIHNpemU/OiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxGaWxlVmlld01vZGVsPikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVSZXF1ZXN0IGV4dGVuZHMgTW9ja0RhdGE8RmlsZVJlc3BvbnNlPiB7XHJcbiAgICBpdGVtczogRmlsZVZpZXdNb2RlbFtdO1xyXG4gICAgb3RoZXJzPzogRmlsZVZpZXdNb2RlbFtdO1xyXG4gICAgY3JlYXRlZEJ5OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxGaWxlUmVxdWVzdD4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlUmVzcG9uc2Uge1xyXG4gICAgY29kZT86IHN0cmluZztcclxuICAgIHN0YXR1cz86IGJvb2xlYW47XHJcbiAgICBtZXNzYWdlPzogc3RyaW5nO1xyXG4gICAgdG90YWxSZWNvcmRzPzogbnVtYmVyO1xyXG4gICAgaXRlbXM6IEZpbGVWaWV3TW9kZWxbXSA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8RmlsZVJlc3BvbnNlPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn0iXX0=