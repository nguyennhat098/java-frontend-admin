/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/form/form.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, Input } from '@angular/core';
import { FormItemDirective } from './form-item.directive';
var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.column = 4;
        this.smallWidth = 12;
        this.mediumWidth = 4;
        this.largeWidth = 3;
    }
    /**
     * @return {?}
     */
    FormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FormComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.column && changes.column.firstChange) {
            /** @type {?} */
            var column = changes.column.currentValue;
            switch (column) {
                case 1: {
                    this.smallWidth = 12;
                    this.mediumWidth = 12;
                    this.largeWidth = 12;
                    break;
                }
                case 2: {
                    this.smallWidth = 12;
                    this.mediumWidth = 12;
                    this.largeWidth = 6;
                    break;
                }
                case 3: {
                    this.smallWidth = 12;
                    this.mediumWidth = 6;
                    this.largeWidth = 4;
                    break;
                }
                case 4: {
                    this.smallWidth = 12;
                    this.mediumWidth = 4;
                    this.largeWidth = 3;
                    break;
                }
            }
        }
    };
    FormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-form',
                    template: "<div class=\"row panel-space\">\r\n  <div class=\"col-sm-{{smallWidth}} col-md-{{mediumWidth}} col-lg-{{largeWidth}} px-2\" *ngFor=\"let i of formItems\">\r\n    <ng-template [ngTemplateOutlet]=\"i.template\"></ng-template>\r\n  </div>\r\n</div>",
                    styles: [""]
                }] }
    ];
    FormComponent.propDecorators = {
        formItems: [{ type: ContentChildren, args: [FormItemDirective,] }],
        column: [{ type: Input }]
    };
    return FormComponent;
}());
export { FormComponent };
if (false) {
    /** @type {?} */
    FormComponent.prototype.formItems;
    /** @type {?} */
    FormComponent.prototype.column;
    /** @type {?} */
    FormComponent.prototype.smallWidth;
    /** @type {?} */
    FormComponent.prototype.mediumWidth;
    /** @type {?} */
    FormComponent.prototype.largeWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9mb3JtL2Zvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxlQUFlLEVBQUUsU0FBUyxFQUFlLEtBQUssRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQ7SUFBQTtRQVFvQixXQUFNLEdBQWtCLENBQUMsQ0FBQztRQUNuQyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGVBQVUsR0FBVyxDQUFDLENBQUM7SUFvQ2xDLENBQUM7Ozs7SUFsQ0csZ0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFFRCxtQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDOUIsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFOztnQkFDeEMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWTtZQUMxQyxRQUFRLE1BQU0sRUFBRTtnQkFDWixLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ3JCLE1BQU07aUJBQ1Q7Z0JBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDSixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUNwQixNQUFNO2lCQUNUO2dCQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ0osSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsTUFBTTtpQkFDVDtnQkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztvQkFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07aUJBQ1Q7YUFDSjtTQUNKO0lBQ0wsQ0FBQzs7Z0JBOUNKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsaVFBQW9DOztpQkFFdkM7Ozs0QkFHSSxlQUFlLFNBQUMsaUJBQWlCO3lCQUNqQyxLQUFLOztJQXVDVixvQkFBQztDQUFBLEFBL0NELElBK0NDO1NBekNZLGFBQWE7OztJQUN0QixrQ0FBa0Y7O0lBQ2xGLCtCQUEwQzs7SUFDMUMsbUNBQStCOztJQUMvQixvQ0FBK0I7O0lBQy9CLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYsIElucHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1JdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3JtLWl0ZW0uZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdrYXRhbmEtZm9ybScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZm9ybS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9mb3JtLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBDb250ZW50Q2hpbGRyZW4oRm9ybUl0ZW1EaXJlY3RpdmUpIHB1YmxpYyBmb3JtSXRlbXM6IFF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+PjtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjb2x1bW46IDEgfCAyIHwgMyB8IDQgPSA0O1xyXG4gICAgcHVibGljIHNtYWxsV2lkdGg6IG51bWJlciA9IDEyO1xyXG4gICAgcHVibGljIG1lZGl1bVdpZHRoOiBudW1iZXIgPSA0O1xyXG4gICAgcHVibGljIGxhcmdlV2lkdGg6IG51bWJlciA9IDM7XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLmNvbHVtbiAmJiBjaGFuZ2VzLmNvbHVtbi5maXJzdENoYW5nZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSBjaGFuZ2VzLmNvbHVtbi5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY29sdW1uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNtYWxsV2lkdGggPSAxMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lZGl1bVdpZHRoID0gMTI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXJnZVdpZHRoID0gMTI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNtYWxsV2lkdGggPSAxMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lZGl1bVdpZHRoID0gMTI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXJnZVdpZHRoID0gNjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgMzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc21hbGxXaWR0aCA9IDEyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVkaXVtV2lkdGggPSA2O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFyZ2VXaWR0aCA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNtYWxsV2lkdGggPSAxMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lZGl1bVdpZHRoID0gNDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhcmdlV2lkdGggPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==