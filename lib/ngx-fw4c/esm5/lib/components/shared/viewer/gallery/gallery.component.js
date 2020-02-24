/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/viewer/gallery/gallery.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { of } from 'rxjs';
import { TableOption, TableColumnType } from '../../table/table.model';
import { TableComponent } from '../../table/table.component';
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    /**
     * @return {?}
     */
    GalleryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initTable();
    };
    /**
     * @return {?}
     */
    GalleryComponent.prototype.isValid = /**
     * @return {?}
     */
    function () {
        return this.tableRef.selectedItems.length > 0;
    };
    /**
     * @return {?}
     */
    GalleryComponent.prototype.callback = /**
     * @return {?}
     */
    function () {
        return of(this.tableRef.selectedItems);
    };
    /**
     * @private
     * @return {?}
     */
    GalleryComponent.prototype.initTable = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.option = new TableOption({
            serviceProvider: {
                searchAsync: (/**
                 * @param {?} request
                 * @return {?}
                 */
                function (request) {
                    return _this.items(request);
                })
            },
            searchFields: ["name", "createdBy", "createdDate", "lastModifiedDate", "lastModifiedBy"],
            inlineEdit: true,
            mainColumns: [
                {
                    title: (/**
                     * @return {?}
                     */
                    function () { return _this.headers[0]; }),
                    valueRef: (/**
                     * @return {?}
                     */
                    function () { return 'src'; }),
                    type: TableColumnType.Custom,
                    customTemplate: (/**
                     * @return {?}
                     */
                    function () { return _this.imageTemplate; })
                },
                {
                    title: (/**
                     * @return {?}
                     */
                    function () { return _this.headers[1]; }),
                    valueRef: (/**
                     * @return {?}
                     */
                    function () { return 'name'; }),
                    type: TableColumnType.Custom,
                    customTemplate: (/**
                     * @return {?}
                     */
                    function () { return _this.nameTemplate; }),
                    allowSort: true
                },
                {
                    title: (/**
                     * @return {?}
                     */
                    function () { return _this.headers[2]; }),
                    valueRef: (/**
                     * @return {?}
                     */
                    function () { return 'size'; }),
                    type: TableColumnType.Custom,
                    customTemplate: (/**
                     * @return {?}
                     */
                    function () { return _this.sizeTemplate; })
                },
                {
                    title: (/**
                     * @return {?}
                     */
                    function () { return _this.headers[3]; }),
                    valueRef: (/**
                     * @return {?}
                     */
                    function () { return 'createdDate'; }),
                    type: TableColumnType.Date,
                    allowSort: true
                }
            ]
        });
    };
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
    return GalleryComponent;
}());
export { GalleryComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC92aWV3ZXIvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU3RDtJQUFBO0lBaUVBLENBQUM7Ozs7SUFsREMsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFTSxrQ0FBTzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVNLG1DQUFROzs7SUFBZjtRQUNFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFTyxvQ0FBUzs7OztJQUFqQjtRQUFBLGlCQXFDQztRQXBDQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzVCLGVBQWUsRUFBRTtnQkFDZixXQUFXOzs7O2dCQUFFLFVBQUMsT0FBTztvQkFDbkIsT0FBTyxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QixDQUFDLENBQUE7YUFDRjtZQUNELFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDO1lBQ3hGLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFdBQVcsRUFBRTtnQkFDWDtvQkFDRSxLQUFLOzs7b0JBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQWYsQ0FBZSxDQUFBO29CQUM1QixRQUFROzs7b0JBQUUsY0FBTSxPQUFBLEtBQUssRUFBTCxDQUFLLENBQUE7b0JBQ3JCLElBQUksRUFBRSxlQUFlLENBQUMsTUFBTTtvQkFDNUIsY0FBYzs7O29CQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFsQixDQUFrQixDQUFBO2lCQUN6QztnQkFDRDtvQkFDRSxLQUFLOzs7b0JBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQWYsQ0FBZSxDQUFBO29CQUM1QixRQUFROzs7b0JBQUUsY0FBTSxPQUFBLE1BQU0sRUFBTixDQUFNLENBQUE7b0JBQ3RCLElBQUksRUFBRSxlQUFlLENBQUMsTUFBTTtvQkFDNUIsY0FBYzs7O29CQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFqQixDQUFpQixDQUFBO29CQUN2QyxTQUFTLEVBQUUsSUFBSTtpQkFDaEI7Z0JBQ0Q7b0JBQ0UsS0FBSzs7O29CQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFmLENBQWUsQ0FBQTtvQkFDNUIsUUFBUTs7O29CQUFFLGNBQU0sT0FBQSxNQUFNLEVBQU4sQ0FBTSxDQUFBO29CQUN0QixJQUFJLEVBQUUsZUFBZSxDQUFDLE1BQU07b0JBQzVCLGNBQWM7OztvQkFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksRUFBakIsQ0FBaUIsQ0FBQTtpQkFDeEM7Z0JBQ0Q7b0JBQ0UsS0FBSzs7O29CQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFmLENBQWUsQ0FBQTtvQkFDNUIsUUFBUTs7O29CQUFFLGNBQU0sT0FBQSxhQUFhLEVBQWIsQ0FBYSxDQUFBO29CQUM3QixJQUFJLEVBQUUsZUFBZSxDQUFDLElBQUk7b0JBQzFCLFNBQVMsRUFBRSxJQUFJO2lCQUNoQjthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBaEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixxZEFBdUM7O2lCQUV4Qzs7O3dCQUdFLEtBQUs7MEJBQ0wsS0FBSztnQ0FDTCxTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFDM0MsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBQzFDLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUMxQyxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFxRHpDLHVCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0EzRFksZ0JBQWdCOzs7SUFDM0IsaUNBQTBFOztJQUMxRSxtQ0FBa0M7O0lBQ2xDLHlDQUFxRjs7SUFDckYsd0NBQW1GOztJQUNuRix3Q0FBbUY7O0lBQ25GLG9DQUF5RTs7SUFDekUsa0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRhYmxlT3B0aW9uLCBUYWJsZUNvbHVtblR5cGUgfSBmcm9tICcuLi8uLi90YWJsZS90YWJsZS5tb2RlbCc7XHJcbmltcG9ydCB7IEZpbGVSZXNwb25zZSwgRmlsZVJlcXVlc3QsIEZpbGVWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi9maWxlL2ZpbGUubW9kZWwnO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2thdGFuYS1nYWxsZXJ5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2FsbGVyeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2FsbGVyeS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcHVibGljIGl0ZW1zOiAocmVxdWVzdDogRmlsZVJlcXVlc3QpID0+IE9ic2VydmFibGU8RmlsZVJlc3BvbnNlPjtcclxuICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyczogc3RyaW5nW107XHJcbiAgQFZpZXdDaGlsZCgnaW1hZ2VUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBpbWFnZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBWaWV3Q2hpbGQoJ3NpemVUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBzaXplVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQFZpZXdDaGlsZCgnbmFtZVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIG5hbWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAVmlld0NoaWxkKCd0YWJsZVJlZicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyB0YWJsZVJlZjogVGFibGVDb21wb25lbnQ7XHJcbiAgcHVibGljIG9wdGlvbjogVGFibGVPcHRpb247XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0VGFibGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudGFibGVSZWYuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbGxiYWNrKCk6IE9ic2VydmFibGU8RmlsZVZpZXdNb2RlbFtdPiB7XHJcbiAgICByZXR1cm4gb2YodGhpcy50YWJsZVJlZi5zZWxlY3RlZEl0ZW1zKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFRhYmxlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vcHRpb24gPSBuZXcgVGFibGVPcHRpb24oe1xyXG4gICAgICBzZXJ2aWNlUHJvdmlkZXI6IHtcclxuICAgICAgICBzZWFyY2hBc3luYzogKHJlcXVlc3QpID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zKHJlcXVlc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgc2VhcmNoRmllbGRzOiBbXCJuYW1lXCIsIFwiY3JlYXRlZEJ5XCIsIFwiY3JlYXRlZERhdGVcIiwgXCJsYXN0TW9kaWZpZWREYXRlXCIsIFwibGFzdE1vZGlmaWVkQnlcIl0sXHJcbiAgICAgIGlubGluZUVkaXQ6IHRydWUsXHJcbiAgICAgIG1haW5Db2x1bW5zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICgpID0+IHRoaXMuaGVhZGVyc1swXSxcclxuICAgICAgICAgIHZhbHVlUmVmOiAoKSA9PiAnc3JjJyxcclxuICAgICAgICAgIHR5cGU6IFRhYmxlQ29sdW1uVHlwZS5DdXN0b20sXHJcbiAgICAgICAgICBjdXN0b21UZW1wbGF0ZTogKCkgPT4gdGhpcy5pbWFnZVRlbXBsYXRlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogKCkgPT4gdGhpcy5oZWFkZXJzWzFdLFxyXG4gICAgICAgICAgdmFsdWVSZWY6ICgpID0+ICduYW1lJyxcclxuICAgICAgICAgIHR5cGU6IFRhYmxlQ29sdW1uVHlwZS5DdXN0b20sXHJcbiAgICAgICAgICBjdXN0b21UZW1wbGF0ZTogKCkgPT4gdGhpcy5uYW1lVGVtcGxhdGUsXHJcbiAgICAgICAgICBhbGxvd1NvcnQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAoKSA9PiB0aGlzLmhlYWRlcnNbMl0sXHJcbiAgICAgICAgICB2YWx1ZVJlZjogKCkgPT4gJ3NpemUnLFxyXG4gICAgICAgICAgdHlwZTogVGFibGVDb2x1bW5UeXBlLkN1c3RvbSxcclxuICAgICAgICAgIGN1c3RvbVRlbXBsYXRlOiAoKSA9PiB0aGlzLnNpemVUZW1wbGF0ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICgpID0+IHRoaXMuaGVhZGVyc1szXSxcclxuICAgICAgICAgIHZhbHVlUmVmOiAoKSA9PiAnY3JlYXRlZERhdGUnLFxyXG4gICAgICAgICAgdHlwZTogVGFibGVDb2x1bW5UeXBlLkRhdGUsXHJcbiAgICAgICAgICBhbGxvd1NvcnQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=