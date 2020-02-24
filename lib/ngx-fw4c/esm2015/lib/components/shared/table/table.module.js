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
export class TableModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvdGFibGUvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFzQnZELE1BQU0sT0FBTyxXQUFXOzs7WUFwQnZCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsdUJBQXVCLENBQUM7Z0JBQ3ZELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtvQkFDMUIsV0FBVztvQkFDWCxhQUFhO29CQUNiLGNBQWM7b0JBQ2QsWUFBWTtvQkFDWixlQUFlO29CQUNmLGNBQWM7b0JBQ2Qsb0JBQW9CLENBQUMsUUFBUSxFQUFFO29CQUMvQixtQkFBbUI7b0JBQ25CLGFBQWE7b0JBQ2IsWUFBWTtvQkFDWixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSx1QkFBdUIsQ0FBQzthQUNuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ1N0cmluZ1BpcGVzTW9kdWxlIH0gZnJvbSAnbmd4LXBpcGVzJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25Nb2R1bGUgfSBmcm9tICcuLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24ubW9kdWxlJztcclxuaW1wb3J0IHsgVGV4dGJveE1vZHVsZSB9IGZyb20gJy4uL3RleHRib3gvdGV4dGJveC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJy4uL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZSc7XHJcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9idXR0b24ubW9kdWxlJztcclxuaW1wb3J0IHsgRm9ybWF0dGVyTW9kdWxlIH0gZnJvbSAnLi4vZm9ybWF0dGVyL2Zvcm1hdHRlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDaGVja2JveE1vZHVsZSB9IGZyb20gJy4uL2NoZWNrYm94L2NoZWNrYm94Lm1vZHVsZSc7XHJcbmltcG9ydCB7IERhdGV0aW1lUGlja2VyTW9kdWxlIH0gZnJvbSAnLi4vZGF0ZXRpbWUtcGlja2VyL2RhdGV0aW1lLXBpY2tlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBUYWJsZVJvd0RldGFpbERpcmVjdGl2ZSB9IGZyb20gJy4vdGFibGUtcm93LWRldGFpbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBFZGl0b3JNb2R1bGUgfSBmcm9tICcuLi9lZGl0b3IvZWRpdG9yLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1RhYmxlQ29tcG9uZW50LCBUYWJsZVJvd0RldGFpbERpcmVjdGl2ZV0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgVmFsaWRhdGlvbk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFRleHRib3hNb2R1bGUsXHJcbiAgICBEcm9wZG93bk1vZHVsZSxcclxuICAgIEJ1dHRvbk1vZHVsZSxcclxuICAgIEZvcm1hdHRlck1vZHVsZSxcclxuICAgIENoZWNrYm94TW9kdWxlLFxyXG4gICAgRGF0ZXRpbWVQaWNrZXJNb2R1bGUuZm9yQ2hpbGQoKSxcclxuICAgIE5nU3RyaW5nUGlwZXNNb2R1bGUsXHJcbiAgICBUZXh0Ym94TW9kdWxlLFxyXG4gICAgQnV0dG9uTW9kdWxlLFxyXG4gICAgRWRpdG9yTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbVGFibGVDb21wb25lbnQsIFRhYmxlUm93RGV0YWlsRGlyZWN0aXZlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlTW9kdWxlIHsgfVxyXG4iXX0=