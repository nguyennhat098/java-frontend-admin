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
var DefaultToolbarComponent = /** @class */ (function () {
    function DefaultToolbarComponent(layoutService, _aggregatorService) {
        this.layoutService = layoutService;
        this._aggregatorService = _aggregatorService;
    }
    /**
     * @return {?}
     */
    DefaultToolbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._aggregatorService.subscribe(KeyConst.PageChanged, (/**
         * @return {?}
         */
        function () {
            if (_this.errorContainer) {
                _this.errorContainer.clear();
            }
        }));
    };
    /**
     * @param {?} loadedCallback
     * @param {?} item
     * @return {?}
     */
    DefaultToolbarComponent.prototype.onButtonClicked = /**
     * @param {?} loadedCallback
     * @param {?} item
     * @return {?}
     */
    function (loadedCallback, item) {
        var _this = this;
        /** @type {?} */
        var payload = new ToolbarActionPayload({ action: item.action, loadedCallback: loadedCallback });
        if (item.action === ToolbarAction.Save) {
            payload.callback = (/**
             * @param {?} errors
             * @return {?}
             */
            function (errors) {
                _this.errorContainer.clear();
                _this.errorContainer.createEmbeddedView(_this.errorTemplate, { errors: errors });
            });
        }
        this._aggregatorService.publish('ToolbarButtonClicked', payload);
    };
    DefaultToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'default-toolbar',
                    template: "<ng-container *ngIf=\"layoutService.hasToolbarItems()\">\r\n  <div class=\"action-bar-footer\">\r\n    <div class=\"action-bar\">\r\n      <ng-container #errorContainer></ng-container>\r\n      <ng-container *ngFor=\"let item of layoutService.getToolbarItems()\">\r\n        <ng-container [ngSwitch]=\"item.controlType\">\r\n          <ng-template ngSwitchDefault>\r\n            <katana-button [title]=\"item.title\" [lazyload]=\"item.lazyload\"\r\n              (clicked)=\"onButtonClicked($event, item)\" [customClass]=\"item.style\"></katana-button>\r\n          </ng-template>\r\n          <ng-template ngSwitchCase=\"'Textbox'\">\r\n          </ng-template>\r\n          <ng-template ngSwitchCase=\"'Dropdown'\">\r\n          </ng-template>\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #errorTemplate let-errors=\"errors\">\r\n    <div *ngIf=\"errors.length\" class=\"error-part\">\r\n      <label class=\"title\">Th\u00F4ng tin sau ch\u01B0a h\u1EE3p l\u1EC7</label>\r\n      <ul class=\"list-error\">\r\n        <li class=\"error-item\" *ngFor=\"let error of errors\">\r\n          <div class=\"small-item\" *ngFor=\"let item of error.messages\">\r\n            {{item}}\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </ng-template>\r\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    DefaultToolbarComponent.ctorParameters = function () { return [
        { type: DefaultLayoutService },
        { type: AggregatorService }
    ]; };
    DefaultToolbarComponent.propDecorators = {
        errorContainer: [{ type: ViewChild, args: ['errorContainer', { read: ViewContainerRef, static: true },] }],
        errorTemplate: [{ type: ViewChild, args: ['errorTemplate', { static: true },] }]
    };
    return DefaultToolbarComponent;
}());
export { DefaultToolbarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xheW91dC90b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQW9CLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFckM7SUFTSSxpQ0FDVyxhQUFtQyxFQUNsQyxrQkFBcUM7UUFEdEMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ2xDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7SUFFakQsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVzs7O1FBQUU7WUFDcEQsSUFBSSxLQUFJLENBQUMsY0FBYyxFQUFFO2dCQUNyQixLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQy9CO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7Ozs7SUFFTSxpREFBZTs7Ozs7SUFBdEIsVUFBdUIsY0FBd0IsRUFBRSxJQUFzQjtRQUF2RSxpQkFTQzs7WUFSTyxPQUFPLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsQ0FBQztRQUMvRixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssYUFBYSxDQUFDLElBQUksRUFBRTtZQUNwQyxPQUFPLENBQUMsUUFBUTs7OztZQUFHLFVBQUMsTUFBc0I7Z0JBQ3RDLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ25GLENBQUMsQ0FBQSxDQUFDO1NBQ0w7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JFLENBQUM7O2dCQWhDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsczBDQUF1QztpQkFDMUM7Ozs7Z0JBVlEsb0JBQW9CO2dCQUNwQixpQkFBaUI7OztpQ0FZckIsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0NBQ3BFLFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQTBCaEQsOEJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTVCWSx1QkFBdUI7OztJQUNoQyxpREFBK0c7O0lBQy9HLGdEQUFxRjs7SUFHakYsZ0RBQTBDOzs7OztJQUMxQyxxREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEZWZhdWx0TGF5b3V0U2VydmljZSB9IGZyb20gJy4vbGF5b3V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBZ2dyZWdhdG9yU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hZ2dyZWdhdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCdXR0b25EZWZpbml0aW9uLCBUb29sYmFyQWN0aW9uUGF5bG9hZCB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbHMvYmFzZS5tb2RlbCc7XHJcbmltcG9ydCB7IFRvb2xiYXJBY3Rpb24gfSBmcm9tICcuLi9zaGFyZWQvZW51bXMvYmFzZS5lbnVtJztcclxuaW1wb3J0IHsgU3VtbWFyeUVycm9yIH0gZnJvbSAnLi4vc2hhcmVkL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tb2RlbCc7XHJcbmltcG9ydCB7IEtleUNvbnN0IH0gZnJvbSAnLi4vc2hhcmVkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkZWZhdWx0LXRvb2xiYXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Rvb2xiYXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdFRvb2xiYXJDb21wb25lbnQge1xyXG4gICAgQFZpZXdDaGlsZCgnZXJyb3JDb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgZXJyb3JDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdlcnJvclRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIGVycm9yVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGxheW91dFNlcnZpY2U6IERlZmF1bHRMYXlvdXRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2FnZ3JlZ2F0b3JTZXJ2aWNlOiBBZ2dyZWdhdG9yU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fYWdncmVnYXRvclNlcnZpY2Uuc3Vic2NyaWJlKEtleUNvbnN0LlBhZ2VDaGFuZ2VkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVycm9yQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ29udGFpbmVyLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25CdXR0b25DbGlja2VkKGxvYWRlZENhbGxiYWNrOiBGdW5jdGlvbiwgaXRlbTogQnV0dG9uRGVmaW5pdGlvbikge1xyXG4gICAgICAgIGxldCBwYXlsb2FkID0gbmV3IFRvb2xiYXJBY3Rpb25QYXlsb2FkKHsgYWN0aW9uOiBpdGVtLmFjdGlvbiwgbG9hZGVkQ2FsbGJhY2s6IGxvYWRlZENhbGxiYWNrIH0pO1xyXG4gICAgICAgIGlmIChpdGVtLmFjdGlvbiA9PT0gVG9vbGJhckFjdGlvbi5TYXZlKSB7XHJcbiAgICAgICAgICAgIHBheWxvYWQuY2FsbGJhY2sgPSAoZXJyb3JzOiBTdW1tYXJ5RXJyb3JbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvckNvbnRhaW5lci5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvckNvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5lcnJvclRlbXBsYXRlLCB7IGVycm9yczogZXJyb3JzIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9hZ2dyZWdhdG9yU2VydmljZS5wdWJsaXNoKCdUb29sYmFyQnV0dG9uQ2xpY2tlZCcsIHBheWxvYWQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==