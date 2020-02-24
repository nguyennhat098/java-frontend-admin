/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/layout/customizer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { DefaultLayoutService } from './layout.service';
var DefaultCustomizerComponent = /** @class */ (function () {
    function DefaultCustomizerComponent(workspaceLayoutService) {
        this.workspaceLayoutService = workspaceLayoutService;
    }
    /**
     * @return {?}
     */
    DefaultCustomizerComponent.prototype.toggleRightbar = /**
     * @return {?}
     */
    function () {
        this.configOpenRightBar = this.configOpenRightBar === 'open' ? '' : 'open';
    };
    DefaultCustomizerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'default-customizer',
                    template: "<div id=\"styleSelector\" class=\"{{configOpenRightBar}}\">\r\n    <div class=\"selector-toggle\">\r\n        <a href=\"javascript:\" (click)=\"toggleRightbar()\"></a>\r\n    </div>\r\n    <ul>\r\n        <li>\r\n            <p class=\"selector-title main-title st-main-title\">Guru able Customizer</p>\r\n            <span class=\"text-muted\">Live customizer with tons of options</span>\r\n        </li>\r\n        <li>\r\n            <p class=\"selector-title\">Main layouts</p>\r\n        </li>\r\n        <li>\r\n            <div class=\"theme-color\">\r\n                <a href=\"javascript:\" (click)=\"workspaceLayoutService.setNavBarTheme('themelight1')\" navbar-theme=\"themelight1\">\r\n                    <span class=\"head\"></span>\r\n                    <span class=\"cont\"></span>\r\n                </a>\r\n                <a href=\"javascript:\" (click)=\"workspaceLayoutService.setNavBarTheme('theme1')\" navbar-theme=\"theme1\">\r\n                    <span class=\"head\"></span>\r\n                    <span class=\"cont\"></span>\r\n                </a>\r\n                <a href=\"javascript:\" (click)=\"workspaceLayoutService.setLayoutType('light')\" layout-type=\"light\">\r\n                    <span class=\"head\"></span>\r\n                    <span class=\"cont\"></span>\r\n                </a>\r\n                <a href=\"javascript:\" (click)=\"workspaceLayoutService.setLayoutType('dark')\" layout-type=\"dark\">\r\n                    <span class=\"head\"></span>\r\n                    <span class=\"cont\"></span>\r\n                </a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>",
                    animations: [
                        trigger('fadeInOutTranslate', [
                            transition(':enter', [
                                style({ opacity: 0 }),
                                animate('400ms ease-in-out', style({ opacity: 1 }))
                            ]),
                            transition(':leave', [
                                style({ transform: 'translate(0)' }),
                                animate('400ms ease-in-out', style({ opacity: 0 }))
                            ])
                        ])
                    ]
                }] }
    ];
    /** @nocollapse */
    DefaultCustomizerComponent.ctorParameters = function () { return [
        { type: DefaultLayoutService }
    ]; };
    return DefaultCustomizerComponent;
}());
export { DefaultCustomizerComponent };
if (false) {
    /** @type {?} */
    DefaultCustomizerComponent.prototype.configOpenRightBar;
    /** @type {?} */
    DefaultCustomizerComponent.prototype.workspaceLayoutService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9taXplci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xheW91dC9jdXN0b21pemVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXhEO0lBcUJJLG9DQUNXLHNCQUE0QztRQUE1QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXNCO0lBQ25ELENBQUM7Ozs7SUFFRSxtREFBYzs7O0lBQXJCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQy9FLENBQUM7O2dCQTNCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsdW5EQUF3QztvQkFFeEMsVUFBVSxFQUFFO3dCQUNSLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRTs0QkFDMUIsVUFBVSxDQUFDLFFBQVEsRUFBRTtnQ0FDakIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO2dDQUNyQixPQUFPLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NkJBQ3RELENBQUM7NEJBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRTtnQ0FDakIsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxDQUFDO2dDQUNwQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NkJBQ3RELENBQUM7eUJBQ0wsQ0FBQztxQkFDTDtpQkFDSjs7OztnQkFsQlEsb0JBQW9COztJQThCN0IsaUNBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQVZZLDBCQUEwQjs7O0lBQ25DLHdEQUFrQzs7SUFHOUIsNERBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IERlZmF1bHRMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9sYXlvdXQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGVmYXVsdC1jdXN0b21pemVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnY3VzdG9taXplci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFtdLFxyXG4gICAgYW5pbWF0aW9uczogW1xyXG4gICAgICAgIHRyaWdnZXIoJ2ZhZGVJbk91dFRyYW5zbGF0ZScsIFtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xyXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwIH0pLFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnNDAwbXMgZWFzZS1pbi1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpXHJcbiAgICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwKScgfSksXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKCc0MDBtcyBlYXNlLWluLW91dCcsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSlcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICBdKVxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERlZmF1bHRDdXN0b21pemVyQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBjb25maWdPcGVuUmlnaHRCYXI6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgd29ya3NwYWNlTGF5b3V0U2VydmljZTogRGVmYXVsdExheW91dFNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZVJpZ2h0YmFyKCkge1xyXG4gICAgICAgIHRoaXMuY29uZmlnT3BlblJpZ2h0QmFyID0gdGhpcy5jb25maWdPcGVuUmlnaHRCYXIgPT09ICdvcGVuJyA/ICcnIDogJ29wZW4nO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==