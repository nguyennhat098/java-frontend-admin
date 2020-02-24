/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/modals/modal.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NotificationComponent } from './components/notification/notification.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { TemplateComponent } from './components/template/template.component';
import { LoaderModule } from '../loader/loader.module';
import { ModalModule, ComponentLoaderFactory, PositioningService, BsModalService } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { ModalService } from './modal.service';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { LoadingComponent } from './components/loading';
import { ButtonModule } from '../button/button.module';
/** @type {?} */
var declarations = [
    NotificationComponent,
    ConfirmComponent,
    TemplateComponent,
    LoadingComponent
];
var CModalModule = /** @class */ (function () {
    function CModalModule() {
    }
    /**
     * @return {?}
     */
    CModalModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: CModalModule,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsModalService,
                ModalService,
                Ng4LoadingSpinnerService
            ]
        };
    };
    CModalModule.decorators = [
        { type: NgModule, args: [{
                    declarations: declarations,
                    imports: [
                        CommonModule,
                        LoaderModule,
                        ButtonModule,
                        ModalModule.forRoot(),
                        Ng4LoadingSpinnerModule.forRoot()
                    ],
                    entryComponents: declarations,
                    exports: declarations,
                    providers: []
                },] }
    ];
    return CModalModule;
}());
export { CModalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvbW9kYWxzL21vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFFakQsWUFBWSxHQUFHO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtDQUNqQjtBQUVEO0lBQUE7SUEyQkEsQ0FBQzs7OztJQVplLG9CQUFPOzs7SUFBckI7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULHNCQUFzQjtnQkFDdEIsa0JBQWtCO2dCQUNsQixjQUFjO2dCQUNkLFlBQVk7Z0JBQ1osd0JBQXdCO2FBQ3pCO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQTFCRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLFlBQVk7b0JBQzFCLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixXQUFXLENBQUMsT0FBTyxFQUFFO3dCQUNyQix1QkFBdUIsQ0FBQyxPQUFPLEVBQUU7cUJBQ2xDO29CQUNELGVBQWUsRUFBRSxZQUFZO29CQUM3QixPQUFPLEVBQUUsWUFBWTtvQkFDckIsU0FBUyxFQUFFLEVBQUU7aUJBQ2Q7O0lBZUQsbUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQWJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2FkZXJNb2R1bGUgfSBmcm9tICcuLi9sb2FkZXIvbG9hZGVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1vZGFsTW9kdWxlLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5LCBQb3NpdGlvbmluZ1NlcnZpY2UsIEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4vbW9kYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IE5nNExvYWRpbmdTcGlubmVyTW9kdWxlLCBOZzRMb2FkaW5nU3Bpbm5lclNlcnZpY2UgfSBmcm9tICduZzQtbG9hZGluZy1zcGlubmVyJztcclxuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2FkaW5nJztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xyXG5cclxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xyXG4gIE5vdGlmaWNhdGlvbkNvbXBvbmVudCxcclxuICBDb25maXJtQ29tcG9uZW50LFxyXG4gIFRlbXBsYXRlQ29tcG9uZW50LFxyXG4gIExvYWRpbmdDb21wb25lbnRcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTG9hZGVyTW9kdWxlLFxyXG4gICAgQnV0dG9uTW9kdWxlLFxyXG4gICAgTW9kYWxNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgTmc0TG9hZGluZ1NwaW5uZXJNb2R1bGUuZm9yUm9vdCgpXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IGRlY2xhcmF0aW9ucyxcclxuICBleHBvcnRzOiBkZWNsYXJhdGlvbnMsXHJcbiAgcHJvdmlkZXJzOiBbXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENNb2RhbE1vZHVsZSB7XHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IENNb2RhbE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSwgXHJcbiAgICAgICAgUG9zaXRpb25pbmdTZXJ2aWNlLFxyXG4gICAgICAgIEJzTW9kYWxTZXJ2aWNlLFxyXG4gICAgICAgIE1vZGFsU2VydmljZSxcclxuICAgICAgICBOZzRMb2FkaW5nU3Bpbm5lclNlcnZpY2UgXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59Il19