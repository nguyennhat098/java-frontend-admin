/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/media-viewer/media-viewer/media-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FullMediaComponent } from '../full-media/full-media.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaItem } from '../../models/base.model';
import { ModalService } from '../../modals/modal.service';
var MediaViewerComponent = /** @class */ (function () {
    function MediaViewerComponent(modalService, sanitizer) {
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.modelChange = new EventEmitter();
        this.removed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MediaViewerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isExternal = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.test(this.model.fullSrc);
        if (isExternal) {
            /** @type {?} */
            var match = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.exec(this.model.fullSrc);
            /** @type {?} */
            var videoId = match[1];
            this.thumbnailHtml = this.sanitizer.bypassSecurityTrustHtml("<img style=\"height:90px\" src=\"https://img.youtube.com/vi/" + videoId + "/0.jpg\"></img>");
        }
        else {
            this.thumbnailHtml = this.sanitizer.bypassSecurityTrustHtml("<img style=\"height:90px\" src=\"" + this.model.src + "\"></img>");
        }
    };
    /**
     * @return {?}
     */
    MediaViewerComponent.prototype.viewMedia = /**
     * @return {?}
     */
    function () {
        this.modalService.showTemplateDialog({
            template: FullMediaComponent,
            title: 'Xem chi tiết',
            customSize: 'modal-lg',
            data: {
                model: this.model
            }
        });
    };
    /**
     * @return {?}
     */
    MediaViewerComponent.prototype.remove = /**
     * @return {?}
     */
    function () {
        this.removed.emit(this.model);
        this.modelChange.emit(null);
    };
    MediaViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-media',
                    template: "<div class=\"media-viewer-item\">\r\n  <label *ngIf=\"title\">{{title}}</label>\r\n  <div [ngClass]=\"{'selected-file': selected}\">\r\n    <i class=\"fa fa-tick-mark selected-icon\"></i>\r\n    <div class=\"box--video--item\">\r\n      <a class=\"video--item\" href=\"javascript:;\" (click)=\"viewMedia()\">\r\n        <div [innerHTML]=\"thumbnailHtml\"></div>\r\n      </a>\r\n      <a class=\"remove--video\" *ngIf=\"model\" href=\"javascript:;\" title=\"X\u00F3a\" (click)=\"remove()\"><i class=\"fa fa-times\"\r\n          aria-hidden=\"true\"></i></a>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: ['./media-viewer.component.scss']
                }] }
    ];
    /** @nocollapse */
    MediaViewerComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: DomSanitizer }
    ]; };
    MediaViewerComponent.propDecorators = {
        title: [{ type: Input }],
        model: [{ type: Input }],
        modelChange: [{ type: Output }],
        removed: [{ type: Output }]
    };
    return MediaViewerComponent;
}());
export { MediaViewerComponent };
if (false) {
    /** @type {?} */
    MediaViewerComponent.prototype.title;
    /** @type {?} */
    MediaViewerComponent.prototype.model;
    /** @type {?} */
    MediaViewerComponent.prototype.modelChange;
    /** @type {?} */
    MediaViewerComponent.prototype.removed;
    /** @type {?} */
    MediaViewerComponent.prototype.selected;
    /** @type {?} */
    MediaViewerComponent.prototype.thumbnailHtml;
    /**
     * @type {?}
     * @protected
     */
    MediaViewerComponent.prototype.modalService;
    /**
     * @type {?}
     * @protected
     */
    MediaViewerComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL21lZGlhLXZpZXdlci9tZWRpYS12aWV3ZXIvbWVkaWEtdmlld2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFMUQ7SUFjRSw4QkFDWSxZQUEwQixFQUMxQixTQUF1QjtRQUR2QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBUHpCLGdCQUFXLEdBQTRCLElBQUksWUFBWSxFQUFhLENBQUM7UUFDOUQsWUFBTyxHQUE0QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBT25FLENBQUM7Ozs7SUFFTCx1Q0FBUTs7O0lBQVI7O1lBQ1EsVUFBVSxHQUFHLHlDQUF5QyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNyRixJQUFJLFVBQVUsRUFBRTs7Z0JBQ1IsS0FBSyxHQUFHLHlDQUF5QyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7Z0JBQzFFLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxpRUFBNEQsT0FBTyxvQkFBZ0IsQ0FBQyxDQUFDO1NBQ2xKO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsc0NBQWlDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxjQUFVLENBQUMsQ0FBQztTQUN4SDtJQUNILENBQUM7Ozs7SUFFRCx3Q0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDO1lBQ25DLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsS0FBSyxFQUFFLGNBQWM7WUFDckIsVUFBVSxFQUFFLFVBQVU7WUFDdEIsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzthQUNsQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxxQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBNUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsNmxCQUE0Qzs2QkFDbkMsK0JBQStCO2lCQUN6Qzs7OztnQkFOUSxZQUFZO2dCQUZaLFlBQVk7Ozt3QkFXbEIsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLE1BQU07MEJBQ04sTUFBTTs7SUFtQ1QsMkJBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQXZDWSxvQkFBb0I7OztJQUMvQixxQ0FBc0I7O0lBQ3RCLHFDQUEwQjs7SUFDMUIsMkNBQStFOztJQUMvRSx1Q0FBdUU7O0lBQ3ZFLHdDQUF5Qjs7SUFDekIsNkNBQStCOzs7OztJQUc3Qiw0Q0FBb0M7Ozs7O0lBQ3BDLHlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRnVsbE1lZGlhQ29tcG9uZW50IH0gZnJvbSAnLi4vZnVsbC1tZWRpYS9mdWxsLW1lZGlhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgTWVkaWFJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UubW9kZWwnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RhbHMvbW9kYWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2thdGFuYS1tZWRpYScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21lZGlhLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbJy4vbWVkaWEtdmlld2VyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNZWRpYVZpZXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZ1xyXG4gIEBJbnB1dCgpIG1vZGVsOiBNZWRpYUl0ZW07XHJcbiAgQE91dHB1dCgpIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TWVkaWFJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8TWVkaWFJdGVtPigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPE1lZGlhSXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgcHVibGljIHNlbGVjdGVkOiBib29sZWFuO1xyXG4gIHB1YmxpYyB0aHVtYm5haWxIdG1sOiBTYWZlSHRtbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcbiAgICBwcm90ZWN0ZWQgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlzRXh0ZXJuYWwgPSAvKD86bVxcLik/eW91dHViZVxcLmNvbVxcL3dhdGNoXFw/dj0oW1xcdy1dKykvLnRlc3QodGhpcy5tb2RlbC5mdWxsU3JjKTtcclxuICAgIGlmIChpc0V4dGVybmFsKSB7XHJcbiAgICAgIGNvbnN0IG1hdGNoID0gLyg/Om1cXC4pP3lvdXR1YmVcXC5jb21cXC93YXRjaFxcP3Y9KFtcXHctXSspLy5leGVjKHRoaXMubW9kZWwuZnVsbFNyYyk7XHJcbiAgICAgIGNvbnN0IHZpZGVvSWQgPSBtYXRjaFsxXTtcclxuICAgICAgdGhpcy50aHVtYm5haWxIdG1sID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoYDxpbWcgc3R5bGU9XCJoZWlnaHQ6OTBweFwiIHNyYz1cImh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7dmlkZW9JZH0vMC5qcGdcIj48L2ltZz5gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGh1bWJuYWlsSHRtbCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGA8aW1nIHN0eWxlPVwiaGVpZ2h0OjkwcHhcIiBzcmM9XCIke3RoaXMubW9kZWwuc3JjfVwiPjwvaW1nPmApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmlld01lZGlhKCk6IHZvaWQge1xyXG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd1RlbXBsYXRlRGlhbG9nKHtcclxuICAgICAgdGVtcGxhdGU6IEZ1bGxNZWRpYUNvbXBvbmVudCxcclxuICAgICAgdGl0bGU6ICdYZW0gY2hpIHRp4bq/dCcsXHJcbiAgICAgIGN1c3RvbVNpemU6ICdtb2RhbC1sZycsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBtb2RlbDogdGhpcy5tb2RlbFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlZC5lbWl0KHRoaXMubW9kZWwpO1xyXG4gICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KG51bGwpO1xyXG4gIH1cclxufVxyXG4iXX0=