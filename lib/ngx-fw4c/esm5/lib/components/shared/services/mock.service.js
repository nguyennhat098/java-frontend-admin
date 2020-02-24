/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/services/mock.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
var MockService = /** @class */ (function () {
    function MockService() {
    }
    /**
     * @template T
     * @param {?} callback
     * @param {?=} response
     * @return {?}
     */
    MockService.prototype.verify = /**
     * @template T
     * @param {?} callback
     * @param {?=} response
     * @return {?}
     */
    function (callback, response) {
        /** @type {?} */
        var mock = this.useMock();
        if (mock)
            return of(response ? response : (/** @type {?} */ ({}))).pipe(delay(500));
        return callback;
    };
    /**
     * @return {?}
     */
    MockService.prototype.useMock = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentValue = JSON.parse(window.localStorage.getItem('mock'));
        if (!currentValue)
            return false;
        return currentValue;
    };
    return MockService;
}());
export { MockService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvbW9jay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkM7SUFBQTtJQVlBLENBQUM7Ozs7Ozs7SUFYVSw0QkFBTTs7Ozs7O0lBQWIsVUFBaUIsUUFBdUIsRUFBRSxRQUFZOztZQUM5QyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUN6QixJQUFJLElBQUk7WUFBRSxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsbUJBQUEsRUFBRSxFQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEUsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVNLDZCQUFPOzs7SUFBZDs7WUFDUSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsWUFBWTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ2hDLE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFaRCxJQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTW9ja1NlcnZpY2Uge1xyXG4gICAgcHVibGljIHZlcmlmeTxUPihjYWxsYmFjazogT2JzZXJ2YWJsZTxUPiwgcmVzcG9uc2U/OiBUKTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICAgICAgdmFyIG1vY2sgPSB0aGlzLnVzZU1vY2soKTtcclxuICAgICAgICBpZiAobW9jaykgcmV0dXJuIG9mKHJlc3BvbnNlID8gcmVzcG9uc2UgOiB7fSBhcyBUKS5waXBlKGRlbGF5KDUwMCkpO1xyXG4gICAgICAgIHJldHVybiBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXNlTW9jaygpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vY2snKSk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50VmFsdWUpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlO1xyXG4gICAgfVxyXG59Il19