/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/auth/auth.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { AuthenticationService } from './auth.service';
import { LoaderModule } from '../shared/loader/loader.module';
import { ButtonModule } from '../shared/button/button.module';
import { TextboxModule } from '../shared/textbox/textbox.module';
import { PermisisonProvider } from './permission.provider';
import { PageModule } from '../shared/pages/page.module';
/** @type {?} */
const declarations = [
    AuthComponent
];
export class AuthModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: AuthModule,
            providers: [
                AuthenticationService,
                PermisisonProvider
            ]
        };
    }
}
AuthModule.decorators = [
    { type: NgModule, args: [{
                declarations: declarations,
                imports: [
                    CommonModule,
                    FormsModule,
                    LoaderModule,
                    ReactiveFormsModule,
                    ButtonModule,
                    TextboxModule,
                    PageModule
                ],
                entryComponents: declarations,
                exports: declarations
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2F1dGgvYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O01BRW5ELFlBQVksR0FBRztJQUNuQixhQUFhO0NBQ2Q7QUFpQkQsTUFBTSxPQUFPLFVBQVU7Ozs7SUFDZCxNQUFNLENBQUMsT0FBTztRQUNuQixPQUFPO1lBQ0wsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFO2dCQUNULHFCQUFxQjtnQkFDckIsa0JBQWtCO2FBQ25CO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXhCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLFlBQVk7Z0JBQzFCLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixVQUFVO2lCQUNYO2dCQUNELGVBQWUsRUFBRSxZQUFZO2dCQUM3QixPQUFPLEVBQUUsWUFBWTthQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9hZGVyTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2xvYWRlci9sb2FkZXIubW9kdWxlJztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2J1dHRvbi9idXR0b24ubW9kdWxlJztcclxuaW1wb3J0IHsgVGV4dGJveE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC90ZXh0Ym94L3RleHRib3gubW9kdWxlJztcclxuaW1wb3J0IHsgUGVybWlzaXNvblByb3ZpZGVyIH0gZnJvbSAnLi9wZXJtaXNzaW9uLnByb3ZpZGVyJztcclxuaW1wb3J0IHsgUGFnZU1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9wYWdlcy9wYWdlLm1vZHVsZSc7XHJcblxyXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXHJcbiAgQXV0aENvbXBvbmVudFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucyxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIExvYWRlck1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBCdXR0b25Nb2R1bGUsXHJcbiAgICBUZXh0Ym94TW9kdWxlLFxyXG4gICAgUGFnZU1vZHVsZVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBkZWNsYXJhdGlvbnMsXHJcbiAgZXhwb3J0czogZGVjbGFyYXRpb25zXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aE1vZHVsZSB7XHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEF1dGhNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uU2VydmljZSxcclxuICAgICAgICBQZXJtaXNpc29uUHJvdmlkZXJcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn0iXX0=