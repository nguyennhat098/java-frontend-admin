/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/auth/router.handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RouterHandler = /** @class */ (function () {
    function RouterHandler() {
    }
    /**
     * @param {?} error
     * @return {?}
     */
    RouterHandler.prototype.handleError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (error && error.toString().indexOf('Cannot match any routes') > -1) {
            window.location.href = '/not-found';
        }
    };
    return RouterHandler;
}());
export { RouterHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2F1dGgvcm91dGVyLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtJQUFBO0lBTUEsQ0FBQzs7Ozs7SUFMQyxtQ0FBVzs7OztJQUFYLFVBQVksS0FBVTtRQUNwQixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDckUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSb3V0ZXJIYW5kbGVyIGltcGxlbWVudHMgRXJyb3JIYW5kbGVyIHtcclxuICBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IudG9TdHJpbmcoKS5pbmRleE9mKCdDYW5ub3QgbWF0Y2ggYW55IHJvdXRlcycpID4gLTEpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL25vdC1mb3VuZCc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==