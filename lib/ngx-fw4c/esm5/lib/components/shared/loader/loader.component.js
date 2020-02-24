/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/loader/loader.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Type, ComponentFactoryResolver, ViewContainerRef, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { ActionService } from '../services';
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(_componentFactoryResolver, _actionService, _viewContainerRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._actionService = _actionService;
        this._viewContainerRef = _viewContainerRef;
    }
    /**
     * @return {?}
     */
    LoaderComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.createComponent();
    };
    /**
     * @private
     * @return {?}
     */
    LoaderComponent.prototype.createComponent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._viewContainerRef.clear();
        this._actionService.executeAsync((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var factory = _this._componentFactoryResolver.resolveComponentFactory(_this.template);
            _this.componentRef = _this._viewContainerRef.createComponent(factory);
            if (_this.data) {
                /** @type {?} */
                var fields = Object.keys(_this.data);
                if (fields) {
                    fields.forEach((/**
                     * @param {?} field
                     * @return {?}
                     */
                    function (field) {
                        _this.componentRef.instance[field] = _this.data[field];
                    }));
                }
            }
            if (_this.componentRef.instance.init) {
                _this.componentRef.instance.init();
            }
            /** @type {?} */
            var element = (/** @type {?} */ (((/** @type {?} */ (_this.componentRef.hostView))).rootNodes[0]));
            _this.containerRef.nativeElement.appendChild(element);
        }));
    };
    LoaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-loader',
                    template: "<div #containerRef>\r\n</div>",
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    LoaderComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ActionService },
        { type: ViewContainerRef }
    ]; };
    LoaderComponent.propDecorators = {
        template: [{ type: Input }],
        data: [{ type: Input }],
        containerRef: [{ type: ViewChild, args: ['containerRef', { static: true },] }]
    };
    return LoaderComponent;
}());
export { LoaderComponent };
if (false) {
    /** @type {?} */
    LoaderComponent.prototype.template;
    /** @type {?} */
    LoaderComponent.prototype.data;
    /** @type {?} */
    LoaderComponent.prototype.containerRef;
    /** @type {?} */
    LoaderComponent.prototype.componentRef;
    /**
     * @type {?}
     * @private
     */
    LoaderComponent.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    LoaderComponent.prototype._actionService;
    /**
     * @type {?}
     * @private
     */
    LoaderComponent.prototype._viewContainerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxJQUFJLEVBQ0osd0JBQXdCLEVBQ3hCLGdCQUFnQixFQUNoQixLQUFLLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QztJQVlFLHlCQUNVLHlCQUFtRCxFQUNuRCxjQUE2QixFQUM3QixpQkFBbUM7UUFGbkMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQUNuRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO0lBQzdDLENBQUM7Ozs7SUFFTSx5Q0FBZTs7O0lBQXRCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU8seUNBQWU7Ozs7SUFBdkI7UUFBQSxpQkFtQkM7UUFsQkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWTs7O1FBQUM7O2dCQUN6QixPQUFPLEdBQUcsS0FBSSxDQUFDLHlCQUF5QixDQUFDLHVCQUF1QixDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUM7WUFDckYsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BFLElBQUksS0FBSSxDQUFDLElBQUksRUFBRTs7b0JBQ1AsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQztnQkFDckMsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsTUFBTSxDQUFDLE9BQU87Ozs7b0JBQUMsVUFBQyxLQUFLO3dCQUNuQixLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2RCxDQUFDLEVBQUMsQ0FBQztpQkFDSjthQUNGO1lBQ0QsSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ25DLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ25DOztnQkFDSyxPQUFPLEdBQUcsbUJBQUEsQ0FBQyxtQkFBQSxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBd0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBZTtZQUNoRyxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qix5Q0FBb0M7b0JBQ3BDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7OztnQkFkQyx3QkFBd0I7Z0JBUWpCLGFBQWE7Z0JBUHBCLGdCQUFnQjs7OzJCQWdCZixLQUFLO3VCQUNMLEtBQUs7K0JBQ0wsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBaUM3QyxzQkFBQztDQUFBLEFBMUNELElBMENDO1NBcENZLGVBQWU7OztJQUMxQixtQ0FBb0M7O0lBQ3BDLCtCQUEwQjs7SUFDMUIsdUNBQTZFOztJQUM3RSx1Q0FBeUI7Ozs7O0lBR3ZCLG9EQUEyRDs7Ozs7SUFDM0QseUNBQXFDOzs7OztJQUNyQyw0Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFR5cGUsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgSW5wdXQsXHJcbiAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2thdGFuYS1sb2FkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgcHVibGljIHRlbXBsYXRlOiBUeXBlPGFueT47XHJcbiAgQElucHV0KCkgcHVibGljIGRhdGE6IGFueTtcclxuICBAVmlld0NoaWxkKCdjb250YWluZXJSZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgY29udGFpbmVyUmVmOiBFbGVtZW50UmVmO1xyXG4gIHB1YmxpYyBjb21wb25lbnRSZWY6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgX2FjdGlvblNlcnZpY2U6IEFjdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQ29tcG9uZW50KCkge1xyXG4gICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xyXG4gICAgdGhpcy5fYWN0aW9uU2VydmljZS5leGVjdXRlQXN5bmMoKCkgPT4ge1xyXG4gICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMudGVtcGxhdGUpO1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xyXG4gICAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZmllbGRzID0gT2JqZWN0LmtleXModGhpcy5kYXRhKTtcclxuICAgICAgICBpZiAoZmllbGRzKSB7XHJcbiAgICAgICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2VbZmllbGRdID0gdGhpcy5kYXRhW2ZpZWxkXTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuaW5pdCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmluaXQoKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBlbGVtZW50ID0gKHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iXX0=