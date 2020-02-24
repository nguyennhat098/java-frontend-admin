/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/formatter/formatter.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './currency.pipe';
import { CDatePipe } from './date.pipe';
import { CDatetimePipe } from './datetime.pipe';
import { TimePipe } from './time.pipe';
import { NumberPipe } from './number.pipe';
import { BadgePipe } from './badge.pipe';
import { SafePipe } from './safe.pipe';
import { CembedVideoPipe } from './oembed-video.pipe';
import { KbPipe } from './kb.pipe';
import { FilePipe } from './file.pipe';
/** @type {?} */
var pipes = [
    CurrencyPipe,
    CDatePipe,
    CDatetimePipe,
    TimePipe,
    NumberPipe,
    BadgePipe,
    SafePipe,
    CembedVideoPipe,
    KbPipe,
    FilePipe
];
var FormatterModule = /** @class */ (function () {
    function FormatterModule() {
    }
    /**
     * @return {?}
     */
    FormatterModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FormatterModule,
            providers: []
        };
    };
    /**
     * @return {?}
     */
    FormatterModule.forChild = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FormatterModule,
            providers: pipes
        };
    };
    FormatterModule.decorators = [
        { type: NgModule, args: [{
                    declarations: pipes,
                    imports: [
                        CommonModule
                    ],
                    exports: pipes
                },] }
    ];
    return FormatterModule;
}());
export { FormatterModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2Zvcm1hdHRlci9mb3JtYXR0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ25DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBRWpDLEtBQUssR0FBRztJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1QsYUFBYTtJQUNiLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULFFBQVE7SUFDUixlQUFlO0lBQ2YsTUFBTTtJQUNOLFFBQVE7Q0FDVDtBQUVEO0lBQUE7SUF1QkEsQ0FBQzs7OztJQWRlLHVCQUFPOzs7SUFBckI7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFLEVBQ1Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVhLHdCQUFROzs7SUFBdEI7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQztJQUNKLENBQUM7O2dCQXRCRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLEtBQUs7b0JBQ25CLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRSxLQUFLO2lCQUNmOztJQWlCRCxzQkFBQztDQUFBLEFBdkJELElBdUJDO1NBZlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEN1cnJlbmN5UGlwZSB9IGZyb20gJy4vY3VycmVuY3kucGlwZSc7XHJcbmltcG9ydCB7IENEYXRlUGlwZSB9IGZyb20gJy4vZGF0ZS5waXBlJztcclxuaW1wb3J0IHsgQ0RhdGV0aW1lUGlwZSB9IGZyb20gJy4vZGF0ZXRpbWUucGlwZSc7XHJcbmltcG9ydCB7IFRpbWVQaXBlIH0gZnJvbSAnLi90aW1lLnBpcGUnO1xyXG5pbXBvcnQgeyBOdW1iZXJQaXBlIH0gZnJvbSAnLi9udW1iZXIucGlwZSc7XHJcbmltcG9ydCB7IEJhZGdlUGlwZSB9IGZyb20gJy4vYmFkZ2UucGlwZSc7XHJcbmltcG9ydCB7IFNhZmVQaXBlIH0gZnJvbSAnLi9zYWZlLnBpcGUnO1xyXG5pbXBvcnQgeyBDZW1iZWRWaWRlb1BpcGUgfSBmcm9tICcuL29lbWJlZC12aWRlby5waXBlJztcclxuaW1wb3J0IHsgS2JQaXBlIH0gZnJvbSAnLi9rYi5waXBlJztcclxuaW1wb3J0IHsgRmlsZVBpcGUgfSBmcm9tICcuL2ZpbGUucGlwZSc7XHJcblxyXG5jb25zdCBwaXBlcyA9IFtcclxuICBDdXJyZW5jeVBpcGUsXHJcbiAgQ0RhdGVQaXBlLFxyXG4gIENEYXRldGltZVBpcGUsXHJcbiAgVGltZVBpcGUsXHJcbiAgTnVtYmVyUGlwZSxcclxuICBCYWRnZVBpcGUsXHJcbiAgU2FmZVBpcGUsXHJcbiAgQ2VtYmVkVmlkZW9QaXBlLFxyXG4gIEtiUGlwZSxcclxuICBGaWxlUGlwZVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IHBpcGVzLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogcGlwZXNcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtYXR0ZXJNb2R1bGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBGb3JtYXR0ZXJNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBGb3JtYXR0ZXJNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogcGlwZXNcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==