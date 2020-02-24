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
const pipes = [
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
export class FormatterModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FormatterModule,
            providers: []
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: FormatterModule,
            providers: pipes
        };
    }
}
FormatterModule.decorators = [
    { type: NgModule, args: [{
                declarations: pipes,
                imports: [
                    CommonModule
                ],
                exports: pipes
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2Zvcm1hdHRlci9mb3JtYXR0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ25DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7O01BRWpDLEtBQUssR0FBRztJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1QsYUFBYTtJQUNiLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULFFBQVE7SUFDUixlQUFlO0lBQ2YsTUFBTTtJQUNOLFFBQVE7Q0FDVDtBQVVELE1BQU0sT0FBTyxlQUFlOzs7O0lBQ25CLE1BQU0sQ0FBQyxPQUFPO1FBQ25CLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUUsRUFDVjtTQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRU0sTUFBTSxDQUFDLFFBQVE7UUFDcEIsT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUM7SUFDSixDQUFDOzs7WUF0QkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxLQUFLO2dCQUNuQixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsS0FBSzthQUNmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ3VycmVuY3lQaXBlIH0gZnJvbSAnLi9jdXJyZW5jeS5waXBlJztcclxuaW1wb3J0IHsgQ0RhdGVQaXBlIH0gZnJvbSAnLi9kYXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBDRGF0ZXRpbWVQaXBlIH0gZnJvbSAnLi9kYXRldGltZS5waXBlJztcclxuaW1wb3J0IHsgVGltZVBpcGUgfSBmcm9tICcuL3RpbWUucGlwZSc7XHJcbmltcG9ydCB7IE51bWJlclBpcGUgfSBmcm9tICcuL251bWJlci5waXBlJztcclxuaW1wb3J0IHsgQmFkZ2VQaXBlIH0gZnJvbSAnLi9iYWRnZS5waXBlJztcclxuaW1wb3J0IHsgU2FmZVBpcGUgfSBmcm9tICcuL3NhZmUucGlwZSc7XHJcbmltcG9ydCB7IENlbWJlZFZpZGVvUGlwZSB9IGZyb20gJy4vb2VtYmVkLXZpZGVvLnBpcGUnO1xyXG5pbXBvcnQgeyBLYlBpcGUgfSBmcm9tICcuL2tiLnBpcGUnO1xyXG5pbXBvcnQgeyBGaWxlUGlwZSB9IGZyb20gJy4vZmlsZS5waXBlJztcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG4gIEN1cnJlbmN5UGlwZSxcclxuICBDRGF0ZVBpcGUsXHJcbiAgQ0RhdGV0aW1lUGlwZSxcclxuICBUaW1lUGlwZSxcclxuICBOdW1iZXJQaXBlLFxyXG4gIEJhZGdlUGlwZSxcclxuICBTYWZlUGlwZSxcclxuICBDZW1iZWRWaWRlb1BpcGUsXHJcbiAgS2JQaXBlLFxyXG4gIEZpbGVQaXBlXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogcGlwZXMsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBwaXBlc1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1hdHRlck1vZHVsZSB7XHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEZvcm1hdHRlck1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEZvcm1hdHRlck1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBwaXBlc1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19