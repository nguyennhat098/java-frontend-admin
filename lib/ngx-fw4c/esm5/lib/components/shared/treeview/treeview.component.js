/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/treeview/treeview.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var TreeViewComponent = /** @class */ (function () {
    function TreeViewComponent() {
        this.nodes = [
            {
                id: 1,
                name: 'root1',
                children: [
                    { id: 2, name: 'child1' },
                    { id: 3, name: 'child2' }
                ]
            },
            {
                id: 4,
                name: 'root2',
                children: [
                    { id: 5, name: 'child2.1' },
                    {
                        id: 6,
                        name: 'child2.2',
                        children: [
                            { id: 7, name: 'subsub' }
                        ]
                    }
                ]
            }
        ];
        this.options = {};
    }
    TreeViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-treeview',
                    template: "<tree-root [nodes]=\"nodes\" [options]=\"options\">\r\n    <!-- <ng-template #treeNodeTemplate let-node let-index=\"index\">\r\n        <span><span class=\"fa fa-plus\"></span> {{ node?.data?.name }}</span>\r\n    </ng-template> -->\r\n</tree-root>",
                    styles: [""]
                }] }
    ];
    return TreeViewComponent;
}());
export { TreeViewComponent };
if (false) {
    /** @type {?} */
    TreeViewComponent.prototype.nodes;
    /** @type {?} */
    TreeViewComponent.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvdHJlZXZpZXcvdHJlZXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFFcEU7SUFBQTtRQU9TLFVBQUssR0FBRztZQUNiO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRTtvQkFDUixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtvQkFDekIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7aUJBQzFCO2FBQ0Y7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUU7b0JBQ1IsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7b0JBQzNCO3dCQUNFLEVBQUUsRUFBRSxDQUFDO3dCQUNMLElBQUksRUFBRSxVQUFVO3dCQUNoQixRQUFRLEVBQUU7NEJBQ1IsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7eUJBQzFCO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO1FBQ0ssWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOztnQkFoQ0EsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLG9RQUF3Qzs7aUJBRXpDOztJQTRCRCx3QkFBQztDQUFBLEFBaENELElBZ0NDO1NBMUJZLGlCQUFpQjs7O0lBQzVCLGtDQXVCRTs7SUFDRixvQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrYXRhbmEtdHJlZXZpZXcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90cmVldmlldy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdHJlZXZpZXcuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVWaWV3Q29tcG9uZW50IHtcclxuICBwdWJsaWMgbm9kZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuYW1lOiAncm9vdDEnLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHsgaWQ6IDIsIG5hbWU6ICdjaGlsZDEnIH0sXHJcbiAgICAgICAgeyBpZDogMywgbmFtZTogJ2NoaWxkMicgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNCxcclxuICAgICAgbmFtZTogJ3Jvb3QyJyxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7IGlkOiA1LCBuYW1lOiAnY2hpbGQyLjEnIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgICBuYW1lOiAnY2hpbGQyLjInLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgeyBpZDogNywgbmFtZTogJ3N1YnN1YicgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIF07XHJcbiAgcHVibGljIG9wdGlvbnMgPSB7fTtcclxufVxyXG4iXX0=