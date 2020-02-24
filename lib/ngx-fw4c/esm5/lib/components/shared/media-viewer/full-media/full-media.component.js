/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/media-viewer/full-media/full-media.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaItem } from '../../models/base.model';
var FullMediaComponent = /** @class */ (function () {
    function FullMediaComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    FullMediaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.videoPlayerHtml = this.generateHtml();
    };
    /**
     * @private
     * @return {?}
     */
    FullMediaComponent.prototype.generateHtml = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isExternal = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.test(this.model.fullSrc);
        /** @type {?} */
        var videoTag = '';
        if (isExternal) {
            /** @type {?} */
            var match = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.exec(this.model.fullSrc);
            /** @type {?} */
            var videoId = match[1];
            videoTag = "<iframe  style=\"width:100%; min-height: 500px;\"  src=\"https://www.youtube.com/embed/" + videoId + "\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>";
        }
        else {
            videoTag = "<video controls style=\"width:100%\"><source src=\"" + this.model.fullSrc + "\" type=\"video/mp4\"></video>";
        }
        return this.sanitizer.bypassSecurityTrustHtml(videoTag);
    };
    FullMediaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-full-media',
                    template: "<div [innerHTML]=\"videoPlayerHtml\"></div>\r\n"
                }] }
    ];
    /** @nocollapse */
    FullMediaComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    FullMediaComponent.propDecorators = {
        model: [{ type: Input }]
    };
    return FullMediaComponent;
}());
export { FullMediaComponent };
if (false) {
    /** @type {?} */
    FullMediaComponent.prototype.model;
    /** @type {?} */
    FullMediaComponent.prototype.videoPlayerHtml;
    /**
     * @type {?}
     * @private
     */
    FullMediaComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1tZWRpYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9tZWRpYS12aWV3ZXIvZnVsbC1tZWRpYS9mdWxsLW1lZGlhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFcEQ7SUFXRSw0QkFDVSxTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQzdCLENBQUM7Ozs7SUFFTCxxQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVPLHlDQUFZOzs7O0lBQXBCOztZQUNRLFVBQVUsR0FBRyx5Q0FBeUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7O1lBRWpGLFFBQVEsR0FBRyxFQUFFO1FBQ2pCLElBQUksVUFBVSxFQUFFOztnQkFDUixLQUFLLEdBQUcseUNBQXlDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDOztnQkFDMUUsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDeEIsUUFBUSxHQUFHLDRGQUF1RixPQUFPLHVGQUErRSxDQUFDO1NBQzFMO2FBQU07WUFDTCxRQUFRLEdBQUcsd0RBQW1ELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxtQ0FBNkIsQ0FBQztTQUMvRztRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxRCxDQUFDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLDJEQUEwQztpQkFFM0M7Ozs7Z0JBUFEsWUFBWTs7O3dCQVVsQixLQUFLOztJQTBCUix5QkFBQztDQUFBLEFBakNELElBaUNDO1NBM0JZLGtCQUFrQjs7O0lBQzdCLG1DQUEwQjs7SUFFMUIsNkNBQTBCOzs7OztJQUd4Qix1Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBNZWRpYUl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvYmFzZS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2thdGFuYS1mdWxsLW1lZGlhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZnVsbC1tZWRpYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZ1bGxNZWRpYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgbW9kZWw6IE1lZGlhSXRlbTtcclxuXHJcbiAgdmlkZW9QbGF5ZXJIdG1sOiBTYWZlSHRtbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpZGVvUGxheWVySHRtbCA9IHRoaXMuZ2VuZXJhdGVIdG1sKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbmVyYXRlSHRtbCgpOiBTYWZlSHRtbCB7XHJcbiAgICBjb25zdCBpc0V4dGVybmFsID0gLyg/Om1cXC4pP3lvdXR1YmVcXC5jb21cXC93YXRjaFxcP3Y9KFtcXHctXSspLy50ZXN0KHRoaXMubW9kZWwuZnVsbFNyYyk7XHJcblxyXG4gICAgbGV0IHZpZGVvVGFnID0gJyc7XHJcbiAgICBpZiAoaXNFeHRlcm5hbCkge1xyXG4gICAgICBjb25zdCBtYXRjaCA9IC8oPzptXFwuKT95b3V0dWJlXFwuY29tXFwvd2F0Y2hcXD92PShbXFx3LV0rKS8uZXhlYyh0aGlzLm1vZGVsLmZ1bGxTcmMpO1xyXG4gICAgICBjb25zdCB2aWRlb0lkID0gbWF0Y2hbMV07XHJcbiAgICAgIHZpZGVvVGFnID0gYDxpZnJhbWUgIHN0eWxlPVwid2lkdGg6MTAwJTsgbWluLWhlaWdodDogNTAwcHg7XCIgIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH1cIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWFcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZpZGVvVGFnID0gYDx2aWRlbyBjb250cm9scyBzdHlsZT1cIndpZHRoOjEwMCVcIj48c291cmNlIHNyYz1cIiR7dGhpcy5tb2RlbC5mdWxsU3JjfVwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3ZpZGVvPmA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZpZGVvVGFnKTtcclxuICB9XHJcbn1cclxuIl19