/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/layout/toolbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ViewContainerRef, TemplateRef } from "@angular/core";
import { DefaultLayoutService } from './layout.service';
import { AggregatorService } from '../shared/services/aggregator.service';
import { ToolbarActionPayload } from '../shared/models/base.model';
import { ToolbarAction } from '../shared/enums/base.enum';
import { KeyConst } from '../shared';
export class DefaultToolbarComponent {
    /**
     * @param {?} layoutService
     * @param {?} _aggregatorService
     */
    constructor(layoutService, _aggregatorService) {
        this.layoutService = layoutService;
        this._aggregatorService = _aggregatorService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._aggregatorService.subscribe(KeyConst.PageChanged, (/**
         * @return {?}
         */
        () => {
            if (this.errorContainer) {
                this.errorContainer.clear();
            }
        }));
    }
    /**
     * @param {?} loadedCallback
     * @param {?} item
     * @return {?}
     */
    onButtonClicked(loadedCallback, item) {
        /** @type {?} */
        let payload = new ToolbarActionPayload({ action: item.action, loadedCallback: loadedCallback });
        if (item.action === ToolbarAction.Save) {
            payload.callback = (/**
             * @param {?} errors
             * @return {?}
             */
            (errors) => {
                this.errorContainer.clear();
                this.errorContainer.createEmbeddedView(this.errorTemplate, { errors: errors });
            });
        }
        this._aggregatorService.publish('ToolbarButtonClicked', payload);
    }
}
DefaultToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'default-toolbar',
                template: "<ng-container *ngIf=\"layoutService.hasToolbarItems()\">\r\n  <div class=\"action-bar-footer\">\r\n    <div class=\"action-bar\">\r\n      <ng-container #errorContainer></ng-container>\r\n      <ng-container *ngFor=\"let item of layoutService.getToolbarItems()\">\r\n        <ng-container [ngSwitch]=\"item.controlType\">\r\n          <ng-template ngSwitchDefault>\r\n            <katana-button [title]=\"item.title\" [lazyload]=\"item.lazyload\"\r\n              (clicked)=\"onButtonClicked($event, item)\" [customClass]=\"item.style\"></katana-button>\r\n          </ng-template>\r\n          <ng-template ngSwitchCase=\"'Textbox'\">\r\n          </ng-template>\r\n          <ng-template ngSwitchCase=\"'Dropdown'\">\r\n          </ng-template>\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #errorTemplate let-errors=\"errors\">\r\n    <div *ngIf=\"errors.length\" class=\"error-part\">\r\n      <label class=\"title\">Th\u00F4ng tin sau ch\u01B0a h\u1EE3p l\u1EC7</label>\r\n      <ul class=\"list-error\">\r\n        <li class=\"error-item\" *ngFor=\"let error of errors\">\r\n          <div class=\"small-item\" *ngFor=\"let item of error.messages\">\r\n            {{item}}\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </ng-template>\r\n</ng-container>"
            }] }
];
/** @nocollapse */
DefaultToolbarComponent.ctorParameters = () => [
    { type: DefaultLayoutService },
    { type: AggregatorService }
];
DefaultToolbarComponent.propDecorators = {
    errorContainer: [{ type: ViewChild, args: ['errorContainer', { read: ViewContainerRef, static: true },] }],
    errorTemplate: [{ type: ViewChild, args: ['errorTemplate', { static: true },] }]
};
if (false) {
    /** @type {?} */
    DefaultToolbarComponent.prototype.errorContainer;
    /** @type {?} */
    DefaultToolbarComponent.prototype.errorTemplate;
    /** @type {?} */
    DefaultToolbarComponent.prototype.layoutService;
    /**
     * @type {?}
     * @private
     */
    DefaultToolbarComponent.prototype._aggregatorService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xheW91dC90b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQW9CLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFPckMsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFJaEMsWUFDVyxhQUFtQyxFQUNsQyxrQkFBcUM7UUFEdEMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ2xDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7SUFFakQsQ0FBQzs7OztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXOzs7UUFBRSxHQUFHLEVBQUU7WUFDekQsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQy9CO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7Ozs7SUFFTSxlQUFlLENBQUMsY0FBd0IsRUFBRSxJQUFzQjs7WUFDL0QsT0FBTyxHQUFHLElBQUksb0JBQW9CLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLENBQUM7UUFDL0YsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLGFBQWEsQ0FBQyxJQUFJLEVBQUU7WUFDcEMsT0FBTyxDQUFDLFFBQVE7Ozs7WUFBRyxDQUFDLE1BQXNCLEVBQUUsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDbkYsQ0FBQyxDQUFBLENBQUM7U0FDTDtRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7O1lBaENKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixzMENBQXVDO2FBQzFDOzs7O1lBVlEsb0JBQW9CO1lBQ3BCLGlCQUFpQjs7OzZCQVlyQixTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs0QkFDcEUsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFENUMsaURBQStHOztJQUMvRyxnREFBcUY7O0lBR2pGLGdEQUEwQzs7Ozs7SUFDMUMscURBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRGVmYXVsdExheW91dFNlcnZpY2UgfSBmcm9tICcuL2xheW91dC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWdncmVnYXRvclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYWdncmVnYXRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnV0dG9uRGVmaW5pdGlvbiwgVG9vbGJhckFjdGlvblBheWxvYWQgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL2Jhc2UubW9kZWwnO1xyXG5pbXBvcnQgeyBUb29sYmFyQWN0aW9uIH0gZnJvbSAnLi4vc2hhcmVkL2VudW1zL2Jhc2UuZW51bSc7XHJcbmltcG9ydCB7IFN1bW1hcnlFcnJvciB9IGZyb20gJy4uL3NoYXJlZC92YWxpZGF0aW9uL3ZhbGlkYXRpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBLZXlDb25zdCB9IGZyb20gJy4uL3NoYXJlZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGVmYXVsdC10b29sYmFyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90b29sYmFyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERlZmF1bHRUb29sYmFyQ29tcG9uZW50IHtcclxuICAgIEBWaWV3Q2hpbGQoJ2Vycm9yQ29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSkgcHVibGljIGVycm9yQ29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG4gICAgQFZpZXdDaGlsZCgnZXJyb3JUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBlcnJvclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBsYXlvdXRTZXJ2aWNlOiBEZWZhdWx0TGF5b3V0U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9hZ2dyZWdhdG9yU2VydmljZTogQWdncmVnYXRvclNlcnZpY2VcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2FnZ3JlZ2F0b3JTZXJ2aWNlLnN1YnNjcmliZShLZXlDb25zdC5QYWdlQ2hhbmdlZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lcnJvckNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvckNvbnRhaW5lci5jbGVhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQnV0dG9uQ2xpY2tlZChsb2FkZWRDYWxsYmFjazogRnVuY3Rpb24sIGl0ZW06IEJ1dHRvbkRlZmluaXRpb24pIHtcclxuICAgICAgICBsZXQgcGF5bG9hZCA9IG5ldyBUb29sYmFyQWN0aW9uUGF5bG9hZCh7IGFjdGlvbjogaXRlbS5hY3Rpb24sIGxvYWRlZENhbGxiYWNrOiBsb2FkZWRDYWxsYmFjayB9KTtcclxuICAgICAgICBpZiAoaXRlbS5hY3Rpb24gPT09IFRvb2xiYXJBY3Rpb24uU2F2ZSkge1xyXG4gICAgICAgICAgICBwYXlsb2FkLmNhbGxiYWNrID0gKGVycm9yczogU3VtbWFyeUVycm9yW10pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JDb250YWluZXIuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuZXJyb3JUZW1wbGF0ZSwgeyBlcnJvcnM6IGVycm9ycyB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYWdncmVnYXRvclNlcnZpY2UucHVibGlzaCgnVG9vbGJhckJ1dHRvbkNsaWNrZWQnLCBwYXlsb2FkKTtcclxuICAgIH1cclxufVxyXG4iXX0=