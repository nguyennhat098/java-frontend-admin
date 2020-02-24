/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/form/form.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormDirectorComponent } from './form-director.component';
import { FormItemDirective } from './form-item.directive';
import { FormsModule } from '@angular/forms';
import { FormDirectorExtraItemDirective } from './form-director-extra-item.directive';
/** @type {?} */
var declarations = [FormComponent, FormDirectorComponent, FormItemDirective, FormDirectorExtraItemDirective];
var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule.decorators = [
        { type: NgModule, args: [{
                    declarations: declarations,
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    exports: declarations
                },] }
    ];
    return FormModule;
}());
export { FormModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9mb3JtL2Zvcm0ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7SUFFaEYsWUFBWSxHQUFHLENBQUMsYUFBYSxFQUFFLHFCQUFxQixFQUFFLGlCQUFpQixFQUFFLDhCQUE4QixDQUFDO0FBRTlHO0lBQUE7SUFTMEIsQ0FBQzs7Z0JBVDFCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsWUFBWTtvQkFDMUIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVztxQkFDWjtvQkFDRCxPQUFPLEVBQUUsWUFBWTtpQkFDdEI7O0lBRXlCLGlCQUFDO0NBQUEsQUFUM0IsSUFTMkI7U0FBZCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3JtRGlyZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tZGlyZWN0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm0taXRlbS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm9ybURpcmVjdG9yRXh0cmFJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3JtLWRpcmVjdG9yLWV4dHJhLWl0ZW0uZGlyZWN0aXZlJztcclxuXHJcbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtGb3JtQ29tcG9uZW50LCBGb3JtRGlyZWN0b3JDb21wb25lbnQsIEZvcm1JdGVtRGlyZWN0aXZlLCBGb3JtRGlyZWN0b3JFeHRyYUl0ZW1EaXJlY3RpdmVdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucyxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogZGVjbGFyYXRpb25zXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybU1vZHVsZSB7IH1cclxuIl19