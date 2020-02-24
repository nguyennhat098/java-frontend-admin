/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/viewer/viewer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ValidationModule } from '../validation/validation.module';
import { ViewerComponent } from './viewer.component';
import { ImageViewerModule } from '../image-viewer/image-viewer.module';
import { FileModule } from '../file/file.module';
import { GalleryComponent } from './gallery/gallery.component';
import { TableModule } from '../table/table.module';
import { CardModule } from '../card/card.module';
import { FormatterModule } from '../formatter/formatter.module';
var ViewerModule = /** @class */ (function () {
    function ViewerModule() {
    }
    ViewerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        GalleryComponent,
                        ViewerComponent
                    ],
                    imports: [
                        CommonModule,
                        ImageCropperModule,
                        ImageViewerModule,
                        FileModule,
                        ValidationModule,
                        NgxDnDModule,
                        TableModule,
                        CardModule,
                        FormatterModule
                    ],
                    entryComponents: [
                        GalleryComponent,
                        ViewerComponent
                    ],
                    exports: [
                        GalleryComponent,
                        ViewerComponent
                    ]
                },] }
    ];
    return ViewerModule;
}());
export { ViewerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3ZpZXdlci92aWV3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFaEU7SUFBQTtJQXlCNEIsQ0FBQzs7Z0JBekI1QixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGdCQUFnQjt3QkFDaEIsZUFBZTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLFVBQVU7d0JBQ1YsZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsVUFBVTt3QkFDVixlQUFlO3FCQUNoQjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixlQUFlO3FCQUFDO2lCQUNuQjs7SUFFMkIsbUJBQUM7Q0FBQSxBQXpCN0IsSUF5QjZCO1NBQWhCLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ3hEbkRNb2R1bGUgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRuZCc7XHJcbmltcG9ydCB7IEltYWdlQ3JvcHBlck1vZHVsZSB9IGZyb20gJ25neC1pbWFnZS1jcm9wcGVyJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvbk1vZHVsZSB9IGZyb20gJy4uL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbWFnZVZpZXdlck1vZHVsZSB9IGZyb20gJy4uL2ltYWdlLXZpZXdlci9pbWFnZS12aWV3ZXIubW9kdWxlJztcclxuaW1wb3J0IHsgRmlsZU1vZHVsZSB9IGZyb20gJy4uL2ZpbGUvZmlsZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFibGVNb2R1bGUgfSBmcm9tICcuLi90YWJsZS90YWJsZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAnLi4vY2FyZC9jYXJkLm1vZHVsZSc7XHJcbmltcG9ydCB7IEZvcm1hdHRlck1vZHVsZSB9IGZyb20gJy4uL2Zvcm1hdHRlci9mb3JtYXR0ZXIubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBHYWxsZXJ5Q29tcG9uZW50LFxyXG4gICAgVmlld2VyQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBJbWFnZUNyb3BwZXJNb2R1bGUsXHJcbiAgICBJbWFnZVZpZXdlck1vZHVsZSxcclxuICAgIEZpbGVNb2R1bGUsXHJcbiAgICBWYWxpZGF0aW9uTW9kdWxlLFxyXG4gICAgTmd4RG5ETW9kdWxlLFxyXG4gICAgVGFibGVNb2R1bGUsXHJcbiAgICBDYXJkTW9kdWxlLFxyXG4gICAgRm9ybWF0dGVyTW9kdWxlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIEdhbGxlcnlDb21wb25lbnQsXHJcbiAgICBWaWV3ZXJDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEdhbGxlcnlDb21wb25lbnQsXHJcbiAgICBWaWV3ZXJDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVmlld2VyTW9kdWxlIHsgfVxyXG4iXX0=