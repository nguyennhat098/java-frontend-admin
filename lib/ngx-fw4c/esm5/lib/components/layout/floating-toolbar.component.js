/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/layout/floating-toolbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
var FloatingToolbarComponent = /** @class */ (function () {
    function FloatingToolbarComponent() {
        this.show = false;
        this.widthProcess = 100;
    }
    /**
     * @return {?}
     */
    FloatingToolbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FloatingToolbarComponent.prototype.clickHide = /**
     * @return {?}
     */
    function () {
        this.show = false;
    };
    FloatingToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'floating-toolbar',
                    template: "<div class=\"show-progress-loading\" [class.active]=\"show\">\r\n  <i class=\"fa fa-close icon-top-close\" (click)=\"clickHide()\"></i>\r\n  <div class=\"list-file-loading\">\r\n    <div class=\"file-item\">\r\n      <div class=\"progress\">\r\n        <div class=\"progress-bar progress-bar-warning progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"60\"\r\n          aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]=\"widthProcess\">\r\n          100%\r\n        </div>\r\n      </div>\r\n      <div class=\"file-name\">13775992_268327703538306_4149251120615904572_n.jpg</div>\r\n    </div>\r\n    <div class=\"file-item\">\r\n      <div class=\"progress\">\r\n        <div class=\"progress-bar progress-bar-warning progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"60\"\r\n          aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]=\"widthProcess\">\r\n          100%\r\n        </div>\r\n      </div>\r\n      <div class=\"file-name\">13775992_268327703538306_4149251120615904572_n.jpg</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    animations: [
                        trigger('show', [
                            state('true', style({
                                bottom: '15px',
                            })),
                            state('false', style({
                                bottom: '-100%',
                            })),
                            transition('0 <=> 1', [
                                animate('400ms ease-in-out')
                            ])
                        ]),
                    ],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FloatingToolbarComponent.ctorParameters = function () { return []; };
    return FloatingToolbarComponent;
}());
export { FloatingToolbarComponent };
if (false) {
    /** @type {?} */
    FloatingToolbarComponent.prototype.show;
    /** @type {?} */
    FloatingToolbarComponent.prototype.widthProcess;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXRpbmctdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xheW91dC9mbG9hdGluZy10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRjtJQTBCRTtRQUZPLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBVyxHQUFHLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVqQiwyQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBQ0QsNENBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qiwwa0NBQWdEO29CQUVoRCxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLE1BQU0sRUFBRTs0QkFDZCxLQUFLLENBQUMsTUFBTSxFQUNWLEtBQUssQ0FBQztnQ0FDSixNQUFNLEVBQUUsTUFBTTs2QkFDZixDQUFDLENBQ0g7NEJBQ0QsS0FBSyxDQUFDLE9BQU8sRUFDWCxLQUFLLENBQUM7Z0NBQ0osTUFBTSxFQUFFLE9BQU87NkJBQ2hCLENBQUMsQ0FDSDs0QkFDRCxVQUFVLENBQUMsU0FBUyxFQUFFO2dDQUNwQixPQUFPLENBQUMsbUJBQW1CLENBQUM7NkJBQzdCLENBQUM7eUJBQ0gsQ0FBQztxQkFDSDs7aUJBQ0Y7Ozs7SUFZRCwrQkFBQztDQUFBLEFBakNELElBaUNDO1NBVlksd0JBQXdCOzs7SUFDbkMsd0NBQTZCOztJQUM3QixnREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmxvYXRpbmctdG9vbGJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Zsb2F0aW5nLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Zsb2F0aW5nLXRvb2xiYXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdzaG93JywgW1xyXG4gICAgICBzdGF0ZSgndHJ1ZScsXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgYm90dG9tOiAnMTVweCcsXHJcbiAgICAgICAgfSlcclxuICAgICAgKSxcclxuICAgICAgc3RhdGUoJ2ZhbHNlJyxcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICBib3R0b206ICctMTAwJScsXHJcbiAgICAgICAgfSlcclxuICAgICAgKSxcclxuICAgICAgdHJhbnNpdGlvbignMCA8PT4gMScsIFtcclxuICAgICAgICBhbmltYXRlKCc0MDBtcyBlYXNlLWluLW91dCcpXHJcbiAgICAgIF0pXHJcbiAgICBdKSxcclxuICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmxvYXRpbmdUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgc2hvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyB3aWR0aFByb2Nlc3M6IG51bWJlciA9IDEwMDtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbiAgY2xpY2tIaWRlKCkge1xyXG4gICAgdGhpcy5zaG93ID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==