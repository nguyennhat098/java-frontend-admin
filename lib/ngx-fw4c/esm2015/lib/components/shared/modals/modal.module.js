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
const declarations = [
    NotificationComponent,
    ConfirmComponent,
    TemplateComponent,
    LoadingComponent
];
export class CModalModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvbW9kYWxzL21vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7TUFFakQsWUFBWSxHQUFHO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtDQUNqQjtBQWdCRCxNQUFNLE9BQU8sWUFBWTs7OztJQUNoQixNQUFNLENBQUMsT0FBTztRQUNuQixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULHNCQUFzQjtnQkFDdEIsa0JBQWtCO2dCQUNsQixjQUFjO2dCQUNkLFlBQVk7Z0JBQ1osd0JBQXdCO2FBQ3pCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQTFCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLFlBQVk7Z0JBQzFCLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixXQUFXLENBQUMsT0FBTyxFQUFFO29CQUNyQix1QkFBdUIsQ0FBQyxPQUFPLEVBQUU7aUJBQ2xDO2dCQUNELGVBQWUsRUFBRSxZQUFZO2dCQUM3QixPQUFPLEVBQUUsWUFBWTtnQkFDckIsU0FBUyxFQUFFLEVBQUU7YUFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uZmlybS9jb25maXJtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlL3RlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRlck1vZHVsZSB9IGZyb20gJy4uL2xvYWRlci9sb2FkZXIubW9kdWxlJztcclxuaW1wb3J0IHsgTW9kYWxNb2R1bGUsIENvbXBvbmVudExvYWRlckZhY3RvcnksIFBvc2l0aW9uaW5nU2VydmljZSwgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9tb2RhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmc0TG9hZGluZ1NwaW5uZXJNb2R1bGUsIE5nNExvYWRpbmdTcGlubmVyU2VydmljZSB9IGZyb20gJ25nNC1sb2FkaW5nLXNwaW5uZXInO1xyXG5pbXBvcnQgeyBMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRpbmcnO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLm1vZHVsZSc7XHJcblxyXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXHJcbiAgTm90aWZpY2F0aW9uQ29tcG9uZW50LFxyXG4gIENvbmZpcm1Db21wb25lbnQsXHJcbiAgVGVtcGxhdGVDb21wb25lbnQsXHJcbiAgTG9hZGluZ0NvbXBvbmVudFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucyxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBMb2FkZXJNb2R1bGUsXHJcbiAgICBCdXR0b25Nb2R1bGUsXHJcbiAgICBNb2RhbE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBOZzRMb2FkaW5nU3Bpbm5lck1vZHVsZS5mb3JSb290KClcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogZGVjbGFyYXRpb25zLFxyXG4gIGV4cG9ydHM6IGRlY2xhcmF0aW9ucyxcclxuICBwcm92aWRlcnM6IFtdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ01vZGFsTW9kdWxlIHtcclxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQ01vZGFsTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBDb21wb25lbnRMb2FkZXJGYWN0b3J5LCBcclxuICAgICAgICBQb3NpdGlvbmluZ1NlcnZpY2UsXHJcbiAgICAgICAgQnNNb2RhbFNlcnZpY2UsXHJcbiAgICAgICAgTW9kYWxTZXJ2aWNlLFxyXG4gICAgICAgIE5nNExvYWRpbmdTcGlubmVyU2VydmljZSBcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn0iXX0=