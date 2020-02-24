/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/timeline/timeline.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
        this.items = [];
    }
    TimelineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-timeline',
                    template: "<div class=\"timeline-tracking\">\r\n  <div class=\"timeline-tracking-item\" *ngFor=\"let item of items\">\r\n    <div class=\"group-name\">{{item?.date | katanaDate}}</div>\r\n    <div class=\"group-inside\" *ngFor=\"let detail of item.details\">\r\n      <div class=\"body\">\r\n        <div class=\"dot\"></div>\r\n        <div class=\"content\" innerHTML=\"{{detail.description}}\"></div>\r\n        <div class=\"date-time-detail\">{{detail?.time | katanaTime}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".timeline-tracking{position:relative}.timeline-tracking::before{content:\"\";position:absolute;top:0;left:8px;bottom:0;width:5px;background:#ddd}.timeline-tracking .timeline-tracking-item{margin-bottom:15px}.timeline-tracking .timeline-tracking-item .group-name{font-weight:500;font-size:14px;margin-bottom:10px;padding-left:45px}.timeline-tracking .timeline-tracking-item .group-inside{font-size:13px}.timeline-tracking .timeline-tracking-item .group-inside .body{position:relative;margin-bottom:15px;padding-right:30px;padding-left:45px;transition:.3s ease-in-out;cursor:pointer}.timeline-tracking .timeline-tracking-item .group-inside .body:hover{padding-left:60px}@media (max-width:991px){.timeline-tracking .timeline-tracking-item .group-inside .body:hover{background-color:unset!important;padding-left:45px!important}.timeline-tracking .timeline-tracking-item .group-inside .body:hover .dot{left:0!important}.timeline-tracking .timeline-tracking-item .group-inside .body:hover .content{font-weight:400!important}}.timeline-tracking .timeline-tracking-item .group-inside .body:hover .dot{left:20px}.timeline-tracking .timeline-tracking-item .group-inside .body:hover .content{font-weight:400}.timeline-tracking .timeline-tracking-item .group-inside .body .dot{width:20px;height:20px;border:5px solid green;background-color:#fff;border-radius:100%;position:absolute;left:0;top:0;transition:.3s ease-in-out}.timeline-tracking .timeline-tracking-item .group-inside .body .content{transition:.3s ease-in-out}.timeline-tracking .timeline-tracking-item .group-inside .body .content b{font-weight:500}.timeline-tracking .timeline-tracking-item .group-inside .body .date-time-detail{font-weight:700;position:absolute;right:0;top:0;transition:.3s ease-in-out}.content{white-space:pre-wrap;word-break:break-word}"]
                }] }
    ];
    TimelineComponent.propDecorators = {
        items: [{ type: Input }]
    };
    return TimelineComponent;
}());
export { TimelineComponent };
if (false) {
    /** @type {?} */
    TimelineComponent.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakQ7SUFBQTtRQU9rQixVQUFLLEdBQW9CLEVBQUUsQ0FBQztJQUM5QyxDQUFDOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsdWhCQUF3Qzs7aUJBRXpDOzs7d0JBR0UsS0FBSzs7SUFDUix3QkFBQztDQUFBLEFBUkQsSUFRQztTQUZZLGlCQUFpQjs7O0lBQzVCLGtDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhY2tpbmdHcm91cCB9IGZyb20gJy4uL21vZGVscy9iYXNlLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2F0YW5hLXRpbWVsaW5lJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGltZWxpbmUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lbGluZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgcHVibGljIGl0ZW1zOiBUcmFja2luZ0dyb3VwW10gPSBbXTtcclxufVxyXG4iXX0=