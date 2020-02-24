/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/accordion/accordion.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
var AccordionDirective = /** @class */ (function () {
    function AccordionDirective(router) {
        this.router = router;
        this.navlinks = [];
        this.countState = 1;
    }
    /**
     * @param {?} openLink
     * @return {?}
     */
    AccordionDirective.prototype.closeOtherLinks = /**
     * @param {?} openLink
     * @return {?}
     */
    function (openLink) {
        this.countState++;
        if ((openLink.group !== 'sub-toggled' || openLink.group !== 'main-toggled') && this.countState === 1) {
            if (window.innerWidth < 768 || (window.innerWidth >= 768 && window.innerWidth <= 1024)) {
                /** @type {?} */
                var toggledElement = (/** @type {?} */ (document.querySelector('#mobile-collapse')));
                toggledElement.click();
            }
        }
        this.navlinks.forEach((/**
         * @param {?} link
         * @return {?}
         */
        function (link) {
            if (link !== openLink && (link.group === 'sub-toggled' || openLink.group !== 'sub-toggled')) {
                link.open = false;
            }
        }));
    };
    /**
     * @param {?} link
     * @return {?}
     */
    AccordionDirective.prototype.addLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.navlinks.push(link);
    };
    /**
     * @param {?} link
     * @return {?}
     */
    AccordionDirective.prototype.removeGroup = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        /** @type {?} */
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    /**
     * @return {?}
     */
    AccordionDirective.prototype.getUrl = /**
     * @return {?}
     */
    function () {
        return this.router.url;
    };
    /**
     * @return {?}
     */
    AccordionDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._router = this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event instanceof NavigationEnd; }))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.countState = 0;
            _this.navlinks.forEach((/**
             * @param {?} link
             * @return {?}
             */
            function (link) {
                if (link.group) {
                    /** @type {?} */
                    var routeUrl = _this.getUrl();
                    /** @type {?} */
                    var currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        _this.closeOtherLinks(link);
                    }
                }
            }));
        }));
    };
    AccordionDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[katanaAccordion]',
                },] }
    ];
    /** @nocollapse */
    AccordionDirective.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return AccordionDirective;
}());
export { AccordionDirective };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AccordionDirective.prototype.navlinks;
    /**
     * @type {?}
     * @private
     */
    AccordionDirective.prototype.countState;
    /**
     * @type {?}
     * @private
     */
    AccordionDirective.prototype._router;
    /**
     * @type {?}
     * @private
     */
    AccordionDirective.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2FjY29yZGlvbi9hY2NvcmRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QztJQVFFLDRCQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUgvQixhQUFRLEdBQTZCLEVBQUUsQ0FBQztRQUMxQyxlQUFVLEdBQUcsQ0FBQyxDQUFDO0lBRXNCLENBQUM7Ozs7O0lBRXZDLDRDQUFlOzs7O0lBQXRCLFVBQXVCLFFBQWdDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxhQUFhLElBQUksUUFBUSxDQUFDLEtBQUssS0FBSyxjQUFjLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtZQUNwRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsRUFBRTs7b0JBQ2hGLGNBQWMsR0FBRyxtQkFBYSxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEVBQUE7Z0JBQzlFLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN4QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxJQUE0QjtZQUNqRCxJQUFJLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLGFBQWEsSUFBSSxRQUFRLENBQUMsS0FBSyxLQUFLLGFBQWEsQ0FBQyxFQUFFO2dCQUMzRixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUNuQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxvQ0FBTzs7OztJQUFkLFVBQWUsSUFBNEI7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTSx3Q0FBVzs7OztJQUFsQixVQUFtQixJQUE0Qjs7WUFDdkMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUN6QyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7O0lBRU0sbUNBQU07OztJQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRU0scUNBQVE7OztJQUFmO1FBQUEsaUJBY0M7UUFiQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLFlBQVksYUFBYSxFQUE5QixDQUE4QixFQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFvQjtZQUN2SCxLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNwQixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLElBQTRCO2dCQUNqRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7O3dCQUNSLFFBQVEsR0FBRyxLQUFJLENBQUMsTUFBTSxFQUFFOzt3QkFDeEIsVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO29CQUN0QyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7d0JBQ2pCLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzVCO2lCQUNGO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXRERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtpQkFDOUI7Ozs7Z0JBUFEsTUFBTTs7SUE0RGYseUJBQUM7Q0FBQSxBQXZERCxJQXVEQztTQW5EWSxrQkFBa0I7Ozs7OztJQUM3QixzQ0FBa0Q7Ozs7O0lBQ2xELHdDQUF1Qjs7Ozs7SUFDdkIscUNBQThCOzs7OztJQUNYLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFjY29yZGlvbkxpbmtEaXJlY3RpdmUgfSBmcm9tICcuL2FjY29yZGlvbmxpbmsuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2thdGFuYUFjY29yZGlvbl0nLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJvdGVjdGVkIG5hdmxpbmtzOiBBY2NvcmRpb25MaW5rRGlyZWN0aXZlW10gPSBbXTtcclxuICBwcml2YXRlIGNvdW50U3RhdGUgPSAxO1xyXG4gIHByaXZhdGUgX3JvdXRlcjogU3Vic2NyaXB0aW9uO1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgcHVibGljIGNsb3NlT3RoZXJMaW5rcyhvcGVuTGluazogQWNjb3JkaW9uTGlua0RpcmVjdGl2ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jb3VudFN0YXRlKys7XHJcbiAgICBpZiAoKG9wZW5MaW5rLmdyb3VwICE9PSAnc3ViLXRvZ2dsZWQnIHx8IG9wZW5MaW5rLmdyb3VwICE9PSAnbWFpbi10b2dnbGVkJykgJiYgdGhpcy5jb3VudFN0YXRlID09PSAxKSB7XHJcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCB8fCAod2luZG93LmlubmVyV2lkdGggPj0gNzY4ICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwMjQpKSB7XHJcbiAgICAgICAgY29uc3QgdG9nZ2xlZEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vYmlsZS1jb2xsYXBzZScpO1xyXG4gICAgICAgIHRvZ2dsZWRFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMubmF2bGlua3MuZm9yRWFjaCgobGluazogQWNjb3JkaW9uTGlua0RpcmVjdGl2ZSkgPT4ge1xyXG4gICAgICBpZiAobGluayAhPT0gb3BlbkxpbmsgJiYgKGxpbmsuZ3JvdXAgPT09ICdzdWItdG9nZ2xlZCcgfHwgb3BlbkxpbmsuZ3JvdXAgIT09ICdzdWItdG9nZ2xlZCcpKSB7XHJcbiAgICAgICAgbGluay5vcGVuID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZExpbmsobGluazogQWNjb3JkaW9uTGlua0RpcmVjdGl2ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5uYXZsaW5rcy5wdXNoKGxpbmspO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUdyb3VwKGxpbms6IEFjY29yZGlvbkxpbmtEaXJlY3RpdmUpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5uYXZsaW5rcy5pbmRleE9mKGxpbmspO1xyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICB0aGlzLm5hdmxpbmtzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VXJsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucm91dGVyLnVybDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiBhbnkge1xyXG4gICAgdGhpcy5fcm91dGVyID0gdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoZmlsdGVyKChldmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSkuc3Vic2NyaWJlKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG4gICAgICB0aGlzLmNvdW50U3RhdGUgPSAwO1xyXG4gICAgICB0aGlzLm5hdmxpbmtzLmZvckVhY2goKGxpbms6IEFjY29yZGlvbkxpbmtEaXJlY3RpdmUpID0+IHtcclxuICAgICAgICBpZiAobGluay5ncm91cCkge1xyXG4gICAgICAgICAgY29uc3Qgcm91dGVVcmwgPSB0aGlzLmdldFVybCgpO1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudFVybCA9IHJvdXRlVXJsLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICBpZiAoY3VycmVudFVybC5pbmRleE9mKGxpbmsuZ3JvdXApID4gMCkge1xyXG4gICAgICAgICAgICBsaW5rLm9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlT3RoZXJMaW5rcyhsaW5rKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==