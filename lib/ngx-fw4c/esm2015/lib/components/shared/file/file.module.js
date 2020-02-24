/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/file/file.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileService } from './file.service';
import { FileProvider } from './file.provider';
import { UploaderComponent } from './file.component';
import { FormsModule } from '@angular/forms';
import { CropperModule } from '../cropper/cropper.module';
export class FileModule {
}
FileModule.decorators = [
    { type: NgModule, args: [{
                declarations: [UploaderComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    CropperModule
                ],
                exports: [UploaderComponent],
                entryComponents: [UploaderComponent],
                providers: [
                    FileService,
                    FileProvider
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9maWxlL2ZpbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBaUIxRCxNQUFNLE9BQU8sVUFBVTs7O1lBZnRCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxhQUFhO2lCQUNkO2dCQUNELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUM1QixlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDcEMsU0FBUyxFQUFFO29CQUNULFdBQVc7b0JBQ1gsWUFBWTtpQkFDYjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRmlsZVNlcnZpY2UgfSBmcm9tICcuL2ZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEZpbGVQcm92aWRlciB9IGZyb20gJy4vZmlsZS5wcm92aWRlcic7XHJcbmltcG9ydCB7IFVwbG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDcm9wcGVyTW9kdWxlIH0gZnJvbSAnLi4vY3JvcHBlci9jcm9wcGVyLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1VwbG9hZGVyQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIENyb3BwZXJNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtVcGxvYWRlckNvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbVXBsb2FkZXJDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgRmlsZVNlcnZpY2UsXHJcbiAgICBGaWxlUHJvdmlkZXJcclxuICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZU1vZHVsZSB7IH1cclxuIl19