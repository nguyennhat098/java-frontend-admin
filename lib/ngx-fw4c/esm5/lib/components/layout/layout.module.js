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
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    /**
     * @return {?}
     */
    LayoutModule.forRoot = /**
     * @return {?}
     */
    function () {
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
    };
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
    return LayoutModule;
}());
export { LayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFN0Q7SUFBQTtJQXVEQSxDQUFDOzs7O0lBYmUsb0JBQU87OztJQUFyQjtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1Qsb0JBQW9CO2dCQUNwQixrQkFBa0I7Z0JBQ2xCO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUUsYUFBYTtpQkFDeEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkF0REYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixvQkFBb0I7d0JBQ3BCLDJCQUEyQjt3QkFDM0IsMEJBQTBCO3dCQUMxQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLHVCQUF1Qjt3QkFDdkIsd0JBQXdCO3dCQUN4Qix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixhQUFhO3dCQUNiLFVBQVU7d0JBQ1Ysa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixVQUFVO3dCQUNWLFlBQVk7d0JBQ1osWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asb0JBQW9CO3dCQUNwQiwyQkFBMkI7d0JBQzNCLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0QixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsdUJBQXVCO3dCQUN2Qix1QkFBdUI7d0JBQ3ZCLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3FCQUN4QjtpQkFDRjs7SUFnQkQsbUJBQUM7Q0FBQSxBQXZERCxJQXVEQztTQWRZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgRXJyb3JIYW5kbGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2xpY2tPdXRzaWRlTW9kdWxlIH0gZnJvbSAnbmctY2xpY2stb3V0c2lkZSc7XHJcbmltcG9ydCB7IEFkbWluTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9iYWNrc2l0ZS1sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVmYXVsdEJyZWFkY3J1bWJzQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1icy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZWZhdWx0Q3VzdG9taXplckNvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9taXplci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZWZhdWx0Rm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mb290ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVmYXVsdEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlZmF1bHROYXZCYXJDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZWZhdWx0U2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZWZhdWx0VG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGbG9hdGluZ1Rvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL2Zsb2F0aW5nLXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVmYXVsdExheW91dFNlcnZpY2UgfSBmcm9tICcuL2xheW91dC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcclxuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9jYXJkL2NhcmQubW9kdWxlJztcclxuaW1wb3J0IHsgRm9ybWF0dGVyTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2Zvcm1hdHRlci9mb3JtYXR0ZXIubW9kdWxlJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2FjY29yZGlvbi9hY2NvcmRpb24ubW9kdWxlJztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2J1dHRvbi9idXR0b24ubW9kdWxlJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uRGlyZWN0aXZlIH0gZnJvbSAnLi4vc2hhcmVkL2FjY29yZGlvbi9hY2NvcmRpb24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tICcuLi9hdXRoL2F1dGgubW9kdWxlJztcclxuaW1wb3J0IHsgTG9hZGVyTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2xvYWRlci9sb2FkZXIubW9kdWxlJztcclxuaW1wb3J0IHsgUmVjb21tZW5kYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3JlY29tbWVuZGF0aW9uL3JlY29tbWVuZGF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvdXRlckhhbmRsZXIgfSBmcm9tICcuLi9hdXRoL3JvdXRlci5oYW5kbGVyJztcclxuaW1wb3J0IHsgQ01vZGFsTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL21vZGFscy9tb2RhbC5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFkbWluTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgRGVmYXVsdEJyZWFkY3J1bWJzQ29tcG9uZW50LFxyXG4gICAgRGVmYXVsdEN1c3RvbWl6ZXJDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0Rm9vdGVyQ29tcG9uZW50LFxyXG4gICAgRGVmYXVsdEhlYWRlckNvbXBvbmVudCxcclxuICAgIERlZmF1bHROYXZCYXJDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0U2lkZWJhckNvbXBvbmVudCxcclxuICAgIERlZmF1bHRUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgRmxvYXRpbmdUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgUmVjb21tZW5kYXRpb25Db21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgU3Bpbm5lck1vZHVsZSxcclxuICAgIENhcmRNb2R1bGUsXHJcbiAgICBDbGlja091dHNpZGVNb2R1bGUsXHJcbiAgICBGb3JtYXR0ZXJNb2R1bGUsXHJcbiAgICBBY2NvcmRpb25Nb2R1bGUsXHJcbiAgICBCdXR0b25Nb2R1bGUsXHJcbiAgICBBdXRoTW9kdWxlLFxyXG4gICAgTG9hZGVyTW9kdWxlLFxyXG4gICAgQ01vZGFsTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBBZG1pbkxheW91dENvbXBvbmVudCxcclxuICAgIERlZmF1bHRCcmVhZGNydW1ic0NvbXBvbmVudCxcclxuICAgIERlZmF1bHRDdXN0b21pemVyQ29tcG9uZW50LFxyXG4gICAgRGVmYXVsdEZvb3RlckNvbXBvbmVudCxcclxuICAgIERlZmF1bHRIZWFkZXJDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0TmF2QmFyQ29tcG9uZW50LFxyXG4gICAgRGVmYXVsdFNpZGViYXJDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0VG9vbGJhckNvbXBvbmVudCxcclxuICAgIEZsb2F0aW5nVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFJlY29tbWVuZGF0aW9uQ29tcG9uZW50XHJcbiAgXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBMYXlvdXRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIERlZmF1bHRMYXlvdXRTZXJ2aWNlLFxyXG4gICAgICAgIEFjY29yZGlvbkRpcmVjdGl2ZSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBFcnJvckhhbmRsZXIsXHJcbiAgICAgICAgICB1c2VDbGFzczogUm91dGVySGFuZGxlclxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19