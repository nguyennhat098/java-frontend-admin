/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/table/table.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { NgStringPipesModule } from 'ngx-pipes';
import { FormsModule } from '@angular/forms';
import { ValidationModule } from '../validation/validation.module';
import { TextboxModule } from '../textbox/textbox.module';
import { DropdownModule } from '../dropdown/dropdown.module';
import { ButtonModule } from '../button/button.module';
import { FormatterModule } from '../formatter/formatter.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { DatetimePickerModule } from '../datetime-picker/datetime-picker.module';
import { TableRowDetailDirective } from './table-row-detail.directive';
import { EditorModule } from '../editor/editor.module';
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TableComponent, TableRowDetailDirective],
                    imports: [
                        CommonModule,
                        ValidationModule.forRoot(),
                        FormsModule,
                        TextboxModule,
                        DropdownModule,
                        ButtonModule,
                        FormatterModule,
                        CheckboxModule,
                        DatetimePickerModule.forChild(),
                        NgStringPipesModule,
                        TextboxModule,
                        ButtonModule,
                        EditorModule
                    ],
                    exports: [TableComponent, TableRowDetailDirective]
                },] }
    ];
    return TableModule;
}());
export { TableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvdGFibGUvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQ7SUFBQTtJQW9CMkIsQ0FBQzs7Z0JBcEIzQixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFFLHVCQUF1QixDQUFDO29CQUN2RCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7d0JBQzFCLFdBQVc7d0JBQ1gsYUFBYTt3QkFDYixjQUFjO3dCQUNkLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixjQUFjO3dCQUNkLG9CQUFvQixDQUFDLFFBQVEsRUFBRTt3QkFDL0IsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLFlBQVk7d0JBQ1osWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsdUJBQXVCLENBQUM7aUJBQ25EOztJQUUwQixrQkFBQztDQUFBLEFBcEI1QixJQW9CNEI7U0FBZixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nU3RyaW5nUGlwZXNNb2R1bGUgfSBmcm9tICduZ3gtcGlwZXMnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvbk1vZHVsZSB9IGZyb20gJy4uL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBUZXh0Ym94TW9kdWxlIH0gZnJvbSAnLi4vdGV4dGJveC90ZXh0Ym94Lm1vZHVsZSc7XHJcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAnLi4vZHJvcGRvd24vZHJvcGRvd24ubW9kdWxlJztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBGb3JtYXR0ZXJNb2R1bGUgfSBmcm9tICcuLi9mb3JtYXR0ZXIvZm9ybWF0dGVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IENoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi4vY2hlY2tib3gvY2hlY2tib3gubW9kdWxlJztcclxuaW1wb3J0IHsgRGF0ZXRpbWVQaWNrZXJNb2R1bGUgfSBmcm9tICcuLi9kYXRldGltZS1waWNrZXIvZGF0ZXRpbWUtcGlja2VyLm1vZHVsZSc7XHJcbmltcG9ydCB7IFRhYmxlUm93RGV0YWlsRGlyZWN0aXZlIH0gZnJvbSAnLi90YWJsZS1yb3ctZGV0YWlsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEVkaXRvck1vZHVsZSB9IGZyb20gJy4uL2VkaXRvci9lZGl0b3IubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbVGFibGVDb21wb25lbnQsIFRhYmxlUm93RGV0YWlsRGlyZWN0aXZlXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBWYWxpZGF0aW9uTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgVGV4dGJveE1vZHVsZSxcclxuICAgIERyb3Bkb3duTW9kdWxlLFxyXG4gICAgQnV0dG9uTW9kdWxlLFxyXG4gICAgRm9ybWF0dGVyTW9kdWxlLFxyXG4gICAgQ2hlY2tib3hNb2R1bGUsXHJcbiAgICBEYXRldGltZVBpY2tlck1vZHVsZS5mb3JDaGlsZCgpLFxyXG4gICAgTmdTdHJpbmdQaXBlc01vZHVsZSxcclxuICAgIFRleHRib3hNb2R1bGUsXHJcbiAgICBCdXR0b25Nb2R1bGUsXHJcbiAgICBFZGl0b3JNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtUYWJsZUNvbXBvbmVudCwgVGFibGVSb3dEZXRhaWxEaXJlY3RpdmVdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVNb2R1bGUgeyB9XHJcbiJdfQ==