/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/layout/layout.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClickOutsideModule } from 'ng-click-outside';
import { AdminLayoutComponent } from './backsite-layout.component';
import { DefaultBreadcrumbsComponent } from './breadcrumbs.component';
import { DefaultCustomizerComponent } from './customizer.component';
import { DefaultFooterComponent } from './footer.component';
import { DefaultHeaderComponent } from './header.component';
import { DefaultNavBarComponent } from './navbar.component';
import { DefaultSidebarComponent } from './sidebar.component';
import { DefaultToolbarComponent } from './toolbar.component';
import { FloatingToolbarComponent } from './floating-toolbar.component';
import { DefaultLayoutService } from './layout.service';
import { SpinnerModule } from '../shared/spinner/spinner.module';
import { CardModule } from '../shared/card/card.module';
import { FormatterModule } from '../shared/formatter/formatter.module';
import { AccordionModule } from '../shared/accordion/accordion.module';
import { ButtonModule } from '../shared/button/button.module';
import { AccordionDirective } from '../shared/accordion/accordion.directive';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';
import { LoaderModule } from '../shared/loader/loader.module';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { RouterHandler } from '../auth/router.handler';
import { CModalModule } from '../shared/modals/modal.module';
export class LayoutModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: LayoutModule,
            providers: [
                DefaultLayoutService,
                AccordionDirective,
                {
                    provide: ErrorHandler,
                    useClass: RouterHandler
                }
            ]
        };
    }
}
LayoutModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AdminLayoutComponent,
                    DefaultBreadcrumbsComponent,
                    DefaultCustomizerComponent,
                    DefaultFooterComponent,
                    DefaultHeaderComponent,
                    DefaultNavBarComponent,
                    DefaultSidebarComponent,
                    DefaultToolbarComponent,
                    FloatingToolbarComponent,
                    RecommendationComponent
                ],
                imports: [
                    FormsModule,
                    CommonModule,
                    RouterModule,
                    SpinnerModule,
                    CardModule,
                    ClickOutsideModule,
                    FormatterModule,
                    AccordionModule,
                    ButtonModule,
                    AuthModule,
                    LoaderModule,
                    CModalModule
                ],
                exports: [
                    AdminLayoutComponent,
                    DefaultBreadcrumbsComponent,
                    DefaultCustomizerComponent,
                    DefaultFooterComponent,
                    DefaultHeaderComponent,
                    DefaultNavBarComponent,
                    DefaultSidebarComponent,
                    DefaultToolbarComponent,
                    FloatingToolbarComponent,
                    RecommendationComponent
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUEyQzdELE1BQU0sT0FBTyxZQUFZOzs7O0lBQ2hCLE1BQU0sQ0FBQyxPQUFPO1FBQ25CLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1Qsb0JBQW9CO2dCQUNwQixrQkFBa0I7Z0JBQ2xCO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUUsYUFBYTtpQkFDeEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUF0REYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixvQkFBb0I7b0JBQ3BCLDJCQUEyQjtvQkFDM0IsMEJBQTBCO29CQUMxQixzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0Qix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtvQkFDdkIsd0JBQXdCO29CQUN4Qix1QkFBdUI7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxXQUFXO29CQUNYLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixhQUFhO29CQUNiLFVBQVU7b0JBQ1Ysa0JBQWtCO29CQUNsQixlQUFlO29CQUNmLGVBQWU7b0JBQ2YsWUFBWTtvQkFDWixVQUFVO29CQUNWLFlBQVk7b0JBQ1osWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asb0JBQW9CO29CQUNwQiwyQkFBMkI7b0JBQzNCLDBCQUEwQjtvQkFDMUIsc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFDdEIsdUJBQXVCO29CQUN2Qix1QkFBdUI7b0JBQ3ZCLHdCQUF3QjtvQkFDeEIsdUJBQXVCO2lCQUN4QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEVycm9ySGFuZGxlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENsaWNrT3V0c2lkZU1vZHVsZSB9IGZyb20gJ25nLWNsaWNrLW91dHNpZGUnO1xyXG5pbXBvcnQgeyBBZG1pbkxheW91dENvbXBvbmVudCB9IGZyb20gJy4vYmFja3NpdGUtbGF5b3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlZmF1bHRCcmVhZGNydW1ic0NvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVmYXVsdEN1c3RvbWl6ZXJDb21wb25lbnQgfSBmcm9tICcuL2N1c3RvbWl6ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVmYXVsdEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZm9vdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlZmF1bHRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZWZhdWx0TmF2QmFyQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVmYXVsdFNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVmYXVsdFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmxvYXRpbmdUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9mbG9hdGluZy10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlZmF1bHRMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9sYXlvdXQuc2VydmljZSc7XHJcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvY2FyZC9jYXJkLm1vZHVsZSc7XHJcbmltcG9ydCB7IEZvcm1hdHRlck1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9mb3JtYXR0ZXIvZm9ybWF0dGVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFjY29yZGlvbk1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9hY2NvcmRpb24vYWNjb3JkaW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9idXR0b24vYnV0dG9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFjY29yZGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4uL3NoYXJlZC9hY2NvcmRpb24vYWNjb3JkaW9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi4vYXV0aC9hdXRoLm1vZHVsZSc7XHJcbmltcG9ydCB7IExvYWRlck1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9sb2FkZXIvbG9hZGVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IFJlY29tbWVuZGF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9yZWNvbW1lbmRhdGlvbi9yZWNvbW1lbmRhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXJIYW5kbGVyIH0gZnJvbSAnLi4vYXV0aC9yb3V0ZXIuaGFuZGxlcic7XHJcbmltcG9ydCB7IENNb2RhbE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9tb2RhbHMvbW9kYWwubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBZG1pbkxheW91dENvbXBvbmVudCxcclxuICAgIERlZmF1bHRCcmVhZGNydW1ic0NvbXBvbmVudCxcclxuICAgIERlZmF1bHRDdXN0b21pemVyQ29tcG9uZW50LFxyXG4gICAgRGVmYXVsdEZvb3RlckNvbXBvbmVudCxcclxuICAgIERlZmF1bHRIZWFkZXJDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0TmF2QmFyQ29tcG9uZW50LFxyXG4gICAgRGVmYXVsdFNpZGViYXJDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0VG9vbGJhckNvbXBvbmVudCxcclxuICAgIEZsb2F0aW5nVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFJlY29tbWVuZGF0aW9uQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIFNwaW5uZXJNb2R1bGUsXHJcbiAgICBDYXJkTW9kdWxlLFxyXG4gICAgQ2xpY2tPdXRzaWRlTW9kdWxlLFxyXG4gICAgRm9ybWF0dGVyTW9kdWxlLFxyXG4gICAgQWNjb3JkaW9uTW9kdWxlLFxyXG4gICAgQnV0dG9uTW9kdWxlLFxyXG4gICAgQXV0aE1vZHVsZSxcclxuICAgIExvYWRlck1vZHVsZSxcclxuICAgIENNb2RhbE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQWRtaW5MYXlvdXRDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0QnJlYWRjcnVtYnNDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0Q3VzdG9taXplckNvbXBvbmVudCxcclxuICAgIERlZmF1bHRGb290ZXJDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0SGVhZGVyQ29tcG9uZW50LFxyXG4gICAgRGVmYXVsdE5hdkJhckNvbXBvbmVudCxcclxuICAgIERlZmF1bHRTaWRlYmFyQ29tcG9uZW50LFxyXG4gICAgRGVmYXVsdFRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBGbG9hdGluZ1Rvb2xiYXJDb21wb25lbnQsXHJcbiAgICBSZWNvbW1lbmRhdGlvbkNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHtcclxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTGF5b3V0TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEZWZhdWx0TGF5b3V0U2VydmljZSxcclxuICAgICAgICBBY2NvcmRpb25EaXJlY3RpdmUsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogRXJyb3JIYW5kbGVyLFxyXG4gICAgICAgICAgdXNlQ2xhc3M6IFJvdXRlckhhbmRsZXJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==