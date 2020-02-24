/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/formatter/oembed-video.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var CembedVideoPipe = /** @class */ (function () {
    function CembedVideoPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    CembedVideoPipe.prototype.transform = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        /** @type {?} */
        var result = text;
        /** @type {?} */
        var extractOembedTagPattern = new RegExp('<\s*oembed[^>]*>.*?<\s*\/\s*oembed>', 'gm');
        /** @type {?} */
        var extractOembedTagsResult = extractOembedTagPattern.exec(text);
        if (extractOembedTagsResult && extractOembedTagsResult.length) {
            /** @type {?} */
            var oembedTags = tslib_1.__spread(extractOembedTagsResult);
            while (extractOembedTagsResult) {
                extractOembedTagsResult = extractOembedTagPattern.exec(text);
                if (extractOembedTagsResult && extractOembedTagsResult.length) {
                    oembedTags.push.apply(oembedTags, tslib_1.__spread(extractOembedTagsResult));
                }
            }
            /** @type {?} */
            var videoTags = oembedTags.map((/**
             * @param {?} tag
             * @return {?}
             */
            function (tag) {
                /** @type {?} */
                var match = /(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/.exec(tag);
                /** @type {?} */
                var videoLink = match[1];
                /** @type {?} */
                var videoTag = "<iframe src=\"https://www.youtube.com/embed/" + videoLink + "\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>";
                return videoTag;
            }));
            videoTags.forEach((/**
             * @param {?} tag
             * @return {?}
             */
            function (tag) {
                result = text.replace(extractOembedTagPattern, tag);
            }));
        }
        return this.sanitizer.bypassSecurityTrustHtml(result);
    };
    CembedVideoPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'katanaEmbedVideo'
                },] }
    ];
    /** @nocollapse */
    CembedVideoPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return CembedVideoPipe;
}());
export { CembedVideoPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CembedVideoPipe.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2VtYmVkLXZpZGVvLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9mb3JtYXR0ZXIvb2VtYmVkLXZpZGVvLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpEO0lBS0kseUJBQ1ksU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUMvQixDQUFDOzs7OztJQUVMLG1DQUFTOzs7O0lBQVQsVUFBVSxJQUFTOztZQUNYLE1BQU0sR0FBRyxJQUFJOztZQUNYLHVCQUF1QixHQUFHLElBQUksTUFBTSxDQUFDLHFDQUFxQyxFQUFFLElBQUksQ0FBQzs7WUFDbkYsdUJBQXVCLEdBQUcsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNoRSxJQUFJLHVCQUF1QixJQUFJLHVCQUF1QixDQUFDLE1BQU0sRUFBRTs7Z0JBQ3JELFVBQVUsb0JBQU8sdUJBQXVCLENBQUM7WUFDL0MsT0FBTyx1QkFBdUIsRUFBRTtnQkFDNUIsdUJBQXVCLEdBQUcsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3RCxJQUFJLHVCQUF1QixJQUFJLHVCQUF1QixDQUFDLE1BQU0sRUFBRTtvQkFDM0QsVUFBVSxDQUFDLElBQUksT0FBZixVQUFVLG1CQUFTLHVCQUF1QixHQUFFO2lCQUMvQzthQUNKOztnQkFFSyxTQUFTLEdBQUcsVUFBVSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLEdBQUc7O29CQUMxQixLQUFLLEdBQUcseUNBQXlDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7b0JBQzNELFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOztvQkFDcEIsUUFBUSxHQUFHLGlEQUE4QyxTQUFTLHVGQUErRTtnQkFDdkosT0FBTyxRQUFRLENBQUM7WUFDcEIsQ0FBQyxFQUFDO1lBRUYsU0FBUyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLEdBQUc7Z0JBQ2pCLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3hELENBQUMsRUFBQyxDQUFDO1NBQ047UUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Z0JBbkNKLElBQUksU0FBQztvQkFDRixJQUFJLEVBQUUsa0JBQWtCO2lCQUMzQjs7OztnQkFKUSxZQUFZOztJQXNDckIsc0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQWhDWSxlQUFlOzs7Ozs7SUFFcEIsb0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdrYXRhbmFFbWJlZFZpZGVvJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENlbWJlZFZpZGVvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxyXG4gICAgKSB7IH1cclxuXHJcbiAgICB0cmFuc2Zvcm0odGV4dDogYW55KSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRleHQ7XHJcbiAgICAgICAgY29uc3QgZXh0cmFjdE9lbWJlZFRhZ1BhdHRlcm4gPSBuZXcgUmVnRXhwKCc8XFxzKm9lbWJlZFtePl0qPi4qPzxcXHMqXFwvXFxzKm9lbWJlZD4nLCAnZ20nKTtcclxuICAgICAgICBsZXQgZXh0cmFjdE9lbWJlZFRhZ3NSZXN1bHQgPSBleHRyYWN0T2VtYmVkVGFnUGF0dGVybi5leGVjKHRleHQpO1xyXG4gICAgICAgIGlmIChleHRyYWN0T2VtYmVkVGFnc1Jlc3VsdCAmJiBleHRyYWN0T2VtYmVkVGFnc1Jlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3Qgb2VtYmVkVGFncyA9IFsuLi5leHRyYWN0T2VtYmVkVGFnc1Jlc3VsdF07XHJcbiAgICAgICAgICAgIHdoaWxlIChleHRyYWN0T2VtYmVkVGFnc1Jlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgZXh0cmFjdE9lbWJlZFRhZ3NSZXN1bHQgPSBleHRyYWN0T2VtYmVkVGFnUGF0dGVybi5leGVjKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4dHJhY3RPZW1iZWRUYWdzUmVzdWx0ICYmIGV4dHJhY3RPZW1iZWRUYWdzUmVzdWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9lbWJlZFRhZ3MucHVzaCguLi5leHRyYWN0T2VtYmVkVGFnc1Jlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvVGFncyA9IG9lbWJlZFRhZ3MubWFwKHRhZyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IC8oPzptXFwuKT95b3V0dWJlXFwuY29tXFwvd2F0Y2hcXD92PShbXFx3LV0rKS8uZXhlYyh0YWcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW9MaW5rID0gbWF0Y2hbMV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlb1RhZyA9IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9MaW5rfVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5gO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZGVvVGFnO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvVGFncy5mb3JFYWNoKHRhZyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0ZXh0LnJlcGxhY2UoZXh0cmFjdE9lbWJlZFRhZ1BhdHRlcm4sIHRhZyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHJlc3VsdCk7XHJcbiAgICB9XHJcbn1cclxuIl19