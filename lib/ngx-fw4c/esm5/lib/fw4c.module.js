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
var Framework4CModule = /** @class */ (function () {
    function Framework4CModule() {
    }
    /**
     * @return {?}
     */
    Framework4CModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: Framework4CModule,
            providers: [
                AggregatorService,
                IgxExcelExporterService
            ]
        };
    };
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
    return Framework4CModule;
}());
export { Framework4CModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnc0Yy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9mdzRjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDcEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUs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Vzt3QkFDWCxVQUFVO3dCQUNWLGNBQWM7d0JBQ2QsVUFBVTtxQkFDWDtvQkFDRCxTQUFTLEVBQUUsRUFBRTtpQkFDZDs7SUFZRCx3QkFBQztDQUFBLEFBOUVELElBOEVDO1NBVlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC92YWxpZGF0aW9uL3ZhbGlkYXRpb24ubW9kdWxlJztcbmltcG9ydCB7IENNb2RhbE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvbW9kYWxzJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvYXV0aC9hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdG9yU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYWdncmVnYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IFRhYk1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvdGFiL3RhYi5tb2R1bGUnO1xuaW1wb3J0IHsgRGF0ZXRpbWVQaWNrZXJNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL2RhdGV0aW1lLXBpY2tlcic7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBFZGl0b3JNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL2VkaXRvci9lZGl0b3IubW9kdWxlJztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvZm9ybS9mb3JtLm1vZHVsZSc7XG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvZHJvcGRvd24vZHJvcGRvd24ubW9kdWxlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgQWNjb3JkaW9uTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC9hY2NvcmRpb24vYWNjb3JkaW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBGb3JtYXR0ZXJNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL2Zvcm1hdHRlci9mb3JtYXR0ZXIubW9kdWxlJztcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IENsaWNrT3V0c2lkZU1vZHVsZSB9IGZyb20gJ25nLWNsaWNrLW91dHNpZGUnO1xuaW1wb3J0IHsgQ2hlY2tib3hNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL2NoZWNrYm94L2NoZWNrYm94Lm1vZHVsZSc7XG5pbXBvcnQgeyBUZXh0Ym94TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC90ZXh0Ym94L3RleHRib3gubW9kdWxlJztcbmltcG9ydCB7IFRhYmxlTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC90YWJsZS90YWJsZS5tb2R1bGUnO1xuaW1wb3J0IHsgRmlsZU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvZmlsZS9maWxlLm1vZHVsZSc7XG5pbXBvcnQgeyBNZWRpYVZpZXdlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvbWVkaWEtdmlld2VyL21lZGlhLXZpZXdlci5tb2R1bGUnO1xuaW1wb3J0IHsgSW1hZ2VWaWV3ZXJNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL2ltYWdlLXZpZXdlci9pbWFnZS12aWV3ZXIubW9kdWxlJztcbmltcG9ydCB7IFZpZXdlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvdmlld2VyL3ZpZXdlci5tb2R1bGUnO1xuaW1wb3J0IHsgUmFkaW9Nb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL3JhZGlvL3JhZGlvLm1vZHVsZSc7XG5pbXBvcnQgeyBUaW1lbGluZU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvdGltZWxpbmUvdGltZWxpbmUubW9kdWxlJztcbmltcG9ydCB7IENoaXBNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL2NoaXAvY2hpcC5tb2R1bGUnO1xuaW1wb3J0IHsgUGFuZWxNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL3BhbmVsL3BhbmVsLm1vZHVsZSc7XG5pbXBvcnQgeyBMaXN0TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC9saXN0L2xpc3QubW9kdWxlJztcbmltcG9ydCB7IFRyZWVWaWV3TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlZC90cmVldmlldy90cmVldmlldy5tb2R1bGUnO1xuaW1wb3J0IHsgSWd4RXhjZWxFeHBvcnRlclNlcnZpY2UgfSBmcm9tIFwiaWduaXRldWktYW5ndWxhclwiO1xuaW1wb3J0IHsgUGFnZU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvcGFnZXMvcGFnZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIFRhYk1vZHVsZSxcbiAgICBFZGl0b3JNb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgQWNjb3JkaW9uTW9kdWxlLFxuICAgIEZvcm1Nb2R1bGUsXG4gICAgQ2xpY2tPdXRzaWRlTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBDaGVja2JveE1vZHVsZSxcbiAgICBUZXh0Ym94TW9kdWxlLFxuICAgIFRhYmxlTW9kdWxlLFxuICAgIEZpbGVNb2R1bGUsXG4gICAgTWVkaWFWaWV3ZXJNb2R1bGUsXG4gICAgSW1hZ2VWaWV3ZXJNb2R1bGUsXG4gICAgVmlld2VyTW9kdWxlLFxuICAgIFJhZGlvTW9kdWxlLFxuICAgIFRpbWVsaW5lTW9kdWxlLFxuICAgIENoaXBNb2R1bGUsXG4gICAgUGFuZWxNb2R1bGUsXG4gICAgTGlzdE1vZHVsZSxcbiAgICBUcmVlVmlld01vZHVsZSxcbiAgICBQYWdlTW9kdWxlLFxuICAgIEZvcm1hdHRlck1vZHVsZS5mb3JDaGlsZCgpLFxuICAgIFZhbGlkYXRpb25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIENNb2RhbE1vZHVsZS5mb3JSb290KCksXG4gICAgQXV0aE1vZHVsZS5mb3JSb290KCksXG4gICAgRGF0ZXRpbWVQaWNrZXJNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgICBMYXlvdXRNb2R1bGUuZm9yUm9vdCgpXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBdXRoTW9kdWxlLFxuICAgIFRhYk1vZHVsZSxcbiAgICBDTW9kYWxNb2R1bGUsXG4gICAgRGF0ZXRpbWVQaWNrZXJNb2R1bGUsXG4gICAgRWRpdG9yTW9kdWxlLFxuICAgIEZvcm1Nb2R1bGUsXG4gICAgRHJvcGRvd25Nb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBDYXJkTW9kdWxlLFxuICAgIEJ1dHRvbk1vZHVsZSxcbiAgICBBY2NvcmRpb25Nb2R1bGUsXG4gICAgQ2hlY2tib3hNb2R1bGUsXG4gICAgVGV4dGJveE1vZHVsZSxcbiAgICBUYWJsZU1vZHVsZSxcbiAgICBGaWxlTW9kdWxlLFxuICAgIE1lZGlhVmlld2VyTW9kdWxlLFxuICAgIEltYWdlVmlld2VyTW9kdWxlLFxuICAgIFZpZXdlck1vZHVsZSxcbiAgICBSYWRpb01vZHVsZSxcbiAgICBUaW1lbGluZU1vZHVsZSxcbiAgICBDaGlwTW9kdWxlLFxuICAgIFBhbmVsTW9kdWxlLFxuICAgIExpc3RNb2R1bGUsXG4gICAgVHJlZVZpZXdNb2R1bGUsXG4gICAgUGFnZU1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuXG5leHBvcnQgY2xhc3MgRnJhbWV3b3JrNENNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBGcmFtZXdvcms0Q01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBZ2dyZWdhdG9yU2VydmljZSxcbiAgICAgICAgSWd4RXhjZWxFeHBvcnRlclNlcnZpY2UgXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19