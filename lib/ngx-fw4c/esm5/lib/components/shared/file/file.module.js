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
var FileModule = /** @class */ (function () {
    function FileModule() {
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
    return FileModule;
}());
export { FileModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9maWxlL2ZpbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFEO0lBQUE7SUFlMEIsQ0FBQzs7Z0JBZjFCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxhQUFhO3FCQUNkO29CQUNELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUM1QixlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDcEMsU0FBUyxFQUFFO3dCQUNULFdBQVc7d0JBQ1gsWUFBWTtxQkFDYjtpQkFDRjs7SUFFeUIsaUJBQUM7Q0FBQSxBQWYzQixJQWUyQjtTQUFkLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGaWxlU2VydmljZSB9IGZyb20gJy4vZmlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRmlsZVByb3ZpZGVyIH0gZnJvbSAnLi9maWxlLnByb3ZpZGVyJztcclxuaW1wb3J0IHsgVXBsb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL2ZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENyb3BwZXJNb2R1bGUgfSBmcm9tICcuLi9jcm9wcGVyL2Nyb3BwZXIubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbVXBsb2FkZXJDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgQ3JvcHBlck1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1VwbG9hZGVyQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtVcGxvYWRlckNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBGaWxlU2VydmljZSxcclxuICAgIEZpbGVQcm92aWRlclxyXG4gIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlTW9kdWxlIHsgfVxyXG4iXX0=