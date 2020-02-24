/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/list/list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListItemDirective } from './list-item.directive';
import { finalize, take } from 'rxjs/operators';
export class ListComponent {
    constructor() {
        this.eventSelect = true;
        this.direction = 'vertical';
        this.emptyListMessage = 'Không có giá trị nào trong danh sách';
        this.pageSize = 10;
        this.itemSelected = new EventEmitter();
        this.numberOfItemsFromEndBeforeFetchingMore = 3;
        this.searchItems = [];
        this.searchText$ = new BehaviorSubject(null);
        this.subscriptions = [];
        this.currentPage = 0;
        this.selectedItems = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    isSelected(item) {
        if (this.eventSelect) {
            return this.selectedItems.indexOf(item) >= 0;
        }
    }
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    selectItem(item, index) {
        if (this.eventSelect) {
            this.model.forEach((/**
             * @param {?} s
             * @return {?}
             */
            s => {
                s.selected = false;
            }));
            /** @type {?} */
            const indexObj = this.model.find((/**
             * @param {?} s
             * @return {?}
             */
            s => s.id === item.id));
            indexObj.selected = true;
        }
        this.itemSelected.emit(item);
    }
    /**
     * @return {?}
     */
    getSelectedItems() {
        return this.selectedItems;
    }
    /**
     * @param {?} lastIndex
     * @return {?}
     */
    scroll(lastIndex) {
        if (this.loading) {
            return;
        }
        if (lastIndex + this.numberOfItemsFromEndBeforeFetchingMore >= this.model.length) {
            this.fetchMore();
        }
    }
    /**
     * @return {?}
     */
    fetchMore() {
        this.currentPage++;
        this.loading = true;
        /** @type {?} */
        const fetchMoreSubsription = this.searchFunction(this.searchText$.getValue(), 0, this.currentPage, this.pageSize)
            .pipe(take(1), finalize((/**
         * @return {?}
         */
        () => this.loading = false)))
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.model = this.model.concat(response.items);
            this.loading = false;
        }));
        this.subscriptions.push(fetchMoreSubsription);
    }
}
ListComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-list',
                template: "<ng-container *ngIf=\"model && model.length > 0; else emptyList\">\r\n  <ul>\r\n    <li *ngFor=\"let item of model; let index = index\" class=\"p-2\"\r\n        [ngClass]=\"{'horizontal-list': direction === 'horizontal', 'selected': item.selected}\"\r\n        (click)=\"selectItem(item, index)\">\r\n      <ng-container [ngTemplateOutlet]=\"listItemTemplate.template\"\r\n                    [ngTemplateOutletContext]=\"{item: item, index: index}\"></ng-container>\r\n    </li>\r\n  </ul>\r\n</ng-container>\r\n<ng-template #emptyList>\r\n  <label>{{emptyListMessage}}</label>\r\n</ng-template>\r\n\r\n<div [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\">\r\n</div>",
                styles: ["ul{margin-bottom:0}ul li{cursor:auto;transition:.4s ease-in-out}ul li.selected{background-color:#ecf7fd}"]
            }] }
];
ListComponent.propDecorators = {
    listItemTemplate: [{ type: ContentChild, args: [ListItemDirective, { static: true },] }],
    eventSelect: [{ type: Input }],
    model: [{ type: Input }],
    direction: [{ type: Input }],
    emptyListMessage: [{ type: Input }],
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    pageSize: [{ type: Input }],
    searchFunction: [{ type: Input }],
    itemSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ListComponent.prototype.listItemTemplate;
    /** @type {?} */
    ListComponent.prototype.eventSelect;
    /** @type {?} */
    ListComponent.prototype.model;
    /** @type {?} */
    ListComponent.prototype.direction;
    /** @type {?} */
    ListComponent.prototype.emptyListMessage;
    /** @type {?} */
    ListComponent.prototype.validationName;
    /** @type {?} */
    ListComponent.prototype.validationScope;
    /** @type {?} */
    ListComponent.prototype.pageSize;
    /** @type {?} */
    ListComponent.prototype.searchFunction;
    /** @type {?} */
    ListComponent.prototype.itemSelected;
    /** @type {?} */
    ListComponent.prototype.loading;
    /** @type {?} */
    ListComponent.prototype.numberOfItemsFromEndBeforeFetchingMore;
    /** @type {?} */
    ListComponent.prototype.searchItems;
    /** @type {?} */
    ListComponent.prototype.searchText$;
    /**
     * @type {?}
     * @private
     */
    ListComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    ListComponent.prototype.currentPage;
    /**
     * @type {?}
     * @private
     */
    ListComponent.prototype.selectedItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9saXN0L2xpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVFoRCxNQUFNLE9BQU8sYUFBYTtJQU4xQjtRQVFrQixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixjQUFTLEdBQThCLFVBQVUsQ0FBQztRQUNsRCxxQkFBZ0IsR0FBVyxzQ0FBc0MsQ0FBQztRQUdsRSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXJCLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFL0QsMkNBQXNDLEdBQVcsQ0FBQyxDQUFDO1FBQ25ELGdCQUFXLEdBQVUsRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQUcsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLENBQUM7UUFDL0Msa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBQ25DLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGtCQUFhLEdBQVUsRUFBRSxDQUFDO0lBMkNwQyxDQUFDOzs7OztJQXpDUSxVQUFVLENBQUMsSUFBUztRQUN6QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOzs7Ozs7SUFFTSxVQUFVLENBQUMsSUFBUyxFQUFFLEtBQVU7UUFDckMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyQixDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUNyQixDQUFDLEVBQUMsQ0FBQzs7a0JBQ0csUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFDO1lBQ3ZELFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVNLGdCQUFnQjtRQUNyQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsU0FBaUI7UUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUNELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxzQ0FBc0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNoRixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7O0lBRU0sU0FBUztRQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7Y0FDZCxvQkFBb0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM5RyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVE7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFDLENBQUM7YUFDbkQsU0FBUzs7OztRQUFDLENBQUMsUUFBYSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxFQUFDO1FBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUFqRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QiwwdEJBQW9DOzthQUVyQzs7OytCQUdFLFlBQVksU0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MEJBQ2hELEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLOytCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxNQUFNOzs7O0lBVFAseUNBQThGOztJQUM5RixvQ0FBNEM7O0lBQzVDLDhCQUE2Qjs7SUFDN0Isa0NBQWtFOztJQUNsRSx5Q0FBa0Y7O0lBQ2xGLHVDQUFnQzs7SUFDaEMsd0NBQWlDOztJQUNqQyxpQ0FBc0M7O0lBQ3RDLHVDQUF5Qzs7SUFDekMscUNBQXNFOztJQUN0RSxnQ0FBd0I7O0lBQ3hCLCtEQUEwRDs7SUFDMUQsb0NBQStCOztJQUMvQixvQ0FBdUQ7Ozs7O0lBQ3ZELHNDQUEyQzs7Ozs7SUFDM0Msb0NBQWdDOzs7OztJQUNoQyxzQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IExpc3RJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9saXN0LWl0ZW0uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgZmluYWxpemUsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2thdGFuYS1saXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCB7XHJcbiAgQENvbnRlbnRDaGlsZChMaXN0SXRlbURpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIGxpc3RJdGVtVGVtcGxhdGU6IExpc3RJdGVtRGlyZWN0aXZlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBldmVudFNlbGVjdDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgcHVibGljIG1vZGVsOiBhbnlbXTtcclxuICBASW5wdXQoKSBwdWJsaWMgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ3ZlcnRpY2FsJztcclxuICBASW5wdXQoKSBwdWJsaWMgZW1wdHlMaXN0TWVzc2FnZTogc3RyaW5nID0gJ0tow7RuZyBjw7MgZ2nDoSB0cuG7iyBuw6BvIHRyb25nIGRhbmggc8OhY2gnO1xyXG4gIEBJbnB1dCgpIHZhbGlkYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmFsaWRhdGlvblNjb3BlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIHBhZ2VTaXplOiBudW1iZXIgPSAxMDtcclxuICBASW5wdXQoKSBwdWJsaWMgc2VhcmNoRnVuY3Rpb246IEZ1bmN0aW9uO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgaXRlbVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbjtcclxuICBwdWJsaWMgbnVtYmVyT2ZJdGVtc0Zyb21FbmRCZWZvcmVGZXRjaGluZ01vcmU6IG51bWJlciA9IDM7XHJcbiAgcHVibGljIHNlYXJjaEl0ZW1zOiBhbnlbXSA9IFtdO1xyXG4gIHB1YmxpYyBzZWFyY2hUZXh0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcbiAgcHJpdmF0ZSBjdXJyZW50UGFnZTogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIHNlbGVjdGVkSXRlbXM6IGFueVtdID0gW107XHJcblxyXG4gIHB1YmxpYyBpc1NlbGVjdGVkKGl0ZW06IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuZXZlbnRTZWxlY3QpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKGl0ZW0pID49IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VsZWN0SXRlbShpdGVtOiBhbnksIGluZGV4OiBhbnkpIHtcclxuICAgIGlmICh0aGlzLmV2ZW50U2VsZWN0KSB7XHJcbiAgICAgIHRoaXMubW9kZWwuZm9yRWFjaChzID0+IHtcclxuICAgICAgICBzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBpbmRleE9iaiA9IHRoaXMubW9kZWwuZmluZChzID0+IHMuaWQgPT09IGl0ZW0uaWQpO1xyXG4gICAgICBpbmRleE9iai5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLml0ZW1TZWxlY3RlZC5lbWl0KGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFNlbGVjdGVkSXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNjcm9sbChsYXN0SW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMubG9hZGluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAobGFzdEluZGV4ICsgdGhpcy5udW1iZXJPZkl0ZW1zRnJvbUVuZEJlZm9yZUZldGNoaW5nTW9yZSA+PSB0aGlzLm1vZGVsLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmZldGNoTW9yZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGZldGNoTW9yZSgpIHtcclxuICAgIHRoaXMuY3VycmVudFBhZ2UrKztcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zdCBmZXRjaE1vcmVTdWJzcmlwdGlvbiA9IHRoaXMuc2VhcmNoRnVuY3Rpb24odGhpcy5zZWFyY2hUZXh0JC5nZXRWYWx1ZSgpLCAwLCB0aGlzLmN1cnJlbnRQYWdlLCB0aGlzLnBhZ2VTaXplKVxyXG4gICAgICAucGlwZSh0YWtlKDEpLCBmaW5hbGl6ZSgoKSA9PiB0aGlzLmxvYWRpbmcgPSBmYWxzZSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gdGhpcy5tb2RlbC5jb25jYXQocmVzcG9uc2UuaXRlbXMpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKGZldGNoTW9yZVN1YnNyaXB0aW9uKTtcclxuICB9XHJcbn1cclxuIl19