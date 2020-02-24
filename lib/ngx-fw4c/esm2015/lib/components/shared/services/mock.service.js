/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/services/mock.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
export class MockService {
    /**
     * @template T
     * @param {?} callback
     * @param {?=} response
     * @return {?}
     */
    verify(callback, response) {
        /** @type {?} */
        var mock = this.useMock();
        if (mock)
            return of(response ? response : (/** @type {?} */ ({}))).pipe(delay(500));
        return callback;
    }
    /**
     * @return {?}
     */
    useMock() {
        /** @type {?} */
        var currentValue = JSON.parse(window.localStorage.getItem('mock'));
        if (!currentValue)
            return false;
        return currentValue;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvbW9jay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkMsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7SUFDYixNQUFNLENBQUksUUFBdUIsRUFBRSxRQUFZOztZQUM5QyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUN6QixJQUFJLElBQUk7WUFBRSxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsbUJBQUEsRUFBRSxFQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEUsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVNLE9BQU87O1lBQ04sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNoQyxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2NrU2VydmljZSB7XHJcbiAgICBwdWJsaWMgdmVyaWZ5PFQ+KGNhbGxiYWNrOiBPYnNlcnZhYmxlPFQ+LCByZXNwb25zZT86IFQpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgICAgICB2YXIgbW9jayA9IHRoaXMudXNlTW9jaygpO1xyXG4gICAgICAgIGlmIChtb2NrKSByZXR1cm4gb2YocmVzcG9uc2UgPyByZXNwb25zZSA6IHt9IGFzIFQpLnBpcGUoZGVsYXkoNTAwKSk7XHJcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1c2VNb2NrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9jaycpKTtcclxuICAgICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWU7XHJcbiAgICB9XHJcbn0iXX0=