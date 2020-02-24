/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/layout/floating-toolbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
export class FloatingToolbarComponent {
    constructor() {
        this.show = false;
        this.widthProcess = 100;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    clickHide() {
        this.show = false;
    }
}
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
FloatingToolbarComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    FloatingToolbarComponent.prototype.show;
    /** @type {?} */
    FloatingToolbarComponent.prototype.widthProcess;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXRpbmctdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xheW91dC9mbG9hdGluZy10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQXlCakYsTUFBTSxPQUFPLHdCQUF3QjtJQUduQztRQUZPLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBVyxHQUFHLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7OztJQUNELFNBQVM7UUFDUCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDBrQ0FBZ0Q7Z0JBRWhELFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsTUFBTSxFQUFFO3dCQUNkLEtBQUssQ0FBQyxNQUFNLEVBQ1YsS0FBSyxDQUFDOzRCQUNKLE1BQU0sRUFBRSxNQUFNO3lCQUNmLENBQUMsQ0FDSDt3QkFDRCxLQUFLLENBQUMsT0FBTyxFQUNYLEtBQUssQ0FBQzs0QkFDSixNQUFNLEVBQUUsT0FBTzt5QkFDaEIsQ0FBQyxDQUNIO3dCQUNELFVBQVUsQ0FBQyxTQUFTLEVBQUU7NEJBQ3BCLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQzt5QkFDN0IsQ0FBQztxQkFDSCxDQUFDO2lCQUNIOzthQUNGOzs7Ozs7SUFHQyx3Q0FBNkI7O0lBQzdCLGdEQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmbG9hdGluZy10b29sYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmxvYXRpbmctdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmxvYXRpbmctdG9vbGJhci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ3Nob3cnLCBbXHJcbiAgICAgIHN0YXRlKCd0cnVlJyxcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICBib3R0b206ICcxNXB4JyxcclxuICAgICAgICB9KVxyXG4gICAgICApLFxyXG4gICAgICBzdGF0ZSgnZmFsc2UnLFxyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIGJvdHRvbTogJy0xMDAlJyxcclxuICAgICAgICB9KVxyXG4gICAgICApLFxyXG4gICAgICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xyXG4gICAgICAgIGFuaW1hdGUoJzQwMG1zIGVhc2UtaW4tb3V0JylcclxuICAgICAgXSlcclxuICAgIF0pLFxyXG4gIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGbG9hdGluZ1Rvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBzaG93OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIHdpZHRoUHJvY2VzczogbnVtYmVyID0gMTAwO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuICBjbGlja0hpZGUoKSB7XHJcbiAgICB0aGlzLnNob3cgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19