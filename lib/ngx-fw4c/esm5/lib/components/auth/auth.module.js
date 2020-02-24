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
var declarations = [
    AuthComponent
];
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    /**
     * @return {?}
     */
    AuthModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: AuthModule,
            providers: [
                AuthenticationService,
                PermisisonProvider
            ]
        };
    };
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
    return AuthModule;
}());
export { AuthModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2F1dGgvYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0lBRW5ELFlBQVksR0FBRztJQUNuQixhQUFhO0NBQ2Q7QUFFRDtJQUFBO0lBeUJBLENBQUM7Ozs7SUFUZSxrQkFBTzs7O0lBQXJCO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDVCxxQkFBcUI7Z0JBQ3JCLGtCQUFrQjthQUNuQjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkF4QkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxZQUFZO29CQUMxQixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsVUFBVTtxQkFDWDtvQkFDRCxlQUFlLEVBQUUsWUFBWTtvQkFDN0IsT0FBTyxFQUFFLFlBQVk7aUJBQ3RCOztJQVlELGlCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FWWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tICcuL2F1dGguY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2FkZXJNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvbG9hZGVyL2xvYWRlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBUZXh0Ym94TW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3RleHRib3gvdGV4dGJveC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQZXJtaXNpc29uUHJvdmlkZXIgfSBmcm9tICcuL3Blcm1pc3Npb24ucHJvdmlkZXInO1xyXG5pbXBvcnQgeyBQYWdlTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3BhZ2VzL3BhZ2UubW9kdWxlJztcclxuXHJcbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcclxuICBBdXRoQ29tcG9uZW50XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgTG9hZGVyTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIEJ1dHRvbk1vZHVsZSxcclxuICAgIFRleHRib3hNb2R1bGUsXHJcbiAgICBQYWdlTW9kdWxlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IGRlY2xhcmF0aW9ucyxcclxuICBleHBvcnRzOiBkZWNsYXJhdGlvbnNcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoTW9kdWxlIHtcclxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQXV0aE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQXV0aGVudGljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIFBlcm1pc2lzb25Qcm92aWRlclxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufSJdfQ==