/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/form/form-director.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { FormDirectorExtraItemDirective } from './form-director-extra-item.directive';
var FormDirectorComponent = /** @class */ (function () {
    function FormDirectorComponent() {
        this.direction = 'vertical';
        this.alignVertical = true;
    }
    FormDirectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-form-director',
                    template: "<div class=\"form-group\" [ngClass]=\"{'d-md-flex align-items-center': direction === 'horizontal'}\">\r\n  <div *ngIf=\"title\" [ngClass]=\"{'col-sm-4 p-0': direction === 'horizontal' && alignVertical}\">\r\n    <label [ngClass]=\"{'m-b-0' : direction === 'horizontal'}\">{{title}}\r\n      <span *ngIf=\"description\" class=\"katana-tooltip\">\r\n        <span class=\"tooltiptext tooltip-top\">{{description}}</span>\r\n        <i class=\"fa fa-question-circle text-muted\"></i>\r\n      </span>\r\n    </label>\r\n    <label class=\"pull-right\" *ngIf=\"extraLabelItem\">\r\n      <ng-container [ngTemplateOutlet]=\"extraLabelItem.template\"></ng-container>\r\n    </label>\r\n  </div>\r\n  <div class=\"ml-auto\" [ngClass]=\"{'col-sm-8': direction === 'horizontal' && alignVertical}\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>",
                    styles: ["span{white-space:pre-wrap;word-break:break-word}.katana-tooltip{position:relative;overflow:unset;display:inline-block}.katana-tooltip span{white-space:pre-wrap;word-break:break-word}.katana-tooltip.primary .tooltiptext{background-color:#007bff;color:#fff}.katana-tooltip.primary .tooltip-top{box-shadow:none}.katana-tooltip.primary .tooltip-top:after{border-color:#007bff transparent transparent}.katana-tooltip.info .tooltiptext{background-color:#1d9ce7;color:#fff}.katana-tooltip.info .tooltip-top{box-shadow:none}.katana-tooltip.info .tooltip-top:after{border-color:#1d9ce7 transparent transparent}.katana-tooltip.dark .tooltiptext{background-color:#052d3e;color:#fff}.katana-tooltip.dark .tooltip-top{box-shadow:none}.katana-tooltip.dark .tooltip-top:after{border-color:#052d3e transparent transparent}.katana-tooltip .tooltiptext{word-break:break-word;max-width:180px;min-width:120px;line-height:2;word-break:break-word;visibility:hidden;position:absolute;white-space:normal;background-color:#fff;color:#052d3e;text-align:center;padding:5px;border-radius:5px;z-index:1;opacity:0;transition:.3s;font-size:12px;font-weight:500;transform:translateY(20px)}.katana-tooltip .tooltip-top{white-space:pre-wrap;word-break:break-word;box-shadow:1px 3px 9px rgba(0,0,0,.18);bottom:120%;left:50%;margin-left:-60px}.katana-tooltip .tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#fff transparent transparent}.katana-tooltip:hover .tooltiptext{visibility:visible;opacity:1;transform:translateY(0)}"]
                }] }
    ];
    FormDirectorComponent.propDecorators = {
        direction: [{ type: Input }],
        alignVertical: [{ type: Input }],
        title: [{ type: Input }],
        description: [{ type: Input }],
        extraLabelItem: [{ type: Input }]
    };
    return FormDirectorComponent;
}());
export { FormDirectorComponent };
if (false) {
    /** @type {?} */
    FormDirectorComponent.prototype.direction;
    /** @type {?} */
    FormDirectorComponent.prototype.alignVertical;
    /** @type {?} */
    FormDirectorComponent.prototype.title;
    /** @type {?} */
    FormDirectorComponent.prototype.description;
    /** @type {?} */
    FormDirectorComponent.prototype.extraLabelItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1kaXJlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9mb3JtL2Zvcm0tZGlyZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFdEY7SUFBQTtRQU9vQixjQUFTLEdBQThCLFVBQVUsQ0FBQztRQUNsRCxrQkFBYSxHQUFZLElBQUksQ0FBQztJQUlsRCxDQUFDOztnQkFaQSxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsdzFCQUE2Qzs7aUJBRWhEOzs7NEJBR0ksS0FBSztnQ0FDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSztpQ0FDTCxLQUFLOztJQUNWLDRCQUFDO0NBQUEsQUFaRCxJQVlDO1NBTlkscUJBQXFCOzs7SUFDOUIsMENBQWtFOztJQUNsRSw4Q0FBOEM7O0lBQzlDLHNDQUE4Qjs7SUFDOUIsNENBQW9DOztJQUNwQywrQ0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybURpcmVjdG9yRXh0cmFJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3JtLWRpcmVjdG9yLWV4dHJhLWl0ZW0uZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdrYXRhbmEtZm9ybS1kaXJlY3RvcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZm9ybS1kaXJlY3Rvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9mb3JtLWRpcmVjdG9yLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybURpcmVjdG9yQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXJlY3Rpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAndmVydGljYWwnO1xyXG4gICAgQElucHV0KCkgcHVibGljIGFsaWduVmVydGljYWw6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGV4dHJhTGFiZWxJdGVtOiBGb3JtRGlyZWN0b3JFeHRyYUl0ZW1EaXJlY3RpdmU7XHJcbn0iXX0=