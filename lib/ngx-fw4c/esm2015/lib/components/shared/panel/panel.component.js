/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/panel/panel.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input } from '@angular/core';
import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations';
import { PanelHeaderDirective } from './panel-header.directive';
export class PanelComponent {
    constructor() {
        this.includeBorder = true;
        this.expand = true;
    }
    /**
     * @return {?}
     */
    toggle() {
        this.expand = !this.expand;
    }
}
PanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-panel',
                template: "<div class=\"katana-container-panel\" [ngClass]=\"{'katana-panel-container' : includeBorder}\">\r\n  <div class=\"katana-panel-wrapper\" *ngIf=\"title\" [ngClass]=\"{'mb-3':includeBorder === false}\">\r\n    <div class=\"d-flex katana-panel-header align-items-center\" [class.active]=\"expand\" (click)=\"toggle()\">\r\n      <div>\r\n        <i [ngClass]=\"icon\"></i>\r\n        <a href='javascript:;'>{{title}}</a>\r\n      </div>\r\n      <i class=\"m-l-5 icofont icofont-simple-down icon-expand\" [class.change]=\"expand\"></i>\r\n    </div>\r\n    <div class=\"right-place vertical\" *ngIf=\"panelHeader\">\r\n      <div class=\"d-none d-lg-block d-md-block\">\r\n        <ng-template *ngIf=\"panelHeader\" [ngTemplateOutlet]=\"panelHeader.template\"></ng-template>\r\n      </div>\r\n      <div class=\"btn-more-action d-md-none d-sm-block\">\r\n        <a href=\"#\"> <i class=\"icofont icofont-settings\"></i>L\u1EF1a ch\u1ECDn</a>\r\n        <div class=\"menu-action\">\r\n          <ng-template *ngIf=\"panelHeader\" [ngTemplateOutlet]=\"panelHeader.template\"></ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row panel-content no-gutters\" [@expand]=\"expand\">\r\n    <div class=\"col-sm-12\" [ngClass]=\"{'px-2 py-2': includeBorder}\">\r\n      <fieldset [disabled]=\"disabled\">\r\n        <ng-content></ng-content>\r\n      </fieldset>\r\n    </div>\r\n  </div>\r\n</div>",
                animations: [
                    trigger('expand', [
                        state('false', style({
                            overflow: 'hidden',
                            height: '0px',
                        })),
                        state('true', style({
                            height: AUTO_STYLE,
                        })),
                        transition('0 <=> 1', [
                            animate('300ms ease-in-out')
                        ])
                    ]),
                ],
                styles: [".katana-form-container{padding-top:20px}.katana-panel-container{margin-bottom:10px}.none-space{padding-top:10px!important;margin-left:0!important;margin-right:0!important}.form-space{padding-top:10px!important;margin-left:-8px!important;margin-right:-8px!important}.panel-space{padding-top:0!important;margin-left:-8px!important;margin-right:-8px!important}.space-margin-none{margin:0!important}.katana-panel-wrapper{width:100%;position:relative}.katana-panel-wrapper .right-place{position:absolute;right:25px;top:-1px;z-index:1}.katana-panel-wrapper .right-place .btn-more-action{position:relative;display:inline-block}.katana-panel-wrapper .right-place .btn-more-action:hover .menu-action{display:block}.katana-panel-wrapper .right-place .btn-more-action a{text-transform:unset}.katana-panel-wrapper .right-place .btn-more-action .menu-action{position:absolute;display:none;z-index:99;right:0}.katana-panel-wrapper .right-place .btn-more-action .menu-action button{min-width:125px;text-align:left}.katana-panel-wrapper .katana-panel-header{cursor:pointer;padding:0 .5rem;height:40px;color:#212529;background:#f0f7ff;position:relative}.katana-panel-wrapper .katana-panel-header a{color:#007bff;font-weight:500;text-decoration:none;text-transform:uppercase}.katana-panel-wrapper .katana-panel-header .icon-expand{position:absolute;right:5px;margin:0;font-size:1rem;display:block;transition:.3s;color:#6c757d;z-index:1}.katana-panel-wrapper .katana-panel-header .icon-expand.change{transform:rotate(180deg)}.katana-container-panel{margin-bottom:2.5rem}.katana-container-panel .panel-content{background-color:#fff}"]
            }] }
];
PanelComponent.propDecorators = {
    panelHeader: [{ type: ContentChild, args: [PanelHeaderDirective, { static: true },] }],
    title: [{ type: Input }],
    icon: [{ type: Input }],
    includeBorder: [{ type: Input }],
    expand: [{ type: Input }],
    disabled: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PanelComponent.prototype.panelHeader;
    /** @type {?} */
    PanelComponent.prototype.title;
    /** @type {?} */
    PanelComponent.prototype.icon;
    /** @type {?} */
    PanelComponent.prototype.includeBorder;
    /** @type {?} */
    PanelComponent.prototype.expand;
    /** @type {?} */
    PanelComponent.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvcGFuZWwvcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBMEJoRSxNQUFNLE9BQU8sY0FBYztJQXhCM0I7UUE0QmtCLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLFdBQU0sR0FBWSxJQUFJLENBQUM7SUFNekMsQ0FBQzs7OztJQUhRLE1BQU07UUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixtNkNBQXFDO2dCQUVyQyxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLFFBQVEsRUFBRTt3QkFDaEIsS0FBSyxDQUFDLE9BQU8sRUFDWCxLQUFLLENBQUM7NEJBQ0osUUFBUSxFQUFFLFFBQVE7NEJBQ2xCLE1BQU0sRUFBRSxLQUFLO3lCQUNkLENBQUMsQ0FDSDt3QkFDRCxLQUFLLENBQUMsTUFBTSxFQUNWLEtBQUssQ0FBQzs0QkFDSixNQUFNLEVBQUUsVUFBVTt5QkFDbkIsQ0FBQyxDQUNIO3dCQUNELFVBQVUsQ0FBQyxTQUFTLEVBQUU7NEJBQ3BCLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQzt5QkFDN0IsQ0FBQztxQkFDSCxDQUFDO2lCQUNIOzthQUNGOzs7MEJBR0UsWUFBWSxTQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtvQkFDbkQsS0FBSzttQkFDTCxLQUFLOzRCQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzs7O0lBTE4scUNBQStGOztJQUMvRiwrQkFBOEI7O0lBQzlCLDhCQUE2Qjs7SUFDN0IsdUNBQThDOztJQUM5QyxnQ0FBdUM7O0lBQ3ZDLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIEFVVE9fU1RZTEUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgUGFuZWxIZWFkZXJEaXJlY3RpdmUgfSBmcm9tICcuL3BhbmVsLWhlYWRlci5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrYXRhbmEtcGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYW5lbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGFuZWwuY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdleHBhbmQnLCBbXHJcbiAgICAgIHN0YXRlKCdmYWxzZScsXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgaGVpZ2h0OiAnMHB4JyxcclxuICAgICAgICB9KVxyXG4gICAgICApLFxyXG4gICAgICBzdGF0ZSgndHJ1ZScsXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgaGVpZ2h0OiBBVVRPX1NUWUxFLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICksXHJcbiAgICAgIHRyYW5zaXRpb24oJzAgPD0+IDEnLCBbXHJcbiAgICAgICAgYW5pbWF0ZSgnMzAwbXMgZWFzZS1pbi1vdXQnKVxyXG4gICAgICBdKVxyXG4gICAgXSksXHJcbiAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhbmVsQ29tcG9uZW50IHtcclxuICBAQ29udGVudENoaWxkKFBhbmVsSGVhZGVyRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgcGFuZWxIZWFkZXI6IFBhbmVsSGVhZGVyRGlyZWN0aXZlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpY29uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIGluY2x1ZGVCb3JkZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBleHBhbmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMuZXhwYW5kID0gIXRoaXMuZXhwYW5kO1xyXG4gIH1cclxufVxyXG4iXX0=