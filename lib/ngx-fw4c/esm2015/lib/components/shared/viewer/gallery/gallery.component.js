/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/viewer/gallery/gallery.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { of } from 'rxjs';
import { TableOption, TableColumnType } from '../../table/table.model';
import { TableComponent } from '../../table/table.component';
export class GalleryComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initTable();
    }
    /**
     * @return {?}
     */
    isValid() {
        return this.tableRef.selectedItems.length > 0;
    }
    /**
     * @return {?}
     */
    callback() {
        return of(this.tableRef.selectedItems);
    }
    /**
     * @private
     * @return {?}
     */
    initTable() {
        this.option = new TableOption({
            serviceProvider: {
                searchAsync: (/**
                 * @param {?} request
                 * @return {?}
                 */
                (request) => {
                    return this.items(request);
                })
            },
            searchFields: ["name", "createdBy", "createdDate", "lastModifiedDate", "lastModifiedBy"],
            inlineEdit: true,
            mainColumns: [
                {
                    title: (/**
                     * @return {?}
                     */
                    () => this.headers[0]),
                    valueRef: (/**
                     * @return {?}
                     */
                    () => 'src'),
                    type: TableColumnType.Custom,
                    customTemplate: (/**
                     * @return {?}
                     */
                    () => this.imageTemplate)
                },
                {
                    title: (/**
                     * @return {?}
                     */
                    () => this.headers[1]),
                    valueRef: (/**
                     * @return {?}
                     */
                    () => 'name'),
                    type: TableColumnType.Custom,
                    customTemplate: (/**
                     * @return {?}
                     */
                    () => this.nameTemplate),
                    allowSort: true
                },
                {
                    title: (/**
                     * @return {?}
                     */
                    () => this.headers[2]),
                    valueRef: (/**
                     * @return {?}
                     */
                    () => 'size'),
                    type: TableColumnType.Custom,
                    customTemplate: (/**
                     * @return {?}
                     */
                    () => this.sizeTemplate)
                },
                {
                    title: (/**
                     * @return {?}
                     */
                    () => this.headers[3]),
                    valueRef: (/**
                     * @return {?}
                     */
                    () => 'createdDate'),
                    type: TableColumnType.Date,
                    allowSort: true
                }
            ]
        });
    }
}
GalleryComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-gallery',
                template: "<katana-table #tableRef [option]=\"option\">\r\n  <ng-template let-item=\"item\" #imageTemplate>\r\n    <img class=\"small\" [src]=\"item.src\" />\r\n  </ng-template>\r\n  <ng-template let-item=\"item\" #nameTemplate>\r\n    <span>{{item.name}}</span>\r\n  </ng-template>\r\n  <ng-template let-item=\"item\" #sizeTemplate>\r\n    <span class=\"text-primary\" style=\"font-weight: 600;\">{{item.size | katanaKb}}</span>\r\n  </ng-template>\r\n</katana-table>",
                styles: [""]
            }] }
];
GalleryComponent.propDecorators = {
    items: [{ type: Input }],
    headers: [{ type: Input }],
    imageTemplate: [{ type: ViewChild, args: ['imageTemplate', { static: true },] }],
    sizeTemplate: [{ type: ViewChild, args: ['sizeTemplate', { static: true },] }],
    nameTemplate: [{ type: ViewChild, args: ['nameTemplate', { static: true },] }],
    tableRef: [{ type: ViewChild, args: ['tableRef', { static: true },] }]
};
if (false) {
    /** @type {?} */
    GalleryComponent.prototype.items;
    /** @type {?} */
    GalleryComponent.prototype.headers;
    /** @type {?} */
    GalleryComponent.prototype.imageTemplate;
    /** @type {?} */
    GalleryComponent.prototype.sizeTemplate;
    /** @type {?} */
    GalleryComponent.prototype.nameTemplate;
    /** @type {?} */
    GalleryComponent.prototype.tableRef;
    /** @type {?} */
    GalleryComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC92aWV3ZXIvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQVE3RCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBUzNCLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVNLE9BQU87UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVNLFFBQVE7UUFDYixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDNUIsZUFBZSxFQUFFO2dCQUNmLFdBQVc7Ozs7Z0JBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRTtvQkFDdkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QixDQUFDLENBQUE7YUFDRjtZQUNELFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDO1lBQ3hGLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFdBQVcsRUFBRTtnQkFDWDtvQkFDRSxLQUFLOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDNUIsUUFBUTs7O29CQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQTtvQkFDckIsSUFBSSxFQUFFLGVBQWUsQ0FBQyxNQUFNO29CQUM1QixjQUFjOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQTtpQkFDekM7Z0JBQ0Q7b0JBQ0UsS0FBSzs7O29CQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQzVCLFFBQVE7OztvQkFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUE7b0JBQ3RCLElBQUksRUFBRSxlQUFlLENBQUMsTUFBTTtvQkFDNUIsY0FBYzs7O29CQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUE7b0JBQ3ZDLFNBQVMsRUFBRSxJQUFJO2lCQUNoQjtnQkFDRDtvQkFDRSxLQUFLOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDNUIsUUFBUTs7O29CQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQTtvQkFDdEIsSUFBSSxFQUFFLGVBQWUsQ0FBQyxNQUFNO29CQUM1QixjQUFjOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQTtpQkFDeEM7Z0JBQ0Q7b0JBQ0UsS0FBSzs7O29CQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQzVCLFFBQVE7OztvQkFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUE7b0JBQzdCLElBQUksRUFBRSxlQUFlLENBQUMsSUFBSTtvQkFDMUIsU0FBUyxFQUFFLElBQUk7aUJBQ2hCO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFoRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHFkQUF1Qzs7YUFFeEM7OztvQkFHRSxLQUFLO3NCQUNMLEtBQUs7NEJBQ0wsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBQzNDLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUMxQyxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt1QkFDMUMsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFMdkMsaUNBQTBFOztJQUMxRSxtQ0FBa0M7O0lBQ2xDLHlDQUFxRjs7SUFDckYsd0NBQW1GOztJQUNuRix3Q0FBbUY7O0lBQ25GLG9DQUF5RTs7SUFDekUsa0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRhYmxlT3B0aW9uLCBUYWJsZUNvbHVtblR5cGUgfSBmcm9tICcuLi8uLi90YWJsZS90YWJsZS5tb2RlbCc7XHJcbmltcG9ydCB7IEZpbGVSZXNwb25zZSwgRmlsZVJlcXVlc3QsIEZpbGVWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi9maWxlL2ZpbGUubW9kZWwnO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2thdGFuYS1nYWxsZXJ5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2FsbGVyeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2FsbGVyeS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcHVibGljIGl0ZW1zOiAocmVxdWVzdDogRmlsZVJlcXVlc3QpID0+IE9ic2VydmFibGU8RmlsZVJlc3BvbnNlPjtcclxuICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyczogc3RyaW5nW107XHJcbiAgQFZpZXdDaGlsZCgnaW1hZ2VUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBpbWFnZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBWaWV3Q2hpbGQoJ3NpemVUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBzaXplVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQFZpZXdDaGlsZCgnbmFtZVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIG5hbWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAVmlld0NoaWxkKCd0YWJsZVJlZicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyB0YWJsZVJlZjogVGFibGVDb21wb25lbnQ7XHJcbiAgcHVibGljIG9wdGlvbjogVGFibGVPcHRpb247XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0VGFibGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudGFibGVSZWYuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbGxiYWNrKCk6IE9ic2VydmFibGU8RmlsZVZpZXdNb2RlbFtdPiB7XHJcbiAgICByZXR1cm4gb2YodGhpcy50YWJsZVJlZi5zZWxlY3RlZEl0ZW1zKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFRhYmxlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vcHRpb24gPSBuZXcgVGFibGVPcHRpb24oe1xyXG4gICAgICBzZXJ2aWNlUHJvdmlkZXI6IHtcclxuICAgICAgICBzZWFyY2hBc3luYzogKHJlcXVlc3QpID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zKHJlcXVlc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgc2VhcmNoRmllbGRzOiBbXCJuYW1lXCIsIFwiY3JlYXRlZEJ5XCIsIFwiY3JlYXRlZERhdGVcIiwgXCJsYXN0TW9kaWZpZWREYXRlXCIsIFwibGFzdE1vZGlmaWVkQnlcIl0sXHJcbiAgICAgIGlubGluZUVkaXQ6IHRydWUsXHJcbiAgICAgIG1haW5Db2x1bW5zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICgpID0+IHRoaXMuaGVhZGVyc1swXSxcclxuICAgICAgICAgIHZhbHVlUmVmOiAoKSA9PiAnc3JjJyxcclxuICAgICAgICAgIHR5cGU6IFRhYmxlQ29sdW1uVHlwZS5DdXN0b20sXHJcbiAgICAgICAgICBjdXN0b21UZW1wbGF0ZTogKCkgPT4gdGhpcy5pbWFnZVRlbXBsYXRlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogKCkgPT4gdGhpcy5oZWFkZXJzWzFdLFxyXG4gICAgICAgICAgdmFsdWVSZWY6ICgpID0+ICduYW1lJyxcclxuICAgICAgICAgIHR5cGU6IFRhYmxlQ29sdW1uVHlwZS5DdXN0b20sXHJcbiAgICAgICAgICBjdXN0b21UZW1wbGF0ZTogKCkgPT4gdGhpcy5uYW1lVGVtcGxhdGUsXHJcbiAgICAgICAgICBhbGxvd1NvcnQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAoKSA9PiB0aGlzLmhlYWRlcnNbMl0sXHJcbiAgICAgICAgICB2YWx1ZVJlZjogKCkgPT4gJ3NpemUnLFxyXG4gICAgICAgICAgdHlwZTogVGFibGVDb2x1bW5UeXBlLkN1c3RvbSxcclxuICAgICAgICAgIGN1c3RvbVRlbXBsYXRlOiAoKSA9PiB0aGlzLnNpemVUZW1wbGF0ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICgpID0+IHRoaXMuaGVhZGVyc1szXSxcclxuICAgICAgICAgIHZhbHVlUmVmOiAoKSA9PiAnY3JlYXRlZERhdGUnLFxyXG4gICAgICAgICAgdHlwZTogVGFibGVDb2x1bW5UeXBlLkRhdGUsXHJcbiAgICAgICAgICBhbGxvd1NvcnQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=