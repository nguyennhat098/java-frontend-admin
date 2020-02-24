/**
 * @fileoverview added by tsickle
 * Generated from: lib/fw4c.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ValidationModule } from './components/shared/validation/validation.module';
import { CModalModule } from './components/shared/modals';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './components/auth/auth.module';
import { AggregatorService } from './components/shared/services/aggregator.service';
import { TabModule } from './components/shared/tab/tab.module';
import { DatetimePickerModule } from './components/shared/datetime-picker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorModule } from './components/shared/editor/editor.module';
import { ButtonModule } from './components/shared/button/button.module';
import { FormModule } from './components/shared/form/form.module';
import { DropdownModule } from './components/shared/dropdown/dropdown.module';
import { CardModule } from './components/shared/card/card.module';
import { AccordionModule } from './components/shared/accordion/accordion.module';
import { FormatterModule } from './components/shared/formatter/formatter.module';
import { LayoutModule } from './components/layout/layout.module';
import { SpinnerModule } from './components/shared/spinner/spinner.module';
import { ClickOutsideModule } from 'ng-click-outside';
import { CheckboxModule } from './components/shared/checkbox/checkbox.module';
import { TextboxModule } from './components/shared/textbox/textbox.module';
import { TableModule } from './components/shared/table/table.module';
import { FileModule } from './components/shared/file/file.module';
import { MediaViewerModule } from './components/shared/media-viewer/media-viewer.module';
import { ImageViewerModule } from './components/shared/image-viewer/image-viewer.module';
import { ViewerModule } from './components/shared/viewer/viewer.module';
import { RadioModule } from './components/shared/radio/radio.module';
import { TimelineModule } from './components/shared/timeline/timeline.module';
import { ChipModule } from './components/shared/chip/chip.module';
import { PanelModule } from './components/shared/panel/panel.module';
import { ListModule } from './components/shared/list/list.module';
import { TreeViewModule } from './components/shared/treeview/treeview.module';
import { IgxExcelExporterService } from "igniteui-angular";
import { PageModule } from './components/shared/pages/page.module';
export class Framework4CModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: Framework4CModule,
            providers: [
                AggregatorService,
                IgxExcelExporterService
            ]
        };
    }
}
Framework4CModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    HttpClientModule,
                    TabModule,
                    EditorModule,
                    ButtonModule,
                    CardModule,
                    AccordionModule,
                    FormModule,
                    ClickOutsideModule,
                    SpinnerModule,
                    CardModule,
                    CheckboxModule,
                    TextboxModule,
                    TableModule,
                    FileModule,
                    MediaViewerModule,
                    ImageViewerModule,
                    ViewerModule,
                    RadioModule,
                    TimelineModule,
                    ChipModule,
                    PanelModule,
                    ListModule,
                    TreeViewModule,
                    PageModule,
                    FormatterModule.forChild(),
                    ValidationModule.forRoot(),
                    CModalModule.forRoot(),
                    AuthModule.forRoot(),
                    DatetimePickerModule.forChild(),
                    LayoutModule.forRoot()
                ],
                exports: [
                    AuthModule,
                    TabModule,
                    CModalModule,
                    DatetimePickerModule,
                    EditorModule,
                    FormModule,
                    DropdownModule,
                    SpinnerModule,
                    CardModule,
                    ButtonModule,
                    AccordionModule,
                    CheckboxModule,
                    TextboxModule,
                    TableModule,
                    FileModule,
                    MediaViewerModule,
                    ImageViewerModule,
                    ViewerModule,
                    RadioModule,
                    TimelineModule,
                    ChipModule,
                    PanelModule,
                    ListModule,
                    TreeViewModule,
                    PageModule
                ],
                providers: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnc0Yy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9mdzRjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDcEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUs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VixXQUFXO29CQUNYLFVBQVU7b0JBQ1YsY0FBYztvQkFDZCxVQUFVO2lCQUNYO2dCQUNELFNBQVMsRUFBRSxFQUFFO2FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFZhbGlkYXRpb25Nb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ01vZGFsTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC9tb2RhbHMnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9hdXRoL2F1dGgubW9kdWxlJztcbmltcG9ydCB7IEFnZ3JlZ2F0b3JTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC9zZXJ2aWNlcy9hZ2dyZWdhdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGFiTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC90YWIvdGFiLm1vZHVsZSc7XG5pbXBvcnQgeyBEYXRldGltZVBpY2tlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvZGF0ZXRpbWUtcGlja2VyJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IEVkaXRvck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvZWRpdG9yL2VkaXRvci5tb2R1bGUnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBGb3JtTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC9mb3JtL2Zvcm0ubW9kdWxlJztcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBBY2NvcmRpb25Nb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL2FjY29yZGlvbi9hY2NvcmRpb24ubW9kdWxlJztcbmltcG9ydCB7IEZvcm1hdHRlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvZm9ybWF0dGVyL2Zvcm1hdHRlci5tb2R1bGUnO1xuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQubW9kdWxlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgQ2xpY2tPdXRzaWRlTW9kdWxlIH0gZnJvbSAnbmctY2xpY2stb3V0c2lkZSc7XG5pbXBvcnQgeyBDaGVja2JveE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvY2hlY2tib3gvY2hlY2tib3gubW9kdWxlJztcbmltcG9ydCB7IFRleHRib3hNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL3RleHRib3gvdGV4dGJveC5tb2R1bGUnO1xuaW1wb3J0IHsgVGFibGVNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL3RhYmxlL3RhYmxlLm1vZHVsZSc7XG5pbXBvcnQgeyBGaWxlTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC9maWxlL2ZpbGUubW9kdWxlJztcbmltcG9ydCB7IE1lZGlhVmlld2VyTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC9tZWRpYS12aWV3ZXIvbWVkaWEtdmlld2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBJbWFnZVZpZXdlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvaW1hZ2Utdmlld2VyL2ltYWdlLXZpZXdlci5tb2R1bGUnO1xuaW1wb3J0IHsgVmlld2VyTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC92aWV3ZXIvdmlld2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBSYWRpb01vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvcmFkaW8vcmFkaW8ubW9kdWxlJztcbmltcG9ydCB7IFRpbWVsaW5lTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC90aW1lbGluZS90aW1lbGluZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hpcE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvY2hpcC9jaGlwLm1vZHVsZSc7XG5pbXBvcnQgeyBQYW5lbE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvcGFuZWwvcGFuZWwubW9kdWxlJztcbmltcG9ydCB7IExpc3RNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL2xpc3QvbGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgVHJlZVZpZXdNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL3RyZWV2aWV3L3RyZWV2aWV3Lm1vZHVsZSc7XG5pbXBvcnQgeyBJZ3hFeGNlbEV4cG9ydGVyU2VydmljZSB9IGZyb20gXCJpZ25pdGV1aS1hbmd1bGFyXCI7XG5pbXBvcnQgeyBQYWdlTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC9wYWdlcy9wYWdlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgVGFiTW9kdWxlLFxuICAgIEVkaXRvck1vZHVsZSxcbiAgICBCdXR0b25Nb2R1bGUsXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBBY2NvcmRpb25Nb2R1bGUsXG4gICAgRm9ybU1vZHVsZSxcbiAgICBDbGlja091dHNpZGVNb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBDYXJkTW9kdWxlLFxuICAgIENoZWNrYm94TW9kdWxlLFxuICAgIFRleHRib3hNb2R1bGUsXG4gICAgVGFibGVNb2R1bGUsXG4gICAgRmlsZU1vZHVsZSxcbiAgICBNZWRpYVZpZXdlck1vZHVsZSxcbiAgICBJbWFnZVZpZXdlck1vZHVsZSxcbiAgICBWaWV3ZXJNb2R1bGUsXG4gICAgUmFkaW9Nb2R1bGUsXG4gICAgVGltZWxpbmVNb2R1bGUsXG4gICAgQ2hpcE1vZHVsZSxcbiAgICBQYW5lbE1vZHVsZSxcbiAgICBMaXN0TW9kdWxlLFxuICAgIFRyZWVWaWV3TW9kdWxlLFxuICAgIFBhZ2VNb2R1bGUsXG4gICAgRm9ybWF0dGVyTW9kdWxlLmZvckNoaWxkKCksXG4gICAgVmFsaWRhdGlvbk1vZHVsZS5mb3JSb290KCksXG4gICAgQ01vZGFsTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBdXRoTW9kdWxlLmZvclJvb3QoKSxcbiAgICBEYXRldGltZVBpY2tlck1vZHVsZS5mb3JDaGlsZCgpLFxuICAgIExheW91dE1vZHVsZS5mb3JSb290KClcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEF1dGhNb2R1bGUsXG4gICAgVGFiTW9kdWxlLFxuICAgIENNb2RhbE1vZHVsZSxcbiAgICBEYXRldGltZVBpY2tlck1vZHVsZSxcbiAgICBFZGl0b3JNb2R1bGUsXG4gICAgRm9ybU1vZHVsZSxcbiAgICBEcm9wZG93bk1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIEFjY29yZGlvbk1vZHVsZSxcbiAgICBDaGVja2JveE1vZHVsZSxcbiAgICBUZXh0Ym94TW9kdWxlLFxuICAgIFRhYmxlTW9kdWxlLFxuICAgIEZpbGVNb2R1bGUsXG4gICAgTWVkaWFWaWV3ZXJNb2R1bGUsXG4gICAgSW1hZ2VWaWV3ZXJNb2R1bGUsXG4gICAgVmlld2VyTW9kdWxlLFxuICAgIFJhZGlvTW9kdWxlLFxuICAgIFRpbWVsaW5lTW9kdWxlLFxuICAgIENoaXBNb2R1bGUsXG4gICAgUGFuZWxNb2R1bGUsXG4gICAgTGlzdE1vZHVsZSxcbiAgICBUcmVlVmlld01vZHVsZSxcbiAgICBQYWdlTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW11cbn0pXG5cbmV4cG9ydCBjbGFzcyBGcmFtZXdvcms0Q01vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEZyYW1ld29yazRDTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEFnZ3JlZ2F0b3JTZXJ2aWNlLFxuICAgICAgICBJZ3hFeGNlbEV4cG9ydGVyU2VydmljZSBcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=