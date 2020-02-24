/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/form/form.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, Input } from '@angular/core';
import { FormItemDirective } from './form-item.directive';
export class FormComponent {
    constructor() {
        this.column = 4;
        this.smallWidth = 12;
        this.mediumWidth = 4;
        this.largeWidth = 3;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.column && changes.column.firstChange) {
            /** @type {?} */
            const column = changes.column.currentValue;
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9mb3JtL2Zvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxlQUFlLEVBQUUsU0FBUyxFQUFlLEtBQUssRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFRMUQsTUFBTSxPQUFPLGFBQWE7SUFOMUI7UUFRb0IsV0FBTSxHQUFrQixDQUFDLENBQUM7UUFDbkMsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixlQUFVLEdBQVcsQ0FBQyxDQUFDO0lBb0NsQyxDQUFDOzs7O0lBbENHLFFBQVE7SUFDUixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7O2tCQUN4QyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQzFDLFFBQVEsTUFBTSxFQUFFO2dCQUNaLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ0osSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO29CQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDckIsTUFBTTtpQkFDVDtnQkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07aUJBQ1Q7Z0JBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDSixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUNwQixNQUFNO2lCQUNUO2dCQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ0osSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsTUFBTTtpQkFDVDthQUNKO1NBQ0o7SUFDTCxDQUFDOzs7WUE5Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixpUUFBb0M7O2FBRXZDOzs7d0JBR0ksZUFBZSxTQUFDLGlCQUFpQjtxQkFDakMsS0FBSzs7OztJQUROLGtDQUFrRjs7SUFDbEYsK0JBQTBDOztJQUMxQyxtQ0FBK0I7O0lBQy9CLG9DQUErQjs7SUFDL0IsbUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBUZW1wbGF0ZVJlZiwgSW5wdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm0taXRlbS5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2thdGFuYS1mb3JtJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9mb3JtLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Zvcm0uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQENvbnRlbnRDaGlsZHJlbihGb3JtSXRlbURpcmVjdGl2ZSkgcHVibGljIGZvcm1JdGVtczogUXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+O1xyXG4gICAgQElucHV0KCkgcHVibGljIGNvbHVtbjogMSB8IDIgfCAzIHwgNCA9IDQ7XHJcbiAgICBwdWJsaWMgc21hbGxXaWR0aDogbnVtYmVyID0gMTI7XHJcbiAgICBwdWJsaWMgbWVkaXVtV2lkdGg6IG51bWJlciA9IDQ7XHJcbiAgICBwdWJsaWMgbGFyZ2VXaWR0aDogbnVtYmVyID0gMztcclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuY29sdW1uICYmIGNoYW5nZXMuY29sdW1uLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IGNoYW5nZXMuY29sdW1uLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgc3dpdGNoIChjb2x1bW4pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc21hbGxXaWR0aCA9IDEyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVkaXVtV2lkdGggPSAxMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhcmdlV2lkdGggPSAxMjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgMjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc21hbGxXaWR0aCA9IDEyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVkaXVtV2lkdGggPSAxMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhcmdlV2lkdGggPSA2O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbWFsbFdpZHRoID0gMTI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWRpdW1XaWR0aCA9IDY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXJnZVdpZHRoID0gNDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgNDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc21hbGxXaWR0aCA9IDEyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVkaXVtV2lkdGggPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFyZ2VXaWR0aCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19