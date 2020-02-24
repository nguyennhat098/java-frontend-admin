/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/treeview/treeview.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class TreeViewComponent {
    constructor() {
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
}
TreeViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-treeview',
                template: "<tree-root [nodes]=\"nodes\" [options]=\"options\">\r\n    <!-- <ng-template #treeNodeTemplate let-node let-index=\"index\">\r\n        <span><span class=\"fa fa-plus\"></span> {{ node?.data?.name }}</span>\r\n    </ng-template> -->\r\n</tree-root>",
                styles: [""]
            }] }
];
if (false) {
    /** @type {?} */
    TreeViewComponent.prototype.nodes;
    /** @type {?} */
    TreeViewComponent.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvdHJlZXZpZXcvdHJlZXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRcEUsTUFBTSxPQUFPLGlCQUFpQjtJQU45QjtRQU9TLFVBQUssR0FBRztZQUNiO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRTtvQkFDUixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtvQkFDekIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7aUJBQzFCO2FBQ0Y7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUU7b0JBQ1IsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7b0JBQzNCO3dCQUNFLEVBQUUsRUFBRSxDQUFDO3dCQUNMLElBQUksRUFBRSxVQUFVO3dCQUNoQixRQUFRLEVBQUU7NEJBQ1IsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7eUJBQzFCO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO1FBQ0ssWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUFoQ0EsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLG9RQUF3Qzs7YUFFekM7Ozs7SUFHQyxrQ0F1QkU7O0lBQ0Ysb0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2F0YW5hLXRyZWV2aWV3JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZXZpZXcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RyZWV2aWV3LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlVmlld0NvbXBvbmVudCB7XHJcbiAgcHVibGljIG5vZGVzID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmFtZTogJ3Jvb3QxJyxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7IGlkOiAyLCBuYW1lOiAnY2hpbGQxJyB9LFxyXG4gICAgICAgIHsgaWQ6IDMsIG5hbWU6ICdjaGlsZDInIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIG5hbWU6ICdyb290MicsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgeyBpZDogNSwgbmFtZTogJ2NoaWxkMi4xJyB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiA2LFxyXG4gICAgICAgICAgbmFtZTogJ2NoaWxkMi4yJyxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHsgaWQ6IDcsIG5hbWU6ICdzdWJzdWInIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICBdO1xyXG4gIHB1YmxpYyBvcHRpb25zID0ge307XHJcbn1cclxuIl19