/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/loader/loader.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Type, ComponentFactoryResolver, ViewContainerRef, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { ActionService } from '../services';
export class LoaderComponent {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _actionService
     * @param {?} _viewContainerRef
     */
    constructor(_componentFactoryResolver, _actionService, _viewContainerRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._actionService = _actionService;
        this._viewContainerRef = _viewContainerRef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.createComponent();
    }
    /**
     * @private
     * @return {?}
     */
    createComponent() {
        this._viewContainerRef.clear();
        this._actionService.executeAsync((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const factory = this._componentFactoryResolver.resolveComponentFactory(this.template);
            this.componentRef = this._viewContainerRef.createComponent(factory);
            if (this.data) {
                /** @type {?} */
                const fields = Object.keys(this.data);
                if (fields) {
                    fields.forEach((/**
                     * @param {?} field
                     * @return {?}
                     */
                    (field) => {
                        this.componentRef.instance[field] = this.data[field];
                    }));
                }
            }
            if (this.componentRef.instance.init) {
                this.componentRef.instance.init();
            }
            /** @type {?} */
            const element = (/** @type {?} */ (((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0]));
            this.containerRef.nativeElement.appendChild(element);
        }));
    }
}
LoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-loader',
                template: "<div #containerRef>\r\n</div>",
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
LoaderComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ActionService },
    { type: ViewContainerRef }
];
LoaderComponent.propDecorators = {
    template: [{ type: Input }],
    data: [{ type: Input }],
    containerRef: [{ type: ViewChild, args: ['containerRef', { static: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxJQUFJLEVBQ0osd0JBQXdCLEVBQ3hCLGdCQUFnQixFQUNoQixLQUFLLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVE1QyxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBTTFCLFlBQ1UseUJBQW1ELEVBQ25ELGNBQTZCLEVBQzdCLGlCQUFtQztRQUZuQyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFDN0MsQ0FBQzs7OztJQUVNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU8sZUFBZTtRQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZOzs7UUFBQyxHQUFHLEVBQUU7O2tCQUM5QixPQUFPLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDckYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTs7c0JBQ1AsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDckMsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsTUFBTSxDQUFDLE9BQU87Ozs7b0JBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTt3QkFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkQsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7YUFDRjtZQUNELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNuQzs7a0JBQ0ssT0FBTyxHQUFHLG1CQUFBLENBQUMsbUJBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQXdCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWU7WUFDaEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIseUNBQW9DO2dCQUNwQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQWRDLHdCQUF3QjtZQVFqQixhQUFhO1lBUHBCLGdCQUFnQjs7O3VCQWdCZixLQUFLO21CQUNMLEtBQUs7MkJBQ0wsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFGM0MsbUNBQW9DOztJQUNwQywrQkFBMEI7O0lBQzFCLHVDQUE2RTs7SUFDN0UsdUNBQXlCOzs7OztJQUd2QixvREFBMkQ7Ozs7O0lBQzNELHlDQUFxQzs7Ozs7SUFDckMsNENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBUeXBlLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIElucHV0LFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrYXRhbmEtbG9hZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJ2xvYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0ZW1wbGF0ZTogVHlwZTxhbnk+O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBhbnk7XHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIGNvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcclxuICBwdWJsaWMgY29tcG9uZW50UmVmOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIF9hY3Rpb25TZXJ2aWNlOiBBY3Rpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUNvbXBvbmVudCgpIHtcclxuICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcclxuICAgIHRoaXMuX2FjdGlvblNlcnZpY2UuZXhlY3V0ZUFzeW5jKCgpID0+IHtcclxuICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLnRlbXBsYXRlKTtcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcclxuICAgICAgaWYgKHRoaXMuZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgaWYgKGZpZWxkcykge1xyXG4gICAgICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlW2ZpZWxkXSA9IHRoaXMuZGF0YVtmaWVsZF07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmluaXQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5pbml0KCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZWxlbWVudCA9ICh0aGlzLmNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59Il19